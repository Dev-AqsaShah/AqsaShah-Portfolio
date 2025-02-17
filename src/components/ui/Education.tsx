import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Education = () => {
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto bg-blue-950">
          <CardHeader>
            <CardTitle className=" text-2xl font-semibold tracking-tight uppercase text-white">Education</CardTitle>
          
          </CardHeader>
          <CardContent className="space-y-2">


            {/* bs computer science */}
      <div className="-my-8 divide-y-2 divide-gray-100 text-white">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white uppercase">
              BS Computer Science
            </span>
            <span className="mt-1 text-white text-sm">2025-2029</span>
          </div>
          <div className="md:flex-grow ">
            <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
                UNIVERSITY OF SINDH JAMSHORO
            </h2>
            <p className="leading-relaxed ">
            I am currently pursuing a Bachelor degree in Computer Science at the University of Sindh, Jamshoro. My studies focus on programming, software development, and problem-solving. I am passionate about technology and continuously explore new frameworks and tools. Through various projects, I have gained hands-on experience in frontend and backend development. My goal is to apply my knowledge to real-world challenges and grow as a skilled developer.            </p>
          </div>
        </div>
      </div>

{/* piaic */}
<div className="-my-8 divide-y-2 divide-gray-100 text-white">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white uppercase">
            Generative AI Engineering
            </span>
            <span className="mt-1 text-white text-sm">2024-2026</span>
          </div>
          <div className="md:flex-grow ">
            <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
                Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
            </h2>
            <p className="leading-relaxed ">
            Iam currently pursuing the Cloud Native Applied Generative AI Engineering course at PIAIC! With a strong focus on cutting-edge technologies like AI, Python, Docker, Google Colab, and Linux, this journey is all about mastering the tools and techniques shaping the future of cloud-native AI applications.
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
            <span className="mt-1 text-white text-sm ">2024-2026</span>
          </div>
          <div className="md:flex-grow ">
            <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
                Governors Initiative for Artificial Intelligence and Computing (GIAIC)
            </h2>
            <p className="leading-relaxed ">
            Iam currently enrolled in the Certified Cloud Applied Generative AI Engineering and Metaverse course at GIAIC. In this dynamic program, I am honing my skills in HTML, CSS, TypeScript, npm, Node.js, Next.js, and Tailwind CSS. This journey is all about understanding the intricacies of cloud technologies and their applications in the exciting world of the metaverse.
            </p>
          </div>
        </div>
      </div>
      
          </CardContent>
        </Card>
  )
}

export default Education
