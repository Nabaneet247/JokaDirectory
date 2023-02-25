var env = {};
if (window) {
  Object.assign(env, window.__env);
}

function authenticate() {
  var token = window.localStorage.getItem("joka_auth_token");
  if (token && token !== "null") {
    var formData = new URLSearchParams();
    formData.append("access_token", token);
    fetch(`${env.apiUrl}/auth/verifyAccessToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        joka_auth_token: token,
      },
      body: formData.toString(),
    })
      .then(function (response) {
        /* console.log(response);
        if (response) {
          console.log(Object.keys(response));
          console.log(response.status);
          console.log(response.body);
          console.log(response.json());
        }
        console.log(JSON.stringify(response)); */
        // response.json();
      })
      .then(function (body) {
        console.log(body);
        if (body && body.error) {
          console.log("Cleared local joka_auth_token!!!");
          localStorage.removeItem("joka_auth_token");
          window.open(`${env.loginPageRedirectUrl}${window.location.href}`, "_self");
        } else {
          console.log("User session verified");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.log("Cleared local joka_auth_token!!!");
    localStorage.removeItem("joka_auth_token");
    window.open(`${env.loginPageRedirectUrl}${window.location.href}`, "_self");
  }
}

function addLogout() {
  var logoutDiv = document.getElementById("logout");
  if (logoutDiv) {
    let htmlString = `
         <button id="logoutButton" class="logout-button">Logout</button>
         `;

    let cssString = `
          .logout-button {
              background-color: #00000030;
              border: none;
              color: white;
              padding: 5px 10px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 15px;
          }
         `;

    let head = document.querySelector("head");
    let style = document.createElement("style");
    style.innerHTML = cssString;
    head.appendChild(style);
    logoutDiv.innerHTML = htmlString;
    document.getElementById("logoutButton").addEventListener("click", function () {
      var token = window.localStorage.getItem("joka_auth_token");
      if (token && token !== "null") {
        let logoutURL = `${env.apiUrl}/auth/logout`;
        fetch(logoutURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            joka_auth_token: token,
          },
        })
          .then(function () {
            console.log("Cleared local joka_auth_token!!!");
            localStorage.removeItem("joka_auth_token");
            // window.open(`${env.loginPageRedirectUrl}${window.location.href}`, "_self");
            window.open(`${env.jokaLifeUrl}`, "_self");
          })
          .catch(function (err) {
            console.error(err);
          });
      } else {
        console.log("Cleared local joka_auth_token!!!");
        localStorage.removeItem("joka_auth_token");
        window.open(`${env.jokaLifeUrl}`, "_self");
      }
    });
  }
}

authenticate();
addLogout();
