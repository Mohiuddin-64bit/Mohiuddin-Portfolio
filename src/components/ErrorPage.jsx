import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-8xl font-bold'>404</h2>
      <p className='text-2xl font-semibold'>Something's missing</p>
      <p className='text-xl max-w-[80ch] text-center px-12 font-medium py-3'>Sorry, we can't find that page. You'll find lots to explore on the home page.
        <div className='text-center mt-4'>
          <button
            className='btn-primary hover:underline'
            onClick={() => window.location.reload()}
          >Refresh</button></div>
      </p>

    </div>
  )
}

export default ErrorPage