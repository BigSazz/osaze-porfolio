"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive, high-performance websites with modern web technologies for a seamless user experience.",
    href: "",
  },
  {
    num: "02",
    title: "API Integration",
    description:
      "Integrating third-party APIs to enhance functionality, ensuring secure and efficient data communication.",
    href: "",
  },
  {
    num: "03",
    title: "E-commerce Solutions",
    description:
      "Developing custom e-commerce platforms with product listings, shopping cart integration, and secure payments.",
    href: "",
  },
  {
    num: "04",
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed and performance with code optimization, image compression, and caching strategies.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="h2 group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
