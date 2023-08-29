import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Memecard.css';

const Memecard = (props) => {
  const navigate = useNavigate();
  return (
    <div >
      <Card style={ { width:'22rem' , margin: '25px 30px'}}  >
      <Card.Img variant="top" src={props.img}  style={{width :'18rem' , height : '15rem',margin:'13px 23px 4px' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Button onClick={e =>navigate(`/edit?url=${props.img}`)}className="text-center">Edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Memecard;
