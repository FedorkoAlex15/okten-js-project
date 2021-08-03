
const url = new URL(location)
const JSONUser = url.searchParams.get('user')
const user = JSON.parse(JSONUser);

const usersDetailsBlock = document.querySelector('.users-Details')
const userDetailsBlock = document.createElement('div');
const postsBlock = document.createElement('div');

userDetailsBlock.classList.add('user-Details');
postsBlock.classList.add('postsBlock')
userDetailsBlock.innerText = `${user.id} - Name: ${user.name} Username: ${user.username}
Email: ${user.email}
Address: Street ${user.address.street},
suite: ${user.address.suite},
city: ${user.address.city},
zipcode: ${user.address.zipcode},
geo: ${user.address.geo.lat} - ${user.address.geo.lng},
phone: ${user.phone},
website: ${user.website},
company: ${user.company.name},
catchPhrase: ${user.company.catchPhrase},
bs: ${user.company.bs},


`

const DetailsBtn = document.createElement('button')
DetailsBtn.innerText = 'post of current user';
DetailsBtn.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {

            for (const post of value){
                const postBlock = document.createElement('div')
                const link = document.createElement('a')
                postBlock.classList.add('postBlock')
                postBlock.innerText = post.title
                link.innerText = 'post-details'

                link.href = `../post-details/index.html?post=${JSON.stringify(post)}`

                postBlock.append(link)
                postsBlock.append(postBlock)
            }
        })
}

usersDetailsBlock.append(userDetailsBlock, DetailsBtn, postsBlock)


