fetch('https://api.npoint.io/5307d739dbe03bcbb149')
    .then(response => response.json())
    .then(data => {
        displayPosts(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayPosts(posts) {
    const main = document.querySelector('main');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');

        const userIcon = document.createElement('img');
        userIcon.src = 'res/images/user-icon.png';
        userIcon.alt = 'User Profile';
        userIcon.classList.add('post-user-icon');

        const date = document.createElement('date');
        date.classList.add('date');
        date.textContent = post.date;
        const author = document.createElement('author');
        author.classList.add('author');
        author.textContent = post.author;

        postHeader.appendChild(userIcon);
        postHeader.appendChild(date);
        postHeader.appendChild(author);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = post.description;

        postElement.appendChild(postHeader);

        if (post.image) {
            const image = document.createElement('img');
            image.src = post.image;
            image.alt = post.description;
            postElement.appendChild(image);
        }

        postElement.appendChild(description);

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');

        const likeIcon = document.createElement('img');
        likeIcon.src = 'res/images/like-icon.png';
        likeIcon.alt = 'Like Icon';
        likeIcon.classList.add('like-icon');

        likeButton.appendChild(likeIcon);
        postElement.appendChild(likeButton);

        main.appendChild(postElement);
    });
}