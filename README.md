<a name="readme-top"></a>


[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<br />
<div align="center">
  <a href="https://admiring-aryabhata-bb43d5.netlify.app/">
    <img src="img/main-logo-fully.png" alt="Logo" width="250">
  </a>

  <h3 align="center">Website with my library of simple vanilla JavaScript projects.</h3>

  <p align="center">
    <br />
    <a href="https://admiring-aryabhata-bb43d5.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/WiktorW-pl/Goo-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/WiktorW-pl/Goo-App/issues">Request Feature</a>
  </p>
</div>

## About The Project

![Product Name Screen Shot][product-screenshot]

GooApp contains three games, and three tools aplications created in vanilla javaScript.

<br />

| Games                 | Tools       | 
| :---                  |    :----:   |     
| Aim-Trainer           | To-do       | 
| 2048        | Notes       | 
| Rock-paper-scissors   | -  | 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## What i have learned?
1. Using preprocessors (Sass)
2. I got more comfortable with BEM methodology
3. Better understand of core concepts in JavaScript
4. Using local storage (This feature is coming soon!)
5. Basic gsap animations
6. How to deal with third party libraries (I started with highway.js, but now GooApp is using barba.js)
7. How to make e2e test for my aplications (I used cypress here)

<br />
<br />

### Built With

Technologies that I used in this project:

 [![JavaScript][JavaScript]][JavaScript-url]

 [![HTML][html.com]][html-url]

 [![CSS3][css.com]][css-url]

 [![SCSS][sass.com]][sass-url]

 [![Netlify][netlify.com]][netlify-url]

 [![MarkDown][markdown.com]][markdown-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 ### How barba.js is looking in my project?
> https://barba.js.org/

 <br> <br> At this moment redirect animations look's like that: 
 - Enter animation:

```Java Script
   mainAnimation = () => {
    var timeline = gsap.timeline();
    
    timeline.from(".content", {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: .8
    });
    }
```
- Leave animation:
 ```Java Script
    var timeline = gsap.timeline();
    timeline.to(".content", {
        y: 1000, 
        duration: 1
    });
```

## Tests in cypress

I decided to use cypress to do e2e test for every app in my project. 
<br />
<br />
![cypress-raport-screenshot]
 You can find all CI results recorded on the 
<br/> [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/nhnmta/runs/1/overview)
<br/>
https://dashboard.cypress.io/projects/nhnmta/runs/1/overview



<br />

## Getting Started


To get a local copy up and running follow these simple  steps.


1. Clone the repo
   ```sh
   git clone https://github.com/WiktorW-pl/Goo-App
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

Wiktor Woźny - wwwiktorwozny@gmail.com

Project Link: [https://github.com/WiktorW-pl/Goo-App](https://github.com/WiktorW-pl/Goo-App)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



[product-screenshot]: <images/app-img.PNG>
[forks-shield]: https://img.shields.io/github/forks/WiktorW-pl/Goo-App?style=for-the-badge
[forks-url]: https://github.com/WiktorW-pl/Goo-App/network/members
[stars-shield]: https://img.shields.io/github/stars/WiktorW-pl/Goo-App?style=for-the-badge
[stars-url]: https://github.com/WiktorW-pl/Goo-App/stargazers
[issues-shield]: https://img.shields.io/github/issues/WiktorW-pl/Goo-App?style=for-the-badge
[issues-url]: https://github.com/WiktorW-pl/Goo-App/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/wiktor-wo%C5%BAny-562708237/
[product-screenshot]: images/screenshot.png
[cypress-raport-screenshot]: images/cypress-raport-gooapp.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/
[html.com]: 	https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://html.com/
[sass.com]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
[netlify.com]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[netlify-url]: https://www.netlify.com/
[markdown.com]: https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white
[markdown-url]: https://www.markdownguide.org/
[css.com]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS