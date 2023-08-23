import { Input } from 'antd'
import React from 'react'

const UserSearch = ({ onSearch }) => {

    const handleSearch = (value) => {
        onSearch(value)
    }

    return (
        <Input.Search
            placeholder='Search influe booked'
            onSearch={handleSearch}
        />
    )
}

export default UserSearch
