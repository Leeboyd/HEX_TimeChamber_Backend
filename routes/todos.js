const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/todos')

router.get('/', Ctrl.listAll)
router.post('/', Ctrl.create)
router.post('/:id', Ctrl.updateById)
router.delete('/:id', Ctrl.removeById)

module.exports = router.routes()