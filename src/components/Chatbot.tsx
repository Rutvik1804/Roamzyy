import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Plane } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  'Popular destinations',
  'International packages',
  'India packages',
  'Honeymoon trips',
  'Talk to an expert',
];

const knowledgeBase: { [key: string]: string } = {
  // Greetings
  'hi': 'Hi there! 👋 I\'m your Roamzyy travel concierge. How can I help you plan your perfect trip today?',
  'hello': 'Hello! Welcome to Roamzyy. 🌍 I\'m here to help you find your dream destination. What kind of trip are you looking for?',
  'hey': 'Hey! Great to see you! I\'m your travel assistant. Looking for international getaways or exploring India?',
  'good morning': 'Good morning! ☀️ Ready to plan your next adventure? I\'m here to help!',
  'good evening': 'Good evening! 🌙 How can I assist you with your travel plans today?',
  
  // Destinations
  'dubai': 'Dubai is amazing! ✨ Our Dubai packages start from ₹45,999 and include:\n• 5-star hotel stay\n• Desert Safari\n• Burj Khalifa visit\n• Airport transfers\n\nWant me to share more details?',
  'bali': 'Bali is perfect for a tropical escape! 🏝️ Starting from ₹38,999, our packages include:\n• Beach resort stay\n• Temple tours\n• Rice terrace visits\n• Water sports\n\nInterested in knowing more?',
  'maldives': 'Maldives is paradise on Earth! 🌊 Our packages start from ₹65,999 featuring:\n• Overwater villa\n• Snorkeling & diving\n• Sunset cruise\n• Romantic dinners\n\nPerfect for honeymoons!',
  'thailand': 'Thailand offers the best of culture & beaches! 🇹🇭 From ₹32,999:\n• Bangkok city tour\n• Phuket beaches\n• Island hopping\n• Thai cooking class\n\nShould I connect you with an expert?',
  'kashmir': 'Kashmir is truly heaven on Earth! 🏔️ Starting ₹25,999:\n• Houseboat stay in Dal Lake\n• Gulmarg visit\n• Pahalgam excursion\n• Shikara rides\n\nWant to book?',
  'ladakh': 'Ladakh is an adventure paradise! 🏔️ From ₹28,999:\n• Leh city tour\n• Pangong Lake visit\n• Nubra Valley\n• Monastery visits\n\nPerfect for thrill-seekers!',
  'kerala': 'Kerala - God\'s Own Country! 🌴 From ₹22,999:\n• Backwater houseboat\n• Munnar tea gardens\n• Alleppey cruise\n• Ayurvedic spa\n\nIdeal for relaxation!',
  'vietnam': 'Vietnam is stunning! 🇻🇳 From ₹35,999:\n• Ha Long Bay cruise\n• Ho Chi Minh City tour\n• Hanoi old quarter\n• Cu Chi Tunnels\n\nGreat mix of history and nature!',
  'singapore': 'Singapore is a perfect city escape! 🇸🇬 From ₹42,999:\n• Marina Bay Sands\n• Sentosa Island\n• Universal Studios\n• Gardens by the Bay\n\nIdeal for families!',
  'rajasthan': 'Rajasthan is royal India! 🏰 From ₹24,999:\n• Jaipur palaces\n• Udaipur lakes\n• Jodhpur blue city\n• Desert camping\n\nExperience the royal heritage!',
  'andaman': 'Andaman is a beach paradise! 🏖️ From ₹32,999:\n• Havelock Island\n• Radhanagar Beach\n• Scuba diving\n• Water sports\n\nCrystal clear waters await!',
  'goa': 'Goa is the ultimate beach destination! 🏖️ From ₹18,999:\n• Beach hopping\n• Water sports\n• Nightlife\n• Portuguese heritage\n\nPerfect for a fun getaway!',
  'europe': 'Europe is magical! 🏰 Our packages start from ₹1,25,999:\n• Paris, France\n• Switzerland Alps\n• Italy tours\n• Multi-country options\n\nLet me know your preferred countries!',
  'switzerland': 'Switzerland is breathtaking! 🇨🇭 From ₹1,85,999:\n• Jungfrau visit\n• Interlaken\n• Lucerne lake\n• Scenic train rides\n\nPerfect for honeymoons!',
  
  // Categories & Types
  'international': 'Our popular international destinations include:\n🌍 Dubai - from ₹45,999\n🏝️ Bali - from ₹38,999\n🌊 Maldives - from ₹65,999\n🇹🇭 Thailand - from ₹32,999\n🇻🇳 Vietnam - from ₹35,999\n🇸🇬 Singapore - from ₹42,999\n\nWhich one interests you?',
  'india': 'Explore Incredible India with us:\n🏔️ Ladakh - from ₹28,999\n❄️ Kashmir - from ₹25,999\n🌴 Kerala - from ₹22,999\n🏜️ Rajasthan - from ₹24,999\n🏖️ Andaman - from ₹32,999\n\nWhere would you like to go?',
  'domestic': 'Explore Incredible India with us:\n🏔️ Ladakh - from ₹28,999\n❄️ Kashmir - from ₹25,999\n🌴 Kerala - from ₹22,999\n🏜️ Rajasthan - from ₹24,999\n🏖️ Goa - from ₹18,999\n\nWhere would you like to go?',
  'honeymoon': 'Congratulations! 💕 Our top honeymoon picks:\n🌊 Maldives - from ₹75,999\n🏝️ Bali - from ₹55,999\n🇨🇭 Switzerland - from ₹1,85,999\n❄️ Kashmir - from ₹35,999\n\nAll include romantic experiences & special surprises!',
  'romantic': 'For a romantic escape! 💕\n🌊 Maldives - overwater villas\n🏝️ Bali - beachside romance\n🇨🇭 Switzerland - mountain magic\n❄️ Kashmir - houseboat stay\n\nPerfect for couples!',
  'adventure': 'For thrill-seekers! 🏔️\n• Ladakh - high altitude adventure\n• Rishikesh - river rafting\n• Nepal - trekking\n• New Zealand - bungee & skydiving\n\nReady for an adventure?',
  'family': 'Great family destinations! 👨‍👩‍👧‍👦\n🇸🇬 Singapore - Universal Studios\n🇦🇪 Dubai - theme parks\n🇹🇭 Thailand - beaches & culture\n🏔️ Himachal - hill stations\n\nKids will love these!',
  'beach': 'Best beach destinations! 🏖️\n🌊 Maldives - pristine islands\n🏝️ Bali - surf & relax\n🇹🇭 Phuket - Thai beaches\n🏖️ Goa - Indian beaches\n🏖️ Andaman - crystal waters\n\nSun, sand, and sea await!',
  'mountain': 'Mountain lovers! 🏔️\n❄️ Kashmir - Himalayan beauty\n🏔️ Ladakh - high altitude\n🇨🇭 Switzerland - Alps\n🏔️ Manali - adventure sports\n\nBreathe in the fresh mountain air!',
  'popular': 'Our most popular destinations right now:\n1. 🇦🇪 Dubai - Experience luxury\n2. 🏝️ Bali - Tropical paradise\n3. 🌊 Maldives - Romantic escape\n4. 🏔️ Kashmir - Natural beauty\n5. 🌴 Kerala - Tranquil backwaters\n\nWhich sounds perfect for you?',
  'destination': 'I can help you with many destinations! 🌍\n\n🌏 International: Dubai, Bali, Thailand, Maldives, Singapore, Vietnam, Europe\n🇮🇳 India: Kashmir, Ladakh, Kerala, Goa, Rajasthan, Andaman\n\nTell me your preference - beach, mountain, adventure, or cultural?',
  'trip': 'I can help you plan the perfect trip! 🎯\n\nWhat type of trip are you looking for?\n• Beach & relaxation\n• Adventure & trekking\n• Honeymoon & romantic\n• Family vacation\n• Cultural exploration\n\nOr tell me a destination!',
  'package': 'Our packages include everything! 📦\n\n✈️ Flights\n🏨 Hotels\n🚗 Transfers\n🎯 Sightseeing\n🍽️ Selected meals\n\nBudget-friendly to luxury options available. What\'s your budget range?',
  
  // Services
  'visa': 'We provide complete visa assistance! 📋\n• Documentation guidance\n• Application support\n• Fast-track processing\n• 98% approval rate\n\nWhich country visa do you need?',
  'price': 'Our packages are designed for every budget!\n💎 Budget-friendly: ₹20,000 - ₹40,000\n⭐ Premium: ₹40,000 - ₹75,000\n👑 Luxury: ₹75,000+\n\nAll packages include flights, hotels & activities. What\'s your budget range?',
  'budget': 'Our packages are designed for every budget!\n💎 Budget-friendly: ₹20,000 - ₹40,000\n⭐ Premium: ₹40,000 - ₹75,000\n👑 Luxury: ₹75,000+\n\nAll packages include flights, hotels & activities. What\'s your budget range?',
  'cost': 'Our packages are designed for every budget!\n💎 Budget-friendly: ₹20,000 - ₹40,000\n⭐ Premium: ₹40,000 - ₹75,000\n👑 Luxury: ₹75,000+\n\nAll packages include flights, hotels & activities. Which destination?',
  'contact': 'You can reach us at:\n📞 +91 98765 43210\n📧 hello@roamzyy.com\n📍 Mumbai, India\n\nOr fill out our contact form and we\'ll call you back within 30 minutes!',
  'phone': 'Call us at: 📞 +91 98765 43210\n\nOur travel experts are available:\n🕐 Mon-Sat: 9 AM - 9 PM\n🕐 Sunday: 10 AM - 6 PM\n\nWe\'ll help you plan your perfect trip!',
  'call': 'Call us at: 📞 +91 98765 43210\n\nOur travel experts are available:\n🕐 Mon-Sat: 9 AM - 9 PM\n🕐 Sunday: 10 AM - 6 PM\n\nWe\'ll help you plan your perfect trip!',
  'expert': 'I\'d be happy to connect you with a travel expert! 🎯\n\nPlease share:\n• Your preferred destination\n• Travel dates\n• Number of travelers\n\nOr call us directly at +91 98765 43210!',
  'talk': 'I\'d be happy to connect you with a travel expert! 🎯\n\nCall us: +91 98765 43210\nOr share your details:\n• Preferred destination\n• Travel dates\n• Number of travelers\n\nWe\'ll call you within 30 minutes!',
  'help': 'I\'m here to help! 🤝 I can assist you with:\n\n🌍 Finding destinations\n💰 Package prices\n📋 Visa assistance\n🎯 Custom trip planning\n📞 Connect with experts\n\nWhat would you like to know?',
  
  // Default
  'default': 'I\'d love to help you find the perfect trip! 🌟\n\nYou can ask me about:\n• Destinations (Dubai, Bali, Kashmir...)\n• Package types (Honeymoon, Adventure...)\n• Prices and inclusions\n• Visa assistance\n\nWhat would you like to know?',
};

const getResponse = (input: string): string => {
  const lowercaseInput = input.toLowerCase().trim();
  
  // Priority keywords - check these first in order
  const priorityKeywords = [
    'dubai', 'bali', 'maldives', 'thailand', 'kashmir', 'ladakh', 'kerala', 
    'vietnam', 'singapore', 'rajasthan', 'andaman', 'goa', 'europe', 'switzerland',
    'honeymoon', 'romantic', 'adventure', 'family', 'beach', 'mountain',
    'international', 'india', 'domestic', 'popular', 'destination', 'trip', 'package',
    'visa', 'price', 'budget', 'cost', 'contact', 'phone', 'call', 'expert', 'talk', 'help',
    'hi', 'hello', 'hey', 'good morning', 'good evening'
  ];
  
  // Check priority keywords first
  for (const keyword of priorityKeywords) {
    if (lowercaseInput.includes(keyword) && knowledgeBase[keyword]) {
      return knowledgeBase[keyword];
    }
  }
  
  // Check for common variations and phrases
  if (lowercaseInput.includes('thank') || lowercaseInput.includes('thanks')) {
    return 'You\'re welcome! 😊 Feel free to ask if you have more questions. Happy travels!';
  }
  if (lowercaseInput.includes('book') || lowercaseInput.includes('reserve') || lowercaseInput.includes('booking')) {
    return 'Great choice! 🎉 To proceed with booking:\n\n1. Fill our contact form\n2. Our expert will call within 30 mins\n3. Customize your package\n4. Confirm & pay securely\n\nShall I redirect you to the contact form?';
  }
  if (lowercaseInput.includes('best time') || lowercaseInput.includes('when to') || lowercaseInput.includes('season')) {
    return 'The best time depends on your destination! Generally:\n\n🏖️ Beach destinations: Oct-Mar\n🏔️ Mountains: Apr-Jun, Sep-Nov\n🌍 Europe: May-Sep\n🇦🇪 Dubai: Nov-Mar\n\nWhich destination are you planning for?';
  }
  if (lowercaseInput.includes('how are you') || lowercaseInput.includes('how r u')) {
    return 'I\'m doing great, thank you for asking! 😊 Ready to help you plan an amazing trip. Where would you like to go?';
  }
  if (lowercaseInput.includes('what') && (lowercaseInput.includes('offer') || lowercaseInput.includes('have'))) {
    return 'We offer amazing travel packages! 🌍\n\n✈️ International: Dubai, Bali, Thailand, Maldives, Europe\n🇮🇳 India: Kashmir, Ladakh, Kerala, Goa, Rajasthan\n💕 Special: Honeymoon, Adventure, Family trips\n\nWhat type interests you?';
  }
  if (lowercaseInput.includes('cheapest') || lowercaseInput.includes('cheap') || lowercaseInput.includes('affordable')) {
    return 'Our most affordable packages start from:\n\n🏖️ Goa - ₹18,999\n🌴 Kerala - ₹22,999\n🏜️ Rajasthan - ₹24,999\n❄️ Kashmir - ₹25,999\n\nGreat value with flights, hotels & activities included!';
  }
  if (lowercaseInput.includes('luxury') || lowercaseInput.includes('premium') || lowercaseInput.includes('expensive')) {
    return 'Our premium luxury experiences:\n\n👑 Maldives - from ₹1,25,999 (overwater villa)\n🇨🇭 Switzerland - from ₹1,85,999\n🇫🇷 Europe tour - from ₹2,25,999\n🏝️ Bali luxury - from ₹85,999\n\n5-star stays, private transfers & exclusive experiences!';
  }
  if (lowercaseInput.includes('yes') || lowercaseInput.includes('sure') || lowercaseInput.includes('okay') || lowercaseInput.includes('ok')) {
    return 'Great! 🎉 To proceed, you can:\n\n📞 Call us: +91 98765 43210\n📝 Fill the contact form on our website\n💬 Share your travel dates & preferences here\n\nHow would you like to proceed?';
  }
  if (lowercaseInput.includes('no') && lowercaseInput.length < 20) {
    return 'No problem! 😊 Is there anything else I can help you with? Feel free to ask about any destination or type of trip!';
  }
  if (lowercaseInput.includes('bye') || lowercaseInput.includes('goodbye')) {
    return 'Goodbye! 👋 Have a wonderful day! Feel free to come back anytime you\'re ready to plan your trip. Safe travels! ✈️';
  }
  
  return knowledgeBase['default'];
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hi there! I\'m your Roamzyy travel concierge. ✈️\n\nHow may I assist you today? I can answer your travel questions and help you plan your perfect trip!',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: '550px', maxHeight: 'calc(100vh - 100px)' }}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Roamzyy Travel Co.</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMessages([{
                    id: 1,
                    text: 'Hi there! I\'m your Roamzyy travel concierge. ✈️\n\nHow may I assist you today? I can answer your travel questions and help you plan your perfect trip!',
                    isBot: true,
                    timestamp: new Date(),
                  }]);
                  setInputValue('');
                }}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <Plane className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-white text-gray-700 shadow-sm rounded-tl-none'
                        : 'bg-primary text-white rounded-tr-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <Plane className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 overflow-x-auto">
              <div className="flex gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="flex-shrink-0 px-3 py-1.5 bg-white border border-primary/20 text-primary text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about travel..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
