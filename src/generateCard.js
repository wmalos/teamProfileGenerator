function generateManager(answers) {
    return `
<div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${answers.name}<br /><br />Manager</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${answers.id} </li>
        <li class="list-group-item">email:${answers.email} </li>
        <li class="list-group-item">Office Number:${answers.officeNumber} </li>
    </ul>
</div>
`;
}

function generateEngineer(answers) {
    return `
    <div class="card mx-auto" style="width: 18rem">
        <h5 class="card-header">${answers.name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${answers.id}</li>
            <li class="list-group-item">email:${answers.email} </li>
            <li class="list-group-item">github:${answers.github} </li>
        </ul>
    </div>
    `;
}


function generateIntern(answers) {
    return `
    <div class="card mx-auto" style="width: 18rem">
        <h5 class="card-header">${answers.name}<br /><br />Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${answers.id} </li>
            <li class="list-group-item">email:${answers.email} </li>
            <li class="list-group-item">School:${answers.school} </li>
        </ul>
    </div>
    `;
}
module.exports ={
    generateManager,
    generateEngineer,
    generateIntern,
}