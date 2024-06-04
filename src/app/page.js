import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10 max-w-5xl w-full">
        <button className="size-10">
         <a href="/about">About</a>
        </button>
      </div>
    </main>
  );
}
