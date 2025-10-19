'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaFacebook, FaGlobe } from 'react-icons/fa'
import { personData, nameToSlug } from '@/lib/data'

export default function HomePage() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [selectedName, setSelectedName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loadingModal, setLoadingModal] = useState(false)

  const handleNameClick = (name: string) => {
    setSelectedName(name)
    setShowModal(true)
    setPassword('')
    setError('')
  }

  const handleSubmit = async () => {
    setError('')
    setLoadingModal(true)
    try {
      const slug = nameToSlug(selectedName)
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ slug, password }),
      })

      if (res.ok) {
        // Auth cookie set by server; redirect to the page which will validate the cookie
        router.push(`/${slug}`)
      } else {
        const j = await res.json().catch(() => ({}))
        setError(j?.message || 'Mật khẩu không đúng! Vui lòng thử lại.')
        setPassword('')
      }
    } catch (e) {
      setError('Lỗi mạng. Vui lòng thử lại.')
    } finally {
      setLoadingModal(false)
    }
  }

  const handleCancel = () => {
    setShowModal(false)
    setSelectedName('')
    setPassword('')
    setError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="container">
      {/* Global Logo */}
      <div className="global-logo-container">
        <a href="https://www.facebook.com/fptinformationassurance" target="_blank" rel="noopener noreferrer" aria-label="FIA Facebook">
          <Image 
            src="/logo.png" 
            alt="FIA Logo" 
            width={60} 
            height={60}
            className="fia-logo"
          />
        </a>
      </div>
      
      <div className="home-page">
        <div className="main-content">
          {/* Main Greeting Card */}
          <div className="main-greeting-card">
            
            {/* Decorative corner elements */}
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
            
            {/* Watercolor background effect */}
            <div className="watercolor-bg"></div>
            
            {/* Splatter effect */}
            <div className="splatter-effect"></div>
            
            {/* Header */}
            <div className="greeting-header">
              <h1 className="greeting-title">FIA CHÚC CÁC CHỊ EM</h1>
              <div className="subtitle">Câu lạc bộ FPT Information Assurance</div>
            </div>
            
            {/* Main Content */}
            <div className="greeting-content">
              <div className="date-container">
                <h2 className="main-date">20/10</h2>
              </div>
              <div className="main-message">
                <p>VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ ❤️❤️</p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="greeting-footer">
              <div className="signature">FROM FIA</div>
              <div className="signature">WITH LOVE</div>
            </div>
          </div>
        </div>

        {/* Name Selection Panel */}
        <div className="name-selection-panel">
          <div className="panel-header">
            <h3>Chọn tên để xem thiệp riêng</h3>
          </div>
          <div className="name-list">
            {Object.keys(personData).map((name) => (
              <div
                key={name}
                className="name-item"
                onClick={() => handleNameClick(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {showModal && (
        <div className="modal show">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Nhập mật khẩu</h3>
              <span className="close" onClick={handleCancel}>&times;</span>
            </div>
            <div className="modal-body">
              <p>Nhập mật khẩu để xem thiệp của <span style={{fontWeight: 600, color: '#d63384'}}>{selectedName}</span></p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập mật khẩu..."
                autoComplete="off"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-comfortaa)',
                }}
                autoFocus
              />
              {error && (
                <div style={{
                  color: '#dc3545',
                  fontSize: '0.9rem',
                  marginTop: '8px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-comfortaa)',
                  minHeight: '20px'
                }}>
                  {error}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                onClick={handleSubmit}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-comfortaa)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #d63384, #ff6b9d)',
                  color: 'white'
                }}
                disabled={loadingModal}
              >
                {loadingModal ? 'Đang xác thực...' : 'Xác nhận'}
              </button>
              <button
                onClick={handleCancel}
                style={{
                  padding: '10px 20px',
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-comfortaa)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: '#f8f9fa',
                  color: '#6c757d'
                }}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Hearts Animation - keep but send behind content */}
      <div className="floating-hearts">
        <div className="heart heart-1">💖</div>
        <div className="heart heart-2">🌸</div>
        <div className="heart heart-3">🌺</div>
        <div className="heart heart-4">💕</div>
        <div className="heart heart-5">💖</div>
        <div className="heart heart-6">💗</div>
      </div>
      {/* Footer Social Links */}
      <div className="footer-bar">
        <a href="https://www.facebook.com/fptinformationassurance" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaFacebook className="footer-icon" />
          <span className="footer-text">/fptinformationassurance</span>
        </a>
        <a href="https://fia.io.vn" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGlobe className="footer-icon" />
          <span className="footer-text">fia.io.vn</span>
        </a>
      </div>
    </div>
  )
}