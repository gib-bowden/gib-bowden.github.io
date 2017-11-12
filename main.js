const blogContainer = $("#blog-container");
const jumboContainerContent = $("#jumbo-container-content");
const jumboDiv = jumboContainerContent.parent();

let blogs = []; 


const getBlogs = () => {
    return new Promise((resolve, reject) => {
        $.ajax(`blogs.json`).then((data) => { 
            if (data !== null) {
                resolve(data.blogs);
            }
        }).catch((err) => {
            reject(err); 
        });
    });
};

getBlogs().then((_blogs) => {
	blogs = _blogs; 
	blogBuilder(blogs); 
}); 



const blogBuilder = (blogs) => {
	let blogContent = "";
	blogs.forEach((blog) => {
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
	});		
	blogContainer.html(blogContent);
}; 


$('#blog-container').on("click", ".blog-card", function (e) {	
	let cardContent = $(this).find(".blog-card-content")
	jumboContainerContent.html(cardContent.html()) ; //insert cardContent HTML into the jumbotron
	jumboDiv.removeClass("hidden"); //remove the hidden class from the jumbotron 
	jumboDiv[0].scrollIntoView(); //convert back to dom element, scroll into view
})


$("#close-jumbo-btn").click(() => {
	jumboDiv.addClass("hidden");
	})

//searchbox event listener for regular keypress
$("#search-box").keypress((e) => {
	filterBlogsOnSearch(e.target.value + e.key);
}); 

//searchbox event listener to account for backspace and enter 
$("#search-box").keydown((e) => {
	if (e.key === "Backspace") {
		filterBlogsOnSearch(e.target.value.slice(0, -1))
	}
	else if (e.key === "Enter") {
		e.preventDefault(); 
		return; 
	}
});

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
		blogContainer.children()[0].click();
	}
	else if (arr.length === 0) {
		jumboDiv.addClass("hidden");
		blogContainer.html() = "No blogs found";
	}
	else {
		jumboDiv.addClass("hidden");
	}
}