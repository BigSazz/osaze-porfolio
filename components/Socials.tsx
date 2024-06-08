import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/bigsazz" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/osaze-oviawe-a8b4345a",
  },
  // { icon: <FaYoutube />, path: "" },
  {
    icon: <FaTwitter />,
    path: "https://www.twitter.com/iamsazzy",
  },
];

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, idx) => {
        return (
          <Link
            key={idx}
            href={social.path}
            target="_blank"
            className={iconStyles}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};
