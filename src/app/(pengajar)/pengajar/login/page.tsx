"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { storeToken } from "../../../lib/auth";

import { postFetcher } from "../../../services/fetcher";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextApiRequest } from "next";
import axios from "axios";
import { setPengajar } from "@/src/store/pengajarSlice";
import { decodeToken } from "@/src/app/lib/decodeToken";
import { useDispatch } from "react-redux";

export default function RegisterPengajar() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  async function onSubmit(formData: { email: string; password: string }) {
    setIsLoading(true);
    try {
      const response = await postFetcher("/login", formData);
      if (response.token) {
        await storeToken({ token: response.token, refresh_token: response.refresh_token });

        const decoded = decodeToken(response.token);
        if (decoded) {
          dispatch(setPengajar({ id: decoded.id, email: decoded.email, exp: decoded.exp, name: "", username: "" }));
        }
        

        router.push("/pengajar/create-discussion");
        alert("Login Successful");
      } else {
        throw new Error("No token received"); // Login failed
      }
    } catch (error) {
      alert("Login failed, please try again");
      console.error("error logging in", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <Image src="/images/bonbon-girl-5.png" alt="ThinkMateAI Logo" width={200} height={200} priority />
        <h1 className="text-center text-4xl text-wrap font-semibold mt-8">
          Welcome back!
          {/* <span className="text-purple-800 text-nowrap block"> ThinkMate AI!</span> */}
        </h1>
        <p className="py-6 text-pretty text-slate-500 block">Teman Diskusi untuk Melatih Berpikir Kritis dan Pemahaman Membaca Siswa </p>
      </div>

      {/* Form PIN */}
      <div className="flex flex-col justify-start mt-1">
        <form onSubmit={handleSubmit}>
          <p className="text-lg mb-1 text-slate-700">Email Address</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter Email"
            className="text-left pl-5 pr-12 p-4 border border-slate-300 rounded-lg"
          />
          <p className="text-lg mb-1 text-slate-700">Password</p>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            className="p-4 pl-5 pr-12 border border-slate-300 rounded-lg"
          />
          <div className="flex justify-end">
            <a href="#" className="text-purple-800 text-md font-medium p-2">
              Forgot Password?
            </a>
          </div>
          <Button type="submit" className="bg-purple-900 text-white font-semibold py-7 text-lg rounded-lg mt-4 hover:bg-purple-600 w-full">
            {isLoading ? "Logging in..." : "Login as Teacher"}
          </Button>
        </form>

        <p className="text-center text-slate-500 mt-4">
          Belum punya akun?{" "}
          <Link href="/pengajar/register" className="text-purple-800 font-medium">
            Daftar disini
          </Link>
        </p>
      </div>
    </main>
  );
}
