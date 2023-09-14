import { useState, useEffect } from 'react';

const Contact = () => {
  const formValues = {
    firstname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const [formInput, setFormInput] = useState({ formValues });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formInput));
    setSubmitted(true);
  };

  const validation = (input) => {
    const errorMsg = {};
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i;

    if (!input.firstname) {
      errorMsg.firstname = 'Name is required!';
    }
    if (!input.email) {
      errorMsg.email = 'Email is required!';
    } else if (!regex.test(!input.email)) {
      errorMsg.email = 'The Email is not valid';
    }
    if (!input.subject) {
      errorMsg.subject = 'Subject is required!';
    }
    if (!input.message) {
      errorMsg.email = 'Message is required!';
    }

    return errorMsg;
  };

  return (
    <div data-id='Contact' className='max-w-[1040px] m-auto p-5'>
      <h1 className='text-3xl font-semibold text-[#FCFCFC]  m-auto text-center'>
        Contact
      </h1>
      <form
        autoComplete='on'
        onSubmit={handleSubmit}
        action='https://getform.io/f/11e63c77-22a5-4f7f-abd8-9b8dd8c2a5ae'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md: grid-cols-2 gap-4 w-full p-2'>
          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='name'
              className='uppercase text-sm text-[#FCFCFC]  font-semibold p-2'
            >
              Name
            </label>

            <input
              className='border-none rounded-md p-3 flex'
              type='text'
              name='firstname'
              value={formInput.firstname || ''}
              onChange={handleForm}
              aria-label='firstname'
            />
            {errors.firstname && (
              <p className='text-red-700'>{errors.firstname}</p>
            )}
          </div>

          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='email'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Email
            </label>

            <input
              className='border-none rounded-md p-3 flex'
              type='email'
              name='email'
              value={formInput.email || ''}
              onChange={handleForm}
              aria-label='email'
            />
            {errors.email && <p className='text-red-700'>{errors.email}</p>}
          </div>

          <div className='flex flex-col py-2'>
            <label
              htmlFor='phone'
              aria-labelledby='phone'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Phone Number
            </label>
            <input
              className='border-none rounded-md p-3 flex '
              type='text'
              name='phone'
              value={formInput.phone || ''}
              onChange={handleForm}
              aria-label='phone-number'
            />
            {errors.phone && <p className='text-red-700'>{errors.phone}</p>}
          </div>

          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='subject'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Subject
            </label>

            <input
              className='border-none rounded-md p-3 flex'
              type='text'
              name='subject'
              value={formInput.subject || ''}
              onChange={handleForm}
              aria-label='subject'
            />
            {errors.subject && <p className='text-red-700'>{errors.subject}</p>}
          </div>
        </div>
        <div className='flex flex-col p-2 py-2'>
          <label
            aria-labelledby='message'
            className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
          >
            Message
          </label>
          <textarea
            className='border-2 rounded-md p-3'
            rows='8'
            name='message:'
            value={formInput.message}
            onChange={handleForm}
            aria-label='message'
          />
          {errors.message && (
            <p className='text-red-700 font-medium '>{errors.message}</p>
          )}
          <button
            className=' text-md text-[#FCFCFC] font-semibold rounded-md p-4 mt-4 border-none bg-cyan-900'
            type='submit'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
