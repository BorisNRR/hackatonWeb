import React, { useState, useRef, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"

function Timer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1)
        } else {
          setMinutes(minutes + 1)
          setSeconds(0)
        }
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }

    return () => {
      clearInterval(timerRef.current)
    }
  }, [isActive, minutes, seconds])

  const startTimer = () => {
    setIsActive(true)
  }

  const stopTimer = () => {
    setIsActive(false)
  }

  const resetTimer = () => {
    setIsActive(false)
    setMinutes(0)
    setSeconds(0)
  }

  return (
    <Container>
      <h1>Timer</h1>
      <Row><Col>
          <h2>{minutes} mins {seconds} secs</h2>  
      </Col></Row>
      <Row><Col>
        <Button variant="success" onClick={startTimer} disabled={isActive}>
          Start
        </Button>
        <Button variant="danger" onClick={stopTimer} disabled={!isActive}>
          Stop
        </Button>
        <Button variant="warning" onClick={resetTimer}>
          Reset
        </Button>  
      </Col></Row>
    </Container>
  );
}

export default Timer
