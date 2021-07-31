# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/MaddyUnknown/To-Do-List.github-io)
- Live Site URL: [Add live site URL here](https://maddyunknown.github.io/To-Do-List.github-io/)

## My process

- Started with laying the structure of html with some dummy entries.
- Worked on css for the required theme.
- Worked on making svg animation for the toggle switch instead of chaning the content image.
- Worked on javascript to connect the peices together.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

How svg mask can help in making a section of image transparent for a smooth transition.

The mask can be seperatly transitions to make animations.<br>
**Note:**  The inital position of the mask is important as it turns with respect to the transition of the element on which the mask is applied.

```html
<svg class="toggle-image" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
  <defs>
      <mask id="stripe">
          <rect x="0" y="0" height="26" width="26" fill="white"/>
            <path mask="url(#stripe)" class="moon-circle" fill="black" fill-rule="evenodd" d="M13 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12"/>
      </mask>
  </defs>
      <path mask="url(#stripe)" class="sun-circle" fill="#FFF" fill-rule="evenodd" d="M13 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12"/>
      <path  class="sun-all "fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>
</svg>
```

Also learned how to drag and drop elements using vanila js.

### Continued development

This was my first javascrpit project so, I need to focus on organising the function and event for readability.

## Author

- GitHub - [MaddyUnknown](https://github.com/MaddyUnknown)
- Frontend Mentor - [@MaddyUnknown](https://www.frontendmentor.io/profile/MaddyUnknown)
