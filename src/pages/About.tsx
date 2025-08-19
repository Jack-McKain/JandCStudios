import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We are Jack and Caroline, a photo and video duo excited to capture your best moments.
          </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Our Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/JackandCarolinePhoto.jpg" 
                    alt="Photo of Jack and Caroline" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">Meet the Team</h3>
                  <p className="text-muted-foreground">
                    Jack and Caroline bringing their unique perspectives to every shoot.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/AbbyandAndrew1.jpeg" 
                    alt="Sample wedding photography" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">Our Style</h3>
                  <p className="text-muted-foreground">
                    Capturing authentic moments with artistic flair and professional excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy Section */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif mb-6">Our Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every moment tells a story. We believe in capturing not just images, but the emotions, 
              connections, and memories that make each occasion unique. With our combined expertise 
              in photography and videography, we create lasting visual narratives that you'll 
              treasure for years to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;