import MainHeader from '../components/MainHeader/MainHeader'
import Menu from '../components/Menu/Menu'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'

export default function Home() {
  const header = {
    title: "Charlees Comfort Kitchen",
    headline: "Homestyle cooking in the heart of Utah",
    button: true
  };

  return (
    <div>
      <main>
        <MainHeader header={header} />
        <Menu />
        <ImageCarousel />
      </main>
    </div>
  )
}
