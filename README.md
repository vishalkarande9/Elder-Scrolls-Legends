# Elder-Scrolls-Legends

# Install node modules
$ npm install 

# Start the Application
$ npm run start

# Features
The Features provided in the application are as follows:

- Show results in a card grid format with responsive layout.
- Display a loading indicator when  communicating with the API.
- Initially, fetch and display the first 20 results returned by the API.
- Infinitely scroll to handle on-demand data-fetching and display 20 new cards.
- Allow the user to search for cards by Name.

In addition to the above features, below are some additional feature:
- Used custom hooks (useCardSearch) to extract component logic into reusable functions. 
- Used Debouncing to limit fetching apis for every key store in search bar.
- Maintained a separate configuration file constants.js (Having a separate configuration file allows you to access variables instantly and improves the maintainability of the codebase since all the variables are in the same file. The core application will remain intact, and you can deploy to different servers with different configurations quickly).


### Technology and boilerplate

- React.
- React Hooks.
- HTML.
- CSS.
- Axios.
