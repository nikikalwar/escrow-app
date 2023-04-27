import { Layout } from "../Layouts";
import "./index.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";
export const FlatHeader = () => {
   const [showMenu, setShowMenu] = useState(true);
    const path = window.location.pathname;

    const menuitems = [
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/about',
            title: "About Us"
        },
      
    ]
  return (
    <>

       <div className="row">{showMenu && 
        <ul className=" row row-8 menu-switch2">
                    {menuitems.map((item,index) => {
                        if(index==0) return <li className="col"><img  src="./logo192.png" width = {200} height={50}></img></li>
                        else return <li className="col">
                            <Link className = {`${path === item.path && 'active'}`} to={item.path}>{item.title}</Link>
                        </li>
                    })}
                </ul>}</div>
   
    </>
  );
};