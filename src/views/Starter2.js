import { Col, Row, CardTitle, Button, CardSubtitle, Card,  CardText } from "reactstrap";
// import Feeds from "../components/dashboard/Feeds";
// import ProjectTables from "../components/dashboard/ProjectTable";
// import Blog from "../components/dashboard/Blog";
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
                      TIPS, R&D 사업 등 기술 컨설팅, 정부지원사업 사업계획서 컨설팅을 제공합니다.
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
        <h5 className="mb-3 mt-3">News</h5>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">매거진한경</CardTitle>
            <CardText>
            [2021 서울대 캠퍼스타운 스타트업 CEO] AI 기술을 적용한 언어 교육 서비스 ‘핸듀’
            </CardText>
            <div>
              <Button color="light-warning"  onClick={()=> window.open("https://magazine.hankyung.com/job-joy/article/202111096066d")}>Read more</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">스포츠서울</CardTitle>
            <CardText>
            인공지능(AI) 기반 언어 교육, 문해력 및 어휘력 향상 도움
            </CardText>
            <div>
              <Button color="light-success" onClick={()=> window.open("https://www.sportsseoul.com/news/read/1085253?ref=naver")}>Read more</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">전자신문|Etnews</CardTitle>
            <CardText>
            [인공지능 데이터 활용 경진대회]〈2〉국민 체감 혁신 서비스 발굴
            </CardText>
            <div>
              <Button color="light-danger" onClick={()=> window.open("https://www.etnews.com/20220110000041")}>Read more</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">매거진한경</CardTitle>
            <CardText>
            [2022 서울대 캠퍼스타운 스타트업 CEO] 홍진 핸듀 대표, “AI 기술을 적용한 언어 교육 솔루션 ‘킨더룸’ 개발했어요”
            </CardText>
            <div>
              <Button color="light-danger" onClick={()=> window.open("https://magazine.hankyung.com/job-joy/article/202210253262d")}>Read more</Button>
            </div>
          </Card>
        </Col>
       
      </Row>
     
    </div>
  );
};

export default Starter;
