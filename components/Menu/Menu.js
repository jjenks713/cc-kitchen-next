import React, { useState } from "react"
import Specials from "../Specails/Specails"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import OrderNowButton from "../OrderNowButton/OrderNowButton";
import { indigo } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';

export default function Menu(props) {

    const menuData = props.menu.data.menuCollection.items
    const [isDisabled, setIsDisabled] = useState(false);
    const buttonColor = "white";
    const [outData, setOutData] = useState({
        id: null,
        title: "",
        description: "",
        image: ""
    })
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.03
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    function settingData(info) {
        setOutData({
            id: info.id,
            title: info.title,
            description: info.description,
            image: info.menuImage.url
        })
    }
    function removeData() {
        setOutData({
            id: null,
            title: "",
            description: "",
            image: ""
        })
    }

    return (
        <div className='text-center py-20 bg-gradient-to-t from-black to-transparent px-4 sm:px-40'>
            <div className='text-8xl'>Menu</div>
            <Specials />
            <div className="divider"></div>
            <div className="text-4xl my-10">Menu</div>
            <div className="flex flex-wrap justify-center">
                {menuData.map((info, index) => (
                    <div key={index}>
                        <motion.div className="card w-72 bg-base-100 shadow-white shadow-lg m-4 cursor-pointer" whileHover={isDisabled ? { scale: 1 } : { scale: 1.1, rotate: 3, transition: { stiffness: 100 } }} layoutId={info.id} onClick={() => settingData(info)}>
                            <figure><img width={300} height={700} src={info.menuImage.url} alt="Album" /></figure>
                        </motion.div>
                    </div>
                ))}
                <div className="flex justify-center w-full absolute z-40">
                    <AnimatePresence>
                        {outData.id &&
                            <>
                                <motion.div className="absolute w-screen h-screen z-10 bg-black/50 backdrop-blur-lg" onClick={() => removeData()}></motion.div>
                                <motion.div layoutId={outData.id} className="relative z-50">
                                    <div className="relative text-center">
                                        <motion.div className="card w-96 bg-base-100 shadow-gray-600 shadow-lg m-4">
                                            <div className="py-2"><button className="glass w-14 relative left-36 rounded-lg px-2 py-1" onClick={() => removeData()}><CloseIcon /></button></div>
                                            <figure><img className="w-full" src={outData.image} alt="Album" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{outData.title}</h2>
                                                <motion.div
                                                    variants={sentence}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className="flex flex-wrap justify-start">
                                                    {outData.description.split(" ").map((char, index) => (
                                                        <motion.p
                                                            key={index}
                                                            variants={letter}
                                                            className="flex justify-start mr-1"
                                                        >
                                                            {char}
                                                        </motion.p>
                                                    ))}
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 100 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ stiffness: 100 }}
                                                    className="card-actions justify-center">
                                                    <OrderNowButton buttonColor={buttonColor} />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </>
                        }
                    </AnimatePresence>
                </div>
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