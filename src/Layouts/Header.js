import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
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
        }

    ]
    return (
        <>
            <div>
                <div className="menu-switch">
                    {showMenu ? (<AiFillCloseCircle onClick={() => setShowMenu(!showMenu)} />) : (<HiOutlineMenuAlt1 onClick={() => setShowMenu(!showMenu)} />)}
                </div>
                {showMenu &&  <ul className="menu-items">
                    {menuitems.map((item) => {
                        return <li>
                            <Link className = {`${path === item.path && 'active'}`} to={item.path}>{item.title}</Link>
                        </li>
                    })}
                </ul>}
            </div>
        </>
    )
}