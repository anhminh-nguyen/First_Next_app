import ROUTES from "@/constant/route"
import {Badge} from "@/components/ui/badge"

import Link from "next/link"
import { getDeviconClassName } from "@/lib/utils"


interface Props {
    _id:string,
    name:string,
    questions?:number,
    showcount?:boolean
};




const TagCards = ({_id,name,questions, showcount}:Props) => {
    const iconClass =getDeviconClassName(name);

  return (
    <>
    <Link href={ROUTES.TAGS(_id)} className="flex gap-2 justify-between">
    <Badge className="subtitle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase" >
        <div className="flex-centen space-x-2">
            <i className={`${iconClass} text-sm `} ></i>
            <span>{name}</span>
        </div>
    </Badge>
    {showcount && (
        <p className="small-medium text-dark500_light700" >{questions}</p>
    )}
    </Link>
    </>
  )
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