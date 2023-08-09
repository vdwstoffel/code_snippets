import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Outlet /> {/* Display all child pages */}
    </>
  );
}
