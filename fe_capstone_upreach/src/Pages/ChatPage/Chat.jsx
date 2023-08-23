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
    const [messages, setMessages] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [inforUser, setInforUser] = useState();
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();
    const socket = useRef();


    const hnadleSearchUser = (searchQuery) => {
        const filtered = users.filter((user) => user.nickname.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredUser(filtered)
    }

    //Api add message
    const handleSendMessage = async (messageText) => {
        try {
            const dataMessage = {
                _idUser: currentUser,
                _idChat: selectedUser?._id,
                message: messageText,
            }
            const response = await ApiMessage.addMessage(dataMessage);


            if (response.status == true) {
                socket.current.emit("send-msg", {
                    to: currentUser,
                    from: selectedUser._id,
                    messageText,
                });
                const isSenderInfluencer = inforUser.roleId == 2 ? false : true;
                const senderInfo = inforUser.roleId == 2 ? { username: inforUser.fullNameClient } : { nickname: inforUser.nickName };
                const msgs = [...messages];
                msgs.push({ fromSelf: true, message: messageText, isSenderInfluencer: isSenderInfluencer, senderInfo: senderInfo });
                setMessages(msgs);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

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
            const dataUser = await JSON.parse(localStorage.getItem("user-draw-storage")).state;
            const roleId = dataUser.user.roleId;

            if (roleId == "2") {
                //Call api show all influe that the client booked
                const idClient = dataUser._idMonogDB;
                setCurrentUser(idClient)
                const response = await ApiMessage.getAllInflueOfClientBooking(idClient);
                setUsers(response.data.booking)
                setFilteredUser(response.data.booking)
            }
            if (roleId == "3") {
                //Call api show all client that has booked influe
                const idInflue = dataUser._idMonogDB;
                setCurrentUser(idInflue)
                const response = await ApiMessage.getAllClientHaveInflue(idInflue);
                setUsers(response.data)
                setFilteredUser(response.data)
            }

        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }


    // Get all message
    const getAllDataMesager = async () => {
        try {
            const dataInfoOfChat = {
                _idUser: currentUser,
                _idChat: selectedUser?._id,
            }
            const response = await ApiMessage.getAllMessage(dataInfoOfChat);
            setMessages(response);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getAllDataMesager()
    }, [selectedUser])

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        getIdFromLocalStore();
        getAllInluenceOfClient();
        // console.log("a", socket.current)
        // if (socket.current) {
        //     socket.current.on("msg-recieve", (msg) => {
        //         console.log("msg", msg)
        //         // const isSenderInfluencer = inforUser.roleId == 2 ? false : true;
        //         // const senderInfo = inforUser.roleId == 2 ? { username: inforUser.fullNameClient } : { nickname: inforUser.nickname };
        //         // setArrivalMessage({ fromSelf: false, message: messageText, isSenderInfluencer: isSenderInfluencer, senderInfo: senderInfo });
        //     });
        // }
    }, []);

    useEffect(() => {
        // Set the first user as the selected user when the users are fetched
        if (users?.length > 0) {
            setSelectedUser(users[0]);
        }
    }, [users]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    useEffect(() => {
        if (currentUser) {
            socket.current = io(HOST);
            socket.current.emit("add-user", currentUser);
        }
    }, [currentUser]);


    useEffect(() => {
        //     console.log("a", socket.current)
        if (socket.current) {
            socket.current.on("msg-recieve", (data) => {
                console.log("msg", data)
                // const isSenderInfluencer = inforUser.roleId == 2 ? false : true;
                // const senderInfo = inforUser.roleId == 2 ? { username: inforUser.fullNameClient } : { nickname: inforUser.nickname };
                // setArrivalMessage({ fromSelf: false, message: messageText, isSenderInfluencer: isSenderInfluencer, senderInfo: senderInfo });
            });
        }
    }, [])

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage])

    console.log("mes2", arrivalMessage);

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider width={300} theme='light'>
                <UserSearch onSearch={hnadleSearchUser} />
                <UserList users={filteredUser} onSelectUser={handleSelectUser} inforUser={inforUser} />
            </Sider>
            <Content>
                <ChatContent scrollRef={scrollRef} selectedUser={selectedUser} messages={messages} onSendMessage={handleSendMessage} currentUser={currentUser} />
            </Content>
        </Layout>
    )
}

export default Chat
