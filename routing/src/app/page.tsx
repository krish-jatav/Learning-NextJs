import Link from 'next/link'

export default function Home() {
  return (
    <div >
       <div className=' h-screen w-screen flex justify-center items-center'>
        <h1>Home Page | Routing Demo</h1>
      <Link href="/login">
      <h1 className='text-4xl'> Go to Login</h1>
    </Link>
    </div>
    </div>


  )
}