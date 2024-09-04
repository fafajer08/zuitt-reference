import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// export default function Banner() {
// 	return (
// 		<Row>
// 			<Col>
// 				<h1>Zuitt Coding Bootcamp</h1>
// 				<p>Opportunities for everyone, everywhere.</p>
// 				<Button variant="primary">Enroll now!</Button>
// 			</Col>
// 		</Row>

// 	)
// }


export default function Banner({title, content, destination, buttonLabel}) {

	const navigate = useNavigate();

	function handleClick() {
		navigate(destination) 
	}

	return (
		<Row>
			<Col>
				<h1>{title}</h1>
				<p>{content}</p>
				<Button variant="primary" onClick={handleClick}>{buttonLabel}!</Button>
			</Col>
		</Row>

	)
}