const Employee = require("../lib/Employee");

test("Get name", () => {
    const name = "Will";
    const newEmp = new Employee(name);
    expect(newEmp.getName()).toBe(name);
});

test("Get id number", () => {
    const id = 1;
    const newEmp = new Employee("name", id);
    expect(newEmp.getId()).toBe(id);
});

test("Get email", () => {
    const email = "yahoo@gmail.com";
    const newEmp = new Employee("name", 1, email);
    expect(newEmp.getEmail()).toBe(email);
});
