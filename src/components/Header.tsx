import "./header.css";
const Header = () => {
  const links = [
    {
      name: "About",
    },
    {
      name: "Vans",
    },
  ];

  const linksEl = links.map((link) => (
    <li
      key={link.name}
      className="text-van-gray-700 active:text-van-gray-900 active:underline"
    >
      <a href="">{link.name}</a>
    </li>
  ));
  return (
    <header
      id="header"
      className="flex px-6 py-8 bg-van-100 w-full justify-between"
    >
      <a className="skip-nav-link" href="#main">
        Skip to main content
      </a>
      <div className="text-2xl uppercase font-bold">#Vanlife</div>
      <ul className="flex gap-4">{linksEl}</ul>
    </header>
  );
};

export default Header;
