const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)

router
    // /api/thoughts/<userId>
    .route('/:userId')
    .post(addThought);


// /api/thoughts/<userId>/<ThoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)

//api/thoughts/<thought id>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// /api/thoughts/<userId>(who created thought)/<ThoughtId>/<ReactionId>
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;