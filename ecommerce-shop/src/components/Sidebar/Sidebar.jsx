import React from 'react';
import Overlay from '../Overlay/Overlay';
import "./Sidebar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Sidebar = ({ active, handleClose }) => {
    return (
        <>
            <div className={`sidebar ${active ? 'active' : ''}`} role="navigation">
                <div className="sidebar-wrapper">
                    <div className="sidebar-header">
                        <h1>MENU</h1>
                        <div className='closeIcon' onClick={handleClose} aria-label="Close menu"><CloseIcon /></div>
                    </div>
                    <div className="links-container">
                        <div className="sidebar-links">
                            <Link className="link" to="/products/1" onClick={handleClose}>Women</Link>
                            <Link className="link" to="/products/2" onClick={handleClose}>Men</Link>
                            <Link className="link" to="/" onClick={handleClose}>About</Link>
                            <Link className="link" to="/" onClick={handleClose}>Contact</Link>
                        </div>
                    </div>
                    <div className="sidebar-icons" aria-label="Additional actions">
                        <SearchOutlinedIcon className="icon" />
                        <PersonOutlineOutlinedIcon className="icon" />
                        <FavoriteBorderOutlinedIcon className="icon" />
                    </div>
                </div>
            </div>
            <Overlay active={active} onClick={handleClose} />
        </>
    );
}

export default Sidebar;
