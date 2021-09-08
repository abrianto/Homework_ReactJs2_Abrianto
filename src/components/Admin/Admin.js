import { AiFillPrinter } from 'react-icons/ai'//print
import React from 'react';
import DaftarPengajuan from './Daftar';
import NavSide from './SideNav';
import './Admin.css'

const Admin = () => {
    return (
        <>
            <NavSide />
            <div className="main">
                <h2 style={{textAlign: 'center'}}> Daftar Pengajuan KPR</h2>
                <div className="aksi">
                    <form className="p-0 flex-fill bd-highlight">
                        <input  type="cari" name="search" placeholder="Search.." />
                    </form>
                    <button type="button" className="btn btn-warning btn-group-sm">Download Laporan <AiFillPrinter /></button>
                </div><br/>
                <div>
                    <DaftarPengajuan />
                </div>
            </div>
        </>
    );
};

export default Admin;