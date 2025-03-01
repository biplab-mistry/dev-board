const completeBtn = document.getElementsByClassName('btn-primary');
const options1 = { weekday: 'short' }
const options2 = {  month: 'long', day: 'numeric', year: 'numeric' }
const day = new Date().toLocaleDateString('en-IN',options1);
const restDay = new Date().toLocaleDateString('en-IN',options2);
document.getElementById('date').innerHTML=`${day}, <br> ${restDay}`;



for (let btn of completeBtn) {
    btn.addEventListener('click', function (event) {

        alert("Board Update Successfully")
        let taskElement = document.getElementById("task-assignment").innerText;
        let taskElementNumber = parseInt(taskElement);
        document.getElementById("task-assignment").innerText = taskElementNumber - 1;
        btn.setAttribute("disabled", true);
        let navAssignment = document.getElementById("nav-assignment").innerText;
        let navAssignmentNumber = parseInt(navAssignment)
        document.getElementById("nav-assignment").innerText = navAssignmentNumber + 1;
        // for double alert
        if (taskElementNumber === 1) {
            alert("Congrats you have completed all the current task")
        }



    })

}
