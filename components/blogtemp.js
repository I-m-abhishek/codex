import Link from "next/link"

  export default function Blogtemp({posts,err}) {
    
    //  console.log(posts);
    if(err){
      return (<>
       <div className=" bg-white h-lvh">
          <h1 className="text-center text-red-600 font-bold text-3xl">
          There is some error in Internal Server !!!!
          </h1> 
          </div>
      </>)
    }
 
    return (
         
      <div className="min-h-screen bg-white py-24 sm:py-32">
          
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore strategies to improve your coding proficiency and advance your projects with our helpful insights
            </p>
          </div>
          <div className=" mx-auto mt-10 grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id} className="rounded-md shadow-lg shadow-[#635757] flex max-w-80 md:max-w-96 lg:max-w-none flex-col items-start justify-between">
                
                <div className=' h-52 w-full md:h-56 md:w-full'>
                <img className="h-full w-full object-cover rounded-md" src={post.titleimgurl} alt="Blogs" loading="lazy" onError={(e) => { e.target.src = '/errorimg.jpg' }} />
                </div>
                <div className="pl-1 pr-1 pb-1">
                <div className=" flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime1} className="text-gray-500">
                    {post.date1}
                  </time>
                  <a
                    href={`./blogposts/${encodeURIComponent(post._id)}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categoryTitle}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="line-clamp-2 mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`./blogposts/${encodeURIComponent(post._id)}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <img src={post.authorImageUrl} alt="Author" loading="lazy" onError={(e) => { e.target.src = '/errorauthor.jpg' }} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href= {`./blogposts/${encodeURIComponent(post._id)}`}>
                        <span className="absolute inset-0" />
                        {post.authorName}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.authorRole}</p>
                  </div>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>

    )
  }
  