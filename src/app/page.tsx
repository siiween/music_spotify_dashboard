"use client";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { signIn } from "next-auth/react";
export default function Home() {
  return (
    <div className="flex flex-col items-center text-center justify-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
      <Text as="h1" size="3xl" variant="primary" className="font-bold text-center">
        Welcome to Music Dashboard. <br/>
        Here you can analyze Spotify artists <br/>
        and discover albums
      </Text>
      <Button onClick={() => signIn("spotify", { callbackUrl: "/home" })}>Login with spotify</Button>
    </div>
  );
}
