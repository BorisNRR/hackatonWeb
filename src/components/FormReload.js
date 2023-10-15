import { useState } from "react"
import { Form, Button, Row } from "react-bootstrap"

function FormReload() {
  const [formValues, setFormValues] = useState({ correo: "", nombre: "", edad: 0 })
  const [submittedValues, setSubmittedValues] = useState(null)

  const handleNameChange = (e) => {
    setFormValues({ ...formValues, nombre: e.target.value })
  };

  const handleMailChange = (e) => {
    setFormValues({ ...formValues, correo: e.target.value })
  };

  const handleAgeChange = (e) => {
    setFormValues({ ...formValues, edad: e.target.value })
  };

  const clickSubmit = () => {
    setSubmittedValues({ ...formValues })
  };

  return (
    <div style={{ marginRight: "30px", marginLeft: "30px" }}>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" onChange={handleMailChange} value={formValues.correo} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="Nombre" onChange={handleNameChange} value={formValues.nombre} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" min="0" placeholder="Edad" onChange={handleAgeChange} value={formValues.edad} />
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>

      <h2>Petición enviada a la Base de Datos con la siguiente información</h2>
      <Row>
        <text>Correo: {submittedValues ? submittedValues.correo : ""}</text>
      </Row>
      <Row>
        <text>Nombre: {submittedValues ? submittedValues.nombre : ""}</text>
      </Row>
      <Row>
        <text>Edad: {submittedValues ? submittedValues.edad : ""}</text>
      </Row>
    </div>
  );
}

export default FormReload;

