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
          <Image src={logoImg} alt="A plate with food on it" priority />
          Sii Media
        </Link>
        <div className="flex">
          <div className="p-0 mr-3">
            <h3 className={classes.h2}>info@siimedia.net</h3>
            <h3 className={classes.h2}>+971 54 561 5757</h3>
          </div>
          <LanguageChanger className="p-0"></LanguageChanger>
        </div>
      </header>
    </>
  );
}
