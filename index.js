directories = [
  '',
  'About',
  'Mission',
  'Contact',
  'Function'
]

var getDirectories = directories;

function createHead() {
  const head = document.getElementById("head");
  var title = document.createElement("Title");
  title.innerHTML = "Smart Dog Collar"
  head.appendChild(title);
}

function createHeader() {
  const header = document.getElementById("header");
  var h1 = document.createElement("h1");
  var nav = document.createElement("nav");
  nav.setAttribute("id", "nav")
  var name = document.createElement("div");
  name.innerHTML = "Smart Dog Collar"
  nav.appendChild(name)
  for (i = 0; i<= getDirectories.length-1; i++) {
    var list = document.createElement("li");
    var item = document.createElement("a");
    item.setAttribute("class", getDirectories[i]);
    if (getDirectories[i] == "") {
      getDirectories[i] = "Home";
      item.setAttribute("href", "/");
    }
    else {
      item.setAttribute("href", "/pages/"+getDirectories[i]+".html");
    }
    item.innerHTML = getDirectories[i];
    list.appendChild(item)
    nav.appendChild(list);
  }
  header.appendChild(h1);
  header.appendChild(nav);
}