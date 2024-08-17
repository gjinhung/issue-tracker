import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <nav className='flex space-x-6'>
        <Link href="/">Logo</Link>
        <ul className='flex space-x-6'>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href='/issuses'>Issues</Link></li>
        </ul>
    </nav>
  )
}
