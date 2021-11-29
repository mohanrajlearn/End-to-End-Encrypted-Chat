# end-to-end-chat-app

A End to End Encryption Chat Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/). 

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the *Cloud* version of [MongoDB](https://docs.mongodb.com/) is used. Real time communication is done using [Socket.io](https://www.npmjs.com/package/socket.io)


For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
- Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html) and [Node JS 15](https://nodejs.org/en/docs/)
- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used

<br/>

<ul>
 <li> This is End to End Encrypted Chat Application </li>
 <li> It is a MERN Stack Application </li>
</ul>

- All the user details, rooms and conversations are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a *free/ shared* account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely** 

<ul>
 <li>Login as well as Logout feature is added </li>
 <li>Error will be shown if the credentials are not correct</li>
</ul>

  - *for simplicity passwords are not encrypted*

<ul>
 <li> Real time communication is supported using <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>
 <li> Rooms with users are supported </li>
 <li> Conversation of a specific rooms will be shown on clicking the corresponding room</li>  
</ul>

  - *for mobile screen user can go to the rooms page by clicking the `<-` icon at the end of the screen*
  - Multiline message can be send by hitting `Ctrl + ENTER`
  - To send a message hit `ENTER` key

<ul>
 <li> Online / Offline status are shown by the <i>violet dot</i> </li>
 <li> Read / Unread status of conversation is supported
 <li> All the conversation are stored in the database i.e. <i>persistant</i>
 <li> All the timestamps are shown in <i>UTC</i> format to taken into cross browser differences
</ul>

## Installation for local machine

Navigate inside the directory:
```
cd end-to-end-chat-app
```
Install all the necessary dependecies
```
npm install

cd end-to-end-chat-app/public
``` 
Now run the frontend server:
```
npm run build

cd end-to-end-chat-app

Now run the backend server:
```
npm run server
```
### Login to chat
---

1. Open `2` different web browser and type`http://localhost:3000` in the address bar to load the application in each of them.
2. In one browser login with username `mohanraj` and password `mohanraj`.
3. In another browser one login with username `sam` and password `sam` and enjoy chatting.
4. Enter your own secret key on input field which is 16 or 24 digits hexadecimal numbers Eg. 61a1f13733ef91579e15b8c7.
5. After succesfull secret key authentication, the one to one conversation will be started.



