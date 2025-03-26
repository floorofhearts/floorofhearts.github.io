document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("enable-animation");
    });

    // Add event listener for the search bar
    const searchBar = document.querySelector(".search-bar input");
    searchBar.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const query = searchBar.value.trim(); // Get the search query
            if (query) {
                sessionStorage.setItem('recent-search-query', query);
                window.location.href = `/search.html?search=${encodeURIComponent(query)}`;
            } else if (sessionStorage.getItem('recent-search-query')) {
                window.location.href = `/search.html?search=${encodeURIComponent(sessionStorage.getItem('recent-search-query'))}`;
            }
        }
    });

    // Add event listener for the search button
    const searchButton = document.querySelector(".search-bar button");
    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim(); // Get the search query
        if (query) {
            sessionStorage.setItem('recent-search-query', query);
            window.location.href = `/search.html?search=${encodeURIComponent(query)}`;
        } else if (sessionStorage.getItem('recent-search-query')) {
            window.location.href = `/search.html?search=${encodeURIComponent(sessionStorage.getItem('recent-search-query'))}`;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const filterForm = document.getElementById("filter-form");
    const products = document.querySelectorAll(".product");

    filterForm.addEventListener("change", () => {
        const selectedFilters = Array.from(
            filterForm.querySelectorAll("input[type='checkbox']:checked")
        ).map((checkbox) => checkbox.value);

        products.forEach((product) => {
            const productCategory = product.getAttribute("data-category");
            if (selectedFilters.length === 0 || selectedFilters.includes(productCategory)) {
                product.style.display = "block"; // Show product
            } else {
                product.style.display = "none"; // Hide product
            }
        });
    });
});


