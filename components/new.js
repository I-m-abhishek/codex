'use client';
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
let navitem=[
  {id:1 ,name:"Home" , link:"/"},
  {id:2 ,name:"Blogs", link:"/blogs"},
  {id:3 ,name:"Add Blog", link:"/addblog"},
  {id:4 ,name:"Contact Us" , link:"/contactus"},

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const handleclick = ()=>{
  setMobileMenuOpen(false);
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Solar Power Predictor</span>
            <img className="h-8 w-auto" src="./solar-power-predictor-high-resolution-logo-black-transparent.png" alt="SPP" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {
          navitem.map((navitem)=>{
           
            return <Link  key={navitem.id} href={navitem.link} className="    hover:text-emerald-500  font-semibold text-1xl leading-6 mx-6 text-gray-900 " >
            {navitem.name}
          </Link>
        
           
           
          })
          }
          
        </Popover.Group>  
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Solar Power Predictor</span>
              <img
                className="h-8 w-auto"
                src="./solar-power-predictor-high-resolution-logo-black-transparent.png"
                alt="SPP"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  navitem.map((navitem)=>{
                  return <Link
                  href={navitem.link}
                  key={navitem.id}
                  // onClick={handleclick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                  {navitem.name}
                  </Link>
                
                  
                   
                  })
                }
               
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
