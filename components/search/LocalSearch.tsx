'use client'

import Image from "next/image"
import { Input } from "../ui/input"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { formUrlQuery, removeKeyFormUrlQuery } from "@/lib/url"



interface Props {
    route:string,
    imgSearch:string,
    placeholder:string,
    otherClass?:string
}


const LocalSearch = ({route,imgSearch,placeholder, otherClass}:Props) => {

    const router = useRouter()

    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const debounce = setTimeout(() => {
            if(searchQuery){
        const newUrl = formUrlQuery({
            params:searchParams.toString(),
            key:"query",
            value:searchQuery
        });

        router.push(newUrl,{scroll:false});


      }else{
        if (pathname === route){
            const removenewUrl = removeKeyFormUrlQuery({
            params:searchParams.toString(),
            keyToRemove:["query"],
        });
        
         router.push(removenewUrl,{scroll:false});
        
        }
      }
        }, 3000);
      
      return () => clearTimeout(debounce);
    }, [searchQuery,route,router,searchParams])
    


  return (
    <>
        <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClass}`} >
        <Image 
        src={imgSearch}
        alt='search'
        height={24}
        width={24}
        className="cursor-pointer"
        />
        
        <Input 
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e):void=> {
            setSearchQuery(e.target.value);
            
        }}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
        />
        </div>
    </>
    
  )
}
export default LocalSearch