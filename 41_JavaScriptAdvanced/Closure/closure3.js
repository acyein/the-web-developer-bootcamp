// Closure 03 - Private variables
function classroom(){
    var instructors = ["Colt", "Elie"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classroom();
console.log(course1.getInstructors()); // ['Colt', 'Elie']
console.log(course1.addInstructor("Ian")); // ['Colt', 'Elie', 'Ian']
console.log(course1.getInstructors()); // ['Colt', 'Elie', 'Ian']

console.log("----------------------------")

course2 = classroom();
console.log(course2.getInstructors()); // ['Colt', 'Elie] - not affected by course1

// We do no have access to instructors variable as it is private and no one can change it