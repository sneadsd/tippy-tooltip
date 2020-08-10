import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Col } from 'react-bootstrap';


class Contact extends React.Component {
	render() {
		return(
			<div className="col-md-12">
				<div  as={Col} md="3" >
					<h2 className="mr-sm-2">NEWSLETTER</h2>
					<p>Stay up to date with our latest news.</p>
				</div>
				<Form>
					<Form.Group as={Col} md="3" controlId="formName">
						<FormControl type="text" placeholder="Name" className="mr-sm-2" />
					</Form.Group>
					<Form.Group as={Col} md="3" controlId="formEmail">
						<FormControl type="text" placeholder="Email Address" className="mr-sm-2" />
					</Form.Group>
					<Form.Group as={Col} controlId="submitButton">
					<Tippy placement='right' content="We'll never share your email with anyone else.">
						<Button variant="outline-success" >Submit</Button>
					</Tippy>
					</Form.Group>
                </Form>

			</div>

		);
	}
}
export default Contact;



