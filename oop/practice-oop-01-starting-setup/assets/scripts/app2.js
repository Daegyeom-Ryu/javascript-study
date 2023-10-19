// more Info 누르면 data-extra-info 보여주기
// Finish 누르면 Finished Project로 이동
// Active 누르면 Active Project로 이동
class Project {
  constructor() {}

  moveHandler = function (projectId) {
    console.log(this);
    const moveProject = document.getElementById(projectId);
    let sectionId = moveProject.parentElement.parentElement.getAttribute('id');
    moveProject.remove();
    if (sectionId === 'active-projects') {
      sectionId = 'finished-projects';
      this.innerHTML = 'Activate';
    } else {
      sectionId = 'active-projects';
      this.innerHTML = 'Finish';
    }
    const projects = document.getElementById(sectionId);
    projects.querySelector('ul').append(moveProject);
  };
}

const p1Btns = p1.querySelectorAll('button');
const p1InfoBtn = p1Btns[0];
const p1MoveBtn = p1Btns[1];
const p2Btns = p2.querySelectorAll('button');
const p2InfoBtn = p2Btns[0];
const p2MoveBtn = p2Btns[1];
const p3Btns = p3.querySelectorAll('button');
const p3InfoBtn = p3Btns[0];
const p3MoveBtn = p3Btns[1];

const project = new Project();
p1MoveBtn.addEventListener('click', project.moveHandler.bind(p1MoveBtn, 'p1'));
p2MoveBtn.addEventListener('click', project.moveHandler.bind(p2MoveBtn, 'p2'));
p3MoveBtn.addEventListener('click', project.moveHandler.bind(p3MoveBtn, 'p3'));
