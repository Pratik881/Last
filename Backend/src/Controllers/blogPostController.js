const Post=require('../Model/postModel')

//Create Post
exports.createPost=async(req,res)=>{
    try{
        const {title,content}=req.body;
        const post=new Post({title,content});
        await post.save();
        res.status(201).json(post)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

//read all post
exports.readAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find({});
        res.json(posts);

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

//GeT a single post by Id
exports.getPostById=async(req,res)=>{
    try{
        
        const id=req.params.blogId
        const post=await Post.findById(id);
        if(!post){
            return res.status(404).json({message:'Post not Found'})
        }
        res.json(post)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

//update a post by id
exports.updatePost=async(req,res)=>{
    try{
        const{title,content}=req.body;
        const id=req.params.blogId
        const post=await Post.findByIdAndUpdate(id,{title,content})
    
    if(!post){
        res.status(404).json({message:'Post not found'})
    }
    res.json(post)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

//delete a post by id
exports.deletePost=async(req,res)=>{
    try{
        const post=await Post.findByIdAndDelete(req.params.blogId);
        if(!post){
            return res.status(400).json({message:'post not found'})
        }
        res.json({message:'post deleted successfully'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}