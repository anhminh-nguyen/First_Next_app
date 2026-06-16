import Navbar from "@/components/navigation/navbar";
import LeftNavbar from "@/components/navigation/navbar/LeftNavbar";
import RightSidebar from "@/components/navigation/navbar/RightSidebar";

import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftNavbar />

        <section className="flex min-h-screen flex-1 flex-col px-16 py-26 pt-36 max-lg:px-14 max-md:pb-16 max-sm:px-3">
          <div className="w-full">{children}</div>
        </section>

        <RightSidebar />
      </div>
    </main>
  );
};
export default RootLayout;
