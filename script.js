const accessKey = "Pay1MXu3JrPU8hJdYo2SXg2AebsAh2DTwzFcGVO2O1I";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search_result");
const showMoreBtn = document.getElementById("show-more-btn");

//let keyword = "";
//let page = 1;

async function searchImages() {
	let keyword = searchBox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	const results = data.results;

    if(page == 1){  // If new search, then clear the innerHTML and then proceed.
        searchResult.innerHTML = "";
    }

	results.map((result) => {
		const image = document.createElement("img");
		image.src = result.urls.small;
		const imageLink = document.createElement("a");
		imageLink.href = result.links.html;
		imageLink.target = "_blank";

		imageLink.appendChild(image);
		searchResult.appendChild(imageLink);
	});
	showMoreBtn.style.display = "block";
}

searchBox.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		page = 1;
		searchImages();
	}
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();

})