// Logo refresh page

var home = document.querySelector('.titlewrapper')

function refreshPage() {
    window.location.reload();
}

home.addEventListener('click', refreshPage);

// Over mij pagina tonen

var overMijShow = document.querySelector('.aboutme');
var overMijPagina = document.querySelector('.abouthide');
var overMijHide = document.querySelector('.aboutx');

function showOverMij(){
    overMijPagina.classList.remove('abouthide');
    overMijPagina.classList.add('aboutshow');

    console.log(overMijPagina);
}

overMijShow.addEventListener('click', showOverMij);

function hideOverMij(){
    overMijPagina.classList.remove('aboutshow');
    overMijPagina.classList.add('abouthide');

    console.log(overMijPagina);
}

overMijHide.addEventListener('click', hideOverMij);

// Mijn projectenten pagina tonen

var projectsShow = document.querySelector('.projects');
var projectsPagina = document.querySelector('.projectshide');
var projectsX = document.querySelector('.xprojects');

function showProjects(){
    projectsPagina.classList.remove('projectshide');
    projectsPagina.classList.add('projectsshow');

    home.classList.remove('titlewrapper');
    home.classList.add('title2');

    console.log(projectsPagina);
}

projectsShow.addEventListener('click', showProjects);

function hideProjects(){
    projectsPagina.classList.remove('projectsshow');
    projectsPagina.classList.add('projectshide');

    home.classList.remove('title2');
    home.classList.add('titlewrapper');

    console.log(projectsPagina);
}

projectsX.addEventListener('click', hideProjects);