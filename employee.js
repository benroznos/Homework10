class Employee{
  constructor(name, id, title){
    this.name = name
    this.id = id
    this.title = title
  }
}
class Manager extends Employee{
  constructor(name, id, title, officeNumber){
    super(name, id, title)
    this.officeNumber = officeNumber
  }
}
class Engineer extends Employee{
  constructor(name, id, title, github){
    super(name, id, title)
    this.github = github
  }
}
class Intern extends Employee{
  constructor(name, id, title, school){
    super(name, id, title)
    this.school = school
  }
}
let me = new Employee()
console.log(me)