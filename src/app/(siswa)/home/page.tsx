import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../components/ui/select";
export default function HomeSiswa() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Hero */}
      <div className="flex flex-col items-center text-center  ">
        <Image src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        <h1 className="text-center text-4xl text-wrap font-semibold mt-8">
          Welcome to
          <span className="text-purple-800 text-nowrap block"> ThinkMate AI!</span>
        </h1>
        <p className="py-6 text-pretty text-slate-500 block">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      {/* Form PIN */}
      <div className="flex flex-col justify-start mt-1">
        <h2 className="text-xl text-slate-700">PIN disediakan pengajar</h2>
        <input
          name="pin"
          type="text"
          maxLength={6}
          pattern="[0-9]{6}"
          placeholder="Masukkan PIN"
          className="px-10 text-lg p-4 border border-slate-300 rounded-lg"
        />

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-900 text-white font-semibold text-lg py-6 rounded-lg mt-4 border-none" variant="outline">
              Go!
            </Button>
          </DialogTrigger>
          <DialogContent className="pb-0 rounded-lg px-0 m-0 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="pl-4 text-center text-xl text-green-600">Isi Nama dan Nomor Absen Kamu!</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center">
              <Image src="/images/alert-true.png" alt="alt" width={100} height={100} />
              <DialogDescription className="text-center font-semibold text-xl text-gray-800 ">52431 - Kelas Pancasila</DialogDescription>

              <div className="pt-4 w-full justify-center items-center flex flex-col">
                <Input type="text" placeholder="Nama Lengkap" required className="px-10 p-4 border border-slate-300 rounded-lg w-2/3 py-2 my-2" />
                <Input type="number" placeholder="Nomor Absen" required className="px-10 p-4 border border-slate-300 rounded-lg w-2/3 py-2 my-2" />
                <Input type="text" placeholder="Username (Optional)" className="px-10 p-4 border border-slate-300 rounded-lg w-2/3 py-2 my-2" />
                <label className="text-sm text-neutral-500 font-normal">Tips: username digunakan AI untuk memanggil kamu!</label>
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Link href="/discuss" className="w-full ">
                <Button className="text-white w-full items-center  bg-purple-800" type="submit">
                  Mulai diskusi sekarang!
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <p className="text-center text-slate-500 mt-4">
          Bingung cara pakainya?{" "}
          <a href="#" className="text-purple-800">
            Lihat panduan disini!
          </a>
        </p>
      </div>
    </main>
  );
}
