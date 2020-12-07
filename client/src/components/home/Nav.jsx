import React from 'react'


function Nav() {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{marginTop:100,backgroundColor:'#000',height:80}}>
        <a className="navbar-brand" 
            style={{
                        fontSize:32,
                        fontFamily:"arial-black",
                        marginLeft:110,
                        color:'#fff'

                    }}
                    >Resume<span
                    style={{
                        fontSize:35,
                        fontFamily:"palatino",
                        color:"red"
                    }}>Maker</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2" style={{marginLeft:100,fontFamily:"palatino",fontSize:20}}>
                <li className="nav-item active ml-3" >
                    <a className="nav-link" style={{color:'#fff'}} href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ml-5" >
                    <a className="nav-link" style={{color:'#fff'}} href="#">About</a>
                </li>
               
                </ul>
            </div>
        </nav>
    )
}
export default Nav