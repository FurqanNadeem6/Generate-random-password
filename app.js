let chr = "asfbhggyfknhvcyeiornhvcd1245567896~!@##$%^&*()_{}";
let length = 12;

function generate() {
  let randPass = "";
  for (let i = 0; i < length; i++) {
    
    let randIndex = Math.floor(Math.random() * chr.length);
    
    randPass += chr.charAt(randIndex);
  }
  return randPass;  
}

let pasElm = document.getElementById("Password");
let btn = document.getElementById("Refresh");

btn.addEventListener("click", () => {
  pasElm.textContent = generate();
});

