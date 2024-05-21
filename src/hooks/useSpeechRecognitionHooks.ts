import { useEffect, useState, useCallback } from "react";

let recognition: any = null;

const initializeRecognition = () => {
  if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true; // Keep listening even if the user pauses
    recognition.lang = "en-US"; // Set language to Indonesian
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
      setText((prevText) => prevText + " " + transcript.trim()); // Appends new text to existing text, ensuring continuity
      console.log(transcript);
    };

    recognition.onresult = onResult;

    return () => {
      recognition.onresult = null;
      recognition.stop();
    };
  }, []);

  const stopListening = useCallback(() => {
    if (isListening) {
      setIsListening(false);
      recognition.stop();
      setIsComplete(true);
    }
  }, [isListening]);

  useEffect(() => {
    if (isComplete) {
      // Assuming there's a function to handle completed text
      console.log("Final text for this session:", text);
      // Here you might want to call a function to handle the final text, e.g., sending it to a server or processing it in some way
      setIsComplete(false); // Reset completion state for next use
    }
  }, [isComplete, text]);

  const startListening = () => {
    if (!recognition) {
      console.error("Speech Recognition is not initialized or not supported.");
      return;
    }
    setText(""); // Reset text at the start of a new session
    setIsListening(true);
    setIsComplete(false);
    recognition.start();
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
