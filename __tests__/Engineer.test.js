const Engineer = require("../lib/Engineer");

test("Get github username", () => {
    const github = "willm";
    const newEng = new Engineer("Will", 2, "email", github);
    expect(newEng.getGithub()).toBe(github);
});


test("Get role", () => {
    const role = "Engineer";
    const newEng = new Engineer();
    expect(newEng.getRole()).toBe(role);
});