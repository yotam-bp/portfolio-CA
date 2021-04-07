console.log('Starting up');

$(function(){
    renderPortfolioProjects()
})

function renderPortfolioProjects() {
    var projects = getProjects()
    var strHtml = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" 
            onclick="renderProject('${project.id}')" href="#portfolioModal">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${project.imgUrl}" alt="">
               </a>
                <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted"></p>
                </div>
             </div>`
    })
    $('#portfolio-projects').html(strHtml);
}

function renderProject(projectId) {
    var project = getProjectById(projectId)
    var currDate =  project.publishedAt.toLocaleDateString();

    var strHtml = ` <h2>${project.name}</h2> <hr>
        <p class="item-intro text-muted">${project.title}</p>
        <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
          dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
          maiores repudiandae, nostrum, reiciendis facere nemo!</p>
        <ul class="list-inline">
        <li>Tags: ${project.labels}</li>
          <li>uploaded: ${currDate}</li>
          </ul>
          <a class="text-dark blockquote mt-8" href="projects/${project.id}/index.html" target="_blank">Try Live</a>`;
    
    $('.modal-body').html(strHtml);
}

function submitEmail(){
    var mailTo = document.querySelector('.input-email').value
    var mailSubject = document.querySelector('.input-subject').value
    var mailMessage = document.querySelector('.input-message').value
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${mailTo}&su=${mailSubject}&body=${mailMessage}`
}
