import ROUTES from "@/constant/route"
import {Badge} from "@/components/ui/badge"

import Link from "next/link"
import { getDeviconClassName } from "@/lib/utils"
import Image from "next/image"


interface Props {
    _id:string,
    name:string,
    questions?:number,
    showcount?:boolean,
    compact?:boolean,
    remove?:boolean,
    isButton?:boolean,
    handleRemove?:() => void 
};




export const TagCards = ({_id,name,questions, showcount, compact, remove, isButton, handleRemove}:Props) => {
    const handleClick = (e:React.MouseEvent) =>{
        e.preventDefault();
    }
    
    const iconClass = getDeviconClassName(name);
    const Content = (
        <>
            <Badge className="subtitle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row uppercase" >
                <div className="flex-centen space-x-2">
                    <i className={`${iconClass} text-sm `} ></i>
                    <span>{name}</span>
                </div>
                {remove && (
                    <Image 
                    src="/icons/close.svg"
                    width={12}
                    height={12}
                    alt="close icon"
                    className="cursor-pointer object-contain dark:invert invert-0"
                    onClick={handleRemove}
                    />
                )}
            </Badge>
            {showcount && (
                <p className="small-medium text-dark500_light700" >{questions}</p>
            )}
        </>
    );

if (compact){
    return isButton? (
        <button onClick={handleClick} className="flex justify-between gap-2">
            {Content}
        </button>
    ):
 (
    <>
    <Link href={ROUTES.TAGS(_id)} className="flex gap-2 justify-between">
        {Content}
    </Link>
    </>
  )
}
}
export default TagCards


// Home Page ( design Homepage )
// Ask a question ( design page )
// backend ( cung cấp thêm kiến thức - backend là gì - làm gì )
// Error & Log handler ( kiến thức try-catch dành cho connection )
// API Route ( apply state management & chuyển route giữa các page, user handler request  )
// authentification II ( thêm details về auth, xử lý auth tại lần đầu chỉ lấy thông tin )
// server action ( handle bussiness logic )
// authen III ( more complex -> email, password authen )
// questions ( questions page )
// Homepage DevOverFlow 
// Tags page 
// Questions detail ( xử lý questions )
// answer submission 
// AI integrations ( API của AI )
// Voting action ( business logic )
// Community page 
// Collection page 
// Filter & pagination ( chỉnh pagination effect)
// Top result ( business logic )
// Profile page 
// Manage questions and answer ( business logic )