//code below 

let $addSkillsButton = $('#add-skills-button');
let $skillsList = $('.skills-list')

$skillsList.on('click', 'button', removeSkill);
$addSkillsButton.on('click', addSkill);

function addSkill () {
  let $inputArea = $('#new-skills-input-area');
  if ($inputArea.val() === '') {
    return;
  } else {
    $('.where').remove();
    let $skillsInputVal = $inputArea.val();
    $skillsList.append(`<li><button class="remove">X</button>${$skillsInputVal}</li>`);
  }
}

function removeSkill () {
  $('li').remove();
  // $skillsList.append('Hey, you removed all your skills!');
}

//how to not delete all of them
//clear input box after adding the skill
//show "Hey, you removed all your skills" when you remove all skills
