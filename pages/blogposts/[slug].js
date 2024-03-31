import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"

const Slug = () => {
  const [blogdetails, setBlogdetails] = useState({});
  const [recentBlogs, setRecentBlogs] = useState(null);
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

    if (slug) {
      fetchData();
    }
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../api/getrecentblogs`);
        const newblogs = await response.json();
        setRecentBlogs(newblogs);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!blogdetails || Object.keys(blogdetails).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <> <main className='bg-white'>
      <div className='bg-gradient-to-tr from-slate-950/90 via-pink-600/50   to-teal-400/25 min-h-screen'>
        <div className=' sm:pl-20 sm:pr-20 flex flex-col md:flex-row p-3'>
          <div className='flex flex-col mt-5 basis-3/5'>
            <img className='rounded-2xl   m-5 ' src={blogdetails.titleimgurl} alt=" Coding Blogs" />
            <span className=' ml-5 leading-normal text-start font-serif text-5xl text-black' >{blogdetails.title}</span>
           </div>

           <div className=' flex flex-col basis-2/5  m-5'>
              <div className= ' p-5 flex flex-col justify-center items-center '>
                <div className='flex justify-start w-full p-3 items-start'>
                <span className='bg-teal-400 border-spacing-4 rounded-xl p-1 font-bold '>{blogdetails.categoryTitle}</span>
                </div>
                <p className='text-start  font-serif text-xl text-black p-3' >{blogdetails.description} </p>
                
              </div>
              <div className='flex flex-col '>
                <div>
                <p className='m-8 mb-0 font-semibold text-2xl'>Published on- {blogdetails.date1}</p>
                </div>
                <div className="m-8 mt-2 flex items-center justify-start gap-x-4">
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
      <div  className='p-10 pt-0 '>
        <p className=' p-10 m-10  font-mono text-justify bg-gray-300/40'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore perspiciatis ducimus iusto, illo porro aspernatur, ab aliquam, et quae temporibus eligendi facere deleniti voluptates. Voluptates non totam nostrum eius ipsum qui, impedit illo repellat maiores veritatis praesentium aut. Sint molestiae distinctio natus eius accusamus amet deserunt sapiente illum iste, dolor ab, laudantium, suscipit dolorum? Nulla officiis quae consectetur deleniti maxime quisquam quam, asperiores odio harum ipsam laboriosam voluptates error saepe id dicta quos molestias labore voluptate fugit aspernatur atque nostrum ullam sint facere. Voluptatibus sint molestiae non! Minus voluptatem ullam vero at eum dolore molestiae provident atque dolor porro, unde aliquam velit rem animi eius numquam nulla hic veritatis magnam, expedita tempora id iste fugiat delectus. Aliquid architecto, praesentium soluta reprehenderit rem quasi in quas magnam optio porro ex, omnis aut ratione corporis. At repellendus aspernatur consequuntur mollitia sapiente, sequi voluptatem placeat quae porro doloremque alias veniam ducimus. Doloremque quia vero, deleniti rem nemo ea. Impedit quis ratione expedita ipsum voluptate ex eos repudiandae, rem quisquam ut eius accusantium veritatis repellendus, blanditiis tempora explicabo cum earum officiis soluta, officia corporis. Cumque iure non veniam architecto fuga ipsa facilis. Corrupti quia voluptatibus obcaecati quo quam magnam accusantium voluptatem saepe placeat beatae minus dolore repellat eius, numquam tempora architecto debitis accusamus quis nobis nisi unde. Perspiciatis, officiis iste vel assumenda, praesentium quisquam aliquid optio ratione sequi magnam fugit magni necessitatibus eius, fuga mollitia id voluptas asperiores tenetur illum deleniti exercitationem. Atque labore nesciunt perspiciatis voluptates nihil eaque aperiam tempore vel suscipit, quis eos consectetur quos quia voluptatem sapiente ut voluptas natus. Ad consequuntur in nam deserunt fugit sint sed dolore labore laudantium temporibus, quod fugiat dignissimos doloremque optio eius eos facilis quo minima nulla sapiente id debitis consequatur aliquam. Assumenda corporis ut id. Iure voluptates, praesentium quas tempore voluptatem ad eos. Ducimus harum quas natus temporibus. Aperiam ipsam nostrum a commodi necessitatibus voluptatum mollitia dolorum reiciendis, sit cupiditate placeat nisi vitae voluptas eligendi ad nobis eum fugit deserunt ab voluptatibus debitis expedita totam maiores facilis. Omnis error officia provident, itaque pariatur expedita eum quos? Cumque voluptatum impedit dolores dignissimos, ratione enim deleniti reprehenderit laboriosam quasi iusto quaerat, perspiciatis laborum sed fuga commodi quisquam sint necessitatibus? Iusto, maiores qui esse delectus nostrum veniam placeat. Nisi aliquam quisquam non ex deserunt expedita veniam hic, obcaecati in molestiae optio et, quasi necessitatibus sint perspiciatis dignissimos cumque? Suscipit omnis impedit nihil nobis consectetur mollitia laboriosam maxime, nesciunt amet quibusdam voluptatem molestiae. Enim perspiciatis dolore autem dignissimos tempore, quo accusamus aut odio magni nisi inventore alias. Excepturi possimus voluptas deserunt nostrum velit voluptatibus consequatur unde, consectetur commodi eligendi mollitia delectus. Enim quasi expedita iste sint dolores tempore aliquid repudiandae assumenda inventore nostrum, ab eveniet exercitationem veniam. Expedita iusto esse obcaecati placeat debitis distinctio nulla omnis quidem alias cum assumenda, eius dolorem minima sapiente voluptate aliquid et enim? Soluta optio ipsa distinctio, dolores ad, culpa et velit inventore ex eveniet laborum doloremque sed ipsam cupiditate. Cum exercitationem assumenda magnam eum molestias saepe esse sit vel delectus cupiditate recusandae ullam, explicabo reiciendis ratione eius reprehenderit facere? Quos aspernatur quis a blanditiis dicta esse recusandae voluptates incidunt, labore dolorem sint officiis possimus fugiat ipsa id deleniti. Repudiandae ad non natus neque aut provident! Aliquid at eligendi, quaerat debitis nisi iusto ducimus, quia ut necessitatibus fuga aliquam commodi sunt blanditiis. Quam voluptates totam, iure illum voluptas tempora numquam dolore et, sapiente commodi repudiandae unde nesciunt fuga asperiores a libero deserunt praesentium ratione earum ut omnis saepe! Tempora quod tenetur adipisci iste ad itaque. Quasi nam, soluta iure saepe aspernatur voluptate esse aut delectus, architecto ea error ex! Qui, accusantium explicabo!
        </p>
      </div>
      {
        recentBlogs ? (

       
      <div className='flex flex-col p-1 m-1 sm:p-10 sm:pt-0 sm:m-10 sm:mb-0 sm:mt-0'>
       <div className='flex justify-center items-center '>
         <p className='leading-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif bg-gradient-to-b from-red-300 via-green-200/65 to-lime-300/20 mb-3 p-1 rounded-xl'>
            Our Recent Blogs
          </p>
       </div>
      <div className="relative  items-center snap-x flex gap-6   w-full overflow-x-auto">
      
      {recentBlogs.map((recentBlogs) => {
          return <>
  <div className="flex flex-col snap-center shrink-0 pb-1"> 
        
  <article key={recentBlogs._id} className="bg-white rounded-xl flex max-w-xl flex-col items-start justify-between">
                <div className=' h-40 w-80 sm:h-48 sm:w-96' >
                <img className=" sm:max-h-48 sm:max-w-96 h-full w-full object-cover rounded-xl " src={recentBlogs.titleimgurl} alt="Blogs" />
                </div>
                <div className="p-1 pt-0 flex items-center gap-x-4 text-xs max-h-48 max-w-96">
                <time dateTime={recentBlogs.datetime1} className="text-gray-500">
                    {recentBlogs.date1}
                  </time>
                  <a
                    href="/"
                    className="mt-1 max-h-40 max-w-80 sm:max-w-96 sm:max-h-48 relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {recentBlogs.categoryTitle}
                  </a>
                </div>
                <div className=" p-1 pt-0 group relative max-h-40 max-w-80  sm:max-h-48 sm:max-w-96">
                  <h3 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`http://localhost:3000/blogposts/${encodeURIComponent(recentBlogs._id)}`}>
                      <span className="absolute inset-0" />
                      {recentBlogs.title}
                    </Link>
                  </h3>
                  <p className="line-clamp-1 text-sm leading-6 text-gray-600">{recentBlogs.description}</p>
                </div>
                <div className="p-1 pt-0 max-h-40 max-w-80  sm:max-h-48 sm:max-w-96 relative mt-2 flex items-center gap-x-4">
                  <img src={recentBlogs.authorImageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href= "/">
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
  <div>
    Loading.......
  </div>
 )
  }
      </div>
    </main>
    </>
  );
};

export default Slug;
