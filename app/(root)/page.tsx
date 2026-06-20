import QuestionCards from "@/components/cards/QuestionCards";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/route";
import error from "@/lib/handler/error";
import handleError from "@/lib/handler/error";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import Link from "next/link";


const questions = [
    {
      _id: "1",
      title: "How to learn React?",
      description: "I want to learn React too",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "React" },
      ],
      author: { _id: "1", name: "Ánh Minh", image:"https://st2.depositphotos.com/41960954/42058/i/450/depositphotos_420585092-stock-photo-beautiful-woman-portrait-digital-illustration.jpg"},
      upvote:10,
      answer: 5,
      views:100,
      createdAt: new Date()
    },
     {
      _id: "2",
      title: "How to connect javascript?",
      description: "I want to learn React too",
      tags: [
        { _id: "1", name: "JavaScript" },
        { _id: "2", name: "JavaScript" },
      ],
      author: { _id: "1", name: "Ánh Minh", image:"https://st2.depositphotos.com/41960954/42058/i/450/depositphotos_420585092-stock-photo-beautiful-woman-portrait-digital-illustration.jpg"},
      upvote:10,
      answer: 5,
      views:100,
      createdAt: new Date()
    },
  ];


interface SearchParams {
  searchParams: Promise<{[key:string]:string}>,
};

const Home = async ({searchParams}: SearchParams) => {


  const {query="",filter=""} = await searchParams;
  const normalizedQuery = query.toLowerCase();
  const normalizedFilter = filter.toLowerCase().trim();

  const filterQuestions = questions.filter((question) => {
    const matchesQuery = question.title.toLowerCase().includes(normalizedQuery);
    const matchesFilter =
      normalizedFilter === "" ||
      question.tags.some((tag) => tag.name.toLowerCase() === normalizedFilter);

    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3" asChild>
          <Link href={ROUTES.ASK_QUESTIONS}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch route="/" imgSearch="/icons/search.svg" placeholder="Search questions..." otherClass="flex-1" />
      </section>
  
      <HomeFilter />

      
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterQuestions.map((data)=>
          <QuestionCards key={data._id} question={data} />
 
        )}
      </div>
    </>
  );
};
export default Home;
