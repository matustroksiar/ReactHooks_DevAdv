// import { Link, Outlet } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/useStateDemo1">UseState Demo1</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
