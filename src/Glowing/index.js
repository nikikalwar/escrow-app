import { Layout } from "../Layouts";
import "./index.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";
export const Glowing = () => {
   const [showMenu, setShowMenu] = useState(true);
    const path = window.location.pathname;

    const menuitems = [
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/about',
            title: "About"
        },
        {
            path: '/contact',
            title: "Contact Us"
        },
        {
            path: '/signin',
            title: "Sign In"
        },
        {
            path: '/signup',
            title: "Sign Up"
        },

    ]
  return (
    <>
      <Layout>
       <div className="row">{showMenu && 
        <ul className=" row menu-items2">
                    {menuitems.map((item) => {
                        return <li className="col">
                            <Link className = {`${path === item.path && 'active'}`} to={item.path}>{item.title}</Link>
                        </li>
                    })}
                </ul>}</div>
      </Layout>
    </>
  );
};
