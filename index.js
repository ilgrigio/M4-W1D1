// API key
// ti8NIJ2NOCrvucmaATOoyYVIKdtlAicmt4i3tfPP2o9RjMtkIyzUuz47;

const cards = document.createElement("div");

const apiPhotos = "https://api.pexels.com/v1/search?query=nature";
window.onload = () => {
  fetch(apiPhotos, {
    method: "GET",
    headers: {
      Authorization: "ti8NIJ2NOCrvucmaATOoyYVIKdtlAicmt4i3tfPP2o9RjMtkIyzUuz47",
    },
  })
    .then((response) => {
      if (response.ok) {
        //   console.log(response);
        return response.json();
      } else {
        throw response.status;
        // console.log(response);
      }
    })
    .then((data) => {
      console.log(data);
      cards.setAttribute("class", "container");
      document.body.appendChild(cards);
      cards.innerHTML += data.photos
        .map((photo) => {
          return `
                   <div class="card">
                    <img src="${photo.src.medium}" alt="${photo.alt}" />
                     <div class="card-body"> 
                      <h5 class="card-title">${photo.photographer}</h5>
                      <p class="card-text">${photo.alt}</p>
                     </div>
              
                  </div> `;
        })
        .join("");
    })
    .catch((err) => {
      console.error(err);
    });
};
