import React from 'react'

const BoldText = ({ children, color='text-black', as='p', font='poppins', size='35px'}) => {
    const Tag = as
  return (
    <Tag className={`font-[500] text-[${size}] font-[${font}] ${color}`}>
      {children}
    </Tag>
  )
}

export default BoldText
