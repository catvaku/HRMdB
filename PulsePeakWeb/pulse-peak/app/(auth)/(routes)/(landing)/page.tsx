import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

const Landing = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex border-violet-500 items-center gap-4">
        <p className="text-3xl">PulsePeak</p>
        <Heart
          color="red"
          size={25}
          fill="red"
          className="animate-ping"
        ></Heart>
      </div>
      <div>
        <div className="flex items-start gap-2">
          <Link href="/sign-in">
            <Button variant="default">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Landing;
