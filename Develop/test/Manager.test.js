
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee"); 

test("Can set office number via constructor argument", () => {
    const testName = 100;
    const mng = new Manager("laa", 1, "test@test.com", testName);
    expect(mng.officeNumber).toBe(testName);
});

test('getRole() should return "Manager"', () => {
    const testName = "Manager";
    const mng = new Manager("laa", 1, "test@test.com", 100);
    expect(mng.getRole()).toBe(testName);
});

test("Can get office number via getOffice()", () => {
    const testName = "100";
    const mng = new Manager("laa", 1, "test@test.com", testName);
    expect(mng.getOfficeNumber()).toBe(testName);
});
