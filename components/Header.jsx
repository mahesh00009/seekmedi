
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card } from './ui/card'

const  Header = () => {
  return (
    <div className = 'fixed top-0 w-full border-b bg-background/80  backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60'>  
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href = "/">

            <Image 
            src = '/logo-single.png'
            alt = 'seekmedi'
            width = {200}
            height = {60}
            className='h-10 w-auto object-contain'
            />
            </Link>

            <div className='flex items-center space-x-2'>

            <Link href= "/pricing" >
              <Badge
                variant="outline"
                className="h-10 bg-emerald-900/20 border-emerald-700/30 px-5 py-1"
              >
                <span className="text-emerald-400">
                  Pricing
                </span>
              </Badge>
            </Link>


                 <SignedOut>
              <SignInButton>

                <Button variant="secondary">Signin</Button>

                </SignInButton>
          </SignedOut>

            <SignedIn>
              <UserButton appearance={{
                elements: {
                    avatarBox: "w-10 h-10", 
                    userButtonPopoverCard: "shadow-xl", 
                    userPreviewMainIdentifier: "font-semibold",
                }, 
                
              }} />
            </SignedIn>
            </div>
        </nav>
    </div>
  )
}

export default  Header