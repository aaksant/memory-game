# Memory Game

This is a memory game built using React. The goal in this game is to click the displayed cards, but don't click the same card twice!

## Features

- Levels: Users can select their desired level. Each level has different number of shown cards and rounds.
- Play records: A panel to show user's best score in each level.
- Score and best score: Live users score.
- Anime characters: Each card has popular anime characters.

## Libraries and API

- React: The core library used for building the user interface and managing component state.
- lucide-react: Used for adding icons to the UI.
- Axios: Used to improve data fetching.
- Tailwind CSS: Used to speed up styling.
- react-hot-toast: Used to show a toast if errors happen.
- `localStorage`: Used to save users best scores.
- Jikan: API to fetch poplular anime characters for the cards.

## Struggles

1. I struggled to find the logic of displaing `GameOverModal` and `LevelComplete` modal. Initialy, I only have one state that determines if the game is ended or not, which is the `isPlaying` state. I found it to be difficult since both modals should be rendered when `isPlaying` is false. The trick I used is to create state for each modal.
2. Custom hook is trickier than I thought. The creation of two custom hooks, which are `useFetchCharacters` and `useLocalStorage`, took longer time than I expected. The reason is I think creating a custom hooks are not just extracting parts of a component logic, like a normal refactoring, but it can use more than the extracted block of codes.
3. Error handling in asynchronous processes. I found it hard to implement error handling mainly because a lot of resources is just simply tell us log the error, not actually process that error.
4. Building a good UI.

## Future improvements

- Better UI
- Timer
