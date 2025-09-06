import React, { useEffect, useState } from 'react';
import GalImageList from '../components/ImageList/ImageList'
import { Stack, Box } from '@mui/material';

export default function Home(props) {
    /* const [tags, setTags] = useState("gallery-images")
    const [title, setTitle] = useState("All") */
    const { headers, galImages, announcement, totalPages, currentPage } = props
    const page = 2

	const navTabs = [
		{
			name: "All",
			value: "gallery-images",
		},
		{
			name: "Charlees Dogs",
			value: "dogs",
		},
		{
			name: "Savory",
			value: "savory",
		},
		{
			name: "Sweet",
			value: "desserts",
		},
	];

	/*     function setData(value, name) {
        setTags(value)
        setTitle(name)
    } */

	return (
		<div>
			
				<Stack className="flex justify-center flex-wrap flex-row-reverse">
					<Stack justifyContent={"center"}>
						{/* <Box sx={{display: 'flex', justifyContent: 'center',}} >
                            {navTabs.map((tabs, index) => (
                                <Box key={index} sx={{backgroundColor: 'white', p: '25px', borderRadius: '15px', m: '10px' }}>
                                    <motion.button
                                        whileHover={{ borderBottom: "black", backgroundColor: "rgb(55 65 81)", color: "white" }}
                                        className='mx-4 text-black font-bold rounded '
                                        value={tabs.value}
                                        name={tabs.name}
                                        onClick={(e) => setData(e.target.value, e.target.name)}>
                                        {tabs.name}
                                    </motion.button>
                                </Box>
                            ))}
                        </Box> */}
						{/* <div className='text-white text-6xl text-center pt-10'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: .01,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                key={title}
                            >
                                {title}
                            </motion.div>
                        </div> */}
                        <GalImageList galImages={galImages} totalPages={totalPages} currentPage={currentPage} /* tags={tags} */ />
                    </Stack>
                </Stack>            
        </div>
    )
}

