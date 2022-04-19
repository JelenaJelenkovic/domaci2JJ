import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Meni() {
    return (
        <ul style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '5px' }}>
            <Button variant="danger"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Pocetna</Link></Button>{' '}
            <Button variant="danger"><Link to="/opis" style={{ textDecoration: 'none', color: 'white' }}>Opis</Link></Button>{' '}
        </ul>
    )
}

export default Meni;