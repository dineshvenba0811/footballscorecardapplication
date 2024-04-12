import classes from './app.module.scss'
import ScoreboardsGrid from "./components/ScoreboardsGrid"
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header"
function App() {
  return (
    <>
        <div className={classes.app}>
            <Header/>
            <ScoreboardsGrid/>
            <Footer/>
        </div>
    </>
  )
}

export default App
