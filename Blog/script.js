var blog = [
  new Blog("Got the new cube I ordered. It is real pearl.", new Date("08/14/2008")),
  new Blog("Solved the new cube but now I am bored and shopping for a new one.", new Date("08/19/2008")),
  new Blog("Managed to get a beadache toiling over the new cube.", new Date("08/16/2008")),
  new Blog("Mer up with some fellow cubers to discuss the prospect of a 7x7x7 cube. Mixed feelings.", new Date("08/29/2008")),
  new Blog("Found a 7x7x7 cube fo sale online. Yikes! That one could be a beast.", new Date("08/21/2008"))
];

function Blog(body, date) {
  this.body = body;
  this.date = date;
}

Blog.prototype.toString = function() {
  return "[" + (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" +
    this.date.getFullYear() + "] " + this.body;
};

Blog.prototype.toHTML = function(highlight) {
  var blogHTML = "";
  blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";
  blogHTML += "<strong>" + (this.date.getMonth() +1) + "/" +
    this.date.getDate() + "/" + this.date.getFullYear() + "</strong><br />" +
    this.body + "<br /><em>" + this.signature + "</em></p>";
  return blogHTML;
};

Blog.prototype.containsText = function(text) {
  return ((this.body.toLowerCase().indexOf(text.toLowerCase()) != -1 ));
};

Blog.prototype.signature = "Vlc";

function showBlog(numEntries) {
  blog.sort(function(blog1, blog2) { return blog2.date - blog.date; });

  if ( !numEntries )
    numEntries = blog.length;
  
  var i = 0, blogListHTML = "";
  while ( i < blog.length && i < numEntries ) {
    blogListHTML += blog[i].toHTML(i % 2 == 0);
    i++;
  }
  document.getElementById("blog").innerHTML = blogListHTML;
}

function searchBlog() {
  var searchText = document.getElementById("searchtext").value;

  for ( var i = 0; i < blog.length; i++ ) {
    if ( blog[i].containsText(searchText) ) {
      alert(blog[i]);
    break;
    }
  }
  if ( i == blog.length )
    alert("Sorry, there are no blog entries containing the search text.");
}

function randomBlog() {
  var i = Math.floor(Math.random() * blog.length);
  alert(blog[i]);
}

function getDaysBetween(date1, date2) {
  var DaysBetween = (date2 - date1) / (1000 * 60 * 60 * 24);
  return Math.round(DaysBetween);
}

function compare(blog1, blog2) {
  return blog2.date - blog1.date;
}

blog.sort(function(blog1,blog2) {return blog2.date - blog1.date;});