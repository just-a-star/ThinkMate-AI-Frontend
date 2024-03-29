import Image from "next/image";
import { Button } from "../app/components/ui/button";
export default function HomePengajar() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-purple-800 p-24">
      {/* Hero */}

      <div className="flex flex-col items-center ">
        <Image src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        <h1 className="text-center text-white text-4xl font-semibold mt-8">ThinkMate AI!</h1>
        <p className="p-6 text-slate-300">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      <div className="flex flex-col justify-start px-10 w-1/3">
        <Button className="bg-white text-purple-800 p-6 rounded-lg mt-4 hover:bg-purple-200 hover:text-purple-950">Mulai diskusi sekarang!</Button>
      </div>
    </main>
  );
}
