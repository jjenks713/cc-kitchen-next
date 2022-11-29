import { motion } from "framer-motion"
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import OrderNowButton from "../OrderNowButton/OrderNowButton";

export default function SubscribePanel() {

    return (
        <div
            style={{
                backgroundImage: `url(/images/img/in-trail.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: 'center',
                backgroundSize: 'cover'
            }}
            className='w-full h-96 text-center align-middle'
        >
            <div className="col-start-1 row-start-1 w-full h-full bg-gradient-to-t from-black to-transparent bg-opacity-90"></div>
            <div className="relative align-middle bottom-3/4">
                <MarkEmailReadIcon className="text-5xl" />
                <div className="text-4xl py-3">
                    Subscribe
                </div>
                <div className="flex justify-center">
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        href='https://forms.gle/KQfYGABjRg4Mi2gC9'
                        target='_blank'
                        className='btn glass my-4'
                        rel="noreferrer"
                        style={{
                            color: "white"
                        }}
                    >
                        Subscribe
                    </motion.a>
                </div>
            </div>
        </div>
    )
}