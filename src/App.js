import '../src/Components/fontawesome-free-6.0.0-web/css/all.css'
import './App.css';
import Content from './Components/Contents/content';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Nav from './Components/Navigator/nav';
import { useEffect } from 'react'
import { connect } from 'react-redux';


function App(props) {

  const handleLoad = async () => {
    const phim = await props.callApi()
  }

  useEffect(() => {
    window.addEventListener('load', handleLoad)
  }, [])

  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return (
    {
      dataRedux: state.listFilm
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    callApi: () => dispatch({ type: 'CALL_API' })
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
