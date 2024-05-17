import React from 'react'
import './Message.css'

const MessageInput = (props) => {
  return (
    <div>

        <input className='chat-input' type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
      
    </div>
  )
}

export default MessageInput
