import React from 'react'
import { Avatar, List } from 'antd'

const UserList = ({ users, onSelectUser, inforUser }) => {
    console.log("inforUser", inforUser)
    return (
        <List
            dataSource={users}
            renderItem={(user) => (
                <List.Item onClick={() => onSelectUser(user)} >
                    <List.Item.Meta
                        avatar={<Avatar src={user?.avatarImage} />}
                        title={inforUser.roleId == "2" ? user.nickname : user.username}
                    />
                </List.Item>
            )}
        />
    )
}

export default UserList
