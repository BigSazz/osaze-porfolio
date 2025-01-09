"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaUser,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// About data
const about = {
  icon: <FaUser />,
  title: "About Me",
  description:
    "I am a frontend developer with a passion for creating beautiful and functional web applications.",
  goal: "Aspiring to work on more innovative projects that challenge my skills and contribute to impactful digital experiences.",
  info: [
    { fieldName: "Name", filedValue: "Osaze Oviawe" },
    { fieldName: "Phone", filedValue: "+234 802 554 6910" },
    { fieldName: "Experience", filedValue: "5+ Years" },
    { fieldName: "Nationality", filedValue: "Nigerian" },
    { fieldName: "Email", filedValue: "osaze.o.oviawe@gmail.com" },
    { fieldName: "Freelance", filedValue: "Available" },
    { fieldName: "Languages", filedValue: "English, Yoruba, French" },
  ],
};

// experience data
const experience = {
  icon: <FaBriefcase />,
  title: "My Experience",
  description:
    "I bring over 5 years of expertise as a Frontend Developer, focusing on React and Next.js to create user-centric web applications. With a proven track record in enhancing user experiences and optimizing website performance, I excel in collaborating with cross-functional teams to deliver scalable solutions. Here are highlights from my journey:",
  items: [
    {
      company: "Sendbox Software Technologies",
      position: "Frontend Developer",
      duration: "2020 - Present",
      type: "Full-time",
    },
    {
      company: "Conjure",
      position: "Frontend Developer",
      duration: "2024 - 2025",
      type: "Contract",
    },
    {
      company: "EverySell",
      position: "Frontend Developer",
      duration: "2021 - 2022",
      type: "Contract",
    },
    {
      company: "Microsmart Solutions Ltd",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      type: "Full-time",
    },
  ],
};

// education data
const education = {
  icon: <FaGraduationCap />,
  title: "My Education",
  description:
    "I have pursued formal education in the field of Accounting, complemented by various certifications in web development. Below are the details of my academic qualifications and relevant certifications:",
  items: [
    {
      institution: "University of Abuja",
      degree: "Bachelor of Science in Accounting",
      duration: "2006 - 2010",
    },
    {
      institution: "Udemy",
      degree: "The Complete 2023 Web Development Bootcamp",
      duration: "2023",
    },
  ],
};

// skills data
const skills = {
  icon: <FaTools />,
  title: "My Skills",
  description:
    "I have acquired a diverse set of technical skills through hands-on experience and continuous learning. I am proficient in the following technologies and tools:",
  skillList: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[200px] py-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <>
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                          </>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {item.company} - {item.type}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent
              value="skills"
              className="w-full h-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, idx) => {
                    return (
                      <li key={idx}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <div className="flex flex-col gap-2">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.goal}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, idx) => {
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-sm">{info.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
