import React from 'react'

const SmallText = ({children, as='p', color='text-black', font='poppins', size='16px'}) => {
    const Tag = as;
  return (
    <Tag className={`text-[${size}] font-[300] ${color} font-[${font}]`}>
      {children}
    </Tag>
  )
}

export default SmallText
