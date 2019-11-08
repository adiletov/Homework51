import React, {Fragment} from 'react';
import Navigation from "./navbar";
import Slide from "./Carousell";
import {Col, Container, Row} from "reactstrap";
import Example from "./movies";
import pic from "./img";
import "./app.css";
import Footer from "./Footer";
import Leftblock from "./left";
function App() {
  return (
      <Fragment>
          <Navigation></Navigation>
          <Leftblock></Leftblock>
          <Container>
              <Slide/>
              <Row>
                  <Col><Example name="'Ворошиловский стрелок'" year=' 1998' text="«Ворошиловский стрелок» — художественный фильм режиссёра Станислава Говорухина, снятый летом 1998 года по повести российского писателя Виктора Пронина'" img={pic.img1}/></Col>
                  <Col><Example name="Битва за Севастополь" year="2015" text="«Би́тва за Севасто́поль» — российский и украинский полнометражный военный драматический историко-биографический художественный фильм режиссёра Сергея Мокрицкого, снятый в 2015 году." img={pic.img2}/></Col>
                  <Col><Example name="Т34" year="2019" text='«Т-34» — российский военно-приключенческий боевик режиссёра Алексея Сидорова.' img={pic.img3}/></Col>
              </Row>
          </Container>
          <Footer></Footer>
      </Fragment>





  );
}

export default App;
