const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUsers,
    deleteUsers,
    addFriends,
    deleteFriends
} = require('../../controllers/user-controller');

router.route('/')
    .get(getAllUsers)
    .post(addUser);

router.route('/:userId')
    .get(getUserById)
    .put(updateUsers)
    .delete(deleteUsers);

router.route('/:userId/friends/:friendId')
    .post(addFriends)
    .delete(deleteFriends);

module.exports = router;