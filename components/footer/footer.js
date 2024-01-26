import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

import logoImg from "@/assets/logo.jpg";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      website: "https://www.linkedin.com/company/sii-media",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      website: "https://www.instagram.com/siimedia",
    },
    {
      label: "Twitter",
      icon: FaXTwitter,
      website: "https://www.twitter.com/sii_media",
    },
    {
      label: "Facebook",
      icon: FaFacebook,
      website: "https://www.facebook.com/SiiMedia.ae",
    },
  ];

  const links = [
    [
      { label: "About us", key: "item-1-1" },
      { label: "Contact us", key: "item-1-3" },
    ],
    [
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Privacy policy", key: "item-2-4" },
    ],
  ];

  return (
    <div className="app min-h-screen flex items-end justify-center font-poppins mt-10">
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-gray-600 text-white w-full p-4 relative">
        <div className="  ">
          <div className="footer-img flex items-center">
            <Image
              src={logoImg}
              alt="logo"
              width={50}
              height={40}
              className="w-10 h-auto rounded-full"
            />
            <span className="text-3xl font-bold pl-2 text-white">
              SII Media
            </span>
          </div>
          <div className="infos text-gray-400 my-2">
            <span>Copyright © 2024 SII Media.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <a
                  key={`social-${index}`}
                  href={`${socialLink.website}`}
                  target="_blank"
                >
                  <Icon className="w-14 h-14 p-4 rounded-full bg-customPink hover:bg-white hover:text-black cursor-pointer" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-gray-400 cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                      }`}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
