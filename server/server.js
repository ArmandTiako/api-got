import app from "./app.js";
import { connect } from "./database/db-connect.js";
const port = process.env.PORT || 8080;

app.listen(port, () => {
    connect();
    console.log(`Listening on port ${port}`);
});
