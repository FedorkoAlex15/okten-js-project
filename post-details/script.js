const url = new URL(location)
const JSONPost = url.searchParams.get('post')

const post = JSON.parse(JSONPost)

const postsDetailsBlock = document.querySelector('.posts-Details')
// const postDetailsBlock = document.createElement('div');
const postBox = document.createElement('div');
const commentsOfPost = document.createElement('div')
const titleComment = document.createElement('h2')
titleComment.innerText = 'Comments'

commentsOfPost.classList.add('commentsOfPost');





// postDetailsBlock.classList.add('post-Details');

postBox.classList.add('postBox')

postBox.innerText =
    `
    UserId: ${post.userId},
    id: ${post.id},
    title: ${post.title},
    body: ${post.body}
    `


fetch(` https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`)
    .then(value => value.json())
    .then(value => {
        for (let comment of value){
         const commentOfPost = document.createElement('div')
            commentOfPost.classList.add('commentOfPost');
            commentOfPost.innerText = comment.body

            commentsOfPost.append(commentOfPost);
        }


    })

// postDetailsBlock.append(postBox, titleComment, commentsOfPost)
// postsDetailsBlock.append(postDetailsBlock)


postsDetailsBlock.append(postBox, titleComment, commentsOfPost)

