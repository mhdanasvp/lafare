
import { Col, Container, Row } from 'react-bootstrap';
import team from './images/team.png'
import cooperation from './images/cooperation.png'

// import { TiPhoneOutline, TiLocationOutline, TiMail } from "react-icons/ti";
import ContactForm from './ContactForm';

import phone from './images/phone.png'



const Contact = () => {
  



    return (
        <section id='Contact'   >
            <Container>
                <Row>
                    <Col className='left'>
                    <h3 className="section_title">
                    Want to join <br/>with Us?
                     </h3>
                     <div className="joint">
                        <div className='item' style={{}}>
                             <img className="imagejoint " src={team} />
                            <h3 className="jointcontent">Join our family</h3>
                        </div>
                        <span className='line'></span>
                        <div className='item'>
                            <img className="imagejoint " src={cooperation} />
                             <h3 className="jointcontent"  >Become our <br/>distribution partner</h3>
                        </div>
                    </div>
                    </Col>
                    <Col className='right'>
                        <ContactForm/>
                    </Col>
                </Row>
                {/* <div className="phone">
                  <img  className="phonepic" src={phone} />
               </div> */}
            </Container>

        </section>
    )
}

export default Contact