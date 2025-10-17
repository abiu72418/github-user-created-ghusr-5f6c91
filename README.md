# github-user-created-ghusr-5f6c91

## Summary
This application allows users to fetch the account creation date of a GitHub user by entering their username and an optional personal access token. The creation date is displayed in UTC format.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-user-created-ghusr-5f6c91.git
   cd github-user-created-ghusr-5f6c91
   ```
2. Open `index.html` in your web browser.

## Usage
1. Enter a GitHub username in the input field.
2. Optionally, enter a personal access token if required.
3. Click the 'Fetch Creation Date' button.
4. The account creation date will be displayed below the form.

## Code Explanation
- `index.html`: Contains the HTML structure, including a Bootstrap form for user input and a section to display the creation date.
- `src/app.js`: Handles the form submission, fetches data from the GitHub API, and updates the DOM with the creation date.

## License
This project is licensed under the MIT License. See the LICENSE file for details.