import { personData, slugToName, nameToSlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PersonalCardClient from './PersonalCardClient'
import PasswordForm from './PasswordForm'
import { cookies } from 'next/headers'
import { verifyToken, COOKIE_NAME } from '@/lib/auth'

interface PersonalPageProps {
  params: {
    slug: string
  }
}

// This page reads cookies() on the server, so it must be rendered dynamically.
export const dynamic = 'force-dynamic'

export default function PersonalPage({ params }: PersonalPageProps) {
  const name = slugToName(params.slug)

  // If name is invalid or no data, return 404 early so `name` is non-null afterwards
  if (!name || !personData[name]) {
    notFound()
  }

  const personInfo = personData[name as string]

  // server-side cookie check
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  const valid = token ? verifyToken(token) === params.slug : false

  if (!valid) {
    return (
      // render password form client-side
      <div className="container">
        <h2>Thiệp được bảo vệ bằng mật khẩu</h2>
        {/* PasswordForm is a client component */}
        <PasswordForm slug={params.slug} />
      </div>
    )
  }

  return <PersonalCardClient name={name as string} personInfo={personInfo} />
}

// Pre-render all personal pages at build time
export function generateStaticParams() {
  const slugs = Object.keys(personData).map((n) => ({ slug: nameToSlug(n) }))
  return slugs
}

export function generateMetadata({ params }: PersonalPageProps): Metadata {
  const name = slugToName(params.slug)
  return {
    title: name ? `Thiệp 20/10 - ${name}` : 'Thiệp 20/10',
    description: 'Thiệp chúc mừng ngày 20/10 từ câu lạc bộ FIA',
  }
}
