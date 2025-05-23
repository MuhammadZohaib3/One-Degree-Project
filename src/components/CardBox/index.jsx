import Cards from "../Cards/index";
import img1 from "../../assets/images/boximg.webp";
import img2 from "../../assets/images/boximg2.jpg";
import img3 from "../../assets/images/boximg3.png";
import img4 from "../../assets/images/boximg4.webp";

function CardBox() {
  const data = [
    {
      id: 1,
      title: "ACTIVEWEAR",
      src: img1,
    },
    {
      id: 2,
      title: "FOOTWEAR",
      src: img2,
    },
    {
      id: 3,
      title: "APPAREL",
      src: img3,
    },
    {
      id: 4,
      title: "GYMWEAR ACCESSORIES",
      src: img4,
    },
  ];
  return (
    <div className="bg-black ">
      <div className="mx-12">
        <h2 className="pt-5 font-sm">The Essentials of Every athlete</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map(({ id, src, title }) => (
            <Cards key={id} src={src} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardBox;
