import React, { useState } from 'react'
import { SmileFilled, SendOutlined } from "@ant-design/icons"
import Picker from 'emoji-picker-react';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendClick = (e) => {
        e.preventDefault()
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleEmojiClick = (emoji) => {
        let msg = message;
        msg += emoji.emoji;
        setMessage(msg);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    return (
        <form onSubmit={handleSendClick}>
            <div className="message-input">
                <div className="button-container">
                    <div className="emoji">
                        <SmileFilled onClick={toggleEmojiPicker} />
                        {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                    </div>
                </div>
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                />
                <button type="submit">
                    <SendOutlined />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
