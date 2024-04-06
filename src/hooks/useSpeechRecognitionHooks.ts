import { useEffect, useState } from "react";

let recognition: any = null;

if ("webkitSpeechRecognition" in window) {
  recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "id-ID";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState<string>("");

  const [isListening, setIsListening] = useState<boolean>(false);

useEffect((): void | (() => void) => {
    if (!recognition) {
      return console.log("Speech Recognition not supported");
    }
    const onResult = (event: SpeechRecognitionEvent) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript);
      recognition.stop();
      setIsListening(false);
    };

    recognition.onresult = onResult;
    return () => {
        return recognition.onresult = null;
    };
  }, []);

  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };
  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
