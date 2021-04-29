import React, {useState, useContext, useEffect } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const EditHenkilo = (props) => {
    const [selectedHenkilo, setSelectedHenkilo] = useState({
        id: '',
        name: ''
    })
    const { henkilot, editHenkilo } = useContext(GlobalContext)
    const history = useHistory()
    const currentHenkiloId = props.match.params.id

    useEffect(() => {
        const henkiloId = currentHenkiloId
        const selectedHenkilo = henkilot.find(henkilo => henkilo.id === henkiloId)
        setSelectedHenkilo(selectedHenkilo)
    }, [currentHenkiloId, henkilot])

    const onChange = (e) => {
        setSelectedHenkilo({...selectedHenkilo, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editHenkilo(selectedHenkilo)
        history.push('/')
    }

    
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={selectedHenkilo.name} onChange={onChange} name="name" placeholder="Enter Henkilö" required></Input>
            </FormGroup>
            <Button type="submit">Edit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
