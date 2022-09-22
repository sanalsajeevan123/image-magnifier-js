import Image from "next/image"
import Script from "next/script"


const ImageZoom =()=>{
    
    return(
        <>
            <Script src="/scripts/image_zoom.js" strategy="beforeInteractive"/>
            <div className="img-zoom-container">
                <Image 
                    id="myimage" 
                    src="/images/img1.jpg" 
                    layout="responsive"
                    width={100} 
                    height={100} 
                    alt="test"
                    objectFit="contain"
                />
                <div id="myresult" className="img-zoom-result absolute top-0 -right-[105%]"/>         
            </div>
            <Script src="/scripts/image_zoom_fn_call.js" strategy="lazyOnload"/>
        </>
    )
}
export default ImageZoom