import React, { useState } from 'react';
import { taskContext } from '../tasks-context/context';

function TaskSearch() {
    const {
        searchValue, 
        setSearchValue,
    } = React.useContext(taskContext)
    return(
        <input placeholder="Search your task" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value)}}/>
    );
}

export {TaskSearch} ;