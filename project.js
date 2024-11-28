 // Get the DOM elements
 const taskinput =document.getElementById("task-input");
 const addtaskbtn=document.getElementById("add-task-btn");
 const tasklist=document.getElementById("tasklist");

 //function to add a new task
 function addtask(){
     const tasktext=taskinput.value.trim(); //Get the text from the input field
     if(tasktext!==""){
         //create a new list item const li=
        let lit = document.createElement("li");
        console.log(lit);
        
        let aplist = lit.append(tasktext)
         //Add task text to the list item
         lit.textcontent = tasktext;

         //create a delete button for each task
         const deletebtn=
         document.createElement("button");
         deletebtn.textcontent="Delete";

         deletebtn.classList.add("delete-btn");

         //Append delete button to the list item
         lit.appendChild(deletebtn);

         //Add the task to the list
         tasklist.appendChild(lit);

         //Clear the input field after adding the task
         taskinput.value="";

         //Add event Listener to delete button 
         deletebtn.addEventListener("click",function() {
             tasklist.removechild(lit);
         });

         //Add event Listener to mark the task as completed
         lit.addEventListener("click",function(){
             lit.classList.toggle("completed");
         });
     }else{
         alert("please enter a task!");
     }
         }

         //Event Listener for the "Add Task" button
         addtaskbtn.addEventListener("click",addtask);

         //Allow pressing 'Enter' to add a task 
         taskinput.addEventListener("Keypress",function(event){
             if(event.key ==="Enter"){
                 addTask();
             }
         });