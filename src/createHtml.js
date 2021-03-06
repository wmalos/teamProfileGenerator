const generateCard = require('./generateCard')
var generatedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
    </nav>
    <div class="container">
        <div class="col-6">
            <div class="row">`;

const generatedCards = [];

// Create function to generate html
function generateHtml(answers) {
    console.log(answers);
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].getRole() === "Manager") {
            const manager = generateCard.generateManager(answers[i]);
            generatedHtml = generatedHtml + manager;
        }

        else if (answers[i].getRole() === "Engineer") {
            const engineer = generateCard.generateEngineer(answers[i]);
            generatedHtml = generatedHtml + engineer;
        }

        else if (answers[i].getRole() === "Intern") {
           const intern = generateCard.generateIntern(answers[i]);
           generatedHtml = generatedHtml + intern;
        } else {}
    }

return `${generatedHtml}
            </div>
        </div>
    </div>
</body>
</html>
`;
}



module.exports = generateHtml;