import { useState } from "react";
import { Form, ProgressBar, Row, Button } from "react-bootstrap";

function ProgBar() {
  const [bar, setBar] = useState({ percentage: 0 });

  const handlePercentage = (e) => {
    setBar({ percentage: e.target.value });
  };

  const display = () => {
    return (
      <div style={{ marginLeft: "30px", marginRight: "30px", alignContent: "center" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicProgressBar">
            <Form.Label>
              <h2>Progress Bar</h2>
            </Form.Label>
            <ProgressBar animated now={bar.percentage} />
            <Row>
              <label>Ingrese el Porcentaje</label>
              <Form.Control type="number" min="0" onChange={handlePercentage} value={bar.percentage} />
            </Row>
          </Form.Group>
        </Form>
      </div>
    );
  };

  return display();
}

export default ProgBar;
