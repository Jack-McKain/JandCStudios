import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-center">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground leading-relaxed">
                  Ready to capture your special moments? We'd love to hear from you and discuss 
                  how we can bring your vision to life. Reach out today to start planning your 
                  photography or videography session.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@jcstudios.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Available for travel worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">1. Initial Consultation</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll discuss your vision, timeline, and specific needs to create a customized package.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">2. Planning & Preparation</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll work together to plan locations, timing, and all the details for your session.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">3. Professional Service</h4>
                  <p className="text-muted-foreground text-sm">
                    On the day of your shoot, we'll capture every moment with professionalism and care.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">4. Delivery</h4>
                  <p className="text-muted-foreground text-sm">
                    Receive your beautifully edited photos and videos through our digital gallery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSetWehkRZ28MPgg7-ZGdnxqdZGS8uN6EhuZn_L_NNkhU20StQ/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Contact Form"
                    className="bg-background"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-card p-8 rounded-lg shadow-soft max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif mb-4">Let's Create Something Beautiful Together</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every story is unique, and we're here to help tell yours. Whether it's a wedding, 
            family portrait, or special event, we bring passion and expertise to every shoot. 
            Contact us today to start planning your session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;