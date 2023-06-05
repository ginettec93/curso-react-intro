import React, { useState } from 'react';

function TaskSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    console.log('Users are looking for ' + searchValue);
    return(
        <input placeholder="Search your task" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value)}}/>
    );
}

export {TaskSearch} ;