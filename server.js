const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('index.html', function (req,res) {
  res.send('Hello Dublin!')
})

app.listen(3000, function(){
  console.log('Listening on port 3000')
})
