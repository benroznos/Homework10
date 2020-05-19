
const inquirer=require('inquirer')
const empQuest: ["What is the Employee's name?", "What is the Employee's ID?", "What is the Employee's Title?", "What is the Employee's office number?", "What is the Employee's Github username?", "What is the Employee's School name?"]
const empInfo:['name', 'id', 'title', 'officeNum', 'github', 'school']

inquirer.prompt({
  type:'list',
  name:'empType',
  message: "What is the employee's possition?",
  choices: ['Manager','Engineer','Intern']
})
.then(({empType})=>{
  for (i = 0, i < 3, i++){
  inquirer.prompt({
    type: 'input',
    name: `${empInfo[i]}`,
    message: `${empQuest[i]}`
  })
  .then(({empInfo[i]}))

}
  switch(empType){
    case 'Manager':{
        inquirer.prompt({
          type:'input',
          name:'answer',
          message:`${empQuest[i]}`
        })
      }
      break
    case 'Engineer':
      break
    case 'Intern':
      break
  }
})
.catch(err=>console.log(err))