"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { ChevronLeft } from "lucide-react";
import MicrophoneSVG from "../../../../public/images/microphone-chat.svg";
import { Textarea } from "../../components/ui/textarea";
import { useState, useEffect, SetStateAction } from "react";
import Providers from "../../../config/Providers";
import { useQuiz } from "../../services/queries";
import { postFetcher } from "../../services/fetcher";
import { mutate } from "swr";
import BotResponse from "../../components/bot-chat-response";
import UserResponse from "../../components/user-chat-audio";

export default function DiscussSiswa() {
  const [conversationId, setConversationId] = useState(null);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const startConversation = async () => {
      const data = {
        quiz_id: 31,
        name: "bintang",
      };
      const apiUrl = `/conversation/{conversationId}`;
      // get req
      // const response = await getFetcher(apiUrl, pinQuiz);
      const response = await postFetcher("/conversation", data);
      setConversationId(response.data.id);
    };
    startConversation();
  }, []);

  const handleMessageChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userMessage.trim()) return; // Prevent sending empty messages
    // Assuming '/messages' is your endpoint for sending messages
    const messageData = { text: messages }; // Adjust accordingly
    await postFetcher("/conversation", messageData); // Send the message
    setUserMessage(""); // Reset input field
    // Optionally fetch and update the conversation with the new message
  };

  const messagess = [
    { type: "bot", message: "Hai! Apa yang kamu tau tentang pancasila?" },
    { type: "user", audioSrc: "https://soundcloud.com/user-831146563/cat-meowing-sound-effects", placeholder: "Bisakah kamu langsung memberikan jawabannya?" },
    {
      type: "bot",
      message: "Penting untuk kamu belajar bagaimana memahami topik ini sendiri. Apa 1 kata yang terlintas dipikiranmu ketika mendengar pancasila?",
    },
    { type: "user", audioSrc: "https://soundcloud.com/user-831146563/cat-meowing-sound-effects", placeholder: "Dasar negara" },
  ];

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

            <div>
              {messagess.map((msg, index) =>
                msg.type === "bot" ? (
                  <BotResponse key={index} message={msg.message ?? ""} />
                ) : (
                  <UserResponse key={index} audioSrc={msg.audioSrc ?? ""} placeholder={msg.placeholder ?? ""} />
                )
              )}
            </div>

            <div className="flex flex-col justify-center items-center mt-12">
              <div className="grid w-full gap-2">
                <form onSubmit={handleSubmit} className="grid w-full gap-2">
                  <Textarea onChange={handleMessageChange} value={userMessage} placeholder="Type your message here." />
                  <Button type="submit" className="bg-ungu-800 hover:bg-purple-900 py-4">
                    Send message
                  </Button>
                </form>
              </div>
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
