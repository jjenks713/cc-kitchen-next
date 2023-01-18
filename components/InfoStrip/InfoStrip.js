
export default function InfoStrip(props) {
    const infoCards = props.infoCards.data.infoCardsCollection.items

    return (
        <div className='flex flex-wrap py-20 justify-center text-black'>
            {infoCards.map((info) => (
                <>
                    <div className="card w-96 mx-4 my-4 bg-gradient-to-t from-base-100 to-white shadow-xl">
                        <div className="card-body items-center text-center p-4 sm:p-6">
                            <div className='glass rounded-lg p-1'>
                                <img width={40} height={40} src={info.icon.url} alt={info.icon.title} />
                            </div>
                            <h2 className="card-title">{info.title}</h2>
                            <div className="w-1/2 border-b-2 border-white mb-2 flex justify-center"></div>
                            {info.hours &&
                                <>
                                    {info.hours.map((hours) => (
                                        <>
                                            <ul><li>{hours}</li></ul>
                                        </>
                                    ))}
                                </>
                            }
                            {info.address && <a href={info.address} className="link link-hover">{info.address}</a>}
                            {info.email && <a href={info.email} className="link link-hover">{info.email}</a>}
                            {info.phone && <a href={info.phone} className="link link-hover">{info.phone}</a>}
                            {info.address &&
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.2256418945276!2d-111.58867818438938!3d39.35112652767549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c71aeef6cb525%3A0x2fe449c62fdcffb8!2sCharlee&#39;s%20comfort%20kitchen!5e0!3m2!1sen!2sus!4v1669400653775!5m2!1sen!2sus"
                                    width="275"
                                    height="150"
                                    style={{ border: "0", borderRadius: "20px", marginTop: "5px" }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            }
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}
