import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Blogs = () => {
  const [allblogs, setAllblogs] = useState([]);

  useEffect(() => {
    fetch('/api/getblogtitles') // Use relative URL for the API endpoint
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        setAllblogs(datas);
      });
    
  }, []);

  return (
    <>
      <main className={`${styles.main}`}>
        { allblogs.map((blog) => {
  return ( <Link key={blog._id} href={`/blogposts/${encodeURIComponent(blog._id)}`} >
  {blog.title}
</Link>
            )

        }
          
        )}
      </main>
    </>
  );
};

export default Blogs;
