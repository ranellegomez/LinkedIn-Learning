import React from 'react';

// functional component
// Adding a prop to expect message as a string and a return type of any (since we are returning HTML). Omitting defaults
// to any.
const Message = (prop: {message: string}) : any => {
    return (
        <p>This is a quick message!</p>
    );
}

export default Message;