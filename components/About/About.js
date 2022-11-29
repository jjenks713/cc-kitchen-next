import Image from 'next/image'
import { AshleyData, MattData } from './AboutData'

export default function About() {

    return (
        <div className='py-20'>
            <div className="flex flex-col flex-wrap bg-gray-800 p-14 mx-4 md:mx-40 rounded-xl">
                <div className="flex mx-auto">
                    <Image className="img-fluid mb-3 mb-lg-0 rounded-xl shadow-2xl shadow-gray-200"
                        src="/images/img/about-photo.jpg" alt="menu-1"
                        width={700}
                        height={799}
                    />
                </div>
                <div className="text-center">
                    <div className="">
                        <div className='py-10 text-2xl'>{AshleyData.name} and {MattData.name}</div>
                        <p className="text-center py-3">
                            {AshleyData.content}
                        </p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="text-center py-3">
                    <p>
                        {MattData.content}
                    </p>
                </div>
            </div>
        </div>
    )
}