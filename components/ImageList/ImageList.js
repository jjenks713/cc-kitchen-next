import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { AllInbox } from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GalImageList(props) {

    const [loading, setLoading] = useState(false)

    const galleryImages = props.galImages.data.galleryCollection.items;
    const tags = props.tags;

    return (
        <div className='mb-20 mt-4 mx-0 lg:mx-24'>

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
                            className='m-2 md:mb-10 rounded-lg md:p-10'
                        >
                            {
                                galleryImages.map((photo) => (
                                    <>
                                        {photo.contentfulMetadata.tags.map((tag) => (
                                            <>
                                                {tags === tag.name ?
                                                    <ImageListItem className='m-5 rounded-xl relative'>
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                        >
                                                            <Image //eslint-disable-line
                                                                width={100}
                                                                height={100}
                                                                src={photo.image.url}
                                                                alt={photo.title}
                                                                className='rounded-xl shadow-lg shadow-gray-700'
                                                                layout="responsive"
                                                                loading="lazy"
                                                            />
                                                        </motion.div>

                                                        <ImageListItemBar
                                                            title={photo.title}
                                                            subtitle={photo.description}
                                                            className="rounded-b-xl"
                                                        />
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