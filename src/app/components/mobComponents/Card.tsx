import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


const MobileCard = () => {
  return (
    
    <div className='h-[90vh] bg-blue-950 flex flex-col items-center justify-center '>
      <div className="card glass w-80 p=5 flex flex-col justify-center item center">
 
      <Image src="/assets/profile.jpg" alt="profile-image" width={200} height={200} className="rounded-md mx-auto mt-3"/>

 
  <div className="card-body">
  <h1 className="text-2xl font-bold tracking-tight uppercase text-white text-center">Aqsa Shah</h1>
  <h2 className="text-1g font-semibold tracking-tight text-center text-white ">

  <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer', 'Python Developer', 'Prompt Engineer'],
    autoStart: true,
    loop: true,
    
  }}
/>
</h2>

{/* social media */}

        <div className=" grid grid-cols-3 ml-10 ">
{/* linkedin */}
            <div className="mt-4"> 
                <Link href="https://www.linkedin.com/feed/" target="_blank" className=" text-white hover:text-blue-800 ">
            <FaLinkedin className="text-4xl" />
                </Link>
            </div>
{/* github */}
            <div className="mt-4"> 
                <Link href="https://github.com/Dev-AqsaShah" target="_blank" className=" text-white hover:text-blue-800">
            <FaGithubSquare className="text-4xl" />
                </Link>
            </div>
{/* instagram */}
            <div className="mt-4 "> 
                <Link href="https://www.instagram.com/developer_aqsashah?igsh=MTJ4dW9vZ211Zm5sMA==" target="_blank" className=" text-white hover:text-blue-800">
            <FaInstagramSquare className="text-4xl" />
                </Link>
            </div>
        </div>

          {/* cv button */}
          <Link href={"/assets/resume.pdf"} className="mt-4" target="_blank">
        <Button className="bg-white text-black mt-3 h-8 w-28 ml-20 hover:bg-blue-900  ">
            <FaCloudDownloadAlt className="mr-2 h-4 w-4 text-black " /> RESUME
        </Button>
        </Link>
  </div>
</div>
    </div>
    
  )
}


export default MobileCard
