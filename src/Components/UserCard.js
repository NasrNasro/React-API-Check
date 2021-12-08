import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserCard({user}) {
    return (
        <div className="Card" >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.username}</Card.Text>
                    <Link to= {`/Details/${user.id}`} > 
                    <Button variant="primary">Details</Button> 
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
