const Contact = () => {
  return (
    <div className='max-w-[1040px] m-auto p-5'>
      <h1 className='text-3xl font-semibold text-[#FCFCFC]  m-auto text-center'>
        Contact
      </h1>
      <form
        action='https://getform.io/f/11e63c77-22a5-4f7f-abd8-9b8dd8c2a5ae'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md: grid-cols-2 gap-4 w-full p-2'>
          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='name'
              className='uppercase text-sm   text-[#FCFCFC]  font-semibold p-2'
            >
              Name
            </label>
            <input
              className='border-none rounded-md p-3 flex'
              type='text'
              name='name'
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
            <input
              className='border-none rounded-md p-3 flex'
              type='email'
              name='email'
              aria-label='email'
            />
          </div>

          <div className='flex flex-col py-2'>
            <label
              aria-labelledby='phone-number'
              className='uppercase text-sm text-[#FCFCFC] font-semibold p-2'
            >
              Phone Number
            </label>
            <input
              className='border-none rounded-md p-3 flex '
              type='text'
              name='phone number'
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
            <input
              className='border-none rounded-md p-3 flex'
              type='text'
              name='subject'
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
          <textarea
            aria-labelledby='message'
            className='border-2 rounded-md p-3'
            rows='8'
            name='message:'
            aria-label='message'
          />
          <button
            className=' text-md text-[#FCFCFC] font-semibold rounded-md p-4 mt-4 border-none bg-cyan-900'
            type='submit'
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
