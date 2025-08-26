export default function ContentCards() {
  const cards = [
    {
      title: "Security centre",
      description: "Learn how to protect yourself from fraud and keep your accounts secure.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/security-vLYA2ZV3erO1HhoLm1aXRjGOfYozuo.jpeg",
      link: "#",
    },
    {
      title: "Become an HSBC customer",
      description: "Discover our range of accounts and services designed for your needs.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/become%20hsbc%20customer-0wsENJ2gReHqcTklRSg8XUKdmuKQ1m.jpeg",
      link: "#",
    },
    {
      title: "Career opportunities",
      description: "Join our team and build a rewarding career in banking and finance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/career%20opportunities-p755Y66kJRlmh8gIhvSNHC8lwJHB7a.jpeg",
      link: "#",
    },
    {
      title: "Regulations",
      description: "Important regulatory information and compliance updates.",
      image: "/legal-documents-and-regulations.png",
      link: "#",
    },
    {
      title: "Rates and tariffs",
      description: "View our current interest rates and service charges.",
      image: "/financial-charts-and-rates.png",
      link: "#",
    },
    {
      title: "Sustainable Finance",
      description: "Learn about our commitment to sustainable banking practices.",
      image: "/green-finance-and-sustainability.png",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a href={card.link} className="hsbc-red-text font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
