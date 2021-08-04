const usersBlock = document.querySelector('.users-block')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {


        for (const user of value) {
            let userBlock = document.createElement('div')
            userBlock.classList.add('userBlock');

            let h2User = document.createElement('h2');
            h2User.innerText = `${user.id} - ${user.name}`
            let link = document.createElement('a');
            link.innerText = 'Get user details';
            link.href = `user-details/index.html?user=${JSON.stringify(user)}`

            userBlock.append(h2User, link)
            usersBlock.appendChild(userBlock)

        }
    })

document.body.append(usersBlock)

