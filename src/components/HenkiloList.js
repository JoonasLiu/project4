import React, { useContext, useEffect, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

export const HenkiloList = () => {
    const { henkilot, addHenkilo, deleteHenkilo } = useContext(GlobalContext)

    const [muuttuja, setMuuttuja] = useState()


    useEffect(() => {
        fetch('https://project3jooliu.herokuapp.com/henkilot/getall')
       .then(result => {
         return result.json()
        })
        .then(data => {

            if(henkilot.length === 0) {
                data.forEach(element => {
                    console.log(element)
                 const newHenkilo = {
                     id: element._id,
                     name: element.name
                 }
                 addHenkilo(newHenkilo)
                });
            }
          
        })
      }, [])

      console.log(henkilot.length)


    function haeHenkilo() {
        var id = ''
        console.log(muuttuja)
        henkilot.forEach(element => {
            if (element.name == muuttuja) {
                id = element.id
            }

        });

        console.log('id =>' + id)
        
        fetch('https://project3jooliu.herokuapp.com/henkilot/' + id)
           .then(result => {
             return result.json()
            })
            .then(data => {
                
                const newHenkilo = {
                    id: data._id,
                    name: data.name
                }
                henkilot.forEach(element => {
                    deleteHenkilo(element.id)
                })
                addHenkilo(newHenkilo)
              
            })
    }
    
    return (
        
    <ListGroup className="mt-4">
        {henkilot.length > 0 ? (
            <>
            <form>
                 <input value={muuttuja} type='text' onChange={(event)=> setMuuttuja(event.target.value)}/>
                 <Button onClick={haeHenkilo}>Hae</Button>
            </form>
            {henkilot.map(henkilo => (
                <ListGroupItem className="d-flex" key={henkilo.id}>
                    <strong>{henkilo.name}</strong>
                     <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to={`/edit/${henkilo.id}`}>Muokkaa</Link>
                        <Button onClick={() => deleteHenkilo(henkilo.id)} color="danger">Poista</Button>
                    </div>
                </ListGroupItem>
             ))}
            </>
    ) : (
        <h4 className="text-center">Ei henkilöitä</h4>
    ) }

    </ListGroup>
    )
}
