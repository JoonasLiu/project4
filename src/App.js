
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from './components/Home'
import {AddHenkilo} from './components/AddHenkilo'
import {EditHenkilo} from './components/EditHenkilo'
import {GlobalProvider} from './context/GlobalState'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddHenkilo} />
            <Route path="/edit/:id" component={EditHenkilo} />
          </Switch>
        </Router>
      </GlobalProvider>
      
    </div>
  )
}
// const App = () => {
//   const [muuttuja, setMuuttuja] = useState()
//   const [henkilot, setHenkilot] = useState([])

  
//    useEffect(() => {
//      fetch('https://project3jooliu.herokuapp.com/henkilot/getall')
//     .then(result => {
//       return result.json()
//      })
//      .then(data => {
//        console.log(data)
//        setHenkilot(data)
//      })
//    }, [])


//   useEffect(() => {
//     let henkilotCopy = [...henkilot]
//     henkilotCopy = henkilotCopy.filter(henkilo => henkilo.name.includes(muuttuja))
//     setHenkilot(henkilotCopy)
//   }, [muuttuja])

//   const handleChange = (event) => {
//     setMuuttuja(event.target.value)
//   }

 

  
//   return (
//     <>
//      <form>
//        <input value={muuttuja} type='text' onChange={handleChange} />
//      </form>
//      {
//        henkilot.map(henkilo =>
//         <Henkilo whyHyva={henkilo.whyHyva} name={henkilo.name} />
//         )
//      }
     
//     </>
//   )
// }


export default App
