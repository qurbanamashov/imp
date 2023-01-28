import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import "./HomeCard.scss"
function HomeCard() {
    const [post, setPost] = useState([]);
    const [first, setfirst] = useState("")
    function dataGet() {
        axios.get("http://localhost:7676/users").then((response) => {
            setPost(response.data);
        });
    }
    useEffect(() => {
        dataGet()
    }, []);
    function dataDelete(id) {
        axios.delete(`http://localhost:7676/users/${id}`).then(dataGet)
    }
    const artan = () => {
        setPost([...post].sort((a, b) => (a.price > b.price) ? 1 : (b.price > a.price) ? -1 : 0))
    }
    const Azalan = () => {
        setPost([...post].sort((a, b) => (b.price > a.price) ? 1 : (a.price > b.price) ? -1 : 0))
    }
    return (
        <section className='HomeCard'>
            <div className='HomeCard_WIDTH'>
                <h2>PRODUCT OVERVIEW</h2>
                <div className='HomeCard_text'>

                    <ul>
                        <li>All Products</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Bag</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                    </ul>
                    <div className='HomeCard_buttons'>
                        <button onClick={artan}>Azalan</button>
                        <button onClick={Azalan}>Artan</button>
                        <input placeholder='search' onInput={(e) => { setfirst(e.target.value) }} />
                    </div>

                </div>
                <div className='homecard_total'>
                    {
                        post.filter((data) => data.name.toLowerCase().includes(first.toLowerCase())).map((item) =>

                            <div className='card'>
                                <div className='card_img_box'>
                                    <Link to={`/detail/${item._id}`} >
                                        <img src={item.imgurl} />
                                    </Link>
                                </div>
                                <p className='cardname'>{item.name}</p>
                                <p className='cardprice'>${item.price}</p>
                                <button onClick={() => { dataDelete(item._id) }}>delete</button>
                            </div>

                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeCard