const router = require('express').Router();

const {
    getThoughts,
    getThoughtsById,
    addThoughts,
    updateThought,
    deleteThoughts,
    addReactions,
    deleteReactions
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getThoughts)
    .post(addThoughts)

router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThought)

router
    .route('/:thoughtId/user/:userId')
    .delete(deleteThoughts)

router
    .route('/:thoughtId/reactions')
    .post(addReactions)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReactions)

module.exports = router;

