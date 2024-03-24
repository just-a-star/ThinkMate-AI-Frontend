import Image from "next/image";
import Link from "next/link";
import { ButtonDialog } from "../../components/btn-generate-dialog";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

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
    </main>
  );
}
