import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bottom-0 flex w-full flex-row items-center justify-between border-t border-t-slate-400 px-8 py-3">
      <ul className="flex flex-col space-y-2 opacity-70 sm:flex-row sm:space-x-5 sm:space-y-0">
        <li>
          <Link to={"/"}>Ana Sayfa</Link>
        </li>
        <li>
          <Link to={"/products"}>Urunlerimiz</Link>
        </li>
        <li>
          <Link to={"/"}>Hakkimizda</Link>
        </li>
        <li>
          <Link to={"/"}>Bize ulasin</Link>
        </li>
      </ul>
      {/*Sosyal medya linkleri*/}
      <ul className="flex flex-row space-x-5">
        <li>
          <a href="https://github.com/KaanCanINC" target="blank">
            <FaGithub className="cursor-pointer ease-in-out hover:text-black hover:opacity-100" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kaancan-incirkus/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/chadturkk" target="blank">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
};
