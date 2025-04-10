import { useField } from 'formik'
import React from 'react'

const TextInput = ({ label, ...props }) => {
    const [fields, meta] = useField(props)
    const styles = props?.block === 'true' ? 'outline-0 border-2 bg-white w-full px-4 py-2 rounded placeholder:text-black' : 'outline-0 border-2 border-[#124AC3] w-full placeholder:text-center px-4 py-2 rounded'
  return (
    <div>
      {
        props.showlabel === 'true' && <label htmlFor="">{label}</label>
        }
      <input type="text" {...fields} {...props} className={`${styles}`}/>
      {
        meta.touched && meta.error &&
        <p className='text-red-600 text-[0.75rem] -mt-0.5 text-right'>{meta.error}</p>
      }
    </div>
  )
}

export default TextInput
