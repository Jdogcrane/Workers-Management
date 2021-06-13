
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
const testEmail = "userName";
const emp = new Engineer("laa", 1, "test@test.com", testEmail);
expect(emp.github).toBe(testEmail);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const emp = new Engineer("laa", 1, "test@test.com", "github", testRole);
    expect(emp.getRole()).toBe(testRole)
});

test("Can get GitHub username via getGithub()", () => {
    const testGit = "userName";
    const emp = new Engineer("laa", 1, "test@test.com", testGit);
    expect(emp.getGithub()).toBe(testGit)
});
