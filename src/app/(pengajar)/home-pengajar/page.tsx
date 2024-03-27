import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
export default function HomePengajar() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {/* Hero */}
      <div className="flex flex-col items-center">
        <Image src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Welcome to
          <span className="text-purple-800 block"> ThinkMate AI!</span>
        </h1>
        <p className="p-6 text-slate-500">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      {/* Form PIN */}
      <div className="flex flex-col justify-start mt-1">
        <h2 className="text-xl text-slate-700">PIN disediakan pengajar</h2>
        <input type="text" placeholder="Masukkan PIN" className="px-10 p-4 border border-slate-300 rounded-lg" />

        <Link className="flex flex-col" href="/create-discussion">
          <Button className="bg-purple-900 text-white font-semibold py-6 text-lg rounded-lg mt-4">Login as Teachers</Button>
        </Link>
        <p className="text-center text-slate-500 mt-4">
          Belum punya akun?{" "}
          <a href="#" className="text-purple-800">
            Daftar disini
          </a>
        </p>
      </div>
    </main>
  );
}
