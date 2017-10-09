const blogContainer = document.getElementById("blog-container")
const jumboContainerContent = document.getElementById("jumbo-container-content");
const jumboDiv = jumboContainerContent.parentNode;

$.ajax({
	method: 'GET',
	url:`blogs.json`
})
.done((data) => {
	blogBuilder(data.blogs)
})
.fail((error) => {
	console.log(error);
}); 

const blogBuilder = (blogs) => {
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

$('#blog-container').click((e) => {	
	let cardContent;
	if (e.target.parentNode.tagName === "BODY") {
		return; 
	}
	else if (e.target.classList.contains("blog-card")) {
		cardContent = e.target.children[0];
	}
	else if (e.target.parentNode.classList.contains("blog-card")) {
		cardContent = e.target;
	}
	else if (e.target.parentNode.parentNode.classList.contains("blog-card")) {
		cardContent = e.target.parentNode;
	}
	else if (e.target.parentNode.parentNode.parentNode.classList.contains("blog-card")) {
		cardContent = e.target.parentNode.parentNode;
	}

	jumboContainerContent.innerHTML = cardContent.innerHTML; //insert cardContent HTML into the jumbotron
	jumboContainerContent.parentNode.classList.remove("hidden"); //remove the hidden class from the jumbotron 
	jumboContainerContent.parentNode.scrollIntoView();
})

// $('body').on('click', $('.blog-card'), (e) => {
// 	let cardContent = e.target.children[0]; 
// 	let jumbotronContent = $('#jumbo-container-content');
// 	jumbotronContent.html(cardContent.innerHTML).parent().removeClass("hidden"); 
// });

document.getElementById("close-jumbo-btn").addEventListener("click", () => {
	jumboDiv.classList.add("hidden");
	})

//searchbox event listener for regular keypress
document.getElementById("search-box").addEventListener("keypress", (e) => {
	filterBlogsOnSearch(e.target.value + e.key);
})

//searchbox event listener to account for backspace and enter 
document.getElementById("search-box").addEventListener("keydown", (e) => {
	if (e.key === "Backspace") {
		filterBlogsOnSearch(e.target.value.slice(0, -1))
	}
	else if (e.key === "Enter") {
		return; 
	}
})

//filter function - searches blog entries and tags via the findTags function 
const filterBlogsOnSearch = (str) => {
	const filteredBlogs = blogs.filter((blog) => {
		return ((blog.entry.toLowerCase().indexOf(str.toLowerCase()) > -1) || (findTags(blog, str) ))
	})
	blogBuilder(filteredBlogs);
	singleSearchResult(filteredBlogs);
}

//attempts to find the indexOf a given string to each a given arr item, returns true if a match is found
const findTags = (arr, str) => {
	let i = false;
	arr.tags.forEach((tag) => {
		if (tag.toLowerCase().indexOf(str.toLowerCase()) > -1) {
			i = true;	
		}	
	})
	return i; 
}

//displays the jumbotron if one 1 result is found, hides the jumbotron otherwise. Also provides text if no results are found
const singleSearchResult = (arr) => {
	if (arr.length === 1) {
		blogContainer.children[0].click();
	}
	else if (arr.length === 0) {
		jumboDiv.classList.add("hidden");
		blogContainer.innerHTML = "No blogs found";
	}
	else {
		jumboDiv.classList.add("hidden");
	}
}