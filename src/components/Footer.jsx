import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="flex flex-row justify-between relative bottom-0 w-full px-8 border-t border-t-slate-400 py-3">
      <ul className="flex flex-row space-x-5 opacity-70">
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
      <ul className="flex flex-row space-x-5">
        <li>
          <a href="https://github.com/KaanCanINC" target="blank">
            <FaGithub className="hover:opacity-100 hover:text-black ease-in-out cursor-pointer" />
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
    </section>
  );
};
