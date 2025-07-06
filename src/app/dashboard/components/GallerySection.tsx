'use client'

import Image from 'next/image'

interface GalleryItem {
  id: number
  imageUrl: string
  caption: string
}

interface GallerySectionProps {
  isDarkMode: boolean
  gallery: GalleryItem[]
}

export const GallerySection = ({ isDarkMode, gallery }: GallerySectionProps) => {
  return (
    <section className={`rounded-2xl border p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div key={item.id} className={`relative group rounded-xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-[1.02] ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 hover:border-[#10b981]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#10b981]'
          }`}>
            <Image
              src={item.imageUrl}
              alt={item.caption}
              width={300}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#10b981]/90 to-[#34d399]/90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-semibold text-white">{item.caption}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 