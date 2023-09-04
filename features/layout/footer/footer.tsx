import FooterLink, { FooterLinkProps } from "./footer-link";
import styles from "./footer.module.scss";
import { version } from "package.json";

export function Footer() {
  const footerLinks: FooterLinkProps[] = [
    {
      text: "Docs",
      href: "#",
      className: styles.link,
    },
    {
      text: "API",
      href: "#",
      className: styles.link,
    },
    {
      text: "Help",
      href: "#",
      className: styles.link,
    },
    {
      text: "Community",
      href: "#",
      className: styles.link,
    },
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.linksList}>
        {footerLinks.map((link, index) => {
          return (
            <FooterLink
              key={index}
              text={link.text}
              href={link.href}
              className={link.className}
            ></FooterLink>
          );
        })}
      </ul>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.logo} src="/icons/logo-small.svg" alt="Logo" />
      <p className={styles.versionText}>Version: {version}</p>
    </footer>
  );
}
