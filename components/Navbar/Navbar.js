import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavTabs } from './NavTabs';

export const Navbar = (props) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const pageNumber = props.pageNumber;

    return (
        <>
            <div className="navbar fixed z-50 bg-white/70 backdrop-blur-sm px-4 sm:px-10">
                <div className="navbar-start">
                    <Link href='/' legacyBehavior>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            className='inline-flex items-center p-2 text-black cursor-pointer'>
                            <Image src='/images/img/logo2.png' alt="CHARLEES COMFORT KITCHEN" width={175} height={20} />
                        </motion.a>
                    </Link>
                </div>
                <div className="justify-end sm:navbar-center">
                    <div className='flex lg:hidden'>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn glass btn-circle text-black">
                                <MenuIcon />
                            </label>
                            <NavTabs mobile={true} />
                        </div>
                    </div>
                    <div className='hidden lg:flex'>
                        <NavTabs mobile={false} pageNumber={pageNumber} />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <motion.a
                        href='https://charlees-comfort-kitchen.square.site' target='_blank' rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className='btn glass lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center text-black hover:bg-gray-600 hover:text-white cursor-pointer'
                    >
                        Order
                    </motion.a>
                </div>
            </div>
        </>
    );
};