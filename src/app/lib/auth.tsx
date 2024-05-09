"use server";

import { NextApiRequest } from "next";
import { cookies } from "next/headers";

interface StoreTokenRequest {
  token: string;
  refresh_token: string;
}

export async function storeToken(request: StoreTokenRequest) {
  cookies().set({
    name: "accessToken",
    value: request.token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    maxAge: 60 * 60 * 1 * 1,
  });

  cookies().set({
    name: "refreshToken",
    value: request.refresh_token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    maxAge: 60 * 60 * 1 * 1,
  });
}

export async function removeToken() {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
}

export async function getToken() {
  return cookies().get("accessToken")?.value;
}
