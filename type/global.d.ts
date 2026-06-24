import { NextResponse } from "next/server";

interface Tag {
    _id:string,
    name:string
}

interface Author{
    _id:string;
    name:string,
    image:string;
    value:string
}


interface Question{
    question:{
        _id:string;
        title:string;
        tags:Tag[];
        author:Author[];
        createdAt: Date,
        upvotes:number,
        answer:number,
        views:number

    }
}

type ActionResponse<T = null> = {
    success: boolean;
    data?: T;
    error?: {
        messages:string;
        details: Record<string,string[]>
    },
    status?: number;
}


type SuccessResponse<T = null> = ActionResponse<T> & {success:true};

type ErrorResponse<T = null> = ActionResponse<undefined> & {success:false};

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse >