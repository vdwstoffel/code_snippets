import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation /> {/* Add a navigation header */}
      <Outlet /> {/* Display all child pages */}
    </>
  );
}
