import './App.css';
import { Container, Row, Col,  } from 'reactstrap';
import style from '../src/shared/StudentList.module.css';
import Logic from './components/Logic';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div className={style.container}><Logic /></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
