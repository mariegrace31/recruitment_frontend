"use client"
import React, { useState } from 'react';
import Navbar2 from '../components/navbar2';
import Sidebar from '../components/sidebar';
import Image from 'next/image';
import blog1 from '../assets/recruiterImage.jpeg';
import blog2 from '../assets/blogpic.jpeg';
import blog3 from '../assets/blog3.jpeg';
import blog4 from '../assets/blog4.jpeg';
import blog5 from '../assets/blog5.jpeg';
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function NewHr() {
  const [blogs, setBlogs] = useState([
    {
          img: blog1,
          title: "How to Prepare for a Job Interview",
          description:
            "Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...",
        },
        {
          img: blog2,
          title: "LK Recruitment embraces the agenda 2063 for a thriving future.",
          description:
            "LK Recruitment Rwanda recently participated in the “One Africa, One HR” Summit, held at the Kigali Convention Center in Kigali, Rwanda.",
        },
        {
          img: blog3,
          title: "Cracking the Code: How to Read Job Ads Like a Pro",
          description:
            "Tired of applying for jobs and getting nowhere? It might be time to upgrade your job ad reading skills! Job ads aren't just lists of requirements...",
        },
        {
          img: blog4,
          title: "Ace Your First Interview: How to Impress and Get the Job.",
          description:
            "That first interview is crucial, it's your chance to shine! Those first few minutes are make-or-break, especially when it comes to showing your personality...",
        },
        {
          img: blog5,
          title: "Your CV: Showcasing Your Experience Like a Boss",
          description:
            "We all live with our CVs, not on paper, but through our daily conversations. Think about the times you've met someone new and they ask, “So, what do you do?”...",
        }, ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({ img: null, title: '', description: '' });

  const handleDelete = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBlog({ ...newBlog, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (newBlog.img && newBlog.title && newBlog.description) {
      setBlogs([...blogs, newBlog]);
      setNewBlog({ img: null, title: '', description: '' });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-7">
          <div className="flex justify-between">
            <h3 className="text-3xl font-semibold">HR News and Tips</h3>
            <button className="text-[16px] text-lk_button underline" onClick={() => setIsModalOpen(true)}>Add New</button>
          </div>
          <hr className="w-full mt-2 mx-auto border-black/30" />
          <div className="grid grid-cols-3 gap-10 mt-4">
            {blogs.map((post, index) => (
              <div key={index} className="flex flex-col justify-between border rounded-lg shadow-sm">
                <div className="flex flex-col gap-2">
                  {post.img && <Image src={post.img} width={100} height={100} alt="blog image" className="rounded-md w-full h-60" />}
                  <h1 className="text-[16px] font-semibold p-2">{post.title}</h1>
                  <p className="text-[15px] p-2">{post.description}</p>
                </div>
                <div className="flex justify-between p-2">
                  <button className="text-red-500 hover:underline text-[15px]" onClick={() => handleDelete(index)}>Delete this post</button>
                  <button className='text-[15px] text-primary_dash bg-secondary_dash p-[5px] px-3 rounded-sm'>Edit the post</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
     <div className="bg-white p-6 rounded-lg w-[45%]">
      <div className='flex justify-between items-center'>
      <h2 className="text-[17px] font-medium text-primary_dash">Add New Blog</h2>
      <IoClose onClick={() => setIsModalOpen(false)} className='text-2xl bg-primary_dash text-secondary_dash p-1 rounded-full cursor-pointer' />
      </div>

      <div className='grid grid-cols-2 gap-5 justify-center mt-6'>

        <div>
        <label className="block w-full border border-gray-300 p-4 mt-2 text-center cursor-pointer rounded-md">
        <span className="text-gray-400 flex items-center justify-center gap-1"><IoCloudUploadOutline className='text-xl' />Upload Blog Image</span>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="hidden" 
        />
      </label>

      {newBlog.img && <Image src={newBlog.img} width={100} height={100} alt="Preview" className="mt-2" />}
        </div>

        <div>

      <label className='text-[13px] mt-2'>Post Title</label>    
      <input 
        type="text" 
        name="title" 
        placeholder="Enter the title" 
        value={newBlog.title} 
        onChange={handleInputChange} 
        className="block w-full p-2 border mt-2 outline-secondary_dash placeholder:text-[13px] mb-2" 
      />
      <label className='text-[13px]'>Post Description</label>
      <textarea 
        name="description" 
        placeholder="Description" 
        value={newBlog.description} 
        onChange={handleInputChange} 
        className="block w-full p-2 border mt-2 outline-secondary_dash placeholder:text-[13px]" 
      />
        </div>
      </div>
      
        <button className="bg-primary_dash text-white text-[15px] px-4 py-2 rounded flex mt-7 mx-auto" onClick={handleSave}>Add & Save</button>
      
    </div>
  </div>
)}
    </div>
  );
}

export default NewHr;