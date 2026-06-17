import ROUTES from "@/constant/route";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import TagCards from "./TagCards";
import Metric from "../metric";

interface Props{
    question: Question;
};


const QuestionCards = ({question:{_id,title,tags,author,createdAt, upvotes, answers, views}}:Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 " >
        <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row" >
            <div>
                <span className="subtitle-regular text-dark200_light900 line-clamp-1 flex-1" >{getTimeStamp(createdAt) }</span>


                <Link href={ROUTES.QUESTION(_id)} >
                    <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1" >{title}</h3>
                </Link>
                
                

            </div>
        </div>

        <div className="mt-3.5 flex w-full flex-wrap gap-2" >
            {tags.map((tag:Tag)=>(
                <TagCards 
                    key={tag._id} _id={tag._id} name={tag.name} compact 
                />
            ))}
        </div>

        <div className="flex-between mt-6 w-full flex-wrap gap-3" >
            <Metric
            imgUrl={author.image} alt={author.name} value={author.name} title={`- asked ${getTimeStamp(createdAt)}`} href={ROUTES.PROFILE(author._id)} textStyle="body-medium text-dark400_light700" isAuthor
            />

            <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start " >
                <Metric imgUrl="/icons/like.svg"
                alt="like"
                value={upvotes}
                title="Vote"
                textStyle="small-medium text-dark400_light800"
                />
                <Metric imgUrl="/icons/message.svg"
                alt="answer"
                value={answers}
                title="Answer"
                textStyle="small-medium text-dark400_light800"
                />
                <Metric imgUrl="/icons/eye.svg"
                alt="view"
                value={views}
                title="Views"
                textStyle="small-medium text-dark400_light800"
                />
            </div>
        </div>
    </div>
  )
}
export default QuestionCards