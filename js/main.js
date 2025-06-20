let elUsersList = document.querySelector(".users-list")
let elPsotList = document.querySelector(".posts-list")
let elCommentList = document.querySelector(".comments-list")

// loading fn 
function Loading(list){
    list.innerHTML = `
        <li>
            <img class="absolute scale-[1.5] top-0 bottom-0 left-0 right-0 m-auto" src="./images/loading-img.png" width="100" height="100"/>
        </li>
    `
}
// loading fn 

// users part start 
function getUsers(url){
    Loading(elUsersList)
    fetch(url).then(res => res.json()).then(data => {
        renderUsers(data, elUsersList )
    })
}
function renderUsers(usersList, saveList){
    saveList.innerHTML = null
    usersList.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "flex justify-between cursor-pointer items-center bg-slate-100 p-1 rounded-md"
        elItem.innerHTML = `
            <div class="flex items-center gap-[10px]">
                <img class="w-[65px] h-[65px] rounded-full" src="./images/iphone.png" alt="user img" width="65"
                    height="65">
                <div>
                    <h2 class="font-semibold text-[18px]">${item.name} (${item.username})</h2>
                    <p class="text-[16px]">${item.email}</p>
                </div>
            </div>
            <button class="cursor-pointer">
                <img src="./images/dots.svg" alt="dots img" width="25" height="25">
            </button>
        `
        saveList.appendChild(elItem)

        elItem.addEventListener("click", () => {
            getPostById(item.id)
            Loading(elPsotList)
        })
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")
// users part and 


// post part start 
function getPostById(id){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {
        renderPosts(data, elPsotList)
    })
}

function renderPosts(postsList, saveList){
    saveList.innerHTML = null
    postsList.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "bg-[#3770a7] rounded-t-[15px] rounded-br-[15px] text-[18px] text-white p-3"   
        elItem.innerHTML = `
            <div class="flex justify-between items-center">
                <strong>#${item.userId}</strong>
                <span>ID:${item.id}</span>
            </div>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        `   
        saveList.appendChild(elItem)
    })
}
// post part and 