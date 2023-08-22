import React, { useState } from 'react'

const MessageList = ({ messages, scrollRef }) => {
    return (
        <div className="message-list">
            {messages.map((message, index) => {
                const messageStyle = message.fromSelf ? 'message-right' : 'message-left';

                return (
                    <div ref={scrollRef} key={index} className={`message-item ${messageStyle}`}>
                        <div className="message-avatar">
                            {/* <img src={avatarSrc} alt={`${message.sender.username}'s Avatar`} /> */}
                            <img src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png" />
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
