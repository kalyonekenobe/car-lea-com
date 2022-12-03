import {FC} from "react";

export const GallerySection: FC = () => {
  return (
    <section className={"gallery-section"}>
      <h2>Gallery</h2>
      <div className={"gallery-container"}>
        <img src={`${process.env.PUBLIC_URL}/images/gallery_1.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_2.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_3.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_4.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_5.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_6.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_7.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_8.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_9.jpg`} alt={"Salon image"} />
        <img src={`${process.env.PUBLIC_URL}/images/gallery_10.jpg`} alt={"Salon image"} />
      </div>
    </section>
  )
}