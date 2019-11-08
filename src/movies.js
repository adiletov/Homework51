import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';
const Example = (props) => (
    <div>
        <Card>
            <CardImg src={props.img} alt="Card image cap"/>
            <CardBody>
                <CardTitle>Названия: {props.name}</CardTitle>
                <CardSubtitle>Премьера:{props.year}</CardSubtitle>
                <CardText>Режиссер: {props.text}</CardText>
            </CardBody>
        </Card>
    </div>
);


export default Example;
//