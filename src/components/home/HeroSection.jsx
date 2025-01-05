// src/components/home/HeroSection.jsx
export default function HeroSection() {
    return (
        <section className="pt-24 pb-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                    Wear Your Story
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Discover our unique collection of hats that express your personality and style
                </p>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
                    Shop Now
                </button>
            </div>
        </section>
    );
}
