import { SideBar } from "../components/SideBar"
import {Header} from "../components/Header"
export const ChatLayout = ({children}) =>{
    return(
        <div className="grid grid-cols-12 h-screen">
            <div className="col-span-4">
            <SideBar/>
            </div>
            <div className="col-span-8 flex flex-col">
            <Header/>
            {children}
            </div>
            wddw
        </div>
    )
}