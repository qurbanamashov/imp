import React, { useEffect, useState, } from 'react'
import { Link, useParams  } from 'react-router-dom';
import axios from "axios"
import "./DeteilComp.scss"
function DeteilComp() {
    const [post, setPost] = useState([]);
    let { id } = useParams();
    function dataGet() {
        axios.get(`http://localhost:7676/users/${id}`).then((response) => {
            setPost(response.data);
        });
    }
    useEffect(() => {
        dataGet()
    }, []);
    return (
        <section className='deteilsectoin'>
            <div className='deteil_width'>
                
                    
                        <div className='deteil_width_box'>
                            <div className='deteil_img'>
                                <img src={post.imgurl} />
                            </div>
                            <div className='deteil_text'>
                                <span>{post.name}</span>
                                <span>${post.price}</span>
                                <Link to={'/'}>   <button>home go</button> </Link>
                            </div>
                        </div>

                    
                

            </div>
        </section>

    )
}

export default DeteilComp