"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mutate } from "swr";
import { getFetcher } from "../../services/fetcher";
import { RootState } from "../../../store/store";
import { setName, setNomorAbsen, setQuizDetails, setShowDialog, setUsername } from "../../../store/quizSlice";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { AlertDestructiveWrongPin } from "../../components/alert-destructive-wrong-pin";
import WrongPinDialog from "../../components/wrong-pin-dialog";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function HomeSiswa() {
  const [isLoading, setIsLoading] = useState(false);
  const [pinQuiz, setPinQuiz] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showErrorPinAlert, setShowErrorPinAlert] = useState(false);
  const dispatch = useDispatch();
  const quizState = useSelector((state: RootState) => state.quiz);

  const fadeOut = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };
  
  // dijalanin setiap refresh
  useEffect(() => {
    // Reset states when the component mounts (i.e., when the website is opened)
    setPinQuiz("");
    dispatch(
      setQuizDetails({
        pin: "",
        id: "",
        topic: "",
      })
    );
  }, [dispatch]);

  const handleInputChange = (e: { target: { value: any } }) => {
    const pin = e.target.value;
    if (/^\d{0,4}$/.test(pin)) {
      setPinQuiz(pin);
    } else {
      setShowErrorPinAlert(true);
      setTimeout(() => {
        setShowErrorPinAlert(false);
      }, 3000);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setShowErrorAlert(false);

    if (!pinQuiz) {
      alert("Please enter a PIN.");
      setIsLoading(false);
      return;
    }

    try {
      const apiUrl = `/quiz?pin=${pinQuiz}`;
      const response = await getFetcher(apiUrl);

      if (response && response.data && response.data.pin === pinQuiz) {
        dispatch(
          setQuizDetails({
            pin: response.data.pin,
            id: response.data.ID,
            topic: response.data.topic,
          })
        );
        setDialogOpen(true);
      } else {
        console.log("Wrong PIN!");
        setShowErrorAlert(true);
        setPinQuiz("");
      }
      mutate("/quiz");
    } catch (error) {
      console.error("Error fetching quiz: ", error);
      alert("Error fetching quiz. Please try again later.");
      setShowErrorAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col items-center text-center">
        <Image src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        <h1 className="text-center text-4xl text-wrap font-semibold mt-8">
          Welcome to
          <span className="text-purple-800 text-nowrap block"> ThinkMate AI!</span>
        </h1>
        <p className="py-6 text-pretty text-slate-500 block">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      <div className="flex flex-col justify-start mt-1">
        <h2 className="text-xl text-slate-700">PIN disediakan pengajar</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={pinQuiz}
            type="text"
            maxLength={4}
            required
            pattern="[0-9]{4}"
            placeholder="Masukkan PIN"
            className="px-10 text-lg p-4 border border-slate-300 rounded-lg"
          />

          <Button type="submit" className="bg-purple-900 text-white font-semibold text-lg py-6 rounded-lg mt-4 border-none" variant="outline">
            Go!
          </Button>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="pb-0 rounded-lg px-0 m-0 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="pl-4 text-center text-xl text-green-600">Isi Nama dan Nomor Absen Kamu!</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center">
                <DialogDescription className="text-center font-semibold text-xl text-gray-800 ">
                  {quizState.quizDetails.pin} - Kelas {quizState.quizDetails.topic}
                </DialogDescription>

                <div className="pt-4 justify-center items-center flex flex-col">
                  <Input type="text" name="name" placeholder="Nama Lengkap" required className="px-10 p-4 border border-slate-300 rounded-lg w-2/3 py-2 my-2" />
                  <Input type="text" placeholder="Username (Optional)" className="px-10 p-4 border border-slate-300 rounded-lg w-2/3 py-2 my-2" />
                  <label className="text-sm text-neutral-500 font-normal">Tips: username digunakan AI untuk memanggil kamu!</label>
                </div>
              </div>
              <DialogFooter className="mt-4">
                <Link href="/discuss" className="w-full ">
                  <Button className="text-white w-full items-center  bg-purple-800" type="submit">
                    Mulai diskusi sekarang!
                  </Button>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>

        <p className="text-center text-slate-500 mt-4">
          Bingung cara pakainya?{" "}
          <a href="#" className="text-purple-800">
            Lihat panduan disini!
          </a>
        </p>
      </div>
      <div className="sm:fixed flex mt-5 justify-center items-center relative sm:bottom-0 sm:right-0 sm:mb-10 sm:mr-10">
      <AnimatePresence>
        {showErrorAlert && (
          <motion.div
            variants={fadeOut}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AlertDestructiveWrongPin title="Error" description="Wrong pin, please try again." />
          </motion.div>
        )}
        {showErrorPinAlert && (
          <motion.div
            variants={fadeOut}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AlertDestructiveWrongPin title="Error Input" description="PIN harus berupa angka dan maksimal 4 digit." />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </main>
  );
}
