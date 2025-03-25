import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayOut = () => {
  return (
    <section className="flex min-h-screen flex-col">
      {/* Nav Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="mt-14 flex-grow">
        {/* Outlet for nested routes */}
        <Outlet />
      </main>

      <footer className="mt-auto">
        <div className="flex h-14 items-center justify-center bg-gray-800 text-white">
          <p>
            &copy; {new Date().getFullYear()} Fashion Fusion. All rights
            reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default MainLayOut;
