import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardInfo(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} alt={props.alt}  />
      <Card.Body>
        <Card.Title>{ props.title}</Card.Title>
        <Card.Text>
         {props.info}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardInfo;