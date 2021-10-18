const displayItems = (items) =>{
    const usersList = document.getElementById("users-list");
    const resultString = items.map(item =>{
        return `
            <li class="user">
                <h3>${item.name}</h3>
                <p>${item.age}</p>
            </li>
        `;
    }).join('');
    usersList.innerHTML = resultString;
}

export {displayItems};