const portfolio = require('portfolio')

portfolio.connect(process.env.DATABASE_URI, { ......db...db...db...db...db...
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = portfolio.connection

db.on('connected', function () {
	console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', function (error) {
	console.log(error)
})
