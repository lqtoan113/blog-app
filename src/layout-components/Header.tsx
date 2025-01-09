import React from "react"
import { Link } from "react-router-dom";
import '../css/App.css';

const Header: React.FC =()=>{
    return (
    <div className = "App-header">
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </ul>
        </div>
    </div>
    );
};
export default Header;