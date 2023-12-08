<div align="center">

# G.E.C.K.
<img src="https://raw.githubusercontent.com/shanestanley33/geck/main/src/Screenshot%202023-11-30%20at%202.05.01%E2%80%AFPM.png">

### Built By:

**[Shane Stanley](https://www.linkedin.com/in/shane-stanley-059127213/)**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![REACT badge](https://img.shields.io/badge/REACT-blue)

**_Click the following link to be redirected to the live version of the code!_**

## [G.E.C.K.](herroku link placeholder)

### DESCRIPTION: 

G.E.C.K. is a database of all food growing plants and info on how to grow them in a vertical farm environment.

**_A vertical farming and hydroponics growing database_**

## :link: Associated Links:

Click the following link to be redirected to the Wireframe and Design Inspiration for this project! 

[Figma](https://www.figma.com/file/hIQHe1pcJe9WgX77OHx2PE/G.E.C.K.-Wireframe?type=design&node-id=0%3A1&mode=design&t=nZOMCGbNsdRrDrNc-1)

Click the following link to be redirected to the Trello Board to see the user stories implemented in this app! 

[Trello](https://trello.com/b/6XxfTDWT/geck)

Click the following link to be redirected to the ERD Diagram to see the behind the scenes of data entities targeted! 

[Lucid](https://lucid.app/lucidchart/c579852a-edf8-45a5-8f15-3c03da5e7504/edit?viewport_loc=660%2C-909%2C1516%2C1113%2C0_0&invitationId=inv_c449b798-9548-4cc5-84d8-121f9f4d98ed)

### Log in

<img width="1185" src="/Users/shanestanley/code/school_projects/geck/src/Screenshot-login.png">

### Add plant

<img width="1185" src="/Users/shanestanley/code/school_projects/geck/src/Screenshot-addplant.png">

### Main plant page

<img width="1185" src="/Users/shanestanley/code/school_projects/geck/src/Screenshot-mainplantpage.png">

### Update/Edit page

<img width="1185" src="/Users/shanestanley/code/school_projects/geck/src/Screenshot_update:detailpage.png">

## Favorite code snippet
Conditional (ternary) operator
```

export default function AuthPage({ setUser }) {
  const [showSignUpForm, setShowSignUpForm] = useState(true)

  function handleClick() {
    setShowSignUpForm(!showSignUpForm)
  }
  return (
    <main>
      <button onClick={handleClick}> { showSignUpForm ? 'Login' : 'Sign Up' } </button>
      { showSignUpForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
    
    </main>
  );
}

```

## Challenges 
    Deploying the application on Heroku


## Future
- [ ] Mobile/native support
- [ ] Making the main database available to all as a read only.
- [ ] Adding images to add plant page
- [ ] adding an offline mode for users with choppy internet.
- [ ] Integrate an API.
- [ ] Adding comments
- [ ] Expand on the app in regards to suggested equipment, tools, and instructionals on multiple building material methods for infrastructure.
- [ ] Expand on the overall CSS design
- [ ] Refactor code 