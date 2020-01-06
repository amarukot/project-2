# Project Overview

## Project Description

Thinking about these:  
Rijks Museum: https://data.rijksmuseum.nl/  
Cocktails: https://www.thecocktaildb.com/api.php

My project description

## Project Links

- GitHub Repo
- Deployment URL

## Wireframes & React Architecture

- Wireframes: https://xd.adobe.com/view/a2a5ffcd-2511-4022-62c4-b83d9e3fc779-d494/

- React Architecture

```
Index.js
  ⎿ App.js
   ⎿ Components
        ⎿ Home.js
            ⎿ About
        ⎿ NavBar.js
        ⎿ Category.js
        ⎿ Details.js
            ⎿ Ingredients.js
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

| Component | Description                         |
| --------- | ----------------------------------- |
| App       | holds layout & heirarchy            |
| Home      | calls API                           |
| NavBar    | navigation                          |
| Category  | results of drinks within a category |

## Time Frames

| Component            | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | -------- | -------------- | ------------- | ----------- |
| Working API Basic    | H        | 2 hrs          | 1.5 hrs       | 1.5 hrs     |
| Creating Components  | H        | 5 hrs          | 1 hr          | --          |
| Navigation           | H        | 3 hrs          | 1 hr          | --          | -- |
| Netlify deployment   | H        | 1 hr           | --            | --          | -- |
| Search functionality | M        | 6 hrs          | --            | --          |
| Filter functionality | L        | 8 hrs          | --            | --          |
| Total                | --       | --             | --            | --          |

## Additional Libraries

## Code Snippet

## Issues and Resolutions

1/6/20
Able to access API data but having trouble with data type and mapping of resulting data.
Was able to fix by specifying key: value pairing of 'drinks'.

Just doing the line of code below was not enough.

```
const [drinks, setDrinks] = useState({});
```

Able to `console.log(drinks.drinks)` but not able to map it out even after using `Object.values(drinks.drinks)` (also made sure what the data type was by doing `typeof`)

Consulted with Carlos and we did not figure out why it was so.

Doing the following fixed it, (but not explain)

```
const [drinks, setDrinks] = useState({ drinks: [] });
```
