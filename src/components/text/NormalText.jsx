import React from 'react'

const NormalText = ({ children, as='p', color='text-black', font='poppins', size='26px'}) => {
    const Tag = as;
  return (
    <Tag className={`font-[300px] text-[${size}] font-[${font}] ${color}`}>
      {children}
    </Tag>
  )
}

export default NormalText
