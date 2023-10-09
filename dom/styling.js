// 인라인 방식으로 요소에 직접 접근해서 styling
const h1Styling = document.querySelector('h1');
h1Styling.style.color = 'blue';

// class로 스타일 입히기
// className 사용 -> 단점은 클래스를 추가,삭제할 때마다 번거롭다.
const sectionStyling = document.querySelector('section');
sectionStyling.className = '';
sectionStyling.className = 'red-bg';

// classList 사용 -> 클래스 추가, 삭제할 때 편하다.
sectionStyling.classList = [];
sectionStyling.classList.add('red-bg');
sectionStyling.classList.add('invisible');
sectionStyling.classList.remove('invisible');

// classList 사용시 toggle 기능도 간편하다.
const buttonToggle = document.querySelector('button');
buttonToggle.addEventListener('click', () => {
  sectionStyling.classList.toggle('invisible');
});
