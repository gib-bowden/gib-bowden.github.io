var productsRequest = new XMLHttpRequest();
	productsRequest.addEventListener("load", importBlog)
	productsRequest.addEventListener("error", logFailedRequest)
	productsRequest.open("GET", "blogs.json")
	productsRequest.send();

function importBlog(){
	blogs = JSON.parse(this.responseText).blogs;
	blogBuilder(blogs)
}

function logFailedRequest(){
	console.log("dis broke")
}

function blogBuilder(blogs) {
	for (blog of blogs) {
		var blogDomString =	    
			`<div id="${blog.cardId}" class="blog-card">
		      	<section class="blog-card-content">
				    <div class="blog-title">
			          	<h4>${blog.title}</h4>
				        <h5>${blog.date}</h5>
				    </div>
				    <div class="blog-text">
				        <p>${blog.entry}</p>
				    </div>
				</section>
			</div>`
	document.getElementById("blog-container").innerHTML += blogDomString;
	} 
}