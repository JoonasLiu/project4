import React, {useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const AddHenkilo = () => {
    const [name, setName] = useState('')
    const { addHenkilo } = useContext(GlobalContext)
    const history = useHistory()

    const onSubmit = (e) => {
         e.preventDefault()
        const newHenkilo = {
            id: uuid(),
            name
        }
        addHenkilo(newHenkilo)
        history.push('/')
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter Name" required></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
