import Script from "next/script";
import React, { useState } from "react";

const Newtest=()=>{
    const [isLensActive,setIsLensActive] = useState(false)

    const handleMouseEnter=()=>{
        setIsLensActive(true);
    }

    return(
        <>
            <Script src="/scripts/newtestscript.js" strategy="afterInteractive"/>
            <div className="img-zoom-container">
                <img id="myimage" src="/images/img4.jpg" width="500" height="340" onMouseEnter={()=>handleMouseEnter()}/>
                {isLensActive && <div id="myresult" className="img-zoom-result"></div>}
            </div>
            {isLensActive && <Script src="/scripts/image_zoom_fn_call.js" strategy="lazyOnload"/>}
        </> 
    )
}
export default Newtest