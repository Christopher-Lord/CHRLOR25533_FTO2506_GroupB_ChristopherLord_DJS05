# DJS05: Show Detail Page with Routing and Navigation

## Project Overview

This project contains a podcast show detail page as part of a larger podcast browsing app. When users select a show from the homepage or listing page, they are taken to a dedicated page that displays all details about that show. The app supports dynamic routing so each show has its own unique URL.

## Setup Instructions

- Make sure you have `Node.js` and `npm` installed
- Open VSCode and clone this repo (`https://github.com/Christopher-Lord/CHRLOR25533_FTO2506_GroupB_ChristopherLord_DJS04.git`)
- After cloning, change your current directory to the newly cloned project folder (`cd repository-name`)
- The `package.json` file in this project contains all required dependencies: Install them using `npm install`
- Once dependencies are installed, start the dev server using `npm run dev`
- Navigate to the given `http://localhost` domain in your browser
- Browse the web page!

## Features

- Fetched podcast data from a given API using `useEffect()`
- Renders podcast cards dynamically
- Uses **React components** to display elements for the podcast cards, podcast grid, filters and search bar
- Allows the user to type in a search bar to find a specific podcast by title
- Allows for filtering the list of podcasts by genre
- Also allows for sorting the list of podcasts by most recent, A-Z or Z-A
- Includes pagination with a **Load More** button, allowing the list of podcasts to be displayed in chunks

## Key Takeaways

### 1. **Modular Design**

- Code is split into small, focused modules.
- Each file has a **single responsibility**, making it easier to understand and maintain.

### 2. **Factory Functions**

- `lookup` Module returns objects that encapsulate logic.
- This promotes **encapsulation** and **reuse**.

  Example:

  ```js
  const genreLookup = createGenreLookup(genresArray);
  genreLookup.getGenreTitlesByIds(genreIds);
  ```

### 3. Abstraction

- Internals (like how date formatting works) are hidden behind clear interfaces.

- Consumers don’t need to know how something works, only what it does.

### 4. SRP (Single Responsibility Principle)

- Each module does one thing:
  - `useFetch.jsx` - creates a custom React hook to fetch data from a given API
  - `PodcastCard.jsx` – creates a React component for a single podcast card
  - `PodcastGrid.jsx` – creates a grid layout to display all podcast cards in an aesthetic way
  - `GenreFilter.jsx` - creates a React component for the genre filter elements
  - `SortFilter.jsx` - creates a React component for the sorting elements
  - `SearchBar.jsx` - creates a React component for the a functioning search bar
  - `PodcastContext.jsx` - Holds all data relating to states, and creates a React context so those states can be used elsewhere 
  - `usePagination.jsx` - creates a custom React hook to enable pagination through a load more button 
  - `lookup.js` – manages data lookups
  - `App.jsx` - creates the main App component to bring all the other components together

### 5. Clear Entry Point

- `main.jsx` acts as the orchestrator, setting up the app and wiring components together.
- This keeps global logic and setup in one place.

---

## Core Objectives

- Implement **dynamic routing** for unique show detail pages.
- Pass the correct show ID via route parameters and use it to **fetch specific show data**.
- Gracefully handle **loading, error, and empty states** during data fetching.
- Display comprehensive show details including title, image, description, genres, and last updated date.
- Preserve previous **filters and search state** when navigating back to the homepage.
- Create an intuitive **season navigation** UI to expand and switch between seasons without excessive scrolling.
- Display episode information clearly with numbering, titles, images, and shortened descriptions.
- Maintain **high code quality** with documentation (JSDoc) and consistent formatting.

---

### API Endpoints

Data can be called via a `fetch` request to the following three endpoints. Note that there is not always a one-to-one mapping between endpoints and actual data structures. Also note that **\*`<ID>`** indicates where the dynamic ID for the requested item should be placed. For example: `[https://podcast-api.netlify.app/genre/3](https://podcast-api.netlify.app/genre/3)`\*

| URL                                          |                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| `https://podcast-api.netlify.app`            | Returns an array of PREVIEW                                                            |
| `https://podcast-api.netlify.app/genre/<ID>` | Returns a GENRE object                                                                 |
| `https://podcast-api.netlify.app/id/<ID>`    | Returns a SHOW object with several SEASON and EPISODE objects directly embedded within |

### Genre Titles

Since genre information is only exposed on `PREVIEW` by means of the specific `GENRE` id, it is recommended that you include the mapping between genre id values and title in your code itself:

| ID  | Title                    |
| --- | ------------------------ |
| 1   | Personal Growth          |
| 2   | Investigative Journalism |
| 3   | History                  |
| 4   | Comedy                   |
| 5   | Entertainment            |
| 6   | Business                 |
| 7   | Fiction                  |
| 8   | News                     |
| 9   | Kids and Family          |

## Deliverables

1. **Homepage / Listing Page**

   - List of shows with clickable links or buttons that navigate to each show's detail page.
   - Filters and search functionality that maintain state when navigating back from detail pages.

2. **Dynamic Show Detail Page**

   - A unique page for each show, accessible via a dynamic route.
   - Fetch and display show details including:
     - Title
     - Large podcast image
     - Description
     - Genre tags
     - Last updated date (formatted)
   - Display loading indicator while fetching data.
   - Display user-friendly error message if fetching fails.
   - Handle empty states gracefully (e.g., show not found).

3. **Season Navigation Component**

   - UI to expand/collapse seasons.
   - Show season title and episode count.
   - List episodes per season including:
     - Episode number
     - Episode title
     - Season image
     - Shortened episode description

4. **State Preservation**

   - Maintain applied filters and search terms when navigating back to the homepage from a show detail page.

5. **Code Quality**

   - Well-structured, modular React components.
   - JSDoc comments for all major functions and modules.
   - Consistent and readable formatting across all files.

6. **Responsive Design**

   - The UI adapts smoothly across different device sizes (mobile, tablet, desktop).

7. **README Documentation**
   - Brief project overview.
   - Instructions for running the project locally.
   - Description of main features and any known limitations.

---
