import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export function Sidebar() {
  return (
<div className=" mb-5 ml-3 h-[94%] mt-3 flex flex-col justify-center items-center p-3 bg-blue-950 rounded-md">
        {/* image */}
        <Image src="/assets/profile.jpg" alt="profile-image" width={200} height={200} className="rounded-md "/>

        {/* name here */}
        <div className="mt-2">
        <h1 className="text-2xl font-bold tracking-tight uppercase text-white">Aqsa Shah</h1>
        <h2 className="text-1g font-semibold tracking-tight text-center text-white">
        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer', 'Python Developer', 'Prompt Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h2>
    </div>

        {/* social media accounts */}
        <div className=" grid grid-cols-3 gap-2">
{/* linkedin */}
            <div className="mt-4"> 
                <Link href="https://www.linkedin.com/in/aqsa-shah-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className=" text-white hover:text-blue-800">
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
            <div className="mt-4"> 
                <Link href="https://www.instagram.com/developer_aqsashah?igsh=MTJ4dW9vZ211Zm5sMA==" target="_blank" className=" text-white hover:text-blue-800">
            <FaInstagramSquare className="text-4xl" />
                </Link>
            </div>
        </div>


        {/* cv button */}
        <Link href={"/assets/resume.pdf"} className="mt-4" target="_blank">
        <Button className="bg-white text-black mt-3 h-8 w-28 hover:bg-blue-900  ">
            <FaCloudDownloadAlt className="mr-2 h-4 w-4  " /> RESUME
        </Button>
        </Link>
    </div>
 )
}
