import Script from "next/script";
import React from "react";

const Newtest=()=>{
    return(
        <>
            <Script src="/scripts/newtestscript.js" strategy="afterInteractive"/>
            <div className="img-zoom-container">
                <img id="myimage" src="/images/img4.jpg" width="500" height="340"/>
                <div id="myresult" className="img-zoom-result"></div>
            </div>
            <Script src="/scripts/image_zoom_fn_call.js" strategy="lazyOnload"/>
        </> 
    )
}
export default Newtest