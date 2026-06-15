import Navbar from "@/components/navigation/navbar"
import LeftNavbar from "@/components/navigation/navbar/LeftNavbar"
import { ReactNode } from "react"

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        <LeftNavbar />
        <Navbar />
        
        {children}
    </main>
  )
}
export default RootLayout