import React, { useState } from 'react';

function TaskSearch({searchValue, setSearchValue}) {
    
    return(
        <input placeholder="Search your task" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value)}}/>
    );
}

export {TaskSearch} ;