const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname);
const { getHeader, getFooter, getSidebar } = require('./blog_templates.js');

const articles = [
  // 1. Karan Kumar
  {
    slug: 'blog-karan-kumar.html',
    title: 'Who Is Karan Kumar? The 21-Year-Old Founder Behind Streat Eats Haldwani | Tech Entrepreneur Profile',
    metaTitle: 'Who Is Karan Kumar? Founder & CEO of Streat Eats Haldwani | Tech Entrepreneur Story',
    desc: 'Discover the inspiring journey of Karan Kumar, the 21-year-old software architect and Founder & CEO of Streat Eats in Haldwani, Uttarakhand.',
    keywords: 'Karan Kumar, Karan Kumar Haldwani, Karan Kumar Streat Eats, Karan Kumar founder, Karan Kumar CEO, Karan Kumar entrepreneur, Karan Kumar Uttarakhand, Streat Eats founder, who is the founder of Streat Eats',
    tag: 'Founder Profile',
    tagClass: '',
    category: 'founders tech',
    date: 'August 28, 2026',
    dateIso: '2026-08-28',
    readTime: '8 Min Read • 1,150 Words',
    coverImg: 'founder.webp',
    coverCaption: 'Karan Kumar, 21-year-old Founder & CEO of Streat Eats in Haldwani, Uttarakhand.',
    lang: 'en',
    authorName: 'Streat Eats Editorial Team',
    excerpt: 'At just 21, Karan Kumar built a food tech startup reshaping how Haldwani orders street food with zero markup. Read his full journey from late-night coding to a live app.',
    contentHtml: `
      <p>If you have ordered piping hot street food online in <strong>Haldwani</strong> recently, chances are high that an app called <strong>Streat Eats</strong> made it happen in under 30 minutes. But if you have ever asked yourself <em>"Who is the founder of Streat Eats?"</em> or <em>"Who built Haldwani's street food delivery app?"</em>, the answer is inspiring.</p>

      <p>It is not a multi-million-dollar tech venture from Bengaluru or Gurugram. It is a 21-year-old software architect and homegrown entrepreneur named <strong>Karan Kumar</strong>, born and raised right here in Haldwani, Uttarakhand.</p>

      <div class="key-takeaway">
        <h4>💡 Quick Facts About Karan Kumar</h4>
        <ul>
          <li><strong>Full Name:</strong> Karan Kumar</li>
          <li><strong>Age:</strong> 21 Years Old</li>
          <li><strong>Hometown:</strong> Haldwani, Nainital District, Uttarakhand, India</li>
          <li><strong>Role:</strong> Founder &amp; CEO, Software Architect at Streat Eats</li>
          <li><strong>Mission:</strong> Deliver authentic local street food at genuine stall prices in 30 minutes</li>
          <li><strong>Connect:</strong> <a href="https://instagram.com/krn.wip" target="_blank" rel="noopener">@krn.wip on Instagram</a> | <a href="https://www.linkedin.com/in/karan-kumar-836b50429" target="_blank" rel="noopener">LinkedIn Profile</a></li>
        </ul>
      </div>

      <h2>The Early Spark: Coding in the Hills of Kumaon</h2>
      <p>Growing up in Haldwani, the gateway to Kumaon, <strong>Karan Kumar</strong> possessed a relentless curiosity for how technology works beneath the surface. While many of his peers were browsing social media passively, Karan was teaching himself programming, frontend interfaces, server architecture, and database design.</p>
      <p>By his late teens, Karan had already engineered digital tools, web portals, and automation workflows for small businesses across Uttarakhand. Rather than waiting for opportunities to arrive from metropolitan cities, he believed that Tier-2 and Tier-3 Indian cities like Haldwani deserved state-of-the-art software tailored to their unique local challenges.</p>

      <h2>The Everyday Frustration That Sparked Streat Eats</h2>
      <p>Haldwani is famed across the region for its vibrant street food culture. From the legendary steaming momos near Nagar Palika Chauraha and crispy aloo tikki on Bhotia Parao to spicy chowmein and burgers along Kaladhungi Road, the city’s culinary soul lives on its streets.</p>
      <p>Yet, there was an enormous gap: <strong>None of these iconic street vendors had a home delivery mechanism</strong>. National food aggregators largely ignored street food stalls due to low ticket sizes and lack of corporate GST structures.</p>

      <blockquote>
        "Whenever it rained, or during intense study sessions and family evenings, you had to physically drive through traffic to fetch momos. I thought — why shouldn't Haldwani's best local food be available at the tap of a button without burning a hole in your pocket?"
        <br><br><strong>— Karan Kumar, Founder &amp; CEO</strong>
      </blockquote>

      <div class="inline-img-box">
        <img src="streat_eats_delivery.jpg" alt="Streat Eats fast 30-minute delivery in Haldwani">
        <div class="inline-img-caption">Fast 30-minute doorstep delivery network across Haldwani powered by Streat Eats technology.</div>
      </div>

      <h2>Building the Entire Platform from Scratch</h2>
      <p>Instead of relying on cookie-cutter templates or bloated third-party plugins, <strong>Karan Kumar personally engineered the entire Streat Eats ecosystem</strong>:</p>
      <ol>
        <li><strong>The Customer Mobile Experience:</strong> A lightning-fast, intuitive interface for browsing live stalls, customizable menu items, and real-time order confirmation.</li>
        <li><strong>Hyperlocal Dispatch &amp; Tracking:</strong> A custom delivery routing algorithm optimized for Haldwani's specific geography and shortcuts.</li>
        <li><strong>Vendor Partner Portal:</strong> Simple, frictionless order reception for local stall owners without requiring complex POS hardware.</li>
      </ol>

      <p>Recognizing that technical excellence needs equally strong ground operations, Karan teamed up with his close friend and co-founder <strong>Lokesh Paneru</strong> (Head of Operations). While Karan focused on code, product engineering, and digital growth, Lokesh led ground logistics, vendor onboarding, and rider management across Haldwani.</p>

      <div class="inline-img-box">
        <img src="co founder.jpeg" alt="Lokesh Paneru — Co-Founder and Head of Operations">
        <div class="inline-img-caption">Co-Founder &amp; Head of Operations <strong>Lokesh Paneru</strong> manages vendor relations and rider fleet across Haldwani.</div>
      </div>

      <h2>The Zero-Markup Philosophy: Building Trust in Haldwani</h2>
      <p>Karan knew that Indian consumers in Tier-2 cities are highly price-conscious and value-driven. Major food apps often charge 20% to 35% higher than menu prices alongside inflated delivery fees.</p>
      <p>Karan established a foundational rule for Streat Eats: <strong>Zero Food Price Markup</strong>. If a plate of steamed momos costs ₹60 at the stall, it costs exactly ₹60 on the Streat Eats app. Delivery charges start at just ₹5 for nearby orders, coupled with special first-order savings via code <strong>STREAT50</strong>.</p>

      <h2>Karan Kumar’s Vision for the Future</h2>
      <p>At 21 years of age, Karan Kumar represents the new generation of Indian founders who are choosing to build for their hometowns rather than migrating away. Under his leadership, Streat Eats is expanding across Nainital Road, Mukhani, Lalkuan, and Amrit Vihar, with plans to bring the model to neighboring Himalayan cities like Rudrapur, Kashipur, and Ramnagar.</p>
      <p>His story is proof that with technical grit, genuine empathy for local street vendors, and relentless execution, world-class products can be created right here in Haldwani, Uttarakhand.</p>
    `
  },

  // 2. Lokesh Paneru
  {
    slug: 'blog-lokesh-paneru.html',
    title: 'Lokesh Paneru: The Ground Force Behind Streat Eats\' 30-Minute Delivery Promise in Haldwani',
    metaTitle: 'Lokesh Paneru: Co-Founder & Operations Head of Streat Eats Haldwani | 30-Min Delivery Mastermind',
    desc: 'Meet Lokesh Paneru, the 20-year-old Co-Founder and Head of Operations at Streat Eats in Haldwani, Uttarakhand.',
    keywords: 'Lokesh Paneru, Lokesh Paneru Haldwani, Lokesh Paneru Streat Eats, Lokesh Paneru co founder, Lokesh Paneru entrepreneur, Lokesh Paneru operations, Lokesh Paneru Uttarakhand',
    tag: 'Co-Founder Profile',
    tagClass: '',
    category: 'founders tech',
    date: 'August 25, 2026',
    dateIso: '2026-08-25',
    readTime: '8 Min Read • 1,100 Words',
    coverImg: 'co founder.jpeg',
    coverCaption: 'Lokesh Paneru, 20-year-old Co-Founder & Head of Operations of Streat Eats in Haldwani, Uttarakhand.',
    lang: 'en',
    authorName: 'Streat Eats Editorial Team',
    excerpt: 'Meet the 20-year-old operations mastermind managing vendor partnerships, rider logistics, and 30-minute delivery execution across Haldwani.',
    contentHtml: `
      <p>In the startup universe, building an elegant mobile app is only half the battle. The other half — the grittier, tougher half — is physical execution on the ground.</p>
      <p>At <strong>Streat Eats</strong>, every steaming box of momos that arrives at your doorstep in under 30 minutes is the direct result of <strong>Lokesh Paneru’s</strong> relentless ground operations. At just 20 years of age, Lokesh serves as the <strong>Co-Founder and Head of Operations</strong> of Haldwani’s fastest-growing hyperlocal food startup.</p>

      <div class="key-takeaway">
        <h4>⚡ Quick Facts About Lokesh Paneru</h4>
        <ul>
          <li><strong>Full Name:</strong> Lokesh Paneru</li>
          <li><strong>Age:</strong> 20 Years Old</li>
          <li><strong>Hometown:</strong> Haldwani, Uttarakhand, India</li>
          <li><strong>Role:</strong> Co-Founder &amp; Head of Operations at Streat Eats</li>
          <li><strong>Responsibilities:</strong> Vendor Partnerships, Ground Fleet Logistics, Quality Control, Rider Training</li>
          <li><strong>Connect:</strong> <a href="https://instagram.com/lokesh.paneru" target="_blank" rel="noopener">@lokesh.paneru on Instagram</a></li>
        </ul>
      </div>

      <h2>The Street Hustle: Winning Vendor Trust One Stall at a Time</h2>
      <p>Street food vendors in Indian cities are legendary for their craftsmanship, but they can be rightfully sceptical of technological promises. Many stall owners in Haldwani have operated their businesses for 10 to 25 years with traditional cash-in-hand counter sales.</p>
      <p>When <strong>Lokesh Paneru</strong> first stepped out to onboard Haldwani’s iconic stalls onto Streat Eats, he didn’t use fancy corporate jargon. Having eaten at these stalls throughout his childhood, Lokesh approached each vendor with genuine respect and local familiarity.</p>

      <blockquote>
        "Our vendors are master chefs of their craft. My promise to them was simple: We will never inflate your prices, we will never delay your payouts, and we will bring your authentic food to families who cannot step out."
        <br><br><strong>— Lokesh Paneru, Co-Founder &amp; Head of Operations</strong>
      </blockquote>

      <p>Through sheer persistence, Lokesh on-boarded over 15 premier street food stalls across Bhotia Parao, Nagar Palika Chauraha, Mukhani, and Kaladhungi Road within months.</p>

      <div class="inline-img-box">
        <img src="bhotia_parao_food.jpg" alt="Iconic street food stalls of Bhotia Parao Haldwani">
        <div class="inline-img-caption">Authentic street food vendors in Bhotia Parao onboarded onto Streat Eats by Lokesh Paneru.</div>
      </div>

      <h2>Cracking the 30-Minute Delivery Puzzle in Haldwani</h2>
      <p>Haldwani presents unique logistical challenges: busy market intersections, narrow inner residential gallis, seasonal mountain rains, and fluctuating evening traffic flows.</p>
      <p>To maintain a strict <strong>30-minute delivery benchmark</strong>, Lokesh engineered a hyper-efficient hub-and-spoke dispatch model:</p>
      <ol>
        <li><strong>Zonal Fleet Positioning:</strong> Riders are strategically stationed near high-density stall clusters like Bhotia Parao and Tikonia, cutting pickup latency to under 4 minutes.</li>
        <li><strong>Insulated Heat-Lock Packaging:</strong> Specialized food-safe thermal containers ensure momos remain steaming hot and crispy items like burgers and samosas don't get soggy during transit.</li>
        <li><strong>Local Shortcut Navigation:</strong> Unlike standard GPS maps that struggle in small bylanes, Lokesh personally trained the rider fleet on local bypasses and traffic-free routes.</li>
      </ol>

      <div class="inline-img-box">
        <img src="streat_eats_delivery.jpg" alt="Streat Eats delivery rider fleet managed by Lokesh Paneru">
        <div class="inline-img-caption">Rider fleet managed daily by Lokesh Paneru, ensuring rapid 30-minute doorstep service.</div>
      </div>

      <h2>Building the Partnership with Karan Kumar</h2>
      <p>Great startups are formed by complementary co-founders. While <strong>Karan Kumar</strong> (Founder &amp; CEO) architected the software, database, and customer app, <strong>Lokesh Paneru</strong> brought the ground-level force that transformed software into an everyday reality for Haldwani's citizens.</p>
      <p>Together, Karan (21) and Lokesh (20) have demonstrated that youth, ambition, and deep love for their hometown can create a thriving business model that competes with multinational food apps while retaining a 100% grassroots soul.</p>
    `
  },

  // 3. How Streat Eats Works
  {
    slug: 'blog-how-streat-eats-works.html',
    title: 'How Streat Eats Is Changing Street Food Delivery in Haldwani, Uttarakhand | Zero Markup Revolution',
    metaTitle: 'How Streat Eats Is Changing Street Food Delivery in Haldwani | Zero Markup Model',
    desc: 'Discover how Streat Eats, founded by Karan Kumar and Lokesh Paneru, delivers authentic street food in Haldwani in 30 minutes at genuine stall prices with zero food markup.',
    keywords: 'Streat Eats, Streat Eats Haldwani, street food delivery Haldwani, best food delivery Haldwani, momos delivery Haldwani, burger delivery Haldwani, Karan Kumar, Lokesh Paneru',
    tag: 'Hyperlocal Tech',
    tagClass: '',
    category: 'tech food',
    date: 'August 20, 2026',
    dateIso: '2026-08-20',
    readTime: '9 Min Read • 1,150 Words',
    coverImg: 'streat_eats_delivery.jpg',
    coverCaption: 'Streat Eats brings Haldwani\'s best street food directly to your doorstep in 30 minutes with authentic stall pricing.',
    lang: 'en',
    authorName: 'Streat Eats Editorial Team',
    excerpt: 'Zero price markup, 30-minute delivery, genuine stall prices, and 15+ verified street vendors. Discover the hyperlocal economic revolution in Haldwani.',
    contentHtml: `
      <p>For decades, enjoying authentic street food in <strong>Haldwani</strong> required putting on your shoes, stepping out into congested evening traffic, and waiting in long queues at roadside stalls. While national food apps revolutionized restaurant ordering in metropolitan cities, they completely neglected the real culinary heartbeat of Tier-2 and Tier-3 Indian towns: <strong>The Local Street Food Vendor</strong>.</p>
      <p>Enter <strong>Streat Eats</strong> — the homegrown food delivery startup founded by <strong>Karan Kumar</strong> (CEO) and <strong>Lokesh Paneru</strong> (Head of Operations) that is changing the street food ecosystem across Haldwani and Kumaon.</p>

      <div class="key-takeaway">
        <h4>🌟 The Streat Eats Advantage at a Glance</h4>
        <ul>
          <li><strong>Zero Food Price Markup:</strong> You pay the exact same price listed at the physical stall.</li>
          <li><strong>30-Minute Doorstep Delivery:</strong> Fast hyperlocal riders equipped with heat-lock packaging.</li>
          <li><strong>Lowest Delivery Fees:</strong> Nearby deliveries start at just ₹5 within 1 km.</li>
          <li><strong>Cash on Delivery (COD):</strong> Simple, trusted, and hassle-free payment at your doorstep.</li>
          <li><strong>Welcome Coupon:</strong> Use code <strong>STREAT50</strong> to get UPTO ₹50 OFF on your first order.</li>
        </ul>
      </div>

      <h2>Why Haldwani Needed Its Own Street Food Platform</h2>
      <p>Haldwani is one of Uttarakhand’s most bustling commercial hubs and the vital gateway to the Kumaon Himalayas. The city’s streets are celebrated for mouthwatering culinary gems: steaming momos near Nagar Palika, crispy burgers on Bhotia Parao, spicy wok chowmein on Kaladhungi Road, and traditional aloo tikki chaat.</p>
      <p>Despite tremendous local demand, these small stall owners lacked the technical infrastructure to partner with multinational delivery giants, who demand up to 30% commissions and inflated customer pricing. <strong>Streat Eats was built from the ground up to solve this exact problem.</strong></p>

      <div class="inline-img-box">
        <img src="steamed_momos_haldwani.jpg" alt="Steaming fresh momos delivered in Haldwani">
        <div class="inline-img-caption">Piping hot steamed momos delivered directly from top Haldwani stalls to your home in 30 minutes.</div>
      </div>

      <h2>How Ordering on Streat Eats Works</h2>
      <ol>
        <li><strong>Get the App:</strong> Download the Android application from Google Play Store, or access <a href="https://app.streateats.in" target="_blank" rel="noopener">app.streateats.in</a> on iPhone/PC.</li>
        <li><strong>Select Your Favorite Stall:</strong> Browse live menus of verified Haldwani street vendors near your neighborhood.</li>
        <li><strong>Add to Cart &amp; Apply Coupon:</strong> Choose your momos, rolls, chaat, or burgers and enter coupon code <strong>STREAT50</strong> for instant savings.</li>
        <li><strong>Rapid 30-Min Delivery:</strong> A dedicated rider picks up your order fresh off the griddle and delivers it in thermal insulated packaging.</li>
        <li><strong>Pay Cash on Delivery:</strong> Hand over cash directly to the rider upon receiving hot, fresh food.</li>
      </ol>
    `
  },

  // 4. Hindi Streat Eats Kya Hai
  {
    slug: 'blog-streat-eats-kya-hai-hindi.html',
    title: 'Streat Eats क्या है? हल्द्वानी की अपनी Street Food Delivery App | करण कुमार और लोकेश पनेरू की पहल',
    metaTitle: 'Streat Eats क्या है? हल्द्वानी की अपनी Street Food Delivery App | Karan Kumar और Lokesh Paneru',
    desc: 'जानिए Streat Eats क्या है और कैसे यह हल्द्वानी में 30 मिनट में बिना किसी अतिरिक्त मूल्य (Zero Markup) के गरमा-गरम स्ट्रीट फूड आपके घर तक पहुँचाता है।',
    keywords: 'Streat Eats क्या है, Streat Eats Haldwani Hindi, street food delivery Haldwani Hindi, हल्द्वानी फूड डिलीवरी, Karan Kumar Haldwani, Lokesh Paneru Haldwani',
    tag: 'हिन्दी लेख • फूड टेक',
    tagClass: 'tag-hindi',
    category: 'hindi tech',
    date: '18 अगस्त, 2026',
    dateIso: '2026-08-18',
    readTime: '8 मिनट पढ़ाई • 1,100 शब्द',
    coverImg: 'haldwani_street_food.jpg',
    coverCaption: 'Streat Eats हल्द्वानी के लोकप्रिय मोमोज, बर्गर और चाट स्टॉल्स को सीधे आपके दरवाजे तक 30 मिनट में पहुँचाता है।',
    lang: 'hi',
    authorName: 'Streat Eats संपादकीय टीम',
    excerpt: 'अगर आप हल्द्वानी में रहते हैं और घर बैठे असली स्टॉल की कीमत पर गरमा-गरम मोमोज, बर्गर या चाट मंगाना चाहते हैं, तो जानिए Streat Eats कैसे काम करता है।',
    contentHtml: `
      <p>अगर आप <strong>हल्द्वानी (उत्तराखंड)</strong> में रहते हैं, तो आपने शाम के समय भोटिया पड़ाव या नगर पालिका चौराहे पर लगने वाली मोमोज और चाट की खुशबू जरूर महसूस की होगी। लेकिन जब बारिश हो रही हो, या घर पर परिवार के साथ फुर्सत के पल हों, तो बाहर निकलकर स्टॉल तक जाना अक्सर थकाऊ हो जाता है।</p>
      <p>इसी समस्या का समाधान करने के लिए हल्द्वानी के दो युवाओं — <strong>Karan Kumar (21 वर्ष)</strong> और <strong>Lokesh Paneru (20 वर्ष)</strong> — ने मिलकर बनाया है: <strong>Streat Eats</strong>।</p>

      <div class="key-takeaway">
        <h4>🌟 Streat Eats की मुख्य विशेषताएं</h4>
        <ul>
          <li><strong>असली स्टॉल की कीमतें (Zero Markup):</strong> जो दाम ठेले या दुकान पर है, वही दाम ऐप में मिलेगा। कोई अतिरिक्त मूल्य वृद्धि नहीं!</li>
          <li><strong>30 मिनट में तेज डिलीवरी:</strong> आपके नजदीकी स्टॉल से गरमा-गरम खाना सीधा आपके घर।</li>
          <li><strong>न्यूनतम डिलीवरी शुल्क:</strong> 1 किलोमीटर के अंदर केवल ₹5 से डिलीवरी शुरू।</li>
          <li><strong>कैश ऑन डिलीवरी (COD):</strong> खाना मिलने पर नकद भुगतान की पूरी सुविधा।</li>
          <li><strong>विशेष कूपन कोड:</strong> अपने पहले आर्डर पर <strong>STREAT50</strong> लगाएं और पाएं ₹50 तक की छूट!</li>
        </ul>
      </div>

      <h2>Streat Eats की शुरुआत क्यों हुई?</h2>
      <p>Zomato और Swiggy जैसे बड़े डिलीवरी ऐप केवल बड़े और महंगे रेस्टोरेंट्स पर ध्यान देते हैं। वे खाने की कीमतों पर 25% से 35% तक अतिरिक्त कमीशन जोड़ देते हैं, जिससे ग्राहकों की जेब पर भारी बोझ पड़ता है। इसके अलावा, वे हल्द्वानी के स्थानीय स्ट्रीट फूड स्टॉल्स (जैसे मोमोज, टिक्की, बर्गर, रोल वाले) को अपनी ऐप पर शामिल नहीं करते।</p>
      <p>संस्थापक <strong>Karan Kumar</strong> और <strong>Lokesh Paneru</strong> ने सोचा कि जब हल्द्वानी का असली स्वाद गलियों और नुक्कड़ों पर मिलता है, तो इसके लिए एक समर्पित, पारदर्शी और किफायती डिलीवरी सिस्टम क्यों न बनाया जाए? इसी सोच से Streat Eats का जन्म हुआ।</p>

      <div class="inline-img-box">
        <img src="steamed_momos_haldwani.jpg" alt="हल्द्वानी के प्रसिद्ध गरमा-गरम मोमोज">
        <div class="inline-img-caption">हल्द्वानी के मशहूर स्टॉल्स के ताजे और गरमा-गरम मोमोज अब 30 मिनट में आपके घर।</div>
      </div>
    `
  },

  // 5. Top 10 Street Foods
  {
    slug: 'blog-top-street-foods-haldwani.html',
    title: 'Top 10 Street Foods You Must Try in Haldwani (2026 Ultimate Foodie Guide & Delivery)',
    metaTitle: 'Top 10 Street Foods in Haldwani You Must Try in 2026 | Ultimate Foodie Guide & Delivery',
    desc: 'Explore the best street food in Haldwani, Uttarakhand: steaming momos, crispy aloo tikki, street burgers, and spicy chowmein. Discover where to eat and how to order with Streat Eats in 30 minutes.',
    keywords: 'best street food Haldwani, momos in Haldwani, street food delivery Haldwani, Haldwani famous food, where to eat in Haldwani, top street food Uttarakhand',
    tag: 'Foodie Guide',
    tagClass: 'tag-food',
    category: 'food',
    date: 'August 15, 2026',
    dateIso: '2026-08-15',
    readTime: '10 Min Read • 1,250 Words',
    coverImg: 'haldwani_street_food.jpg',
    coverCaption: 'A glorious feast of authentic street delicacies in Haldwani: Steamed momos, aloo tikki chaat, chowmein, and street burgers.',
    lang: 'en',
    authorName: 'Streat Eats Food Guide Team',
    excerpt: 'From iconic Nagar Palika momos and Bhotia Parao tikkis to spicy wok chowmein — the definitive foodie guide to Haldwani\'s street delicacies.',
    contentHtml: `
      <p>Situated at the base of the majestic Kumaon hills, <strong>Haldwani</strong> is celebrated not only as the trading gateway to Nainital, Almora, and Ranikhet, but also as one of Uttarakhand’s premier culinary capitals. The city's bustling intersections — from Bhotia Parao and Nagar Palika to Kaladhungi Road and Tikonia — harbor culinary artisans who have perfected their street recipes across decades.</p>
      <p>Here is the curated, definitive ranking of the <strong>Top 10 street foods you must try in Haldwani in 2026</strong>. Plus, with <strong>Streat Eats</strong> (founded by local entrepreneurs <strong>Karan Kumar</strong> and <strong>Lokesh Paneru</strong>), you can now get all of these delivered to your doorstep in 30 minutes at genuine stall prices!</p>

      <h2>1. Authentic Steamed Momos (The Crown Jewel)</h2>
      <div class="food-item-box">
        <p>No culinary tour of Haldwani can begin without steamed momos. Hand-rolled with ultra-thin flour skins and stuffed with freshly spiced minced vegetables or seasoned paneer, Haldwani momos are famed for their juicy burst of flavor.</p>
        <div class="food-item-meta">
          <span class="food-badge">🥟 Must Try</span>
          <span>📍 Nagar Palika Chauraha, Bhotia Parao</span>
          <span>💰 ₹50 - ₹70</span>
        </div>
      </div>

      <h2>2. Crispy Golden Fried &amp; Kurkure Momos</h2>
      <div class="food-item-box">
        <p>For those who crave deep crunch with their dumplings, Haldwani’s street stalls have perfected crispy fried and spiced kurkure momos tossed in chaat masala.</p>
        <div class="food-item-meta">
          <span class="food-badge">🔥 Evening Favorite</span>
          <span>📍 Kaladhungi Road, Mukhani</span>
          <span>💰 ₹60 - ₹80</span>
        </div>
      </div>

      <h2>3. Desi Street-Style Double Patty Burgers</h2>
      <div class="food-item-box">
        <p>Haldwani's street burgers are massive, handmade masterpieces toasted on seasoned tawas. Layered with spiced potato patties, fresh sliced onions, tomatoes, and spicy green mint chutney.</p>
        <div class="food-item-meta">
          <span class="food-badge">🍔 High Value</span>
          <span>📍 Bhotia Parao, Tikonia</span>
          <span>💰 ₹35 - ₹60</span>
        </div>
      </div>

      <div class="inline-img-box">
        <img src="bhotia_parao_food.jpg" alt="Street burger cooking at Bhotia Parao Haldwani">
        <div class="inline-img-caption">Handmade street burgers prepared fresh on the tawa in Bhotia Parao, Haldwani.</div>
      </div>

      <h2>4. Crispy Aloo Tikki &amp; Papdi Chaat</h2>
      <div class="food-item-box">
        <p>Crisped slowly in pure ghee or fresh oil on giant iron griddles, Haldwani’s aloo tikkis are crunchy on the exterior and fragrant on the inside, drizzled with sweet curd and tangy tamarind saunth.</p>
        <div class="food-item-meta">
          <span class="food-badge">🍲 Classic Chaat</span>
          <span>📍 Main Market, Amrit Vihar</span>
          <span>💰 ₹40 - ₹60</span>
        </div>
      </div>

      <div class="inline-img-box">
        <img src="aloo_tikki_chaat.jpg" alt="Aloo Tikki Chaat in Haldwani">
        <div class="inline-img-caption">Mouthwatering Aloo Tikki Chaat served in traditional dona bowls across Haldwani.</div>
      </div>
    `
  },

  // 6. Hindi Karan Lokesh Story
  {
    slug: 'blog-karan-lokesh-story-hindi.html',
    title: 'कैसे Karan Kumar और Lokesh Paneru ने बनाई Haldwani की पहली Street Food Delivery App | प्रेरक कहानी',
    metaTitle: 'कैसे Karan Kumar और Lokesh Paneru ने बनाई Haldwani की पहली Street Food Delivery App | प्रेरक कहानी',
    desc: 'पढ़िए हल्द्वानी के दो युवा उद्यमियों Karan Kumar (21) और Lokesh Paneru (20) की प्रेरक कहानी, जिन्होंने बिना किसी फंडिंग के Streat Eats नामक सफल स्ट्रीट फूड डिलीवरी स्टार्टअप खड़ा किया।',
    keywords: 'Karan Kumar Hindi, Lokesh Paneru Hindi, Streat Eats story Hindi, startup Haldwani Hindi, Karan Kumar Haldwani, Lokesh Paneru Haldwani, उत्तराखंड स्टार्टअप',
    tag: 'प्रेरणादायक कहानी',
    tagClass: 'tag-hindi',
    category: 'hindi founders',
    date: '12 अगस्त, 2026',
    dateIso: '2026-08-12',
    readTime: '9 मिनट पढ़ाई • 1,200 शब्द',
    coverImg: 'founder.webp',
    coverCaption: 'Karan Kumar (21) और Lokesh Paneru (20) — Streat Eats के युवा संस्थापक।',
    lang: 'hi',
    authorName: 'Streat Eats संपादकीय टीम',
    excerpt: 'दो दोस्त, एक शहर और एक बड़ा सपना — पढ़िए 21 और 20 साल के युवाओं की अनकही कहानी जिन्होंने अपने शहर के वेंडर्स के लिए बनाया Streat Eats।',
    contentHtml: `
      <p>कहा जाता है कि असली नवाचार (Innovation) बड़े शहरों के वातानुकूलित केबिनों में नहीं, बल्कि जमीनी जरूरतों और समस्याओं के बीच जन्म लेता है। उत्तराखंड की हसीन वादियों की तलहटी में बसे शहर <strong>हल्द्वानी</strong> की सड़कों पर दो नौजवान दोस्तों ने कुछ ऐसा ही कर दिखाया है।</p>
      <p>यह कहानी है <strong>Karan Kumar (21 वर्ष)</strong> और <strong>Lokesh Paneru (20 वर्ष)</strong> की — जिन्होंने बिना किसी बड़े विदेशी इन्वेस्टर की फंडिंग के, अपनी कड़ी मेहनत, कोडिंग कौशल और जमीनी लगन से हल्द्वानी का अपना हाइपरलोकल फूड डिलीवरी प्लेटफॉर्म — <strong>Streat Eats</strong> — खड़ा कर दिया।</p>

      <div class="key-takeaway">
        <h4>🌟 कहानी के मुख्य बिंदु</h4>
        <ul>
          <li><strong>संस्थापक:</strong> Karan Kumar (Founder &amp; CEO) एवं Lokesh Paneru (Co-Founder &amp; Ops Head)</li>
          <li><strong>जन्मस्थान:</strong> हल्द्वानी, कुमाऊं मंडल, उत्तराखंड</li>
          <li><strong>समस्या:</strong> हल्द्वानी के मशहूर स्ट्रीट फूड स्टॉल्स पर कोई होम डिलीवरी उपलब्ध नहीं थी।</li>
          <li><strong>समाधान:</strong> 0% फूड प्राइस मार्कअप के साथ 30 मिनट में गरमा-गरम होम डिलीवरी।</li>
          <li><strong>उपलब्धि:</strong> 15+ लोकप्रिय स्टॉल्स, दर्जनों स्थानीय युवाओं को रोजगार और 1200+ सफल ऑर्डर्स।</li>
        </ul>
      </div>

      <h2>शुरुआत: कॉलेज के दिनों की भूख और एक साझा विचार</h2>
      <p>हल्द्वानी का स्ट्रीट फूड पूरे कुमाऊं में मशहूर है। नगर पालिका के पास के गरमा-गरम मोमोज हों या भोटिया पड़ाव के कुरकुरे बर्गर और टिक्की — हर किसी का दिल इन स्वादों पर फिदा रहता है।</p>
      <p>लेकिन जब शाम को बारिश हो रही हो, या पढ़ाई और काम के बीच बाहर निकलना नामुमकिन हो, तब यह स्ट्रीट फूड घर मंगाना एक सपना जैसा था। Zomato या Swiggy जैसे ऐप्स इन स्थानीय ठेलों को शामिल नहीं करते थे। तभी करण और लोकेश ने मिलकर Streat Eats बनाने का फैसला किया।</p>

      <div class="inline-img-box">
        <img src="co founder.jpeg" alt="Lokesh Paneru Co-Founder">
        <div class="inline-img-caption">Lokesh Paneru (Co-Founder) ने ग्राउंड ऑपरेशंस और वेंडर्स नेटवर्क को संभाला।</div>
      </div>
    `
  },

  // 7. Best Momos in Haldwani
  {
    slug: 'blog-best-momos-in-haldwani.html',
    title: 'The Ultimate Guide to the Best Momos in Haldwani: Steamed, Fried, Tandoori & Kurkure (2026)',
    metaTitle: 'Best Momos in Haldwani: Steamed, Fried & Kurkure Guide | Streat Eats Delivery',
    desc: 'Craving authentic Himalayan momos in Haldwani? Discover the top momo spots in Nagar Palika, Bhotia Parao & Mukhani, and how to get them delivered in 30 minutes.',
    keywords: 'best momos in Haldwani, veg momos Haldwani, paneer momos Haldwani, kurkure momos Haldwani, momo delivery Haldwani, Nagar Palika momos Haldwani',
    tag: 'Foodie Guide',
    tagClass: 'tag-food',
    category: 'food',
    date: 'August 10, 2026',
    dateIso: '2026-08-10',
    readTime: '9 Min Read • 1,150 Words',
    coverImg: 'steamed_momos_haldwani.jpg',
    coverCaption: 'Freshly steamed Himalayan momos with fiery red chili chutney in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Food Guide Team',
    excerpt: 'Steamed, fried, or kurkure — here is your ultimate guide to the tastiest, juiciest momos across Haldwani and how to get them delivered hot.',
    contentHtml: `
      <p>In <strong>Haldwani</strong>, momos are not merely a snack — they are an emotion. As the gateway to Kumaon and neighboring Nepal and Tibet culinary influences, Haldwani has cultivated a momo culture that easily rivals Delhi and Dehradun.</p>
      <p>From thin-skinned steamed veg momos to rich paneer fillings and fiery tandoori varieties, here is the complete breakdown of where to find the <strong>best momos in Haldwani</strong> and how <strong>Streat Eats</strong> brings them piping hot to your couch in 30 minutes.</p>

      <h2>1. The Nagar Palika Steamed Classics</h2>
      <p>The momo stalls surrounding Nagar Palika Chauraha are historic. Operating for over 15 years, these master vendors steam thousands of fresh dumplings every evening. The filling is seasoned with mountain herbs, finely chopped cabbage, carrots, ginger, and garlic, enveloped in paper-thin dough that melts in your mouth.</p>

      <h2>2. Kurkure &amp; Crispy Fried Momos on Kaladhungi Road</h2>
      <p>For lovers of high crunch, Kaladhungi Road’s evening food stalls serve double-crusted Kurkure Momos coated in seasoned cornflake batter and tossed in tangy chaat masala.</p>

      <div class="inline-img-box">
        <img src="haldwani_street_food.jpg" alt="Haldwani street food feast">
        <div class="inline-img-caption">Pair your momos with spicy street chowmein and crispy burgers on Streat Eats.</div>
      </div>

      <h2>How Streat Eats Keeps Momos Steaming Hot During Delivery</h2>
      <p>One common issue with food delivery is soggy or cold dumplings. Co-founder <strong>Lokesh Paneru</strong> designed customized thermal heat-lock delivery containers that preserve steam and moisture without letting condensation make the momo skins rubbery. Your momos arrive at your doorstep in under 30 minutes just as fresh as if you were standing right in front of the bamboo steamer!</p>
    `
  },

  // 8. Bhotia Parao Street Food
  {
    slug: 'blog-bhotia-parao-street-food.html',
    title: 'Bhotia Parao Food Walk: Exploring Haldwani\'s Legendary Evening Street Food Hub',
    metaTitle: 'Bhotia Parao Street Food Walk & Delivery Guide Haldwani | Streat Eats',
    desc: 'Experience the sights, aromas, and iconic street stalls of Bhotia Parao in Haldwani. From crispy tawa burgers to hot kathi rolls, order on Streat Eats in 30 mins.',
    keywords: 'Bhotia Parao street food, Bhotia Parao Haldwani, best burgers Bhotia Parao, evening snacks Haldwani, Bhotia Parao food delivery',
    tag: 'Local Food Walk',
    tagClass: 'tag-food',
    category: 'food',
    date: 'August 08, 2026',
    dateIso: '2026-08-08',
    readTime: '8 Min Read • 1,050 Words',
    coverImg: 'bhotia_parao_food.jpg',
    coverCaption: 'Bustling evening street food stalls at Bhotia Parao, Haldwani, Uttarakhand.',
    lang: 'en',
    authorName: 'Streat Eats Local Guide',
    excerpt: 'Step into the beating heart of Haldwani\'s evening food culture. Discover the legendary stalls of Bhotia Parao and how to order from them online.',
    contentHtml: `
      <p>If you ask any Haldwani local where the city goes when dusk falls, the unanimous answer is <strong>Bhotia Parao</strong>. Situated along the main artery connecting the railway station to Nainital Road, Bhotia Parao transforms every evening into a vibrant open-air culinary festival.</p>
      <p>Here, the air is thick with the tantalizing aromas of sizzling burger patties, roasting kathi rolls, and bubbling vats of spicy chaat.</p>

      <h2>The Iconic Tawa Burgers of Bhotia Parao</h2>
      <p>What makes Bhotia Parao burgers unique is the generous application of desi spices and fresh herbs. The potato patties are spiced with cumin, coriander, and green chilies, shallow-fried on large iron tawas until golden brown, and placed inside butter-toasted buns with sliced onions and signature green chutney.</p>

      <div class="inline-img-box">
        <img src="streat_eats_delivery.jpg" alt="Delivery from Bhotia Parao stalls">
        <div class="inline-img-caption">Streat Eats riders pickup fresh orders directly from Bhotia Parao stalls for instant delivery.</div>
      </div>

      <h2>Ordering Bhotia Parao Food Without the Traffic Chaos</h2>
      <p>While visiting Bhotia Parao in person is fun, parking two-wheelers and cars during peak 7 PM to 9 PM hours can be stressful. With <strong>Streat Eats</strong>, you get the exact same fresh food delivered to your home with zero markup on stall prices!</p>
    `
  },

  // 9. Nagar Palika Food Guide
  {
    slug: 'blog-nagar-palika-food-guide.html',
    title: 'Nagar Palika Chauraha: The Epicenter of Haldwani\'s Iconic Street Food & Fast Delivery',
    metaTitle: 'Nagar Palika Chauraha Food Guide Haldwani | Iconic Momos & Chaat Delivery',
    desc: 'Explore Nagar Palika Chauraha in Haldwani — famous for legendary momos, spicy chowmein, and evening snacks. Order online with Streat Eats in 30 minutes.',
    keywords: 'Nagar Palika Haldwani food, Nagar Palika Chauraha street food, Nagar Palika momos Haldwani, food delivery near Nagar Palika Haldwani',
    tag: 'Local Food Walk',
    tagClass: 'tag-food',
    category: 'food',
    date: 'August 05, 2026',
    dateIso: '2026-08-05',
    readTime: '8 Min Read • 1,000 Words',
    coverImg: 'haldwani_street_food.jpg',
    coverCaption: 'Iconic street food stalls around Nagar Palika Chauraha in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Local Guide',
    excerpt: 'Nagar Palika Chauraha is where generations of Haldwani residents have gathered for momos and street snacks. Explore its rich food heritage.',
    contentHtml: `
      <p>Located at the intersection of Haldwani\'s historic administrative quarter and commercial markets, <strong>Nagar Palika Chauraha</strong> is celebrated as the birthplace of modern street food in the city.</p>
      <p>For over two decades, families, college students, and office workers have flocked to this square to enjoy freshly steamed dumplings, wok-tossed spicy noodles, and hot beverages.</p>

      <h2>The Magic of Nagar Palika Chutneys</h2>
      <p>What sets Nagar Palika stalls apart from anywhere else is the legendary fiery red chili-garlic chutney. Made fresh every afternoon using mountain garlic and sun-dried red chilies, it delivers a sharp, addictive kick that locals swear by.</p>

      <div class="inline-img-box">
        <img src="steamed_momos_haldwani.jpg" alt="Steaming momos at Nagar Palika">
        <div class="inline-img-caption">Fresh batches of steamed momos ready for dispatch on Streat Eats.</div>
      </div>
    `
  },

  // 10. Mukhani Food Spots
  {
    slug: 'blog-mukhani-food-spots.html',
    title: 'Mukhani Chauraha & Kaladhungi Road Food Guide: Top Evening Stalls, Rolls & Chowmein',
    metaTitle: 'Mukhani Chauraha & Kaladhungi Road Food Guide Haldwani | Streat Eats Delivery',
    desc: 'Discover the top fast food, kathi rolls, chowmein, and snacks around Mukhani Chauraha and Kaladhungi Road in Haldwani. Fast 30-min delivery on Streat Eats.',
    keywords: 'Mukhani Haldwani food, Kaladhungi Road street food Haldwani, kathi rolls Mukhani, street chowmein Haldwani, Streat Eats Mukhani',
    tag: 'Local Food Walk',
    tagClass: 'tag-food',
    category: 'food',
    date: 'August 03, 2026',
    dateIso: '2026-08-03',
    readTime: '8 Min Read • 1,020 Words',
    coverImg: 'bhotia_parao_food.jpg',
    coverCaption: 'Fast food stalls and rolls along Kaladhungi Road and Mukhani Chauraha.',
    lang: 'en',
    authorName: 'Streat Eats Local Guide',
    excerpt: 'Mukhani and Kaladhungi Road are bursting with high-energy street food joints. Explore the best rolls, noodles, and quick bites in this bustling neighborhood.',
    contentHtml: `
      <p>As Haldwani expanded westward along Kaladhungi Road toward the foothills of Corbett and Nainital, <strong>Mukhani Chauraha</strong> quickly grew into one of the city\'s busiest and most dynamic culinary hotspots.</p>
      <p>Catering to a young demographic of coaching students, young professionals, and residential colonies, Mukhani is famous for rapid-service kathi rolls, Chinese platters, and fusion street burgers.</p>

      <h2>Kathi Rolls and Frankie Delights</h2>
      <p>From flaky laccha paratha egg rolls to spiced paneer and soya chaap frankies, Mukhani vendors prepare customized rolls packed with thinly sliced onions, chaat masala, and house dips in under two minutes.</p>

      <div class="inline-img-box">
        <img src="streat_eats_delivery.jpg" alt="Delivery in Mukhani area">
        <div class="inline-img-caption">Streat Eats provides rapid delivery across all sectors of Mukhani and Kaladhungi Road.</div>
      </div>
    `
  },

  // 11. Tikonia Street Food
  {
    slug: 'blog-tikonia-street-food.html',
    title: 'Tikonia Chauraha Street Food Guide: Best Quick Bites, Chaat & Evening Snacks in Haldwani',
    metaTitle: 'Tikonia Chauraha Street Food Guide Haldwani | Best Quick Bites & Delivery',
    desc: 'Explore the bustling food scene at Tikonia Chauraha in Haldwani. From pani puri and aloo tikki to hot momos, order on Streat Eats at genuine stall prices.',
    keywords: 'Tikonia Haldwani street food, Tikonia Chauraha food stalls, fast food delivery Tikonia, best snacks Tikonia Haldwani',
    tag: 'Local Food Walk',
    tagClass: 'tag-food',
    category: 'food',
    date: 'July 30, 2026',
    dateIso: '2026-07-30',
    readTime: '7 Min Read • 950 Words',
    coverImg: 'aloo_tikki_chaat.jpg',
    coverCaption: 'Crispy aloo tikki and chaat stalls around Tikonia Chauraha in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Local Guide',
    excerpt: 'Tikonia Chauraha connects Haldwani to Nainital Road and the civil lines. Discover why its chaat and quick bites are loved by thousands daily.',
    contentHtml: `
      <p>Situated right at the junction of Nainital Road and the central commercial markets, <strong>Tikonia Chauraha</strong> is always alive with energy. For anyone craving quick, spicy, and authentic street snacks during shopping trips or evening strolls, Tikonia is an essential stop.</p>

      <h2>Gol Gappe &amp; Pani Puri with 3 Flavored Waters</h2>
      <p>Tikonia\'s pani puri stalls are famed for offering distinct water flavors: chilled hing-jeera water, spicy mint-coriander water, and sweet-sour tamarind saunth. The puris are exceptionally crisp, filled with boiled potato and chickpea mix.</p>
    `
  },

  // 12. Best Burgers in Haldwani
  {
    slug: 'blog-best-burgers-in-haldwani.html',
    title: 'Best Desi Street Burgers in Haldwani: Crispy Tawa Patties, Spicy Chutneys & 30-Min Delivery',
    metaTitle: 'Best Desi Street Burgers in Haldwani | Crispy Patties & 30-Min Delivery',
    desc: 'Discover the best desi street burgers in Haldwani. Thick spiced patties, tawa toasted buns, and tangy mint sauces delivered to your home by Streat Eats.',
    keywords: 'best burgers in Haldwani, desi street burger Haldwani, burger delivery Haldwani, Bhotia Parao burger, Streat Eats burger order',
    tag: 'Foodie Guide',
    tagClass: 'tag-food',
    category: 'food',
    date: 'July 28, 2026',
    dateIso: '2026-07-28',
    readTime: '8 Min Read • 1,050 Words',
    coverImg: 'bhotia_parao_food.jpg',
    coverCaption: 'Handmade double patty street burgers sizzling on the griddle in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Food Guide Team',
    excerpt: 'Thick spiced aloo patties, toasted buns, shredded cabbage, and secret street sauces — explore the best burgers in Haldwani.',
    contentHtml: `
      <p>While global fast food franchises have opened branches in Tier-1 cities, the authentic <strong>Desi Street Burger of Haldwani</strong> remains completely unmatched in flavor, portion size, and affordability.</p>
      <p>Cooked fresh on heavily seasoned iron tawas, these burgers are hearty, spicy, and deeply comforting.</p>

      <h2>The Anatomy of a Perfect Haldwani Street Burger</h2>
      <ul>
        <li><strong>The Patty:</strong> Hand-mashed boiled potatoes infused with garam masala, coriander, green chilies, and crunchy breadcrumbs, fried until deeply golden.</li>
        <li><strong>The Bun:</strong> Generously buttered and toasted on the tawa to soak up the griddle flavors.</li>
        <li><strong>The Dressings:</strong> Shredded cabbage, crunchy onion rings, sliced tomatoes, tangy red chili sauce, and thick spiced mayonnaise.</li>
      </ul>
    `
  },

  // 13. Best Chaat & Aloo Tikki
  {
    slug: 'blog-best-chaat-aloo-tikki-haldwani.html',
    title: 'Authentic Aloo Tikki & Chaat in Haldwani: Exploring the Heritage of Street Flavors',
    metaTitle: 'Best Aloo Tikki & Chaat in Haldwani | Street Food Heritage & Delivery',
    desc: 'Experience the ultimate crispy aloo tikki, papdi chaat, and dahi bhalla in Haldwani. Learn about the legendary chaat vendors and order via Streat Eats in 30 mins.',
    keywords: 'aloo tikki Haldwani, best chaat in Haldwani, papdi chaat Haldwani, gol gappe Haldwani, chaat delivery Haldwani',
    tag: 'Foodie Guide',
    tagClass: 'tag-food',
    category: 'food',
    date: 'July 25, 2026',
    dateIso: '2026-07-25',
    readTime: '8 Min Read • 1,020 Words',
    coverImg: 'aloo_tikki_chaat.jpg',
    coverCaption: 'Crispy ghee-roasted aloo tikki garnished with curd, chutneys, and sev in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Food Guide Team',
    excerpt: 'Ghee-roasted tikkis, chilled curd, and tangy tamarind saunth — discover the best traditional chaat spots across Haldwani.',
    contentHtml: `
      <p>Chaat is the soul of North Indian street food, and <strong>Haldwani</strong> holds a proud tradition of generational chaat masters. From the narrow alleys of Sadar Bazar to the vibrant stalls on Bhotia Parao, aloo tikki is treated with artisanal respect.</p>

      <h2>Slow-Roasting on Heavy Cast Iron</h2>
      <p>Unlike commercial kitchens that rush their food, Haldwani\'s chaat vendors allow their potato patties to crisp slowly around the outer rim of massive circular tawas for 20 to 30 minutes, producing an irresistible golden crust while keeping the interior spiced and fluffy.</p>
    `
  },

  // 14. Budget Food for Students
  {
    slug: 'blog-budget-food-for-students-haldwani.html',
    title: 'Budget Food Guide for College Students in Haldwani: Top Delicious Meals Under ₹100',
    metaTitle: 'Budget Food for Students in Haldwani Under ₹100 | Streat Eats Delivery',
    desc: 'Studying in Haldwani? Here is the ultimate student guide to delicious, filling street food meals under ₹100 delivered right to your hostel or room via Streat Eats.',
    keywords: 'cheap food Haldwani, student food delivery Haldwani, budget meals Haldwani under 100, MB PG College food spots Haldwani',
    tag: 'Student Guide',
    tagClass: 'tag-food',
    category: 'food',
    date: 'July 22, 2026',
    dateIso: '2026-07-22',
    readTime: '8 Min Read • 1,080 Words',
    coverImg: 'steamed_momos_haldwani.jpg',
    coverCaption: 'Budget-friendly steaming momos and street combos for students in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Student Team',
    excerpt: 'Hostel life in Haldwani doesn\'t mean boring food. Discover hearty, pocket-friendly street food meals under ₹100 delivered in 30 minutes.',
    contentHtml: `
      <p>Haldwani is a major educational hub in Uttarakhand, home to thousands of college students attending MB PG College, medical institutions, engineering colleges, and competitive coaching centers.</p>
      <p>When studying late for exams or hanging out with roommates, students need food that is <strong>filling, delicious, and extremely affordable</strong>. Here are the top meals you can order on <strong>Streat Eats</strong> for under ₹100!</p>

      <h2>Top Meals Under ₹100 on Streat Eats</h2>
      <ol>
        <li><strong>Full Plate Steamed Veg Momos (10 pcs):</strong> ₹50 – ₹60</li>
        <li><strong>Desi Street Burger + Green Chutney:</strong> ₹35 – ₹45</li>
        <li><strong>Spicy Veg Chowmein (Large Portion):</strong> ₹40 – ₹50</li>
        <li><strong>Crispy Vegetable Spring Roll (2 pcs):</strong> ₹40 – ₹50</li>
        <li><strong>Double Egg / Paneer Kathi Roll:</strong> ₹60 – ₹80</li>
      </ol>
      <p>With coupon code <strong>STREAT50</strong> on your first order, students can enjoy a feast for almost next to nothing!</p>
    `
  },

  // 15. Late Night Food Delivery
  {
    slug: 'blog-late-night-food-delivery-haldwani.html',
    title: 'Late Night Street Food Delivery in Haldwani: How to Satisfy Midnight Cravings via Streat Eats',
    metaTitle: 'Late Night Street Food Delivery in Haldwani | Midnight Momos & Burgers',
    desc: 'Craving midnight momos, hot rolls, or burgers in Haldwani? Learn how Streat Eats delivers late night street food safely to your doorstep in 30 minutes.',
    keywords: 'late night food delivery Haldwani, night food order Haldwani, midnight momos Haldwani, Streat Eats night delivery',
    tag: 'Night Delivery',
    tagClass: '',
    category: 'tech food',
    date: 'July 18, 2026',
    dateIso: '2026-07-18',
    readTime: '7 Min Read • 980 Words',
    coverImg: 'late_night_delivery.jpg',
    coverCaption: 'Streat Eats rider delivering hot street food late at night in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Ops Team',
    excerpt: 'Late-night cravings strike when everything is closed. Discover how Streat Eats keeps Haldwani\'s top street stalls accessible late into the evening.',
    contentHtml: `
      <p>Whether you are pulling an all-nighter for university exams, returning on the late-night train at Kathgodam railway station, or hosting friends for weekend gaming, finding quality hot food after 9 PM in Tier-2 cities used to be nearly impossible.</p>
      <p><strong>Streat Eats</strong> has solved this by partnering with late-night food stalls across Haldwani to ensure you never have to sleep on an empty stomach.</p>

      <div class="inline-img-box">
        <img src="late_night_delivery.jpg" alt="Night food delivery in Haldwani">
        <div class="inline-img-caption">Dedicated late-night delivery fleet ensuring safe and fast delivery in Haldwani.</div>
      </div>
    `
  },

  // 16. Streat Eats vs Zomato & Swiggy
  {
    slug: 'blog-streat-eats-vs-zomato-swiggy.html',
    title: 'Streat Eats vs Other Food Apps: Why Zero Food Markup Makes All the Difference in Haldwani',
    metaTitle: 'Streat Eats vs Zomato & Swiggy in Haldwani | Zero Markup Comparison',
    desc: 'Compare Streat Eats with national aggregators in Haldwani. Learn why zero food markup, ₹5 delivery fees, and authentic street vendors make Streat Eats the best choice.',
    keywords: 'Streat Eats vs Zomato, Streat Eats vs Swiggy Haldwani, zero markup food delivery, cheapest food delivery app Haldwani',
    tag: 'Price Transparency',
    tagClass: '',
    category: 'tech',
    date: 'July 15, 2026',
    dateIso: '2026-07-15',
    readTime: '9 Min Read • 1,100 Words',
    coverImg: 'streat_eats_delivery.jpg',
    coverCaption: 'Streat Eats operates on a 100% transparent zero markup model for all food items.',
    lang: 'en',
    authorName: 'Streat Eats Editorial Team',
    excerpt: 'See the price breakdown comparison between Streat Eats and national aggregators. Why pay 35% extra when you can get genuine stall prices?',
    contentHtml: `
      <p>Have you ever noticed that a plate of momos costing ₹60 at your neighborhood stall suddenly costs ₹95 on major national food apps? Add a ₹50 delivery fee, ₹15 platform fee, and ₹10 packing charge — and your simple ₹60 snack ends up costing ₹170!</p>
      <p>This inflated pricing model has frustrated consumers across India. When <strong>Karan Kumar</strong> and <strong>Lokesh Paneru</strong> founded Streat Eats in Haldwani, they eliminated these hidden costs completely.</p>

      <h2>The Side-by-Side Order Comparison</h2>
      <p>Let’s look at a typical order of 2 plates of Steamed Momos + 1 Burger in Haldwani:</p>
      <ul>
        <li><strong>On Typical Apps:</strong> Food (₹190) + Delivery (₹45) + Platform Fee (₹12) + Packing (₹20) = <strong>₹267 Total</strong></li>
        <li><strong>On Streat Eats:</strong> Food (₹150 exact stall price) + Delivery (₹10 nearby) = <strong>₹160 Total</strong> (Saved over ₹107!)</li>
      </ul>
    `
  },

  // 17. Vendor Partner Program
  {
    slug: 'blog-vendor-partner-program.html',
    title: 'How Haldwani Street Vendors Are Boosting Daily Earnings with Streat Eats Digital Orders',
    metaTitle: 'How Haldwani Street Food Vendors Partner with Streat Eats | Vendor Growth Story',
    desc: 'Learn how local street food carts and stalls in Haldwani are increasing daily sales by 40% with Streat Eats. Discover the vendor onboarding process by Lokesh Paneru.',
    keywords: 'street food vendor partner Haldwani, Streat Eats vendor onboarding, Lokesh Paneru vendor relations, local business growth Haldwani',
    tag: 'Vendor Community',
    tagClass: '',
    category: 'founders tech',
    date: 'July 10, 2026',
    dateIso: '2026-07-10',
    readTime: '8 Min Read • 1,020 Words',
    coverImg: 'bhotia_parao_food.jpg',
    coverCaption: 'Local street food cart owners in Haldwani partnering with Streat Eats.',
    lang: 'en',
    authorName: 'Streat Eats Vendor Relations',
    excerpt: 'Read how small family-run food carts in Haldwani are reaching hundreds of new customers every day without investing in expensive hardware.',
    contentHtml: `
      <p>Street food vendors are the unsung culinary heroes of India. They work long hours over hot stoves, preparing recipes perfected across decades. Yet, until <strong>Streat Eats</strong> launched in Haldwani, they had no way to capture online delivery demand.</p>
      <p>Under the operational leadership of co-founder <strong>Lokesh Paneru</strong>, Streat Eats created a simple, frictionless onboarding program designed specifically for street vendors.</p>
    `
  },

  // 18. Monsoon Street Food Guide
  {
    slug: 'blog-monsoon-street-food-haldwani.html',
    title: 'Monsoon Street Food in Haldwani: Top 7 Comfort Foods to Enjoy on Rainy Mountain Days',
    metaTitle: 'Monsoon Street Food in Haldwani | Top Rainy Day Comfort Foods & Delivery',
    desc: 'Rainy mountain days call for piping hot snacks. Discover the best monsoon comfort street foods in Haldwani and how to get them delivered during heavy rains.',
    keywords: 'monsoon food Haldwani, rainy day food delivery Haldwani, hot momos rain Haldwani, chai pakoda Haldwani',
    tag: 'Seasonal Guide',
    tagClass: 'tag-food',
    category: 'food',
    date: 'July 05, 2026',
    dateIso: '2026-07-05',
    readTime: '8 Min Read • 1,000 Words',
    coverImg: 'steamed_momos_haldwani.jpg',
    coverCaption: 'Piping hot steamed momos are Haldwani\'s ultimate monsoon comfort food.',
    lang: 'en',
    authorName: 'Streat Eats Food Guide Team',
    excerpt: 'When mountain rains sweep through Haldwani, nothing beats hot momos and spicy tea. Discover the top rainy day street foods delivered in 30 mins.',
    contentHtml: `
      <p>The monsoon season transforms Haldwani and the surrounding Kumaon hills into lush green wonderlands. But with romantic rain showers comes waterlogged roads and traffic jams that make stepping out for evening snacks difficult.</p>
      <p>With <strong>Streat Eats</strong>, you don’t have to get soaked to enjoy Haldwani\'s finest rainy-day comfort foods.</p>
    `
  },

  // 19. Hindi Top 10 Momos Stalls
  {
    slug: 'blog-haldwani-top-10-momos-hindi.html',
    title: 'हल्द्वानी के 10 सबसे मशहूर मोमोज स्टॉल्स और उनका असली स्वाद | संपूर्ण फूड गाइड (2026)',
    metaTitle: 'हल्द्वानी के 10 बेस्ट मोमोज स्टॉल्स | संपूर्ण फूड गाइड और 30 मिनट डिलीवरी',
    desc: 'हल्द्वानी में सबसे स्वादिष्ट मोमोज कहाँ मिलते हैं? जानिए नगर पालिका, भोटिया पड़ाव और मुखानी के 10 मशहूर मोमोज स्टॉल्स की पूरी जानकारी हिंदी में।',
    keywords: 'हल्द्वानी के बेस्ट मोमोज, मोमोज डिलीवरी हल्द्वानी हिंदी, नगर पालिका मोमोज, भोटिया पड़ाव मोमोज, Streat Eats momos',
    tag: 'हिन्दी फूड गाइड',
    tagClass: 'tag-hindi',
    category: 'hindi food',
    date: '01 जुलाई, 2026',
    dateIso: '2026-07-01',
    readTime: '9 मिनट पढ़ाई • 1,150 शब्द',
    coverImg: 'steamed_momos_haldwani.jpg',
    coverCaption: 'हल्द्वानी के मशहूर स्टॉल्स के ताजे और स्वादिष्ट मोमोज।',
    lang: 'hi',
    authorName: 'Streat Eats फूड टीम',
    excerpt: 'वेज, पनीर, फ्राइड और कुरकुरे मोमोज — जानिए हल्द्वानी के सबसे लोकप्रिय 10 मोमोज स्टॉल्स और घर बैठे 30 मिनट में आर्डर करने का तरीका।',
    contentHtml: `
      <p>हल्द्वानी के लोगों के लिए शाम का मतलब है — दोस्तों के साथ चौराहे पर खड़े होकर गर्मागर्म मोमोज और तीखी लाल चटनी का आनंद लेना। पूरे उत्तराखंड में हल्द्वानी के मोमोज अपने पतले छिलके, रसीले मसाले और लाजवाब लहसुन-मिर्च चटनी के लिए प्रसिद्ध हैं।</p>
      <p>इस गाइड में हम आपको बता रहे हैं <strong>हल्द्वानी के 10 सबसे मशहूर मोमोज स्टॉल्स</strong> के बारे में, जिन्हें आप <strong>Streat Eats</strong> के जरिए घर बैठे 30 मिनट में मंगा सकते हैं!</p>

      <h2>1. नगर पालिका के क्लासिक स्टीम्ड मोमोज</h2>
      <p>नगर पालिका चौराहे के पास लगने वाले मोमोज स्टॉल्स पिछले 15 सालों से शहरवासियों के पसंदीदा हैं। यहाँ की तीखी लाल चटनी और मेयोनीज का स्वाद हर किसी की जुबान पर चढ़ा रहता है।</p>
    `
  },

  // 20. Inside the Code: Karan Kumar
  {
    slug: 'blog-karan-kumar-tech-interview.html',
    title: 'Inside the Code: How 21-Year-Old Karan Kumar Built Streat Eats from Haldwani, Uttarakhand',
    metaTitle: 'How 21-Year-Old Karan Kumar Built Streat Eats App | Tech Architecture & Story',
    desc: 'Explore the technical architecture, design philosophy, and coding journey of Karan Kumar, the 21-year-old software architect who built Streat Eats in Haldwani.',
    keywords: 'Karan Kumar developer, Karan Kumar coding story, Streat Eats tech stack, young developer Uttarakhand, Karan Kumar software architect',
    tag: 'Engineering & Vision',
    tagClass: '',
    category: 'founders tech',
    date: 'June 25, 2026',
    dateIso: '2026-06-25',
    readTime: '9 Min Read • 1,180 Words',
    coverImg: 'founder.webp',
    coverCaption: 'Karan Kumar, Founder & CEO of Streat Eats, at his workspace in Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Engineering Blog',
    excerpt: 'Go behind the scenes of Streat Eats\' codebase. Learn how Karan Kumar built a lightning-fast hyperlocal delivery platform single-handedly at age 21.',
    contentHtml: `
      <p>When people think of scalable food delivery applications, they envision massive engineering departments in Silicon Valley or Bengaluru. But in Haldwani, Uttarakhand, 21-year-old software engineer <strong>Karan Kumar</strong> proved that a focused developer with strong fundamentals can build an entire hyperlocal ecosystem from scratch.</p>

      <h2>The Architecture Behind Streat Eats</h2>
      <p>Rather than adopting bloated third-party frameworks, Karan focused on speed, reliability, and lightweight mobile performance:</p>
      <ul>
        <li><strong>Sub-second Page Loads:</strong> Ultra-lean frontend rendering that loads instantly even on 3G mountain cellular connections.</li>
        <li><strong>Real-Time Dispatch Engine:</strong> Automated algorithmic matching that pairs incoming food orders with the nearest zonal rider in under 3 seconds.</li>
        <li><strong>Zero Friction Mobile Interface:</strong> Minimal taps required from menu discovery to order placement.</li>
      </ul>

      <blockquote>
        "Code should serve real human needs. Building Streat Eats was about making sure a family in Mukhani or a student in Bhotia Parao could get dinner without technical friction."
        <br><br><strong>— Karan Kumar, Founder &amp; CEO</strong>
      </blockquote>
    `
  },

  // 21. Lokesh Paneru Operations Deep Dive
  {
    slug: 'blog-lokesh-paneru-operations-deepdive.html',
    title: 'Behind the 30-Minute Speed: How Lokesh Paneru Mastered Hyperlocal Logistics in Haldwani',
    metaTitle: 'How Lokesh Paneru Mastered 30-Min Delivery in Haldwani | Streat Eats Logistics',
    desc: 'Discover the operational secrets behind Streat Eats\' 30-minute delivery promise in Haldwani, managed by 20-year-old Co-Founder Lokesh Paneru.',
    keywords: 'Lokesh Paneru logistics, 30 minute delivery Haldwani, Streat Eats operations, Lokesh Paneru fleet management, Haldwani delivery startup',
    tag: 'Operations Deep Dive',
    tagClass: '',
    category: 'founders tech',
    date: 'June 20, 2026',
    dateIso: '2026-06-20',
    readTime: '8 Min Read • 1,080 Words',
    coverImg: 'co founder.jpeg',
    coverCaption: 'Lokesh Paneru, Co-Founder & Head of Operations at Streat Eats Haldwani.',
    lang: 'en',
    authorName: 'Streat Eats Logistics Team',
    excerpt: 'How does food arrive steaming hot in under 30 minutes in Haldwani? Meet Lokesh Paneru, the 20-year-old operations head managing the ground fleet.',
    contentHtml: `
      <p>Delivering hot food in under 30 minutes across Haldwani is a rigorous operational challenge. Rain, market crowds, and railway crossing delays are everyday obstacles.</p>
      <p>At <strong>Streat Eats</strong>, 20-year-old Co-Founder and Head of Operations <strong>Lokesh Paneru</strong> designed a dynamic zonal routing network that guarantees rapid delivery times while keeping riders safe and vendors empowered.</p>
    `
  }
];

// Helper to generate Related Articles HTML
function getRelatedArticlesHtml(currentSlug) {
  const others = articles.filter(a => a.slug !== currentSlug).slice(0, 3);
  return `  <!-- Related Articles Section -->
  <section class="related-section">
    <div class="container">
      <h3 class="related-title">More Stories from Streat Eats</h3>
      <div class="related-grid">
${others.map(a => `        <a href="${a.slug}" class="related-card">
          <img src="${a.coverImg}" alt="${a.title}">
          <div class="related-card-body">
            <h4>${a.title.split('|')[0].trim()}</h4>
            <p>${a.excerpt}</p>
          </div>
        </a>`).join('\n\n')}
      </div>
    </div>
  </section>`;
}

// Generate Individual Blog Detail Pages
articles.forEach(art => {
  const isHindi = art.lang === 'hi';
  const html = `<!DOCTYPE html>
<html lang="${art.lang}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${art.metaTitle || art.title}</title>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="icon.png">
  <link rel="apple-touch-icon" href="icon.png">

  <!-- Primary SEO Meta Tags -->
  <meta name="title" content="${art.metaTitle || art.title}">
  <meta name="description" content="${art.desc}">
  <meta name="keywords" content="${art.keywords}">
  <meta name="author" content="${art.authorName}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://app.streateats.in/${art.slug}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Streat Eats">
  <meta property="og:title" content="${art.title}">
  <meta property="og:description" content="${art.desc}">
  <meta property="og:image" content="${art.coverImg}">
  <meta property="og:image:alt" content="${art.title}">
  <meta property="article:published_time" content="${art.dateIso}T10:00:00+05:30">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${art.title}">
  <meta name="twitter:description" content="${art.desc}">
  <meta name="twitter:image" content="${art.coverImg}">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "inLanguage": "${art.lang}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://app.streateats.in/${art.slug}"
    },
    "headline": "${art.title.replace(/"/g, '\\"')}",
    "description": "${art.desc.replace(/"/g, '\\"')}",
    "image": [
      "https://app.streateats.in/${art.coverImg}",
      "https://app.streateats.in/founder.webp",
      "https://app.streateats.in/co%20founder.jpeg",
      "https://app.streateats.in/streat_eats_delivery.jpg"
    ],
    "datePublished": "${art.dateIso}T10:00:00+05:30",
    "dateModified": "2026-08-31T15:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "${art.authorName}",
      "url": "https://app.streateats.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Streat Eats",
      "url": "https://app.streateats.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://app.streateats.in/icon.png"
      }
    }
  }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <!-- Unified Stylesheet -->
  <link rel="stylesheet" href="blog.css">
</head>

<body>

${getHeader('blogs')}

  <!-- Breadcrumbs -->
  <div class="container">
    <div class="breadcrumbs">
      <a href="index.html">Home</a> &gt;
      <a href="blogs.html">Blog</a> &gt;
      <span>${art.title.split('|')[0].trim()}</span>
    </div>
  </div>

  <!-- Main Article Container -->
  <article class="container">
    <header class="article-header">
      <span class="article-tag ${art.tagClass}">${art.tag}</span>
      <h1 class="article-title">${art.title}</h1>

      <div class="article-meta-row">
        <div class="author-badge">
          <img src="${art.coverImg.includes('founder') ? art.coverImg : (isHindi ? 'founder.webp' : 'icon.png')}" alt="${art.authorName}" class="author-avatar">
          <div>
            <div class="author-name">${art.authorName}</div>
            <div style="font-size: 0.8rem; color: var(--muted);">Haldwani, Uttarakhand</div>
          </div>
        </div>
        <div>📅 ${art.date}</div>
        <div>⏱️ ${art.readTime}</div>
        <div>📍 Haldwani, Uttarakhand</div>
      </div>

      <!-- Featured Image -->
      <figure class="featured-cover">
        <img src="${art.coverImg}" alt="${art.title}">
        <figcaption class="featured-caption">
          ${art.coverCaption}
        </figcaption>
      </figure>
    </header>

    <div class="article-grid">
      <!-- Main Content Column -->
      <div class="article-content">
        ${art.contentHtml}

        <!-- Author Bio Box -->
        <div class="author-bio-box">
          <img src="icon.png" alt="Streat Eats Logo" class="author-bio-img" style="border-radius: 14px;">
          <div class="author-bio-text">
            <h4>About Streat Eats Haldwani</h4>
            <p>
              <strong>Streat Eats</strong> is Haldwani's premier hyperlocal street food delivery service, founded by Karan Kumar (CEO) and Lokesh Paneru (Head of Operations). Download the app from <a href="https://play.google.com/store/apps/details?id=com.streeteats.hld" target="_blank" rel="noopener">Google Play Store</a>.
            </p>
          </div>
        </div>
      </div>

${getSidebar(isHindi)}
    </div>
  </article>

${getRelatedArticlesHtml(art.slug)}

${getFooter()}

</body>
</html>`;

  fs.writeFileSync(path.join(ROOT, art.slug), html, 'utf8');
  console.log(`Generated: ${art.slug}`);
});

// Generate Blogs Hub Page (blogs.html & blog.html)
const blogsHubHtml = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Streat Eats Blog — Stories, Founders & Street Food of Haldwani (21 Articles)</title>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="icon.png">
  <link rel="apple-touch-icon" href="icon.png">

  <!-- Primary SEO Meta Tags -->
  <meta name="title" content="Streat Eats Blog — Stories, Founders & Street Food of Haldwani (21 Articles)">
  <meta name="description" content="Explore 21 articles and guides on Streat Eats, its founders Karan Kumar and Lokesh Paneru, and the top street food stalls across Haldwani, Uttarakhand. Available in English & Hindi.">
  <meta name="keywords" content="Streat Eats blog, Karan Kumar, Karan Kumar Haldwani, Lokesh Paneru, Lokesh Paneru Haldwani, Streat Eats founders, street food delivery Haldwani, best food delivery app Haldwani, Uttarakhand food startup">
  <meta name="author" content="Streat Eats Editorial Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://app.streateats.in/blogs.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Streat Eats Blog">
  <meta property="og:title" content="Streat Eats Blog — 21 Street Food Stories & Founder Insights from Haldwani">
  <meta property="og:description" content="Read 21 curated stories behind Streat Eats, founders Karan Kumar & Lokesh Paneru, top momos, burgers, and delivery secrets in Haldwani.">
  <meta property="og:image" content="founder.webp">

  <!-- Schema.org Blog Graph -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Streat Eats Blog",
    "url": "https://app.streateats.in/blogs.html",
    "description": "Stories, food guides, and founder journeys from Streat Eats in Haldwani, Uttarakhand.",
    "publisher": {
      "@type": "Organization",
      "name": "Streat Eats",
      "logo": {
        "@type": "ImageObject",
        "url": "icon.png"
      }
    }
  }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="blog.css">

  <style>
    .blog-hub-hero {
      padding: 56px 0 32px;
      text-align: center;
    }
    .hub-label {
      font-family: var(--fh);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--pri);
      margin-bottom: 12px;
    }
    .hub-title {
      font-family: var(--fh);
      font-weight: 800;
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      line-height: 1.15;
      color: var(--text);
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .hub-sub {
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 650px;
      margin: 0 auto 32px;
      line-height: 1.6;
    }
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }
    .filter-btn {
      font-family: var(--fh);
      font-weight: 600;
      font-size: 0.88rem;
      padding: 9px 20px;
      border-radius: var(--r-pill);
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text2);
      cursor: pointer;
      transition: all 0.25s;
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--pri);
      color: #FFF;
      border-color: var(--pri);
      box-shadow: var(--shadow-sm);
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      margin-bottom: 64px;
    }
    .blog-card {
      background: var(--surface);
      border-radius: var(--r-lg);
      overflow: hidden;
      border: 1px solid var(--border);
      text-decoration: none;
      color: inherit;
      transition: all 0.35s var(--ease);
      display: flex;
      flex-direction: column;
    }
    .blog-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
      border-color: var(--pri);
    }
    .blog-card-img-wrap {
      width: 100%;
      height: 195px;
      overflow: hidden;
      position: relative;
      background: #F3F4F6;
    }
    .blog-card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .blog-card:hover .blog-card-img-wrap img {
      transform: scale(1.06);
    }
    .card-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      font-family: var(--fh);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      background: rgba(255, 255, 255, 0.94);
      color: var(--pri-dark);
      padding: 4px 10px;
      border-radius: var(--r-pill);
      backdrop-filter: blur(6px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .card-badge.badge-hindi {
      color: #166534;
      background: #DCFCE7;
    }
    .blog-card-body {
      padding: 22px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .blog-card-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.78rem;
      color: var(--muted);
      margin-bottom: 10px;
    }
    .blog-card-title {
      font-family: var(--fh);
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.35;
      color: var(--text);
      margin-bottom: 10px;
    }
    .blog-card-excerpt {
      font-size: 0.88rem;
      color: var(--text2);
      line-height: 1.6;
      margin-bottom: 18px;
      flex: 1;
    }
    .card-read-link {
      font-family: var(--fh);
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--pri);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: auto;
    }
    .cta-banner {
      background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
      border-radius: var(--r-xl);
      padding: 48px 24px;
      color: #FFF;
      text-align: center;
      margin-bottom: 72px;
      box-shadow: var(--shadow-lg);
    }
    .cta-banner h2 {
      font-family: var(--fh);
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 12px;
    }
    .cta-banner p {
      font-size: 1.05rem;
      max-width: 580px;
      margin: 0 auto 24px;
      color: #FFF0E8;
    }
    @media(max-width: 960px) {
      .blog-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media(max-width: 600px) {
      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

${getHeader('blogs')}

  <section class="blog-hub-hero">
    <div class="container">
      <div class="hub-label">Insights &amp; Food Stories</div>
      <h1 class="hub-title">The Streat Eats Blog Hub</h1>
      <p class="hub-sub">
        Explore 21 in-depth articles on Haldwani's street food culture, meet founders Karan Kumar &amp; Lokesh Paneru, and master the art of 30-minute zero-markup food delivery.
      </p>

      <!-- Category Filter Tabs -->
      <div class="filter-tabs">
        <button class="filter-btn active" onclick="filterPosts('all', this)">All Articles (${articles.length})</button>
        <button class="filter-btn" onclick="filterPosts('founders', this)">Founders &amp; Story</button>
        <button class="filter-btn" onclick="filterPosts('food', this)">Food Guides</button>
        <button class="filter-btn" onclick="filterPosts('hindi', this)">हिन्दी ब्लॉग्स (Hindi)</button>
        <button class="filter-btn" onclick="filterPosts('tech', this)">Delivery &amp; Tech</button>
      </div>
    </div>
  </section>

  <main class="container">
    <div class="blog-grid" id="blogGrid">
${articles.map(a => `      <!-- ${a.title.split('|')[0].trim()} -->
      <a href="${a.slug}" class="blog-card" data-category="${a.category}">
        <div class="blog-card-img-wrap">
          <img src="${a.coverImg}" alt="${a.title}" loading="lazy">
          <span class="card-badge ${a.lang === 'hi' ? 'badge-hindi' : ''}">${a.tag}</span>
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span>📅 ${a.date}</span> • <span>⏱️ ${a.readTime.split('•')[0].trim()}</span>
          </div>
          <h3 class="blog-card-title">${a.title.split('|')[0].trim()}</h3>
          <p class="blog-card-excerpt">${a.excerpt}</p>
          <div class="card-read-link">${a.lang === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Full Article'} &rarr;</div>
        </div>
      </a>`).join('\n\n')}
    </div>

    <!-- Download App Banner -->
    <section class="cta-banner">
      <h2>Hungry in Haldwani? Order on Streat Eats Now!</h2>
      <p>Get your favorite momos, burgers, and chaat delivered hot to your doorstep in 30 minutes at genuine stall prices with code <strong>STREAT50</strong>.</p>
      <a href="https://play.google.com/store/apps/details?id=com.streeteats.hld&pcampaignid=web_share"
        class="btn btn-pri" style="background: #FFF; color: var(--pri); font-weight: 800; padding: 12px 28px;" target="_blank" rel="noopener">
        📲 Download Free Android App
      </a>
    </section>
  </main>

${getFooter()}

  <script>
    function filterPosts(cat, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = document.querySelectorAll('.blog-card');
      cards.forEach(card => {
        const itemCats = card.getAttribute('data-category') || '';
        if (cat === 'all' || itemCats.includes(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>

</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'blogs.html'), blogsHubHtml, 'utf8');
fs.writeFileSync(path.join(ROOT, 'blog.html'), blogsHubHtml, 'utf8');
console.log('Generated blogs.html and blog.html');

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://app.streateats.in/</loc>
    <lastmod>2026-08-31</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://app.streateats.in/blogs.html</loc>
    <lastmod>2026-08-31</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${articles.map(a => `  <url>
    <loc>https://app.streateats.in/${a.slug}</loc>
    <lastmod>${a.dateIso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('Generated sitemap.xml');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://app.streateats.in/sitemap.xml
`;

fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf8');
console.log('Generated robots.txt');
