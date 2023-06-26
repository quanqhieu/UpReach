import { Select } from 'antd'
import React from 'react'

const Selects = ({ options, className, mode, placeholder }) => {
    return (
        <Select
            className={className}
            options={options}
            mode={mode}
            placeholder={placeholder}
        />
    )
}

export default Selects
