const toogles = document.querySelectorAll(".toogle")
const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")


toogles.forEach(toogle =>{
    toogle.addEventListener("change", (e)=>{
        doTheTrick(e.target)
    })
})

function doTheTrick(target){
   if( good.checked && cheap.checked && fast.checked){
    if(cheap === target){
        console.log(target, "Cheap")
        good.checked = false
    }
    if(fast === target){
        console.log(target, "fast")
        cheap.checked = false
    }
    if(good === target){
        console.log(target, "good")
        fast.checked = false
    }
   }
}