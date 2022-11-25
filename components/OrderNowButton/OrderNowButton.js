import { motion } from "framer-motion"

export default function OrderNowButton(props) {

    return (
        <motion.a
            whileHover={{ scale: 1.2 }}
            href='https://charlees-comfort-kitchen.square.site'
            target='_blank'
            className='btn glass my-4'
            rel="noreferrer"
            style={{
                color: props.buttonColor
            }}
        >
            Order Now
        </motion.a>
    )
}