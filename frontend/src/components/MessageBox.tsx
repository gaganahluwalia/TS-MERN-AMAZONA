import React from 'react'
import Alert from 'react-bootstrap/Alert'

interface MessageBoxProps {
  children: React.ReactNode
  variant?: string
}

const MessageBox: React.FC<MessageBoxProps> = ({
  children,
  variant = 'info',
}) => {
  return <Alert variant={variant}>{children}</Alert>
}

export default MessageBox
