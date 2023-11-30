import React from "react"
import { useState, useEffect } from "react";
import Image from "next/image";
import OrderNowButton from "../OrderNowButton/OrderNowButton"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export default function Menu(specials) {
    const buttonColor = "white"
    const [loading, setLoading] = useState(false)
    const specialsArray = specials.specials.data.specialsCollection.items;

    return (
        <div className="py-10">
            <div className='text-4xl mt-10'>Specials</div>

            <div className='flex flex-wrap justify-center py-10'>
                {loading ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="3rem" color="inherit" />
                    </Box>
                    :
                    <>
                        {specialsArray ?
                            <>
                                {
                                    specialsArray.map((photo) => (
                                        <>
                                            <div className="flex flex-col justify-center mx-10">
                                                <img //eslint-disable-line
                                                    src={photo.image.url}
                                                    alt={photo.name}
                                                    loading="lazy"
                                                    className='rounded-xl shadow-lg shadow-gray-400 w-72'
                                                />
                                                <div className='py-3 text-center text-xl'>{photo.name}</div>
                                            </div>
                                        </>
                                    ))
                                }
                            </>
                            :
                            null
                        }
                    </>

                }

            </div>
            <OrderNowButton buttonColor={buttonColor} />
        </div >
    )
}