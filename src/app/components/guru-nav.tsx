import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GuruNav = () => {
  const router = useRouter();

  return (
    <nav className="flex font-medium text-xl p-3 space-x-3 rounded-2xl bg-ungu-300 justify-around xl:w-1/3 md:w-1/2">
      <div className="p-2 md:px-12 xl:px-20 bg-white rounded-2xl">
        <Link className="text-neutral-600" href="/create-discussion">
          <p className="text-nowrap">Create Quiz</p>
        </Link>
      </div>
      <div className="p-2 md:px-12 xl:px-20 rounded-2xl text-abu-100">
        <Link href="/history-discussion">History</Link>
      </div>
    </nav>
  );
};

export default GuruNav;
