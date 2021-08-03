
const usersBlock = document.querySelector('.users-block')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {



        // users.map(user => {
        //     let idUser = document.createElement('p');
        //     idUser.innerText = `${user.id}`;
        //
        //     userBlock.appendChild(idUser)
        //     console.log(userBlock)
        //
        // })

        for (const user of users) {
            let userBlock = document.createElement('div')


            userBlock.classList.add('userBlock');


            let h2User = document.createElement('h2');
            let link = document.createElement('a');
            h2User.innerText = `${user.id} - ${user.name}`
            link.innerText = 'Get user details';


            link.href = `user-details/index.html?user=${JSON.stringify(user)}`

            userBlock.append(h2User, link)
            usersBlock.appendChild(userBlock)

        }
    })

document.body.append(usersBlock)

