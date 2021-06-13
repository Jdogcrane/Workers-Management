
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const testName = "billy";
    const emp = new Employee(testName);
    expect(emp.name).toBe(testName);
});

test("Can set id via constructor argument", () => {
    const testNum = 100;
    const emp = new Employee("laa", testNum)
    expect(emp.id).toBe(testNum)
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const emp = new Employee("laa", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "name";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testNum = "100";
    const emp = new Employee("laa", testNum);
    expect(emp.getId()).toBe(testNum);
});

test("Can get email via getEmail()", () => {
    const testNum = "test@test.com";
    const emp = new Employee("laa", 1, testNum);
    expect(emp.getEmail()).toBe(testNum);
});

test("getRole() should return \"Employee\"", () => {
    const testNum = "Employee";
    const emp = new Employee("laa", 1, "test@test.com");
    expect(emp.getRole()).toBe(testNum);
});
