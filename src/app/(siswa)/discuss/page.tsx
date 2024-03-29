"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { ChevronLeft } from "lucide-react";
import MicrophoneSVG from "../../../../public/images/microphone-chat.svg";

export default function HomeSiswa() {
  return (
    <main className="container flex min-h-screen flex-col items-center py-8 px-2">
      {/* Header - Nav */}
      <header className="container flex items-center w-full justify-between">
        <nav className="">
          <Link href="/home-pengajar" className="flex justify-start">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <h1 className="text-center flex text-2xl sm:font-semibold text-ungu-800 justify-center font-bold">Ruang Diskusi</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
      {/* Chat with bot */}
      <div className="container py-10">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="items-center flex">
              <Image className="mr-2" src="/images/bonbon-girl-5.png" alt="alt" width={50} height={50} />

              <div className="bg-ungu-300 rounded-lg md:w-2/3 w-full pt-3 p-6 xl:p-6 xl:text-lg">
                <p className="font-sm text-md text-purple-800">Clara</p>
                <p className="text-pretty">Hai Zahwa! Topik diskusi kita kali ini adalah pancasila. Apa yang kamu tau tentang pancasila?</p>
              </div>
            </div>

            <div className="py-4">
              {/* Audio from user */}
              <div className="flex flex-col justify-start">
                <p className="ml-auto xl:w-2/4 sm:w-3/4  text-start font-sm text-lg text-purple-800 py-1">You</p>

                <figure className="flex flex-col ">
                  <audio
                    className="xl:w-2/4 sm:w-3/4 ml-auto text-blue-500 rounded-lg"
                    controls
                    src="https://soundcloud.com/user-831146563/cat-meowing-sound-effects?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  />
                  <figcaption className="text-pretty text-right p-1 text-neutral-600 italic">Bisakah kamu langsung memberikan jawabannya?</figcaption>
                </figure>
              </div>
            </div>

            <div className="items-center flex">
              <Image className="mr-2" src="/images/bonbon-girl-5.png" alt="alt" width={50} height={50} />
              <div className="bg-ungu-300 rounded-lg md:w-2/3 w-full pt-3 p-6 xl:p-6 xl:text-lg">
                <p className="font-sm text-md text-purple-800">Clara</p>
                <p className="text-pretty">
                  Penting untuk kamu belajar bagaimana memahami topik ini sendiri. Apa 1 kata yang terlintas dipikiranmu ketika mendengar pancasila?
                </p>
              </div>
            </div>

            <div className="py-4">
              {/* Audio from user */}
              <div className="flex flex-col justify-start">
                <p className="ml-auto xl:w-2/4 sm:w-3/4  text-start font-sm text-lg text-purple-800 py-1">You</p>
                <figure className="flex flex-col ">
                  <audio
                    className="xl:w-2/4 sm:w-3/4 ml-auto text-blue-500 rounded-lg"
                    controls
                    src="https://soundcloud.com/user-831146563/cat-meowing-sound-effects?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  />
                  <figcaption className="text-pretty text-right p-1 text-neutral-600 italic">Dasar negara</figcaption>
                </figure>
              </div>
            </div>

            <div className="flex justify-center items-center mt-12">
              <div className="p-2 rounded-full shadow-md bg-neutral-50">
                <div className="p-2 text-white fill-white rounded-full border-4 border-purple-500 hover:bg-purple-500">
                  <MicrophoneSVG width={50} height={50} color="#a855f7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
