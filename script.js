const theme_button = document.querySelector("#toggle-button");
var no_elements =0;
theme_button.addEventListener("click", () => {
    document.body.classList.contains("light-theme")? enableDarkTheme() : enableLightTheme();
    
});
function enableLightTheme(){
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}
function enableDarkTheme(){
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
}
function setTheme(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        enableDarkTheme();
    }
    else{
        enableLightTheme();
    }

    const active = document.querySelector(".toggle-section>li");
    active.classList.add("toggle-active");

}

function loader(){
    setTheme();
    no_elements = 0;
}

document.onload = loader();


// List operations
const clear_button = document.querySelector("#cleanbutton");
const input_field = document.querySelector("#insert");
const input_accept = document.querySelector(".input-field>.check-field");
const list_container = document.querySelector(".dynamic-todo");

clear_button.addEventListener("click", ()=>{
    const list = document.querySelector(".dynamic-todo");
    list.innerHTML = '';
    const box_count = document.querySelector(".item-count");
    box_count.innerText = '0 items left';
    no_elements = 0;
});

input_field.addEventListener("keyup", (event)=>{
    if(event.keyCode == 13){
        addItem();
    }
});
input_accept.addEventListener("click", addItem);

function addItem()
{
    if(input_field.value!='')
    {
        const todoitem = document.createElement("li");
        todoitem.setAttribute('draggable', true);

        //// draggable property
        todoitem.addEventListener('dragstart', ()=>{
            todoitem.classList.add("dragging");
        })

        todoitem.addEventListener("dragend", ()=>{
            todoitem.classList.remove("dragging");
        })

        const check_button = document.createElement("div");
        check_button.innerHTML = '<div class="check-field-content"></div>';
        check_button.classList.add("check-field");
        todoitem.appendChild(check_button);

        const content = document.createElement("div");
        content.classList.add("li-content");
        content.innerText = input_field.value;
        todoitem.appendChild(content);

        const del_button = document.createElement("div");
        del_button.classList.add("delete-content");
        todoitem.appendChild(del_button);

        list_container.appendChild(todoitem);

        const box_count = document.querySelector(".item-count");
        no_elements += 1;
        box_count.innerText = no_elements+' items left';

        input_field.value = '';
    }
};

list_container.addEventListener("click", delete_check);

function delete_check(event){
    if(event.target.classList[0] === "delete-content"){
        event.target.parentElement.classList.add("killing-animation");
        event.target.parentElement.addEventListener('transitionend', ()=>{
            event.target.parentElement.remove();
        });
        const box_count = document.querySelector(".item-count");
        if(!event.target.parentElement.classList.contains("checked-item"))
            no_elements -= 1;
        box_count.innerText = no_elements+' items left';
    }

    // Checking field
    else if(event.target.classList[0] === "check-field-content"){
        event.target.parentElement.parentElement.classList.add("checked-item");
        const box_count = document.querySelector(".item-count");
        no_elements -= 1;
        box_count.innerText = no_elements+' items left';
    }

    // Unchecking field
    else if(event.target.classList[0] == "check-field" && event.target.parentElement.classList.contains("checked-item")){
        event.target.parentElement.classList.remove("checked-item");  
        const box_count = document.querySelector(".item-count");
        no_elements += 1;
        box_count.innerText = no_elements+' items left';     
    }
}


const toggle_section = document.querySelector(".toggle-section");

toggle_section.addEventListener("click", switch_section);

function switch_section(event){
    const element = event.target;
    switch(element.innerText){
        case "All":for(let node of toggle_section.children){
                        node.classList.remove("toggle-active");
                    }
                    element.classList.add("toggle-active");
                    for(let node of list_container.children){
                        node.style.display = 'flex';
                    }
                    break;
        case "Active":for(let node of toggle_section.children){
                        node.classList.remove("toggle-active");
                    }
                    element.classList.add("toggle-active");
                    for(let node of list_container.children){
                        if(node.classList.contains("checked-item")){
                            node.style.display = 'None';
                        }
                        else{
                            node.style.display = 'flex';
                        }
                    }
                    break;

        case "Completed":for(let node of toggle_section.children){
                            node.classList.remove("toggle-active");
                        }
                        element.classList.add("toggle-active");
                        for(let node of list_container.children){
                            if(!node.classList.contains("checked-item")){
                                node.style.display = 'None';
                            }else{
                                node.style.display = 'flex';
                            }
                        }
                        break;


    }
}


///drag functions

list_container.addEventListener("dragover", e=>{
    e.preventDefault();
    const ypos = e.clientY;
    const draggable = [...document.querySelectorAll(".dynamic-todo>li:not(.dragging)")];
    const current_selected = document.querySelector(".dragging");
    const after_container  = draggable.reduce((closest, child) => {
        const box_dim = child.getBoundingClientRect();
        const temp = ypos - box_dim.top - box_dim.height/2;
        if(temp<0 && temp>closest.offset){
            return {offset: temp, result: child};
        }
        else{
            return closest;
        }
    }, {offset:  Number.NEGATIVE_INFINITY, result: null}).result;
    if(after_container == null){
        list_container.appendChild(current_selected);
    }
    else{
        list_container.insertBefore(current_selected, after_container);
    }
})