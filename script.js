let inputfield = document.getElementById("inputfield");
let tasklist =document.getElementById("tasklist");

let onText = ()=>{
    if(inputfield.value === '' || inputfield.value.trim().length ==0 ){
            alert("Please Add  Task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML =inputfield.value;
        tasklist.appendChild(li);
        let img = document.createElement('img');
        img.src=`images-todolist/delete.png`;
        li.appendChild(img)
        inputfield.value=''
        saveData();
    }
}
tasklist.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        saveData(); 
    }
})
let saveData = () =>{
    localStorage.setItem('data',tasklist.innerHTML);
}
let displayData =()=>{
    tasklist.innerHTML=localStorage.getItem('data');
}
inputfield.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
      event.preventDefault();
        document.getElementById('btn').click()
    }
  });
displayData()   