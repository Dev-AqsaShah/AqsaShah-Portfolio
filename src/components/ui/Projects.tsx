import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link';
  

const Projects = () => {
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto bg-blue-950">
          <CardHeader>
            <CardTitle className=" text-2xl font-semibold tracking-tight uppercase text-white">Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">


    {/* amazon clone */}
    <div className=" container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        amazon clone
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        I created an Amazon clone that replicates the core layout and functionality of the website, including key features like product listings, search, and a responsive design for a seamless user experience.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://web-clone-coral.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


  {/*  facebook login page clone */}
  <div className="container  py-10 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        facebook clone
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        I developed a Facebook login page clone using Next.js and Tailwind CSS, ensuring a seamless, responsive design with modern web technologies for an optimal user experience.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://next-js-projects-lemon.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* countdown timer */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        countdown timer
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        I created a countdown timer app using Next.js, providing a dynamic and visually appealing interface to track time for any event or deadline. The app is designed with Tailwind CSS for a responsive and layout.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://nextjs-project-countdown-timer.vercel.app/" target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* resume builder */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        resume builder
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        I developed a resume builder app using Next.js, allowing users to create professional resumes effortlessly. Tailwind CSS was utilized to ensure a clean, responsive, and user-friendly design.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://hackathon-milestone-3-nine.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* age calculator */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        age calculator
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        I created an age calculator app using Next.js to help users determine their age based on their birth date. The application features a clean design with Tailwind CSS for a seamless user experience.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://age-calculator-orpin-rho.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* text to voice converter */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        text-to-voice converter
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        Developed a Text to Voice Converter that allows users to input text and listen to it being read aloud. The application features a user-friendly interface for seamless interaction.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://text-to-voice-project.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* analog clock */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        analog clock
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        Created an Analog Clock that displays the current time using a traditional clock face with hour, minute, and second hands. The clock updates in real-time, providing an accurate representation of the time.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://analog-clock-eight-rho.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* currency  convertor*/}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
      currency  convertor
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        Developed a Currency Converter that allows users to convert between different currencies in real-time. The tool provides accurate exchange rates, ensuring up-to-date conversions for users.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href="https://currency-converter-iota-amber.vercel.app/ " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* python projects */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        python projects
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        Built a variety of Python-based projects focusing on automation, data processing, and user interaction. These projects demonstrate a deep understanding of Pythons versatility and practical applications.
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href=" https://github.com/Dev-AqsaShah/Python-Projects.git " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>


    {/* typescript projects */}
    <div className="container  py-5 mx-auto flex flex-wrap ">
      <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
        typescript projects
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-white">
        I have developed 14 projects using TypeScript, showcasing a range of functionalities from web applications to utilities. All of these projects are published on npm, and you can explore them through the following link
        </p>
        <div className="flex md:mt-4 mt-6">
          <Link href="https://github.com/Dev-AqsaShah/TypeScript-mini-Projects.git " target="_blank">
          <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
            View Live
          </button>
          </Link>
       
        </div>
      </div>
    </div>






          </CardContent>
        </Card>
  )
}

export default Projects ;
