import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constant/route";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const LeftNavbar = () => {
  return (
    <>
      <div className="custom-scrollbar sticky top-0 left-0 h-screen w-[266px] background-light900_dark200 max-lg:w-[80px] max-lg:pt-20 max-sm:hidden border-r shadow-light-300 dark:shadow-none   ">
        <div className="flex-between flex min-h-screen flex-col w-full max-lg:flex-start overflow-y-auto  ">

          <div className="flex flex-col w-full px-3 ">
            <Link href="/" className="flex items-center gap-1 py-6 max-lg:hidden">
              <Image src="/images/site-logo.svg" width={23} height={23} alt="DevFlow Logo" />

              <p className="font-space-grotesk h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">
                Dev<span className="text-primary-500">OverFlow</span>
              </p>
            </Link>
            <div  className="mt-4">
                <NavLinks />
            </div>
            

          </div>


          <div className="flex px-2 flex-col space-y-1.5 w-full  ">
            <Link href={ROUTES.SIGN_IN} className="flex justify-center" >
                <Image
                src="/icons/sign-up.svg"
                alt="Signup"
                width={20}
                height={20}
                className="hidden max-lg:block my-3 "
                />
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none max-lg:hidden">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>

            <Link href={ROUTES.SIGN_UP} className="flex justify-center">
                <Image
                src="/icons/user.svg"
                alt="Signup"
                width={20}
                height={20}
                className="hidden max-lg:block "
                />
              <Button className="max-lg:hidden small-medium light-border-2 btn-tertiary text-dark400_light900 mb-4 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftNavbar;
