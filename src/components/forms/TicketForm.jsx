import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextInput from '../inputs/TextInput'
import BlockBtn from '../button/BlockBtn'


const TicketForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: '',
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email().required('Required'),
      phoneNumber: Yup.string().required('Required'),
    })

    
  return (
    <div className='space-y-5 w-[90%] lg:w-full'>
      <header className='text-white my-4'>
        <h3>Your tickets informations will be sent to <br /> your email address</h3>
      </header>

      {/* form */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='space-y-2'>
            <div className='grid grid-cols-2 gap-2'>
              <TextInput
                  id='firstName'
                  name='firstName'
                  showlabel='false'
                  type='text'
                  placeholder="First Name"
                  block='true'
              />

              <TextInput
                  id='lastName'
                  name='lastName'
                  showlabel='false'
                  type='text'
                  placeholder="Last Name"
                  block='true'
              />
            </div>

            <div className='space-y-2'>
              <TextInput
                    id='email'
                    name='email'
                    showlabel='false'
                    type='email'
                    placeholder="Email Address"
                    block='true'
                />

              <TextInput
                    id='emaphoneNumberil'
                    name='phoneNumber'
                    showlabel='false'
                    type='number'
                    placeholder="Phone Number"
                    block='true'
                />
            </div>

            <div>
              <h3 className='text-white'>Gender</h3>
              <div role="group" aria-labelledby="my-radio-group" className='flex gap-5'>
                  <div className='text-white flex items-center gap-1'>
                    <Field id='male' type="radio" name="gender" value="male" />
                    <label htmlFor='male' className='text-white'>Male </label>
                  </div>

                  <div className='text-white flex items-center gap-1'>
                    <Field id='female' type="radio" name="gender" value="female"/>
                    <label htmlFor='female'>Female</label>
                  </div>
              </div>
            </div>

            <div className=''>
              <BlockBtn size='24px' type='submit'>Submit</BlockBtn>
            </div>
        </Form>
      </Formik>
    </div>
  )
}

export default TicketForm