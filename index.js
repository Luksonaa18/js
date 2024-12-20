const text = "hello world";
const container = document.getElementById("container");
// ფუნქცია და სპლიტი რითაც დავყავი "hello world"
text.split("").forEach((letter) => {
  const div = document.createElement("div");
  // შექმნილ დივში დავამატე "letter" კლასი კლას ლისტით
  div.classList.add("letter");
  // აქ ეს კლასი დავამატე შექმნილ დივში
  div.textContent = letter;
  container.appendChild(div);
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.border = "3px solid black";
  div.style.backgroundColor = "red";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.flexDirection = "column";
  //   აქ თუ ნაშთს მივიღებთ 0ს ფერი გვექნება ლურჯი
  if (3 % 3 === 0) {
    div.style.backgroundColor = "blue";
  }
  //   აქ იასამნისფერი
  else if (4 % 3 === 1) {
    div.style.backgroundColor = "purple";
  } else if (5 % 3 === 2) {
    div.style.backgroundColor = "white";
  }
});
