import Link from "next/link";
import { useState } from "react";

export const NavTabs = (props) => {

    const [pageNumber, setPageNumber] = useState(0)

    return (
        <div className="text-black">
            <ul className={props.mobile ? "menu menu-compact dropdown-content justify-left mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white text-left" : "menu menu-horizontal p-0"}>
                <li>
                    <a
                        href='https://charlees-comfort-kitchen.square.site' target='_blank' rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className='text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-left hover:bg-gray-600 hover:text-white cursor-pointer'
                    >
                        Order
                    </a>
                </li>
                <li>
                    <Link href='/gallery' legacyBehavior>
                        <a
                            whileHover={{ scale: 1.1 }}
                            className='text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-centerte hover:bg-gray-600 hover:text-white cursor-pointer'
                            onClick={() => setPageNumber(1)}
                        >
                            Gallery
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/about' legacyBehavior>
                        <a
                            whileHover={{ scale: 1.1 }}
                            className='text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-centerte hover:bg-gray-600 hover:text-white cursor-pointer'
                            onClick={() => setPageNumber(2)}
                        >
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/calendar' legacyBehavior>
                        <a
                            whileHover={{ scale: 1.1 }}
                            className='text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-centerte hover:bg-gray-600 hover:text-white cursor-pointer'
                            onClick={() => setPageNumber(3)}
                        >
                            Calender
                        </a>
                    </Link>
                </li>
                <li>
                    <a
                        href='https://forms.gle/KQfYGABjRg4Mi2gC9' target='_blank' rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className='justify-left text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                        Subscribe
                    </a>
                </li>
            </ul>
        </div >
    )
}