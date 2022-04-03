const express = require('express')
const path = require('path')

const app = express()
app.use('/', express.static(path.join(__dirname, 'website')))

app.listen(9999, () => {
	console.log('Server up at 9999')
})