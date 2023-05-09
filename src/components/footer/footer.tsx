import Styles from "./footer.module.css";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Image from "next/image";
import NextLink from "next/link";

import Link from "@/components/link/link";

import { Socials } from "@/constants/socials";

import { ISocial } from "@/interfaces";

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  console.log("test")
  return (
    <Box className={Styles.container}>
      <Link
        href={href}
        underline="none"
        color="info.main"
        className={Styles.link}
      >
        {name}
      </Link>
    </Box>
  );
};

const SocialLinks = ({ socials }: { socials: ISocial[] }) => {
  const elementRows = socials.map((social) => (
    <Box key={social.name} className={Styles.social_wrap}>
      <a href={social.link} target="_blank" rel="noreferrer">
        <Image
          src={social.iconUrl}
          alt={`${social.name} logo`}
          width={16}
          height={16}
          className={Styles.social_img}
        />
      </a>
    </Box>
  ));

  return <>{elementRows}</>;
};

export function Footer() {
  const date: Date = new Date();

  return (
    <Box className={Styles.footer_container}>
      <Box className={Styles.logo_wrap}>
        <NextLink href={"/"}>
          <Image
            src="/images/logos/octalogic.svg"
            alt="Octalogic logo"
            width={60}
            height={60}
            className={Styles.logo_img}
          />
        </NextLink>
      </Box>
      <Box className={Styles.links_container}>
        <Box className={Styles.links_wrap}>
          <FooterLink name={"Contact"} href={"contact"} />
          <FooterLink name={"Home"} href={"/"} />
          <FooterLink name={"Remote Resources"} href={"remote-resources"} />
        </Box>
        <Box className={Styles.links_wrap}>
          <FooterLink name={"Privacy"} href={"privacy-policy"} />
          <FooterLink name={"About"} href={"about"} />
          <FooterLink name={"Web Dev"} href={"web-development"} />
        </Box>
        <Box className={Styles.links_wrap}>
          <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
          <FooterLink name={"Services"} href={"services"} />
          <FooterLink name={"Mobile Dev"} href={"mobile-development"} />
        </Box>
      </Box>
      <Box className={Styles.socials_container}>
        <SocialLinks socials={Socials} />
      </Box>
      <Typography component="div" className={Styles.copyright}>
        © 2017 - {date.getFullYear()}, Octalogic Tech LLP. All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
