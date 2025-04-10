import { useField } from 'formik'
import React from 'react'

const CheckInput = ({label, ...props}) => {
    const [field, meta] = useField({...props, type: 'chexkbox'})

  return (
    <div className='flex items-center gap-1'>
      <input type="checkbox" {...field} {...props}/>
      <label htmlFor={props.id || props.label}>{label}</label>
    </div>
  )
}

export default CheckInput
