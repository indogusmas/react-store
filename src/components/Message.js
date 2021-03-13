import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant,chidren}) => {
    return (
        <Alert variant={variant}>{chidren}</Alert>
    )
}
Message.defaultProps = {
    variant: 'Info'
}

export default Message
