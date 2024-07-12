import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export default function Modal({ children, onClose, title }: Props) {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [onClose])

  return (
    <div className='modal' onClick={onClose}>
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
