import { useState } from "react";

const Message = () => {
//message(like a variable) is what holds the current state
//setMessage is a function that changes the state
//you can name anything instead of message and setMessage but function must have set before the name
//useState("") defines the initial value as string to useState hook. You can use string, number, boolean, null etc
    const [message, setMessage] = useState("");

    return(
      <div>
        <input type="text"
        value={message}
        placeholder="Enter a Message"
        //onChange is a react event listener which listens for a change
        //need to put call back function for onChange
        //events is the change that made in the input
        //target is pointing to that specific change
        //value is the value in the input box
        onChange={ (event) => setMessage(event.target.value) } />
        {/* displaying the changes in the browser */}
        <p>{ message }</p>  
      </div>
    )
}

export default Message