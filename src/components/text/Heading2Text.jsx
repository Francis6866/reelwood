import React from 'react'

const Heading2Text = ({ children, as='p', color='text-black', font='poppins', size='35px'}) => {
    const Tag = as;
    return (
      <Tag className={`text-[${size}] font-[500] ${color} font-[${font}]`}>
        {children}
      </Tag>
  )
}

export default Heading2Text
