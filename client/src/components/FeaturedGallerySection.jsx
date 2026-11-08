import React, { useState, useMemo } from 'react';
import { Search, Eye, Sparkles, SlidersHorizontal, ArrowRight, Heart } from './icons';
import { FEATURED_DESIGNS } from '../data/weddingData';
import InvitationDetailModal from './InvitationDetailModal';
import { DecorativeCorner } from './svg/WeddingMotifs';

export default function FeaturedGallerySection({ onCustomizeDesign, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [savedFavorites, setSavedFavorites] = useState([]);

  const categories = [
    'All',
    'Traditional',
    'Floral',
    'Royal',
    'Minimal',
    'Modern',
    'Animated'
  ];

  const filteredDesigns = useMemo(() => {
    return FEATURED_DESIGNS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.coupleSample.toLowerCase().includes(query) ||
        item.venueSample.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    if (savedFavorites.includes(id)) {
      setSavedFavorites(savedFavorites.filter((fav) => fav !== id));
    } else {
      setSavedFavorites([...savedFavorites, id]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Atelier Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
              Featured Invitation Designs
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
              Explore our artisan-crafted suites. Each design is fully customizable with your personal ceremony dates, sacred shlokas, and color themes.
            </p>
          </div>

          {/* Search Input Field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-muted" />
            <input
              type="text"
              placeholder="Search design, theme, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-blush-300 text-charcoal text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-charcoal-muted hover:text-charcoal"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-blush-200">
          <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mr-2 flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-charcoal text-ivory-100 shadow-sm'
                  : 'bg-ivory-50 text-charcoal-soft hover:bg-blush-100 border border-blush-200'
              }`}
            >
              {cat} {cat === 'All' ? `(${FEATURED_DESIGNS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredDesigns.length === 0 ? (
          <div className="text-center py-20 bg-ivory-50 rounded-2xl border border-blush-200 max-w-xl mx-auto">
            <p className="font-serif text-2xl text-charcoal mb-2">No matching invitations found</p>
            <p className="text-xs text-charcoal-muted mb-6">
              Try adjusting your search terms or select "All Designs" to browse the full portfolio.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-charcoal text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredDesigns.map((design) => {
              const isFav = savedFavorites.includes(design.id);
              return (
                <div
                  key={design.id}
                  onClick={() => setSelectedDesign(design)}
                  className="group relative bg-white rounded-2xl border border-blush-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                  {/* Visual Preview */}
                  <div className="relative h-80 w-full overflow-hidden bg-blush-50">
                    <img
                      src={design.heroImage}
                      alt={design.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Ornate Corner */}
                    <div className="absolute top-3 left-3 opacity-70">
                      <DecorativeCorner className="w-5 h-5 text-ivory-100" />
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <button
                        onClick={(e) => toggleFavorite(e, design.id)}
                        className="p-1.5 rounded-full bg-white/80 hover:bg-white text-charcoal transition-colors shadow-xs"
                        aria-label="Save to favorites"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'text-blush-700 fill-blush-700' : 'text-charcoal'}`} />
                      </button>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-ivory-100/95 text-charcoal border border-blush-200">
                        {design.badge}
                      </span>
                    </div>

                    {/* Bottom Preview Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-ivory-100">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-medium block">
                        {design.category} Style
                      </span>
                      <h3 className="font-serif text-lg font-normal text-ivory-100 leading-snug">
                        {design.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Info & Actions */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-charcoal-muted mb-2">
                        <span className="text-gold font-medium">★ {design.rating}</span>
                        <span>{design.leadTime}</span>
                      </div>
                      <p className="text-xs text-charcoal-muted line-clamp-2 font-light leading-relaxed">
                        {design.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-blush-100 flex items-center justify-between">
                      <span className="text-xs font-serif font-medium text-charcoal">
                        {design.priceQuote.split(' ')[1]}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDesign(design);
                          }}
                          className="p-1.5 rounded-full hover:bg-blush-100 text-charcoal-soft transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-gold" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onCustomizeDesign(design);
                          }}
                          className="px-3 py-1.5 rounded-full bg-charcoal text-ivory-100 text-[11px] uppercase tracking-wider font-semibold hover:bg-blush-700 transition-colors shadow-xs"
                        >
                          Customize
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Design CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal-muted mb-3 font-medium">
            Didn't find the exact match?
          </p>
          <button
            onClick={() => onOpenEnquiry('Custom Blank Canvas Design')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-ivory-50 border border-gold text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-ivory-100 hover:shadow-md transition-all group"
          >
            <span>Commission a Custom Atelier Design</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Selected Design Modal */}
      {selectedDesign && (
        <InvitationDetailModal
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
          onCustomize={(design) => {
            setSelectedDesign(null);
            onCustomizeDesign(design);
          }}
        />
      )}
    </section>
  );
}
