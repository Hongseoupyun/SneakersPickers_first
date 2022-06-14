const LocalStrategy = require('passport-local')
const passport = require('passport');
const db = require('../configs/db.config');

passport.serializeUser((user, done) => {
  done(null, user.email);

})

passport.deserializeUser(async (email, done) => {
  try {
    const result = await db.query(`SELECT * FROM USERS WHERE email = '${email}'`);
    if (result.rows[0]) {
      done(null, result.rows[0])
    }
  } catch(error) {
    done(error, null);
  }
})

passport.use(new LocalStrategy( {usernameField: 'email', passwordField: 'password'},
  async (email, password, done) => {
    console.log("enter passport middleware")
    console.log("email:", email)
    try {
      const result = await db.query(`SELECT * FROM USERS WHERE email = '${email}'`);
      console.log(result.rows[0].password)
      if (!result.rows.length){
        done(null, false)
      } else {
        if (result.rows[0].password === password) {
          done(null, result.rows[0]);
        } else {
          done(null, false)
        }
      }
    } catch (error) {
      done(error, false);
    }
  }
))