import {displayItems} from "../components/displayItems"

const loadLists = async(itemsList)=>{
    try{
        const res = await fetch('http://localhost:3000/users')
        itemsList = await res.json();

        displayItems(itemsList);
        return itemsList;
    }catch(err){
        console.log(err);

    }
}

export default loadLists;