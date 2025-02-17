import { Link } from "react-router";

const Header = () => {
  const links = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Vans",
      path: "/",
    },
  ];

  const linksEl = links.map((link) => (
    <li
      key={link.name}
      className="text-van-gray-700 hover:text-van-gray-900 hover:underline"
    >
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));
  return (
    <header
      id="header"
      className="flex w-full items-center justify-between px-6 py-6"
    >
      <Link to="/" className="text-2xl font-bold uppercase hover:underline">
        #Vanlife
      </Link>
      <nav>
        <ul className="flex gap-4">{linksEl}</ul>
      </nav>
    </header>
  );
};

export default Header;
