import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-5 bg-[#2331] items-center">
      <div className="text-xl text-black">
        <p>
          <Link href="/">PulsePeak.com</Link>
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/sign-in">
          <Button variant="default">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
