import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  // { icon: <FaYoutube />, path: "" },
  {
    icon: <FaTwitter />,
    path: "",
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
