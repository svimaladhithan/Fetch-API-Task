function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.setAttribute("class", classname);
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
        <div class="img-box">
        <img src="${ele[i].flags.png}" class="card-img-top" alt="country image">
        </div>
        <div class="card=body">
        <div class="card-text text-center">capital:${ele[i].capital}</div>
        <div class="card-text text-center">Region:${ele[i].region}</div>
        <div class="card-text text-center">Country code:${ele[i].car.signs}</div>
        <button class="btn btn-primary">Click for weather</button>
        </div>
        </div>
        `;
      row.append(col);
    }

    let button = document.querySelectorAll("button");
    button.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let latlng = result1[index].latlng;
        let lat = latlng[0];
        let lon = latlng[1];

        let weather = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bd8f9630f3ec400415058e81bc8e83e`
        );

        weather
          .then((data) => data.json())
          .then((weather) => {
            alert(`weather of ${result1[index].name.common} is `);
          });
      });
    });
  });

container.append(row, h1);
document.body.append(container);
