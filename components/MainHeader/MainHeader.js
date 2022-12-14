import React from "react"
import { motion } from "framer-motion"

export default function MainHeader(props) {

    const header = props.header;

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
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/img/try-back.jpg")` }}>
                <div className="col-start-1 row-start-1 w-full h-full bg-gradient-to-t from-black to-transparent bg-opacity-90"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg pt-32 xs:pt-0">
                        <motion.div
                            initial="offscreen"
                            animate="onscreen"
                            variants={cardVariants}
                            className='text-5xl sm:text-7xl md:text-8xl pb-14 uppercase mb-10'
                        >
                            {header.title}
                        </motion.div>
                        <p className="text-2xl mb-10">
                            {header.headline}
                        </p>
                        {header.button ?
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                            >
                                <a
                                    href='https://charlees-comfort-kitchen.square.site'
                                    target='_black'
                                    className='btn glass text-white'
                                >
                                    Order Now
                                </a>
                            </motion.div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}