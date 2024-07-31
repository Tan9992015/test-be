# IMPLEMTN BACKEND SIMILIAR TO API PROVIDED
 Not 100% but i can do it a bit similar to the one was provided

 ## Set up inviroment 
 instal some libraries: 
 - nodemon 
 - babel
 - joi validate
 - cors
 - express
 - mongoose 

set up in file index.js from folder src
![alt img](/image/indexjssrc.png)

- set up mongoose: connect to mongoDB, creat userModel
- dotenv: config eviroment 
- babelsrc: config babel

## creat api 
i got 2 main api 
- first one: createUser 
- using joi validate to validate information that user fill in form validation we got it from req.body
![alt img](/image/apiCreatUser.png)
after finish form validation without error we go in createUser Service
![alt img](/image/apiCreatUserService.png)
in here we check wheather th email is exist or not if exist we return data with message: 'email đã tồn tại, vui lòng chọn email khác' else we create new User with infomation user provided


-second one: getUser
- in this section i don't have expericens to handle get random user so i make api that  get user base on limit user per page and current page  (limit is similar to result from api that empoyer provided)
![alt img](/image/apiGetAllUser.png)
we got page, limit from req.query

this is how we handle page and limit from req.query
![alt text](/image/apiGetAllUserService.png)

- totalUser is the numbers of Document in database
- limit per page default is 1 but when we got it from req.query it is passed to limit method
- skip is based on math skip = limit * (page-1)
example: when limit is 3 and we want user interface render page 2 we will skip user 1,2,3 and render user 4, skip = 3*(2-1) = 3   
