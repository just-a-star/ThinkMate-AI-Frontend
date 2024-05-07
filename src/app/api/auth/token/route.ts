import { cookies } from 'next/headers';

export async function GET(request: Request) {
        const authToken = cookies().get('accessToken')?.value;
        const headers = new Headers();
        headers.append("Authorization", authToken ?? '');

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`,{
            headers: headers
        });
        if (response.status === 401) {
            const refreshPayload = {
                "refresh_token": cookies().get('refreshToken')?.value
            };
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh-token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                 body: JSON.stringify(refreshPayload),
            });
            
            const jsonData = await res.json();
            
            cookies().set({
                name: "accessToken",
                value: jsonData.token,
                httpOnly: true,
                sameSite: "strict",
                secure: true,
            });

            cookies().set({
                    name: "refreshToken",
                    value: jsonData.refresh_token,
                    httpOnly: true,
                    sameSite: "strict",
                    secure: true,
            });
        } 
        const resData = {
                token: cookies().get('accessToken')?.value
        };

        return new Response(JSON.stringify(resData), {
                status: 200,
                headers: {
                        'Content-Type': 'application/json',
                },
        });
}