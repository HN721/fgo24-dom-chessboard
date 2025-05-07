const div = document.createElement("div");
const catur = document.createElement("table");

for (let i = 0; i < 8; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 8; j++) {
    let td = document.createElement("td");
    if ((i + j) % 2 == 0) {
      td.setAttribute("class", "cell whitecell");
      tr.appendChild(td);
    } else {
      td.setAttribute("class", "cell blackcell");
      tr.appendChild(td);
    }
  }
  catur.appendChild(tr);
}
div.appendChild(catur);
catur.setAttribute("cellspacing", "0");
catur.setAttribute("width", "270px");
document.body.appendChild(div);
