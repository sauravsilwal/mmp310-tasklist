window.addEventListener("load", function() {
	const taskList = document.getElementById("list");
	const taskInput = document.getElementById("task");
	const submitBtn = document.getElementById("submit");
    
	
	taskInput.addEventListener("keydown", function(event) {
		if (event.which == 13) {
			addTask();	
		}
	});
	
     
    
   
    
	submitBtn.addEventListener("click", addTask);
	function addTask() {
		
		const text = taskInput.value;
		
		if (text) {
			const task = document.createElement("div");
			task.classList.add("task");
			task.textContent = text;
			taskList.appendChild(task);
		
			const check = new Image();
			check.src = "check.svg";
			check.width = 32;
			taskList.appendChild(check);
			
			// click event on the check image
            check.addEventListener("click", removeTask);
			// when the user clicks
            function removeTask(){
                task.remove();
                check.remove();
            }
				// remove the task
				// remove button
		}
	}
});

