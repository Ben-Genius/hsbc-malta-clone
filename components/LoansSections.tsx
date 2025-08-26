export default function LoansSections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Loans */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Personal Loans</h2>
            <p className="text-gray-600 mb-6">
              Whether you're looking to consolidate debt, make home improvements, or fund a major purchase, our personal
              loans offer competitive rates and flexible terms.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Flexible repayment terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Quick online application</span>
              </li>
            </ul>
            <button className="hsbc-red hsbc-red-hover text-white px-6 py-3 rounded font-medium transition-colors">
              Learn more
            </button>
          </div>

          {/* Home Loans */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Home Loans</h2>
            <p className="text-gray-600 mb-6">
              Make your dream of homeownership a reality with our comprehensive range of home loan products designed to
              suit your needs.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>First-time buyer programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Refinancing options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Expert mortgage advice</span>
              </li>
            </ul>
            <button className="hsbc-red hsbc-red-hover text-white px-6 py-3 rounded font-medium transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
