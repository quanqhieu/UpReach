import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useEffect, useRef, useState } from 'react'
import UserSearch from './ComponentChat/UserSearch'
import UserList from './ComponentChat/UserList'
import { Content } from 'antd/es/layout/layout'
import "../ChatPage/Chat.css"
import ApiMessage from '../../Api/ApiMessage'
import ChatContent from './ComponentChat/ChatContent'
import { io } from 'socket.io-client'
import { HOST } from './Contant'


const Chat = () => {
    const [users, setUsers] = useState();
    const [filteredUser, setFilteredUser] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [inforUser, setInforUser] = useState();
    const socket = useRef();


    const hnadleSearchUser = (searchQuery) => {
        const filtered = users.filter((user) => user.nickname.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredUser(filtered)
    }

    const getIdFromLocalStore = async () => {
        const idClient = await JSON.parse(localStorage.getItem("user-draw-storage")).state._idMonogDB;
        const infoUser = await JSON.parse(localStorage.getItem("user-draw-storage")).state.user;
        setCurrentUser(idClient)
        setInforUser(infoUser)
    }

    //get all influence that the client has booked
    const getAllInluenceOfClient = async () => {
        try {
            //get Infor from localStore
            const roleId = inforUser.roleId;

            if (roleId == "2") {
                //Call api show all influe that the client booked
                const response = await ApiMessage.getAllInflueOfClientBooking(currentUser);
                setUsers(response.data.booking)
                setFilteredUser(response.data.booking)
            }
            if (roleId == "3") {
                //Call api show all client that has booked influe
                const response = await ApiMessage.getAllClientHaveInflue(currentUser);
                setUsers(response.data)
                setFilteredUser(response.data)
            }

        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        getIdFromLocalStore();
    }, []);

    useEffect(() => {
        getAllInluenceOfClient();
    }, [currentUser]);

    useEffect(() => {
        // Set the first user as the selected user when the users are fetched
        if (users?.length > 0) {
            setSelectedUser(users[0]);
        }
    }, [users]);

    useEffect(() => {
        if (currentUser) {
            socket.current = io(HOST);
            socket.current.emit("add-user", currentUser);
        }
    }, [currentUser]);

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider width={300} theme='light'>
                <UserSearch onSearch={hnadleSearchUser} />
                <UserList users={filteredUser} onSelectUser={handleSelectUser} inforUser={inforUser} />
            </Sider>
            <Content>
                <ChatContent selectedUser={selectedUser} currentUser={currentUser} inforUser={inforUser} socket={socket} />
            </Content>
        </Layout>
    )
}

export default Chat
