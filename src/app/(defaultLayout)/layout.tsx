import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gradient-to-b from-[#e7f3e7] to-[#f6f6f6] ">
      <div className="max-w-[1372px] mx-auto md:py-5 md:px-0 px-3">
        <Navbar/>
      </div>
      <div className="max-w-[1372px] mx-auto md:py-5 md:px-0 px-3">{children}</div>
    </main>
  );
};

export default CommonLayout;
