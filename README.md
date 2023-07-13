# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on the device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

!['screenshot of advice app']()



### Links

- Solution URL: [GitHub Solution](https://github.com/vashu-kashyap/Advice-App)
- Live Site URL: [Live Site URL](https://64afd180eaf9b7043363ac25--stellar-dango-921793.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- fetch method 
- [React](https://reactjs.org/) - JS library




### What I learned


Creating an advice app using React, the Fetch API, custom CSS, useState, and useEffect hooks has been an enlightening journey. I've learned how to build interactive web applications, fetch data from APIs, and modularize code effectively. The useState hook helped manage the Component state, while the useEffect hook handled side effects seamlessly. Custom CSS allowed me to craft visually appealing UI, enhancing user engagement. This project has honed my React skills and deepened my understanding of essential web development concepts.

Some  code I'm proud of

```html
<div className="advice_card">
      <h1 className="advice-heading">
        Advice <span className="advice_no">{adviceid}</span>
      </h1>
      <p className="advice-para">{advice}</p>
      <div className="divider">
        
      </div>
      <button className="advice-btn" onClick={handleAdvice}>
        <img src="./icon-dice.svg" alt="advice-btn" />
      </button>
    </div>
```
```css
.advice_card .advice-btn:hover{
    box-shadow: 0 0 30px 4px var(--Neon-Green);
}

.advice_card .divider{
    background:url('./pattern-divider-desktop.svg');
    width: 100%;
    height: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

```
```js

  useEffect(() => {
    // Fetch advice when the component first loads
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((result) => {
        const { advice, id } = result.slip;
        setAdvice(advice);
        setAdviceid(`#${id}`);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  const handleAdvice = () => {
    // Fetch advice when the button is clicked
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((result) => {
        const { advice, id } = result.slip;
        setAdvice(advice);
        setAdviceid(`#${id}`);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

```



### Useful resources

- [Chat Gpt](https://chat.openai.com/) - I found ChatGPT to be an incredibly valuable resource throughout my project. With its extensive knowledge and understanding of programming concepts, it provided me with clear explanations and guidance on implementing the Fetch method and use of effect hook. ChatGPT's responses were detailed and tailored to my specific questions, helping me grasp these concepts effectively. Its insights and assistance were instrumental in enhancing my understanding and enabling me to successfully incorporate these features into my app. I'm grateful for the support and knowledge that ChatGPT provided me throughout this journey.



## Author

- Instagram - [@im.vashukashyap](https://www.instagram.com/im.vashukashyap/)
- Frontend Mentor - [vashu-kashyap](https://www.frontendmentor.io/profile/vashu-kashyap)
- Linkedin - [im-vashukashyap](https://www.linkedin.com/in/im-vashukashyap/)

