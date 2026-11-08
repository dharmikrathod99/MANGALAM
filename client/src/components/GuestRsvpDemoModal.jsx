import React, { useState } from 'react';
import { X, Check, Heart, Sparkles, Music, Users, Utensils } from './icons';

export default function GuestRsvpDemoModal({ isOpen, onClose, coupleNames = "Ananya & Kabir" }) {
  if (!isOpen) return null;

  const [attendance, setAttendance] = useState('yes');
  const [guestCount, setGuestCount] = useState(2);
  const [diet, setDiet] = useState('Vegetarian Gourmet');
  const [song, setSong] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-ivory-100 w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-blush-300 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-ivory-50 text-charcoal-muted hover:text-charcoal border border-blush-200"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSent ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300 shadow-xs">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              RSVP Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-xs mx-auto leading-relaxed">
              Your response has been recorded in {coupleNames}'s wedding guest dashboard. A confirmation has been logged!
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSent(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-wider font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="space-y-5">
            <div className="text-center space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-deep font-sans font-medium">
                Live Guest Experience Demo
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                RSVP for {coupleNames}'s Wedding
              </h3>
              <p className="text-xs text-charcoal-muted">
                See how effortless it is for your wedding guests to respond digitally.
              </p>
            </div>

            {/* Attendance Toggle */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setAttendance('yes')}
                className={`py-3 rounded-2xl border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  attendance === 'yes'
                    ? 'bg-charcoal text-ivory-100 border-charcoal shadow-sm'
                    : 'bg-white border-blush-200 text-charcoal-soft hover:bg-blush-50'
                }`}
              >
                <Heart className="w-3.5 h-3.5 text-blush-500 fill-blush-500" />
                Joyfully Accepts
              </button>
              <button
                type="button"
                onClick={() => setAttendance('no')}
                className={`py-3 rounded-2xl border text-xs font-semibold uppercase tracking-wider transition-all ${
                  attendance === 'no'
                    ? 'bg-charcoal text-ivory-100 border-charcoal shadow-sm'
                    : 'bg-white border-blush-200 text-charcoal-soft hover:bg-blush-50'
                }`}
              >
                Regretfully Declines
              </button>
            </div>

            {/* Guest Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1">
                Guest Name(s)
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Mr. & Mrs. Sharma"
                className="w-full px-3 py-2 rounded-xl border border-blush-200 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            {attendance === 'yes' && (
              <>
                {/* Guest Count & Diet */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-gold" /> Total Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-blush-200 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-gold/50"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>Family Suite (5+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1 flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-gold" /> Feast Preference
                    </label>
                    <select
                      value={diet}
                      onChange={(e) => setDiet(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-blush-200 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-gold/50"
                    >
                      <option value="Vegetarian Gourmet">Vegetarian Feast</option>
                      <option value="Jain Cuisine">Pure Jain Cuisine</option>
                      <option value="Royal Non-Veg & Veg">Royal Heritage Buffet</option>
                      <option value="Vegan / Gluten-Free">Vegan / Gluten-Free</option>
                    </select>
                  </div>
                </div>

                {/* Sangeet Song Request */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1 flex items-center gap-1">
                    <Music className="w-3.5 h-3.5 text-gold" /> Song Request for the Sangeet
                  </label>
                  <input
                    type="text"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    placeholder="e.g. Gallan Goodiyaan / Kesariya / Taylor Swift"
                    className="w-full px-3 py-2 rounded-xl border border-blush-200 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-blush-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Submit Guest RSVP</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

