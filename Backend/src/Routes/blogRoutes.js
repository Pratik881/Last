const express=require('express')
const router=express.Router()
const postController=require('../Controllers/blogPostController')

//creating new post
router.post('/posts',postController.createPost)
//get all posts
router.get('/posts',postController.readAllPosts)
//get a single post by id
router.get('/posts/:blogId',postController.getPostById)
//update a post by id
router.put('/posts/:blogId',postController.updatePost)
//delete  a post by id
router.delete('/posts/:blogId',postController.deletePost)

module.exports=router