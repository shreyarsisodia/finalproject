import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
const Cards=(props)=>
{
    const{imagelink}=props;
return(
<>
      <Card style={{width: '155px',height:'155px',borderRadius:'20px' }}>
  <Card.Img className="imgheight" style={{width: '155px',height:'155px',borderRadius:'20px' }} src={imagelink} />
</Card>
</>
);
}
export default Cards;