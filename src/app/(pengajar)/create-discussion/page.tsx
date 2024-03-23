import Image from "next/image";
import Link from "next/link";
export default function HomePengajar() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Hero */}
      <div className="flex flex-col items-center">
        <Image src="/images/smiling-paper.jpg" alt="ThinkMateAI Logo" width={300} height={300} priority />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Create a new
          <span className="text-purple-800 block">discussion</span>
        </h1>
        <p className="p-6 text-slate-500">Lorem ipmsum dolor sit amet</p>
      </div>

      {/* Form PIN */}
      <div className="flex flex-col justify-start  px-5">
        <h2 className="text-xl text-slate-700">PIN disediakan pengajar</h2>

        <input id="input-pin" type="text" placeholder="Enter a topic name" className="px-10 p-4 border border-slate-300 rounded-lg" />

        <Link className="flex flex-col" href="/create-discussion">
          <button className="bg-purple-900 text-white font-semibold p-4 rounded-lg mt-4">Generate PIN</button>
        </Link>

        <p className="text-center text-slate-500 mt-4">
          Butuh bantuan?{" "}
          <a href="#" className="text-purple-800">
            FAQ
          </a>
        </p>
      </div>
    </main>
  );
}
