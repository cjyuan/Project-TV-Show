function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// Construct the HTML element for each episode
function constructEpisodeElement({name, season, number, image : {medium}, summary}) {

  const episodeCode = `S${season.toString().padStart(2, "0")}E${number.toString().padStart(2, "0")}`;

  const episodeDiv = document.createElement("div");
  episodeDiv.className = "episode";

  // Trade convenience for performance (can be replaced if needed)
  episodeDiv.innerHTML = `
  <div class="epName">${name}<div>
  <div class="epCode">${episodeCode}</div>
  <div class="epImage"><img src="${medium}" alt="Episode image"></div>
  <div class="epSummary">${summary}</div>  
  `;

  return episodeDiv;
}


function makePageForEpisodes(episodeList) {

  const rootEle = document.getElementById("root");

  rootEle.innerHTML = "";

  episodeList.forEach((episode) => {
    rootEle.appendChild(constructEpisodeElement(episode));
  });

}


window.addEventListener("load", setup);
