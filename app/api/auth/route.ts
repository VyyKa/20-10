import { NextResponse } from 'next/server'
import { personData, nameToSlug } from '@/lib/data'
import { signToken, COOKIE_NAME } from '@/lib/auth'

export async function POST(request: Request) {
  const body = await request.json()
  const { slug, password } = body || {}
  if (!slug || !password) return NextResponse.json({ ok: false }, { status: 400 })

  // find person by slug -> name
  // Use the canonical nameToSlug so slug generation/lookup matches exactly
  const name = Object.keys(personData).find((n) => nameToSlug(n) === slug)

  if (!name) return NextResponse.json({ ok: false }, { status: 404 })

  const person = personData[name]
  if (person.password !== password) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const token = signToken(slug)
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 })
  return res
}
