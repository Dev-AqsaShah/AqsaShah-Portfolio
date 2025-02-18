


import React, { useState } from "react";
import { FaBootstrap, FaCss3Alt, FaDocker, FaFigma, FaGithub, FaHtml5, FaLinux, FaNpm, FaPython, FaReact } from "react-icons/fa";
import { SiGooglecolab, SiJupyter, SiShadcnui, SiTypescript } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { AiOutlineOpenAI } from 'react-icons/ai';

function MobileSkills() {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(prevState => !prevState);
  };

  return (
    <div className="w-full p-5 bg-blue-950">
      <h4 className="scroll-m-20 border-b border-white pb-2 text-xl font-semibold tracking-tight text-white text-center">
        SKILLS
      </h4>

      <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <SiTypescript className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                TypeScript
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[95%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">98%</h3>
          </div>

          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <RiNextjsFill className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Next.js
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[95%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">98%</h3>
          </div>

          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <FaPython className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Python
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[95%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">98%</h3>
          </div>

          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <FaGithub className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Git-GitHub
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[95%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">98%</h3>
          </div>

          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <FaHtml5 className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Sanity
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[95%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">98%</h3>
          </div>

      {/* Button to toggle skills */}
      <button
        onClick={toggleSkills}
        className="mt-4 bg-blue-800 text-white px-4 py-2 rounded"
      >
        {showSkills ? "Hide Skills" : "Show More"}
      </button>

      {/* Display skills only if showSkills is true */}
      {showSkills && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* html */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <FaHtml5 className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                HTML
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[95%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">98%</h3>
          </div>

          {/* CSS */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <FaCss3Alt className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                CSS
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-white">
              <div className="w-[94%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">96%</h3>
          </div>

          {/* TypeScript */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <SiTypescript className="text-blue-900 bg-white text-lg" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                TypeScript
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-black">
              <div className="w-[92%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">93%</h3>
          </div>

          {/* React */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <FaReact className="text-blue-900 bg-white text-2xl" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                React
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-black">
              <div className="w-[85%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">85%</h3>
          </div>

          {/* Next.js */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <RiNextjsFill className="text-blue-900 bg-white text-2xl" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Next.js
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-black">
              <div className="w-[90%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">90%</h3>
          </div>

          {/* Node.js */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <RiNextjsFill className="text-blue-900 bg-white text-2xl" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Node.js
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-black">
              <div className="w-[90%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">90%</h3>
          </div>

          {/* Tailwind CSS */}
          <div className="p-4 w-full">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                <RiTailwindCssFill className="text-blue-900 bg-white text-2xl" />
              </div>
              <h2 className="text-white text-lg font-semibold tracking-tight">
                Tailwind CSS
              </h2>
            </div>
            <div className="w-full h-1 rounded bg-black">
              <div className="w-[90%] h-1 bg-white rounded-lg" />
            </div>
            <h3 className="text-white text-sm font-semibold text-right tracking-tight">92%</h3>
          </div>

{/* tailwind blocks */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < RiTailwindCssFill className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white  font-semibold tracking-tight">
        T-BLOCK
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[88%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">88%</h3>
  </div>


  {/* figma (ui/ux design) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaFigma className="text-blue-900 bg-white text-lg"/>
      </div>
      <h2 className="text-white  font-semibold tracking-tight">
        FIGMA(UI/UX)
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[75%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">75%</h3>
  </div>


  {/* bootstrap */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaBootstrap className="text-blue-900 bg-white text-xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        BOOTSTRAP
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className='w-[78%] h-1 bg-white rounded-lg'/>
      </div>
      <h3 className='text-white text-sm font-semibold text-right tracking-tight'>78%</h3>
  </div>


  {/* shadcn (ui components) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < SiShadcnui className="text-blue-900 bg-white text-lg"/>
      </div>
      <h2 className="text-white font-semibold tracking-tight">
        SHADCN 
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[90%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">90%</h3>
  </div>


  {/* npm (node package manager) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaNpm className="text-blue-900 bg-white text-3xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        NPM
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[93%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">93%</h3>
  </div>


  {/* python */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaPython className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        PYTHON
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[90%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">90%</h3>
  </div>


  {/* prompt engineering (Ai models, gpt-3/4) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < AiOutlineOpenAI className="text-blue-900 bg-white text-3xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        Prompt.Eng (GPT-3/4)
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[94%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">94%</h3>
  </div>


  {/* google colab (data analysis, machine learning) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < SiGooglecolab className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        G_COLAB
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[70%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">70%</h3>
  </div>


  {/* jupyter notebook (data analysis, machine learning) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < SiJupyter className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        JUPYTER NOTEBOOK
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[60%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">60%</h3>
  </div>


  {/* docker */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaDocker className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        DOCKER
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[65%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">65%</h3>
  </div>


  {/* linux (ubuntu) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaLinux className="text-blue-900 bg-white text-3xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        UBUNTU
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className='w-[50%] h-1 bg-white rounded-lg'/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">50%</h3>
  </div>


  {/* git (version control) */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    < FaGithub className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        GIT/GITHUB
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[91%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">91%</h3>
  </div>


  {/* github / github desktop */}
  <div className="p-4 w-full md:w-1/3 ">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
    <FaGithub  className="text-blue-900 bg-white text-2xl"/>
      </div>
      <h2 className="text-white text-lg font-semibold tracking-tight">
        GITHUB DESKTOP
        </h2>
    </div>
      <div className="w-full h-1 rounded bg-black">
        <div className="w-[85%] h-1 bg-white rounded-lg"/>
      </div>
      <h3 className="text-white text-sm font-semibold text-right tracking-tight">85%</h3>
  </div>

        </div>
      )}
    </div>
  );
}

export default MobileSkills;
