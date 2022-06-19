import {Fragment} from 'react';
import {Container, Row, Col, Nav,Button, Form,Navbar, Breadcrumb} from 'react-bootstrap' 
import {Calendar3,PersonCircle, Search, Heart} from 'react-bootstrap-icons'
import './Header.css'

function Header() {
  return ( 
   <Fragment>
 
 <Container fluid className='Fcontainer'>

  <Row> 
    <Col md={7}>
    
    </Col>
 <Col> 
 <Navbar bg="none">
        <Container> 
          <div><strong>EN</strong></div> 
          <Search/>
    <input type="text" className="searchInput" placeholder='بجث'/>

          <Navbar.Brand href="#home">  
       
    <div className='agenda'>الأجندة </div> 
    <Calendar3 className='calIcon'/> 
    <PersonCircle className='personIcon'/>
          </Navbar.Brand>  
          
        </Container>
      </Navbar>  
   

 
 </Col>
  </Row> 
  <Row >
  <Navbar bg="light" expand="lg" className='navLinks' >
      <Container fluid >
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          
            style={{ maxHeight: '100px',color:'#5260AB' }}
   
          >
         <a href="" className="menuLinks">الرئيسية</a>
         <a href="" className="menuLinks">من نحن</a>
         <a href="" className="menuLinks">الخدمات</a>
         <a href="" className="menuLinks">الفعاليات</a>
         <a href="" className="menuLinks">الكورسات</a>
         <a href="" className="menuLinks">الندوات</a>
         <a href="" className="menuLinks">الورشات</a>
         <a href="" className="menuLinks">الأخبار</a>
         <a href="" className="menuLinks">الأبحاث</a>
         <a href="" className="menuLinks">فريق العمل </a>
         
          
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Row> 

  <Row>
    <Col className='test'> 
    <Row> 
   <Col>

   </Col>
   <Col>
<div className='divHeart'>
   <Heart className='heart'/>
</div>  
<span>
  اضف الى المقضلة
</span>
   </Col>
<hr className='hrLine'/> 

    </Row>
    <Calendar3 className='calIcon2'/> 
    <span>  يوم الخميس 16 يوليو 2020 م من 4-6 مساءً </span> 


    <h2 className='headContent'>
    ندعوكم في الجمعية المالية السعودية صفا لحضور المساحة الخاصة بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
    </h2> 
    <button type="button" className='resBtn'>حجز الان </button> 

  

    <div className='instro'>
      <h5 className='profileHeader'>تقديم المحاضرين</h5>
     <div className='profileSec'>
     <img src="./images/person.jpg" width="36" height="36" className='profile'/> 
     <h6 className='profileName'>الدكتور رجا المرزوقي</h6> 
     <div className='profileInfo'>نائب مجلس ادارة جمعية صفا - ااستاذ الاقتصادالمشارك لمعهد الاميرابو السعود لدرسات الدبلوماسية</div>
     </div>
     <div className='profileSec'>
     <img src="./images/person.jpg" width="36" height="36" className='profile'/> 
     <h6 className='profileName'>الدكتور رجا المرزوقي</h6> 
     <div className='profileInfo'>نائب مجلس ادارة جمعية صفا - ااستاذ الاقتصادالمشارك لمعهد الاميرابو السعود لدرسات الدبلوماسية</div>
     </div>
    </div>
    
    </Col>
<Col> 

</Col>


  </Row>
</Container> 



   </Fragment>
 
 )
}

export default Header;
