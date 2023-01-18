import React from 'react';
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Announcement from '../Announcement/Announcement';
import SubscribePanel from '../SubscribePanel/SubscribPanel';
import InfoStrip from '../InfoStrip/InfoStrip';

export default function Layout({ children }) {
    const infoCards = children.props.infoCards
    const announcement = children.props.announcement
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
            <SubscribePanel />
            <InfoStrip infoCards={infoCards} />
            {announcement.data.announcement ? <Announcement announcement={announcement} /> : null}
        </div>
    )
}

