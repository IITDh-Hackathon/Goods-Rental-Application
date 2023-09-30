import React from 'react'
import { useState,useContext } from 'react'
import { toast } from 'react-toastify';
import '../../css/AddGoodsCss.css'
import ApiContext from '../../context/api/ApiContext'
import { useNavigate } from 'react-router-dom';

const AddGoods = () => {
    const [item, setitem] = useState({ name: '', description: '', price: 0, quantity: 0, category: '' })
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [invalidfields, setInvalidfields] = useState(false);
    const { addItem } = useContext(ApiContext);
    const navigate = useNavigate();


    const handleOnChange = (e) => {
        setitem({ ...item, [e.target.name]: e.target.value })
    }

    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setImages([...images, selectedImage]);
            setCurrentImage(null);
        }
    };

    const handleImageDelete = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const handleOnSubmit = async (e) => {
        item.images = images;
        const res = await addItem(item);
        const [response, error] = res || [null, true];
        if (isNaN(item.price) || isNaN(item.quantity)) {
            setInvalidfields(true);
            toast.error('Price and Quantity should be numbers');
            return;
        } else {
            setInvalidfields(false);
            console.log(images);
        }
        if (error) {
            toast.error(response.response.data.message);
        }
        else {
            toast.success('Item Added Successfully');
        }
    }
    return (
        <div>
            <div>
                <form className="add-goods-form" onSubmit={handleOnSubmit} >
                    <h2 className="title">Add A New Good</h2>
                    <div className="input-field">
                        <i className="fas fa-shopping-bag"></i>
                        <input type="text" name='name' value={item.name} placeholder="name" onChange={handleOnChange} required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-file-alt"></i>
                        <input type="text" name='description' value={item.description} onChange={handleOnChange} placeholder="Description" required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-dollar-sign"></i>
                        <input type="text" name='price' value={item.price || ''} onChange={handleOnChange} placeholder="Price" required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-cubes"></i>
                        <input type="text" name='quantity' value={item.quantity || ''} onChange={handleOnChange} placeholder="Quantity" required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-tags"></i>
                        <input type="text" name='category' value={item.category} onChange={handleOnChange} placeholder="Category" required />
                    </div>
                        <label htmlFor="imageUpload" className="image-upload-label">
                            {currentImage ? (
                                <>
                                    <img src={currentImage} alt="Uploaded" className="uploaded-image" />
                                    <button
                                        className="delete-image-button"
                                        onClick={() => setCurrentImage(null)}
                                    >
                                        Delete
                                    </button>
                                </>
                            ) : (
                                <>
                                <div className='add-image' >Add Images</div>
                                </>
                            )}
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: "none" }}
                        />
                    <div className="uploaded-images">
                        {images.map((image, index) => (
                            <div key={index} className="uploaded-image-wrapper">
                                <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
                                <button
                                    className="delete-image-button"
                                    onClick={() => handleImageDelete(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    {invalidfields ? <div style={{ color: 'red' }}>Invalid Fields</div> : null}
                    <input type="submit" value="Submit" className="btn solid" />
                </form>
            </div>
        </div>
    )
}

export default AddGoods