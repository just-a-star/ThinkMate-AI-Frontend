import Image from "next/image";
import Link from "next/link";
import { ButtonDialog } from "../../components/btn-generate-dialog";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function CreateDiscussion() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Hero */}
      <div className="flex flex-col items-center">
        <Image src="/images/smiling-paper.png" alt="ThinkMateAI Logo" width={256} height={256} priority />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Create a new
          <span className="text-purple-800 block">discussion</span>
        </h1>
        <p className="py-6 text-slate-500">Lorem ipmsum dolor sit amet</p>
      </div>

      {/* Form PIN */}
      <div className="flex flex-col justify-start  px-5">
        <h2 className="text-xl text-slate-700">PIN disediakan pengajar</h2>

        <input id="input-pin" type="text" placeholder="Enter a topic name" className="px-10 p-4 border border-slate-300 rounded-lg" />

        {/* <Link className="flex flex-col" href="/create-discussion"> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-900 text-white font-semibold text-lg py-6 rounded-lg mt-4 border-none" variant="outline">
              Generate PIN
            </Button>
          </DialogTrigger>
          <DialogContent className="pb-0 rounded-lg px-0 m-0 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl md:text-xl text-green-600">Berhasil membuat diskusi!</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center">
              <Image src="/images/alert-true.png" alt="alt" width={100} height={100} />
              <DialogDescription className="text-center font-semibold text-xl text-gray-800 ">52431</DialogDescription>
              <DialogDescription>Yuk, bagikan PIN ini ke siswa!</DialogDescription>
            </div>
            <DialogFooter className="mt-4">
              <Link href="/detail-discussion" className="w-full ">
                <Button className="text-white w-full items-center  bg-purple-800" type="submit">
                  Pantau detail diskusi
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* <ButtonDialog className="bg-purple-900 text-white font-semibold p-4 rounded-lg mt-4">Generate PIN</ButtonDialog> */}
        {/* </Link> */}

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
