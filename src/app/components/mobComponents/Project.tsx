import Link from "next/link";
import React, { useState } from "react";

function MobileProject() {
  // const [showBlogDetails, setShowBlogDetails] = useState(false);
  // const [showResumeDetails, setShowResumeDetails] = useState(false);
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [showEcommerceDetails, setShowEcommerceDetails] = useState(false);
  const [showAmazonCloneDetails, setShowAmazonCloneDetails] = useState(false);
  const [showFaceBookDetails, setShowFaceBookDetails] = useState(false);

  // Corrected toggle functions
  // const toggleBlogDetails = () => setShowBlogDetails((prev) => !prev);
  // const toggleResumeDetails = () => setShowResumeDetails((prev) => !prev);
  const toggleAdminDetails = () => setShowAdminDetails((prev) => !prev);
  const toggleEcommerceDetails = () => setShowEcommerceDetails((prev) => !prev);
  const toggleAmazonCloneDetails = () => setShowAmazonCloneDetails((prev) => !prev);
  const toggleFaceBookDetails = () => setShowFaceBookDetails((prev) => !prev);

  return (
    <div className="w-full p-5 bg-blue-950">
      <h4 className="scroll-m-20 border-b border-white pb-2 text-xl text-center font-semibold tracking-tight text-white">
        PROJECTS
      </h4>

      {/* Admin dashboard */}
      <div className="container py-5 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
          Admin Dashboard
        </h2>
        <div className="md:w-3/5 md:pl-6">
          {showAdminDetails && (
            <p className="leading-relaxed text-white">
              Admin Dashboard Access:<br />
              Use the following credentials to log in to the eCommerce admin dashboard:<br />
              <strong>Email:</strong> example@gmail.com<br />
              <strong>Password:</strong> admin123
            </p>
          )}
          <div className="flex md:mt-4 mt-6 gap-4">
            <Link href="https://admin-dashboard-e-commerce-two.vercel.app/" target="_blank">
              <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
                View Live
              </button>
            </Link>
            <button
              onClick={toggleAdminDetails}
              className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded"
            >
              {showAdminDetails ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      </div>

      {/* E-commerce Figma Hackathon */}
      <div className="container py-5 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
          E-commerce Website
        </h2>
        <div className="md:w-3/5 md:pl-6">
          {showEcommerceDetails && (
            <p className="leading-relaxed text-white">
              I designed an e-commerce website layout on Figma, focusing on a user-friendly and visually appealing interface to enhance the shopping experience.
            </p>
          )}
          <div className="flex md:mt-4 mt-6 gap-4">
            <Link href="https://e-commerce-hackathon-red.vercel.app/?vercelToolbarCode=2v0_lbM0i_SpQqr" target="_blank">
              <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
                View Live
              </button>
            </Link>
            <button
              onClick={toggleEcommerceDetails}
              className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded"
            >
              {showEcommerceDetails ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      </div>

      {/* Blog website */}
      {/* <div className="container py-5 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
          Blog Website
        </h2>
        <div className="md:w-3/5 md:pl-6">
          {showBlogDetails && (
            <p className="leading-relaxed text-white">
              I have built a blog website featuring real-story-based blogs, providing readers with engaging and authentic content. The backend is powered by MongoDB, ensuring efficient data management and scalability. This platform allows users to explore inspiring stories while maintaining a smooth and responsive experience. My focus was on creating a well-structured and dynamic blogging system.
            </p>
          )}
          <div className="flex md:mt-4 mt-6 gap-4">
            <Link href="https://m-4-blog-web.vercel.app/" target="_blank">
              <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
                View Live
              </button>
            </Link>
            <button
              onClick={toggleBlogDetails}
              className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded"
            >
              {showBlogDetails ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      </div> */}

      {/* Resume Builder */}
      {/* <div className="container py-5 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
          Resume Builder
        </h2>
        <div className="md:w-3/5 md:pl-6">
          {showResumeDetails && (
            <p className="leading-relaxed text-white">
              I created a Resume Builder using Next.js, allowing users to generate professional resumes easily. I have also used it to create my own resume, demonstrating its functionality.
            </p>
          )}
          <div className="flex md:mt-4 mt-6 gap-4">
            <Link href="https://hackathon-new-xi.vercel.app/" target="_blank">
              <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
                View Live
              </button>
            </Link>
            <button
              onClick={toggleResumeDetails}
              className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded"
            >
              {showResumeDetails ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      </div> */}

      {/* Amazon Clone */}
      <div className="container py-5 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
          Amazon Clone
        </h2>
        <div className="md:w-3/5 md:pl-6">
          {showAmazonCloneDetails && (
            <p className="leading-relaxed text-white">
              I created an Amazon clone that replicates the core layout and functionality of the website, including key features like product listings, search, and a responsive design for a seamless user experience.
            </p>
          )}
          <div className="flex md:mt-4 mt-6 gap-4">
            <Link href="https://web-clone-coral.vercel.app/" target="_blank">
              <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
                View Live
              </button>
            </Link>
            <button
              onClick={toggleAmazonCloneDetails}
              className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded"
            >
              {showAmazonCloneDetails ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      </div>

      {/* Facebook Login Page Clone */}
      <div className="container py-10 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5 uppercase">
          Facebook Clone
        </h2>
        <div className="md:w-3/5 md:pl-6">
          {showFaceBookDetails && (
            <p className="leading-relaxed text-white">
              I built a clone of the Facebook login page using React. This project showcases my ability to replicate a popular web page design and functionality. It includes a responsive form for login.
            </p>
          )}
          <div className="flex md:mt-4 mt-6 gap-4">
            <Link href="https://login-page-clone-5rr.vercel.app/" target="_blank">
              <button className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded">
                View Live
              </button>
            </Link>
            <button
              onClick={toggleFaceBookDetails}
              className="inline-flex text-black font-semibold bg-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded"
            >
              {showFaceBookDetails ? "Hide Details" : "Details"}
            </button>
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


    </div>
  )
}

export default MobileProject
function setShowResumeDetails(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setShowBlogDetails(arg0: boolean) {
  throw new Error("Function not implemented.");
}

