import project from "./project.js";

const introEl = `<div class="welcome-wrapper" id="welcome-wrapper">
<div id="welcome" class="welcome colornfont">
  <h3 class="colornfont name-title">Hi, my name is</h3>
  <h2 class="name">Aryan Baliyan</h2>
  <h2 class="main-span">I built things for web</h2>
</div>
<div id="intro" class="intro colornfont">
  <p class="about" id="about">
    "I'm a Front-end developer. I
    completed my B.TECH from Galgotias University Greater Noida, Uttar
    Pradesh (India). I am proficient in HTML,CSS ,Vanilla JS &
    ReactJs.
    <br />
    I'm passionate about Responsive Design,beautiful interfaces and
    intuitively implemented UX."
    <br />
    <br />
   <h4 class="cgpa"> B.TECH CGPA : 8.4</h4> <br />
    <h3 class="certificates-heading">Certificates :-</h3>
    <span class="certficates"
      >
      <a
        href="https://scrimba.com/certificate/udEnw3HK/gfrontend"
        target="_blank"
        > <span class="certificate-name">Frontend-Developer</span> <br/>https://scrimba.com/certificate/udEnw3HK/gfrontend</a
      >
    </span>

    <span class="certficates"
      >
      <a
        href="https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-d550f9e337"
        target="_blank"
        > <span class="certificate-name">DSA ALGO-EXPERT</span> <br/>https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-d550f9e337</a
      >
    </span>   
  </p>
</div>
</div>`;

let mainEl = document.getElementById("main-container");

let plEl = document.getElementById("project-list");
let boxEl = document.getElementById("welcome-wrapper");

mainEl.addEventListener("click", function (e) {
  if (e.target.dataset.portfolio) {
    boxEl.innerHTML = introEl;
  }
});

plEl.addEventListener("click", function (e) {
  if (e.target.id) {
    boxEl.innerHTML = buildHtml(e.target.id);
  }
});

function buildHtml(ids) {
  const getobj = project.filter(function (projects) {
    return projects.id == ids;
  });
  let save = `
   <div id="topic" class="topic colornfont-projects">

        <div class="topfront">
                <h3 class="colornfont topic-tittle">${getobj[0].name}</h3>
        </div>

        <div class="content-container">
                    <div id="topic-explain" class="topic-explain colornfont">
                            <p class="allabout" id="allabout">
                                        ${getobj[0].description}
                            </p>
                    </div>
                    
                    <div class="link-wrapper">
                                    <a href ="${getobj[0].link}" target= "_blank" class="githublink colornfont bottomlink">Live Site</a>
                                    <a href ="https://github.com/Arryan-n" class = "bottomlink" target="_blank" >Github</a>
                    </div>
       </div>
   </div>    
        `;
  return save;
}
