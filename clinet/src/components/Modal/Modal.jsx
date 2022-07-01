import React from 'react'
import Container from '../Container/Container'
import Row from '../Row/Row'

const Modal = ({children}) => {
  return (
    <Container>
        <Row>
            <div className="modal">
                {children}
            </div>
        </Row>
    </Container>
  )
}

export default Modal