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
class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }
  detach() {
    this.element.remove();
  }
  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'beforebegin' : 'beforeend',
      this.element
    );
  }
}
class ToolTip extends Component {
  constructor(closeNotifierFunc, parentId) {
    super(parentId);
    this.closeNotifier = closeNotifierFunc;
    this.create();
  }
  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };
  detach() {
    this.element.remove();
  }
  create() {
    const toolTipElement = document.createElement('div');
    toolTipElement.className = 'card';
    toolTipElement.textContent = 'DUMMY';
    // toolTipElement.textContent =
    //   this.hostElement === document.body
    //     ? 'DUMMY'
    // : this.hostElement.getAttribute('data-extra-info');
    toolTipElement.addEventListener('click', this.closeToolTip);
    this.element = toolTipElement;
    this.attach();
  }
}
class ProjectItem {
  hasActiveToolTip = false;
  constructor(id, updateProjectListsFunc, type) {
    this.id = id;
    this.updateProjectsHandler = updateProjectListsFunc;
    this.type = type;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(this.type);
  }
  showMoreInfoHandler() {
    // console.log(this); // 여기서 this는 button
    if (this.hasActiveToolTip) return;
    new ToolTip(() => {
      this.hasActiveToolTip = false;
    }, this.id);
    this.hasActiveToolTip = true;
  }
  connectMoreInfoBtn() {
    const projectElem = document.getElementById(this.id);
    const moreInfoBtn = projectElem.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }
  connectSwitchBtn(type) {
    const projectElem = document.getElementById(this.id);
    let switchBtn = projectElem.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventLister(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectsHandler.bind(null, this.id)
    );
  }
  update(updateProjectListsFunc, type) {
    this.updateProjectsHandler = updateProjectListsFunc;
    this.connectSwitchBtn(type);
  }
}
class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }
  setSwitchHandlerFunc(switchHandlerFunc) {
    this.switchHandler = switchHandlerFunc;
  }
  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
    console.log(this.projects);
  }
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
