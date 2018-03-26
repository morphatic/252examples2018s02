// Import the Student class
const Student = require('./student');

describe("A Student", () => {

  it("has a first name", () => {
    const oscar = new Student("Oscar");
    expect(oscar.first_name).toBeDefined();
    expect(oscar.first_name).toBe("Oscar");
  });

  it("has a second name", () => {
    const oscar = new Student("Oscar", "Mayer");
    expect(oscar.last_name).toBeDefined();
    expect(oscar.last_name).toBe("Mayer");
  });

  it("has courses", () => {
    const oscar = new Student("Oscar", "Mayer");
    expect(oscar.courses).toBeDefined();
    expect(Array.isArray(oscar.courses)).toBe(true);
  });

  it("can enroll in a course", () => {
    const oscar = new Student("Oscar", "Mayer");
    const mockProf = {
      first_name: "Morgan",
      last_name: "Benton",
      office: "ISAT/CS 124",
      email: "bentonmc@jmu.edu"
    };
    const mock252 = {
      name: "Programming and Problem Solving",
      department: "ISAT",
      number: "252",
      instructor: mockProf
    };
    const num_enrolled = oscar.courses.length;
    oscar.enroll(mock252);
    expect(oscar.courses.length).toBe(num_enrolled + 1);
    expect(oscar.courses[num_enrolled].name).toBe("Programming and Problem Solving");
    expect(oscar.courses[num_enrolled].instructor.first_name).toBe("Morgan");
  });
});