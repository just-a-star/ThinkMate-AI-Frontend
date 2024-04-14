import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
export default function HomePengajar() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Hero */}
      <div className="flex flex-col items-center text-center  ">
        <Image src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        <h1 className="text-center text-4xl text-wrap font-semibold mt-8">
          Welcome back!
          {/* <span className="text-purple-800 text-nowrap block"> ThinkMate AI!</span> */}
        </h1>
        <p className="py-6 text-pretty text-slate-500 block">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      {/* Form PIN */}
      <div className="flex flex-col justify-start mt-1">
        <p className="text-lg mb-1 text-slate-700">Email Address</p>
        <input type="text" placeholder="Enter Email" className="text-left pl-5 pr-12 p-4 border border-slate-300 rounded-lg" />
        <p className="text-lg mb-1 text-slate-700">Password</p>
        <input type="password" placeholder="Enter Password" className="p-4 pl-5 pr-12 border border-slate-300 rounded-lg" />
        <div className="flex justify-end">
          <a href="#" className="text-purple-800 text-md font-medium p-2">
            Forgot Password?
          </a>
        </div>
        <Link className="flex flex-col" href="/create-discussion">
          <Button className="bg-purple-900 text-white font-semibold py-7 text-lg rounded-lg mt-4 hover:bg-purple-600">Login as Teacher</Button>
        </Link>
        <p className="text-center text-slate-500 mt-4">
          Belum punya akun?{" "}
          <a href="#" className="text-purple-800 font-medium">
            Daftar disini
          </a>
        </p>
      </div>
    </main>
  );
}
