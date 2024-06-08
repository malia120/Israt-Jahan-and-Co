import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const textElement = document.querySelector('.animated-text');
        textElement.classList.add('animate');
    }, []);

    return (
        <div className="home-container">
            <div className="grey-box">
                <h1 className="animated-text">Welcome to the Home Page</h1>
            </div>
        </div>
    );
}

export default Home;