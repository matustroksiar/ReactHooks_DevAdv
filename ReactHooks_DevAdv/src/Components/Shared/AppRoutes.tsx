import { Route, Routes } from "react-router-dom";
import { Layout } from "../../Pages/LayoutPage";
// import { Home } from "../../Pages/HomePage";
import { NotfoundPage } from "../../Pages/NotfoundPage";
import { UseStateDemo1 } from "../Demos/UseStateDemos/UseStateDemo1";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="useStateDemo1" element={<UseStateDemo1 />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};
