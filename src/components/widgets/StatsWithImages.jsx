import Stats from '../widgets/Stats.astro'; // Adjust imports based on your setup
import SingleTestimonial from '../widgets/SingleTestimonial.astro';

const StatsWithImages = ({ stats, images, title, description }) => (
  <section class="py-12 bg-gray-50 dark:bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Stats Section */}
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <Stats />
        </div>

        {/* Images Section */}
        <div class="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} class="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                class="w-full h-auto rounded-md"
              />
              <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsWithImages;