
import { FaSignOutAlt } from 'react-icons/fa'//Signout
import { FaHome } from 'react-icons/fa'//beranda
import { FaTable } from 'react-icons/fa'//daftar
import { FaBars } from 'react-icons/fa'//icon bar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function NavSide(props)
{
    const [state,ubahState] = useState(true);
    const toggleClass = () => {
        ubahState(!state);
      };
    return (
        <>
            <div className="nm">
                <h2>Bank BRI</h2>
                <button type="button"
                    onClick={toggleClass}
                    className="btn"
                    style={{ backgroundColor: '#1e68a9',color: 'white' }}> <FaBars />
                </button>
            </div>
             <div className={state? 'sidebar' : null}>
                <React.Fragment>
                    <li > <Link to={'/'} className="menu"> <FaHome /> Beranda </Link></li>
                    <li> <Link to={'/'} className="menu"> <FaTable /> Daftar Pengajuan </Link></li>
                    <li> <Link to={'/'} className="menu"> <FaSignOutAlt /> Sign Out </Link></li>
                </React.Fragment>

            </div>
            {/* {state === true  ? this.li : null} */}
            
        </>

    );
}
export default NavSide
