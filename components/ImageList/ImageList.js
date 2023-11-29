import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Pagination, Typography } from '@mui/material';
import usePagination from '../UsePagination';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { AllInbox } from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GalImageList(props) {

    const [loading, setLoading] = useState(false)
    const galleryImages = props.galImages.data.galleryCollection.items;
    /* const tags = props.tags; */

    let [page, setPage] = useState(1);
    const PER_PAGE = 10;
  
    const count = Math.ceil(galleryImages.length / PER_PAGE);
    const _DATA = usePagination(galleryImages, PER_PAGE);
    const handleChange = (e, p) => {
        setLoading(true);
        window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
        setPage(p);
        _DATA.jump(p);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    };


    console.log(galleryImages, loading)
    return (            
        <div className='mb-20 mt-4 mx-0 lg:mx-24' style={{height: loading ? '1000px' : 'inherit'}}>
            {loading ?
                <Box sx={{ width: '320px', display: 'flex', justifyContent: 'center' }}>
                    <span className="loading loading-dots loading-lg w-44 bg-gradient-to-b from-white to-gray-900"></span>
                    {/* <progress className="progress w-56"></progress> */}
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
                                _DATA.currentData().map((photo, index) => (  
                                    <ImageListItem className='m-5 rounded-xl relative' key={index}>
                                        {loading ? <span className="loading loading-ring loading-lg"></span>
                                            :
                                            <>
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
                                            </> 
                                        }   
                                    </ImageListItem>
                                ))
                            }
                        </ImageList>
                        : 
                        <Box>
                            <Typography variant='subtitle1'>
                                Something went wrong please try and reload.
                            </Typography>
                        </Box>
                    }

                    <Box sx={{color: 'white'}} display={'flex'} justifyContent={'center'}>
                        <Pagination
                            count={count}
                            size="large"
                            page={page}
                            shape="rounded"
                            onChange={handleChange}
                            sx={{color: 'white !important', backgroundColor: 'white', borderRadius: '16px'}}
                        />
                    </Box>
                </>
            } 
        </div >        
    );
}