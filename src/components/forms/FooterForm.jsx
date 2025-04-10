import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import BoldText from '../text/BoldText'
import TextInput from '../inputs/TextInput'
import BlockBtn from '../button/BlockBtn'
import CheckInput from '../inputs/CheckInput'

const FooterForm = () => {
    const initialValues = {
        email: '',
        promotionalUpdates: false,
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required('Required')
    })


  return (
    <div className=''>
      {/* form */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='space-y-2'>
            <TextInput
                id='email' 
                name='email'
                showlabel='false'
                type='email'
                placeholder="Enter your email address"
                block='true' 
            />

            <CheckInput
                id='promotionalUpdates'
                name='promotionalUpdates'
                label='receive promotional updates'
                type='checkbox'
            />

            <BlockBtn size='24px' type='submit'>Subscribe To Updates</BlockBtn>
        </Form>
      </Formik>
    </div>
  )
}

export default FooterForm
