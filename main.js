
// //create an array
// var blogs = []

// //create an object for each blog
// var blog1 = {
// 	cardId: "blog-card-1",
// 	title: "My Blog 1",
// 	date: "July 23, 2017",
// 	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
// };

// var blog2 = {
// 	cardId: "blog-card-2",
// 	title: "My Blog 2",
// 	date: "July 23, 2017",
// 	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
// };

// var blog3 = {
// 	cardId: "blog-card-3",
// 	title: "My Blog 3",
// 	date: "July 23, 2017",
// 	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
// };

// var blog4 = {
// 	cardId: "blog-card-4",
// 	title: "My Blog 4",
// 	date: "July 23, 2017",
// 	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
// };

// var blog5 = {
// 	cardId: "blog-card-5",
// 	title: "My Blog 5",
// 	date: "July 23, 2017",
// 	entry: "Instant, kopi-luwak seasonal caramelization siphon foam, and cup mocha whipped qui, barista a rich, plunger pot, in, coffee latte dark ristretto body café au lait. Extraction extra single origin decaffeinated, plunger pot, robust crema aromatic, single shot aromatic grounds doppio aftertaste in id sweet mocha.",
// };

// insert each blog into the blog array
// blogs.push(blog1)
// blogs.push(blog2)
// blogs.push(blog3)
// blogs.push(blog4)
// blogs.push(blog5)

//find the DIV all the blogs will go into on blog.html
var blogElement = document.getElementById("blog-container")
var blogs = [];


//XHR
var productsRequest = new XMLHttpRequest();
	productsRequest.addEventListener("load", importProducts)
	productsRequest.addEventListener("error", logFailedRequest)
	productsRequest.open("GET", "products.json")
	productsRequest.send();

//XHR load functions
function importBlog(){
	products = JSON.parse(this.responseText).blogs;
	importCategories(products)
}

function importCategories(products) {
	var categoriesRequest = new XMLHttpRequest();
		categoriesRequest.addEventListener("load", buildPage)
		categoriesRequest.addEventListener("error", logFailedRequest)
		categoriesRequest.open("GET", "categories.json")
		categoriesRequest.send();

	function buildPage(){
	var	categories = JSON.parse(this.responseText).categories;
		createCombinedProductArr(products, categories); 
		buildDropdownList(categories);
		buildProductsList(products);
	}
}

function logFailedRequest(){
	console.log("dis broke")
}

function blogBuilder(arr) {
	for (blog of blogs) {
		//build the HTML
		var blogDomString +=	    
		`<div id="${blog.cardId}" class="blog-card">;
	      	<section class="blog-card-content">;
			    <div class="blog-title">;
		          	<h4>${blog.title}</h4>;
			        <h5>${blog.date}</h5>;
			    </div>;
			    <div class="blog-text">;
			        <p>${blog.entry}</p>;
			    </div>;
			</section>;
		</div>;`


//insert the built HTML into the DIV on blog.html
blogElement.innerHTML += blogDomString;

}; //end loop
}

