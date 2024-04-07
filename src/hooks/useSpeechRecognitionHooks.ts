import { useEffect, useState } from "react";

let recognition: any = null;

const initializeRecognition = () => {
  if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "id-ID";
    console.log("Speech Recognition initialized");
  } else {
    console.log("Speech Recognition not supported");
  }
};
const useSpeechRecognition = () => {
  const [text, setText] = useState<string>("");
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    initializeRecognition();
    if (!recognition) {
      return console.log("Speech Recognition not supported");
    }
    const onResult = (event: SpeechRecognitionEvent) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript);
      console.log(transcript);
      recognition.stop();
      setIsListening(false);
    };

    recognition.onresult = onResult;
    return () => {
      recognition.onresult = null;
    };
  }, []);

  const startListening = () => {
    if (!recognition) {
      console.error("Speech Recognition is not initialized or not supported.");
      return;
    }
    setText("");
    
    setIsListening(true);
    setIsComplete(false);
    recognition.start();
    // dispatch(updateUserMessage(text));
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
    setIsComplete(true); 
  };

  const resetCompletion = () => {
    setIsComplete(false);
  };
  
  return {
    text,
    isListening,
    startListening,
    stopListening,
    isComplete,
    resetCompletion,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
