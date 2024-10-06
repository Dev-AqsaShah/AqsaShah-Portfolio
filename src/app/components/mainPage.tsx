"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import {Sidebar} from "./sidebar";
import {Details} from "./Details";
import Card from "./mobComponents/Card"
import Education from "@/components/ui/Education";
import Skills from "@/components/ui/Skills";
import MobileCard from "./mobComponents/Card";
import MobileEducation from "./mobComponents/Education";
import MobileSkills from "./mobComponents/Skills";
import MobileProject from "./mobComponents/Project";
import MobileContact from "./mobComponents/Contact";

const MainPage = () => {

    useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);

  return (
    <div>
{/* mobile */}
    <div className="overflow-x-hidden   h-screen md:hidden ">
      {/* card */}
      <div data-aos="zoom-in">
      < MobileCard />
      </div>
      {/* education */}
      < MobileEducation />
      {/* skills */}
      <MobileSkills />
      {/* projects */}
      <MobileProject />
      {/* contact */}
      <MobileContact />
      </div>

{/* desktop */}
    <div className="hidden md:flex md:overflow-hidden  md:h-screen">



        <div className="w-1/5">
            <Sidebar/>
        </div>



        <div className="w-full">
            <Details />
        </div>
    
    </div>
    </div>
  );
};

export default MainPage
