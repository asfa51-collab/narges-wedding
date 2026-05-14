export default function NargesWeddingWebsite() {
  return (
    <div dir="rtl" className="min-h-screen bg-black text-white font-sans">
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">نرجس ويدنج</h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#gallery" className="hover:text-white transition">
              معرض الصور
            </a>
            <a href="#services" className="hover:text-white transition">
              الخدمات
            </a>
            <a href="#booking" className="hover:text-white transition">
              الحجز
            </a>
            <a
              href="https://www.instagram.com/xna.rc11/"
              target="_blank"
              className="hover:text-white transition"
            >
              الإنستقرام
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
          alt="Narges Wedding"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            نرجس ويدنج
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-8 mb-8">
            نحوّل مناسبتك إلى تجربة فاخرة بتفاصيل أنيقة ولمسات استثنائية
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
            >
              اطلب عرض سعر
            </a>

            <a
              href="#gallery"
              className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition"
            >
              شاهد الأعمال
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">خدماتنا</h2>
            <p className="text-gray-400 text-lg">
              تفاصيل فاخرة تجعل مناسبتك مختلفة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'تنسيق حفلات',
                image:
                  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'كوش ومناسبات',
                image:
                  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'جلسات وضيافة',
                image:
                  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Slider */}
      <section className="py-20 overflow-hidden bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <h2 className="text-4xl font-bold mb-4">أحدث أعمالنا</h2>
          <p className="text-gray-400">مستوحاة من حساب الإنستقرام الرسمي</p>
        </div>

        <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop',
          ].map((image, index) => (
            <div
              key={index}
              className="min-w-[320px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt="Instagram"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">معرض الأعمال</h2>
            <p className="text-gray-400 text-lg">
              نماذج مختارة من أعمال نرجس ويدنج
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21d?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl group"
              >
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section
        id="booking"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">اطلب عرض سعر</h2>
            <p className="text-gray-400 text-lg">
              شاركنا تفاصيل مناسبتك وسنتواصل معك مباشرة
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;
              const name = form.name.value;
              const phone = form.phone.value;
              const event = form.event.value;
              const city = form.city.value;
              const guests = form.guests.value;
              const budget = form.budget.value;
              const notes = form.notes.value;

              const message = `السلام عليكم\n\nطلب عرض سعر جديد:%0A%0Aالاسم: ${name}%0Aرقم الجوال: ${phone}%0Aنوع المناسبة: ${event}%0Aالمدينة: ${city}%0Aعدد الحضور: ${guests}%0Aالميزانية: ${budget}%0Aالملاحظات: ${notes}`;

              window.open(
                `https://wa.me/966540403936?text=${message}`,
                '_blank'
              );
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              placeholder="الاسم الكامل"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="phone"
              placeholder="رقم الجوال"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <select
              name="event"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            >
              <option>نوع المناسبة</option>
              <option>حفل زفاف</option>
              <option>حفلة خاصة</option>
              <option>تنسيق جلسة</option>
              <option>مناسبة رسمية</option>
            </select>

            <input
              name="city"
              placeholder="المدينة"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="guests"
              placeholder="عدد الحضور"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="budget"
              placeholder="الميزانية التقريبية"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              name="notes"
              placeholder="تفاصيل إضافية"
              rows="5"
              className="md:col-span-2 bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition"
            >
              إرسال الطلب عبر الواتساب
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-800 text-center text-gray-400">
        <p>© 2026 نرجس ويدنج — جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
