// 'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];
// movieList.style.backgroundColor = 'red';
// movieList.style['background-color'] = 'red'; // css attributes로도 동작

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));
  filteredMovies.forEach((movie) => {
    const movieEL = document.createElement('li');
    const { info, ...otherProps } = movie; // oterProps로 남는 애들 모아서 객체로 만듬
    // ------------------------method 1 duplicated variable name ------------------------
    // const { title: movieTitle } = info; // 겹치는 변수가 있을 경우, :으로 다른 이름 사용 가능
    // let text = movieTitle + ' - ';

    // ------------------------ method 2 - 1(bind) : uppercase ------------------------
    // const { getFormattedTitle } = movie; // this===window 이기 때문에, getFormattedTitle을 호출하는 주체는 window이다.
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie); // getFomattedTitle이 실행될 때 주체를 movie로 한다.
    // let text = getFormattedTitle() + ' - ';
    // 메서드를 호출한 주체(movie===this)를 명시하지 않으면, 비 엄격(non-strict) 모드에서는 전역 객체가 주체(this)가 된다. 브라우저의 경우 window다.

    // ------------------------ method 2 -2(call, apply) : uppercase ------------------------
    // bind로 묶고 나중에 실행하는 대신 call롤 바로 실행한다.
    // this가 가리키는 주체를 바꿔서 바로 실행한다.
    // call과 apply의 차이점은 this 자리 뒤에 들어갈 인자 차이 call: 여러 인자, apply: 여러 인자들이 포함된 배열
    let text = getFormattedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text += `${key} : ${info[key]}`;
      }
    }
    movieEL.textContent = text;
    movieList.append(movieEL);
  });
};
const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
  if (
    // title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  )
    return;
  const newMovie = {
    // info: {
    //   title,
    //   [extraName]: extraValue,
    // },
    info: {
      [extraName]: extraValue,
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          console.log(this);
          return;
        }
        this._title = val;
        console.log(this);
      },
      get title() {
        return this._title.toUpperCase();
      },
    },
    id: Math.random().toString(),
    getFormattedTitle: function () {
      // console.log(this);
      return this.info.title.toUpperCase();
    },
    // getFormattedTitle() {    // 이것도 위에거처럼 잘 작동한다.
    //   return this.info.title.toUpperCase();
    // },
  };
  newMovie.info.title = title;
  movies.push(newMovie);
  renderMovies();
};
// const searchMovieHandler = () => {
const searchMovieHandler = function () {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};
// (브라우저의) 이벤트 리스너는 이벤트를 트리거 하는 요소에 this를 바인딩한다. 즉, button
// 단, 화살표 함수를 사용하지 않을 때만 그렇다.
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// 일반 함수로 만들면 함수 호출 주체가 this가 된다.
// 화살표 함수는 엄격모드, 비엄격모드 상관없이 this를 모른다.

// 화살표 함수의 유용한 점
const members = {
  teamName: 'Blue Rockets',
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    // forEach는 함수를 실행하는 주체인데, function 키워드로 생성한 함수에
    // this를 바인딩하지 않는다. 따라서 전역 객체인 window가 this가 되어
    // this.teamName은 undefined가 되어 버림.
    // this.people.forEach(function (p) {
    //   console.log(p + ' - ' + this.teamName);
    // });
    // 화살표 함수 사용시에 this는 함수 외부 this를 참조하는데,
    // 이때 this는 getTeamMembers의 실행 주체인 members이다.
    // this.teamName은 'Blue Rockets'
    this.people.forEach((p) => {
      console.log(p + ' - ' + this.teamName);
    });
  },
};
// members.getTeamMembers();
