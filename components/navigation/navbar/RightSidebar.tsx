import TagCards from "@/components/cards/TagCards";
import ROUTES from "@/constant/route";
import Image from "next/image";
import Link from "next/link";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: '1', title: "What is your name?" },
    { _id: '2', title: "Who is Anh Minh?" },
    { _id: '3', title: "How learnChill becomes popular ?" },
    { _id: '4', title: "Who is founder of learnChill?" },
    { _id: '5', title: "'Have you ever' becomes favorite chanel in this year " },
  ];

const popularTags = [
    {_id:"1", name:"react",questions: 100},
    {_id:"2", name:"javascript",questions: 200},
    {_id:"3", name:"typescript",questions: 150},
    {_id:"4", name:"nextjs",questions: 50},
    {_id:"4", name:"react-query",questions: 70},
];


  return (
    <>
      <section className="custom-scrollbar background-light900_dark200 shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
        <div>
          <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
          <div className="mt-7 flex w-full flex-col gap-[30px]">
            {hotQuestions.map(({ _id, title }) => (
              <Link
                key={_id}
                href={ROUTES.PROFILE(_id)}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{title}</p>
                <Image
                src="/icons/chevron-right.svg"
                alt="Cheron"
                height={20}
                width={20}
                className="invert-colors"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
            <h3 className="h3-bold text-dark200_light800" >Popular Tags</h3>
            <div className="mt-7 flex flex-col gap-4" >
            {popularTags.map(({_id,name,questions})=>(
                <TagCards _id={_id} name={name} questions={questions} showcount  key={_id}/>
            ))}</div>
        </div>
        
        

      </section>



    </>
  );
};
export default RightSidebar;
