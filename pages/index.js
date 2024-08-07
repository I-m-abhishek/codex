import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Snap from '@/components/snap'
// search bar in blogs page or overall page
// read more button activate with slug 

// remove images which are not used\\
// explore all articles button size change 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeX</title>
        <meta name="description" content="Dive into the world of coding with our collaborative blog platform! At CodeX, we believe in the power of shared knowledge and community-driven content. Whether you're a seasoned developer, a coding enthusiast, or just starting your journey, our website is the perfect place for you to learn, share, and grow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className="h-screen flex" style={{
          backgroundImage:
            ' url("./wave-haikei-new.svg")',
        }}> 
          <div className='sm:basis-2/3'>
          <div className='rounded-xl mx-2  flex justify-center items-center'>
          <span className='leading-normal text-center text-4xl md:text-8xl md:leading-normal sm:text-7xl sm:leading-normal lg:text-8xl xl:text-9xl lg:leading-normal font-black bg-clip-text text-[#FFFDD0] mt-2 2xl:mt-10'>CodeX</span>
          </div>
          <div className='flex items-center justify-center'>
          <p className='text-white hidden md:block m- sm:mr-10 md:mr-7 lg:mr-10 sm:ml-8 md:ml-13  xl:ml-24 text-2xl text-justify m-6 md:mt-4 xl:mt-6 2xl:mt-11'>
         Discover the world of coding at <Link className='font-bold text-[#FFFDD0]' href="/">CodeX</Link>, where knowledge meets innovation. Dive into our collection of insightful blogs that cater to all levels of expertise. From beginner-friendly tutorials to advanced programming insights, <Link className='font-bold text-[#FFFDD0]' href="/">CodeX</Link>  is your ultimate resource for staying updated, enhancing skills, and connecting with a vibrant coding community. Join us on a journey of continuous learning and exploration in the dynamic realm of coding.
          </p>
          <p className='text-white md:hidden sm:mr-10 sm:ml-8 md:ml-13  lg:ml-20 text-2xl text-justify m-6 '>
          Explore coding at <Link className='font-bold text-[#FFFDD0]' href="/">CodeX</Link>, merging knowledge with innovation. Delve into our diverse blog collection, catering to all skill levels. From beginner tutorials to advanced insights, <Link className='font-bold text-[#FFFDD0]' href="/">CodeX</Link> is your go-to resource. Join our vibrant coding community for continuous learning and exploration.
          </p>
          </div>
          </div>
          <div className='sm:basis-1/3 hidden sm:block sm:mr-5 sm:mt-28 md:mt-24 md:mr-10 lg:mr-24 lg:mt-20 xl:mt-16 2xl:mt-14'>
            
          <svg id="sw-js-blob-svg" className='md:h-72 md:w-72 lg:h-96 lg:w-96' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
       <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
          <image height="1" width="1" preserveAspectRatio="none" xlinkHref="./codex-1.jpg" />
        </pattern>
      </defs>
      <path
        fill="url(#pattern1)"
        d="M24.5,-36.4C31.2,-33.7,35.8,-26.1,37.5,-18.3C39.2,-10.5,38,-2.6,37,5.4C36,13.5,35.3,21.7,31.4,28.3C27.4,34.8,20.3,39.7,12.3,42.2C4.4,44.6,-4.3,44.6,-12.3,42.1C-20.2,39.6,-27.3,34.8,-31.6,28.3C-36,21.8,-37.4,13.7,-38.3,5.7C-39.1,-2.3,-39.4,-10.2,-36.5,-16.8C-33.7,-23.5,-27.9,-28.9,-21.3,-31.6C-14.7,-34.3,-7.3,-34.4,0.8,-35.5C8.9,-36.7,17.7,-39.1,24.5,-36.4Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: 'all 0.3s ease 0s' }}
      />
    </svg>

          </div>                    
        
        </div>
        <div className='bg-white dark:text-black p-1  sm:p-2 sm:pl-20 sm:pr-20'>
       
        <div className='bg-white dark:text-black'>
             <p className='text-center text-2xl md:text-4xl font-semibold'>Explore Our Top Articles</p>
            <hr className='m-7 mt-4 border-2 border-blue-500 cursor-pointer hover:border-red-500 duration-500' />




            <div className='flex'>         
           <div  className='m-2'>
               <h1 className='font-bold text-center text-2xl mb-2'>How to Push Code to GitHub: A Step-by-Step Guide</h1>
               <hr className=' border-black cursor-pointer'/>
        <article className='text-lg '>
          
        <p>Pushing your code to GitHub is an essential step in collaborating with others and keeping track of your project's history. In this guide, we'll walk you through the process step by step.</p>

        <h2><strong>1. Initialize Git Repository</strong></h2>
        <p>If you haven't already initialized a Git repository in your project directory, you can do so by running the following command in your terminal:</p>
        <pre className='bg-gray-800 text-white p-3 rounded-lg mt-1 mb-1 min-w-0 overflow-x-auto'><code className="whitespace-pre-wrap">git init</code></pre>

        <h2><strong>2. Add Remote Repository URL</strong></h2>
        <p>Next, you'll need to add the URL of your GitHub repository as a remote to your local repository. You can do this using the <code>git remote add</code> command. Replace <code>&lt;repository_url&gt;</code> with the URL of your GitHub repository:</p>
        <pre className='bg-gray-800 text-white p-3 rounded-lg mt-1 mb-1 min-w-0 overflow-x-auto'><code className="whitespace-pre-wrap">git remote add origin &lt;repository_url&gt;</code></pre>

        <h2><strong>3. Stage Changes</strong></h2>
        <p>Use the <code>git add</code> command to stage the changes you want to commit. This command tells Git which files you want to include in the next commit.....</p>

       
    </article>
<button className='rounded-md bg-[#364de7] hover:bg-[#3247d3] active:bg-[#3d56f9] text-white   font-semibold p-1'> 
  <a href="https://codex-world.vercel.app/blogposts/6683ba3acc17d4400fac9b3f">Read More</a>
</button>

          </div>
         <div className='hidden md:flex md:flex-col xl:flex-row m-2 mt-5'>
          <img className='xl:w-1/2 xl:h-full md:w-full md:h-1/2 xl:mr-1 mt-5 rounded-md object-cover'  src="./github-img.jpg" alt="CodeX" />
          <img className='xl:w-1/2 xl:h-full md:w-full md:h-1/2 xl:ml-1 mt-1 xl:mt-0 rounded-md ' src="./github-push.jpg" alt="CodeX" />
          </div>
           
         </div>
         
        </div>

         
<hr className='m-7 mt-9 border-dotted border-[#908b8b] cursor-pointer hover:border-red-500 duration-500' />
        <div className='flex  mb-5 md:mb-9 lg:mb-16'>
          <div className='hidden md:flex md:flex-col xl:flex-row m-2 mt-5 mr-5'>
          <img className='xl:w-1/2 xl:h-full md:w-full md:h-1/2 xl:mr-1 rounded-md ' src="./c++new.avif" alt="CodeX" />
          <img className='xl:w-1/2 xl:h-full md:w-full md:h-1/2 xl:ml-1 xl:mt-5 md:mt-1 rounded-md' src="./home-page-2.jpg" alt="CodeX" />
          </div>
          
          <div  className='m-2'>
               <h1 className='font-bold text-center text-2xl mb-2'>Mastering Competitive Programming in C++: Techniques and Strategies for Success</h1>
               <hr className=' border-black cursor-pointer'/>
    <article className='text-lg'>
          <p>Competitive programming requires a combination of strong problem-solving skills, algorithmic knowledge, and efficient coding techniques. Here are some best techniques to conquer competitive programming in C++:</p>

          <h2><strong>1. Master the Basics</strong></h2>
        <p>Ensure you have a solid understanding of basic programming concepts such as variables, loops, conditional statements, functions, and data types in C++.</p>

        <h2><strong>2. Learn Standard Template Library (STL)</strong></h2>
        <p>STL provides a rich set of data structures (like vectors, queues, stacks, sets, maps) and algorithms (like sorting, searching, and manipulating elements) that can greatly simplify coding in competitive programming.</p>

        <h2><strong>3. Understand Algorithms and Data Structures</strong></h2>
        <p>Master essential algorithms and data structures, including sorting algorithms like quicksort and mergesort, searching algorithms such as binary search, dynamic programming, graph algorithms, trees and heaps.</p>

        <h2><strong>4. Practice Problem Solving</strong></h2>
        <p>Regularly solve practice problems on online coding platforms like Codeforces, LeetCode, HackerRank, or CodeChef......
        </p>

    
    </article>


<button className='rounded-md bg-[#364de7] hover:bg-[#3247d3] active:bg-[#3d56f9] text-white   font-semibold p-1'> 
  <a href="https://codex-world.vercel.app/blogposts/6684e8009fac78c954781716">Read More</a>
</button>
          </div>
          

         </div>
        <br  />
        <div className='ml-2 mr-2 mt-5'>
          <button className='w-full rounded-md bg-[#364de7] hover:bg-[#3247d3] active:bg-[#3d56f9] text-white text-xl sm:text-2xl lg:text-3xl font-semibold p-2 '>
            <Link href="/blogs">Explore All Articles</Link>
          </button>
        </div>
        
        </div>
        <Snap msg={"index"}/>
      </main>
    </>
  )
}
