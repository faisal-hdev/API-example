const loadUser = () => {
  fetch("https://randomuser.me/api/?results=12")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  const usersContainer = document.getElementById("user-container");

  for (const user of users) {
    console.log(user);
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
        <h4>User Name : ${user.name.first} ${user.name.last} </h4>
        <img src="${user.picture.medium}" alt="">
        <p>Email : ${user.email}</p>
        <p>User location : ${user.location.city} ${user.location.country}</p>
      `;
    usersContainer.appendChild(userDiv);
  }
};

loadUser();
