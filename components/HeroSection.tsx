export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student-YwQW5mbJZZxoGVnFBOo1yD0YBijl8k.jpeg"
          alt="Happy students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Student offer</h1>
          <p className="text-xl mb-8 leading-relaxed">
            Get €70 cashback when you open a Student Account and spend €300 within 60 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Find out more
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
