"use client";
// components/BotResponse.js
import Image from 'next/image';

const BotResponse = ({ message }: { message: string }) => {
    return (
        <div className="items-center flex">
            <Image className="mr-2" src="/images/bonbon-girl-5.png" alt="ChatBot" width={50} height={50} />
            <div className="bg-ungu-300 rounded-lg md:w-2/3 w-full pt-3 p-6 xl:p-6 xl:text-lg">
                <p className="font-sm text-md text-purple-800">Clara</p>
                <p className="text-pretty">{message}</p>
            </div>
        </div>
    );
};

export default BotResponse;
