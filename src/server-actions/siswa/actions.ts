'use server';

import {redirect} from 'next/navigation';

export async function redirectHome(url: string) {
    redirect(url);
}