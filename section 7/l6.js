app.set('view engine', 'hbs')
app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Andrew Mead'
    })
   })
   const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)