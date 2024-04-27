function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

let container = element("div", "container", "", "");
const h1 = element("h1", "text-center", "title", "countries weather");
const row = element("div", "row", "", "");

const result = fetch("https://restcountries.com/v3.1/all");
result
  .then((data) => data.json())
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = `
          <div class="card h-100">
          <div class="card-header">
          <h5 class="card-title text-center">${result[i].name.common}</h5></div>
          <div class="img-box">
          <img src="${result[i].flags.png}" class="card-img-top" alt="country image">
          </div>
          <div class="card-body">
          <div class="card-text text-center">Region:${result[i].region}</div>
          <div class="card-text text-center">capital:${result[i].capital}</div>
          <div class="card-text text-center">Country code:${result[i].car.signs}</div>
          <button class="btn btn-primary">Click for weather</button>
          </div>
          </div>
          `;
      row.append(col);
    }

    let button = document.querySelectorAll("button");
    button.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let latlng = result[index].latlng;
        let lat = latlng[0];
        let lon = latlng[1];

        let weather = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=800e6e2d15cb7dffab16ce90e76f6989`
        );

        weather
          .then((data1) => data1.json())
          .then((res) => {
            alert(
              `weather of ${result[index].name.common} is ${Math.floor(
                res.main.temp
              )}🌡c`
            );
          });
      });
    });
  });

container.append(row);
document.body.append(h1, container);