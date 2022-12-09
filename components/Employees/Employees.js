import Image from "next/image"

export default function Employees(props) {

    const employees = props.employees

    return (
        <>
            <div className="flex flex-wrap flex-row-reverse mx-auto justify-center">
                {
                    employees.map((items) => (
                        <>

                            <div className="card w-96 bg-base-100 shadow-xl mx-10">
                                <figure><img src={items.photo.url} alt={items.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{items.name}</h2>
                                    <p>{items.jobTitle}</p>
                                    {items.description ? <p className="text-xs">{items.description}</p> : null}
                                    {items.link ? <a href={items.link} target="_blank" rel="noreferrer">Click here to find out more about them</a> : null}

                                </div>
                            </div>

                        </>
                    ))
                }
            </div>
        </>
    )
}