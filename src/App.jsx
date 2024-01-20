import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Tech, Portfolio, Social } from './components'


const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-10 bg-primary">
                <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern"> 
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <About />
            <Tech />
            <Portfolio />
            <Contact />
            <Social />
        </BrowserRouter>
    )
}

export default App
