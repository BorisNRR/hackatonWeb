import React, { useState, useEffect } from 'react'
import {} from 'react-bootstrap'

function Prueba() {
  const [password, setPassword]                         = useState('Por favor añade parámetros')
  const [includeUppercase, setIncludeUppercase]         = useState(false)
  const [includeLowercase, setIncludeLowercase]         = useState(false)
  const [includeNumbers, setIncludeNumbers]             = useState(false)
  const [includeSpecialChars, setIncludeSpecialChars]   = useState(false)
  const [passwordLength, setPasswordLength]             = useState(8)

  useEffect(() => {
    generatePassword()  }, [includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, passwordLength])

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars    = '0123456789'
    const specialChars   = '!@#$%^&*()_+[]{}|;:,.<>?¬~'

    let charset = ''
    if (includeUppercase)    charset += uppercaseChars
    if (includeLowercase)    charset += lowercaseChars
    if (includeNumbers)      charset += numberChars
    if (includeSpecialChars) charset += specialChars

    if (charset === '') {
      setPassword('Por favor añade parámetros')
      return null
    }

    let newPassword = ''
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      newPassword += charset[randomIndex]
    }

    setPassword(newPassword)
  }

  const copyToClipboard = () => {
    if (password !== 'Por favor añade parámetros') {
      navigator.clipboard.writeText(password)
    }
  }

  return (
    <div className="container mt-5">
      <h2>Generador de Contraseñas</h2>
      <p>Crea contraseñas fuertes y seguras para mantener tus cuentas seguras</p>
      <div className="form-group">
        <input type="text" className="form-control" value={password} readOnly />
      </div>
      <button className="btn btn-success mr-2" onClick={generatePassword}>Refrescar</button>
      <button className="btn btn-info" onClick={copyToClipboard} disabled={password === 'Por favor añade parámetros'}>
        Copiar al Portapapeles
      </button>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="includeUppercase"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        <label className="form-check-label" htmlFor="includeUppercase">
          Incluir Mayúsculas
        </label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="includeLowercase"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        <label className="form-check-label" htmlFor="includeLowercase">
          Incluir Minúsculas
        </label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="includeNumbers"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <label className="form-check-label" htmlFor="includeNumbers">
          Incluir Números
        </label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="includeSpecialChars"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
        <label className="form-check-label" htmlFor="includeSpecialChars">
          Incluir Caracteres Especiales
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="passwordLength">Longitud de la Contraseña:</label>
        <input
          type="number"
          className="form-control"
          id="passwordLength"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))
        }
        />
      </div>
    </div>
  )
}

export default Prueba
