import React, { useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children, infoCards }) {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


