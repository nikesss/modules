import regeneratorRuntime from "regenerator-runtime";
import loadLists from "./utils/getData";
import {displayItems} from "./components/displayItems";
import {filterItems} from "./components/filterItems"

import logo from '../img/logo.svg';
import '../styles/main.scss';
let itemsList = [];
document.addEventListener('DOMContentLoaded', async()=>{
    const searchBar = document.getElementById("search-bar");
    itemsList = await(loadLists(itemsList));
    
    searchBar.addEventListener('keyup',(e)=>{
        
        filterItems(e,itemsList);
        //*
        
    })
})








loadLists(itemsList);

export {displayItems};