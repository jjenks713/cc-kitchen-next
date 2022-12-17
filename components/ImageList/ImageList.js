import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { motion } from 'framer-motion';
import { AllInbox } from '@mui/icons-material';
import Image from 'next/image';

export default function GalImageList(galImages) {

    const [loading, setLoading] = useState(false)
    const [tags, setTags] = useState("gallery-images")

    const galleryImages = galImages.galImages.data.galleryCollection.items;
    const navTabs = [
        {
            name: "All",
            value: "gallery-images"
        },
        {
            name: "Charlees Dogs",
            value: "dogs"
        },
        {
            name: "Savory",
            value: "savory"
        },
        {
            name: "Sweet",
            value: "desserts"
        },
    ]

    return (
        <div className='my-20 mx-0 lg:mx-24'>
            <div className='flex justify-center'>
                <div className='flex flex-nowrap bg-gradient-to-t from-white to-black justify-center pt-10 pb-2 rounded-xl'>
                    {navTabs.map(tabs => (
                        <>
                            <motion.button
                                whileHover={{ borderBottom: "black", backgroundColor: "rgb(55 65 81)", color: "white", padding: "4px" }}
                                className='mx-4 text-black rounded'
                                value={tabs.value}
                                onClick={() => setTags(tabs.value)}>
                                {tabs.name}
                            </motion.button>
                        </>
                    ))}
                </div>
            </div>

            {loading ?
                <Box sx={{ width: '100%' }}>
                    <LinearProgress color="inherit" />
                </Box>
                :
                <>
                    {galleryImages ?
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
                            className='m-2 py-10 md:m-10 rounded-lg md:p-10'
                        >
                            {
                                galleryImages.map((photo) => (
                                    <>
                                        {photo.contentfulMetadata.tags.map((tag) => (
                                            <>
                                                {tags === tag.name ?
                                                    <ImageListItem className='m-5 rounded-xl'>

                                                        <Image //eslint-disable-line
                                                            width={100}
                                                            height={100}
                                                            src={photo.image.url}
                                                            alt={photo.title}
                                                            className='rounded-xl shadow-lg shadow-gray-400'
                                                            layout="responsive"
                                                            loading="lazy"
                                                        />
                                                        <div className='py-3 text-center text-xl'>{photo.title}</div>
                                                    </ImageListItem>
                                                    :
                                                    null
                                                }
                                            </>
                                        ))}

                                    </>
                                ))
                            }
                        </ImageList>
                        : null
                    }
                </>
            }
        </div >
    );
}