'use client'

import Link from 'next/link'
import { FaCannabis } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
        <div>
            <FaCannabis size={32} />
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">Tools box</Link>
        </div>
    </nav>
  )
}
