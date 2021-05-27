let dummy = {
    "name": "Ire Aderinokun",
    "repositories": {
        "nodes": [
            {
                "description": "A simple JS and jQuery game of tic tac toe",
                "name": "tictactoe",
                "url": "https://github.com/ireade/tictactoe",
                "updatedAt": "2021-05-23T08:21:20Z",
                "id": "MDEwOlJlcG9zaXRvcnkyNDk4Mzk3MQ==",
                "forkCount": 12,
                "stargazerCount": 14,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            },
            {
                "description": "Testing different meta viewport tags",
                "name": "viewports",
                "url": "https://github.com/ireade/viewports",
                "updatedAt": "2020-07-14T15:46:19Z",
                "id": "MDEwOlJlcG9zaXRvcnkzMjY3MzUwNg==",
                "forkCount": 1,
                "stargazerCount": 3,
                "primaryLanguage": {
                    "name": "HTML",
                    "id": "MDg6TGFuZ3VhZ2U0MTc=",
                    "color": "#e34c26"
                }
            },
            {
                "description": "A small web app made with the Instagram API",
                "name": "tagr",
                "url": "https://github.com/ireade/tagr",
                "updatedAt": "2017-05-06T01:08:59Z",
                "id": "MDEwOlJlcG9zaXRvcnkzMzE0ODk0Mg==",
                "forkCount": 1,
                "stargazerCount": 3,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            },
            {
                "description": "An Instagram based web app that lets you find people you follow that don't follow back",
                "name": "payback",
                "url": "https://github.com/ireade/payback",
                "updatedAt": "2020-01-14T10:56:51Z",
                "id": "MDEwOlJlcG9zaXRvcnkzMzM1Njk1Mg==",
                "forkCount": 0,
                "stargazerCount": 5,
                "primaryLanguage": {
                    "name": "CSS",
                    "id": "MDg6TGFuZ3VhZ2UzMDg=",
                    "color": "#563d7c"
                }
            },
            {
                "description": "Lynda.com course 'Building a Data-Driven App with AngularJS'",
                "name": "angulardata",
                "url": "https://github.com/ireade/angulardata",
                "updatedAt": "2015-04-03T15:17:44Z",
                "id": "MDEwOlJlcG9zaXRvcnkzMzM2MzI3Mg==",
                "forkCount": 0,
                "stargazerCount": 0,
                "primaryLanguage": {
                    "name": "CSS",
                    "id": "MDg6TGFuZ3VhZ2UzMDg=",
                    "color": "#563d7c"
                }
            }
        ],
        "totalCount": 131
    },
    "bio": "Frontend Developer and User Interface Designer",
    "avatarUrl": "https://avatars.githubusercontent.com/u/8677283?s=300&u=e350a331a44b704f86f56dca07ee44f1bc5675bb&v=4",
    "followers": {
        "totalCount": 2585
    },
    "following": {
        "totalCount": 28
    },
    "id": "MDQ6VXNlcjg2NzcyODM=",
    "login": "ireade",
    "url": "https://github.com/ireade",
    "websiteUrl": "https://www.ireaderinokun.com",
    "twitterUsername": "ireaderinokun",
    "starredRepositories": {
        "totalCount": 250
    },
    "company": "BuyCoins",
    "location": "Lagos, Nigeria",
    "status": null
}


// HELPER FUNCTIONS

// replace element
const replaceElement = (newTemplate, { elementParent: elementParent, oldElement: oldElement }, template = true) => {
    let newElement = newTemplate;
    if (template) {
        newElement = document.createRange().createContextualFragment(newTemplate);
    }
    console.log(elementParent);
    console.log(oldElement);
    console.log(newElement);
    oldElement ? elementParent.replaceChild(newElement, oldElement) : null;
}
// return "safe" obj
const safe = (data) => {
    let safeData;
    data ? safeData = data : safeData = { data: null }

    return safeData
}
// custom error handler
const showError = ({status = "err", msg = "Oops.. Something went wrong"})=>{
    let notifBubble = document.querySelector("#notif-bubble");
    let msgTemplate = /*html*/`<span> ${msg} </span>`
    replaceElement(msgTemplate, {elementParent: notifBubble, oldElement: notifBubble.firstElementChild})
    status == "err" ? notifBubble.classList.add("err") : notifBubble.classList.add("success");
    notifBubble.classList.add("active")
    
    setTimeout(()=>{
        notifBubble.classList.remove("active")
        notifBubble.classList.remove(status)
    }, 4000)
}

// GLOBAL TEMPLATES

// loader template
const profileLoader = /*html*/`
    <div id="profile-loader" class="loader">Loading...</div>
`;
const repoLoader = /*html*/`
    <div id="repo-loader" class="loader">Loading... by Olamide ft. Bella Shmurda</div>
`;

// populate custom elements
const populateCustom = (selector, data) => {
    let el = document.querySelector(selector);
    el.textContent = data;
};



// populate profile
const populateProfile = ({ container, loader }, data) => {

    // profile Template
    const profileTemplate = /*html*/`
        <div class="">
            <figure class="profile">
                <div class="profile-img">
                    <img class="img" src="./assets/img/character-mod1-2 (3).png" srcset="${data.avatarUrl}" alt="User avatar">
                </div>
                <div>
                    <h1 class="profile-name" data-content="${data.name}">
                        ${data.name}
                    </h1>
                    <p class="profile-username" data-content="${data.login}">
                        ${data.login}
                    </p>
                </div> 
            </figure>
            <div class="details">
                <p class="profile-description" data-content="${data.bio}">
                    ${data.bio}
                </p>
                <ul class="others">
                    <li class="other" data-content="${data.url}">
                        <a class="website-url" href="${data.url}" target="_blank" rel="noopener noreferrer">
                            ${data.url}
                        </a>
                    </li>
                    <li class="other show-md" data-content="${data.org}">
                        <span class="org">
                            ${data.org}
                        </span>
                    </li>
                    <li class="other show-md" data-content="${data.location}">
                        <span class="location">
                            ${data.location}
                        </span>
                    </li>
                    <li class="other show-md" data-content="${data.twitterUsername}">
                        <a class="twitter" href="#" target="_blank" rel="noopener noreferrer">
                            ${data.twitterUsername}
                        </a>
                    </li>
                </ul>
                <div class="stats">
                    <a href="#" class="stat followers">
                        <span class="txt-bold" data-content="${data.followers.totalCount}">
                            ${data.followers.totalCount}
                        </span>
                        followers
                    </a>
                    ·
                    <a href="#" class="stat following">
                        <span class="txt-bold" data-content="${data.following.totalCount}">
                        ${data.following.totalCount}
                        </span>
                        following
                    </a>
                    ·
                    <a href="#" class="stat stars" data-content="${data.starredRepositories.totalCount}">
                        <span class="txt-bold">
                            ${data.starredRepositories.totalCount}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `;
    // replace element
    replaceElement(profileTemplate, { elementParent: container, oldElement: loader });

};

// populate repos
const populateRepos = ({ container, loader }, data) => {
    let repos = data.repositories.nodes;
    let newRepoList = document.createElement("ul");
    newRepoList.classList.add("repos");

    repos.forEach(repo => {
        // repo template
        const repoTemplate = /*html*/`
            <li id="${repo.id}" class="repo">
                <header class="repo__header">
                    <a href="${repo.url}" target="_blank" rel="noopener noreferrer">
                        <h3 class="repo__name">
                            ${repo.name}
                        </h3>
                    </a>
                    <p class="repo__description" data-content="${repo.description}">
                        ${repo.description}
                    </p>

                    <div class="repo__stats">
                        <span class="language" data-content="${repo.primaryLanguage}">
                            <span class="color" style="background: ${safe(repo.primaryLanguage).color}"></span>
                            ${safe(repo.primaryLanguage).name}
                        </span>
                        <span class="stars"> ${repo.stargazerCount}</span>
                        <span class="forks"> ${repo.forkCount}</span>
                        <span class="last-update">Updated 4 hours ago </span>
                    </div>
                </header>
                <div class="repo__action">
                    <button class="star-btn btn">
                        Star
                    </button>
                </div>
            </li>
        `
        newRepoList.insertAdjacentHTML('afterbegin', repoTemplate);
    });

    console.log(newRepoList);

    // replace repos element
    replaceElement(newRepoList, { elementParent: container, oldElement: loader }, false)
}

// populate Elements
const populateElements = (profileParent, repoParent, data) => {
    // profile
    let profileContainer = document.querySelector(profileParent);
    let profileLoader = profileContainer.querySelector("#profile-loader");

    populateProfile({ container: profileContainer, loader: profileLoader }, data);

    // repo
    let repoContainer = document.querySelector(repoParent);
    let repoLoader = repoContainer.querySelector("#repo-loader");

    populateRepos({ container: repoContainer, loader: repoLoader }, data)
}

// get user info
const getUser = (username) => {
    let error = {
        status: false,
        msg: "It's alright"
    }

    let login = username.trim();
    login == "" ? error = { status: true, msg: "Please enter a valid Username" } : error.status = false;
    console.log(login);

    if (error.status == false) {
        // replace with loaders during fetch
        let profileCont = document.querySelector("#profile-container");
        replaceElement(profileLoader, {
            elementParent: profileCont,
            oldElement: profileCont.firstElementChild
        });
        let repoCont = document.querySelector("#repos-container");
        replaceElement(repoLoader, {
            elementParent: repoCont,
            oldElement: repoCont.firstElementChild
        });


        fetch('https://api.github.com/graphql', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                query: `
                    {
                        user(login: "${login}") {
                            name
                            repositories(first: 5) {
                            nodes {
                                description
                                name
                                url
                                updatedAt
                                id
                                forkCount
                                stargazerCount
                                primaryLanguage {
                                name
                                id
                                color
                                }
                            }
                            totalCount
                            }
                            bio
                            avatarUrl(size: 300)
                            followers {
                            totalCount
                            }
                            following {
                            totalCount
                            }
                            id
                            login
                            url
                            websiteUrl
                            twitterUsername
                            starredRepositories {
                            totalCount
                            }
                            company
                            location
                            status {
                            emoji
                            message
                            }
                        }
                    }
                `
            })
        }).then(res => res.json())
            .then(data => {
                data = data.data.user;
                console.log(data)
                populateElements("#profile-container", "#repos-container", data);
                showError({status: "success", msg: `Success! ✨  Rendering data for ${login}`})

                // get repoCount
                let repoCount = data.repositories.totalCount;
                populateCustom("#repoCount", repoCount);
            })
            .catch(err => {
                console.log(err);
                showError({status: "err", msg: `Unable to fetch data for <b>${login}</b>. Rendering fallback dummy data from our favorite dev`})
                populateElements("#profile-container", "#repos-container", dummy);
                // get repoCount
                let repoCount = dummy.repositories.totalCount;
                populateCustom("#repoCount", repoCount);
            })
    }

    return {
        error
    }
}

const input = document.querySelector("#user-search");
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", (e) => {
    // get input
    let error = getUser(input.value);
    console.log(error);
    !error.status ? input.value = "" : null
});

input.addEventListener("keyup", (e) => {
    if (e.keyCode == "13") {
        e.preventDefault();

        searchBtn.click();
    }
});