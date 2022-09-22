import Image from "next/image"
import Script from "next/script"


const ImageZoom =()=>{
    return(
        <>
            <Script src="/scripts/image_zoom.js"/>
            <div className="flex space-x-5">
                <div className="img-zoom-container">
                    <Image id="myimage" src="/images/img2.jpg" width="300" height="240" alt="test" layout="responsive"/>
                </div>
                <div id="myresult" className="img-zoom-result">
                    
                </div>
            </div>
            <Script src="/scripts/image_zoom_fn_call.js" strategy="lazyOnload"/>
        </>
    )
}
export default ImageZoom