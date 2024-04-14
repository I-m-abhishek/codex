import Dialogbox from '@/components/Dialogbox';
import React, { useRef, useState } from 'react';

const Addblog = () => {
  const blogform = useRef();
  const [dialogopen , setDialogopen] = useState(false);
  const [err , setErr] = useState(false);

  const handleChangePropValue = (newValue) => {
    setDialogopen(newValue);
  };

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    description: '',
    categoryTitle: '',
    authorName: '',
    authorRole: '',
    authorImageUrl: '',
    titleimgurl:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setDialogopen(true);
        const form = blogform.current;
        if (form) {
          form.reset();
          setFormData({
            title: '',
            content: '',
            description: '',
            categoryTitle: '',
            authorName: '',
            authorRole: '',
            authorImageUrl: '',
            titleimgurl: '',
          });
          console.log('Form Reset');
        } else {
          setDialogopen(true);
          setErr(true);
          console.error('Form Element Not Found');
        }
        console.log('Blog Created Successfully');
      } else {
        setErr(true);
        setDialogopen(true);
        console.log('Blog Creation Failed');
      }
    } catch (error) {
      setErr(true);
      setDialogopen(true);
      console.error(error);
    }
  };

  return (
    <>
    <div className='bg-cover bg-white p-1 sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 lg:pl-56 lg:pr-56'
    style={{

      // linear-gradient(rgba(135, 80, 156, 0.7), rgba(135, 80, 156, 0.7)),
      backgroundImage:
        ' url("./addblog-bg.jpg")',
    }}>
           
           <div className='pt-4 pb-4'>
            <p className='text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight font-semibold '>Empower Your Coding Journey: Expand Your Impact by Adding Your Blog!</p>
           </div>
      <div className=' group grid perspective-800   transform-style-3d  ' >
        <div className= {`w-full rounded-md p-2 sm:p-4 mx-auto mt-10 mb-8  sm:mt-14 backdrop-blur-md border-2 border-[rgba(223,92,92,0.2)]  bg-white/75 dark:bg-gray-900/75 row-start-1 row-end-1 col-start-1 col-end-1 backface-hidden transform transition duration-[1.2s]`}>
 
      <form  ref={blogform} id="blogform" onSubmit={handleSubmit}>

         <label htmlFor="title" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
          Title
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  lg:max-w-full">
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Codex" required />
          </div>

        <br />
{/* 
        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input name="titleimgurl" value={formData.titleimgurl} onChange={handleChange} id="file-upload" type="file" className="sr-only"/>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      
        <br /> */}
        

        <label htmlFor="titleimgurl" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Title Image Url
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 lg:max-w-full">
          <input type="url" name="titleimgurl" value={formData.titleimgurl} onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" required />
          </div>

        <br />

        <label htmlFor="content" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Content
          </label>
          <div className="lg:max-w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <textarea  name="content" rows="5" value={formData.content} onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="write content for your blog" required />
          </div>
        <br />

        <label htmlFor="description" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Description
          </label>
          <div className="lg:max-w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input type="text" name="description" value={formData.description} onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Give description for your blog " required />
          </div>

        <br />

        <label htmlFor="categoryTitle" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Category Title
          </label>
          <div className="lg:max-w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input type="text" name="categoryTitle" value={formData.categoryTitle}  onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Give category for your article" required />
          </div>
        <br />

        <label htmlFor="authorName" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Author Name
          </label>
          <div className="lg:max-w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input type="text" name="authorName" value={formData.authorName}  onChange={handleChange} className="dark:text-white  block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="eg: Abhishek Katiyar" required />
          </div>
        <br />

        <label htmlFor="authorRole" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Author Role
          </label>
          <div className="lg:max-w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input type="text" name="authorRole" value={formData.authorRole}  onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="eg: SDE" required />
          </div>

        <br />

        <label htmlFor="authorImageUrl" className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Author Image Url
          </label>
          <div className="lg:max-w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input type="url" name="authorImageUrl" value={formData.authorImageUrl}  onChange={handleChange} className="dark:text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Give url for Author image " required />
          </div>
    
    <br />
        
        <button className=' rounded-md p-1 pl-3 pr-3 mt-3 mb-3 m-1 ml-0 bg-blue-800 text-white' type="submit">Submit</button>
      </form>
      </div>
      </div>
      <Dialogbox dialogopen={dialogopen} err={err} handleChangePropValue={handleChangePropValue}/>
      </div>
    </>
  );
};

export default Addblog;
