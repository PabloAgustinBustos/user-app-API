const app = require("./app")
const { PORT } = require("./env")

app.listen(PORT, () => console.log(`listening on port ${PORT}`))