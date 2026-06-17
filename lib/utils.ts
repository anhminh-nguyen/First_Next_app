import { techMap } from "@/constant/techMap";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow } from "date-fns";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDeviconClassName = (techName:string) =>{
  const normalizedTechName= techName.replace(/[.]/g,"").toLowerCase();


  return techMap[normalizedTechName] ?
  `${techMap[normalizedTechName]} colored` 
  :"devicon-devicon-plain";
}


export const getTimeStamp = (date:Date)=>{
  return formatDistanceToNow(date, { addSuffix: true });
}