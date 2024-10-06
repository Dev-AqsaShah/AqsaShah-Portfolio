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

{/* piaic */}
<div className="-my-8 divide-y-2 divide-gray-100 text-white">
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
            <span className="mt-1 text-white text-sm ">01-feb-2024</span>
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
            I am proud to share that I have completed my BS in Science from Shaheed Benazir Bhutto University. This journey has been incredibly enriching, equipping me with a solid foundation in scientific principles and critical thinking skills. As I move forward, I am excited to leverage my education and combine it with my ongoing learning in AI and Cloud Technologies to make meaningful contributions in the tech industry.
            </p>
          </div>
        </div>
      </div>

          </CardContent>
        </Card>
  )
}

export default Education
