
import Contact from "@/components/ui/Contact"
import Education from "@/components/ui/Education"
import Projects from "@/components/ui/Projects"
import Skills from "@/components/ui/Skills"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Details() {
  return (
    <Tabs defaultValue="education" className="w-full p-3 ">
      <TabsList className="grid w-full grid-cols-4 bg-blue-950 text-white font-bold">
        {/* tabs triger button */}
        <TabsTrigger value="education">EDUCATION</TabsTrigger>
        <TabsTrigger value="skills">SKILLS</TabsTrigger>
        <TabsTrigger value="projects">PROJECTS</TabsTrigger>
        <TabsTrigger value="contact">CONTACT</TabsTrigger>

        
      </TabsList>
      {/* tabs content here */}
      {/* education */}
      <TabsContent value="education">
        <Education />
      </TabsContent>
       {/* skills */}
       <TabsContent value="skills">
        <Skills />
      </TabsContent>
       {/* projects */}
       <TabsContent value="projects">
        <Projects />
      </TabsContent>
      {/* Contact */}
      <TabsContent value="contact">
        <Contact />
      </TabsContent>
    </Tabs>
  );
}

