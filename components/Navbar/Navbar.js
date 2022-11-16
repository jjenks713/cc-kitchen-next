import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className='w-full sticky top-0 bg-white/75 z-50'>
            <nav className='flex items-center flex-wrap container mx-auto'>
                <Link href='/' legacyBehavior>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        className='inline-flex items-center p-2 mr-4 text-black cursor-pointer'>
                        <Image src='/images/img/logo2.png' alt="CHARLEES COMFORT KITCHEN" width={175} height={20} />
                    </motion.a>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start text-black flex flex-col lg:h-auto uppercase '>
                        <motion.a
                            href='https://charlees-comfort-kitchen.square.site' target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'
                        >
                            Order
                        </motion.a>
                        <Link href='/gallery' legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                                Gallery
                            </motion.a>
                        </Link>
                        <Link href='/calendar' legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                                calendar
                            </motion.a>
                        </Link>
                        <Link href='/about' legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                                About us
                            </motion.a>
                        </Link>
                        <motion.a
                            href='https://forms.gle/KQfYGABjRg4Mi2gC9' target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                            subscribe
                        </motion.a>
                    </div>
                </div>
            </nav>
        </div>
    );
};