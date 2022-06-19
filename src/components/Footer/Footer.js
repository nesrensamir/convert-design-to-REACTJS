import React, { Fragment } from 'react'
import {Container, Col, Row,InputGroup,Button,Form} from 'react-bootstrap' 
import { Facebook,Google,Linkedin, Twitter } from 'react-bootstrap-icons'
import './Footer.css'
function Footer() {
  return (
    <Fragment>
         <Container fluid className="footerContainer">
      <Row>
        <Col ></Col> 
        <Col md={3} className="secLinks">
          <Row>
           <h4 > <strong>الروابط</strong></h4>  
           </Row> 
           <Row>
           <Col md={3}> 
           <div className='footerLinks'>الرئيسية</div>
           <div className='footerLinks'>من نحن </div>
           <div className='footerLinks'>الخدمات</div>
           <div className='footerLinks'>الفعاليات</div>
           <div className='footerLinks'>الكورسات</div>
           <div className='footerLinks'>الخدمات</div>
           </Col>
           <Col>  
           <div className='footerLinks'>الورشات</div>
           <div className='footerLinks'>الأخبار</div>
           <div className='footerLinks'>الأبحاث</div>
           <div className='footerLinks'>فريق العمل</div>
           <div className='footerLinks'>العضوية</div>
           <div className='footerLinks'>اتصل بنا</div>

          </Col>
          </Row>
        </Col>
        <Col md={5}>
         <h4><strong>تابعنا</strong></h4> 
         
          <Google className='socialIcons'/>
          <Linkedin className='socialIcons'/>
          <Twitter className='socialIcons'/>
          <Facebook className='socialIcons'/> 
          <h4><strong>لمتابعة الأخبار</strong></h4> 
          <InputGroup  className='inputGroup'>
        <Form.Control
        />
        <Button variant="outline-secondary" id="button-addon2">
          اشتراك
        </Button>
      </InputGroup>
        </Col>
      </Row>
    </Container>
    </Fragment>
  )
}

export default Footer