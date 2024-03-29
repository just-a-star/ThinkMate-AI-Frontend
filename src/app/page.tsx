import Image from "next/image";
import { Button } from "../app/components/ui/button";
import { TypewriterEffect } from "../app/components/ui/typewriter-effect";
import { SparklesCore } from "../app/components/ui/sparkles";
import Link from "next/link";
export default function Home() {
  // Title effects
  const words = [
    {
      text: "Welcome",
      className: "text-white text-4xl ",
    },
    { text: "to!", className: "text-white text-4xl" },

    {
      text: "Thinkmate",
      className: "text-purple-600 text-4xl",
    },
    {
      text: "AI",
      className: "text-purple-600 text-4xl ",
      cursorClassName: "text-purple-600",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-indigo-950 p-12">
      {/* Hero */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center z-20 ">
        <Image className="z-10 " src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        {/* <h1 className="text-center text-white text-4xl font-semibold mt-8">ThinkMate AI!</h1> */}
        <TypewriterEffect className="mt-8 break-keep" cursorClassName="bg-purple-800" words={words} />
        <p className="p-6 text-slate-300 text-center">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      <div className="flex flex-row justify-center space-x-3 w-full z-20">
        <Link href="/home">
          <Button className="bg-white text-purple-800 p-6 px-12 rounded-lg mt-2 hover:bg-purple-200 hover:text-purple-950">Siswa</Button>
        </Link>
        <Link href="home-pengajar">
          <Button className="bg-white text-purple-800 p-6 px-12 rounded-lg mt-2 hover:bg-purple-200 hover:text-purple-950">Guru</Button>
        </Link>
      </div>
      <div className="flex flex-col z-20">
        <p className="text-neutral-300 text-sm pt-2 relative">Mau masuk sebagai siapa?</p>
      </div>
    </main>
  );
}
