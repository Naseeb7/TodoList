// CWH method
// submit.addEventListener("click", (e) => {
//     e.preventDefault()
//     let titledo = title.value
//     let listdo = list.value
//     localStorage.setItem("todo", JSON.stringify([titledo, listdo]))
//     console.log(e)
//     todo.innerHTML = `
//     <h4>${titledo}</h4>
//     <p>${listdo}</p>
//     `
//     title.value=''
//     list.value=''

// })
// deletebtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     localStorage.removeItem("todo")
//     todo.innerHTML = ''
// })
let newelement = () => {
    li = document.createElement("li")
    let titledo = titlebox.value
    let listdo = listbox.value
    // t1 = document.createTextNode(titledo)
    // t2 = document.createTextNode(listdo)
    // li.appendChild(t1)
    // li.appendChild(t2)
    if (titledo === '' || listdo === '') {
        alert("Write Something to do!")
    }
    else {
        // document.getElementById("ul").appendChild(li)
    localStorage.setItem(titledo, listdo)
        alert("To-do created! (click showall to see)")
    }
}
submitbtn.addEventListener("click", (e) => {
    e.preventDefault()
    newelement()
    titlebox.value = ""
    listbox.value = ""
})
searchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    const all = () => {
        let searchitems = document.getElementById("searchitem").value
        let a = localStorage.getItem(searchitems)
        let allkeys = []
        for (i = 0; i < localStorage.length; i++) {
            allkeys[i] = localStorage.key(i)
        }
        for (j = 0; j < allkeys.length; j++) {
            if (searchitems == allkeys[j]) {
                document.getElementById("searchresult").innerHTML = a
                break;
            }
            else {
                alert("Nothing saved to do")
                //document.getElementById("searchresult").innerHTML = ("Nothing saved to do")
                break;
            }
        }
    }
    all()
})
showallbtn.addEventListener("click", (e) => {
    e.preventDefault()
    const showallbutton = () => {
        let keyvalue = []
        for (i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let value = localStorage.getItem(key)
            keyvalue[i] = ` Title :: ${key} , task :: ${value}`
        }
        for (k = 0; k < keyvalue.length; k++) {
            let lisearch = document.createElement("li")
            let spansearch = document.createElement("span")
            lisearch.className = "listitems"
            let br = document.createElement("br")
            let xsearch = document.createElement("span")
            let xtext = document.createTextNode("x")
            xsearch.className = "close"
            xsearch.appendChild(xtext)
            spansearch.className = "showall"
            spansearch = keyvalue[k]
            allsearch = document.createTextNode(spansearch)
            allsearch.className="items"
            document.getElementById("allsearchlist").appendChild(lisearch)
            lisearch.appendChild(allsearch)
            lisearch.appendChild(xsearch)
            lisearch.appendChild(br)

        }
        let nodelist = document.querySelectorAll(".close")
        let close = Array.from(nodelist)
        // console.log(close)
        for (i = 0; i < close.length; i++) {
            let arr = close[i].parentElement
            close[i].onclick = () => {
                arr.style.display = "none"
            }
        }
    }
    if(localStorage.length!=0){
    showallbutton()
    }
    else{
        alert("Nothing saved!")
    }
    document.getElementById("showallbtn").disabled=true
})
reset.addEventListener('click', (e) => {
    localStorage.clear()
    searchresult.innerHTML = ''
})
let listed = document.querySelectorAll("ul")
listed.forEach(listit=>{
    listit.addEventListener("click",(e)=>{
            e.target.classList.toggle("checked")
})
})
