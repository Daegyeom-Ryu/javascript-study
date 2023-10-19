class DOMHelper {
  static clearEventLister(element) {
    // 메모리 누수 없애기
    const cloneElement = element.cloneNode(true);
    element.replaceWith(cloneElement);
    return cloneElement;
  }
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element); // append는 복사가 아니라 이동
  }
}
class ToolTip {}
class ProjectItem {
  constructor(id, updateProjectListsFunc) {
    this.id = id;
    this.updateProjectsHandler = updateProjectListsFunc;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn();
  }
  connectMoreInfoBtn() {
    const projectElem = document.getElementById(this.id);
    const moreInfoBtn = projectElem.querySelector('button:first-of-type');
  }
  connectSwitchBtn() {
    const projectElem = document.getElementById(this.id);
    let switchBtn = projectElem.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventLister(switchBtn);
    switchBtn.addEventListener(
      'click',
      this.updateProjectsHandler.bind(null, this.id)
    );
    // switchBtn.addEventListener(
    //   'click',
    //   ProjectList.move.bind(switchBtn, this.id)
    // );
  }
  update(updateProjectListsFunc, type) {
    this.updateProjectsHandler = updateProjectListsFunc;
    this.connectSwitchBtn();
  }
}
class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
      );
    }
  }

  addProject(project) {
    // const [project, ...rest] = projectArr;
    this.projects.push(project);
    console.log(this.projects);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
    // switchBtn.removeEventListener('click', beforeProject.connectSwitchBtn);
    // const projectElem = document.getElementById(project.id);
    // switchBtn = projectElem.querySelector('button:last-of-type');
    // switchBtn.addEventListener('click', project.connectSwitchBtn);
  }
  setSwitchHandlerFunc(switchHandlerFunc) {
    this.switchHandler = switchHandlerFunc;
  }
  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
    console.log(this.projects);
    // console.log(this.projects);
  }
  // static move(projectId) {
  //   const prj = document.getElementById(projectId);
  //   const prjList = prj.parentElement;
  //   const prjStatus = prjList.parentElement.id;
  //   let movedPrjList;
  //   if (prjStatus === `active-projects`) {
  //     this.innerHTML = 'Activate';
  //     movedPrjList = document
  //       .getElementById('finished-projects')
  //       .querySelector('ul');
  //   } else {
  //     this.innerHTML = 'Finish';
  //     movedPrjList = document
  //       .getElementById('active-projects')
  //       .querySelector('ul');
  //   }
  //   prjList.removeChild(prj);
  //   movedPrjList.append(prj);
  // }
}
class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHandlerFunc(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunc(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
