# Project Overview

## Project Description

Bartender's Guide - A React Website

using API Cocktails: https://www.thecocktaildb.com/api.php

A simple website to help the cocktail enthusiast and party host make a host of different cocktails and drinks. Look though categories or search for a particular drink and get the ingredients and recipe for it.

## Project Links

- GitHub Repo: https://github.com/amarukot/project-2
- Deployment URL:

## Wireframes & React Architecture

- Wireframes: https://xd.adobe.com/view/a2a5ffcd-2511-4022-62c4-b83d9e3fc779-d494/

- React Architecture

```
Index.js
  +-- App.js
   +-- Home.js
   |   +-- About.js
   |   +-- Hero Image
   +-- NavBar.js
   |   +-- Link to Home, About, Category
   |   +-- Search Form
   +-- Category.js
   +-- Details.js
   |   +-- Ingredients.js
   +-- Footer.js
```

## MVP / Post MVP

MVP

- home page with access to nav bar
- nav bar with different categories of drinks
-

Post MVP

- search and filter functions
- A+ styling

## Components

| Component | Description                              |
| --------- | ---------------------------------------- |
| App       | holds layout, links, routes              |
| Home      | holds About and Hero image               |
| NavBar    | navigation links                         |
| Category  | results of drinks within a category      |
|           | category page also calls API             |
| Details   | gets props and displays details of drink |
| Footer    | just footer info                         |

## Time Frames

| Component              | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | -------- | -------------- | ------------- | ----------- |
| Working API Basic      | H        | 2 hrs          | 1.5 hrs       | 1.5 hrs     |
| Creating Components    | H        | 5 hrs          | 2 hrs         | --          |
| Navigation             | H        | 3 hrs          | 2 hrs         | --          |
| Event handling         | H        | 4 hrs          | 1 hr          | --          |
| Netlify deployment     | H        | 1 hr           | --            | --          |
| Search functionality   | M        | 6 hrs          | --            | --          |
| Filter functionality   | L        | 8 hrs          | --            | --          |
| Cleanup code, refactor | M        | 2 hrs          | --            | --          |
| Total                  | --       | 32 hrs         | --            | --          |

## Additional Libraries

## Code Snippet

<details>
<summary> This is one of those code snippets that fixed something that bugged me for a while. Even asking TA's did not yield great results. </summary>

```jsx
if (drinks.drinks && drinks.drinks[0]) {
  randomDrinkImage = drinks.drinks[0].strDrinkThumb;
}
```

Scroll down to [Issues and Resolutions 1/7/20](#1/7/20) for details.

</details>

## Issues and Resolutions

### 1/6/20

Able to access API data but having trouble with data type and mapping of resulting data.
Was able to fix by specifying key: value pairing of 'drinks'.

Just doing the line of code below was not enough.

```jsx
const [drinks, setDrinks] = useState({});
```

Able to `console.log(drinks.drinks)` but not able to map it out even after using `Object.values(drinks.drinks)` (also made sure what the data type was by doing `typeof`)

Consulted with Carlos and we did not figure out why it was so.

Doing the following fixed it, (but not explain)

```jsx
const [drinks, setDrinks] = useState({ drinks: [] });
```

### 1/7/20

Building Home page with a hero image using API for a random drink, I encounted the same issue again, even though I used the same code that supposedly 'fixed' the problem before. Will do some research before using up a token, but I need to understand why this breaks.

```jsx
const [drinks, setDrinks] = useState({ drinks: [] });
useEffect(() => {
  fetch(randURL)
    .then(res => res.json())
    .then(res => setDrinks(res))
    .catch(err => console.log(err));
}, []);
console.log(drinks.drinks[0]);
```

console log above shows `drinks.drinks[0]` as an object that contains these values (and more)

```jsx
idDrink: "14578";
strDrink: "Amaretto Sunrise";
```

but I can't access `drinks.drinks[0].idDrink` -- comes of as  
 `TypeError: Cannot read property 'idDrink' of undefined`

**_UPDATE:_**  
ok, so I think the error is encountered before the API call and breaks the code. Using an IF statement to check type of each property will force to return undefined instead of the uncaught error of 'Cannot read prop of undef'.

```jsx
if (obj.prop1 && obj.prop1.prop2) {
  whatever func
}
```

This skips the uncaught error and you will be able to get to the data you're looking for and assign it to a var.

The weird thing is it worked on Cocktails.js probably because it got called on the map function? IDK, not gonna try and figure that out right now.

I figured this out through some deep digging... proud, but also irritated. Part of dev life I guess.

Onwards...

### 1/8/20

Joe showed me a more elegant way of fixing the API call issue.

```jsx
if (obj.length == 0) {
  return <div>empty</div>;
}
```

This will not return an error, just an empty div while the API is fetched and the data is still empty. You can replace this with a loading image or something. For now, I just used `<div>...LOADING...</div>`

### 1/9/20

Made individual ingredients and measurements to detail page. Minor styling tweaks. Separated css styling to css files.

Deployed to Netlify.
