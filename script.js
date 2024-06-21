const result = document.getElementById('result');
const btn = document.getElementById('searchbtn');

btn.addEventListener("click", () => {
    let wordInput = document.getElementById('word').value;
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${wordInput}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <div class="wordInput">
                    <h3>${data.name}</h3>
                </div>
                <div class="details">
                    <img src="${data.image ? data.image.medium : 'https://via.placeholder.com/210'}" alt="${data.name}">
                    <p>Language: ${data.language}</p>
                    <p>Type:${data.type}</p>
                </div>
                <div class="summary">${data.summary}</div>`;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't find the Movie Name</h3>`;
        });
});
