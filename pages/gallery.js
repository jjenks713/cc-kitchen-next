import MainHeader from '../components/MainHeader/MainHeader'
import GalImageList from '../components/ImageList/ImageList'

export default function Home() {
    const header = {
        title: "Gallery",
        headline: "Check out some of our amazing dishes below",
        button: true
    };

    return (
        <div>
            <main>
                <MainHeader header={header} />
                <div className='flex justify-center flex-wrap flex-row-reverse'>
                    <GalImageList />
                </div>
            </main>
        </div>
    )
}
