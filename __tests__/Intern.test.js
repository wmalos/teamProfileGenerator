  const Intern = require("../lib/Intern");

  test("Get school", () => {
    const school = "University of Oregon";
    const newInt = new Intern("John", 5, "email", school);
    expect(newInt.getSchool()).toBe(school);
});


test("Get role", () => {
    const role = "Intern";
    const newInt= new Intern();
    expect(newInt.getRole()).toBe(role);
})