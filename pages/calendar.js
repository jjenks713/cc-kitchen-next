import MainHeader from '../components/MainHeader/MainHeader'

export default function Home() {
    const header = {
        title: "Calendar",
        headline: "Calendar of our events and specials below",
        button: true
    };

    return (
        <div>
            <main>
                <MainHeader header={header} />
                <div class="flex justify-center py-20 mb-20 mx-4">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23616161&ctz=America%2FDenver&showTabs=0&src=Y2hhcmxlZXNjb21mb3J0a2l0Y2hlbkBnbWFpbC5jb20&color=%23039BE5"
                        style={{ border: "solid 1px #777" }}
                        width="800"
                        height="600"
                        frameborder="0"
                        scrolling="no"></iframe>

                </div>
            </main>
        </div>
    )
}
