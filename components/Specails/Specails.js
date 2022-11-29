import React from "react"
import { useState, useEffect } from "react";
import Image from "next/image";
import OrderNowButton from "../OrderNowButton/OrderNowButton"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export default function Menu() {
    const buttonColor = "white"
    const [apiData, setApiData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        callAPI();
        async function callAPI() {
            setLoading(true);
            try {
                const res = await fetch(
                    "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9c99e6100070bcf819159947e32ce80a&user_id=194813608%40N05&format=json&nojsoncallback=1"
                );
                const data = await res.json();
                setApiData(data.photos.photo)
                if (data) {
                    setLoading(false)
                }
            } catch (err) {
                console.log(err);
                alert("there was an error please reload the page")
            }
        };
    }, []);

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
                        {apiData ?
                            <>
                                {
                                    apiData.map((photo) => (
                                        <>
                                            <div className="flex flex-col justify-center mx-10">
                                                <img //eslint-disable-line
                                                    loader={
                                                        () => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                                                    }
                                                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                                                    srcSet={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                                                    alt={photo.title}
                                                    loading="lazy"
                                                    className='rounded-xl shadow-lg shadow-gray-400 w-72'
                                                />
                                                <div className='py-3 text-center text-xl'>{photo.title}</div>
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