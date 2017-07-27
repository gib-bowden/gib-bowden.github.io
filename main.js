
//create an array
var blogs = []

//create an object for each blog
var blog1 = {
	cardId: "blog-card-1",
	cardClass: "blog-card",
	contentClass: "blog-card-content",
	titleClass: "blog-title",
	title: "My Blog 1",
	date: "July 23, 2017",
	entryClass: "blog-text",
	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
};

var blog2 = {
	cardId: "blog-card-2",
	cardClass: "blog-card",
	contentClass: "blog-card-content",
	titleClass: "blog-title",
	title: "My Blog 2",
	date: "July 23, 2017",
	entryClass: "blog-text",
	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
};

var blog3 = {
	cardId: "blog-card-3",
	cardClass: "blog-card",
	contentClass: "blog-card-content",
	titleClass: "blog-title",
	title: "My Blog 3",
	date: "July 23, 2017",
	entryClass: "blog-text",
	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
};

var blog4 = {
	cardId: "blog-card-4",
	cardClass: "blog-card",
	contentClass: "blog-card-content",
	titleClass: "blog-title",
	title: "My Blog 4",
	date: "July 23, 2017",
	entryClass: "blog-text",
	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
};

var blog5 = {
	cardId: "blog-card-5",
	cardClass: "blog-card",
	contentClass: "blog-card-content",
	titleClass: "blog-title",
	title: "My Blog 5",
	date: "July 23, 2017",
	entryClass: "blog-text",
	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
};

// insert each blog into the blog array
blogs.push(blog1)
blogs.push(blog2)
blogs.push(blog3)
blogs.push(blog4)
blogs.push(blog5)

//find the DIV all the blogs will go into on blog.html
var blogElement = document.getElementById("blog-container")

//start loop 
for (i = 0; i < blogs.length; i++) {

//set the string and current index variables	 
var	blogDomString = "";
var currentBlog = blogs[i]

//build the HTML
blogDomString +=	    '<div id="'+currentBlog.cardId+'" class="'+currentBlog.cardClass+'">';
blogDomString +=	      '<section class="'+currentBlog.contentClass+'">';
blogDomString +=	        '<div class="'+currentBlog.titleClass+'">';
blogDomString +=	          '<h4>'+currentBlog.title+'</h4>';
blogDomString +=	          '<h5>'+currentBlog.date+'</h5>';
blogDomString +=	        '</div>';
blogDomString +=	        '<div class="'+currentBlog.entryClass+'">';
blogDomString +=	          '<p>'+currentBlog.entry+'</p>';
blogDomString +=	        '</div>';
blogDomString +=	      '</section>';
blogDomString +=     	'</div>';


//insert the built HTML into the DIV on blog.html
blogElement.innerHTML += blogDomString;

}; //end loop