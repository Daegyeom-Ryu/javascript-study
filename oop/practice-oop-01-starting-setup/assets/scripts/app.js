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
    element.scrollIntoView({ behavior: 'smooth' }); // safari는 스무스한 움직임 지원 X
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
  constructor(closeNotifierFunc, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunc;
    this.text = text;
    this.create();
  }
  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };
  create() {
    const toolTipElement = document.createElement('div');
    toolTipElement.className = 'card';
    // template 태그는 렌더링되지는 않지만 DOM에 포함되어 있다.
    // importNode는 외부 문서에서 노드를 가져오는 기능
    const toolTipTemplate = document.getElementById('tooltip');
    // template 태그의 내용은 .content로 접근 가능
    const toolTipBody = document.importNode(toolTipTemplate.content, true);
    toolTipBody.querySelector('p').textContent = this.text;
    toolTipElement.append(toolTipBody);
    // console.log(this.hostElement.getBoundingClientRect());
    // left,right,top,bottom,width,height 등등 볼 수 있음
    //
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight; // client는 안쪽 접근할 때 사용
    const parentElScrolling = this.hostElement.parentElement.scrollTop; // scrollTop은 스크롤한 양
    console.log(parentElScrolling);
    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElScrolling - 10; // 스크롤된만큼 빼줌
    // toolTipElement.offsetLeft; // 이런식으로는 읽기밖에 못함, CSS로 해야함
    toolTipElement.style.position = 'absolute'; // 절대좌표 설정해줘야 먹힘
    toolTipElement.style.left = x + 'px';
    toolTipElement.style.top = y + 'px';
    toolTipElement.addEventListener('click', this.closeToolTip);
    this.element = toolTipElement;
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
    if (this.hasActiveToolTip) return;
    const projectElement = document.getElementById(this.id);
    // data- 를 이용해서 DOM attribute에 원하는 데이터를 저장하거나 가져올 수 있다.
    const toolTipText = projectElement.dataset.extraInfo;
    const toolTip = new ToolTip(
      () => {
        this.hasActiveToolTip = false;
      },
      toolTipText,
      this.id
    );
    toolTip.attach();
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
    const startAnalyticBtn = document.getElementById('start-analytic-btn');
    startAnalyticBtn.addEventListener('click', this.startAnalytics);
  }

  static startAnalytics() {
    const someScript = document.createElement('script');
    // someScript.setAttribute('src', 'assets/scripts/dynamicLoadScript.js');
    someScript.src = 'assets/scripts/dynamicLoadScript.js';
    someScript.defer = true;
    document.head.append(someScript);
  }
}

App.init();
