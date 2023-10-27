class Person {
    constructor(Fname, Lname, age, gender, email) {
      this.Fname = Fname;
      this.Lname = Lname;
      this.age = age;
      this.gender = gender;
      this.email = email;
    }
  
    getDetails() {
    console.log(`Full Name: ${this.Fname}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Email: ${this.email}`);
    }
  }
  
  const person1 = new Person("Jackie","Chan", 30, "Male", "jackiechan@Guvi.com");
  person1.getDetails();

  