let dummy = {
    "name": "Ire Aderinokun",
    "repositories": {
        "nodes": [
            {
                "description": "SSA CDS Extended 2021 Web Capabilities Codelab",
                "name": "cdsx-web-capabilities-codelab",
                "url": "https://github.com/ireade/cdsx-web-capabilities-codelab",
                "updatedAt": "2021-02-13T19:52:25Z",
                "id": "MDEwOlJlcG9zaXRvcnkzMzc1Mzg0ODM=",
                "forkCount": 8,
                "stargazerCount": 5,
                "primaryLanguage": {
                    "name": "CSS",
                    "id": "MDg6TGFuZ3VhZ2UzMDg=",
                    "color": "#563d7c"
                }
            },
            {
                "description": "Blockchain Nanodegree Project 1 -  Create Your Own Private Blockchain",
                "name": "nd1309-private-blockchain",
                "url": "https://github.com/ireade/nd1309-private-blockchain",
                "updatedAt": "2020-12-19T07:53:11Z",
                "id": "MDEwOlJlcG9zaXRvcnkxOTk1MjgxMzI=",
                "forkCount": 3,
                "stargazerCount": 10,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            },
            {
                "description": null,
                "name": "ireaderinokun.com",
                "url": "https://github.com/ireade/ireaderinokun.com",
                "updatedAt": "2021-04-29T20:32:48Z",
                "id": "MDEwOlJlcG9zaXRvcnk0OTYzNzg3MA==",
                "forkCount": 8,
                "stargazerCount": 21,
                "primaryLanguage": {
                    "name": "HTML",
                    "id": "MDg6TGFuZ3VhZ2U0MTc=",
                    "color": "#e34c26"
                }
            },
            {
                "description": null,
                "name": "caniuse-embed-api",
                "url": "https://github.com/ireade/caniuse-embed-api",
                "updatedAt": "2021-01-31T17:35:28Z",
                "id": "MDEwOlJlcG9zaXRvcnkxNTgzNDUzNzE=",
                "forkCount": 1,
                "stargazerCount": 24,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            },
            {
                "description": "📊 Embed realtime data from caniuse.com",
                "name": "caniuse-embed",
                "url": "https://github.com/ireade/caniuse-embed",
                "updatedAt": "2021-05-08T11:41:36Z",
                "id": "MDEwOlJlcG9zaXRvcnk0OTcxNDkwOQ==",
                "forkCount": 14,
                "stargazerCount": 258,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            },
            {
                "description": "Blockchain Nanodegree Project 3 - Ethereum Dapp for Tracking Items through Supply Chain",
                "name": "nd1309-supply-chain",
                "url": "https://github.com/ireade/nd1309-supply-chain",
                "updatedAt": "2021-02-28T15:39:49Z",
                "id": "MDEwOlJlcG9zaXRvcnkyMDMzOTU2NTE=",
                "forkCount": 3,
                "stargazerCount": 13,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            },
            {
                "description": "Blockchain Nanodegree Capstone Project - Real Estate Marketplace",
                "name": "nd1309-real-estate-marketplace",
                "url": "https://github.com/ireade/nd1309-real-estate-marketplace",
                "updatedAt": "2021-05-27T11:29:47Z",
                "id": "MDEwOlJlcG9zaXRvcnkyMDU3MjU2Mjc=",
                "forkCount": 1,
                "stargazerCount": 4,
                "primaryLanguage": {
                    "name": "JavaScript",
                    "id": "MDg6TGFuZ3VhZ2UxNDA=",
                    "color": "#f1e05a"
                }
            }
        ],
        "totalCount": 123
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

let navBtn = document.querySelector("#nav-btn");


// HELPER FUNCTIONS

// replace element
const replaceElement = (newTemplate, { elementParent: elementParent, oldElement: oldElement }, template = true) => {
    let newElement = newTemplate;
    if (template) {
        newElement = document.createRange().createContextualFragment(newTemplate);
    }
    // console.log(elementParent);
    // console.log(oldElement);
    // console.log(newElement);
    oldElement ? elementParent.replaceChild(newElement, oldElement) : null;
}
// return "safe" obj
const safe = (data) => {
    let safeData;
    data ? safeData = data : safeData = { data: null }

    return safeData
}
// custom error handler
const showNotif = ({ status = "err", msg = "Oops.. Something went wrong" }) => {
    let notifBubble = document.querySelector("#notif-bubble");
    let msgTemplate = /*html*/`<span> ${msg} </span>`
    replaceElement(msgTemplate, { elementParent: notifBubble, oldElement: notifBubble.firstElementChild })
    status == "err" ? notifBubble.classList.add("err") : notifBubble.classList.add("success");
    notifBubble.classList.add("active")

    setTimeout(() => {
        notifBubble.classList.remove("active")
        notifBubble.classList.remove(status)
    }, 6000)
}
// parse date
const parseDate = (dateString) => {
    let date = new Date(dateString);
    let currentDate = new Date();

    console.log(date);
    console.log({date: date.valueOf(), currentDate: currentDate.valueOf()});

    let secondsElapsed = currentDate.valueOf() - date.valueOf();
    console.log(secondsElapsed);

    const sec = 1000, min = sec * 60, hr = min * 60, day = hr * 24, wk = day * 7, mon = day * 30, yr = mon * 12
    let inSecs = Math.round(secondsElapsed / sec), inMins = Math.round(secondsElapsed / min), inHrs = Math.round(secondsElapsed / hr), inDays = Math.round(secondsElapsed / day), inWks = Math.round(secondsElapsed / wk), inMons = Math.round(secondsElapsed / mon), inYrs = Math.round(secondsElapsed / yr);
    let months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" 
    ]
    if (secondsElapsed <= min) return `${inSecs} seconds ago`
    if (secondsElapsed <= hr) return `${inMins} ${inMins > 1 ? "minutes ago" : "minute ago"}`
    if (secondsElapsed <= day) return `${inHrs} ${inHrs > 1 ? "hours ago" : "hour ago"}`
    if (secondsElapsed <= mon) return `${inDays > 1 ? `${inDays} days ago` : "yesterday"}`
    // if (secondsElapsed <= mon) return `${inWks > 1 ? `${inWks} weeks ago` : "last week"}`
    if (secondsElapsed <= yr) return `${date.getDate() + " " + months[date.getMonth()]}`
    if (secondsElapsed > yr) return `${date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()}`
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

// nav button function
const toogleNav = (target, activeClass) => {
    target = document.querySelector(target);
    target.classList.toggle(activeClass);
}

navBtn.addEventListener("click", () => { toogleNav("#site-nav", "active") })

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
                    <li class="other" data-content="${data.websiteUrl}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-link" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>
                        <a class="website-url" href="${data.websiteUrl}" target="_blank" rel="noopener noreferrer">
                            ${data.websiteUrl}
                        </a>
                    </li>
                    <li class="other show-md" data-content="${data.org}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-organization" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"/></svg>
                        <span class="org">
                            ${data.org}
                        </span>
                    </li>
                    <li class="other show-md" data-content="${data.location}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-location" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"/></svg>
                        <span class="location">
                            ${data.location}
                        </span>
                    </li>
                    <li class="other show-md" data-content="${data.twitterUsername}">
                        <a class="twitter" href="https://twitter.com/${data.twitterUsername}" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="16" height="16" preserveAspectRatio="xMinYMin" class="icon jam jam-twitter"><path d='M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z' /></svg>
                            ${data.twitterUsername}
                        </a>
                    </li>
                </ul>
                <div class="stats">
                    <a href="#" class="stat followers">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-people" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-icon" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/></svg>
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
    let repos = data.repositories.nodes.reverse();
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
                        <span class="stars" data-content="${repo.stargazerCount}"> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-star" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/></svg>
                            ${repo.stargazerCount}
                        </span>
                        <span class="forks" data-content="${repo.forkCount}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-repo-forked" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
                            ${repo.forkCount}
                        </span>
                        <span class="last-update">Updated ${parseDate(repo.updatedAt)}</span>
                    </div>
                </header>
                <div class="repo__action">
                    <button class="star-btn btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon octicon-star" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/></svg>
                        Star
                    </button>
                </div>
            </li>
        `
        newRepoList.insertAdjacentHTML('afterbegin', repoTemplate);
    });

    // console.log(newRepoList);

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
                            repositories(first: 20, orderBy: {field: PUSHED_AT, direction: DESC}, ownerAffiliations: OWNER) {
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
                showNotif({ status: "success", msg: `Success! ✨  Rendering data for <b>${login}</b>` })

                // get repoCount
                let repoCount = data.repositories.totalCount;
                populateCustom("#repoCount", repoCount);
                let userImg = document.querySelector("#user-img");
                userImg.setAttribute("src", data.avatarUrl)
            })
            .catch(err => {
                console.log(err);
                showNotif({ status: "err", msg: `Unable to fetch data for <b>${login}</b>. Rendering fallback dummy data from our favorite dev` })
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
    // console.log(error);
    // !error.status ? input.value = "ireade" : input.value
});

input.addEventListener("keyup", (e) => {
    if (e.keyCode == "13") {
        e.preventDefault();

        searchBtn.click();
    }
});


document.addEventListener("readystatechange", e => {
    if (e.target.readyState == "complete") {
        // get window params
        let params = new URLSearchParams(window.location.search);
        let username = params.get("username").toLowerCase();

        let error = getUser(username);
    }
})