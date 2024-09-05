import { SideBar } from "../components/SideBar"
export const ChatLayout = ({children}) =>{
    return(
        <div>
            <SideBar/>
            {children}
        </div>
    )
}