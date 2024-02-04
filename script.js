// Dummy data
let users = [];
let posts = [];

function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username is unique
    if (!users.find(user => user.username === username)) {
        const user = { username, password };
        users.push(user);
        alert('User signed up successfully!');
        updateUsersList();
    } else {
        alert('Username is already taken. Please choose a different one.');
    }
}

function createPost() {
    const postText = document.getElementById('post-text').value;
    const username = prompt('Enter your username:');

    // Check if the username exists
    const user = users.find(user => user.username === username);
    if (user) {
        const post = { username, text: postText, timestamp: new Date() };
        posts.push(post);
        alert('Post created successfully!');
        updatePostsList();
    } else {
        alert('Invalid username. Please sign up first.');
    }
}

function updateUsersList() {
    const usersList = document.getElementById('users');
    usersList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.username;
        usersList.appendChild(listItem);
    });
}

function updatePostsList() {
    const postsList = document.getElementById('posts');
    postsList.innerHTML = '';

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = `${post.username}: ${post.text} (${post.timestamp})`;
        postsList.appendChild(listItem);
    });
}
