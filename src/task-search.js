function TaskSearch() {
    return(
        <input placeholder="Search your task" onChange={(event) => {
            console.log(event)
        console.log(event.target)
    console.log(event.target.value)}}/>
    );
}

export {TaskSearch} ;