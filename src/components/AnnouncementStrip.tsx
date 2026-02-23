const announcements = [
  '📱 We\'re back on WhatsApp with 7021055281 💜',
  '🎉 Green Holi Sale 💐 💜 Is Live Now',
  '✈️ Book Now & Get Early Bird Discounts',
  '📱 We\'re back on WhatsApp with 7021055281 💜',
  '🎉 Green Holi Sale 💐 💜 Is Live Now',
  '✈️ Book Now & Get Early Bird Discounts',
];

const AnnouncementStrip = () => {
  return (
    <div className="w-full bg-[#00ff00] overflow-hidden py-1.5 z-[60] relative">
      <div className="animate-scroll-left flex gap-16 w-max">
        {announcements.map((text, i) => (
          <span key={i} className="text-black text-xs font-bold whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementStrip;
