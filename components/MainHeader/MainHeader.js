import React from "react"
import { motion } from "framer-motion"

const getPathMap = (path) => {
    switch (path) {
        case "/":
            return 1;
        case "/gallery":
            return 2;
        case "/about":
            return 3;
        case "/calendar":
            return 4;
    }
}

export default function MainHeader(props) {

    /* const header = props.header.data.homepageBannerCollection.items; */
    console.log(props)
    const page = getPathMap(props.pathname)
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.05
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

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/img/try-back.jpg")` }}>
                <div className="col-start-1 row-start-1 w-full h-full bg-gradient-to-t from-black to-transparent bg-opacity-90"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg pt-32 xs:pt-0">

                        {/* {header.map((header) => (
                            <>
                                {header.page === props.page &&
                                    <>
                                        <motion.div
                                            variants={sentence}
                                            initial="hidden"
                                            animate="visible"
                                            className='text-5xl sm:text-7xl md:text-8xl pb-14 uppercase mb-10'
                                        >
                                            {header.heading.split(" ").map((char, index) => (
                                                <motion.p key={char + "- " + index}
                                                    variants={letter}
                                                >
                                                    {char === " " ? "\u00A0" : char}
                                                </motion.p>
                                            ))}
                                        </motion.div>
                                        <motion.div
                                            variants={sentence}
                                            initial="hidden"
                                            animate="visible"
                                            className='flex flex-wrap justify-center text-2xl mb-10'
                                        >
                                            {header.text.split(" ").map((char, index) => (
                                                <motion.p key={char + "- " + index}
                                                    variants={letter}
                                                    className="text-2xl"
                                                    style={{ marginRight: "6px", float: "left" }}
                                                >
                                                    {char === " " ? "\u00A0" : char}
                                                </motion.p>
                                            ))}
                                        </motion.div>

                                        {header.buton ?
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <a
                                                    href='https://www.charleesonline.com/'
                                                    target='_black'
                                                    className='btn glass text-white'
                                                >
                                                    Order Now
                                                </a>
                                            </motion.div>
                                            :
                                            null
                                        }
                                    </>
                                }

                            </>
                        ))} */}

                    </div>
                </div>
            </div>
        </>
    )
}