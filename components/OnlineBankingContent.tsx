import { Check } from "lucide-react"

export default function OnlineBankingContent() {
  const features = [
    "View your account balances and transaction history",
    "Transfer money between your accounts",
    "Pay bills and set up standing orders",
    "Apply for products and services",
    "Download statements and tax documents",
    "Manage your cards and security settings",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Everything you need to manage your money online</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">What you can do</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Security you can trust</h3>
              <p className="text-gray-600 mb-4">
                Your security is our priority. We use advanced encryption and multi-factor authentication to keep your
                information safe.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>256-bit SSL encryption</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>24/7 fraud monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
