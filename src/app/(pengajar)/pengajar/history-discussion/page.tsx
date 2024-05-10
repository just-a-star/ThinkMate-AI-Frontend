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
import { useSelector } from "react-redux";
import { DropdownMenuUser } from "@/src/app/components/dropdown-user";
export default function HistoryDiscussion() {
  const [isLoading, setIsLoading] = useState(false);
  const [conversationData, setConversationData] = useState([]);
  const pengajar = useSelector((state: any) => state.pengajar);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFetcher(`/quiz/teacher/${pengajar.id}`);
        if (response && response.data) {
          setConversationData(response.data); // Make sure to set the data array
          console.log("response.data", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch discussions:", error);
      }
    };

    fetchData();
  }, [pengajar.id]); // Dependency array to prevent infinite loops

  return (
    <main className="container flex min-h-screen flex-col items-center py-8 px-2">
      {/* Header - Nav */}
      <header className="container flex items-center w-full justify-between">
        <nav className="">
          <Link href="/pengajar/create-discussion" className="flex justify-start">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <h1 className="flex justify-center text-xl">Riwayat Diskusi</h1>
        <DropdownMenuUser />
      </header>

      {/* List Discussion */}
      <div className="container rounded w-full">
        <Input className="w-1/3 mt-4 p-4  " placeholder="Cari history kelas di sini!" />

        {/* Each item */}
        {conversationData.map((item: any) => (
          <div key={item.ID} className="flex flex-col bg-purple-50 rounded-lg mt-2 p-4">
            <Link href={`/pengajar/detail-discussion?id=${item.ID}`}>
              <div className="flex items-center ">
                <Image className="bg-white rounded-lg p-2" src="/images/fi-br-megaphone.svg" alt="alt" width={50} height={50} />
                <div className="p-2">
                  <h2 className=" text-neutral-800 text-lg">Diskusi {item.topic}</h2>
                  <div className="flex flex-col">
                    <p className="text-sm text-neutral-500">Pin: {item.pin}</p>

                    <p className="text-sm text-neutral-500">Jumlah Siswa: 20</p>
                    <p className="text-sm text-neutral-500">Jumlah Diskusi: 10</p>
                  </div>
                </div>

                <div className="justify-items-center ml-auto items-end">
                  <p className="text-right text-neutral-500">
                    {/* <span>{new Date(item.CreatedAt).toLocaleDateString()}</span> */}
                    <p>{new Date(item.CreatedAt).toLocaleDateString()}</p>
                  </p>
                  <p className="text-right text-neutral-500">{new Date(item.CreatedAt).toLocaleTimeString()}</p>
                </div>
              </div>
            </Link>
            <hr className="h-0.5 my-3 bg-neutral-200" />

            <div className="flex justify-between items-center">
              <div className="flex-col">
                <p className="text-neutral-500">Assigned by Ibu Kartika (PKN)</p>
                <p className="text-neutral-500">Assigned by Teacher ID: {item.teacher_id}</p>
              </div>
              <Button className="justify-end bg-purple-900 hover:bg-purple-800 rounded-2xl">Completed</Button>
            </div>
          </div>
        ))}

        {/* <div className="flex flex-col bg-purple-50 rounded-lg  p-4 mt-4">
          <div className="flex items-center ">
            <Image className="bg-white rounded-lg p-2" src="/images/fi-br-megaphone.svg" alt="alt" width={50} height={50} />
            <div className="p-2">
              <h2 className=" text-neutral-800 text-lg">Diskusi Pancasila</h2>
              <div className="flex flex-col">
                <p className="text-sm text-neutral-500">Jumlah Siswa: 20</p>
                <p className="text-sm text-neutral-500">Jumlah Diskusi: 10</p>
              </div>
            </div>

            <div className="justify-items-center ml-auto items-end">
              <p className="text-right text-neutral-500">
                <span>Senin, </span>22/07Link/2022
              </p>
              <p className="text-right text-neutral-500">11:34 AM</p>
            </div>
          </div>

          <hr className="h-0.5 my-3 bg-neutral-200" />

          <div className="flex justify-between items-center">
            <p className="text-neutral-500">Assigned by Ibu Kartika (PKN)</p>

            <Button className="justify-end bg-purple-900 hover:bg-purple-800 rounded-2xl">Completed</Button>
          </div>
        </div> */}
      </div>

      <nav className="flex items-center justify-between w-full">
        <Link href="/home-pengajar"></Link>
      </nav>
    </main>
  );
}
