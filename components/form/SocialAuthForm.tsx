"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1  rounded-2 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
        throw new Error("Not implemeted");
    } catch (error) {
      console.log("Error Sign in");
      toast("Sign in Failed", {
        description: error instanceof Error ? error.message : "An error occurred during sign-in"
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn('github')} >
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="github"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn('google')} >
        <Image src="/icons/google.svg" width={20} height={20} alt="google" className="mr-2.5 object-contain" />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
