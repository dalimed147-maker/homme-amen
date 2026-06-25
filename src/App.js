import React, { useState } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ... existing code ...

export default function AmenBioLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    address: '',
    quantity: 1,
    selectedProduct: null
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      name: "Vegah Extra 120mg",
      description: [
        "يحتوي على Sildenafil 120mg بتركيز معزز.",
        "مصمم لدعم الأداء وتحسين الثقة.",
        "يعمل على تحسين تدفق الدم لتحقيق انتصاب أقوى.",
        "تأثير سريع ومفعول يدوم طويلاً.",
        "جرعة إضافية لتجربة محسنة."
      ],
      image: "/picture/vegah%20extra.png",
      prices: [
        { quantity: "علبة واحدة", price: "38 دت" },
        { quantity: "علبتين", price: "60 دت" },
        { quantity: "3 علب", price: "85 دت" },
        { quantity: "4 علب", price: "110 دت" }
      ],
      priceOptions: [
        { quantity: 1, price: 38 },
        { quantity: 2, price: 60 },
        { quantity: 3, price: 85 },
        { quantity: 4, price: 110 }
      ],
      borderColor: "border-green-600",
      textColor: "text-green-600"
    },
    {
      name: "كاداجرا 200 - لتعزيز القدرات الجنسية",
      description: [
        "KDGRA 200mg يحتوي على مادة Sildenafil 💊",
        "وهي مادة تساعد على تحسين تدفق الدم وتوسيع الأوعية الدموية وقت الإثارة، وهذا يساهم في انتصاب أقوى وأكثر ثبات 👌",
        "✔️ أداء وثقة أكثر",
        "✔️ انتصاب أقوى وتحكم أفضل",
        "✔️ تحسين الإحساس والدورة الدموية",
        "✔️ راحة أكثر وقت العلاقة",
        "⏱️ يبدأ المفعول عادة بعد 30 إلى 45 دقيقة تقريبًا.",
        "💡 المفعول يكون مع الإثارة 🔥",
        "⚠️ الكمية محدودة"
      ],
      prices: [
        { quantity: "علبة واحدة", price: "36 دت" },
        { quantity: "علبتين", price: "55 دت" },
        { quantity: "3 علب", price: "80 دت" },
        { quantity: "4 علب + علبة مجانية", price: "105 دت" }
      ],
      priceOptions: [
        { quantity: 1, price: 36 },
        { quantity: 2, price: 55 },
        { quantity: 3, price: 80 },
        { quantity: 4, price: 105 }
      ],
      image: "/picture/kdgra-new.jpg",
      borderColor: "border-green-600",
      textColor: "text-green-600"
    },
    {
      name: "BioPower Epimedyumlu Macun",
      description: [
        "يعتمد BioPower على تركيبة عشبية تحتوي على الإبيميديوم ومكونات طبيعية معروفة بدعم الدورة الدموية والطاقة الطبيعية للجسم.",
        "🔬 تساعد هذه التركيبة على:",
        "✅ تحسين تدفق الدم والدورة الدموية",
        "✅ دعم النشاط والطاقة البدنية",
        "✅ المساعدة على زيادة الرغبة والإحساس بالراحة",
        "✅ تقليل التعب وتحسين الإحساس بالحيوية",
        "✅ دعم الأداء والثقة أثناء العلاقة",
        "✅ مناسب للرجال والنساء",
        "💚 بفضل تركيبته العشبية المتوازنة، يمنح إحساسًا تدريجيًا وطبيعيًا بدون مفعول حاد أو مفاجئ.",
        "👨 مناسب للرجال لدعم النشاط والأداء",
        "👩 ويمكن أن يساعد النساء على تحسين المزاج والرغبة والإحساس بالراحة"
      ],
      prices: [
        { quantity: "علبة واحدة", price: "42 دت" },
        { quantity: "علبتين", price: "75 دت" },
        { quantity: "3 علب", price: "112 دت" },
        { quantity: "4 علب", price: "150 دت" }
      ],
      priceOptions: [
        { quantity: 1, price: 42 },
        { quantity: 2, price: 75 },
        { quantity: 3, price: 112 },
        { quantity: 4, price: 150 }
      ],
      image: "/picture/macun.png",
      borderColor: "border-green-500",
      textColor: "text-green-500"
    },
    {
      name: "🍫 STYROMAE Chocolate Premium",
      description: [
        "منتج إسباني 🇪🇸 بتركيبة Premium تجمع بين الجنسنغ الأحمر، غذاء ملكات النحل، وطلع النخيل لدعم الطاقة، الراحة، والتحكم أكثر أثناء العلاقة.",
        "🔬 كيفاش يخدم؟",
        "تعتمد التركيبة على مكونات طبيعية تساعد على دعم الدورة الدموية والطاقة البدنية والتركيز، مما يمنح إحساسًا براحة وثقة وأداء أفضل.",
        "✔ دعم للطاقة والنشاط",
        "✔ راحة وتحكم أكثر",
        "✔ إحساس أفضل أثناء العلاقة",
        "✔ مكونات مختارة بعناية",
        "🍫 STYROMAE",
        "⏰ طريقة الاستعمال:",
        "قطعة واحدة قبل العلاقة بـ30 إلى 45 دقيقة",
        "🌍 صناعة إسبانية Premium بجودة عالية وتغليف فاخر.",
        "⭐ نسبة رضا مرتفعة عند العديد من المستعملين بفضل توازن التركيبة وسهولة الاستعمال."
      ],
      image: "/picture/styromae.png",
      prices: [
        { quantity: "قطعة واحدة", price: "49 دت" },
        { quantity: "قطعتين", price: "95 دت" },
        { quantity: "4 قطع", price: "137 دت" }
      ],
      priceOptions: [
        { quantity: 1, price: 49 },
        { quantity: 2, price: 95 },
        { quantity: 4, price: 137 }
      ],
      borderColor: "border-green-600",
      textColor: "text-green-600"
    },
    {
      name: "VIGA Delay Spray 🔵",
      description: [
        "مصمم للرجال اللي يعانوا من سرعة الحساسية أو يحبوا تحكم أفضل ومدة أطول وقت العلاقة.",
        "كيفاش يخدم؟",
        "البخاخ يعتمد على مكونات موضعية تساعد على تخفيف الحساسية الزائدة بشكل مؤقت في المنطقة الحساسة، وهذا يسمح بتحكم أفضل في التوقيت بدون فقدان كامل للإحساس الطبيعي.",
        "شنو النتيجة؟",
        "✔ يساعد على التأخير والإطالة أكثر",
        "✔ يقلل التوتر والقلق المرتبط بسرعة النهاية",
        "✔ يعطي راحة وثقة أكبر وقت العلاقة",
        "✔ يساعد على أداء أكثر توازن وتحكم",
        "✔ مفعوله يبدأ عادة بعد 10 إلى 15 دقيقة",
        "طريقة الاستعمال:",
        "• استعمل من 1 إلى 3 بخات فقط",
        "• يُرش على المنطقة الحساسة قبل العلاقة بـ10 إلى 15 دقيقة",
        "• يُفضل الانتظار قليلاً حتى يمتصه الجلد",
        "• يمكن مسح أو غسل المنطقة بخفة قبل العلاقة لراحة أفضل",
        "ليش برشا رجال يفضلوه؟",
        "لأن الاستعمال متاعه سهل وسريع، وما يحتاجش تعقيدات أو استعمال يومي. مجرد بخات بسيطة تعطي إحساس أفضل وتحكم أكثر وقت الحاجة.",
        "📌 للاستعمال الخارجي فقط",
        "🚚 توصيل سريع",
        "💰 الدفع عند الاستلام"
      ],
      image: "/picture/viga.png",
      prices: [
        { quantity: "علبة واحدة", price: "66 دت" },
        { quantity: "علبتين", price: "110 دت" },
        { quantity: "3 علب", price: "145 دت" }
      ],
      priceOptions: [
        { quantity: 1, price: 66 },
        { quantity: 2, price: 110 },
        { quantity: 3, price: 145 }
      ],
      borderColor: "border-green-600",
      textColor: "text-green-600"
    }
  ];

  const SliderArrow = ({ className, style, onClick, direction }) => {
    const isNext = direction === 'next';
    const Icon = isNext ? ChevronRight : ChevronLeft;

    return (
      <button
        type="button"
        className={`${className || ''} before:!hidden !flex !items-center !justify-center !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 !rounded-full !bg-green-700 !text-white !shadow-xl hover:!bg-green-800 focus:!outline-none focus:!ring-4 focus:!ring-green-200 !z-30`}
        style={{
          ...style,
          display: 'flex',
          top: '50%',
          transform: 'translateY(-50%)',
          [isNext ? 'right' : 'left']: '0.5rem',
          [isNext ? 'left' : 'right']: 'auto'
        }}
        onClick={onClick}
        aria-label={isNext ? 'Next product' : 'Previous product'}
      >
        <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <SliderArrow direction="next" />,
    prevArrow: <SliderArrow direction="prev" />,
    rtl: true
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Telegram Bot credentials
    const BOT_TOKEN = '8144856243:AAFh6fFZdBqRfU0VjTpMsCNs4X67EFJk3qI';
    const CHAT_ID = '7800093317';
    
    // Get selected product info
    const selectedProductData = formData.selectedProduct !== null ? products[formData.selectedProduct] : null;
    const productName = selectedProductData ? selectedProductData.name : 'منتج غير محدد';
    
    // Format the message
    const message = `
📋 طلب جديد

👤 الاسم: ${formData.name}
📱 الهاتف: ${formData.phone}
🏘️ الولاية: ${formData.state}
📍 العنوان: ${formData.address}
🛍️ المنتج: ${productName}
📦 الكمية: ${formData.quantity}
💰 السعر الكلي: ${calculatePrice(formData.quantity, selectedProductData)} دت
    `.trim();
    
    try {
      // Send message to Telegram
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });
      
      if (response.ok) {
        console.log('Message sent to Telegram successfully');
      } else {
        console.error('Failed to send message to Telegram');
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
    
    setShowSuccess(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  const defaultPriceOptions = [
    { quantity: 1, price: 36 },
    { quantity: 2, price: 55 },
    { quantity: 3, price: 79 },
    { quantity: 4, price: 97 }
  ];

  const getSelectedProduct = () => (
    formData.selectedProduct !== null ? products[formData.selectedProduct] : null
  );

  const getPriceOptions = (product = getSelectedProduct()) => (
    product?.priceOptions || defaultPriceOptions
  );

  const calculatePrice = (quantity, product = getSelectedProduct()) => {
    const priceOptions = getPriceOptions(product);
    return priceOptions.find(option => option.quantity === quantity)?.price || priceOptions[0].price;
  };

  const changeQuantity = (direction) => {
    const quantityOptions = getPriceOptions().map(option => option.quantity);

    setFormData(prev => {
      const currentIndex = quantityOptions.indexOf(prev.quantity);
      const safeIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex = Math.min(
        Math.max(safeIndex + direction, 0),
        quantityOptions.length - 1
      );

      return {
        ...prev,
        quantity: quantityOptions[nextIndex]
      };
    });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-fade-in">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-800 mb-4">تم تأكيد طلبك بنجاح!</h2>
          <p className="text-slate-600 mb-6">
            شكراً لك على طلبك! تم تأكيد طلبك بنجاح.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <p className="text-slate-700 font-semibold mb-2">معلومات التوصيل:</p>
            <p className="text-slate-600">سيتم توصيل طلبك خلال 3 أيام</p>
            <p className="text-slate-600 mt-2">يرجى إبقاء هاتفك مفتوحاً - سنتصل بك لتأكيد التوصيل</p>
          </div>
          <button
            onClick={() => {
              setShowSuccess(false);
              setFormData({ name: '', phone: '',state: '', address: '', quantity: 1, selectedProduct: null });
            }}
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all"
          >
            تقديم طلب آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-gray-800 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <img src="/picture/logo.png" alt="Bio Power" className="h-14 w-14 object-cover rounded-lg" />
            <div>
              <h1 className="text-3xl font-bold">Bio Power</h1>
              <p className="text-sm text-green-300">حلول مختارة للأداء والصحة</p>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">منتجات صحة الرجل المميزة</h2>
          <p className="text-lg md:text-xl opacity-90">منتجات أصلية • نتيجة تفرق</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Product Slider Section */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-slate-900 mb-10 text-center">المنتجات المميزة</h3>
          <div className="bg-white rounded-3xl shadow-2xl px-4 py-8 sm:p-8 relative">
            <Slider {...sliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="px-8 sm:px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Product Image */}
                    <div className="flex justify-center order-2 md:order-1 gap-4">
                      {product.images ? (
                        product.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="relative">
                            <div className={`absolute inset-0 ${product.borderColor.replace('border-', 'bg-')} blur-3xl opacity-40 rounded-full scale-150`}></div>
                            <img
                              src={img}
                              alt={`${product.name} ${imgIndex + 1}`}
                              className="relative w-full max-w-sm h-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                              onClick={() => setSelectedImage(img)}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="relative">
                          <div className={`absolute inset-0 ${product.borderColor.replace('border-', 'bg-')} blur-3xl opacity-40 rounded-full scale-150`}></div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="relative w-full max-w-sm h-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                            onClick={() => setSelectedImage(product.image)}
                          />
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="order-1 md:order-2 space-y-6">
                      <h2 className={`text-3xl md:text-4xl font-bold ${product.textColor} leading-tight`}>
                        {product.name}
                      </h2>
                      
                      <div className={`bg-gradient-to-br ${product.borderColor.replace('border-', 'from-')}20 border-2 ${product.borderColor} p-6 rounded-2xl`}>
                        {product.description.slice(0, 5).map((desc, i) => (
                          <p key={i} className="text-slate-700 text-base md:text-lg leading-relaxed mb-3 font-medium">
                            {desc}
                          </p>
                        ))}
                      </div>

                      {product.prices && (
                        <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
                          <p className="text-slate-600 font-semibold mb-4 text-lg">خيارات الأسعار:</p>
                          <div className="space-y-3">
                            {product.prices.map((priceInfo, i) => (
                              <div key={i} className={`flex items-center justify-between p-4 rounded-xl bg-white border-2 ${product.borderColor} hover:shadow-md transition-all`}>
                                <span className="text-slate-700 font-semibold">{priceInfo.quantity}</span>
                                <span className={`text-2xl font-bold ${product.textColor}`}>{priceInfo.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Order Button */}
                      <button
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            selectedProduct: index,
                            quantity: getPriceOptions(products[index])[0].quantity
                          }));
                          document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full border-4 ${product.borderColor} ${product.textColor} bg-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1`}
                      >
                        ✅ اطلب الآن
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Order Section */}
        <section className="mb-16" id="order-form">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-green-600">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">اطلب منتجك الآن</h3>
                
                {formData.selectedProduct !== null && (
                  <div className={`bg-gradient-to-r ${products[formData.selectedProduct].borderColor.replace('border-', 'from-')}20 border-2 ${products[formData.selectedProduct].borderColor} rounded-xl p-4 mb-6`}>
                    <p className="text-slate-700 font-semibold">المنتج المختار:</p>
                    <p className={`text-xl font-bold ${products[formData.selectedProduct].textColor}`}>{products[formData.selectedProduct].name}</p>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-700 font-bold mb-3 text-lg">الاسم الكامل</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-3 text-lg">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-3 text-lg">الولاية</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                      placeholder="الولاية"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-3 text-lg">عنوان التوصيل</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none text-lg"
                      placeholder="أدخل عنوانك الكامل"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-green-600 to-green-700 rounded-3xl shadow-2xl p-8 text-white sticky top-24">
                <h4 className="text-2xl font-bold mb-8">ملخص الطلب</h4>
                
                {formData.selectedProduct !== null && (
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold mb-2">المنتج:</p>
                    <p className="font-bold">{products[formData.selectedProduct].name}</p>
                  </div>
                )}
                
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block font-bold mb-3 text-lg">الكمية</label>
                    <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-2">
                      <button
                        type="button"
                        onClick={() => changeQuantity(1)}
                        className="bg-white text-green-600 font-bold w-12 h-12 rounded-lg hover:bg-opacity-90 transition-all"
                      >
                        +
                      </button>
                      <span className="text-3xl font-bold">{formData.quantity}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(-1)}
                        className="bg-white text-green-600 font-bold w-12 h-12 rounded-lg hover:bg-opacity-90 transition-all"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg">المجموع:</span>
                      <span className="text-4xl font-bold">{formData.selectedProduct !== null ? calculatePrice(formData.quantity) : 0} دت</span>
                    </div>
                    <div className="border-t border-white border-opacity-30 pt-4 space-y-2">
                      <p className="text-sm">✓ التوصيل مجاني</p>
                      <p className="text-sm">✓ الدفع عند الاستلام</p>
                      <p className="text-sm">✓ ضمان الجودة</p>
                    </div>
                  </div>

                  {formData.quantity >= 2 && (
                    <div className="bg-green-400 bg-opacity-30 border-2 border-green-300 rounded-xl p-4 text-center">
                      <p className="font-bold">💰 توفير خاص بكمية أكثر!</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1 font-bold"
                >
                  تأكيد الطلب
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-700 to-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Homme Power - منتجات صحة الرجل المميزة</p>
          <p className="text-slate-400">جودة عالية | توصيل سريع | خدمة ممتازة</p>
          <p className="text-slate-500 text-sm mt-4">جميع المنتجات أصلية وآمنة - الدفع عند الاستلام</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full p-4">
            <img
              src={selectedImage}
              alt="Product"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
