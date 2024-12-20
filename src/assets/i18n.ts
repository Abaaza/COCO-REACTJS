// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "thankYou" : "We have received your order, Thank you",
          "each": "each",
          "pieces": "pieces",
          "piece": "piece",
          "Abstract": "Abstract",
          "Blue": "Blue",
          "Brown": "Brown",
          "Beige": "Beige",
          "White": "White",
          "People": "People",
          "Floral": "Floral",
          'Cities':'Cities',
          'Paintings':'Paintings',
          "Office": "Office",
          'Nature': "Nature",
          "Animals": "Animals",
          "African": "African",
          "Objects":"Objects",
          "Musical": "Musical",
          "Black": "Black",
          "businessDays" : "6 Business Days",
  "Yellow": "Yellow",
  "Multicolor": "Multicolor",
  "Gold": "Gold",
  "Green": "Green",
  "Pink": "Pink",
  "Red": "Red",
  "Gray": "Gray",
  "Orange": "Orange",
  "Purple": "Purple",
  "Come Dine with Us": "Come Dine with Us",
  "Almaza City Center": "Almaza City Center",
  "Cairo Festival City": "Cairo Festival City",
  "River Walk": "River Walk",
  "Heliopolis": "Heliopolis",
  "Arkan Plaza": "Arkan Plaza",
  "Madinaty Open Air Mall": "Madinaty Open Air Mall",
  "Opening Hours": "Opening Hours",
  "Sat-Wed": "Sat-Wed",
  "10am - 12pm": "10am - 12pm",
  "Thu & Fri": "Thu & Fri",
  "10am - 1am​": "10am - 1am​",
  "Our Branches": "Our Branches",
  "Explore our branches located in Egypt. Visit us at any of these locations!": 
    "Explore our branches located in Egypt. Visit us at any of these locations!",
  "Riverwalk": "Riverwalk",
  "New Cairo": "New Cairo",
  "Riverwalk mall, Mohamed Naguib Axis, New Cairo": 
    "Riverwalk mall, Mohamed Naguib Axis, New Cairo",
  "Almaza": "Almaza",

  "City Center Almaza, Suez Road, Heliopolis": 
    "City Center Almaza, Suez Road, Heliopolis",

  "Cairo Festival City Mall, New Cairo": 
    "Cairo Festival City Mall, New Cairo",
  "103 Omar Ibn El Khattab, Heliopolis": 
    "103 Omar Ibn El Khattab, Heliopolis",
  "Arkan": "Arkan",
  "Sheikh Zayed": "Sheikh Zayed",
  "Arkan Plaza, 6 of October": 
    "Arkan Plaza, 6 of October",
  "Air Mall": "Air Mall",
  "Madinaty": "Madinaty",
  "Open Air Mall, Madinaty": 
    "Open Air Mall, Madinaty",

  "branches": "Branches",
  "menu": "Menu",
  "contact": "Contact",
  "privateOccasionsHeading": "For private occasions & catering",
  "privateOccasionsText": "Please call 01222204651 or fill in the form and we will get back to you shortly",


          "cartPage": {
            "title": "Your Cart",
            "emptyMessage": "Your cart is empty",
            "sizeLabel": "Size",
            "priceLabel": "Price",
            "qtyLabel": "Qty",
            "shipping": "Shipping:",
            "freeShipping": "Free Shipping Eligible",
            "subtotal": "Subtotal: ",
            "total": "Total:",
            "proceedToCheckout": "Proceed to Checkout",
            "removeItem": "Remove item"
          },
          "ProductPage":{
            "price": "Price: {{price}}",
          },
       
          priceRange: "Price: {{min}} - {{max}} EGP",
          availableSizes: "{{count}} {{count, plural, one {size} other {sizes}}} available",
          darkMode: "Dark Mode",
          productName: "Product Name",
          selectSize: "Select size",
          selectedSize: "Selected Size: {{size}}",
          price: "Price:",
          material: "Material: Canvas",
          addToCart: "Add to cart",
          productDescription: "Product Description",
          highDefinition: "High definition picture printed on canvas with waterproof, fade-resistant, environmentally-friendly inks.",
          forRooms: "This artwork is for living room, bedroom, bathroom, kitchen.",
          professionalStretching: "Stretched and stapled by professionals on solid wood frame.",
          bestQuality: "The best quality canvas for texture and finish, premium inks for vivid color, hand-stretched, great for wall decor.",
          frameThickness: "All our frames come in a 2.8cm thickness, providing a rich appearance on your wall.",
          packaging: "Your paintings will be carefully packaged to ensure they reach you in perfect condition, ready to decorate your home.",
          warmAttention: "Warm Attention",
          colorDifference: "The actual color may be slightly different from the picture.",
          measureWall: "We recommend measuring your wall before purchase.",
          topSellers: "Top Sellers",
          backButton: "Back",
          thumbnailAlt: "Thumbnail {{index}}",
          productNotFound: "Product not found",
          priceLabel: "Price",
          currency: "EGP",
          sizesAvailable: "sizes available",
          welcome: "Welcome to our store",
          product: "Product",
     
          contactUs: "Contact Us",
          nameLabel: "Name",
          emailLabel: "Email",
          commentLabel: "Comment",
          namePlaceholder: "Your Name",
          emailPlaceholder: "Your Email",
          commentPlaceholder: "Your Comment",
          submitButton: "Submit",
          formAlert: "Please fill out all fields.",
          successMessage: "Your message has been sent successfully!",
          errorMessage: "There was an error sending your message. Please try again.",
          home: "Home",
          shop: "Shop",
          cart_empty: "Your cart is empty",
          qty: "Quantity",
   
          total_price: "Total Price",
          view_cart: "View Cart",
          cart_tooltip: "Cart ({{count}}) - Shipping: {{shipping}} EGP",
          title: "Your Cart",
            emptyMessage: "Your cart is empty",
            sizeLabel: "Size",
        
            qtyLabel: "Qty",
            shipping: "Shipping:  ",
            freeShipping: "Free Shipping Eligible",
            subtotal: "Subtotal:  EGP",
            total: "Total:  EGP",
            proceedToCheckout: "Proceed to Checkout",
            removeItem: "Remove item",
            checkout: "Checkout",
            name: "Name",
            phone: "Phone Number",
            email: "Email",
            address1: "Address 1",
            address2: "Address 2",
            city: "City",
            country: "Country",
            comments: "Comments",
            paymentMethod: "Payment Method",
            cashOnDelivery: "Cash on Delivery",
                 
          
       
            placeOrder: "Place Order",
            shippingInfo: "Shipping: {{cost}} EGP (6 business days)",
          
            orderConfirmation: "Order placed successfully!",
            orderError: "There was an error placing your order. Please try again.",
          
         
          
      
            selectPaymentMethod: "Select payment method",
         
            orderNumber: "Order Number: {{orderNumber}}",
            orderDetails: "Order Details",
            errorPlacingOrder: "There was an error placing your order. Please try again.",
            successPlacingOrder: "Order placed successfully!",
            companyName: "Wall Masters",
            copyright: "© {{year}} COCO. All rights reserved.",
            contactInfo: "For Contact Call: 01222204651",
     
            onePiece: "1 piece",
            threePieces: "3 pieces",
            showMore: "Show More",
            theme: "Theme",
            colors: "Colors",
            noOfPieces: "No of pieces",
            resetFilters: "Reset Filters",
            selectedColors: "{{count}} Colors Selected",
          wallFrame: "Wall Frame",
        
        
    
        },
      },
      ar: {
        translation: {
          "privateOccasionsHeading": "للمناسبات الخاصة والتموين",
          "privateOccasionsText": "يرجى الاتصال على 01222204651 أو ملء النموذج وسنعاود الاتصال بك في اقرب وقت",
     
        
        
        
        
        
        
        
        
        

          "Our Branches": "فروعنا",
          "Explore our branches located in Egypt. Visit us at any of these locations!": 
            "اكتشف فروعنا في مصر. قم بزيارتنا في أي من هذه المواقع!",
          "Riverwalk": "ريفر ووك",
          "New Cairo": "القاهرة الجديدة",
          "Riverwalk mall, Mohamed Naguib Axis, New Cairo": 
            "مول ريفر ووك، محور محمد نجيب، القاهرة الجديدة",
          "Almaza": "الماظه",
          "Heliopolis": "مصر الجديدة",
          "City Center Almaza, Suez Road, Heliopolis": 
            "سيتي سنتر ألماظة، طريق السويس، مصر الجديدة",
          "Cairo Festival City": "كايرو فستيفال سيتي",
          "Cairo Festival City Mall, New Cairo": 
            "كايرو فستيفال سيتي مول، القاهرة الجديدة",
          "103 Omar Ibn El Khattab, Heliopolis": 
            "١٠٣ عمر بن الخطاب، مصر الجديدة",
          "Arkan": "أركان",
          "Sheikh Zayed": "الشيخ زايد",
          "Arkan Plaza, 6 of October": 
            "أركان بلازا، السادس من أكتوبر",
          "Air Mall": "اير مول",
          "Madinaty": "مديناتي",
          "Open Air Mall, Madinaty": 
            "اير مول، مديناتي",
          "Come Dine with Us": "تعال لتناول الطعام معنا",
          "Almaza City Center": "سيتي سنتر ألماظة",

        
          "River Walk": "ريفر ووك",

          "Arkan Plaza": "أركان بلازا",
          "Madinaty Open Air Mall": " اير مول  بمديناتي",
          "Opening Hours": "ساعات العمل",
          "Sat-Wed": "السبت - الأربعاء",
          "10am - 12pm": "10 صباحًا - 12 مساءً",
          "Thu & Fri": "الخميس والجمعة",
          "10am - 1am​": "10 صباحًا - 1 صباحًا",
     
          "branches": "الفروع",
          "menu": "القائمة",
          "contact": "تواصل ",
   
          "each": "لكل قطعه",
          "pieces": "قطع",
          "piece": "قطعه",
          "businessDays" : "٦ ايام عمل",
          
          "Abstract": "تجريدي",
          "Blue": "أزرق",
          "Brown": "بني",
          "Beige": "بيج",
          "White": "أبيض",
          "People": "أشخاص",
          "Floral": "زهري",
          'Cities': 'مدن',
          'Paintings': 'لوحات',
          "Office": "مكتب",
          'Nature': "طبيعة",
          "Animals": "حيوانات",
          "African": "أفريقي",
          "Objects": "أشياء",
          "Musical": "موسيقي",
          "Black": "أسود",
          "Yellow": "أصفر",
          "Multicolor": "متعدد الألوان",
          "Gold": "ذهبي",
          "Green": "أخضر",
          "Pink": "وردي",
          "Red": "أحمر",
          "Gray": "رمادي",
          "Orange": "برتقالي",
          "Purple": "موف",
          "thankYou" : "تلقينا امر الشراء, شكرا لك",
              
          "cartPage": {
        "title": "سلة التسوق",
        "emptyMessage": "سلة التسوق الخاصة بك فارغة",
        "sizeLabel": "المقاس",
        "priceLabel": "السعر",
        "qtyLabel": "الكمية",
        "shipping": "الشحن: ",
        "freeShipping": "مؤهل للشحن المجاني",
        "subtotal": "المجموع الفرعي: ",
        "total": "الإجمالي: ",
        "proceedToCheckout": "الانتقال إلى الدفع",
        "removeItem": "إزالة العنصر"
      },
      "ProductPage":{
       "price": "السعر: {{price}}"
      },

          theme: "موضوع",
          wallFrame: "تابلوه حائط",
          colors: "الألوان",
          noOfPieces: "عدد القطع",
          resetFilters: "إعادة تعيين الفلاتر",
          selectedColors: "{{count}} لون مختار",
          onePiece: "قطعة واحدة",
          threePieces: "3 قطع",
          showMore: "عرض المزيد",
          companyName: "وول ماسترز",
          copyright: "© {{year}} كوكو . جميع الحقوق محفوظة.",
          contactInfo: "للتواصل اتصل: 01222204651 ",
          priceRange: "السعر: {{min}} - {{max}} جنيه",
      availableSizes: "{{count}} {{count, plural, one {حجم} other {أحجام}}} متاحة",
          darkMode: "وضع الظلام",
          productName: "اسم المنتج",
          selectSize: "اختر الحجم",
          selectedSize: "الحجم المحدد: {{size}}",
          price: "السعر:",
          material: "الخامه: قماش",
          addToCart: "أضف إلى السلة",
          productDescription: "وصف المنتج",
          highDefinition: "صورة عالية الدقة مطبوعة على قماش بألوان مقاومة للماء، ومضادة للتلاشي، وصديقة للبيئة.",
          forRooms: "هذه اللوحة تناسب غرفة المعيشة، غرفة النوم، الحمام، المطبخ.",
          professionalStretching: "مشدود ومثبت بواسطة محترفين على إطار خشبي صلب.",
          bestQuality: "أفضل جودة قماش للحصول على قوام نهائي، ألوان زاهية، ومشدود يدويًا، رائع لتزيين الجدران.",
          frameThickness: "جميع إطاراتنا تأتي بسمك 2.8 سم، مما يوفر مظهرًا غنيًا على جدرانك.",
          packaging: "سيتم تعبئة اللوحات بعناية لضمان وصولها إليك في حالة ممتازة، جاهزة لتزيين منزلك.",
          warmAttention: "تنبيه ",
          colorDifference: "قد يختلف اللون الفعلي قليلاً عن الصورة.",
          measureWall: "نوصي بقياس جدارك قبل الشراء.",
          topSellers: "الأكثر مبيعًا",
          backButton: "عودة",
          thumbnailAlt: "صورة مصغرة {{index}}",
          productNotFound: "المنتج غير موجود",
          checkout: "الدفع",
          name: "الاسم",
          phone: "رقم الهاتف",
          email: "البريد الإلكتروني",
          address1: "العنوان 1",
          address2: "العنوان 2",
          city: "المدينة",
          country: "البلد",
          comments: "تعليقات",
          paymentMethod: "طريقة الدفع",
          cashOnDelivery: "الدفع عند الاستلام",
          subtotal: "المجموع الفرعي",
          shipping: "الشحن",
          total: "الإجمالي",
          sizesAvailable: "الأحجام المتاحة",
          placeOrder: "تأكيد الطلب",
          shippingInfo: "الشحن: {{cost}} جنيه مصري (6 أيام عمل)",
          freeShipping: "الشحن مجاني",
          orderConfirmation: "تم تقديم الطلب بنجاح!",
          orderError: "حدث خطأ أثناء تقديم الطلب. يرجى المحاولة مرة أخرى.",
       
            priceLabel: "السعر",
            currency: "جنيه مصري",
     
          title: "سله التسوق",
      
          selectPaymentMethod: "اختر طريقة الدفع",
         
          orderNumber: "رقم الطلب: {{orderNumber}}",
          orderDetails: "تفاصيل الطلب",
          errorPlacingOrder: "حدث خطأ أثناء تقديم طلبك. يرجى المحاولة مرة أخرى.",
          successPlacingOrder: "تم تقديم الطلب بنجاح!",
          welcome: "مرحباً بك في متجرنا",
          product: "منتج",
        
          contactUs: "اتصل بنا",
          nameLabel: "الاسم",
          emailLabel: "البريد الإلكتروني",
          commentLabel: "التعليق",
          namePlaceholder: "اسمك",
          emailPlaceholder: "بريدك الإلكتروني",
          commentPlaceholder: "تعليقك",
          submitButton: "إرسال",
          formAlert: "يرجى ملء جميع الحقول.",
          successMessage: "تم إرسال رسالتك بنجاح!",
          errorMessage: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
          home: "الرئيسية",
          shop: "التسوق",
          cart_empty: "سلة التسوق فارغة",
          qty: "الكمية",
         
          total_price: "إجمالي السعر",
          view_cart: "عرض السلة",
          cart_tooltip: "السلة ({{count}}) - الشحن: {{shipping}} EGP",
          
     
     
          emptyMessage: "سلة التسوق الخاصة بك فارغة",
          sizeLabel: "المقاس",
         
          qtyLabel: "الكمية",
         
  
 
       
          proceedToCheckout: "الانتقال إلى الدفع",
          removeItem: "إزالة العنصر",
      

        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
