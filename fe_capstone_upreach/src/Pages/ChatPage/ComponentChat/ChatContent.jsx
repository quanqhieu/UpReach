import React from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const ChatContent = ({ selectedUser, messages, onSendMessage, scrollRef }) => {

    return (
        <div className="chat-content">
            <div className="chat-header">
                {selectedUser ? selectedUser.nickname : ''}
            </div>
            <div className="chat-body">
                <MessageList messages={messages} scrollRef={scrollRef} />
            </div>
            <div className="chat-input">
                <MessageInput onSendMessage={onSendMessage} />
            </div>
        </div>
    )
}

export default ChatContent
