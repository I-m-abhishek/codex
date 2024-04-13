import React from 'react'
import { Fragment,useEffect,  useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import {XMarkIcon} from '@heroicons/react/24/outline'

function Dialogbox({dialogopen ,err, handleChangePropValue}) {
   
   const [open, setOpen] = useState(dialogopen)
   const [errr, setErrr]= useState(err);

  const X = ()=>{
    setOpen(false);
    handleChangePropValue(false);
  }

   useEffect(() => {
    setOpen(dialogopen);
    setErrr(err);
  }, [dialogopen ,err]);

  return (
    <>
    
    <Transition.Root show={open} as={Fragment} >
      <Dialog as="div" className="relative z-10"  onClose={X} >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">                 
                <button 
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={X}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

          { !errr ?  (
                <div className='h-full p-1 pb-16 md:pb-20 flex justify-center items-center'>
                  <div className='flex flex-col justify-center items-center'> 
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 ">
        <path fillRule="evenodd" d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z" clipRule="evenodd" />
      </svg>
      <div className="mt-2">
                        <p className="text-xl text-black">
                        Blog added successfully.
                        </p>
                      </div>
                     </div> 
                     </div>
                     )  :(
              <div className=' h-full p-1 pb-16 md:pb-20 flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="red" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
    <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
  </svg>
  
  <p className='font-bold text-center text-red-500 pt-6 text-2xl md:text-3xl'>
   An error occurred while attempting to add the blog. Please try again later.
  </p>
  </div>
  </div>
            )  
            } 
                                   
                     
              
                <div className=" bg-gray-50 px-4 py-3  ">
                    <div>

                   
                  <Link href="/blogs" >              
                  <button
                    type="button"
                    className=" w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
                    onClick={() => setOpen(false)}
                  >
                    View Blogs
                  </button>
                  </Link>
                  </div>
                  <div>
                  <Link href="/addblog">
                  <button
                    type="button"
                    className="mt-3  w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
                    onClick={() => setOpen(false)}
                  >
                    { !errr ? "Add another Blog" : "Add blog again"}
                
                  </button>
                  </Link>
                  </div>
                </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    
    </>
  )
}

export default Dialogbox