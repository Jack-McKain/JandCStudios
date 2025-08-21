import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const photoPackages = [
    {
      name: "Classic",
      price: "$1,900",
      features: [
        "6 hours of continuous coverage",
        "1 Photographer",
        "~300 edited photos",
        "Unlimited locations",
        "Digital gallery",
        "Print release"
      ]
    },
    {
      name: "Luxury",
      price: "$2,400",
      popular: true,
      features: [
        "8 hours of continuous coverage",
        "2 Photographers",
        "~400 edited photos",
        "Unlimited locations",
        "Digital gallery",
        "Print release"
      ]
    },
    {
      name: "Timeless",
      price: "$2,900",
      features: [
        "10 hours of continuous coverage",
        "2 Photographers",
        "~500 edited photos",
        "Unlimited locations",
        "Digital gallery",
        "Print release",
        "Raw images included"
      ]
    }
  ];

  const videoPackages = [
    {
      name: "Classic",
      price: "$1,700",
      features: [
        "6 hours of continuous coverage",
        "1 Videographer",
        "2-4 minute highlight video",
        "Unlimited locations"
      ]
    },
    {
      name: "Luxury",
      price: "$2,200",
      popular: true,
      features: [
        "8 hours of continuous coverage",
        "2 Videographers",
        "4-6 minute highlight video",
        "Unlimited locations",
        "Big Moments with Audio (Full Ceremony, Speeches, First Looks, etc.)"
      ]
    },
    {
      name: "Timeless",
      price: "$2,700",
      features: [
        "10 hours of continuous coverage",
        "2 Videographers",
        "6-8 minute highlight video",
        "Unlimited locations",
        "Raw video files included",
        "Big Moments with Audio (Full Ceremony, Speeches, First Looks, etc.)"
      ]
    }
  ];

  const comboPackages = [
    {
      name: "Classic",
      price: "$2,600",
      features: [
        "6 hours of continuous coverage",
        "1 Photographer + 1 Videographer",
        "~300 edited photos",
        "2-4 minute highlight video",
        "Unlimited locations",
        "Digital gallery",
        "Print release"
      ]
    },
    {
      name: "Luxury",
      price: "$3,100",
      popular: true,
      features: [
        "8 hours of continuous coverage",
        "1 Photographer + 1 Videographer",
        "~400 edited photos",
        "4-6 minute highlight video",
        "Unlimited locations",
        "Digital gallery",
        "Print release",
        "Big Moments with Audio (Full Ceremony, Speeches, First Looks, etc.)"
      ]
    },
    {
      name: "Timeless",
      price: "$3,600",
      features: [
        "10 hours of continuous coverage",
        "1 Photographer + 1 Videographer",
        "~500 edited photos",
        "6-8 minute highlight video",
        "Unlimited locations",
        "Digital gallery",
        "Print release",
        "Big Moments with Audio (Full Ceremony, Speeches, First Looks, etc.)",
        "Raw photo + video files included"
      ]
    }
  ];

  const PackageCard = ({ pkg, isCombo = false }: { pkg: any; isCombo?: boolean }) => (
    <Card className={`relative shadow-elegant hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-accent' : ''}`}>
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
        <div className="text-3xl font-bold text-accent-medium">{pkg.price}</div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {pkg.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">Pricing</h1>
        
        {/* Photo Packages */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-center mb-12">Photo Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {photoPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* Video Packages */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-center mb-12">Video Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* Combo Packages */}
        <section>
          <h2 className="text-3xl font-serif text-center mb-12">Combo Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comboPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} isCombo={true} />
            ))}
          </div>
        </section>

        {/* Optional Add-Ons */}
        <section className="mt-20">
          <h2 className="text-3xl font-serif text-center mb-12">Optional Add-Ons</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <ul className="space-y-6">
                  <li className="flex justify-between items-center">
                    <span>1 Hour Engagement photo shoot</span>
                    <span className="text-xl font-bold text-accent-medium">$100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Extra hours</span>
                    <span className="text-xl font-bold text-accent-medium">$150/person/hour</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>30-60 second social media teaser trailer</span>
                    <span className="text-xl font-bold text-accent-medium">$150</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Raw photos or video files</span>
                    <span className="text-xl font-bold text-accent-medium">$250</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-card p-8 rounded-lg shadow-soft">
          <h3 className="text-2xl font-serif mb-4">Ready to Capture Your Special Day?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your vision and find the perfect package for your needs. 
            We're here to make your memories last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;