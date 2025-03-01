const completeBtn = document.getElementsByClassName('btn-primary');
const options1 = { weekday: 'short' }
const options2 = { month: 'long', day: 'numeric', year: 'numeric' }
const day = new Date().toLocaleDateString('en-IN', options1);
const restDay = new Date().toLocaleDateString('en-IN', options2);
document.getElementById('date').innerHTML = `${day}, <br> ${restDay}`;



for (let btn of completeBtn) {
    btn.addEventListener('click', function (event) {
        let taskElement = document.getElementById("task-assignment").innerText;

        alert("Board Update Successfully")
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
        const containerElement = document.getElementById("right-container");

        const card = btn.closest('.card');
        const cardTitle = card.querySelector('.card-title').innerText;


        const div = document.createElement("div");

        const currentTime = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        div.classList.add("beautify");
        div.innerHTML = `
        <p>you have completed the task ${cardTitle} at ${currentTime}</p>
        
        `
        containerElement.style.display = 'block';
        containerElement.appendChild(div)
    })
}

// clean up

document.getElementById("cleanUp").addEventListener("click", function () {
    const rightContainer = document.getElementById("right-container")
    rightContainer.style.display = 'none';
    rightContainer.innerHTML = '';
    for (let btn of completeBtn) {
        if (btn.hasAttribute('disabled')) {
            btn.removeAttribute('disabled')
        }
    }
    document.getElementById("task-assignment").innerText = completeBtn.length;
    document.getElementById("nav-assignment").innerText = 0;
})
// random color
document.getElementById("colorChange").addEventListener("click", function () {
    document.body.style.backgroundColor = backGroundColor();
})
function backGroundColor() {
    return randomColor = "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16)

}

// time show in deadline section
//   const deadLine=document.querySelectorAll(".dead-line")

const deadLine = document.querySelectorAll('.dead-line');

for (let date of deadLine) {
    date.innerText = new Date().toDateString('en-IN')
}


