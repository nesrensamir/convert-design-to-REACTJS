import React, { Fragment } from 'react' 
import {Container, Col, Row,FormControl,Button} from 'react-bootstrap' 
import {QuestionLg} from 'react-bootstrap-icons' 
import './Form.css'

function Form() {
  return (
  <Fragment>
     <Container fluid="md" className="formContainer">
      <Row>
        <Col md={6}>
          
        </Col>
        <Col className='formCol'>
      <div className='formTitle'>
        <QuestionLg className='Qicon'/> 
        أرسل سؤالك للمحاذ 
        <p className='subFormTitle'>يجب عليك التسجيل و حضور الندوة</p>
      
      </div>
      <FormControl as="textarea" rows={3} placeholder="السؤال"  />
      <div className='note'><strong>لابد من حجز الندوة أولا </strong>حتى تتمكن من ترك سؤالك</div>
      <Button variant="primary" size="lg" disabled className="subBtn ">
          أرسل
        </Button>
              </Col>
      </Row>
    </Container>
  </Fragment>
  )
}

export default Form 


