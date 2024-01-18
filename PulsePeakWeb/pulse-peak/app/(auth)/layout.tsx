import Navbar from "@/components/Navbar";
import { Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse Peak | Health Solution",
  description: "Health SaaS Solution",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
