'use strict'

var gProjects = createProjects()

function createProjects() {
    gProjects = [{
        id: 'Guess-Me',
        name: 'Guess-Me',
        title: 'try to guess the character',
        desc: 'bla,bla',
        imgUrl: 'img/projects/guess-me.png',
        publishedAt: new Date(),
        labels: ['Games ',' old school ']
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'my version to good old game',
        desc: 'bla,bla',
        imgUrl: 'img/projects/minesweeper.png',
        publishedAt: new Date(),
        labels: ['Games ',' old school ']
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'my version to good old game',
        desc: 'bla,bla',
        imgUrl: 'img/projects/pacman.png',
        publishedAt: new Date(),
        labels: ['Games ',' old school ']
    }]
    return gProjects;
}

function getProjectById(projectId) {
    var project = gProjects.find(function (project) {
        return project.id === projectId;
    })
    return project;
}

function getProjects() {
    return gProjects;
}

