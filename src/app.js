document.addEventListener('DOMContentLoaded', function() {
    const cachedUser = localStorage.getItem('github-user-ghusr-5f6c9');
    if (cachedUser) {
        const data = JSON.parse(cachedUser);
        document.querySelector('#github-created-at').textContent = data.createdAt;
        document.querySelector('#github-account-age').textContent = data.accountAge;
    }
});

document.querySelector('#github-user-ghusr-5f6c9').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const token = document.querySelector('#token').value;
    const url = `https://api.github.com/users/${username}` + (token ? `?token=${token}` : '');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const createdAt = new Date(data.created_at);
            const createdAtString = createdAt.toISOString().split('T')[0];
            document.querySelector('#github-created-at').textContent = createdAtString;
            const accountAge = new Date().getFullYear() - createdAt.getFullYear();
            document.querySelector('#github-account-age').textContent = accountAge + ' years';
            document.querySelector('#github-status').textContent = 'Lookup successful!';
            localStorage.setItem('github-user-ghusr-5f6c9', JSON.stringify({ createdAt: createdAtString, accountAge: accountAge + ' years' }));
        })
        .catch(error => {
            document.querySelector('#github-created-at').textContent = 'Error fetching data';
            document.querySelector('#github-status').textContent = 'Lookup failed!';
            console.error('There was a problem with the fetch operation:', error);
        });
});