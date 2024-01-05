'use server';

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function Login(formData: any) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export const logOut = async () => {
  await signOut();
}