const app = require('express');
const router = app.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
} = require('../controllers/userController');

router.use((req, res, next) => {
  console.log(
    new Date(Date.now()).toLocaleTimeString()
      + ': Executing method '
      + req.method
      + ' on '
      + req.originalUrl,
  );
  next();
});

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUserById);

module.exports = router;