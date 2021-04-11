const Manager = require("../lib/Manager");

test("Get office number", () => {
    const officeNumber = 101;
    const newMan = new Manager("Laura", 1, "email", officeNumber);
    expect(newMan.getOfficeNumber()).toBe(officeNumber);
});

test("Get role", () => {
    const role = "Manager";
    const newMan = new Manager();
    expect(newMan.getRole()).toBe(role);
})