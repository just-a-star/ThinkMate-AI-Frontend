"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { ChevronLeft } from "lucide-react";
import MicrophoneSVG from "../../../../public/images/microphone-chat.svg";
import { Textarea } from "../../components/ui/textarea";
import { useState, useEffect, SetStateAction, use, useRef } from "react";
import Providers from "../../../config/Providers";
import { useQuiz } from "../../services/queries";
import { postFetcher } from "../../services/fetcher";
import { mutate } from "swr";
import BotResponse from "../../components/bot-chat-response";
import UserResponse from "../../components/user-chat-audio";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import quizSlice, { setName, setStarted, setNomorAbsen, setQuizDetails, setShowDialog, setUsername } from "../../../store/quizSlice";
import chatSlice, { addMessage } from "../../../store/chatSlice";
import AudioInput from "../../components/audio-input";

export default function DiscussSiswa() {
  const [conversationId, setConversationId] = useState(null);
  const [userMessage, setUserMessage] = useState("");

  const [coba, setCoba] = useState({ nama: "s", id: "" });

  const { messages } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  const quizState = useSelector((state: RootState) => state.quiz);
  const chatState = useSelector((state: RootState) => state.chat);

  
  const hasStartedConversation = useRef(false);
  useEffect(() => {
    const user_name = localStorage.getItem("user_name");
    const user_quiz_id = localStorage.getItem("user_quiz_id");

    setCoba({ nama: user_name || "", id: user_quiz_id || "" });
    if (!hasStartedConversation.current) {
      const startConversation = async () => {
        const data = {
          quiz_id: quizState.quizDetails.id || user_quiz_id,
          name: quizState.name || user_name,
        };
      
        const response = await postFetcher("/conversation", data);
        setConversationId(response.data.conversation_id);

        dispatch(
          addMessage({
            type: "bot",
            message: response.data.message,
            audioSrc: "",
            placeholder: "",
            role: "",
            id: 0,
            CreatedAt: "",
            UpdatedAt: "",
            DeletedAt: "",
            conversation_id: 0,
          })
        );

        // setConversationId(response.data.id);
        dispatch(setStarted(true));
      };

      startConversation();
      hasStartedConversation.current = true;
    }
  }, [quizState.quizDetails.id, quizState.name, quizState.started, dispatch]);

  const handleMessageChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userMessage.trim()) return; // Prevent sending empty messages

    const messageData = {
      message: userMessage,
    };
    const apiUrl = `/conversation/${conversationId}/message`;

    try {
      const response = await postFetcher(apiUrl, messageData);
      console.log(conversationId);
      console.log("user message: ", userMessage);
      if (response.data) {
        dispatch(
          addMessage({
            type: "user",
            message: userMessage,
            audioSrc: "",
            placeholder: "",
            role: "",
            id: 0,
            CreatedAt: "",
            UpdatedAt: "",
            DeletedAt: "",
            conversation_id: 0,
          })
        );

        dispatch(
          addMessage({
            type: "bot",
            message: response.data.message,
            audioSrc: "",
            placeholder: "",
            role: "",
            id: 0,
            CreatedAt: "",
            UpdatedAt: "",
            DeletedAt: "",
            conversation_id: 0,
          })
        );
      }

      setUserMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };
  return (
    <main className="container flex min-h-screen flex-col items-center py-8 px-2">
      <p>{quizState.name || coba.nama} </p>
      <p>{quizState.quizDetails.id || coba.id}</p>
      <p>{conversationId}</p>
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
            <div>
              {messages.map((msg, index) =>
                msg.type === "bot" ? (
                  <BotResponse key={index} message={msg.message ?? ""} />
                ) : (
                  <UserResponse key={index} message={msg.message ?? ""} audioSrc={msg.audioSrc ?? ""} placeholder={msg.placeholder ?? ""} />
                )
              )}
            </div>

            <div className="flex flex-col justify-center items-center mt-12">
              <div className="grid w-full gap-2">
                <form onSubmit={handleSubmit} className="grid w-full gap-2">
                  <Textarea onChange={(e) => setUserMessage(e.target.value)} value={userMessage} placeholder="Type your message here." />
                  <Button type="submit" className="bg-ungu-800 hover:bg-purple-900 py-4">
                    Send message
                  </Button>
                </form>
              </div>
              <AudioInput />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
