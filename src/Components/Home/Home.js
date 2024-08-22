import React from 'react';
import b1 from '../../images/b1.png';
import './Home.css';
import { Container, Row, Col,Card, Image, Carousel, Button } from 'react-bootstrap';
import img1 from '../../images/c2.png';
import img2 from '../../images/c3.png';
import img3 from '../../images/c4.png';
import img4 from '../../images/c5.png';
import img5 from '../../images/c6.png';
import img6 from '../../images/c1.png';
import img7 from '../../images/img1.jpg';
import img8 from '../../images/book.png';
import img9 from '../../images/book2.png';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
import team4 from '../../images/team4.jpg';
import testi1 from '../../images/testi1.jpg';
import testi2 from '../../images/testi2.jpg';
import testi3 from '../../images/testi3.jpg';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';


const Home = () => {
    const courses = [
        { price: "$100", title: "Learn Code", description: "Ras effic itur metusga via suscipit", img: img1 },
        { price: "Free", title: "Science", description: "Ras effic itur metusga via suscipit", img: img2 },
        { price: "$100", title: "Mathematics", description: "Ras effic itur metusga via suscipit", img: img3 },
        { price: "Free", title: "Ww Recognize", description: "Ras effic itur metusga via suscipit", img: img4 },
        { price: "$100", title: "Online Learning", description: "Ras effic itur metusga via suscipit", img: img5 },
        { price: "$100", title: "Astrology", description: "Ras effic itur metusga via suscipit", img: img6 },
    ];
    const testimonials = [
      {
          imgSrc: testi2,
          name: "Jenna John",
          location: "Washington",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      },
      {
          imgSrc: testi1,
          name: "Theo Hall",
          location: "Washington",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      },
      {
          imgSrc: testi3,
          name: "Linda Carini",
          location: "Washington",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      }
  ];


    console.log({ img1, img2, img3, img4, img5, img6 });
    return (
        <>
        {/*this top section */}
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" style={{margin:'0px 26px 0 15px'}}>
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <h1>This is the new way to Learn Online</h1>
                            <button>Get Started</button>
                        </div>
                    </Col>
                    <Col xs={12} md={4} xl={5}>
                        <img src={b1} alt="Header Img" style={{maxWidth:'100%', height:'auto',verticalAlign:'middle', borderStyle:'none'}} />
                    </Col>
                </Row>
            </Container>
        </section>
        
        {/*this section about books */}
        <section>
        <div className="pb-5">
                <div className="features-bg pb-lg-5 pt-lg-4 py-4">
                    <Container>
                        <div className="title-main text-center mx-auto mb-md-4">
                            <h3 className="title-big">Our Special Courses</h3>
                            <p className="sub-title mt-2">
                                Cum doctus civibus efficiantur in imperdiet deterruisset. Cras efficitur,
                                metus gravida suscipit cursus, dui diam pre lorem id lectus.
                            </p>
                        </div>
                        <Row>
                            {courses.map((course, index) => (
                                <Col lg={4} md={6} key={index} className="mb-4">
                                    <Card className="h-100 d-flex flex-row">
                                        <Card.Img variant="top" src={course.img} alt={course.title} className="img-fluid img-style" />
                                        <Card.Body className="d-flex flex-column justify-content-center">
                                            <h6 style={{color:'#f50057'}}>{course.price}</h6>
                                            <Card.Title className='title-style' >{course.title}</Card.Title>
                                            <Card.Text>{course.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
        {/*this section about courses */}
        <section className="courses" id="courses">
        <div className='pb-5' id="courses">
        <div className="features-bg pb-lg-5 pt-lg-4 py-4">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <img src={img7} className='imgStyle img-fluid' alt="Course Img"/>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className='fs'>
                            <h2 className='title'>About Us</h2>
                            <h3 className='subTitle'>We provide the best Online Courses</h3>
                            <p className='pg'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet. Lorem ipsum viverra feugiat.</p>
                            <Row className="featureRow">
                                <Col>
                                <div className="feature">
                                    <img src={img8} alt="Enhance Your Skills" className="featureIcon" />
                                    <span>ENHANCE YOUR SKILLS</span>
                                </div>
                                </Col>
                                <Col>
                                <div className="feature">
                                    <img src={img9} alt="Start Online Learning" className="featureIcon" />
                                    <span>START ONLINE LEARNING</span>
                                </div>
                                </Col>
                            </Row>
                            <button className='btng'>Read More</button> 
                        </div>
                    </Col>
                </Row>
            </Container>  
          </div>
        </div>
        </section>
        {/*this section Expert Teacher */}
        <section>
            <div className="pb-5 align-items-center">
                <div className="features-bg pb-lg-5 pt-lg-4 py-4">
                    <Container>
                        <div className="title-main text-center mx-auto mb-md-4">
                            <h3 className="title-big">Our Expert Teachers</h3>
                            <p className="sub-title mt-2">
                                Cum doctus civibus efficiantur in imperdiet deterruisset. Cras efficitur,
                                metus gravida suscipit cursus, dui diam pre lorem id lectus.
                            </p>
                        </div>
                        <Row>
                            <Col md={6} sm={6} xl={3} className="text-center mb-4">
                                <img src={team1} alt="Chris Tina" className="img-fluid rounded Regular shadow teacherStyle" />
                                <h5 className="mt-3 nameStyle">Chris Tina</h5>
                                <p className="text-muted">Web Designer</p>
                            </Col>
                            <Col md={6} sm={6} xl={3} className="text-center mb-4">
                                <img src={team2} alt="Diego Mota" className="img-fluid rounded Regular shadow teacherStyle" />
                                <h5 className="mt-3 nameStyle">Diego Mota</h5>
                                <p className="text-muted">CSS, HTML</p>
                            </Col>
                            <Col md={6} sm={6} xl={3} className="text-center mb-4">
                                <img src={team3} alt="Anton Bone" className="img-fluid rounded Regular shadow teacherStyle" />
                                <h5 className="mt-3 nameStyle">Anton Bone</h5>
                                <p className="text-muted">UI/UX Designer</p>
                            </Col>
                            <Col md={6} sm={6} xl={3} className="text-center mb-4">
                                <img src={team4} alt="Neoye Achi" className="img-fluid rounded Regular shadow teacherStyle" />
                                <h5 className="mt-3 nameStyle">Neoye Achi</h5>
                                <p className="text-muted">Web Developer</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>

        {/*this section Testimonial */}
        <section className="testimonial bg-light" id="testimonial">
        <Container className="testimonial-section text-center py-5 ">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="section-title">WHAT OUR PEOPLE SAY</h2>
                    <Carousel indicators={false} controls={true} className="testimonial-carousel">
                        <Carousel.Item>
                            <div className="testimonial-content">
                                <Image 
                                    src={testi2}
                                    roundedCircle 
                                    className="testimonial-image mb-3"
                                />
                                <h3 className="testimonial-name">THEO HALL</h3>
                                <p className="testimonial-location text-danger">Washington</p>
                                <p className="testimonial-text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-content">
                                <Image 
                                    src={testi1}
                                    roundedCircle 
                                    className="testimonial-image mb-3"
                                />
                                <h3 className="testimonial-name">JANE DOE</h3>
                                <p className="testimonial-location text-danger">New York</p>
                                <p className="testimonial-text">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-content">
                                <Image 
                                    src={testi3}
                                    roundedCircle 
                                    className="testimonial-image mb-3"
                                />
                                <h3 className="testimonial-name">JOHN SMITH</h3>
                                <p className="testimonial-location text-danger">California</p>
                                <p className="testimonial-text">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        </section>

        {/*End this section Testimonial */}
        <section>
            <div className="pb-5 align-items-center">
                <div className="features-bg pb-lg-5 pt-lg-4 py-4">
                    <Container>
                        <div className="title-main text-center mx-auto mb-md-4">
                            <h3 className="title-big">Our Latest Articles</h3>
                            <p className="sub-title mt-2">
                                Cum doctus civibus efficiantur in imperdiet deterruisset. Cras efficitur, metus gravida suscipit cursus, dui diam pre lorem id lectus.
                            </p>
                        </div>
                        <Row className="mt-5 rounded rowStyle">
                            <Col xs={12} sm={6} md={6} xl={4} className="cardStyle">
                                <Card style={{ width: '90%', height: '100%' }}>
                                    <Card.Img variant="top" src={blog1} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Text className='cardText'>
                                        October 3, 2019
                                        </Card.Text>
                                        <Card.Title className="flex-grow-1 cardTitle">Mostly interesting Ux/UI Designing</Card.Title>
                                        <Card.Text>
                                            Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} xl={4} className="cardStyle">
                                <Card style={{ width: '100%', height: '100%' }}>
                                    <Card.Img variant="top" src={blog2} />
                                    <Card.Body className="d-flex flex-column">
                                    <Card.Text className='cardText'>
                                        October 3, 2019
                                        </Card.Text>
                                        <Card.Title className="flex-grow-1 cardTitle">Growth Mindsets for Online Learners</Card.Title>
                                        <Card.Text>
                                            Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} xl={4} className="cardStyle">
                                <Card style={{ width: '100%', height: '100%' }}>
                                    <Card.Img variant="top" src={blog3} />
                                    <Card.Body className="d-flex flex-column">
                                    <Card.Text className='cardText'>
                                        October 3, 2019
                                        </Card.Text>
                                        <Card.Title className="flex-grow-1 cardTitle">Super Fast & user friendly interface</Card.Title>
                                        <Card.Text>
                                            Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>

     {/* this section is footer */}
    </>
    );
};

export default Home;
