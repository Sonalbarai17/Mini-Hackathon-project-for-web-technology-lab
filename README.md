# Simple Shopping Cart — Web Technology Lab

## Requirements covered
1. Product names, prices, images and Add to Cart buttons.
2. JavaScript click events and DOM manipulation.
3. Product objects stored in arrays; `map()` displays products, `filter()` removes cart items, and `reduce()` calculates total.
4. Product data fetched from the public DummyJSON API: `https://dummyjson.com/products?limit=12`.
5. A separate React + TypeScript implementation is in `react-version/`.
6. Git commands and branch workflow are below.

## Run the vanilla HTML/CSS/JavaScript version
1. Extract the ZIP.
2. Open `index.html` in Chrome or Edge. Internet is needed for API products.
3. Click **Add to Cart**, **Remove**, and **Clear Cart** to test.

## Run the React + TypeScript version
Install Node.js LTS first: https://nodejs.org
```bash
cd react-version
npm install
npm run dev
```
Open the local URL printed in the terminal. To check a production build, run `npm run build`.

## Git and GitHub practical
Run these commands from the project root after installing Git and creating an empty GitHub repository. Replace the URL with your repository URL.

```bash
git init
git add .
git commit -m "Create shopping cart project"
git branch feature/cart-ui
git switch feature/cart-ui
# Make a small change, for example edit README.md
git add .
git commit -m "Add cart UI feature"
git switch main
git merge feature/cart-ui
git remote add origin https://github.com/YOUR-USERNAME/simple-shopping-cart.git
git push -u origin main
git push -u origin feature/cart-ui
```

To demonstrate a separate branch, run:
```bash
git branch
git log --oneline --all --graph
```
For a pull request demonstration: push the feature branch, open the GitHub repository, choose **Compare & pull request**, then create and merge the pull request. If Git created `master` instead of `main`, use `git branch -M main` before pushing.

## Viva points
- **Event:** An action such as clicking a button.
- **DOM:** The Document Object Model; JavaScript uses it to access and update webpage elements.
- **Array of objects:** Stores each product's id, title, price and other details.
- **map():** Transforms array items into displayed product cards.
- **filter():** Creates a new array excluding the selected cart item.
- **reduce():** Combines array values into one result, here the total price.
- **fetch():** Requests product data from the public API.
- **React state:** `useState` stores products and cart data; changing state re-renders the component.
- **TypeScript:** Adds types such as `Product` and `CartItem` to JavaScript data.
