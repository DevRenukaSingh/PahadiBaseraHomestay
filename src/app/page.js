
import Hero from '../../components/hero'
import MyGallery from '../../components/mygallery'
import About from '../../components/about'
import Rooms from '../../components/rooms'
import Ameneties from '../../components/ameneties'
import Contact from '../../components/contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10  w-full font-mono text-sm lg:flex">
        <Hero/>
      </div>
      <About/>
      <Rooms/>
      <Ameneties/>
      <MyGallery />
      <Contact/>
    </main>
  )
}
