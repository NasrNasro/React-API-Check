import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

function Details() {
    let {id} = useParams ();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> {setUser(res.data); setLoading(false);})
        .catch(err=> setError(true))
    }, [id]);

    return (
        <div>
            {loading ?
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner> :
            <div className="details">
                <Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>{user.address.street}</Card.Text>
                        <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            }
        </div>
    )
}

export default Details
