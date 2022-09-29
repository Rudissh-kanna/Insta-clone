const postModel = require('../model/postModel');
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images')
    },
    filename: function (req,file,cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

router.post('/posts/add', upload.single("image"), async(req,res) => {
    try {
        const post = await postModel.create({
            image: "/images/" + req.file.filename,
            author: req.body.author,
            location: req.body.location,
            description: req.body.description,
            date: req.body.date
        })
    
        res.redirect('/posts');
    }
    catch (err) {
        res.send(err.message);
    }
})

router.get('/posts', async(req,res) => {
    try {
        const data = await postModel.find().sort({date: -1});
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})



module.exports = router;