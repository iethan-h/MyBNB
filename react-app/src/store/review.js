const ADD_REVIEW = '/reviews/ADD_REVIEW'
const GET_ONE_REVIEW = '/reviews/GET_ONE_REVIEW'
const GET_ALL_REVIEWS = '/reviews/GET_ALL_REVIEWS'
const REMOVE_REVIEW = '/reviews/REMOVE_REVIEW'
const EDIT_REVIEW = '/reviews/EDIT_REVIEW'

/*-------------ACTIONS-------------*/

const addReview = review =>({
    type:ADD_REVIEW,
    
    review
})

const getOneReview = review =>({
    type:GET_ONE_REVIEW,
    
    review
})

const getAllReviews = review =>review =>({
    type:GET_ALL_REVIEWS,
    
    review
})

const removeReview = review =>({
    type:REMOVE_REVIEW,
    
    review
})

const editAReview = review =>({
    type:EDIT_REVIEW,
    
    review
})

/*-------------THUNKS-------------*/