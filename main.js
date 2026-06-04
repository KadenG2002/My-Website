// call github api
function fetchRepos() {
    const repoList = document.getElementById('repoList');
    repoList.innerHTML = 'Loading...';


    fetch(`https://api.github.com/users/KadenG2002/repos`)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                repoList.innerHTML = '❌ User not found!';
                return;
            }
                    
            repoList.innerHTML = '';
            data.forEach(repo => {
                const repoItem = document.createElement('li');
                repoItem.classList.add('repo-card');
                repoItem.innerHTML = `
                    <strong>${repo.name}</strong><br>
                    <small>${repo.description || "No description available"}</small><br>
                    <a href="${repo.html_url}" target="_blank">🔗 View on GitHub</a>
                `;
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => {
            repoList.innerHTML = '❌ Error fetching repositories.';
            console.error('Error:', error);
        });
}


//call auto functions
fetchRepos()