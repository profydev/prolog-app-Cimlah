export type FooterLinkProps = {
  text: string;
  href: string;
  className: string;
};

function FooterLink({ text, href, className }: FooterLinkProps) {
  return (
    <li className={className}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default FooterLink;
