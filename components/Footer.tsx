import React from 'react'

export default function Footer() {
  return <footer className='mb-10 px-4 text-center text-gray-500'>
    <small className='block mb-2 text-xs'>
        &copy; 2024 Soham Gupta. All Rights Reserved.
    </small>
    <p className='text-xs'>
        <span className='font-semibold'>This website was built using: </span>
        <span>Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email, Resend, React Hot Toast, Vercel for Hosting.</span>
    </p>
  </footer>
}
