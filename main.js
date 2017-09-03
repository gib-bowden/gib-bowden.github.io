const blogContainer = document.getElementById("blog-container")
const jumboContainerContent = document.getElementById("jumbo-container-content");
const jumboDiv = jumboContainerContent.parentNode;

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
	let blogContent = "";
	for (blog of blogs) {		
		const blogDomString =	    
			`<div id="${blog.cardId}" class="blog-card col-md-3">
		      	<section class="blog-card-content">
				    <div class="blog-title">
			          	<h4>${blog.title}</h4>
				        <h5>${blog.date}</h5>
				    </div>
				    <div class="blog-text">
				        <p class="entry">${blog.entry}</p>
				    </div>
				</section>
			</div>`
		blogContent += blogDomString;
	} 
	blogContainer.innerHTML = blogContent;
}

blogContainer.addEventListener("click", (e) => {	
	let cardContent;
	if (e.target.parentNode.tagName === "BODY") {
		return; 
	}
	else if (e.target.classList.contains("blog-card")) {
		console.log(cardContent = e.target.children[0]);
	}
	else if (e.target.parentNode.classList.contains("blog-card")) {
		console.log(cardContent = e.target);
	}
	else if (e.target.parentNode.parentNode.classList.contains("blog-card")) {
		console.log(cardContent = e.target.parentNode)
	}
	else if (e.target.parentNode.parentNode.parentNode.classList.contains("blog-card")) {
		console.log(cardContent = e.target.parentNode.parentNode);
	}

	jumboContainerContent.innerHTML = cardContent.innerHTML; //insert cardContent HTML into the jumbotron
	jumboContainerContent.parentNode.classList.remove("hidden"); //remove the hidden class from the jumbotron 
	jumboContainerContent.parentNode.scrollIntoView();
})

document.getElementById("close-jumbo-btn").addEventListener("click", () => {
	jumboDiv.classList.add("hidden");
	})

//searchbox event listener for regular keypress
document.getElementById("search-box").addEventListener("keypress", (e) => {
	filterBlogsOnSearch(e.target.value + e.key);
})

//searchbox event listener to account for backspace
document.getElementById("search-box").addEventListener("keydown", (e) => {
	console.log(e)
	if (e.key === "Backspace") {
		filterBlogsOnSearch(e.target.value.slice(0, -1))
	}
})

document.getElementById("search-box").addEventListener("click", () => {
	jumboDiv.classList.add("hidden");
})


const filterBlogsOnSearch = (str) => {
	let filteredBlogs = blogs.filter((blog) => {
		return (blog.entry.indexOf(str) > -1); 
	})
	blogBuilder(filteredBlogs);
}






