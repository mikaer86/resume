import { useState, useEffect } from 'react';

const Contact = () => {
  const formValues = {
    name: '',
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

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(formInput);
    }
  }, [errors]);

  const validation = (input) => {
    const errorMsg = {};
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i;
    if (!input.name) {
      errorMsg.name = 'name is required!';
    } else if (!input.email) {
      errorMsg.email = 'email is required!';
    } else if (!input.phone) {
      errorMsg.phone = 'phone number is required!';
    } else if (!input.subject) {
      errorMsg.subject = 'subject is required!';
    } else if (!input.message) {
      errorMsg.email = 'message is required!';
    } else {
      return errorMsg;
    }
  };

  return (
    <div className='max-w-[1040px] m-auto p-5'>
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
            <p>{errors.name}</p>
            <input
              className='border-none rounded-md p-3 flex'
              type='text'
              name='name'
              value={formInput.name || ''}
              onChange={handleForm}
              aria-label='name'
            />
          </div>

          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='email'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Email
            </label>
            <span>{errors.email}</span>
            <input
              className='border-none rounded-md p-3 flex'
              type='email'
              name='email'
              value={formInput.email || ''}
              onChange={handleForm}
              aria-label='email'
            />
          </div>

          <div className='flex flex-col py-2'>
            <label
              htmlFor='phone'
              aria-labelledby='phone'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Phone Number
            </label>
            <span>{errors.phone}</span>
            <input
              className='border-none rounded-md p-3 flex '
              type='text'
              name='phone'
              value={formInput.phone || ''}
              onChange={handleForm}
              aria-label='phone-number'
            />
          </div>

          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='subject'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Subject
            </label>
            <span>{errors.subject}</span>
            <input
              className='border-none rounded-md p-3 flex'
              type='text'
              name='subject'
              value={formInput.subject || ''}
              onChange={handleForm}
              aria-label='subject'
            />
          </div>
        </div>
        <div className='flex flex-col p-2 py-2'>
          <label
            aria-labelledby='message'
            className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
          >
            Message
          </label>
          <span>{errors.message}</span>
          <textarea
            className='border-2 rounded-md p-3'
            rows='8'
            name='message:'
            value={formInput.message}
            onChange={handleForm}
            aria-label='message'
          />
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
