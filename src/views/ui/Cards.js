import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";

import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import news1 from "../../assets/images/bg/news1.jpg";
import news2 from "../../assets/images/bg/news2.jpg";



const BlogData = [
  {
    image: news1,
    title: "매거진한경",
    subtitle: "이진호 기자",
    description:
      "[2022 서울대 캠퍼스타운 스타트업 CEO] 홍진 핸듀 대표, “AI 기술을 적용한 언어 교육 솔루션 ‘킨더룸’ 개발했어요”",
    btnbg: "primary",
  },
  {
    image: news2,
    title: "매거진한경",
    subtitle: "이진호 기자",
    description:
      "[2021 서울대 캠퍼스타운 스타트업 CEO] AI 기술을 적용한 언어 교육 서비스 ‘핸듀’",
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



const Cards = () => {

  

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Basic Card</h5>
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
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">News</h5>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">매거진한경</CardTitle>
            <CardText>
            [2021 서울대 캠퍼스타운 스타트업 CEO] AI 기술을 적용한 언어 교육 서비스 ‘핸듀’
            </CardText>
            <div>
              <Button color="light-warning"  onClick={()=> window.open("https://magazine.hankyung.com/job-joy/article/202111096066d")}>Go somewhere</Button>
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
              <Button color="light-success" onClick={()=> window.open("https://www.sportsseoul.com/news/read/1085253?ref=naver")}>Go somewhere</Button>
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
              <Button color="light-danger" onClick={()=> window.open("https://www.etnews.com/20220110000041")}>Go somewhere</Button>
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
              <Button color="light-danger" onClick={()=> window.open("https://magazine.hankyung.com/job-joy/article/202210253262d")}>Go somewhere</Button>
            </div>
          </Card>
        </Col>
        {/* <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-warning">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-end">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-success">Go somewhere</Button>
            </div>
          </Card>
        </Col> */}
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Colored Card</h5>
        <Col md="6" lg="3">
          <Card body color="primary" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="info" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="success" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="danger" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-warning">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-info">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-success">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-danger">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Group*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Card Group</h5>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={bg1} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg3} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
