
'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeyFormUrlQuery } from "@/lib/url";


const filters =[
    {name:"All", value:""},
    {name:"React", value:"react"},
    {name:"Javascript", value:"javascript"},
    {name:"Next.js", value:"next.js"},
    {name:"Typescript", value:"typescript"},
];


const HomeFilter = () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const filterParams = searchParam.get("filter");
    const [active, setActive] = useState(filterParams || "");

    const handleTypeClick = (filter:string)=>{

         
        if(filter === active){
           setActive("");
            const removenewUrl = removeKeyFormUrlQuery({
            params:searchParam.toString(),
            keyToRemove:["filter"]});
            router.push(removenewUrl,{scroll: false});
        }else{
            setActive(filter);
            const newUrl = formUrlQuery({
            params:searchParam.toString(),
            key:"filter",
            value:filter.toLowerCase()
        });
           router.push(newUrl);
        }}
    

  return (
    
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
  {filters.map((filter) => (
    <Button
      key={filter.name}
      className={cn(
        "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
        active === filter.value
          ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
          : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
      )}
      onClick={()=>handleTypeClick(filter.value)}
    >
      {filter.name}
    </Button>
  ))}
</div>


  )
}
export default HomeFilter