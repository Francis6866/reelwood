import React from 'react'

const Heading1Text = ({ children, as='p', color='text-black', font='poppins', size='48px'}) => {
    const Tag = as;
    return (
      <Tag className={`text-[${size}] font-[400] ${color} font-[${font}]`}>
        {children}
      </Tag>
  )
}

export default Heading1Text
