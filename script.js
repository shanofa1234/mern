function addtask()
{
    var task =document.getElementById('task-input').value;
    if (task.trim() !== ''){
    console.log('Task:',task)
    var totalTask = document.getElementById('total-count')
    var taskCount = document.getElementById('task-list').childElementCount;
    totalTask.innerHTML = taskCount + 1;
    var taskItem =document.createElement('li')
    taskItem.textContent = task
    taskItem.className ='border border-gray-200 bg-white-200 rounded-lg p-10 shadow-md py-4 px-10 mt-3 items-center flex justify-between'
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'bg-red-500 text-white px-4 py-2 rounded-full m-4 items-center flex justify-between'
    deleteButton.addEventListener('click',function(){
        taskItem.remove()
        var totalTask = document.getElementById('total-count')
    var taskCount = document.getElementById('task-list').childElementCount;
    totalTask.innerHTML = taskCount;
       
    })
    taskItem.appendChild(deleteButton)
  document.getElementById('task-list').appendChild(taskItem)
}
}
function deleteAll()
{
  document.getElementById('task-list').innerHTML = ''
  var totalTask = document.getElementById('total-count')
  totalTask.textContent = 0
}



