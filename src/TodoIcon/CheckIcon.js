import React from 'react'

import { TodoIcon } from '.'

export function CheckIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed ? '#4caf50' : 'black'}
            onClick={onComplete}
        />
    )
}
