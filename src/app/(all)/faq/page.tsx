import { StickyScrollFaq } from "../../components/sticky-scroll-faq";
import AudioInput from "../../components/audio-input";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link  from "next/link";

export default function Faq() {
  return (
    <main className="container flex min-h-screen flex-col items-center py-8 px-2">
        {/* Header */}
        <header className="container flex items-center w-full justify-between">
        <nav className="">
          <Link href="/home-pengajar" className="flex justify-start">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <h1 className="flex text-xl justify-center">Frequently Asked Questions</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
      <StickyScrollFaq />
    </main>
  );
}
