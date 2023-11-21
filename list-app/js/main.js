fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())

    .then(data => {
        const users = data.map(user => ({
            name: user.name,
            userName: user.username
        }));

        let sortedUsers;
        let sortDirection;
        const showUsers = (usersToShow) => {
            const $usersList = document.getElementById('users-list');
            $usersList.innerHTML='';
            usersToShow.forEach(user => {
                $usersList.innerHTML += `
                <li>
                <h2>${user.name}</h2>
                <h3><span class="grey">nazwa:</span> ${user.userName}</h3>
                </li>
                `;   
            });
        }
        
        const sortingUserName = (sortDirection) => {
            if (sortDirection === 'up') {
                sortedUsers = users.sort((a, b) => {
                    const nameA = a.userName.toLowerCase();
                    const nameB = b.userName.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                });
                showUsers(sortedUsers);
               // sortDirection = 'up';
            }

            if (sortDirection === 'down') {
                sortedUsers = users.sort((b, a) => {
                    const nameA = a.userName.toLowerCase();
                    const nameB = b.userName.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                });
                showUsers(sortedUsers);
               // sortDirection = 'down';
            }

        }

        document.getElementById('search-form').addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const findUsername = formData.get('username');

            if(!findUsername){
                showUsers(users);
                return;
            }
            const foundUsers = users.filter(user => user.userName.toLowerCase().includes(findUsername.toLocaleLowerCase()));
            showUsers(foundUsers);
        });

        

        document.getElementById('sort-form').addEventListener('change', e => {
            e.preventDefault();

            const selectElement = document.querySelector('#sorting-options');
            sortDirection = selectElement.value;
            sortingUserName(sortDirection);

        });

        showUsers(users);
        
    })
    .catch(error => console.error(error));