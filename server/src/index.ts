import { connectdb } from "./db";
import app from "./app";

// Servidor
app.listen(3000, () => {
    console.log("<< Server running at http://localhost:3000 >>");
    });

connectdb();
