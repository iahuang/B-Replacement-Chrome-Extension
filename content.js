
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};
var emoji = "🅱️ ";
function rb (p) {
  for (var i=0;i<p.length;i++) {
    for (var j=0;j<p[i].childNodes.length;j++) {
      if (p[i].childNodes[j].textContent == null) {
        continue;
      }
      p[i].childNodes[j].textContent = p[i].childNodes[j].textContent.replaceAll("b",emoji).replaceAll("B",emoji);
    }

  }
}
var t = ["p","a","span","h1","h2"];
for (var i=0;i<t.length;i++) {
  rb(document.getElementsByTagName(t[i]));
}
