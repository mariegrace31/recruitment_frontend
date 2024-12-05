"use client"
import { React, useState} from 'react';
import hr from '../assets/abouthr.png';
import lines from '../assets/linegroup.png';
import Image from 'next/image';
import blog2 from '../assets/blogpic.jpeg';
import { GoArrowRight } from "react-icons/go";
import Footer from '../components/Footer';
import Link from 'next/link';
import { RiLoader2Line } from 'react-icons/ri';
import hrImage from '../assets/recru.png';
import blog3 from '../assets/blog3.jpeg';
import blog4 from '../assets/blog4.jpeg';
import blog5 from '../assets/blog5.jpeg';
import { MdOutlineExpandLess } from "react-icons/md";

function page() {

    const [visibleCards, setVisibleCards] = useState(3); 

    const cards = [
      {
        id: 1,
        image: hrImage,
        title: 'How to Prepare for a Job Interview',
        description: 'Preparing for a job interview can be daunting. Here are some practical tips to help you stand out and make a lasting impression on your potential employer...',
        link: '/hrdetail',
      },
      {
        id: 2,
        image: blog2,
        title: 'LK Recruitment embraces the agenda 2063 for a thriving future.',
        description: 'LK Recruitment Rwanda recently participated in the “One Africa, One HR” Summit, held at the Kigali Convention Center in Kigali, Rwanda.',
        link: '/blog2',
      },
      {
        id: 3,
        image: blog3,
        title: 'Cracking the Code: How to Read Job Ads Like a Pro',
        description: "Tired of applying for jobs and getting nowhere? It might be time to upgrade your job ad reading skills! Job ads aren't just lists of requirements...",
        link: '/blog3',
      },
      {
        id: 4,
        image: blog4,
        title: 'Ace Your First Interview: How to Impress and Get the Job',
        description: "That first interview is crucial - it's your chance to shine! Those first few minutes are make-or-break,especially when it comes to showing your perso...",
        link: '/blog4',
      },
      {
        id: 5,
        image: blog5,
        title: 'Your CV: showcasing your Experience like a boss',
        description: "We all live with our CVs, not on paper, but through our daily conversations. Think about the times you've met someone new and they ask, “So, what do you do?...",
        link: '/blog5',
      },
    ];
  
    const handleLoadMore = () => setVisibleCards(cards.length);
    const handleShowLess = () => setVisibleCards(3); 

  return (
    <div className='bg-white'>
      <div className='p-7 lg:p-20'>
      <div className='bg-gray-300 relative p-2 rounded-lg w-[100%] lg:w-[90%] mt-20 mx-auto'>
        <div className='bg-primary rounded-lg p-16 lg:p-44 relative'>
          <h1 className='text-white text-center text-xl lg:text-6xl'>HR News & Tips</h1>
          <Image src={hr} width={400} height={1} alt='hr' className='mx-auto mt-4 z-10 w-[140px] lg:w-[350px]' />
        </div>
      </div>
      <Image src={lines} width={100} height={50} alt='lines' className=' mx-auto -mt-32 z-10 object-cover'/>

      <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-0 lg:mt-32 p-16 px-3">
        {cards.slice(0, visibleCards).map((card) => (
          <div key={card.id} className="rounded-xl border border-black/20 flex flex-col gap-4 pb-6">
            <Image
              src={card.image}
              width={401}
              height={100}
              alt={card.title}
              className="rounded-t-xl w-full h-full object-cover"
            />
            <h3 className="px-3 text-[14px] lg:text-[16px]">{card.title}</h3>
            <p className="px-3 text-[12px] lg:text-[14px] font-light leading-6">{card.description}</p>
            <Link href={card.link}>
              <button className="flex items-center gap-1 px-3 text-[12px] lg:text-[14px]">
                Learn more <GoArrowRight className="bg-secondary rounded-2xl p-1 text-white text-2xl" />
              </button>
            </Link>
          </div>
        ))}
      </div>
      {visibleCards < cards.length ? (
        <button
          onClick={handleLoadMore}
          className="flex items-center gap-1 border border-secondary/50 p-2 lg:p-3 text-sm lg:text-lg w-[40%] lg:w-[15%] mx-auto my-0 lg:my-14 justify-center rounded-3xl hover:bg-secondary hover:text-white"
        >
          <RiLoader2Line className="text-xl group-hover:text-white" /> Load more
        </button>
      ) : (
        <button
          onClick={handleShowLess}
          className="flex items-center gap-1 border border-secondary/50 p-2 lg:p-2 text-sm lg:text-lg w-[40%] lg:w-[15%] mx-auto my-0 lg:my-14 justify-center rounded-3xl hover:bg-secondary hover:text-white"
        >
         <MdOutlineExpandLess className="text-4xl group-hover:text-white"  /> Show less
        </button>
      )}
    </div>
  
      </div>

      <Footer />
    </div>
  )
 }

export default page;