const app = express();
const router = express.Router();

app.use("/", router);

router.route("/insertdata").post(function(req, res) {
    users.insertMany(
        [
          { username: "testUser" },
          { password: "testPass" },
        ],
});