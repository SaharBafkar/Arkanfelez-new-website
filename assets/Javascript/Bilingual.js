let currentLanguage = "fa";
let languages = {
  en: {
    maintitle: "Main Page",
    // phone: "+982833857",
    home: "home",
    intro: "introduction",
    product: "product",
    order: "order form",
    download: "download center",
    job: "job apply",
    honor: "honors",
    contact: "contact us",
    companyintro: "Company Introduction",
    pcompanyintro:"Arkan Fellez Company, a manufacturer of all kinds of industrial machines, including the production line of food, pharmaceutical, cosmetic, chemical and...It was established in the year 1363 under number 1170 in the Register of Documents of Qazvin Province under the management of Mr. Mohammad Ali Rahmani, with activities in the field of designing and producing machinery for the food and chemical industries. During the following years, this company has expanded its activity as a production and industrial group of metal elements by purchasing Foladan manufacturing and industrial companies (with registration number 1150) and Arkan Alborz project (with registration number 4232) and has succeeded in manufacturing machines so far. There have been many.Arkan Fellz production and industrial group, as the first manufacturer of fully automatic shutters for metal doors, the first manufacturer of industrial vinegar production machines, the first manufacturer of vacuum homogenizer mixers, Chroma design, Germany, the oldest and largest manufacturer of machines for the production of sauces (mayonnaise, ketchup, etc.) ) with the largest number and variety of production.It has made a significant contribution in equipping and modernizing the country's factories and has made them largely redundant from foreign counterparts, and by exporting to neighboring countries, it has contributed to the waving of the flag of our country's industry beyond the borders of Iran. The continuous improvement of product quality, matching products with the needs of buyers and agility of the collection in after-sales service are the most important goals of this group.",
    pfooter:"We have been helping our customers to be more successful since 1984",
    usefullink:"Useful Links",
    managerlink:"Relation with manager",
    salesection:"sales section",
    supportsection:"Support section",
    orderfollow:"Order tracking",
  },
    fa: {
      maintitle: "صفحه اصلی",
      // phone: "02833857",
      home: "خانه",
      intro: "معرفی شرکت",
      product: "محصولات",
      order: "ثبت سفارش",
      download: "مرکز دانلود",
      job: "فرصتهای همکاری",
      honor: "افتخارات",
      contact: "تماس با ما",
      companyintro: "معرفی شرکت",
      pcompanyintro:"شرکت تولیدی و صنعتی ارکان فلز ( با مسئولیت محدود )    شرکت ارکان فلز، تولید کننده انواع ماشین آلات صنعتی از جمله خط تولید صنایع غذایی، دارویی،    آرایشی     بهداشتی، شیمیایی و ...    در سال 1363 به شماره 1170 در اداره ثبت اسناد استان قزوین به مدیریت آقای محمد علی رحمانی ، با    فعالیت    در زمینه طراحی و تولید ماشین آلات صنایع غذایی و شیمیایی تأسیس گردیده است . این شرکت طی سال    های بعد    با خرید شرکت های تولیدی و صنعتی فولادان ( به شماره ثبت 1150 ) و ارکان طرح البرز ( به شماره    ثبت 4232    ) فعالیت خود را با عنوان گروه تولیدی و صنعتی ارکان فلز وسعت بخشیده و تاکنون موفق به ساخت    ماشین آلات    متعددی شده است    گروه تولیدی و صنعتی ارکان فلز بعنوان    اولین سازنده درب بند تمام اتوماتیک مخصوص درب های فلزی   اولین سازنده ماشین آلات تولید صنعتی سرکه   اولین سازنده میکسر هموژنایزر تحت خلاء طرح کروما آلمان   قدیمی ترین و بزرگترین سازنده ماشین آلات تولید انواع سس ( مایونز و کچاپ و ... ) با بیشترین    شمارگان و    تنوع تولید    سهم بسزایی در تجهیز و مدرن سازی کارخانجات کشور داشته و آنها را از مشابه های خارجی تا حدود   زیادی بی    نیاز ساخته و نیز با صادرات به کشورهای همسایه در اهتزاز پرچم صنعت کشورمان در آنسوی مرزهای    ایران زمین    سهیم بوده است . بهبود مستمر کیفیت محصولات ، منطبق کردن محصولات با نیاز خریداران و چالاکی    مجموعه در    خدمات پس از فروش از مهمترین اهداف این گروه می باشد.",
      pfooter: "ما از سال 1363 به مشتریانمان کمک کرده ایم تا موفق تر باشند",
      usefullink:"لینکهای مفید",
      managerlink:"ارتباط با مدیریت",
    salesection:"واحد فروش",
    supportsection:"واحد پشتیبانی",
    orderfollow:"پیگیری سفارش",
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    changeLanguage(storedLanguage);
  } else {
    changeLanguage(currentLanguage);
    
  }
  [...document.querySelectorAll("[data-change-language]")].forEach(
    (element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        let language = element.getAttribute("data-change-language");
        localStorage.setItem("language", language);
        changeLanguage(language);
    
      });
    },
  );
});

function changeLanguage(language) {
  let languageSet = languages[language];
  Object.keys(languageSet).forEach((id) => {
    document.getElementById(id).innerText = languageSet[id];
  });
  
}
