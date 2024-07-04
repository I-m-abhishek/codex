'use client';
import { React, useState } from 'react'
import { Switch } from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import Head from 'next/head';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function contact() {
    const [agreed, setAgreed] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [geterror , setGeterror] = useState(false)
    const [contactform, setContactform] =useState({
        first_name : "",
        last_name : "",
        company : "",
        email: "",
        phone_number:"",
        message:""

    })
    const handleChange =(e)=>{
        setContactform({
            ...contactform,
            [e.target.name]: e.target.value,
          });
    }
    const  handleSubmit = async (e)=>{
      setFlipped(true);
     e.preventDefault();
     try {
      const response = await fetch('/api/contactsave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactform),
      });
      // console.log(response)
      // console.log(response.ok);
      if (!response.ok) {
        setGeterror(true);
        console.log("response is not ok")
      }
      else {
        const data = await response.json();
        // console.log("data" ,data);
        // console.log(data.success);
        if (!data.success){
          setGeterror(true);
        }
        setContactform({first_name : "",
        last_name : "",
        company : "",
        email: "",
        phone_number:"",
        message:""});
        setAgreed(false);
      }
    } catch (error) {
      console.error('Error during the fetch operation:', error);
      setGeterror(true);
      setContactform({first_name : "",
        last_name : "",
        company : "",
        email: "",
        phone_number:"",
        message:""});
        setAgreed(false);
      // Handle the error as needed
    }}




  return (
    <>
  <Head>
        <title>CodeX - Contact US</title>
  </Head>
    <div
        className="bg-cover p-2 sm:p-24 sm:pt-1 sm:pb-1 "
        style={{
          backgroundImage:
            ' url("../contact-bg.jpg")',
        }}
      >
      <div data-aos="fade-down" className=" sm:pt-6 md:pt-8 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's Connect</h2>
        <p className="mt-2 text-2xl leading-8 font-semibold text-gray-600">
        Get in Touch: Connect with Us for Solar Solutions and Assistance!
        </p>
      </div>
        <div data-aos="fade-up" className=' group grid perspective-800   transform-style-3d  '>
        <div className= {` w-full rounded-md p-2 sm:p-4 mx-auto mt-16 mb-8 max-w-xl sm:mt-20 backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)]  bg-white/20 row-start-1 row-end-1 col-start-1 col-end-1 backface-hidden transform transition duration-[1.2s]    ${flipped ? 'rotate-y-180' : " " } `}>
       <form onSubmit={handleSubmit} method="POST" className="">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
          <div>
            <label htmlFor="first_name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                value={contactform.first_name}
                onChange={handleChange}
                className="dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                value={contactform.last_name}
                onChange={handleChange}
                className="dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={contactform.company}
                onChange={handleChange}
                className="dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={contactform.email}
                onChange={handleChange}
                className="dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone_number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  onChange={handleChange}
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-5 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value="+91">IN</option>
                  <option value="+1">US</option>
                  <option value="+44">UK</option>
                </select>
                
              </div>
              <input
                required
                type="tel"
                name="phone_number"
                id="phone_number"
                autoComplete="tel"
                value={contactform.phone_number}
                onChange={handleChange}
                className="dark:text-white block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={contactform.message}
                onChange={handleChange}
                rows={4}
                className="dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            disabled={!agreed}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
        </div>
        <div className={`w-full rounded-md p-2 sm:p-4 mx-auto mt-16 mb-8 max-w-xl sm:mt-20 backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)]  bg-white/20  row-start-1 row-end-1 col-start-1 col-end-1 transform transition duration-[1.2s] backface-hidden   ${flipped ? ' rotate-y-0 ' : " -rotate-y-180 " } `}>
            <button 
              
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setFlipped(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            { !geterror ? (
                  <div className='h-full p-1 pb-16 md:pb-20 flex justify-center items-center'>
                  <div className='flex flex-col justify-center items-center'> 
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 ">
        <path fillRule="evenodd" d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z" clipRule="evenodd" />
      </svg>
      <p className='font-bold text-center pt-6 text-2xl md:text-3xl'>Thanks for getting in touch! We'll be in contact with you shortly.
      </p>
      </div>
      </div>            
            ):(
              <div className=' h-full p-1 pb-16 md:pb-20 flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="red" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
    <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
  </svg>
  
  <p className='font-bold text-center text-red-500 pt-6 text-2xl md:text-3xl'>
Oops! It seems there is an error. Please try again later.
  </p>
  </div>
  </div>
            )  
            } 
            

           


      
      </div>
      </div>
    </div>
    

  </>)
}

export default contact