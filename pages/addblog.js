import React, {useRef, useState} from 'react'

const Addblog = () => {
  const blogform = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
   const [author, setAuthor] = useState("");
   const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
        const response = await fetch('./api/createblog', {
            method: 'POST',
          headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
        });
        if(response.ok){  
            const form = document.getElementById("blogform");
      if (form) {
        setTitle("");
        setContent("");
        setAuthor("");
        console.log("Form Reset");
      } else {
        console.error("Form Element Not Found");
      }
            console.log( "Blog Created Successfully");
        }
        else{
            console.log("Blog Creation Failed");
        }
    }
    catch{

    }


   }

  return (
<>
<form ref={blogform} id="blogform"onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

</>  )
}

export default Addblog