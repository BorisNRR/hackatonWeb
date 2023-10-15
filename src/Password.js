import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";

function Password() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?";

    let availableCharset = charset;
    if (includeUppercase) availableCharset += uppercaseCharset;
    if (includeNumbers) availableCharset += numbersCharset;
    if (includeSpecialChars) availableCharset += specialChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableCharset.length);
      newPassword += availableCharset[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <Container>
      <h2>Generador de Contraseñas</h2>
      <p>Crea contraseñas fuertes y seguras para mantener tu cuenta segura en línea</p>
      <Row>
        <Col>
          <InputGroup>
            <Form.Control type="text" value={password} readOnly />
            <InputGroup.Append>
              <Button variant="primary" onClick={generatePassword}>
                Generar
              </Button>
              <Button variant="success" onClick={copyToClipboard}>
                Copiar
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Tamaño de la contraseña: {passwordLength}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check
            type="checkbox"
            label="Mayúsculas"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Minúsculas"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Números"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Caracteres especiales"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Password