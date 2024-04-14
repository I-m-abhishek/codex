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
    <> {
       (allblogs.length==0 ? <div className='h-screen flex items-center justify-center'>
       <div className='h-10 w-10 md:h-20 md:w-20 xl:h-24 xl:w-24'>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
     </div>
     </div>
      :
        <Blogtemp posts={allblogs} err={err} />
        )
    }
    </>
  );
};

export default Blogs;
