import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000");

const App = () => {

  const [messages, setMessages] = useState([]);
  const textareaRef = useRef();

  useEffect(() => {
    socket.on('msg-recived', (data) => {
      console.log(data);
      setMessages((prevState) => [...prevState, data.message]);
    })
  }, []);

  const sendMessageHandler = () => {
    const msg = textareaRef.current.value;
    if (!msg) {
      return;
    }
    socket.emit('send-msg', { msg });
  }

  return (
    <div>
      <h2>Enter your message</h2>
      <textarea ref={textareaRef} placeholder='Enter your message' rows={5} cols={30}></textarea>
      <br />
      <button onClick={sendMessageHandler}>Send</button>
      <ul>
        {
          messages.map((m, idx) => {
            return <li key={ idx }>{ m }</li>
          })
        }
      </ul>
    </div>
  )
}

export default App