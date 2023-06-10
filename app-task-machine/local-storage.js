import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect( () => {
      setTimeout( () => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    });
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    
    return {
      item, 
      saveItem, 
      loading, 
      error,
    };
  };

  export {useLocalStorage};

  // localStorage.removeItem('Tasks_V1');
// const defaultTask = [
  //{text:'Study Biology', completed: false},
 // {text:'Study Geometry', completed: true},
  //{text:'Study Anatomy', completed: false},
//  {text:'Study History', completed: false},
 // {text:'Study Psychology', completed: true},
//]; 
// localStorage.setItem('Tasks_V1', JSON.stringify(defaultTask));