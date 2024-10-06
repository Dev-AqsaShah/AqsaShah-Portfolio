import React from "react"

function MobileEducation() {
  return (
    <div className="bg-blue-950 w-full p-5">

<h4 className="scroll-m-20 border-b border-white pb-2 text-xl font-semibold tracking-tight text-white">
      EDUCATION
    </h4>

{/* piaic */}
<div className=" mt-4 divide-y-2 divide-gray-100 text-white">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white uppercase">
            Generative AI Engineering
            </span>
            <span className="mt-1 text-white text-sm">01-Aug-2024</span>
          </div>
          <div className="md:flex-grow ">
            <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
                Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
            </h2>
            <p className="leading-relaxed ">
            Iam currently pursuing the Cloud Native Applied Generative AI Engineering course at PIAIC! With a strong focus on cutting-edge technologies like AI, Python, Docker and so on.
            </p>
          </div>
        </div>
      </div>



          {/* governor house */}
          <div className="-my-8 divide-y-2 divide-gray-100 text-white">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white uppercase">
              Web-Development
            </span>
            <span className="mt-1 text-white text-sm ">01-feb-2024</span>
          </div>
          <div className="md:flex-grow ">
            <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
                Governors Initiative for Artificial Intelligence and Computing (GIAIC)
            </h2>
            <p className="leading-relaxed ">
            Iam  enrolled in the Certified Cloud Applied Generative AI Eng and Metaverse course at GIAIC. In this program, Iam honing my skills in HTML, CSS, TS, npm, Node.js, Next.js, and so on.
            </p>
          </div>
        </div>
      </div>



{/* bs science */}
      <div className="-my-8 divide-y-2 divide-gray-100 text-white">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white uppercase">
              BS Science
            </span>
            <span className="mt-1 text-white text-sm">1 Aug 2023</span>
          </div>
          <div className="md:flex-grow ">
            <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
                SHAHEED MOHTARMA BENAZEER BHUTTO UNIVERSITY BENAZIRABAD 
            </h2>
            <p className="leading-relaxed ">
            I am proud to share that I have completed my BS in Science from Shaheed Benazir Bhutto University. This journey has been incredible.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MobileEducation
