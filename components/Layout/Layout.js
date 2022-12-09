import React, { useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar'
import SubscribePanel from '../SubscribePanel/SubscribPanel'
import InfoStrip from '../InfoStrip/InfoStrip'
import Footer from '../Footer/Footer'

export default function Layout({ children, infoCards }) {

    return (
        <>
            <Navbar />
            {children}
            <SubscribePanel />
            <InfoStrip />
            <Footer />
        </>
    )
}


