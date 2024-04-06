"use client";
import { useDispatch } from "react-redux";
import useSpeechRecognition from "../../hooks/useSpeechRecognitionHooks";
import MicrophoneSVG from "../../../public/images/microphone-chat.svg";
import { addMessage } from "../../store/chatSlice";
const AudioInput = () => {
  const dispatch = useDispatch();

  const { startListening, stopListening, isListening, text } = useSpeechRecognition();

  const sendAudioMessage = () => {
    if (text.trim() !== "") {
      dispatch(
        addMessage({
          type: "user",
          message: text,
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
  };
  return (
    <div className="p-2 rounded-full shadow-md bg-neutral-50">
      <div
        className={`p-2 text-white fill-white rounded-full border-4 border-purple-500 ${isListening ? "bg-purple-500" : "hover:bg-purple-500"}`}
        onClick={isListening ? stopListening : startListening}
      >
        <MicrophoneSVG width={50} height={50} color="#a855f7" />
      </div>
      {isListening && (
        <button className="text-sm text-gray-600 mt-2" onClick={sendAudioMessage}>
          Stop and send
        </button>
      )}
    </div>
  );
};

export default AudioInput;
