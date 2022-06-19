import React, { Fragment } from 'react'
import {Container,Col, Row} from 'react-bootstrap' 
import { Facebook,Google,Linkedin, Twitter, CheckCircleFill } from 'react-bootstrap-icons'
import './Main.css'
function Main() {
  return (
    <Fragment>

<Container className='MainContainer'>
      <Row>
        <Col sm={7}>  
        <h2 className='title'>ملخص الندوة </h2> 
        <h6 className='numberTitle'>10.382 حاضرين</h6>
        <div className='mainContent'>
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصيهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
       <br/>
       هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
        </div>

      </Col>
        <Col sm={5} className="sideTable">
    
        
          <Row className="titleSideTable">
           <Col sm={6}> <h5 className='headTable'>  نشر المحتوى </h5>
           </Col>
          <Col> 
          +
          <Google className='socialIcon'/>
          <Linkedin className='socialIcon'/>
          <Twitter className='socialIcon'/>
          <Facebook className='socialIcon'/> 
          
          </Col>          

            </Row>
         <Row className='mainTable'>
            <div className='checkedText'>
          <CheckCircleFill className='checkIcon'/>
          يوجد ندوات كل أسبوع
          </div>
                   </Row>

        <Row className='mainTable'>
            <div className='checkedText'>
          <CheckCircleFill className='checkIcon'/>
          جميع الندوات مجانية من صفا 
          </div>
        </Row>        

        
        <Row className='mainTable'>
            <div className='checkedText'>
          <CheckCircleFill className='checkIcon'/>
         خطوات ونصائح في مجال الأقتصاد 
          </div>
        </Row>        
        </Col>
      </Row>
      
    </Container>
    </Fragment>
  )
}

export default Main