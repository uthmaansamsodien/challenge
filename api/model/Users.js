const db = require("../config");
class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users;
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
  }
  fetchUser(req, res) {
    const query = `
    SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
    FROM Users
    WHERE userID = ${req.params.id}
    `
    db.query(query,
        (err, result) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
  }
  login(req, res) {
  }
   async register(req, res) {
    const {emailAdd, userPass} = req.body
    // Encript password
    data.userPass =hash(data.userPass, 15)
    // Payload
    const user ={
        emailAdd: data.emailAdd,
        userPass: data.userPass
    }
    // Query
    const query = `
    INSERT INTO Users
    SET? `
    db(query, (err)=>{
        if(err) throw err
        res.cookie()
    })
  }
  updateUser(req, res) {
    const query = `
    UPDATE Users
    SET ?
    WHERE userID = ?
    `
    db.query(query,
         [req.body, req.params.id],
         (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Update Complete"
            })
         })
  }
  deleteUser(req, res) {
    const query = `
    DELETE FROM Users
    WHERE userID = ${req.params.id};
    `
    db.query(query, (err)=>{
        if(err) throw err
        res.json({
            status: statusCode,
            msg: "Removal Complete"
        })
    })
  }
}