async function searchShows() {
  const query = document.getElementById("searchInput").value;

  if (!query.trim()) {
    alert("Please enter a movie or show name.");
    return;
  }

  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

  if (!res.ok) {
    alert("Failed to fetch data. Please try again later.");
    return;
  }

  const data = await res.json();
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No results found. Try another search.</p>";
    return;
  }

  data.forEach(item => {
    const show = item.show;

    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    movieDiv.innerHTML = `
      <img src="${show.image?.medium || 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${show.name}">
      <h3>${show.name}</h3>
      <p>${show.rating?.average || 'N/A'} ⭐</p>
    `;

    container.appendChild(movieDiv);
  });
}
