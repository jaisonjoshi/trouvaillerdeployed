
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newReview.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CropEasy from '../../../components/crop/CropEasy';
import ClipLoader from "react-spinners/ClipLoader";


const NewReview =({setOpen}) => {
    const [loading, setLoading] = useState(false)
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


    const [photoURL, setPhotoURL] = useState("");
    const [openCrop, setOpenCrop] = useState(false);
    const [imgFiles, setImgFiles] = useState([])
    //const [open, setOpen] = useState(false);
    const [message,setMessage] = useState("");
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
        setFile(file);
        setPhotoURL(URL.createObjectURL(file)); 
        setOpenCrop(true);
       // console.log(imgFiles)
    }
   }


   const size = 1;
    const handleReviewClick = async e => {
        setLoading(true)
        e.preventDefault();
        
        try{
            let url = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            if(file != ""){
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");

                const uploadRes = await axiosInstance.post(
                    "https://api.cloudinary.com/v1_1/difxlqrlc/image/upload",
                data
              );

              url  = uploadRes.data.url;
            }
            
                
            const newReview = {
                ...info,image:url,
            };

           console.log(newReview)
           const res = await axiosInstance.post('/reviews', newReview);
           // console.log("new review has been created")
            setLoading(false)
             navigate('/reviews')
        }

        catch (error) {
            setLoading(false)

           
            if (error.response) {
              // The request was made and the server responded with a status code that falls out of the range of 2xx
              alert('Error creating review. Please fill out all the necessary feilds and try again later.');
             
            } else if (error.request) {    
                alert('Network error! Please try again later.')
            } 
            else{
                alert(error.message + '. Please try again later.');
            }
      
        }

        //
            // catch (error) {
            //    
            //     if(error.response.status==500)
            //     alert('Error creating review. Please fill out all the necessary feild and try again later.');
            //     else{
            //         alert('Network error!.Please try again later');
            //     }
            //   }
 
        
    }

    

    return(
        <div className="new-review">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newreview-body">
            {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
                    <h1>Create a new Review for your service</h1>
                    <div className="new-review-box">
                    <div className="newreviewform-container">
                        <form >
                        <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" onChange={handleImageChange}/>
                                
                                </div>
                            <div className="form-item">
                                <label> Review  <span style={{ color: "red" }}> *</span></label>
                                <textarea type="text" name="" id="reviewnote" onChange={handleChange} required/>
                            
                            </div> 
                            <div className="form-item">
                                <label>Author <span style={{ color: "red" }}> *</span></label>
                                <input type="text" id="author" onChange={handleChange} required/>
                            
                            </div>
                            <div className="form-item">
                                <label>Place <span style={{ color: "red" }}> *</span></label>
                                <input type="text" id="place" onChange={handleChange} required/>
                            
                            </div>
                            
                           
                            <div className="review-form-submit flex items-center gap-4">
                                <button onClick={handleReviewClick}>Create Review</button>
                                {loading && <ClipLoader color='#00ffa5'/>}

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