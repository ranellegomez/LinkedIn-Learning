import React from 'react';

// functional (or stateless) component
// Adding a prop to expect message as a string and a return type of any (since we are returning HTML). Omitting defaults
// to any.
const Message = (prop: {message: string}) : any => {
    return (
        <p>{prop.message}</p>
    );
}

export default Message;