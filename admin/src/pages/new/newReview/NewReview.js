
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newReview.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const NewReview =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [file, setFile] = useState("")

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleReviewClick = async e => {
        e.preventDefault();
        const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
        try{
            
            const uploadRes = await axiosInstance.post(
                "https://api.cloudinary.com/v1_1/dihrq9pgs/image/upload",
                data
              );

              const  url  = uploadRes.data.url;
                
            const newReview = {
                ...info,image:url,
            };
            console.log(newReview)
            await axiosInstance.post('/reviews', newReview);
            console.log("new review has been created")

             navigate('/reviews')
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-review">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newreview-body">
                    <h1>Create a new Review for your service</h1>
                    <div className="new-review-box">
                    <div className="newreviewform-container">
                        <form >
                        <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" onChange={(e) => setFile(e.target.files[0])}/>
                                
                                </div>
                            <div className="form-item">
                                <label > Review</label>
                                <textarea type="text" name="" id="reviewnote" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Author</label>
                                <input type="text" id="author" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Place</label>
                                <input type="text" id="place" onChange={handleChange}/>
                            
                            </div>
                            
                           
                            <div className="review-form-submit">
                                <button onClick={handleReviewClick}>Create Review</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
                        <div className="review-head">
                        <img src={
                                        file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" />
                        </div>
                        <div className="review-note">
                            <p>{info?info.reviewnote : "lorem ipsum jbjchds dhcbsjb bashkj wcshbk jbajs"}</p>
                        </div>
                        <div className="review-author">
                            <p><b>{info ? info.author: "Author"},</b> {info? info.place: "place"}</p>
                        </div>
                    </div>
                    </div>
            </div>



            
            
        </div>
    )
}

export default NewReview