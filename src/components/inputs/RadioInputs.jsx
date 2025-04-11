import React from 'react'
import { useField } from 'formik'

const RadioInputs = ({ label, ...props}) => {
    const [field, meta] = useField({...props, type:'radio'})

    
    return (
      <div className='flex items-center gap-1'>
        <div>
          <input type="radio" {...field} {...props} value={label}/>
          <label htmlFor={props.id || props.label}>{label}</label>
        </div>
      </div>
    )
}

export default RadioInputs
