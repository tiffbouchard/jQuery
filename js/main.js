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

function removeSkill (event) {
  let list = $(event.target).parent();
    $(list).remove();
  if ($skillsList.children().length <= 0) {
    $skillsList.append("<p>Where did your skills go?</p>");
  }
}
//create p element with class .where with "where did your skills go" and append this to skillslist so dont have to style p in css separately since both where and this new p element have the same styling
