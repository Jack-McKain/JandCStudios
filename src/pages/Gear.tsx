import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Aperture, Video } from 'lucide-react';

const Gear = () => {
  const cameras = [
    "Sony A7R5",
    "Sony a6700"
  ];

  const lenses = [
    "Sigma 24-70mm f/2.8",
    "Sigma 85mm f/1.4",
    "Sony FE 70-200mm f/4",
    "Sigma 18-50mm f/2.8",
    "Sigma 30mm f/1.4"
  ];

  const videoEquipment = [
    "DJI RS4 Mini Gimbal",
    "DJI Mic 2",
    "Atomos Ninja V",
    "CINEPEER CF100 Light"
  ];

  const GearCard = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) => (
    <Card className="shadow-elegant hover:shadow-2xl transition-all duration-300 group">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="text-2xl font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="p-3 rounded-lg bg-gradient-card border border-border/50 hover:border-accent/30 transition-colors"
            >
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Gear</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <GearCard title="Cameras" items={cameras} icon={Camera} />
          <GearCard title="Lenses" items={lenses} icon={Aperture} />
          <GearCard title="Video Equipment" items={videoEquipment} icon={Video} />
        </div>

        {/* Gear Philosophy */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif mb-6">Professional Equipment for Exceptional Results</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that great photography and videography start with the right tools. 
            Our carefully selected gear ensures we can capture every moment with stunning clarity, 
            whether it's an intimate portrait or a grand celebration. From our full-frame Sony cameras 
            to our precision Sigma lenses, every piece of equipment is chosen to deliver 
            professional-grade results that exceed expectations.
          </p>
        </div>

        {/* Technical Advantages */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif">Photography Excellence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Our Sony A7R5 and a6700 cameras provide exceptional image quality with advanced 
                low-light performance, ensuring beautiful shots in any condition.
              </p>
              <p className="text-muted-foreground">
                Professional Sigma lenses offer incredible sharpness and beautiful bokeh, 
                perfect for portraits, events, and artistic compositions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif">Video Innovation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Our DJI RS4 Mini Gimbal ensures smooth, cinematic footage, while the 
                Atomos Ninja V provides 4K recording capabilities for stunning video quality.
              </p>
              <p className="text-muted-foreground">
                Professional lighting and audio equipment guarantee that every video 
                captures both beautiful visuals and crystal-clear sound.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gear;