let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  //Create date object
  let d = new Date();
  //Increment the current time by 1 minute (cookie will expire after 1 minute)
  d.setMinutes(2 + d.getMinutes());
  //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
//Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};

/* function readMore() {
  const breakpoint = document.getElementById("break-point");
  const textmore = document.getElementById("read-more");
  const btnreadmore = document.getElementById("btn-readmore");

  if (breakpoint.style.display == "none") {
    breakpoint.style.display = "inline";
    textmore.style.display = "none";
    btnreadmore.innerHTML = "Leia mais";
  }else{
    breakpoint.style.display = "none";
    textmore.style.display = "inline";
    btnreadmore.innerHTML = "Leia menos";
  }
} */

function readMore(data) {
  let breakpoint = document.querySelector(`.content-card[data-card="${data}"] .break-point`);
  let textmore = document.querySelector(`.content-card[data-card="${data}"] .read-more`);
  let btnreadmore = document.querySelector(`.content-card[data-card="${data}"] .btn-readmore`);


  if (breakpoint.style.display === "none") {
    breakpoint.style.display = "inline";
    textmore.style.display = "none";
    btnreadmore.innerHTML = "Leia mais";
  }else{
    breakpoint.style.display = "none";
    textmore.style.display = "inline";
    btnreadmore.innerHTML = "Leia menos";
  }
}

