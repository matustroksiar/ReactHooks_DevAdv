// import { Link, Outlet } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/useStateDemo1">UseState Demo 1</Link>
          </li>
          <li>
            <Link to="/useStateDemo2">UseState Demo 2</Link>
          </li>
          <li>
            <Link to="/useStateDemo3">UseState Demo 3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
