import { Link, Outlet } from "react-router-dom";
import './Layout.scss';

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
          <li>
            <Link to="/useStateDemo4">UseState Demo 4</Link>
          </li>
          <li>
            <Link to="/useStateDemo5">UseState Demo 5</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
