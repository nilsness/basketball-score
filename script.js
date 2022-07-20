let count = 0
let countEL = document.getElementById("count-el")
let entries = "Previous entries: "
let entriesEl = document.getElementById("pre-entries")


function increment() {
    count ++
    countEL.innerText = count
    console.log("Count = " + count)
} 

function save() {
    console.log("Save, prev entries = " + entries)
    entries += count + "      -      "
    entriesEl.textContent = entries
    count = 0
    countEL.innerText = count
    
}
