

export default function Announcement(props) {
    console.log(props)
    const announcement = props.announcement.data.announcement;

    return (
        <div
            className="w-full text-center sticky bottom-0 btm-nav p-1"
            style={{
                backgroundColor: announcement.backgroundColor,
                color: announcement.textColor
            }}>
            <span className="md:text-2xl">! {announcement.text} !</span>
        </div>
    )
}