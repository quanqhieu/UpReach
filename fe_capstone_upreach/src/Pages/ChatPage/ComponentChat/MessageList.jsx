import React, { useState } from 'react'

const MessageList = ({ messages, scrollRef }) => {
    console.log("mss", messages)
    return (
        <div className="message-list">
            {messages.map((message, index) => {
                const messageStyle = message.fromSelf ? 'message-right' : 'message-left';

                return (
                    <div ref={scrollRef} key={index} className={`message-item ${messageStyle}`}>
                        <div className="message-avatar">
                            <img src={message.senderInfo?.avatarImage} />
                        </div>
                        <div className="message-content">
                            {message.isSenderInfluencer ?
                                <div className="message-username">{message.senderInfo.nickname}</div>
                                :
                                <div className="message-username">{message.senderInfo.username}</div>
                            }
                            <div className="message-text">{message.message}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default MessageList
