import { Header } from "./Header"
import './index.css';
import { Footer } from "./Footer";
import { FlatHeader } from "./FlatHeader";
export const Layout=({children})=>{
    return (
        <>
        <div>
            <FlatHeader/>
           <Header/>
           <div className="content">
            {children}
           </div>
            <Footer/>
        </div>
        </>
    )
}