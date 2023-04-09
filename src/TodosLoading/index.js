import React from 'react'

import './TodoLoading.css'

export function TodosLoading() {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'>√</span>
            <p className='LoadingTodo-text'>Cargando TODOs...</p>
            <span className='LoadingTodo-deleteIcon'>X</span>
        </div>
    )
}