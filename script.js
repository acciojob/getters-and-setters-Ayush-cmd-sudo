//complete this code
class Person {
constructor(name,age){
	this._name=name;
	this._age=age;
}
get name(){
	return this._name;
}	
set age(value){
	if(value<=0){
		console.log("Invalid age");
	}
    else{
		this._age=value;

	}
  }
get age(){
	return this._age;
}


}

class Student extends Person {
 super();
  study(){
	  console.log(this._name,"is studying.");
  }
	
}

class Teacher extends Person {
super();
	teach(){
		console.log(this._name,"is teaching");
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
