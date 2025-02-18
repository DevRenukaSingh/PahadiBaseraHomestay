
import Hero from './Components/hero'
import MyGallery from './Components/mygallery'
import Footer from './Components/footer'
import Navbar from './Components/navbar'
import About from './Components/about'
import Rooms from './Components/rooms'
import Ameneties from './Components/ameneties'
import Contact from './Components/contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10  w-full font-mono text-sm lg:flex">
        <Hero/>
        <Navbar/>
      </div>
      <About/>
      <Rooms/>
      <Ameneties/>
      <MyGallery />
      <Contact/>
      <Footer/>
    </main>
  )
}
