import React from 'react'

function MessageBtn(props) {
  return (
    <div>
      <button type="button" onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default MessageBtn
