import Image from "next/image";

const FadeCaruosel = () => {
  const carousel = [
    {
      img: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "interior",
      text: "Interior",
    },
  ];
  return (
    <>
      <section className="carousel min-h-screen w-full">
        <div className="max-w-[100rem] mx-auto px-[8%]">
          <div className="carousel-container h-[34rem]">
            {carousel.map((img) => (
              <div className="img-cont w-full h-full">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-[30px] overflow-hidden"
                  alt={img.alt}
                  src={img.img}
                />
                <p className="absolute">{img.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FadeCaruosel;
