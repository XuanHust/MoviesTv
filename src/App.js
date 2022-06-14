import '../src/components/fontawesome-free-6.0.0-web/css/all.css';
import './App.css';
import Content from './components/contents/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/navigator/Nav';
import { useEffect } from 'react'
import { connect } from 'react-redux';


function App(props) {

  const handleLoad = async () => {
    const state = await props.callApi()
  }

  // fetch('/phim-moi-cap-nguoi-hung-tia-chop-phan-8', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json; charset=utf-8'
  //   }
  // }).then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(error => console.error(error))

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
