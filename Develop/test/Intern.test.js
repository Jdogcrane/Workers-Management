// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testName = "userName";
    const emp = new Intern("laa", 1, "test@test.com", testName);
    expect(emp.school).toBe(testName);
});

test("getRole() should return \"Intern\"", () => {
    const testName = "Intern";
    const emp = new Intern("laa", 1, "test@test.com", testName);
    expect(emp.getRole()).toBe(testName);
});

test("Can get school via getSchool()", () => {
    const testName = "userName";
    const emp = new Intern("laa", 1, "test@test.com", testName);
    expect(emp.getSchool()).toBe(testName);
});
