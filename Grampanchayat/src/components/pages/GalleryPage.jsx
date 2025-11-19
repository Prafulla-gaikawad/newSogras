import PageHero from "../PageHero";
import mandirImage from "../../images/mandir.jpg";
import infoImage from "../../images/info.jpg";
import gavImage from "../../images/gav.jpg";
import aboutImage from "../../images/about.jpg";
import sadasyImage from "../../images/sadasya.jpg";
import sadasy1Image from "../../images/sadasya1.jpg";
import sadasy2Image from "../../images/sadasya2.jpg";
import sadasy3Image from "../../images/sadasya3.jpg";
import sadasy4Image from "../../images/sadasya4.jpg";
import sadasy5Image from "../../images/sadasya5.jpg";
import sadasy6Image from "../../images/sadasya6.jpg";
import sarpanchsogrusImage from "../../images/sarpanchsogrus.jpg";
import artImage from "../../images/art.jpg";
import awardImage from "../../images/award.jpg";
import environmentImage from "../../images/environment.jpg";
// import kakaImage from '../../images/kaka.jpg';
import sograsImage from "../../images/sogras.jpg";
import sogras1Image from "../../images/sogras1.jpg";
import sogras2Image from "../../images/sogras2.jpg";
import sogras3Image from "../../images/sogras3.jpg";
import sogras4Image from "../../images/sogras4.jpg";
import sogras5Image from "../../images/sogras5.jpg";
import sogras6Image from "../../images/sogras6.jpg";
import sogras7Image from "../../images/sogras7.jpg";
import sogras8Image from "../../images/sogras8.jpg";
import sogras9Image from "../../images/sogras9.jpg";
import sogras10Image from "../../images/sogras10.jpg";
import sogras11Image from "../../images/sogras11.jpg";
import sogras12Image from "../../images/sogras12.jpg";
import sogras13Image from "../../images/sogras13.jpg";
import sogras14Image from "../../images/sogras14.jpg";
import sogras15Image from "../../images/sogras15.jpg";

const GalleryPage = () => {
  const images = [
    { id: 1, src: mandirImage, alt: "Gallery Image 1" },
    // { id: 2, src: infoImage, alt: "Gallery Image 2" },
    { id: 3, src: gavImage, alt: "Gallery Image 3" },
    // { id: 4, src: kakaImage, alt: 'Gallery Image 4' },
    // { id: 5, src: mandirImage, alt: "Gallery Image 5" },
    { id: 6, src: infoImage, alt: "Gallery Image 6" },
    { id: 7, src: gavImage, alt: "Gallery Image 7" },
    // { id: 8, src: kakaImage, alt: "Gallery Image 8" },
    { id: 9, src: mandirImage, alt: "Gallery Image 9" },
    { id: 10, src: aboutImage, alt: "Gallery Image 10" },
    { id: 11, src: sadasyImage, alt: "Gallery Image 11" },
    { id: 12, src: sadasy1Image, alt: "Gallery Image 12" },
    { id: 13, src: sadasy2Image, alt: "Gallery Image 13" },
    { id: 14, src: sadasy3Image, alt: "Gallery Image 14" },
    { id: 15, src: sadasy4Image, alt: "Gallery Image 15" },
    { id: 16, src: sadasy5Image, alt: "Gallery Image 16" },
    { id: 17, src: sadasy6Image, alt: "Gallery Image 17" },
    { id: 18, src: artImage, alt: "Gallery Image 18" },
    { id: 19, src: awardImage, alt: "Gallery Image 19" },
    { id: 20, src: environmentImage, alt: "Gallery Image 20" },
    { id: 21, src: sograsImage, alt: "Gallery Image 21" },
    { id: 22, src: sogras1Image, alt: "Gallery Image 22" },
    { id: 23, src: sogras2Image, alt: "Gallery Image 23" },
    { id: 24, src: sogras3Image, alt: "Gallery Image 24" },
    { id: 25, src: sogras4Image, alt: "Gallery Image 25" },
    { id: 26, src: sogras5Image, alt: "Gallery Image 26" },
    { id: 27, src: sogras6Image, alt: "Gallery Image 27" },
    { id: 28, src: sogras7Image, alt: "Gallery Image 28" },
    { id: 29, src: sogras8Image, alt: "Gallery Image 29" },
    { id: 30, src: sogras9Image, alt: "Gallery Image 30" },
    { id: 31, src: sogras10Image, alt: "Gallery Image 31" },
    { id: 32, src: sogras11Image, alt: "Gallery Image 32" },
    { id: 33, src: sogras12Image, alt: "Gallery Image 33" },
    { id: 34, src: sogras13Image, alt: "Gallery Image 34" },
    { id: 35, src: sogras14Image, alt: "Gallery Image 35" },
    { id: 36, src: sogras15Image, alt: "Gallery Image 36" },

  ];

  return (
    <div>
      <PageHero title="फोटो गॅलरी" subtitle="माहिती" image={gavImage} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Dotted Line */}
            <div className="flex justify-center mb-4">
              <div className="w-32 border-t-2 border-dotted border-gray-400"></div>
            </div>

            {/* Sub-heading */}
            <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
              फोटो गॅलरी
            </h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
