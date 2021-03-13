import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
           <Carousel>
               <Carousel.Item>
                   <Image src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/3/10/b7a23e67-7027-4ff5-83bd-4e7e9706e028.jpg.webp?ect=4g" width="100%" />
               </Carousel.Item>
               <Carousel.Item>
                   <Image src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/3/10/7d507e87-2084-4da3-9374-417bd1542d4d.jpg.webp?ect=4g" width="100%"/>
               </Carousel.Item>
               <Carousel.Item>
                   <Image src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/3/10/d7e22266-657b-45ea-8698-9aa98c6a6fb2.jpg.webp?ect=4g" width="100%" />
               </Carousel.Item>
           </Carousel>
        </div>
    )
}

export default Banner
