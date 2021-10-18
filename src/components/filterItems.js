import { displayItems } from "./displayItems";

const filterItems = (e,itemsList)=>{
    const serachString = e.target.value.toLowerCase();

    const filteredUseres = itemsList.filter((user) =>{
        return (user.name.toLowerCase().includes(serachString)) || 
        (user.age.toLowerCase().includes(serachString))
    })

    displayItems(filteredUseres);
}

export {filterItems};