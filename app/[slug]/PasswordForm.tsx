'use client'

import { useState } from 'react'

export default function PasswordForm({ slug }: { slug: string }) {
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setErr('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password: pw }),
      })
      if (res.ok) {
        // reload to let server-side check the cookie
        window.location.reload()
      } else {
        const j = await res.json()
        setErr(j?.message || 'Sai mật khẩu')
      }
    } catch (e) {
      setErr('Lỗi mạng')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Nhập mật khẩu" aria-label="mật khẩu" />
      <button type="submit" disabled={loading}>{loading ? 'Đang...' : 'Mở thiệp'}</button>
      {err && <div style={{ color: 'red' }}>{err}</div>}
    </form>
  )
}
