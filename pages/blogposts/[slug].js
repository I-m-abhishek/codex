import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

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

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!blogdetails || Object.keys(blogdetails).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className={`${styles.main}`}>
        <h1 className={styles.title}>Title of the page is {blogdetails.title}</h1>
        <h3>{blogdetails.content}</h3>
        <hr />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex nesciunt reprehenderit repellat,
          quod, possimus necessitatibus, beatae incidunt inventore omnis pariatur deserunt veritatis porro. Quasi
          fugiat ullam tempora dolorum voluptatibus molestiae similique.
        </h2>
      </main>
    </>
  );
};

export default Slug;
