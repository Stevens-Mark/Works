import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import data from './assets/data/siteData.json'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Error from './pages/Error'
import './App.css'

/**
 * Manages routes & renders pages
 * Gets the data (fom file) for the site & passes it to the components
 * @function App
 * @returns {array} siteData: all data
 * @returns {JSX}
 */
const App = () => {
    return (
      <Router>
        <Header />   
          <Switch>
            <Route path="/" exact component={()=> <Home siteData={data} />}/>
            <Route path="/about" exact component={About} />
            <Route path="/project/:id" exact component={()=><Project siteData={data} />} />
            <Route component={Error} />
          </Switch> 
        <Footer />
      </Router>  
      )
  }
  
  export default App