"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+234 802 554 6910",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "osaze.o.oviawe@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    value: "Lagos, Nigeria",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I am available for freelance or full-time work. Connect with me
                via the form below.
              </p>
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/*select*/}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a services</SelectLabel>
                    <SelectItem value="web_development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="api_integration">
                      Api Integration
                    </SelectItem>
                    <SelectItem value="e_commerce">E-Commerce</SelectItem>
                    <SelectItem value="wed_performance_optimizationo">
                      Web Performance Optimization
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*textarea*/}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/*button*/}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/*contact info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md flex items-center justify-center">
                    <span className="text-accent text-[28px]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm text-white/60">{item.title}</h5>
                    <p className="text-white">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
