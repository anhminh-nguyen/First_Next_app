import { auth,signOut } from "@/auth"





const Home = () => {
  const session = auth();

  return (
    <>
      <h1 className="h1-bold">Welcome to my Web</h1>
    </>
  )
}
export default Home