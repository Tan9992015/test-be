import user from './user'
const routes = (app)=> {
    app.use('/api/user',user)
}
module.exports = routes