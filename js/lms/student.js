/**
 * The Student class encapsulates all 
 * of the properties and methods 
 * associated with a student.
 */
function Student(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;
  this.courses = [];
  this.enroll = (crs) => {
    this.courses.push(crs);
  };
}

module.exports = Student;