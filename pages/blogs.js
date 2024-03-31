import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Blogtemp from '@/components/blogtemp';

const Blogs = () => {
  const [allblogs, setAllblogs] = useState([]);
  const [err, setErr]= useState(false);
  useEffect(() => {
    fetch('/api/getblogtitles') // Use relative URL for the API endpoint
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        setAllblogs(datas);
      })
      .catch( error=>{
        if(error) setErr(true);
      })
    
  }, []);

  return (
    <>
      <Blogtemp posts={allblogs} err={err} />
    </>
  );
};

export default Blogs;
