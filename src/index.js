
import app from "./app.js"


app.listen(process.env.PORT, process.env.HOST_LISTEN, () => {
    console.log(`>>>> Server on port ${process.env.PORT}`);
})


