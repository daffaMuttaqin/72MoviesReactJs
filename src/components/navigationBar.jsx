const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          72 Movies
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#trending" className="font-semibold">
              Trending
            </a>
          </li>
          <li>
            <a href="#superHero" className="font-semibold">
              Superhero
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
