import Image from "next/image"

export default function Employees(props) {

    const employees = props.employees

    return (
        <>
            <div className="flex flex-wrap flex-row-reverse mx-auto justify-center">
                {
                    employees.map((items) => (
                        <>
                            <div className="card card-side bg-base-100 shadow-xl m-10">
                                <figure><img className="w-72" src={items.photo.url} alt={items.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{items.name}</h2>
                                    <p>{items.jobTitle}</p>
                                    {items.description ? <p className="text-xs w-52 py-4">{items.description}</p> : null}
                                    <div className="card-actions justify-end">
                                        {items.link ? <a href={items.link} target="_blank" rel="noreferrer" className="btn glass">find out more about {items.firstName}</a> : null}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}