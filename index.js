const app = require("./app");
app.listen(3000, () => {
  console.log("Started express server at 3000");
});
//install node-localstorage/session
///npm install node-localstorage
/// npm i node-sessionstorage

///install package for this!
//npm install cheerio eslint husky jest lint-staged nodemon prettier sequelize-cli supertest --save-dev
//npm install bcrypt connect-ensure-login connect-flash cookie-parser csurf ejs engine engines express express-session passport passport-local pg sequelize tiny-csrf --save

//create table
//npx sequelize-cli model:generate --name Create_sports --attributes sports_name:STRING,Edit_delete_display:BOOLEAN
//npx sequelize-cli model:generate --name Create_session --attributes session_des:STRING,session_date:date,uploader_id:STRING,sports_title:String,total_players:Integer
//npx sequelize-cli model:generate --name Create_session --attributes session_des:STRING,session_date:dateonly,uploader_id:STRING,sports_title:String,total_players:Integer,time:String
// npx sequelize-cli model:generate --name Players_names --attributes players_name:STRING,sports_name:String,session_id:Integer,total_player:Integer,uploader_id:String,my_name:Integer

//db create
//npx sequelize-cli db:create
//npx sequelize-cli db:migrate
//npm start
