import React from "react";


function Home({username, isLoggedIn}) {
    
    return (
        <div className="home">
            {isLoggedIn ? <h1>Welcome, {username}!</h1> : <h1>Welcome to on track fast!</h1>}
            
            <p>go from sitting in your basement to racing on track before you know it!</p>
            
        </div>
    )
}

export default Home;