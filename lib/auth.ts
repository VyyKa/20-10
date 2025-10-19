import crypto from 'crypto'

const SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me'
const COOKIE_NAME = 'pc_auth'

export function signToken(payload: string) {
  const hmac = crypto.createHmac('sha256', SECRET)
  hmac.update(payload)
  return `${payload}.${hmac.digest('hex')}`
}

export function verifyToken(token: string) {
  try {
    const [payload, sig] = token.split('.')
    const hmac = crypto.createHmac('sha256', SECRET)
    hmac.update(payload)
    const expected = hmac.digest('hex')
    return expected === sig ? payload : null
  } catch (e) {
    return null
  }
}

export { COOKIE_NAME }
