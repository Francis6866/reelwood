import React from 'react'

const Heading3Text = ({ children, as='p', color='text-black', font='poppins', size='24px'}) => {
    const Tag = as;
    return (
      <Tag className={`text-[${size}] font-[500] ${color} font-[${font}]`}>
        {children}
      </Tag>
  )
}

export default Heading3Text
