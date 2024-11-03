
// DO NOT DELETE
//
// const apiUrl = 'https://api.jsonbin.io/v3/b/67253b11ad19ca34f8c25c05'; 
// const apiKey = '$2a$10$wXa.Ta8C56ufant6EqmftOYhEathflZhA226fFzoCU4LuR0jOFgkO';
//
// fetch(apiUrl, {
//     method: 'GET',
//     headers: {
//         'X-Master-Key': apiKey,
//         'Content-Type': 'application/json'
//     }
// })
//     .then(response => {
//         // console.log("in response")
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // console.log("printing data:")
//         // console.log(data)
//
//         const posts = data.record;
//         // console.log("printing posts:")
//         // console.log(posts)
//         //
//         const postsContainer = document.getElementById('mainPage_centerBox');
//
//         // Iterate over the posts and create HTML elements
//         posts.forEach(post => {
//             const postDiv = document.createElement('div');
//             postDiv.className = 'mainPage_Post';
//
//             // Check if image_data is a valid Base64 string
//             let imageSrc = '';
//             if (post.image_data) {
//                 imageSrc = `data:image/jpeg;base64,${post.image_data}`;
//             }
//
//             // Create HTML for each post
//             postDiv.innerHTML = `
// <div class="mainPage_Post">
// <div class="profilePic-date-container">
// <img class="profilePic" src="assets/Profiilipilt.jpeg" alt="">
// <p class="userName">${post.username}</p>
// <p>${new Date(post.create_time).toLocaleString()}</p>
// </div>
// <p>${post.post_text}</p>
// ${post.image_data ? `<img src="${imageSrc}" alt="Post Image" class="postPic">` : ''}
// <img class="likeButton" src="assets/like.png" alt="">
// </div>
// `;
//
//             // Append the post to the container
//             postsContainer.appendChild(postDiv);
//         });
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
//
//     DO NOT DELETE ABOVE

fetch('data.json')
    .then(response => {
        // console.log("in response")
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const posts = data;
        const postsContainer = document.getElementById('mainPage_centerBox');
        // Iterate over the posts and create HTML elements
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'mainPage_Post';

            // Check if image_data is a valid Base64 string
            let imageSrc = '';
            if (post.image_data) {
                imageSrc = `data:image/jpeg;base64,${post.image_data}`;
            }

            // Create HTML for each post
            postDiv.innerHTML = `
<div class="profilePic-date-container">
    <div class="profileInfo">
        <img class="profilePic" src="assets/Profiilipilt.jpeg" alt="">
        <p class="userName">${post.username}</p>
    </div>
    <p class="theDateAndTime">${new Date(post.create_time).toLocaleString()}</p>
</div>
<p>${post.post_text}</p>
${post.image_data ? `<img src="${imageSrc}" alt="Post Image" class="postPic">` : ''}
<img class="likeButton" src="assets/like.png" alt="">
`;

            // Append the post to the container
            postsContainer.appendChild(postDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

