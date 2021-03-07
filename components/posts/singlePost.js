import React from 'react'
import Image from 'next/image';

export default function SinglePost({orijentation}) {
    return (
        <>
            <div className="singlePostWidget">
                <Image
                    src="/photos/placeholder.png"
                    alt="placeholder"
                    width="200px"
                    height="100px"
                    
                />
                <div>
                    <h1>Some title</h1>
                    <p>Some dummy text...</p>
                    <div>
                        <span>26.01.2021.</span>
                        <span>arrow</span>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .singlePostWidget{
                        display: flex;
                        flex-direction: ${orijentation==="vertical"? "column": "row"};
                        position: relative;
                        width: 100%;
                        height: 100%;
                        align-content: flex-start;
                        justify-content: flex-start;
                        margin-bottom: 10px;
                    }
                    `
                }
            </style>
        </>
    )
}
