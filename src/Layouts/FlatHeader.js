import { Layout } from "../Layouts";
import "./index.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";
import logo from './logo192.png';
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
        <ul className=" row menu-switch2">
                    {menuitems.map((item,index) => {
                        if(index==0) return <li className="col col-3"><img  src={logo} width = {200} height={50}></img></li>
                        else return <li className="col col-2">
                            <Link className = {`${path === item.path && 'active'}`} to={item.path}>{item.title}</Link>
                        </li>
                    })}
                </ul>}</div>
   
    </>
  );
};