import { Col, Row, CardTitle, Button, CardSubtitle, Card } from "reactstrap";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import ComponentCard from '../components/ComponentCard';

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {

  const features = [
   
   
   
    {
      title: 'Visual Tracking',
      desc: 'Visual Tracking of Small Unmanned Aerial Vehicles Based on Object Proposal Voting (Applied Sciences 2021)',
      icon: 'bi-shield-check',
    },
    {
      title: 'Optimal Visual Tracking',
      desc: 'Optimal Visual Tracking Using Wasserstein Transport Proposals (ESWA 2022)',
      icon: 'bi-person-check',
    },
  ];

  return (
    <div>
      {/***Sales & Feed***/}
      <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About CEO
          </CardTitle>

          <Row className='d-flex'>
            <Col lg="8">
              <div className="mt-5">
                <ComponentCard
                  title="About CEO"
                  subtitle={
                    <h5>
                      5 premium and highly customizable demo variations included in the package, with React
                      Router 6, Redux Toolkit, Axios nd much more...
                    </h5>
                  }
                >
                  {/* <Image src='https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg' alt='pro version image' className='mt-2'/> */}
                  {/* <img src='https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg' alt='pro version image' className='mt-2' /> */}

                  <img src="img/mainImage.png" alt="pro version" className="w-100"/>

                  
                </ComponentCard>
              </div>
            </Col>
          </Row>


          <ComponentCard title="보유 저널">
            <Row>
              {features.map((feature) => (
                <Col sm="4" className="mb-sm-5 mb-4 pb-3" key={feature.title}>
                  <div>
                    <i className={`bi ${feature.icon} text-primary fs-2`} />

                    <CardTitle tag="h4" className="my-3">
                      {feature.title}
                    </CardTitle>
                    <CardSubtitle className="text-muted col-sm-10 col-12">{feature.desc}</CardSubtitle>
                  </div>
                </Col>
              ))}
            </Row>
          </ComponentCard>
        </Card>
      </Col>
    </Row>
      <Row>
        
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
