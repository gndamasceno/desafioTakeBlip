const customExpress = require('./config/customExpress.js')
const PORT = process.env.PORT || 5000
const app = customExpress()

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


