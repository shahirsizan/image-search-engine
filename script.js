const accessKey = "Pay1MXu3JrPU8hJdYo2SXg2AebsAh2DTwzFcGVO2O1I";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search_result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
	keyword = searchBox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
}

searchBox.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		page = 1;
		searchImages();
	}
});
