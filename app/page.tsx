import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <ThemeSwitcher /> */}
    </>
  );
}
