export default function RegistrationOptions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Register for Online Banking</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="w-16 h-16 hsbc-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">New to HSBC?</h3>
            <p className="text-gray-600 mb-6">Open an account online and get instant access to Online Banking.</p>
            <button className="hsbc-red hsbc-red-hover text-white px-6 py-3 rounded font-medium transition-colors w-full">
              Open an account
            </button>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="w-16 h-16 hsbc-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Existing customer?</h3>
            <p className="text-gray-600 mb-6">Register for Online Banking using your account details and debit card.</p>
            <button className="hsbc-red hsbc-red-hover text-white px-6 py-3 rounded font-medium transition-colors w-full">
              Register now
            </button>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="w-16 h-16 hsbc-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Need help?</h3>
            <p className="text-gray-600 mb-6">Contact us or visit a branch for assistance with registration.</p>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:border-gray-400 transition-colors w-full">
              Get help
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
