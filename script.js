function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.setAttribute('class', classname);
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

let container = element("div", "container", "", "");
const h1 = element("h1", "text-center", "title", "countries weather");
const row = element("div", "row", "", "");

const result1 = fetch("https://restcountries.com/v3.1/all");
result1
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = `
        <div class="card h-100">
        <div class="card-header">
        <h5 class="card-title text-center">${ele[i].name.common}</h5></div>
        <div class="card-body">
        <img src="${ele[i].flags.png}" text-center class="card-img mx-auto d-block" alt="image">
        <h6 class="card-text text-center">capital:${ele[i].capital}</h6>
        <h6 class="card-text text-center">Region:${ele[i].region}</h6>
        <h6 class="card-text text-center">Country code:${ele[i].car.signs}</h6></div>
        <button class="btn btn-primary mt-3 butn" id="butn">Click for weather</button>
        </div>
        </div>
        `;
      row.append(col);
    
        
    }
  });
//   const button=document.querySelectorAll(".butn");
//   button.addEventListener("click",()=>{
//   const lat = ele[i].latlng[0];
//       const lon = ele[i].latlng[1];
//       const APIkey = "5bd8f9630f3ec400415058e81bc8e83e";
//       const url =
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
//       fetch(url)
//         .then((data) => data.json())
//         .then((weather)=>console.log(weather));
  
//  } )
container.append(row, h1);
document.body.append(container);
