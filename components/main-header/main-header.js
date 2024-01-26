import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import logoImg from "@/assets/logo.jpg";
import classes from "./main-header.module.css";
import LanguageChanger from "../translate/language-changer";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            className="rounded-full object-cover w-20 h-20 filter drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
            src={logoImg}
            alt="A plate with food on it"
            priority
          />
          Sii Media
        </Link>
        <div className="flex flex-col sm:flex-row">
          <div className="mr-0 sm:mr-3 mb-2 sm:mb-0">
            <a href={`mailto:info@siimedia.net`}>
              <h3 className="text-base sm:text-lg text-gray-200">
                info@siimedia.net
              </h3>
            </a>
            <a
              href={`https://wa.me/+971545615757`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-base sm:text-lg text-gray-200">
                +971 54 561 5757
              </h3>
            </a>
          </div>
          <div className="text-base sm:text-lg">
            <LanguageChanger className="p-0"></LanguageChanger>
          </div>
        </div>
      </header>
    </>
  );
}
