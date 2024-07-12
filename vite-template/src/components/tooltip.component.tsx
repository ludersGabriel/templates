import React from 'react'

type TooltipProps = {
  children: React.ReactNode
  text: string
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className='tooltip-container'>
      {children}
      <span className='tooltip-text'>{text}</span>
    </div>
  )
}

export default Tooltip
