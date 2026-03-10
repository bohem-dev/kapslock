import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='h-screen w-screen bg-brand-graphite text-brand-white'>
        <Image src='/logo/kapson-sand.svg' alt="" width="64" height={64} />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}