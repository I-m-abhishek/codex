import Link from "next/link"

  export default function Blogtemp({posts,err}) {
    
    
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
         
      <div className="bg-white py-24 sm:py-32">
          
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
                <div>
                <img className="rounded-xl" src={post.titleimgurl} alt="Blogs" />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime1} className="text-gray-500">
                    {post.date1}
                  </time>
                  <a
                    href="/"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categoryTitle}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`http://localhost:3000/blogposts/${encodeURIComponent(post._id)}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.authorImageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href= "/">
                        <span className="absolute inset-0" />
                        {post.authorName}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.authorRole}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>

    )
  }
  