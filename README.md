For Front-end Setup:

Just simply download and open the Front-end folder and type "npm install" in git bash terminal then type "npm run dev" to run the front-end task.

For front-end I have tried to implement lazy loading of images where possible and I have used React so that it is simpler to change things in the future and to be able to re-use different components like contact,navbar,footer,etc which are used in many pages of a website.

Here is the front-end link on netlify: https://creative-platypus-896a5f.netlify.app/

For Back-end Setup:

Since we were asked to not use a database the backend is also simple we just have to download it and type "npm install" in git bash terminal then type "nodemon index.js" or "node index.js" to run the backend server.

To make the various API requests I have made use of express and made a seperate controller file which contains all the methods of CRUD that will be invoked to make changes to the data. For the data I have defined a data.js file which contains a object with the dummy data values.

To test the backend Server API I used postman to test the various routes.

For get all Route I did this:

![Get All](./Assets/Screenshot%202025-04-12%20034522.png)

For Specific get Route I did this:

![Get specific](./Assets/Screenshot%202025-04-12%20034737.png)

For Create Route I did this:

![Create new](./Assets/Screenshot%202025-04-12%20034859.png)

For Update/Put route I did this:

![Update specfic](./Assets/Screenshot%202025-04-12%20035047.png)

For Delete route I did this:

![Delete Specific](./Assets/Screenshot%202025-04-12%20035143.png)



