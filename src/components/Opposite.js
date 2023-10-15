import {  Button, Col, Row } from "react-bootstrap"
import { useState } from "react"
import InputGroupText from "react-bootstrap/esm/InputGroupText"

function Opposite(){

    const Modify = () => {
        const [election, setElection] = useState(0)
        

        const distribution = () =>{
            return(
            <div style={{ backgroundColor: "grey", color: 'white', display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
            <label style={{fontSize:"20px"}}><b>Navbar</b></label>
            <Col>
            <Button variant='outline'>Home</Button>
            <Button variant='outline'>Features</Button>
            <Button variant='outline'>Pricing</Button>
            <Button variant='outline'>About</Button>
            </Col>
            <Col>
            <InputGroupText>Search</InputGroupText>
            </Col>
            <Col>
            <Button variant="outline-info" onClick={()=>setElection( election + 1 )}>Search</Button>{' '}
            </Col>
            </div>
            )
        }
    
        const reverse = () =>{
            return(
            <div style={{ backgroundColor: "grey", color: 'white', display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
            <Col>
            <Button variant="outline-info" onClick={()=>setElection( election + 1 )}>Search</Button>{' '}
            </Col>
            <Col>
            <InputGroupText>Search</InputGroupText>
            </Col>
            <Col>
            <Button variant='outline'>About</Button>
            <Button variant='outline'>Pricing</Button>
            <Button variant='outline'>Features</Button>
            <Button variant='outline'>Home</Button>
            </Col>
            <label style={{fontSize:"20px"}}><b>Navbar</b></label>
            </div>
            )}


        if( election % 2 == 0 ){
        return distribution()
        }
        return reverse()
    }

    return(
        Modify()
    )
}

export default Opposite