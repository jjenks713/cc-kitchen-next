import Link from "next/link";

export const NavTabs = (props) => {

    return (
        <div className="navbar-center hidden lg:flex text-black">
            <ul className={props.mobile ? "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" : "menu menu-horizontal p-0"}>
                <li>
                    <a
                        href='https://charlees-comfort-kitchen.square.site' target='_blank' rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className='text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'
                    >
                        Order
                    </a>
                </li>
                <li>
                    <Link href='/gallery' legacyBehavior>
                        <a
                            whileHover={{ scale: 1.1 }}
                            className={
                                props.pageNumber == 1 ?
                                    'text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center border-b-4 border-gray-600'
                                    :
                                    'text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-centerte hover:bg-gray-600 hover:text-white cursor-pointer'
                            }
                        >
                            Gallery
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/about' legacyBehavior>
                        <a
                            whileHover={{ scale: 1.1 }}
                            className={
                                props.pageNumber == 2 ?
                                    'text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center border-b-4 border-gray-600'
                                    :
                                    'text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-centerte hover:bg-gray-600 hover:text-white cursor-pointer'
                            }
                        >
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/calendar' legacyBehavior>
                        <a
                            whileHover={{ scale: 1.1 }}
                            className={
                                props.pageNumber == 3 ?
                                    'text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center border-b-4 border-gray-600'
                                    :
                                    'text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-centerte hover:bg-gray-600 hover:text-white cursor-pointer'
                            }
                        >
                            Calender
                        </a>
                    </Link>
                </li>
                <li>
                    <a
                        href='https://forms.gle/KQfYGABjRg4Mi2gC9' target='_blank' rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className='text-xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer'>
                        Subscribe
                    </a>
                </li>
            </ul>
        </div>
    )
}