let countEl = document.getElementById("increase-btn")
let textEl = document.getElementById("text-el")
let saveEl = document.getElementById("save-btn")
let enteredEl = document.getElementById("entered-el")
let previousEl = document.getElementById("save-el-span")

let count = 0
let savedCount = JSON.parse(localStorage.getItem('countSaved'))
previousEl.textContent = savedCount


function increament(){
    count += 1
    textEl.textContent = count
}

function save(){
    console.log(count)
  let counstr = "-" + count
  savedCount = savedCount + counstr
  localStorage.setItem('countSaved',JSON.stringify(savedCount))
  previousEl.textContent = savedCount
  textEl.textContent = 0
  count=0 
}

function clearEntries(){
  savedCount = ""
  localStorage.setItem('countSaved',JSON.stringify(savedCount))
  previousEl.textContent = savedCount
}
