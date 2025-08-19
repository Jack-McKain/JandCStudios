import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Slideshow from '@/components/Slideshow';

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Wedding",
      images: [
        { src: "/images/wedding_fox.jpeg", alt: "Wedding - Fox" },
        { src: "/images/wedding_fox1.jpeg", alt: "Wedding - Fox 1" },
      ]
    },
    {
      title: "Events",
      images: [
        { src: "/images/Event_Horse.jpg", alt: "Event - Horse" },
        { src: "/images/event_horse2.jpg", alt: "Event - Horse 2" },
        { src: "/images/event_jacob.jpg", alt: "Event - Jacob" },
        { src: "/images/event_theata.jpg", alt: "Event - Theata" },
        { src: "/images/event_theata1.jpg", alt: "Event - Theata 1" },
        { src: "/images/events_Javon.jpg", alt: "Event - Javon" },
      ]
    },
    {
      title: "Headshots",
      images: [
        { src: "/images/headshot_Caroline.jpg", alt: "Headshot - Caroline" },
        { src: "/images/headshot_Jack.jpg", alt: "Headshot - Jack" },
        { src: "/images/Headshot_Jeff.jpg", alt: "Headshot - Jeff" },
        { src: "/images/headshot_Jensen.jpg", alt: "Headshot - Jensen" },
        { src: "/images/headshot_theata.jpg", alt: "Headshot - Theata" },
        { src: "/images/headshot_Us.jpg", alt: "Headshot - Us" },
        { src: "/images/headshot_Jeff&Jenn.jpg", alt: "Headshot - Jeff and Jenn" },
      ]
    },
    {
      title: "Animals",
      images: [
        { src: "/images/animal_birdBill.JPG", alt: "Animal - Bird Bill" },
        { src: "/images/animal_blueBird.JPG", alt: "Animal - Blue Bird" },
        { src: "/images/animal_Clem.jpg", alt: "Animal - Clem" },
        { src: "/images/animal_dolly.jpg", alt: "Animal - Dolly" },
        { src: "/images/animal_dolly1.jpg", alt: "Animal - Dolly 1" },
        { src: "/images/animal_eagle.jpg", alt: "Animal - Eagle" },
        { src: "/images/animal_eagleFly.JPG", alt: "Animal - Eagle Fly" },
        { src: "/images/animal_eagleWet.jpg", alt: "Animal - Eagle Wet" },
        { src: "/images/animal_fox.jpg", alt: "Animal - Fox" },
        { src: "/images/animal_hummingbird.jpg", alt: "Animal - Hummingbird" },
        { src: "/images/animal_jasmine.jpg", alt: "Animal - Jasmine" },
        { src: "/images/animal_mable.jpg", alt: "Animal - Mable" },
        { src: "/images/animal_monkey.JPG", alt: "Animal - Monkey" },
        { src: "/images/animal_Puffin.JPG", alt: "Animal - Puffin" },
        { src: "/images/animal_sashia.jpg", alt: "Animal - Sashia" },
        { src: "/images/animal_seagullBridge.jpg", alt: "Animal - Seagull Bridge" },
        { src: "/images/animal_seagullStare.jpg", alt: "Animal - Seagull Stare" },
        { src: "/images/animals_seagullFlock.jpg", alt: "Animals - Seagull Flock" },
        { src: "/images/animal_snake.jpg", alt: "Animal - Snake" },
        { src: "/images/animal_Yumi.jpg", alt: "Animal - Yumi" },
      ]
    },
    {
      title: "Nature",
      images: [
        { src: "/images/nature_muirWoods.JPG", alt: "Nature - Muir Woods" },
        { src: "/images/nature_orangeFlower.JPG", alt: "Nature - Orange Flower" },
        { src: "/images/nature_pinkFlower.jpg", alt: "Nature - Pink Flower" },
        { src: "/images/nature_purpleFlower.JPG", alt: "Nature - Purple Flower" },
        { src: "/images/nature_orangeFlower2.JPG", alt: "Nature - Orange Flower 2" },
        { src: "/images/nature_salmonFloer.JPG", alt: "Nature - Salmon Flower" },
        { src: "/images/nature_purpleFlower2.jpg", alt: "Nature - Purple Flower 2" },
      ]
    },
    {
      title: "Cars",
      images: [
        { src: "/images/car_cuda.jpg", alt: "Car - Cuda" },
        { src: "/images/car_FordGT.jpg", alt: "Car - Ford GT" },
        { src: "/images/car_lotus.jpg", alt: "Car - Lotus" },
        { src: "/images/car_shifter.jpg", alt: "Car - Shifter" },
      ]
    },
    {
      title: "Other",
      images: [
        { src: "/images/other_eclipse.jpg", alt: "Other - Eclipse" },
        { src: "/images/other_eclipse1.jpg", alt: "Other - Eclipse 1" },
        { src: "/images/other_moon.jpg", alt: "Other - Moon" },
      ]
    }
  ];

  const videos = [
    { src: "/images/video1.mp4", title: "Sample Video 1" },
    { src: "/images/video2.mp4", title: "Sample Video 2" },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">Gallery</h1>
        
        {/* Photo Categories */}
        <div className="space-y-16">
          {galleryCategories.map((category) => (
            <section key={category.title} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-center">{category.title}</h2>
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <Slideshow images={category.images} />
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        {/* Videos Section */}
        <section className="mt-20 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-center">Our Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-center">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <video 
                    controls 
                    className="w-full rounded-lg"
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;