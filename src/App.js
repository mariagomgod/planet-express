import 'react-modal-overlay/dist/index.css'
import './App.sass'
import Header from './components/Header'
import AllEmployees from './components/AllEmployees'
import Footer from './components/Footer'
import OfferBanner from './components/OfferBanner'
import Carousel from './components/Carousel'
import TwitterFeed from './components/TwitterFeed'

function App () {
  return (
    <div className='App'>
      <OfferBanner />
      <Header />
      <Carousel />
      <div id='content'>
        <div id='main'>
          <AllEmployees />
        </div>
        <aside>
          <TwitterFeed />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default App
