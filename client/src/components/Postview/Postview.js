import './post-view.css';
import Header from "../header/header";


const PostView = (props) => {

const imageUrl = "https://insta-clone-rk-10x.herokuapp.com"

let printDate = (str) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let arr = str.split("-")
    let date = arr[2].split("T")[0];

    const newDate = new Date(arr[0],arr[1],date);

    return (
        `${newDate.getDate()} ${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`
    )
}
    return (
        <>
        <Header/>
        <div className="posts-container">
        {props.Data.map((data) =>{
             return (<div className="post-container" key={data._id} >
                <div id="header-content">
                <div>
                    <b>{data.author}</b>
                    <br/>
                    <p>{data.location}</p>
                </div>
                <span id="space"></span>
                <i className="fa-solid fa-ellipsis"></i>
                </div>
                <div id="main-content">
                    <img src={`${imageUrl}${data.image}`} alt="post"/>
                </div>
                <div id="footer-content">
                <div className="likes-container">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-send"></i>
                    <span id="space"></span>
                    <span>{printDate(data.date)}</span>
                </div>
                <p id="likes">{data.likes} likes</p>
                <p>{data.description}</p>
                </div>
             </div>)
})}
     </div>
       </>
    )

}

export default PostView;