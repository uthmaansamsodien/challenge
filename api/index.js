const { express, routes } = require("./controller");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandling = require("./middleware/ErrorHandling");
const port = +process.env.PORT || 3024;

// Middleware - APplication level
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
})
  // cookieParser & Router
  // cookieParser should be set before router
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
  extended: false,
  }),
  cookieParser(),
  cors(),
  routes
)

//static
routes.get("^/$|/challenger", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

// Importing error handling middleware
// Handling all errors
app.use(errorHandling);

// Server
app.listen(port, () => {
  console.log(`The server is running on port ${port}💦`);
});
