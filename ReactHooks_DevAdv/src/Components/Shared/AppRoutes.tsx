import { Route, Routes } from "react-router-dom";
import { Layout } from "../../Pages/LayoutPage";
import { NotfoundPage } from "../../Pages/NotfoundPage";
import { UseStateDemo1 } from "../Demos/UseStateDemos/UseStateDemo1";
import { UseStateDemo2 } from "../Demos/UseStateDemos/UseStateDemo2";
import { UseStateDemo3 } from "../Demos/UseStateDemos/UseStateDemo3";
import { UseStateDemo4 } from "../Demos/UseStateDemos/UseStateDemo4";
import { UseStateDemo5 } from "../Demos/UseStateDemos/UseStateDemo5";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="useStateDemo1" element={<UseStateDemo1 />} />
        <Route path="useStateDemo2" element={<UseStateDemo2 />} />
        <Route path="useStateDemo3" element={<UseStateDemo3 />} />
        <Route path="useStateDemo4" element={<UseStateDemo4 />} />
        <Route path="useStateDemo5" element={<UseStateDemo5 />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};
