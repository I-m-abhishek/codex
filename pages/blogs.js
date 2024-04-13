import React, { useEffect, useState } from 'react';
import Blogtemp from '@/components/blogtemp';

const Blogs = () => {
  const [allblogs, setAllblogs] = useState([]);
  const [err, setErr]= useState(false);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/getblogtitles'); // Make a GET request to the '/api/getblogtitles' endpoint
        if (!response.ok) { // Check if the response is not okay
          throw new Error('Network response was not ok'); // Throw an error if response is not okay
        }
        const data = await response.json(); // Parse the response as JSON
        setAllblogs(data); // Set the retrieved data into the state variable 'allblogs'
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error); // Log the error to the console
        setErr(true); // If there's an error, set 'err' state variable to true
      }
    };

    fetchData();
      
    
  }, []);

  return (
    <>
      <Blogtemp posts={allblogs} err={err} />
    </>
  );
};

export default Blogs;
