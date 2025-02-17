// import React from "react"

// function MobileEducation() {
//   return (
//     <div className="bg-blue-950 w-full p-5">

// <h4 className="scroll-m-20 border-b border-white pb-2 text-xl font-semibold tracking-tight text-white">
//       EDUCATION
//     </h4>


// {/* bs science */}
// <div className="-my-8 divide-y-2 divide-gray-100 text-white">
//         <div className="py-8 flex flex-wrap md:flex-nowrap">
//           <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//             <span className="font-semibold title-font text-white uppercase">
//               BS Computer Science
//             </span>
//             <span className="mt-1 text-white text-sm">2025-2029</span>
//           </div>
//           <div className="md:flex-grow ">
//             <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
//               UNIVERSITY OF SINDH JAMSHORO
//             </h2>
//             <p className="leading-relaxed ">
//             I am currently pursuing a Bachelor degree in Computer Science** at the University of Sindh, Jamshoro. My studies focus on programming, software development, and problem-solving. I am passionate about technology and continuously explore new frameworks and tools. Through various projects, I have gained hands-on experience in frontend and backend development. My goal is to apply my knowledge to real-world challenges and grow as a skilled developer.
//             </p>
//           </div>
//         </div>
//       </div>

      
// {/* piaic */}
// <div className=" mt-4 divide-y-2 divide-gray-100 text-white">
//         <div className="py-8 flex flex-wrap md:flex-nowrap">
//           <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//             <span className="font-semibold title-font text-white uppercase">
//             Agentic AI Engineering
//             </span>
//             <span className="mt-1 text-white text-sm">2024-2026</span>
//           </div>
//           <div className="md:flex-grow ">
//             <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
//                 Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
//             </h2>
//             <p className="leading-relaxed ">
//             Iam currently pursuing the Cloud Native Applied Generative AI Engineering course at PIAIC! With a strong focus on cutting-edge technologies like AI, Python, Docker and so on.
//             </p>
//           </div>
//         </div>
//       </div>



//           {/* governor house */}
//           <div className="-my-8 divide-y-2 divide-gray-100 text-white">
//         <div className="py-8 flex flex-wrap md:flex-nowrap">
//           <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//             <span className="font-semibold title-font text-white uppercase">
//               Cloud Native GEN-AI Eng
//             </span>
//             <span className="mt-1 text-white text-sm ">2024-2026</span>
//           </div>
//           <div className="md:flex-grow ">
//             <h2 className="text-xl font-medium text-white title-font mb-2 uppercase">
//                 Governors Initiative for Artificial Intelligence and Computing (GIAIC)
//             </h2>
//             <p className="leading-relaxed ">
//             Iam  enrolled in the Certified Cloud Applied Generative AI Eng and Metaverse course at GIAIC. In this program, Iam honing my skills in HTML, CSS, TS, npm, Node.js, Next.js, and so on.
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default MobileEducation



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Education = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="max-w-md mx-auto  p-5 bg-blue-950  ">
      <h2 className="text-xl font-bold text-white text-center">My Education</h2>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white">BS Computer Science</h3>
        <h3 className="text-lg font-semibold text-white">UNIVERSITY OF SINDH JAMSHORO </h3>
        <p className="text-sm text-white">2025 - 2029</p>
        <Button 
          className="w-full mt-2 bg-blue-900 text-white hover:bg-blue-700" 
          onClick={() => setIsOpen1(!isOpen1)}
        >
          {isOpen1 ? "Hide Details" : "Show Details"}
        </Button>
        {isOpen1 && (
          <motion.p 
            className="mt-2 text-white p-3 bg-blue-900 rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            I am currently pursuing a Bachelor degree in Computer Science at the University of Sindh, Jamshoro. My studies focus on programming, software development, and problem-solving. I am passionate about technology and continuously explore new frameworks and tools. Through various projects, I have gained hands-on experience in frontend and backend development. My goal is to apply my knowledge to real-world challenges and grow as a skilled developer.
          </motion.p>
        )}
      </div>
      

      {/* piaic  */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white">Agentic AI Engineering</h3>
        <h3 className="text-lg font-semibold text-white">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h3>
        <p className="text-sm text-white">2023 - 2026</p>
        <Button 
          className="w-full mt-2 bg-blue-900 text-white hover:bg-blue-700" 
          onClick={() => setIsOpen2(!isOpen2)}
        >
          {isOpen2 ? "Hide Details" : "Show Details"}
        </Button>
        {isOpen2 && (
          <motion.p 
            className="mt-2 text-white p-3 bg-blue-900 rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            I am currently pursuing the Cloud Native Applied Generative AI Engineering course at PIAIC! With a strong focus on cutting-edge technologies like AI, Python, Docker and so on.
          </motion.p>
        )}
      </div>
      

      {/* governor house */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white">Cloud Applied Generative AI Engineering</h3>
        <h3 className="text-lg font-semibold text-white">Governors Initiative for Artificial Intelligence and Computing (GIAIC)</h3>
        <p className="text-sm text-white">2024 - 2026</p>
        <Button 
          className="w-full mt-2 bg-blue-900 text-white hover:bg-blue-800" 
          onClick={() => setIsOpen3(!isOpen3)}
        >
          {isOpen3 ? "Hide Details" : "Show Details"}
        </Button>
        {isOpen3 && (
          <motion.p 
            className="mt-2 text-white p-3 bg-blue-900 rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            I am enrolled in the Certified Cloud Applied Generative AI Eng and Metaverse course at GIAIC. In this program, I am honing my skills in HTML, CSS, TS, npm, Node.js, Next.js, and so on.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Education;
