import logoImg from "../assets/logo-text.png";

export default function Logo() {
  return (
    <a href="#home" className="flex items-center shrink-0" aria-label="Dev Stack home">
      <img src={logoImg} alt="Dev Stack" className="h-8 w-auto object-contain" />
    </a>
  );
}