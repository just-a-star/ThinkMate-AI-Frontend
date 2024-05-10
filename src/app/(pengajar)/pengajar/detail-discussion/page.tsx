"use client";
import Image from "next/image";
import Link from "next/link";
import { ButtonDialog } from "../../../components/btn-generate-dialog";
import { Button } from "../../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { DataTableDiscussion } from "../../../components/data-table-discussion";
import { Payment } from "../../../components/data-table-discussion"; // move this to types folder later
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../../../components/ui/checkbox";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { useEffect, useState } from "react";
import { getFetcher } from "../../../services/fetcher";
import { ConversationItem } from "../../../types/conversationItem";
import { useSearchParams } from "next/navigation";
import { DropdownMenuUser } from "@/src/app/components/dropdown-user";
export default function DetailDiscussion() {
  const [conversationData, setConversationData] = useState<ConversationItem[]>([]);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      // Make sure the id is not undefined
      const fetchData = async () => {
        const response = await getFetcher(`/quiz/${id}/conversation`);
        setConversationData(response.data);
      };
      fetchData();
    } else {
      alert("No id or wrong id provided ");
    }
  }, [id]);

  const formatTime = (isoString: string | number | Date) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit", hour12: false }).format(date);
  };
  const parseStudentName = (studentName: string) => {
    const parts = studentName.split(" - ");
    return parts; // Returns an array where index 0 is the name and index 1 is the ID (if present)
  };

  return (
    <main className="container flex min-h-screen flex-col items-center py-8 px-2">
      {/* Header - Nav */}
      <header className="container flex items-center w-full justify-between">
        <nav className="">
          <Link href="/pengajar/history-discussion" className="flex justify-start">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <h1 className="flex text-xl justify-center">Detail Diskusi</h1>
        <DropdownMenuUser />
      </header>
      {/* Title Discussion */}
      <div className="container ">
        <div className="flex py-4 justify-start flex-col w-full pt-8">
          <h1 className="items-start text-2xl font-small text-purple-800">
            Diskusi Pancasila - <span className="text-black font-semibold">{id}</span>
          </h1>
          <p className="text-neutral-600">Detail discussions done by students will appear here</p>
        </div>
        {/* <DataTableDiscussion data={paymentsData} columns={paymentColumns} /> */}

        {/* List discussion */}
        {conversationData.length > 0 ? (
          conversationData.map((item) => {
            const [name, studentId] = parseStudentName(item.student_name);
            return (
              <div key={item.ID} className="flex justify-start w-full pb-4">
                <div className=" overflow-hidden p-2 bg-purple-100 flex items-center rounded">
                  <Image src="/images/microphone.svg" alt="Gambar Microphone" width={30} height={30} />
                </div>

                <div className="flex flex-col pl-2">
                  <h2>
                    Diskusi {name} <span className="text-purple-800  text-semobold overflow-hidden"> {studentId ? `- ${studentId}` : ""}</span>
                  </h2>
                  <h3 className="items-left text-slate-500">
                    {formatTime(item.CreatedAt)}- <span>{formatTime(item.UpdatedAt)}</span>
                  </h3>
                </div>
                <div className="flex items-center ml-auto">
                  <Button className="justify-end bg-purple-900 hover:bg-purple-800 rounded-2xl">Completed</Button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No data found, no students has started their quiz</div>
        )}

        {/* <div className="flex justify-start w-full">
          <div className=" overflow-hidden p-2 bg-purple-100 flex items-center rounded">
            <Image src="/images/microphone.svg" alt="Gambar Microphone" width={30} height={30} />
          </div>

          <div className="flex flex-col pl-2">
            <h2>
              Diskusi Jean Atika - <span className="text-purple-800 text-semobold">1</span>
            </h2>
            <h3 className="items-left text-slate-500">
              22/07/2022 - <span>11:34</span>
            </h3>
          </div>
          <div className="flex items-center ml-auto">
            <Button className="justify-end bg-grey-50 hover:bg-purple-100 border border-purple-800 text-purple-800 rounded-2xl">Uncompleted</Button>
          </div>
        </div> */}
      </div>
      <nav className="flex items-center justify-between w-full">
        <Link href="/pengajar/create-discussion"></Link>
      </nav>
    </main>
  );
}
