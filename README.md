# Goo-App
## A website with my library of simple vanilla javaScript projects. <br />
> Live: https://admiring-aryabhata-bb43d5.netlify.app/
 ## Site contains:
| Games                 | Tools       | 
| :---                  |    :----:   |     
| Aim-Trainer           | To-do       | 
| Space-Invaders        | Notes       | 
| Rock-paper-scissors   | Calculator  | 

 ### Technology stack:
 - HTML, with BEM metodology
 - SCSS
 - JavaScript
 - GSAP
 - Barba.js

## How it's work?
### To-do app:
![image](images/todoimg.JPG) 
The application allows you to add tasks unlimitedly.
<br> Additionally, the user can also 'stick' note's with any content. The sticky note can be later placed anywhere on the screen.
<br> A content that user creates is save in local storage.

---
 ### History of the creation process
 At the beginning I used parcel, and highway.js library, but along the process highway.js turned out that is not the best choice for this project. <br> I gave up this library and tried barba.js
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


