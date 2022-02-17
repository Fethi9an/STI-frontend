function clickMe() {
    var createElement = document.createElement("h1")
    createElement.innerHTML="Hello world";
    document.body.appendChild(createElement)
}
function age (){
    var xhr = new XMLHttpRequest()
    xhr.open("GET","data.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}
function createCell(content){
    var Acell = document.createElement("td")
    Acell.innerHTML = content
    return Acell;
}
function createRow(result){
 var aRow = document.createElement("tr")
 aRow.appendChild(createCell(result.name))
 aRow.appendChild(createCell(result.points))
 aRow.appendChild(createCell(result.goalDifference))   
 return aRow;
}

function createTable(data){
    var appElement = document.getElementById("app")
    var header =document.createElement("h1")
    header.innerHTML = data.title
    appElement.appendChild(header)
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    for(resultRow of data.table){
        aTable.appendChild(createRow(resultRow))
    }
}
