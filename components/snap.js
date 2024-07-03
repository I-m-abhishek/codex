import {React,useEffect,useState} from 'react'
import Link from "next/link"

function Snap({msg}) {
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [errr,setErrr] = useState(false);
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/getrecentblogs`);
            const newblogs = await response.json();
            if (response.ok) {
              setRecentBlogs(newblogs);
            }
          } catch (error) {
            setErrr(true);
            console.error('Error fetching blog details:', error);
          }
        };
        
        fetchData();
        

      }, []);

  return (
   <>
      {
        !errr && recentBlogs.length!=0 ? (

    
      <div className=' flex flex-col p-1 sm:p-2 m-1 mb-0 lg:p-10 sm:pt-0 sm:m-10 sm:mb-0 sm:mt-0'>
       <div className='flex justify-center items-center  '>
         <p className='dark:text-black leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold bg-[#f0f2f7] mb-3 p-3 pt-2 pb-3 md:pl-5 md:pr-5 rounded-full '>
            Our Recent Blogs
          </p>
       </div>
      <div className="relative  items-center snap-x flex gap-6   w-full overflow-x-auto">
      
      {recentBlogs.map((recentBlogs) => {
          return <>
  <div className="flex flex-col snap-center shrink-0 pb-1 mt-2"> 
        
  <article key={recentBlogs._id} className=" bg-[#F8F8FF] rounded-xl flex max-w-xl flex-col items-start justify-between">
                <div className=' h-40 w-80 sm:h-48 sm:w-96' >
                <img className=" sm:max-h-48 sm:max-w-96 h-full w-full object-cover rounded-xl " src={recentBlogs.titleimgurl} alt="Coding Blogs" loading="lazy" onError={(e) => { e.target.src = '/errorimg.jpg' }} />
                </div>
                <div className="p-1 pt-0 flex items-center gap-x-4 text-xs max-h-48 max-w-96">
                <time dateTime={recentBlogs.datetime1} className="text-gray-500">
                    {recentBlogs.date1}
                  </time>
                  <a
                    href={`/blogposts/${encodeURIComponent(recentBlogs._id)}`}
                    className="line-clamp-1 mt-1 max-h-40 max-w-80 sm:max-w-96 sm:max-h-48 relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {recentBlogs.categoryTitle}
                  </a>
                </div>
                <div className=" p-1 pt-0 group relative max-h-40 max-w-80  sm:max-h-48 sm:max-w-96">
                  <h3 className="line-clamp-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blogposts/${encodeURIComponent(recentBlogs._id)}`}>
                      <span className="absolute inset-0" />
                      {recentBlogs.title}
                    </Link>
                  </h3>
                  <p className="line-clamp-1 text-sm leading-6 text-gray-600">{recentBlogs.description}</p>
                </div>
                <div className="p-1 pt-0 max-h-40 max-w-80  sm:max-h-48 sm:max-w-96 relative mt-2 flex items-center gap-x-4">
                  <img src={recentBlogs.authorImageUrl} alt="Author" loading="lazy" onError={(e) => { e.target.src = '/errorauthor.jpg' }} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={`/blogposts/${encodeURIComponent(recentBlogs._id)}`}>
                        <span className="absolute inset-0" />
                        {recentBlogs.authorName}
                      </Link>
                    </p>
                    <p className="text-gray-600">{recentBlogs.authorRole}</p>
                  </div>
                </div>
              </article>
        

  </div>
  
      </>
    }) }
    </div>
</div>
 )
 : (
  <div className=' flex items-center justify-center'>
    <div className='h-10 w-10 md:h-20 md:w-20 xl:h-24 xl:w-24'>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
  </div>
  </div>
 )
  }
   
   </>
  )
}

export default Snap