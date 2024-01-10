import Image from "next/image";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex border-violet-500 p-4 items-center gap-4">
        <p className="text-4xl">Pulse Peak UI</p>
        <Heart
          color="red"
          size={50}
          fill="red"
          className="animate-ping animate-pulse"
        ></Heart>
      </div>
    </main>
  );
}
