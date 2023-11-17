document.getElementById("getDataButton").addEventListener("click", function () {
  fetch("https://randomuser.me/api/?results=5") // Отримати 5 користувачів
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;
      const usersDataDiv = document.getElementById("userInfo");

      let usersInformation = "";

      users.forEach((user) => {
        const picture = user.picture.large;
        const country = user.location.country;
        const email = user.email;
        const phone = user.phone;
        const coordinates = `Latitude: ${user.location.coordinates.latitude}, Longitude: ${user.location.coordinates.longitude}`;

        usersInformation += `
          <div class="user-card">
            <p><strong>Picture:</strong> <img src="${picture}" alt="User Picture"></p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Coordinates:</strong> ${coordinates}</p>
            <hr>
          </div>
        `;
      });

      usersDataDiv.innerHTML = usersInformation;
    })
    .catch((error) => console.error("Помилка отримання даних:", error));
});
