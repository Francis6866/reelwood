import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import BoldText from '../text/BoldText'
import TextInput from '../inputs/TextInput'
import BlockBtn from '../button/BlockBtn'

const CreateEventForm = () => {
    const initialValues = {
        eventName: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        eventName: Yup.string().required('Required')
    })


  return (
    <div className='bg-white rounded w-[90%] lg:w-1/2 py-6 px-6 space-y-3'>
      <header className='text-center text-nowrap'>
        <BoldText>Create Event Tickects with few clicks</BoldText>
      </header>

      {/* form */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='space-y-2'>
            <TextInput
                id='eventName' 
                name='eventName'
                showlabel='false'
                type='text'
                placeholder="What's the name of  your event ?" 
            />

            <BlockBtn size='24px' type='submit'>Create Event Tickets</BlockBtn>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateEventForm
