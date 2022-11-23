import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <div className="navbar bg-white bg-opacity-90 px-4 sm:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <label tabIndex={0} className="btn glass btn-circle text-black">
                                <MenuIcon />
                            </label>
                        </motion.div>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a
                                    href='https://charlees-comfort-kitchen.square.site' target='_blank' rel="noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'
                                >
                                    Order
                                </a>
                            </li>
                            <li>
                                <Link href='/gallery' legacyBehavior>
                                    <a
                                        whileHover={{ scale: 1.1 }}
                                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                                        Gallery
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' legacyBehavior>
                                    <a
                                        whileHover={{ scale: 1.1 }}
                                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                                        About us
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href='https://forms.gle/KQfYGABjRg4Mi2gC9' target='_blank' rel="noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                                    subscribe
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href='/' legacyBehavior>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            className='inline-flex items-center p-2 text-black cursor-pointer'>
                            <Image src='/images/img/logo2.png' alt="CHARLEES COMFORT KITCHEN" width={175} height={20} />
                        </motion.a>
                    </Link>
                </div>
                <div className="navbar-end">
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