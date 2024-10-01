import { connectdb } from "./db";
import app from "./app";

// Server
app.listen(3000, () => {
    console.log("<< Server running at http://localhost:3000 >>");
    });

connectdb();
