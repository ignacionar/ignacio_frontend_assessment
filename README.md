# Hatchways Frontend Work Simulation

## General Instructions

For this project, you are provided a starting codebase for a React front end and are to build on this starting code by adding new features. The starting code is for the application described in the section below, and you can find your assigned work on the Issues tab of this repository. Please open a **single pull request** with all of the changes needed to implement the features described in the issue, then return to the Hatchways dashboard to mark your assessment as completed.

We will use [this rubric](https://drive.google.com/file/d/1faFe4dn9C-60QIXWdzKvkm6pjHXFJ3pV/view?usp=sharing) to evaluate your submission. Please note that if your submission does not attempt to complete all of the requirements, or does not pass our plagiarism screening, we will be unable to provide feedback on it. Please contact hello@hatchways.io if you have any questions or concerns.

---

# Introduction to this Application

You will be designing front-end components in React for a simple blogging website. The feature set you will be responsible for is creating the blog post component and styling it according to the provided mock-up, working on a pagination component for the blog posts (`src/data/blogs.json`), and ensuring it is mobile responsive.

A blog post has the following structure:

```json
{
  "id": 1,
  "author": "Esmeralda Vanne",
  "title": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "excerpt": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "1634439025000",
  "image": "http://dummyimage.com/200x134.png/cc0000/ffffff",
  "readingTimeMinutes": 9,
  "tags": ["crypto", "health"]
}
```

---

# Emotion

This application leveraged [Emotion](https://emotion.sh/docs/introduction). If you've used Styled-Components before this is nearly identical. If you aren't familiar with Emotion, feel free to spend some time getting up to speed by either going through the introduction or looking at an already created component.

## Theme

We have a theme file created in `src/theme.js`, this file contains our colour palette, breakpoint settings, page wrapper settings, and different text styles. Breakpoints are being done via facepaint. [Read more about it here](https://emotion.sh/docs/media-queries#facepaint)

Some values are arrays, this is corresponding to the breakpoints.

```jsx
{
  breakpoints: [768, 1200],
  page: {
    wrapper: {
      //         768px   1200px
      maxWidth: ["100%", "70%"],
      padding: 20,
    },
  },
}
```

You can access the theme on the props from Emotion.

```jsx
const Component = styled.div`
  display: ${(props) => (props.activated ? "block" : "none")};
`;
```

# Starting components

Currently the starter code gives you some components to work with:

## HatchwaysBlog (Important!)

This component is the general structure of the UI, there is no need to touch this component for the assessment.

## BlogList (Important!)

This is where you will write your logic for rendering our list of blog posts. Feel free to make components as necessary but all your components should be used within this one file.

## Text Component

The text component encompasses all typography on the page. See the Navbar component (`src/components/Navbar.jsx`) for an example of how this is being used in the application.

```jsx
<Text variant="lg">Hatchways Times</Text>
```

You can add CSS props onto the component as well.

```jsx
<Text variant="lg" fontSize="12px">
  Hatchways Times
</Text>
```

One thing to keep in mind is variants are only `xl`, `lg`, `md`, `body`. Body will be for all paragraph tags

## Navbar

This component can be left untouched, the search bar or subscribe button is not important and unrelated to the assessment.

## Search

This component can be left untouched, the search bar is not related to the assessment.

## StickySidebar

This component can be left untouched, the sticky sidebar is not related to the assessment.

## PageWrapper

This component can be left untouched, the page wrapper is not related to the assessment.

---

## System Requirements

The current recommended [Node.js version](https://nodejs.org/en/) is v16

React version is v17.0.2

Emotion version is v11.8.1

---

### Setup

```
yarn install
```

### Lint

```
yarn lint
```

### Development

```
yarn start
```

---

## Testing

Before submitting your assessment **ensure all test cases are passing**. This project uses [Jest](https://jestjs.io/) as the test-runner and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Run the following command to view all the test cases you need to pass.

```
yarn test
```

After spending some time getting an understanding of the expectations from the test cases, start coding to have the test cases pass, once all tests are passing then submit your assessment.

**Todo: Post run down of the test cases here**
