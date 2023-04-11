import React from 'react'
import {FcLike } from 'react-icons/fc'

const Card = ({ course }) => {
    return (
        <div>
            <div>
                <img src={course.image.url} alt="" />

                <div>
                    <button>
                        <FcLike></FcLike>
                    </button>
                </div>

                <div>
                    <p>{course.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card