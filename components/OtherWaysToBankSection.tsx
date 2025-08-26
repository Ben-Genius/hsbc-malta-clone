import { Smartphone, MapPin, Phone, CreditCard } from "lucide-react"

export default function OtherWaysToBankSection() {
  const bankingMethods = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Banking",
      description: "Bank on the go with our mobile app",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile_banking-EjO7eHUiAZHgnNSTtP1BDJPt3ARyml.png",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Branch Banking",
      description: "Visit one of our branches",
      image: "/bank-branch-building.png",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Banking",
      description: "Call us for telephone banking",
      image: "/telephone-banking.png",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "ATM Banking",
      description: "Use our ATMs for quick transactions",
      image: "/atm-machine.png",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Other ways to bank</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bankingMethods.map((method, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gray-50 rounded-lg p-8 mb-4 group-hover:bg-gray-100 transition-colors">
                <img src={method.image || "/placeholder.svg"} alt={method.title} className="w-16 h-16 mx-auto mb-4" />
                <div className="hsbc-red-text mb-4">{method.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
