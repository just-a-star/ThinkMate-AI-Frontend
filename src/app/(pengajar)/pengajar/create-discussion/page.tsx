"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonDialog } from "../../../components/btn-generate-dialog";
import { Button } from "../../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";

import { useState } from "react";
import { postFetcher } from "../../../services/fetcher";
import { mutate } from "swr";
import GuruNav from "../../../components/guru-nav";

export default function CreateDiscussion() {
  // Generate Quiz PIN
  const [quizData, setData] = useState({ topic: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quizResponse, setQuizResponse] = useState({ pin: "", id: null, topic: "" });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setData({ ...quizData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // post req
      const response = await postFetcher("/quiz", quizData);
      if (response && response.data) {
        setQuizResponse({
          pin: response.data.pin, // Correctly accessing the pin from the response
          id: response.data.ID, // Accessing the ID
          topic: response.data.topic, // Accessing the topic
        });
      }
      mutate("/quiz");

      // add delay 500ms
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 3000);
    } catch (error) {
      console.error("Error creating quiz: ", error);
      if (error instanceof Error) {
        console.error("errorrr: ", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/* Title */}
      <h1 className="text-4xl font-black mb-5">ThinkMate AI</h1>

      {/* Nav */}
      <GuruNav />
      {/* Hero */}
      <div className="flex flex-col items-center mt-8">
        <Image src="/images/smiling-paper.png" alt="ThinkMateAI Logo" width={256} height={256} priority />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Create a new
          <span className="text-purple-800 block">discussion</span>
        </h1>
        <p className="py-6 text-center text-md text-slate-500 text-pretty">
          Untuk memulai sebuah diskusi mohon isi topik pada kolom yang telah tersedia di bawah ini, harap gunakan bahasa yang deskriptif
        </p>
        {/* <p className="py-6 text-center text-md text-slate-500 text-pretty">Mau diskusi apa hari ini?</p> */}
      </div>

      {/* Form PIN */}

      <div className="flex flex-col justify-start  px-5">
        <h2 className="text-lg text-slate-700">Tulis topik yang anda inginkan</h2>
        <form className="flex flex-col" onSubmit={handleGenerate}>
          <input
            id="topic"
            onChange={handleInputChange}
            name="topic"
            type="text"
            required
            placeholder="Peristiwa Sumpah Pemuda"
            className="px-10 p-4 border border-slate-300 rounded-lg"
          />

          {/* <Link className="flex flex-col" href="/create-discussion"> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="submit"
                disabled={isLoading}
                className={`bg-purple-900 text-white font-semibold text-lg py-6 rounded-lg mt-4 border-none ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                variant="outline"
              >
                {isLoading ? "Generating..." : "Generate PIN"}
              </Button>
            </DialogTrigger>

            <DialogContent className="pb-0 rounded-lg px-0 m-0 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl md:text-xl text-green-600">Berhasil membuat diskusi!</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center">
                <Image src="/images/alert-true.png" alt="alt" width={100} height={100} />

                <DialogDescription className="text-center font-semibold text-xl text-gray-800 ">{quizResponse.pin}</DialogDescription>
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
        </form>
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
