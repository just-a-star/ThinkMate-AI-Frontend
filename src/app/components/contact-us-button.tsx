"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ContactUsButton = () => {
  return (
    <div className="flex justify-center items-center">
      <Link href="https://api.whatsapp.com/send/?phone=6281283949680&text=Halo+kak%2C+saya+membutuhkan+bantuan+terkait+penggunaan+Thinkmate+AI.+Saya+mengalami+beberapa+kesulitan+dan+memerlukan+panduan+lebih+lanjut.+Bisa+tolong+dibantu%3F&type=phone_number&app_absent=0">
        <div className="flex flex-row py-2 px-6 opacity-90 bg-green-400 rounded-lg shadow-md items-center">
          <h2 className="text-white pr-2 font-medium opacity-100">Pusat Bantuan</h2>
          <Image src="/images/whatsapp-white.png" className="z-10 opacity-100" alt="whatsapp-contact-us-icon" width={30} height={30} />
        </div>
      </Link>
    </div>
  );
};

export default ContactUsButton;
