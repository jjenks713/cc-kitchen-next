import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from 'react';
export default function GalImageList() {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        callAPI();
        async function callAPI() {
            try {
                const res = await fetch(
                    "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=9c99e6100070bcf819159947e32ce80a&user_id=194257058%40N07&format=json&nojsoncallback=1"
                );
                const data = await res.json();
                setApiData(data.photos.photo)
                console.log(data)
            } catch (err) {
                console.log(err);
                alert("there was an error please reload the page")
            }
        };
    }, []);

    return (
        <div className='my-20 mx-0 lg:mx-24'>
            {apiData ?
                <ImageList
                    variant="masonry"
                    sx={{
                        columnCount: {
                            xs: '1 !important',
                            sm: '2 !important',
                            md: '3 !important',

                        },
                    }}
                    gap={8}
                    className='m-2 md:m-10 rounded-lg md:p-10'
                >
                    {
                        apiData.map((photo) => (
                            <>
                                <ImageListItem className='m-5 rounded-xl'>

                                    <img //eslint-disable-line
                                        loader={
                                            () => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                                        }
                                        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                                        srcSet={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                                        alt={photo.title}
                                        loading="lazy"
                                        className='rounded-xl shadow-lg shadow-gray-400'
                                    />
                                    <div className='py-3 text-center text-xl'>{photo.title}</div>
                                </ImageListItem>
                            </>
                        ))
                    }
                </ImageList>
                : null
            }
        </div >
    );
}