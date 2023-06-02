import { Link } from "react-router-dom";
import logo from '../../assets/Group 1.png'
import style from './common.css'
const Nabvar = () => {const items = <>
    <li> <Link to='/'>Home</Link> </li>
    <li> <Link to='/about'>About</Link> </li>
    <li> <Link to='/booking'>Appointment</Link> </li>
    <li> <Link to='/login'>Login</Link> </li>
    </>
    return (
        <div className="navbar fixed mx-auto text-white bg-opacity-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-lime-500 rounded-box w-52">
                       {items}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl"><img src={logo} alt="logo" /> <span className="text-3xl uppercase"> <span className="text-orange-600">Doctor</span> House</span> </p>
            </div>
            <div className="navbar-end mr-10 hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    {items}
                </ul>
            </div>
            
        </div>
    );
};

export default Nabvar;