import React, { useRef, useState } from 'react';

const Addblog = () => {
  const blogform = useRef();
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
      const response = await fetch('http://localhost:3000/api/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
          console.error('Form Element Not Found');
        }
        console.log('Blog Created Successfully');
      } else {
        console.log('Blog Creation Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form ref={blogform} id="blogform" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Title Image Url:
          <input type="url" name="titleimgurl" value={formData.titleimgurl} onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Category Title:
          <input type="text" name="categoryTitle" value={formData.categoryTitle} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Author Name:
          <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Author Role:
          <input type="text" name="authorRole" value={formData.authorRole} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Author Image Url:
          <input type="url" name="authorImageUrl" value={formData.authorImageUrl} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Addblog;
