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
    // ---------------------------------------------------------------------------------------

const container = document.querySelector(".container");
const main = document.querySelector("main")


const setRate = function(n) {
  let fill = '<i class="fa-regular fa-star"></i>'
  let stroke = '<i class="fa-solid fa-star"></i>'
  let rate = ""; let cnt = 10;
  for (let i = 0; i < cnt; i++) {
     
      if (i > n) {rate += fill}
      else {rate += stroke}
  }
  return rate;
}


function viewCards(info){
    for (let i = 0; i<info.length; i++){
        const div = document.createElement("div");
        
        div.innerHTML = `
    <div class="card__cat">
    <div class="img__cat"><img src="imgcats/${i}.jpg" class="img__cat"></div>
    
        <div class="rating__cat">${setRate(info[i].rate)}</div>
        <div class="name__cat">${info[i].name}</div>
    </div>`
        container.append(div)
    }
    
}
viewCards(info)



