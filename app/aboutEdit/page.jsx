"use client"
import Image from 'next/image';
import Navbar2 from '../components/navbar2';
import Sidebar from '../components/sidebar';
import React, { useState } from 'react';
import { RiEdit2Fill } from "react-icons/ri";
import CEO from '../assets/team1.png';
import Soc from '../assets/socr.png';
import dja from '../assets/dja.jpeg';
import values from '../assets/values.png';
import { IoMdCamera, IoMdClose } from "react-icons/io";

function AboutEdit() {
  const [team, setTeam] = useState([
    { id: 1, name: "Kelly", position: "Chief Executive Officer", description: "Welcome! My name is LONETE Kelly, and I'm the CEO of LK RECRUITMENT. For over 15 years, I've been driven by a simple yet powerful belief: Every individual has the potential to achieve..", image: CEO, editing: false },
    { id: 2, name: "Socrate", position: "Hiring Manager", description: "Live by lifting others - Davido Adeleke This quote deeply resonates with me I believe in building a world where everyone has the opportunity to shine.I'm AYIVUGWE Socrate,", image: Soc, editing: false },
    { id: 3, name: "Djasmine", position: "Administrative Assistant", description: "My name is Keza Djasmine,I am an administrative assistant at LK Recruitment. With a passion for efficient organization and a strong attention to detail, I am specialize in providing exceptional support", image: dja, editing: false },
  ]);

  const [newMember, setNewMember] = useState({ name: "", position: "", description: "", image: null });
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (id, field) => {
    setTeam(team.map(member => 
      member.id === id 
        ? { ...member, [field]: !member[field] } 
        : member
    ));
  };

  const handleSave = () => {
    setTeam(team.map(member => ({ ...member, editing: false })));
  };

  const handleDelete = (id) => {
    setTeam(team.filter(member => member.id !== id));
  };

  const handleAddNew = () => {
    if (newMember.name && newMember.position && newMember.description && newMember.image) {
      setTeam([...team, { id: Date.now(), ...newMember, editing: false }]);
      setNewMember({ name: "", position: "", description: "", image: null });
      setShowModal(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className='flex'>
        <Sidebar />
        <div className="w-full p-7">
          <div className="flex justify-between">
            <h3 className="text-3xl font-semibold">Website - About Us</h3>
            <button onClick={handleSave} className="text-[16px] text-white p-2 px-3 rounded-sm bg-lk_button">Save changes</button>
          </div>
          <hr className="w-full mt-2 mx-auto border-black/30" />
          <h3 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>01:</span>Hero Section</h3>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-4 w-[30%]'>
              <h4 className='text-[12px]'>Title</h4>
              <p className='text-[12px] border border-gray-300 p-2 flex gap-10 justify-between items-center'>Learn the story behing Lk Recruitment <RiEdit2Fill className='text-[15px]' /></p>
            </div>
            <div className='flex flex-col gap-4 w-[75%]'>
              <h4 className='text-[12px]'>About Us</h4>
              <p className='text-[12px] border border-gray-300 p-2 flex gap-3 justify-center '>LK RECRUITMENT is a staffing and recruitment agency based in Rwanda. Our mission focuses on investing in 
                people and shaping a better future through empowerment, social responsibility, and promoting diversity, equity,
                and inclusion. The agency offers a talent-focused approach, providing the right training, competitive salaries,
                and a strong commitment to making a positive social impact.<RiEdit2Fill className='text-5xl' /></p>
            </div>
          </div>

         <div className='flex justify-between my-7'>
            <h3 className='font-medium text-[16px] my-7'><span className='text-primary_dash'>02:</span> Our amazing team</h3>
            <button onClick={() => setShowModal(true)} className='text-primary_dash font-medium text-[16px] underline'>Add new</button>
          </div>

          <div className='grid grid-cols-2 gap-10 mx-auto'>
            {team.map(member => (
              <div key={member.id} className='flex gap-4 items-center'>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <h3 className='text-[14px] text-gray-400'>About the employee</h3>
                    <button onClick={() => handleDelete(member.id)} className='text-[14px] text-red-400'>Delete</button>
                  </div>
                  {member.editing ? (
                    <textarea className='border border-gray-300 p-2 w-full' value={member.description} onChange={(e) => setTeam(team.map(m => m.id === member.id ? { ...m, description: e.target.value } : m))} />
                  ) : (
                    <p className='flex gap-2 text-[14px]'>{member.description} <RiEdit2Fill className='text-5xl' onClick={() => handleEdit(member.id, 'editing')} /></p>
                  )}
                  <div className='flex justify-between'>
                    <div className='flex flex-col gap-1'>
                      <h1 className='text-[13px] text-gray-400'>Name</h1>
                      {member.editing ? (
                        <input type='text' className='border border-gray-300 p-1' value={member.name} onChange={(e) => setTeam(team.map(m => m.id === member.id ? { ...m, name: e.target.value } : m))} />
                      ) : (
                        <p className='flex items-center gap-3 text-[14px]'>{member.name} <RiEdit2Fill className='text-[17px]' onClick={() => handleEdit(member.id, 'editing')} /></p>
                      )}
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h1 className='text-[13px] text-gray-400'>Position</h1>
                      {member.editing ? (
                        <input type='text' className='border border-gray-300 p-1' value={member.position} onChange={(e) => setTeam(team.map(m => m.id === member.id ? { ...m, position: e.target.value } : m))} />
                      ) : (
                        <p className='flex items-center gap-3 text-[14px]'>{member.position} <RiEdit2Fill className='text-[17px]' onClick={() => handleEdit(member.id, 'editing')} /></p>
                      )}
                    </div>
                  </div>
                </div>
                <Image src={member.image} width={100} height={100} alt='pic' className='w-44' />
              </div>
            ))}
          </div>
          
          {showModal && (
            <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-5 rounded-md w-[50%]'>
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='text-xl font-medium text-primary_dash mb-3'>Add New Employee</h3>
                  <button onClick={() => setShowModal(false)} className="text-white bg-primary_dash rounded-full p-2">
                    <IoMdClose className="text-2xl" />
                  </button>
               </div>

               <div className='flex justify-between'>
                <div className='w-[55%]'>
                  <label className='text-[15px] text-gray-600 mb-2'>About the employee</label>
                  <textarea
                 className="border border-gray-300 p-2 w-full h-28 mb-3"
                 value={newMember.description}
                 onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
               />
                </div>
                <label htmlFor="file-upload" className="cursor-pointer border border-gray-300 p-2 mb-3 w-[40%] flex justify-center items-center">
                <IoMdCamera className="text-primary_dash text-3xl" />
                <input type="file" id="file-upload" onChange={handleImageUpload} className="hidden"/>
                </label> 
               </div>

               <div className='flex flex-col'>
               <label className='text-[15px] text-gray-600'>Employee's Name</label>
                <input
                type="text"
                placeholder="Enter name"
                className="border border-gray-300 mt-4 p-2 h-14 w-[55%] mb-3 placeholder:text-[13px]"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
               />
               </div>
              
              <div className='flex flex-col'>
              <label className='text-[15px] text-gray-600'>Employee's Position</label>
               <input
               type="text"
               placeholder="Enter position"
               className="border border-gray-300 p-2 w-[55%] h-14 mt-4 mb-3 placeholder:text-[13px]"
               value={newMember.position}
               onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
               />
              </div>
               
              
            <button onClick={handleAddNew} className="bg-primary_dash text-white mt-4 p-2 w-[30%]">Save & Add</button>
          </div>
        </div>
       )}

          <div className='flex mt-8 gap-12 mx-auto'>
            <div>
            <h2 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>03:</span>Why Choose Us</h2>
            <div className='grid grid-cols-2 gap-2 w-[100%]'>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Tailored staffing solutions<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>LK RECRUITMENT provides customized hiring options, from temporary roles to permanent positions, ensuring the best match for your business needs.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Expertise and Efficiency<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>With deep industry knowledge and a fast, streamlined hiring process, we make recruitment smooth and hassle-free.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Commitment to Diversity and Responsibility<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We prioritize diversity, inclusion, and social responsibility, helping you build a strong, socially conscious workforce.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='flex justify-between items-center text-[14px]'>Quality Assurance<RiEdit2Fill className='text-[17px]' /></h4>
                <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We maintain high standards in candidate selection and placement to ensure client satisfaction.</p>
              </div>
            </div>
            </div>

            <div className='w-[90%]'>
            <h2 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>04:</span>Our Values</h2>
            <Image src={values} width={100} height={100} alt='values' className='w-[230%]' />
            </div>
           
          </div>

          <div className='flex gap-5 mt-9 mx-auto'>
            <div className='flex flex-col gap-2 w-[58%] '>
              <h4 className='flex justify-between items-center text-[14px]'>What is a Temporary Work Agency?<RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>A temporary work agency is a company that matches businesses in need
                 of temporary staff with qualified individuals looking for short-term employment opportunities. Benefits: Provides flexibility for businesses
                 to meet fluctuating staffing needs, helps individuals gain valuable work experience, and offers a cost-effective solution for both parties.</p>
            </div>
            <div className='flex flex-col gap-6'>
            <div className='flex gap-3'>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 01</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>Businesses contact us with their staffing requirements.</p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 02</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We source and screen qualified and trained candidates from our pool of temporary workers.</p>
            </div>
            </div>
            <div className='flex gap-3'>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 03</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We match the best-suited candidates with the job requirements and facilitate the placement process.</p>
            </div>
            <div className='flex flex-col gap-2 w-[80%]'>
              <h4 className='flex justify-between items-center text-[14px]'><span className='text-primary_dash'>Step 04</span><RiEdit2Fill className='text-[17px]' /></h4>
              <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>We provide ongoing support and assistance to ensure a successful temporary work arrangement.</p>
            </div>
            </div>
            </div>
           
          </div>

          <div className='mt-3'>
          <h2 className='font-medium text-[16px] my-9'><span className='text-primary_dash'>05:</span>Our Mission and Vision</h2>
          <div className='grid grid-cols-2 gap-10'>
          <div className='flex flex-col gap-2 w-[90%]'>
            <h4 className='flex justify-between items-center text-[14px]'>Our Mission<RiEdit2Fill className='text-[17px]' /></h4>
            <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>With LK Recruitment , you can expect a Commitment to Social Impact: We are passionate about making a positive difference in the world, and we strive to create a more sustainable and equitable future</p>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>
            <h4 className='flex justify-between items-center text-[14px]'>Our vision<RiEdit2Fill className='text-[17px]' /></h4>
            <p className='border border-gray-300 rounded-sm p-2 py-3 text-[14px]'>At LK Recruitment we believe in building a brighter future by promoting Diversity, Equity, and Inclusion: We believe in a world where everyone has the opportunity to succeed, and we actively champion diversity, equity, and inclusion within our organization.</p>
          </div>
          </div>
          </div>

          <button onClick={handleSave} className="text-[16px] text-white p-2 px-3 rounded-sm bg-lk_button mt-5">Save changes</button>

        </div>
      </div>
    </div>
  )
}

export default AboutEdit;