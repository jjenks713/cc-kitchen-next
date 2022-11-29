import React from "react"
import Specials from "../Specails/Specails"
import { motion } from "framer-motion"
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import OrderNowButton from "../OrderNowButton/OrderNowButton";
import { infoArray } from "./MenuData";

export default function Menu() {

    const buttonColor = "white";

    return (
        <div className='text-center py-20 bg-gradient-to-t from-black to-transparent px-4 sm:px-40'>
            <div className='text-8xl'>Menu</div>
            <Specials />
            <div className="divider"></div>
            <div className="text-4xl mt-10">Menu</div>
            <div className="flex flex-wrap justify-center">
                {infoArray.map((info, index) => (
                    <div key={index}>
                        <div className="card w-72 bg-base-100 shadow-xl m-4">
                            <figure><Image width={300} height={700} src={info.url} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{info.title}</h2>
                                <p className="text-left">{info.content}</p>
                                <div className="card-actions justify-center">
                                    <OrderNowButton buttonColor={buttonColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="justify-center text-center">
                <OrderNowButton buttonColor={buttonColor} />
                <div className="text-xl">
                    Make sure to follow us on
                    <motion.a
                        className="mx-2"
                        whileHover={{ scale: 1.2 }}
                        href='https://www.instagram.com/charleescomfortkitchen/'
                        target="_blank"
                        rel="noreferrer">
                        <InstagramIcon />
                    </motion.a>
                    and
                    <motion.a
                        className="mx-2"
                        whileHover={{ scale: 1.2 }}
                        href='https://www.facebook.com/CharleesComfortKitchen'
                        target="_blank"
                        rel="noreferrer">
                        <FacebookIcon />
                    </motion.a>
                    for updates
                </div>
            </div>



        </div>
    )
}