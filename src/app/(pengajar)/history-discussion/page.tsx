import Image from "next/image";
import Link from "next/link";
import { ButtonDialog } from "../../components/btn-generate-dialog";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { DataTableDiscussion } from "../../components/data-table-discussion";
import { Payment } from "../../components/data-table-discussion"; // move this to types folder later
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../../components/ui/checkbox";
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
} from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { useState } from "react";
export default function DetailDiscussion() {
  // const [isLoading, setIsLoading] = useState(false);

  const paymentsData: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ];

  const paymentColumns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <main className="container flex min-h-screen flex-col items-center p-24">
      {/* Header - Nav */}
      <header className="container flex items-center w-full justify-between">
        <nav className="">
          <Link href="/create-discussion" className="flex justify-start">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <h1 className="flex justify-center text-xl">Riwayat Diskusi</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>

      {/* List Discussion */}
      <div className="container rounded w-full">
        <Input className="w-1/3 mt-4 p-4  " placeholder="Cari history kelas di sini!" />

        {/* Each item */}
        <div className="flex flex-col bg-purple-50 rounded-lg mt-2 p-4">
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
                <span>Senin, </span>22/07/2022
              </p>
              <p className="text-right text-neutral-500">11:34 AM</p>
            </div>
          </div>

          <hr className="h-0.5 my-3 bg-neutral-200" />

          <div className="flex justify-between items-center">
            <p className="text-neutral-500">Assigned by Ibu Kartika (PKN)</p>
            <Button className="justify-end bg-purple-900 hover:bg-purple-800 rounded-2xl">Completed</Button>
          </div>
        </div>

        <div className="flex flex-col bg-purple-50 rounded-lg  p-4 mt-4">
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
                <span>Senin, </span>22/07/2022
              </p>
              <p className="text-right text-neutral-500">11:34 AM</p>
            </div>
          </div>

          <hr className="h-0.5 my-3 bg-neutral-200" />

          <div className="flex justify-between items-center">
            <p className="text-neutral-500">Assigned by Ibu Kartika (PKN)</p>
            <Button className="justify-end bg-purple-900 hover:bg-purple-800 rounded-2xl">Completed</Button>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between w-full">
        <Link href="/home-pengajar"></Link>
      </nav>
    </main>
  );
}
