function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });

const container = document.querySelector(".container");
const main = document.querySelector("main")
function viewCards(info){
    for (let i = 0; i<info.length; i++){
        const div = document.createElement("div");
        
        div.innerHTML = `
    <div class="card__cat">
    <div class="img__cat"><img src="imgcats/${i}.jpg" class="img__cat"></div>
    
        <div>${info[i].id}</div>
        <div>${info[i].name}</div>
    </div>`
        main.append(div)
    }
    
}
viewCards(info)

