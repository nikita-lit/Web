console.log("Hello")

function openPage(page)
{
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
        document.getElementById('content').innerHTML = `<p>Sorry, an error occurred while loading the page.</p>`;
        console.error('Error loading page:', error);
    });
}