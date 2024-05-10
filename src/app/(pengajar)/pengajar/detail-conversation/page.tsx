"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { ChevronLeft } from "lucide-react";
import MicrophoneSVG from "../../../../public/images/microphone-chat.svg";
import { Textarea } from "../../../components/ui/textarea";
import { useState, useEffect, SetStateAction, use, useRef } from "react";
import Providers from "../../../../config/Providers";
import { useQuiz } from "../../../services/queries";
import { getFetcher, postFetcher } from "../../../services/fetcher";
import { mutate } from "swr";
import BotResponse from "../../../components/bot-chat-response";
import UserResponse from "../../../components/user-chat-audio";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import quizSlice, { setName, setStarted, setNomorAbsen, setQuizDetails, setShowDialog, setUsername } from "../../../../store/quizSlice";
import chatSlice, { addMessage, resetChatState } from "../../../../store/chatSlice";
import AudioInput from "../../../components/audio-input";
import { useSearchParams } from "next/navigation";

export default function DetailConversation() {
  const [conversationId, setConversationId] = useState(null);
  const [userMessage, setUserMessage] = useState("");

  const [lastMessage, setLastMessage] = useState("");
  const { messages } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  const quizState = useSelector((state: RootState) => state.quiz);
  const chatState = useSelector((state: RootState) => state.chat);

  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await getFetcher(`/conversation/${id}/message`);
        if (response.data) {
          response.data.forEach((message: any) => {
            dispatch(addMessage(message));
          });
        }
        console.log("Conversation Data", response.data);
      };
      fetchData();
    } else {
      alert("No id or wrong id provided");
    }
  }, [id, dispatch]);

  return (
    <main className="container flex min-h-screen flex-col items-center py-8 px-2">
      <header className="container flex items-center w-full justify-between">
        <nav>
          <Link href="/pengajar/history-discussion">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold justify-center">Ruang Diskusi</h1>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>

      <div className="container py-10">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.role === "bot" && <BotResponse message={msg.message} />}
              {msg.role === "user" && <UserResponse message={msg.message} audioSrc={""} placeholder={""} />}
              {msg.role === "assistant" && <BotResponse message={msg.message} />}
            </div>
          ))
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </main>
  );
}
