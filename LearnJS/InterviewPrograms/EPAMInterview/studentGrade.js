/*
Create a Student class and 
Create a method isExcellent()
Returns "Excellent" if the student's grade is 90 or above.
Otherwise returns "Not Excellent".
*/
class Student {
    constructor (courseId, name, grade) {
        this.courseId = courseId;
        this.name = name;
        this.grade = grade;
    }
    isExcellent() {
         return this.grade >= 90 ? "Excellent" : "Not Excellent";
    }
}
const s1 = new Student(1, "Sree", 90);
const s2 = new Student(2, "John", 78);
console.log(s1);//Student { courseId: 1, name: 'Sree', grade: 90 }
console.log(s1.isExcellent());//Excellent
console.log(s2);//Student { courseId: 2, name: 'John', grade: 78 }
console.log(s2.isExcellent());//Not Excellent