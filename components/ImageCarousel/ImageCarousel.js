import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderNowButton from "../OrderNowButton/OrderNowButton";

export default function ImageCarousel(props) {

    const galleryImages = props.galImages.data.galleryCollection.items;
    const [indexTab, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = galleryImages.length - 1
        if (indexTab < 0) {
            setIndex(lastIndex)
        }
        if (indexTab > lastIndex) {
            setIndex(0)
        }
    }, [indexTab, galleryImages])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(indexTab + 1)
        }, 5000);
        return () => clearInterval(slider)
    }, [indexTab])

    const buttonColor = "black";
    return (
        <div className="flex justify-center py-32">
            <div style={{ maxHeight: '700px' }} className="bg-gradient-to-t from-gray-200 to-white text-black mx-4 rounded-lg p-4 md:pb-32">
                <div className="col-start-1 row-start-1 bg-gradient-to-t from-black to-transparent bg-opacity-90"></div>
                <div className="text-4xl py-10 text-center link link-hover"><Link href="/gallery">Check out our full Gallery</Link></div>
                <div className="flex mx-auto w-1/2 border-b-2 border-black mb-2"></div>
                <div className="flex justify-center py-14 md:py-20">
                    {galleryImages.map((image, index) => (
                        <>
                            {indexTab == index ?
                                <motion.div
                                    initial={{ rotate: -10, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: .5, type: "spring", stiffness: 100 }}
                                    key={index}>
                                    <img //eslint-disable-line
                                        src={image.image.url}
                                        alt={image.title}
                                        className="relative left-0 top-0 rounded-2xl shadow-lg w-96 h-72"
                                    />
                                </motion.div>
                                :
                                null
                            }
                        </>
                    ))}
                </div>
                <div className="flex justify-center">
                    <OrderNowButton buttonColor={buttonColor} />
                </div>
                <div className="text-4xl py-10"></div>
            </div>
        </div>
    );
};
