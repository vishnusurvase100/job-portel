import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;