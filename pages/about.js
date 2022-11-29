import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'

export default function Home() {
    const header = {
        title: "About",
        headline: "Info about our founders below",
        button: false
    };

    return (
        <div>
            <main>
                <MainHeader header={header} />
                <About />
            </main>
        </div>
    )
}
