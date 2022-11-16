import React from "react"
import { motion } from "framer-motion"

export default function MainHeader() {

    let cardVariants = {
        offscreen: {
            y: 300,
            rotate: -10,
            opacity: 0,
        },
        onscreen: {
            y: 50,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }

    return (
        <>
            <div style={{
                backgroundImage: `url("/images/img/try-back.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
                className='uppercase py-14 pb-44 pt-10 md:pt-20 px-4 md:px-72 text-center relative top-0'
            >
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={cardVariants}
                    className='text-6xl sm:text-7xl md:text-8xl py-14'>charlees comfort kitchen</motion.div>
                <div className='text-2xl py-14'>Homestyle cooking and catering in the heart of Utah</div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                    <a
                        href='https://charlees-comfort-kitchen.square.site'
                        target='_black'
                        className='border-white py-2 px-10 rounded-lg bg-gradient-to-r from-black via-gray-500 to-gray-800'
                    >
                        Order Now
                    </a>
                </motion.div>


            </div>
        </>
    )
}