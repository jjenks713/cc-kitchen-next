import Image from "next/image"
import { useState, useEffect } from "react"
import { info } from "./InfoStripData"

export default function InfoStrip(props) {
    return (
        <div className='flex flex-wrap py-20 justify-center text-black'>
            {info.map((info) => (
                <>
                    <div className="card w-96 mx-4 my-4 bg-gradient-to-t from-base-100 to-white shadow-xl">
                        <div className="card-body items-center text-center p-2 sm:p-6">
                            {info.icon}
                            <h2 className="card-title">{info.title}</h2>
                            <div className="w-1/2 border-b-2 border-white mb-2"></div>
                            <a href={info.link} className="link link-hover">{info.info}</a>
                            {info.phone ?
                                <a href="tel:4352263635" className="link link-hover">{info.phone}</a>
                                :
                                <a className="rounded-xl my-5">{info.data}</a>
                            }
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}
