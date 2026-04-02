// Time Filtyer toggle
const timeButtons = document.querySelectorAll('.time-filters button');

timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        timeButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Optional: Update content based on time filter
        console.log(`Time filter selected: ${btn.textContent}`);
    });
});

// Add Expense button
const addExpenseBtn = document.querySelector('.add-expense');
addExpenseBtn.addEventListener('click', () => {
    //Pop up
    alert('Add Expense button clicked!');
});

//Progress bar update
function updateProgress(percent) {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-bar span');

    // Clamp percent between 0 and 100
    percent = Math.min(Math.max(percent, 0), 100);

    progressFill.style.width = percent + '%';
    progressText.textContent = `Saving Progress ${percent}%`;
}

// Example initial progress
updateProgress(50);

function addTransaction(name, amount) {
    const recentTransactions = document.querySelector('.recent-transactions');

    const transactionDiv = document.createElement('div');
    transactionDiv.classList.add('transaction');

    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    const amountSpan = document.createElement('span');
    amountSpan.textContent = amount;

    transactionDiv.appendChild(circleDiv);
    transactionDiv.appendChild(nameSpan);
    transactionDiv.appendChild(amountSpan);

    recentTransactions.appendChild(transactionDiv);
}

// Example usage
addTransaction('Coffee Shop', 'NRP 250');
addTransaction('Taxi', 'NRP 400');



// Practice Only (Automatically increase the saving process)
// let currentProgress = 50;
// setInterval(() => {
//     if(currentProgress < 100){
//         currentProgress += 2; // increase by 1% every second
//         updateProgress(currentProgress);
//     }
// }, 1000);

// const interval = setInterval(() => {
//     if(currentProgress < 100){
//         currentProgress += 5; // increase by 2% every second
//         updateProgress(currentProgress);
//     } else {
//         // Stop the interval when reaching 100%
//         clearInterval(interval);

//         // Show message when 100% is reached
//         // alert('🎉 Congratulations! Your savings are complete!');
//         // OR display inside page instead of alert:
//         const message = document.createElement('div');
//         message.textContent = "🎉 Congratulations! Your savings are complete!";
//         message.style.color = "green";
//         document.querySelector('.main-content').appendChild(message);
//     }
// }, 1000);


function logoutUser() {
    let confirmAction = confirm("Are you sure you want to logout?");
    
    if (confirmAction) {
        // user clicked OK → logout
        window.location.href = "loginDark.html";
    } 
    // if Cancel → do nothing
  
}