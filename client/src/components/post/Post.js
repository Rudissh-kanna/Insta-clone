import React from 'react';
import { useState } from 'react';
import './Post.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Post = () => {

    const[file_path, setFilePath] = useState(""); 
    const [form, setForm] = useState({});
    const navigate = useNavigate()

    function handleClick(event) {
        event.preventDefault()
        event.target.nextElementSibling.click();
    }

    function handleChange(event) {
        event.preventDefault();
        const filePath = event.target.files[0];
        setFilePath(filePath)
        setForm({...form, image: filePath})
    }

    function handleSubmit(event){
        event.preventDefault();

        let formData = new FormData();

        formData.append('image', form.image);
        formData.append('author', form.author);
        formData.append('location', form.location);
        formData.append('description', form.description);
        formData.append('date', new Date);

        // for(var pair of formData.entries()) {
        //     console.log(pair[0]+', '+pair[1]);
        //   }
        
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post("https://insta-clone-rk-10x.herokuapp.com/posts/add", formData, config)
            .then (res => console.log(res));

        navigate('/posts');
    }   



    return (
        <>
        <h1>Post a Picture!</h1>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='file-container'>
                    <input type="text" value={file_path.name}></input>
                    <button id="file" onClick={handleClick}>Browse</button>
                    <input type="file" name="file-upload" id="hide" onChange={handleChange}></input>
                </div>
                <div className='auth-container'>
                    <input type="text" name="author" placeholder='Author' onChange={(e) => setForm({...form, author: e.target.value})}></input>
                    <input type="text" name="location" placeholder='Location' onChange={(e) => setForm({...form, location: e.target.value})}></input>
                </div>
                <div>
                    <input type="text" name="description" placeholder='Description' onChange={(e) => setForm({...form, description: e.target.value})}></input>
                    <button type='Submit'>Post</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Post;