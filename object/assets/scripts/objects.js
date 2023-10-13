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
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text += `${key} : ${movie.info[key]}`;
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
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  )
    return;
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };
  movies.push(newMovie);
  renderMovies();
};
const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
  //   const movieList = document.getElementById('movie-list');
  //   if (movies.length === 0) {
  //     movieList.classList.remove('visible');
  //     return;
  //   } else {
  //     movieList.classList.add('visible');
  //   }
  //   movieList.innerHTML = ''; // 새로 만들어야 함
  //   const filteredByTitle = document.getElementById('filter-title').value;
  //   movies
  //     .map((movie) => {
  //       if (movie.info.title === filteredByTitle) return movie;
  //     })
  //     .forEach((filteredMovie) => {
  //       console.log(filteredMovie);
  //       const filteredMovieEl = document.createElement('li');
  //       let text = filteredMovie.info.title + ' - ';
  //       for (const key in filteredMovie.info) {
  //         if (key !== 'title') {
  //           text += `${key} : ${filteredMovie.info[key]}`;
  //         }
  //       }
  //       filteredMovieEl.textContent = text;
  //       movieList.append(filteredMovieEl);
  //     });
};
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
