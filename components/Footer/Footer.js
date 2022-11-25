import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-gradient-to-b from-black to-gray-900 text-white rounded">
            <div className="grid grid-flow-col gap-4 sm:text-xl">
                <motion.a whileHover={{ scale: 1.1 }} a href='https://charlees-comfort-kitchen.square.site' target="_blank" rel="noreferrer" className="link link-hover">Order</motion.a>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href="/about" className="link link-hover">About</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href="/gallery" className="link link-hover">Gallery</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href="/calendar" className="link link-hover">Calender</Link>
                </motion.div>
                <motion.a whileHover={{ scale: 1.1 }} a href='https://forms.gle/KQfYGABjRg4Mi2gC9' target="_blank" rel="noreferrer" className="link link-hover">Subscribe</motion.a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <motion.a whileHover={{ scale: 1.2 }} href='https://www.instagram.com/charleescomfortkitchen/' target="_blank" rel="noreferrer">
                        <InstagramIcon />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href='https://www.facebook.com/CharleesComfortKitchen' target="_blank" rel="noreferrer">
                        <FacebookIcon />
                    </motion.a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - Charlees Comfort Kitchen</p>
            </div>
        </footer>
    )
}