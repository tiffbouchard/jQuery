//variable that will hold new skill when entered
// let newSkills = {skill: ""};


//make newSkills equal to the input 
let $newSkill = $('#new-skills-input-area').val();
let $skillsTable = $('.skills');
let $addSkillsButton = $('#add-skills-button');

  let newSkillsElement = //new element that has the input value inside a th value with a button

//function to carry out when ad skill button is clicked

$addSkillsButton.on('click', function (evt) {
  //append newSkillsElement to the table

  console.log(evt);
//  ("<tr>hi</tr>").insertAfter(".skills");

  //  $newSkill.append($skillsTable);
});


{/* <th><button class="remove">X</button></th> */}//ad this button later
