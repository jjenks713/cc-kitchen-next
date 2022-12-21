import Image from "next/image"
import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import { useMediaQuery } from "../BreakPoint/BreakPoint";

export default function Employees(props) {
    const isBreakpoint = useMediaQuery(1023)

    const employees = props.employees
    const [isDisabled, setIsDisabled] = useState(false);
    const buttonColor = "white";
    const [outData, setOutData] = useState({
        id: null,
        title: "",
        name: "",
        description: "",
        image: "",
        link: "",
        firstName: ""
    })

    function settingData(items) {
        setOutData({
            id: items.name,
            title: items.jobTitle,
            name: items.name,
            description: items.description,
            image: items.photo.url,
            link: items.link,
            firstName: items.firstName
        })
    }
    function removeData() {
        setOutData({
            id: null,
            title: "",
            name: "",
            description: "",
            image: "",
            link: "",
            firstName: ""
        })
    }

    return (
        <>
            <div className="flex flex-wrap mx-auto justify-center">

                {
                    employees.map((items) => (
                        <>
                            <motion.div
                                whileHover={isDisabled ? { scale: 1 } : { scale: 1.1, rotate: 3, transition: { stiffness: 100 } }}
                                layoutId={items.name}
                                onClick={isBreakpoint ? null : () => settingData(items)}
                                className="cursor-pointer"
                            >
                                <ImageListItem className='m-5 rounded-xl w-72'>
                                    <Image //eslint-disable-line
                                        width={100}
                                        height={100}
                                        src={items.photo.url}
                                        alt={items.name}
                                        className='rounded-xl shadow-lg shadow-gray-700'
                                        layout="responsive"
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={items.name}
                                        subtitle={items.jobTitle}
                                        className="rounded-b-xl"
                                        actionIcon={
                                            isBreakpoint ?
                                                <>
                                                    {items.link ? <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${items.name}`}
                                                        href={items.link}
                                                    >
                                                        <LaunchIcon />
                                                    </IconButton>
                                                        :
                                                        null
                                                    }
                                                </>
                                                :
                                                null
                                        }
                                    />
                                </ImageListItem>
                            </motion.div>

                        </>
                    ))
                }
                <div className="flex justify-center w-full absolute">
                    <AnimatePresence>
                        {outData.id &&
                            <>
                                <motion.div className="absolute w-screen h-screen bg-black/50 backdrop-blur-lg" onClick={() => removeData()}></motion.div>
                                <motion.div layoutId={outData.id}>
                                    <div className="card w-80 bg-base-100 shadow-xl">
                                        <button className="bg-black/30 backdrop-blur-lg absolute right-2 top-2 rounded-lg py-1 px-2" onClick={() => removeData()}><CloseIcon className="text-lg" /></button>
                                        <figure><img src={outData.image} alt={outData.name} /></figure>
                                        <div className="card-body relative">
                                            <h2 className="card-title">{outData.name}</h2>
                                            <p>{outData.title}</p>
                                            {outData.description ? <p className="text-xs w-52 py-4">{outData.description}</p> : null}
                                            <div className="card-actions justify-center">
                                                {outData.link ? <a href={outData.link} target="_blank" rel="noreferrer" className="btn glass text-xs">find out more about {outData.firstName}</a> : null}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        }
                    </AnimatePresence>
                </div>

            </div>
        </>
    )
}