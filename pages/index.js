
export default function Home() {
  const sendWhatsApp = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const event = form.event.value;
    const city = form.city.value;
    const guests = form.guests.value;
    const notes = form.notes.value;

    const message =
      `السلام عليكم%0A%0Aطلب عرض سعر جديد:%0Aالاسم: ${name}%0Aالجوال: ${phone}%0Aنوع المناسبة: ${event}%0Aالمدينة: ${city}%0Aعدد الحضور: ${guests}%0Aالملاحظات: ${notes}`;

    window.open(`https://wa.me/966540403936?text=${message}`, "_blank");
  };

  return (
    <div dir="rtl" style={{fontFamily:'sans-serif',background:'#000',color:'#fff'}}>
      <section style={{
        minHeight:'100vh',
        backgroundImage:'url(https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        padding:'40px'
      }}>
        <div style={{background:'rgba(0,0,0,0.55)',padding:'40px',borderRadius:'24px'}}>
          <h1 style={{fontSize:'64px',marginBottom:'20px'}}>نرجس ويدنج</h1>
          <p style={{fontSize:'22px',lineHeight:'1.8'}}>
            نحوّل مناسبتك إلى تجربة فاخرة بتفاصيل أنيقة ولمسات استثنائية
          </p>

          <a
            href="#booking"
            style={{
              display:'inline-block',
              marginTop:'24px',
              background:'#fff',
              color:'#000',
              padding:'16px 32px',
              borderRadius:'16px',
              textDecoration:'none',
              fontWeight:'bold'
            }}
          >
            اطلب عرض سعر
          </a>
        </div>
      </section>

      <section style={{padding:'80px 20px'}}>
        <h2 style={{textAlign:'center',fontSize:'42px'}}>خدماتنا</h2>
              <section style={{padding:'80px 20px',background:'#000'}}>
  <h2 style={{textAlign:'center',fontSize:'42px',marginBottom:'40px'}}>
    معرض الأعمال
  </h2>

  <div style={{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
    gap:'20px'
  }}>

```
{[
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200'
].map((image,index)=>(
  <img
    key={index}
    src={image}
    style={{
      width:'100%',
      height:'350px',
      objectFit:'cover',
      borderRadius:'20px'
    }}
  />
))}
```

  </div>
</section>


        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
          gap:'24px',
          marginTop:'40px'
        }}>
          {[
            {
              title:'تنسيق حفلات',
              image:'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop'
            },
            {
              title:'كوش ومناسبات',
              image:'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop'
            },
            {
              title:'جلسات وضيافة',
              image:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
            }
          ].map((item,index)=>(
            <div key={index} style={{background:'#111',borderRadius:'20px',overflow:'hidden'}}>
              <img src={item.image} style={{width:'100%',height:'300px',objectFit:'cover'}} />
              <h3 style={{padding:'20px',textAlign:'center'}}>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" style={{padding:'80px 20px',background:'#111'}}>
        <h2 style={{textAlign:'center',fontSize:'42px'}}>اطلب عرض سعر</h2>

        <form
          onSubmit={sendWhatsApp}
          style={{
            maxWidth:'800px',
            margin:'40px auto',
            display:'grid',
            gap:'16px'
          }}
        >
          <input name="name" placeholder="الاسم" style={inputStyle}/>
          <input name="phone" placeholder="رقم الجوال" style={inputStyle}/>
          <input name="event" placeholder="نوع المناسبة" style={inputStyle}/>
          <input name="city" placeholder="المدينة" style={inputStyle}/>
          <input name="guests" placeholder="عدد الحضور" style={inputStyle}/>
          <textarea name="notes" placeholder="ملاحظات إضافية" rows="5" style={inputStyle}></textarea>

          <button type="submit" style={{
            background:'#fff',
            color:'#000',
            padding:'18px',
            border:'none',
            borderRadius:'16px',
            fontWeight:'bold',
            fontSize:'18px',
            cursor:'pointer'
          }}>
            إرسال الطلب عبر الواتساب
          </button>
        </form>
      </section>
    </div>
  );
}

const inputStyle = {
  padding:'18px',
  borderRadius:'14px',
  border:'1px solid #333',
  background:'#000',
  color:'#fff',
  fontSize:'16px'
};
