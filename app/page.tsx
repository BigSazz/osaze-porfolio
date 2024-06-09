import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

// Components
import { Socials } from "@/components/Socials";
import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*My introduction*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Software Developer
              <FaCode className="text-accent size-6 inline-block ml-2" />
            </span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />{" "}
              <span className="text-accent">Osaze Oviawe</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/60">
              I specialize in building and optimizing user-centric web
              applications with over 4 years of experience in React and Next.js.
              I have a strong track record of improving user experiences and
              website performance.
            </p>
            <p className="max-w-[500px] mb-9 text-white/60">
              Passionate about creating impactful digital solutions and
              enhancing user experiences through innovative front-end
              development.
            </p>
            {/*btn & socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link href="/assets/Osaze-Oviawe-Resume-2024.pdf">
                  <span>Download CV</span>
                </Link>
                <FiDownload className="size-4" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*My photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
