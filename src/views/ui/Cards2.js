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
import bg2018 from "../../assets/images/bg/bg2018.png";
import bg2019 from "../../assets/images/bg/bg2019.png";
import bg2020 from "../../assets/images/bg/bg2020.png";
import bg2021 from "../../assets/images/bg/bg2021.png";
import bg2022 from "../../assets/images/bg/bg2022.png";
import bg2023 from "../../assets/images/bg/bg2023.png";









const Cards = () => {
  return (
    <div>
    
     
     
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Group*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Achievement</h5>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={bg2018} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">2018</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {/* Card subtitle */}
                  <p></p>
              <p></p>
                </CardSubtitle>
                <CardText>
                - 3R 물체 추적 서비스 개발
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2019} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">2019</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                <p>- 3R 물체 추적 서비스 개발(2차)</p>
              <p>- 무인편의점 Multiple-Object-Tracking 기술 개발</p>
              <p>- Full parallax 깊이 추정 기법 연구</p>
              <p>- 온도특성기반 실시간 객체검출 임베디드 개발</p>
              <p>- 인공지능 도면 자동인식 솔루션 개발</p>
              
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2020} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">2020</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                <p>- 3R 물체 추적 서비스 개발(2차)</p>
              <p>- 무인편의점 Multiple-Object-Tracking 기술 개발</p>
              <p>- Full parallax 깊이 추정 기법 연구</p>
             
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <Row>
        {/* <h5 className="mb-3 mt-3">Card Group</h5> */}
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={bg2021} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">2021</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                <p>- 기상변화에 강한 딥러닝 시스템 개발</p>
              <p>- GAN 기반 드론용 데이터확장 기술 개발</p>  
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2022} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">2022</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                <p>- 교원 유아 손 글씨 자동 교정 서비스 개발</p>
              <p>- Pklns 전자칠판 내 판서 소프트웨어 개발</p>
              <p>- 메타커뮤니케이션센터 AI 스피치 어플리케이션 개발</p>
              
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2023} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">2023</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                <p>- 중소벤처기업부 R&D 디딤돌 선정</p>
              <p>- 대교 오픈이노베이션 선정</p>
             
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
