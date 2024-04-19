import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"
import Snap from '@/components/snap';
// comment section add which willl require login and signup to make comment 
// loader where ever we used loading //
// i think we have used loading in bottom of one page and one time top of the page
//  we need to change addblog functionality
// if we are clicking on image of author or coding in blog section then it is redirecting to homepage
// this type all links make correct and  bugs fixing 
const Slug = () => {
  const [blogdetails, setBlogdetails] = useState({});

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../api/getblogdetails/?id=${slug}`);
        const blogdata = await response.json();
        setBlogdetails(blogdata);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };
    console.log("slug");
    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!blogdetails || Object.keys(blogdetails).length === 0) {
    return <div className='h-screen flex items-center justify-center'>
      <div className='h-10 w-10 md:h-20 md:w-20 xl:h-24 xl:w-24 flex items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
      </div>
    </div>;
  }

  return (
    <> <main className='bg-white'>
      <div className='bg-gradient-to-tr from-slate-950/90 via-pink-600/50   to-teal-400/25 min-h-screen'>
        <div className=' sm:pl-4 sm:pr-4 xl:pl-20 xl:pr-20 flex flex-col md:flex-row p-3'>
          <div className='flex flex-col mt-5 basis-3/5'>
            {/* <div className='aspect-video object-cover'> */}
            <img className='rounded-2xl aspect-video object-cover  m-5 ' src={blogdetails.titleimgurl} alt=" Coding Blogs" />
            {/* </div> */}
            <span className=' ml-5 leading-normal text-start font-serif text-4xl text-black' >{blogdetails.title}</span>
           </div>

           <div className=' flex flex-col basis-2/5  m-5'>
              <div className= 'p-1 md:p-5 flex flex-col justify-center items-center '>
                <div className='flex justify-start w-full items-start md:p-3 md:pt-0 md:pb-0'>
                <span className='bg-[#a99f9f] pl-1 pr-1 md:pl-4 md:pr-4  border-spacing-4 rounded-xl p-1 font-bold text-xl'>{blogdetails.categoryTitle}</span>
                </div>
                <p className='text-start  font-serif text-xl text-black pt-1 md:p-3 ' >{blogdetails.description} </p>
                
              </div>
              <div className='flex flex-col '>
                <div>
                <p className='mt-2 md:m-8 md:mb-0 md:mt-2 mb-0 font-semibold text-2xl'>Published on- {blogdetails.date1}</p>
                </div>
                <div className="m-2 ml-0 md:m-8 md:mt-2 flex items-center justify-start gap-x-4">
                  <img src={blogdetails.authorImageUrl} alt="Author Image" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-black text-3xl">
                      <Link href="/">
                        <span className="absolute" />
                        {blogdetails.authorName}
                      </Link>
                    </p>
                    <p className="text-black text-xl ">{blogdetails.authorRole}</p>
                  </div>
                </div>
              </div>
           </div>
          
       </div>
       {/* <hr /> */}
      <div  className='p-2 lg:p-10 lg:pb-0 pt-0 lg:pt-0 '>
        <p className=' p-4 lg:p-10  m-1 sm:m-10  font-mono text-justify bg-gray-300/40 dark:bg-gray-800/30'>
          {blogdetails.content}
        </p>
      </div>
    <Snap msg={"slugg"}/>
      </div>
    </main>
    </>
  );
};

export default Slug;
