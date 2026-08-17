# wifi o'chgani uchun yozilyapti
Evalora loyihasi: g'oya boshida turk tilidan test ishlash platform qilish, milliy sertifikatga tayyorlanish platformasini qilish  edi. keyen uni ai bilan qo'shib ai test tekshirishni qilmoqchi edim. keyen loyihani kuchaytirish g'oyasi keldi ichiga moc testlar listingi mp3 fayllarini yuklab test ishlaydigan reading qilib test ishlaydigan qilmoqchi bo'ldim. ai yordamida. keyen foydalanuvchilar ko'payishi mumkinligini o'yladim va o'qituvchi va o'quvchi rejimini qilishni o'yladim. loyiha: **BOSH SAHIFA** Domen olinadi ( Evalora_uz va shunga o'xshash) sayt brauzer orqali qidirilib  saytga kiradi, ajoyib ko'rinish va  sayt haqida to'liq malumot, malumotni sahifaga animatsiyalar, 3d,  backend orqali ko'rinadigan qilib saytga kirishda qiziqishni oshiruvchan qilinadi. keyengi qism **Login qilish sahifasi**.  Saytga kirganidan keyen **FOYDALANUVCHI ONBOARDING TIZIMI** birinchi chiqadi va malumotlarini kiritadi. Keyengi bo'lim **asosiy sahifaga (dashboard)**.  Keyengi bo'lim  **MASHQ**.  Keyengi bo'lim **NATIJALARIM**. Keyengi bo'lim **Reyting** . Keyengi bo'lim **OBUNA VA COIN TIZIMI**. bu bo'limlardan keyen sozlamalar  bo'limi. **SOZLAMALAR** bo'limi. 

====================================================================
     EVALORA PLATFORMASI: BOSH SAHIFA (LANDING PAGE) VA DIZAYN TALABLARI
====================================================================

1. NAVIGATSIYA VA HEADER (SUZUVCHI GLASSMORPHISM PANEL)
--------------------------------------------------------------------
* Desktop (PC) Ko'rinishi:
  - Suzuvchi kapsula paneli (Floating Capsule Bar, rounded-full / rounded-2xl).
  - Dizayn effekti: backdrop-blur-md, 70% oq shaffoflik (bg-white/70),
    nozik oq chegaralar (border border-white/40), yengil soya (shadow-sm).
  - Tarkibiy qismlari:
    * Chapda: Evalora logotipi va brend nomi (Bosilganda sahifa boshiga qaytadi).
    * O'rtada: Silliq skroll havolalari ([Imkoniyatlar], [Qanday ishlaydi?],
      [Narxlar], [FAQ], [Aloqa]).
    * O'ngda: Til tanlash dropdown menyusi (UZ / EN / RU / TR), [Kirish] (Login)
      tugmasi va asosiy [Ilovani ochish ->] / [Bepul sinash] CTA tugmasi.

* Mobile (Telefon) Moslashuvi:
  - Header ixcham holatga keladi: faqat Logo va Gamburger menyu (Hamburger Icon).
  - Gamburger bosilganda ekranning butun qismini yoki yon tomondan silliq
    ochiluvchi menyu (Mobile Drawer / Sheet) chiqadi.
  - Skroll havolalari, til tanlash va kirish tugmalari shu menyu ichiga joylashadi.


2. SAHIFA BLOKLARI KETMA-KETLIGI (PAGE SECTIONS)
--------------------------------------------------------------------

[ 1-BLOK: QAHRAMON QISMI (HERO SECTION - 100VH) ]
* Vizual Fon:
  - Yumshoq, ko'zni charchatmaydigan yorqin gradient (Soft Mesh Gradient / Aura glow).
  - PC versiyada yengil 3D interaktiv fon, mobil versiyada batareyani tejovchi
    yengil CSS animatsiya.
* Tarkibiy Qatlam (Content Stack):
  1) Yuqori Badge: "Tinglash, O'qish, Yozish va Gapirish uchun AI mock testlar"
     (Kichik kapsula badge, pill-tag).
  2) Asosiy H1 Sarlavha: "CEFR imtihonlariga AI yordamida tez va aniq tayyorlaning."
     (Katta, aniq, responsive: text-3xl sm:text-5xl lg:text-6xl).
  3) Tavsif matni: "Har qanday qurilmada haqiqiy imtihon — to'rtta ko'nikma,
     haqiqiy vaqt chegaralari, AI baholash. Bir daqiqada CEFR darajangizni yozma tahlil bilan oling."
  4) Harakat Tugmalari (Dual CTA):
     - Asosiy tugma: brend rangli, yengil soyali ([Ilovani ochish ->]).
     - Ikkilamchi tugma: Shaffof/och ko'k ([Namuna natijani ko'rish]).

[ 2-BLOK: QANDAY ISHLAYDI? (HOW IT WORKS - 3 QADAM) ]
* 1-qadam: Bepul ro'yxatdan o'ting.
* 2-qadam: Darajangizga mos modul yoki to'liq Mock testni ishlang.
* 3-qadam: AI dan to'liq tahlil, xatolar tushuntirishi va shaxsiy reja oling.

[ 3-BLOK: PLATFORMA IMKONIYATLARI (FEATURES & PREVIEWS) ]
* Speaking: Ovozli tahlil, talaffuz va grammatika tekshiruvi.
* Writing: Insholarni daqiqalar ichida CEFR mezonlari bo'yicha baholash.
* Rasch Modeli: Har bir savol qiyinligi asosida aniq ball hisoblash.
* Natijalar va Reyting: Real o'sish grafigi va raqobatbardosh XP tizimi.
* Vizual: Har bir imkoniyat yonida interaktiv platforma skrinshotlari va GIF namoyishlar.

[ 4-BLOK: OBUNA VA NARXLAR (PRICING PLANS) ]
* Kartalar: Free | Start | Pro | Pro+ | Ultra
* Har bir tarifning aniq afzalliklari, AI limitlari va kiritilgan Mock soni.
* Har bir karta ostida: [Bepul boshlash] yoki [Tarifni tanlash] tugmasi.
* Obunasiz Coin paketlari haqida qisqa tushuntirish va xarid bloki.

[ 5-BLOK: KO'P BERILADIGAN SAVOLLAR (FAQ ACCORDION) ]
* To'lov qanday amalga oshiriladi? (Karta orqali / Chek yuklash)
* AI baholash qanchalik aniq va xolis?
* Free tarifda qanday sinov imkoniyatlari mavjud?
* Mock testlar va savollar qanchalik tez-tez yangilanadi?

[ 6-BLOK: BIZ BILAN BOG'LANISH (CONTACT US) ]
* Telegram admin / Bot to'g'ridan-to'g'ri havolasi.
* Rasmiy Email manzil.
* Tezkor savol yoki taklif qoldirish uchun qisqa aloqa formasi.


3. FOOTER VA QO'SHIMCHA BOSHQARUV ELEMENTLARI
--------------------------------------------------------------------
* Footer Mazmuni:
  - Evalora logotipi va qisqa shior.
  - Huquqiy havolalar: [Foydalanish shartlari], [Maxfiylik siyosati].
  - Til tanlash tugmalari (UZ, EN, RU, TR).
  - Aloqa ma'lumotlari va ijtimoiy tarmoqlar (Telegram, Instagram, Email).
  - Mualliflik huquqi: "© 2026 Evalora. Barcha huquqlar himoyalangan."

* Suzuvchi Boshqaruv (Floating "Scroll to Top" Button):
  - Foydalanuvchi pastga skroll qilganda o'ng pastki burchakda paydo bo'ladi.
  - Bosilganda sahifaning eng yuqori qismiga (Header) silliq olib chiqadi.


4. MOBIL MOSLASHUVCHANLIK VA PERFORMANCE TALABLARI
--------------------------------------------------------------------
* Shrift va O'lchamlar (Typography):
  - Katta sarlavhalar va kartalar mobil ekranga to'liq moslashishi shart.

* Bosish Qulayligi (Touch Targets):
  - Barcha tugmalar va menyu havolalari barmoq bilan bemalol bosiladigan
    o'lchamda (minimal balandligi 44px) bo'lishi shart.

* Ishlash Tezligi (Performance):
  - Mobil qurilmalarda tez yuklanishi uchun rasmlar, shriftlar va scriptlar
    optimizatsiya qilinadi (Lighthouse Performance > 90).
====================================================================

====================================================================
           EVALORA PLATFORMASI: AUTENTIFIKATSIYA VA LOGIN SAHIFASI
====================================================================

1. SAHIFA TUZILISHI VA MAKETI (SPLIT-SCREEN 60/40 LAYOUT)
--------------------------------------------------------------------
* Desktop (PC) Ko'rinishi:
  - Chap tomon (60% kenglik) - Brending va Animatsiya:
    * Evalora brending vizuali / 3D interaktiv animatsiya.
    * Ijtimoiy ishonch (Social Proof): "CEFR imtihonlariga AI yordamida
      tayyorlanuvchi yetakchi platforma".
    * Fon: Yumshoq neytral gradient va glassmorphism effekti.
  - O'ng tomon (40% kenglik) - Autentifikatsiya Shakli:
    * Markazlashgan toza, xavfsiz va minimalist karta.
    * Tepa qismda: Evalora logotipi, "Xush kelibsiz!" sarlavhasi.
    * Tablar: [Kirish (Sign In)] va [Ro'yxatdan o'tish (Sign Up)].

* Mobile (Telefon) Ko'rinishi:
  - Chap tomondagi 60% li og'ir animatsiya bloki avtomatik yashiriladi (hidden).
  - Ekran 100% o'ng tomondagi login/ro'yxatdan o'tish formasiga ajratiladi.
  - Tepa qismda faqat ixcham Evalora logotipi va sarlavha ko'rinadi.


2. CLERK CUSTOM UI AUTENTIFIKATSIYA ELEMENTLARI
--------------------------------------------------------------------
* Asosiy Kirish Usuli (1-bosqichli tezkor kirish):
  - [Google orqali davom etish] tugmasi (Google logosi bilan, katta, w-full).

* Ikkilamchi Usul (Email orqali):
  - "Yoki email orqali" ajratuvchi chiziq (Divider).
  - Email kiritish maydoni (Input).
  - Parol yoki bir martalik tasdiqlash kodi (OTP) maydoni.
  - [Kirish] / [Akkaunt yaratish] asosiy CTA tugmasi.

* Oqim (User Flow):
  - Ro'yxatdan o'tish (Sign Up) bosilganda ro'yxatdan o'tadi va Clerk
    avtomatik sessiya ochib to'g'ridan-to'g'ri tizim ichkarisiga (Dashboard)
    yo'naltiradi (ortiqcha qayta login qadamisiz).
  - Pastki havola: "Profilingiz bormi? [Kirish]" yoki "Akkauntingiz yo'qmi?
    [Ro'yxatdan o'tish]".


3. FOYDALANUVCHINING NOYOB ID TIZIMI (IMMUTABLE UNIQUE ID)
--------------------------------------------------------------------
* ID Xususiyatlari:
  - Generatsiya: Ro'yxatdan o'tgan zahoti backend tomonidan avtomatik
    yaratiladi (masalan: `EV-8492` yoki 6 xonali kriptografik xavfsiz son).
  - Qat'iy Qoida: Ushbu ID takrorlanmas (Unique) bo'lib, foydalanuvchi
    tomonidan HECH QACHON o'zgartirilmaydi (Read-only / Immutable).
  - Ishlatilishi: Foydalanuvchi profilida ko'rinadi, chek orqali to'lov
    qilganda va admin tekshiruvida asosiy identifikator bo'lib xizmat qiladi.


4. RO'YXATDAN O'TGANDAGI AVTOMATIK HODISALAR (WEBHOOK PIPELINE)
--------------------------------------------------------------------
* Yangi Foydalanuvchi Ro'yxatdan O'tganda (Clerk `user.created` Webhook):
  1) PostgreSQL bazasida yangi `User` yozuvi yaratiladi.
  2) O'zgarmas `EV-XXXX` ID raqami biriktiriladi.
  3) Default tarzda "Free" tarifi faollashtiriladi (1 ta to'liq Mock
     va 2 ta sinov AI tahlili bilan).
  4) Coin balansi 0 qilib belgilanadi.
====================================================================

====================================================================
           EVALORA PLATFORMASI: FOYDALANUVCHI ONBOARDING TIZIMI
====================================================================

1. UMUMIY ISHLASH TARTIBI (GENERAL LOGIC)
--------------------------------------------------------------------
* Qachon Chiqadi:
  - Faqat foydalanuvchi birinchi marta ro'yxatdan o'tib tizimga
    kirganda avtomatik ochiladi.

* Vizual Effekt:
  - Asosiy Dashboard foni to'liq qorayadi va xiralashadi (Backdrop blur).
  - Fokus markazdagi ko'p bosqichli Onboarding modalida bo'ladi.

* Takrorlanmaslik Qoidasi:
  - Ma'lumotlar bazasida `hasCompletedOnboarding: true` bo'lgach,
    bu oyna foydalanuvchiga ikkinchi marta HECH QACHON ko'rinmaydi.


2. BOSQICHLAR KETMA-KETLIGI (STEP-BY-STEP MODAL FLOW)
--------------------------------------------------------------------

[ 1-BOSQICH: PROFILNI SOZLASH ]
* Sarlavha: "Xush kelibsiz! Shaxsiy profilingizni yarating"
* Kiritish Maydonlari (Form Inputs):
  - Ism va Familiya: Majburiy (Google orqali kirsa avtomatik to'ldiriladi).
  - Telefon raqami: Ixtiyoriy.
  - Maqsaddagi CEFR darajasi: Ixtiyoriy tanlov ([A2] [B1] [B2] [C1] [C2]).
* Tugma: [Saqlash va davom etish]

[ 2-BOSQICH: TARIF VA FOYDALANISH YO'RIQNOMASI ]
* Sarlavha: "Sizning joriy tarifingiz: Free (Bepul)"
* Ko'rsatiladigan Imkoniyatlar:
  - 1 ta to'liq Mock test (barcha 4 modul).
  - 2 ta AI tahlili va natijaviy xulosa.
  - Testlarni to'liq ishlab coin yig'ish imkoniyati.
* Obuna Afzalliklari Eslatmasi:
  - "Start va Pro tariflariga ulanib, cheksiz testlar va batafsil AI
    tavsiyalarini ochishingiz mumkin."
* Tugmalar: [O'tkazib yuborish] | [Davom etish]

[ 3-BOSQICH: TABRIKNOMA VA ISHGA TUSHIRISH ]
* Sarlavha: "Tabriklaymiz, profilingiz muvaffaqiyatli faollashtirildi!"
* Tavsif:
  - "Sizga 1 ta to'liq bepul Mock test va 2 ta AI tahlil imkoniyati
    biriktirildi. Sinov testini ishlab o'z darajangizni aniqlang!"
* Tugma: [Boshlash (Finish)]
  - Bosilganda Onboarding yakunlanadi, modal yopiladi va foydalanuvchi
    asosiy ishchi Dashboard sahifasiga o'tadi.
====================================================================

====================================================================
           EVALORA PLATFORMASI: FOYDALANUVCHI DASHBOARD SAHIFASI
====================================================================

1. FOYDALANUVCHI SALOMLASHISH VA STATUS PANELI (HERO BANNER)
--------------------------------------------------------------------
* Salomlashuv: "Xush kelibsiz, [Foydalanuvchi Ismi]!"
* Mini Metrikalar (O'ng tomonda / Mobilda 2x2 grid):
  - 🔥 Joriy Streak: Masalan, "5 kunlik doimiy faollik"
  - 🪙 Coin Balansi: Masalan, "45 Coin" (Yonida [+] tezkor sotib olish tugmasi)
  - 🏆 Reyting / XP: Masalan, "640 XP (#14 o'rin)"
  - 🛡 Tarif Holati: "Free Tarif" (Yonida [Obunani yangilash] tugmasi)


2. ASOSIY HARAKAT KARTALARI (QUICK ACTION CARDS)
--------------------------------------------------------------------
* 1-Asosiy Karta: "To'liq Mock Imtihon"
  - 4 ta modulni o'z ichiga olgan to'liq CEFR sinov imtihonini boshlash.
  - Tugma: [Mock Testni Boshlash ->]

* 2-Ikkilamchi Karta: "Alohida Modul Mashqlari"
  - Bo'limlar bo'yicha tezkor mashq qilish kartalari:
    [🎙 Speaking] | [🎧 Listening] | [📖 Reading] | [✍️ Writing]


3. AI TAHLILI VA MASLAHATLAR BLOKI (AI INSIGHTS & PAYWALL)
--------------------------------------------------------------------
* Faol Obunachilar Uchun (Start, Pro, Pro+, Ultra):
  - AI Maslahatchi paneli ochiq turadi.
  - Oxirgi testlar asosida shaxsiy tahlil: "Sizda Listening ko'rsatkichi
    yaxshi, ammo Writing bo'limida argumentlashni kuchaytirish lozim."
  - Shaxsiy tavsiya etilgan keyingi testga to'g'ridan-to'g'ri havola.

* Free Foydalanuvchilar Uchun:
  - Blok xiralashtirilgan (CSS Backdrop-blur) va qulf belgisi bilan yopilgan.
  - Chaqiruv matni: "Shaxsiy AI tahlili va aniq zaif nuqtalaringiz
    bo'yicha tavsiyalarni olish uchun Start yoki Pro tarifiga ulaning."
  - Tugma: [Tarifni tanlash ->]


4. FAOLLIK TAQVIMI (GITHUB USLUBIDAGI CALENDAR HEATMAP)
--------------------------------------------------------------------
* Desktop (PC) Ko'rinishi:
  - To'liq 12 oylik katakchalar matritsasi (Ustunlar: 52 hafta, Qatorlar: 7 kun).
  - Har bir kun alohida kvadrat katakcha.
* Ranglar Intensivligi (Color Levels):
  - Faollik yo'q: Och kulrang katakcha
  - 1 ta test: Och yashil / brend rangi
  - 2-3 ta test: O'rtacha to'q rang
  - 4+ ta test / Mock: Eng to'q rang (Maksimal faollik)
* Interaktiv Tooltip:
  - Katakcha bosilganda yoki sichqoncha borganda: "16-Avgust 2026: 2 ta test yakunlandi, +25 XP".


5. TEST NATIJALARI VA STATISTIKA BLOKI (PERFORMANCE STATS)
--------------------------------------------------------------------
* Asosiy Ko'rsatkichlar:
  - Jami ishlangan testlar va to'liq Mocklar soni.
  - O'rtacha umumiy ko'rsatkich (masalan: B2 - 76%).
  - Modullar bo'yicha kichik progress barlar:
    * Speaking: 65%
    * Listening: 80%
    * Reading: 85%
    * Writing: 70%

* Oxirgi Testlar Tarixi (Recent Activity - 3 ta oxirgi test):
  - Test nomi, topshirilgan sana, to'plangan ball va holat.
  - [Batafsil ko'rish] tugmasi (to'g'ridan-to'g'ri "Natijalarim" sahifasiga o'tadi).


6. MOBIL (MOBILE RESPONSIVE) MOSLASHUVCHANLIK TALABLARI
--------------------------------------------------------------------
* Status Paneli va Metrikalar:
  - Mobilda 4 ta mini-metrika (Streak, Coin, XP, Tarif) ixcham 2 qatorli
    kartochkaga aylanadi.

* Harakat Kartalari:
  - Gorizontal emas, ustma-ust (Stack) ko'rinishida to'liq kenglikda (w-full)
    joylashadi.

* Calendar Heatmap Moslashuvi:
  - Telefon ekranida 52 haftalik to'liq matritsa sig'masligi sababli,
    gorizontal silliq skroll (overflow-x-auto) qilinadi yoki oxirgi
    3 oylik qisqartirilgan faollik ko'rsatiladi.

* Modul Mashqlari:
  - 4 ta modul (Speaking, Listening, Reading, Writing) telefonda qulay
    2x2 katakchalar shaklida barmoq bilan bosishga moslashtiriladi (min. 48px).
====================================================================

====================================================================
           EVALORA PLATFORMASI: "MASHQ" (PRACTICE) BO'LIMI
====================================================================

1. TEPANGI BOSHQARUV VA FILTRLASH PANELI (HEADER CONTROLS)
--------------------------------------------------------------------
* Modul Tablari (Module Tabs):
  - [Barchasi] | [Speaking] | [Listening] | [Reading] | [Writing]

* CEFR Qiyinlik Darajalari (Pill-Tabs):
  - [Barchasi] | [A1] | [A2] | [B1] | [B2] | [C1] | [C2]
  (Tanlangan modul va daraja bo'yicha testlar bir zumda filtrlanadi)

* Qidiruv Maydoni (Search Bar):
  - Test nomi yoki mavzusi bo'yicha tezkor matnli qidiruv.

* Holat Bo'yicha Filtr (Status Filter):
  - [Hammasi]
  - [Bajarilgan] (Oldin ishlangan va natijasi mavjud testlar)
  - [Bajarilmagan] (Hali ishlanmagan yangi testlar)

* Saralash (Sorting):
  - [Yangilari oldin] (Qo'shilgan sana bo'yicha)
  - [Nom bo'yicha: A-Z]
  - [Nom bo'yicha: Z-A]
  - [Qiyinlik darajasi bo'yicha]


2. TEST KARTOCHKALARI TO'RI (CARD GRID - MINIMAL / RASMSIZ)
--------------------------------------------------------------------
* Grid Layout:
  - Responsive CSS Grid (Desktop: 4 ta, Planshet: 2 ta, Mobile: 1 ta ustun).

* Ochiq Karta Strukturasi:
  - CEFR Daraja belgisi: Rangli badge (A1-A2 Ko'k, B1-B2 Yashil, C1-C2 Qizil).
  - Test nomi: Masalan, "Speaking Test: Daily Routine".
  - Holat indikatori: "Yangi", "Bajarildi - 85%", "Jarayonda".
  - Urinishlar soni: Masalan, "Urinishlar: 1 ta".

* Qulflangan Holat (Locked State - Free tarif uchun):
  - Karta ustida CSS xiralashtirish effekti (filter: blur(6px)).
  - Markazda oq doira ichida Qulf belgisi (Lock Icon).
  - Pastki burchakda "Qulflangan" yozuvi.


3. KIRISH HUQUQI VA PAYWALL MANTIQI (ACCESS CONTROL)
--------------------------------------------------------------------
* Free Tarif:
  - Har bir moduldan (Speaking, Listening, Reading, Writing) faqat
    1 tadan bepul sinov testi ochiq bo'ladi.
  - Qolgan barcha testlar qulflangan holatda turadi.

* Start, Pro, Pro+, Ultra Tariflari:
  - Barcha mashq testlari to'liq ochiq bo'ladi.

* Qulflangan Test Bosilganda:
  - Obunaga chaqiruvchi modal chiqadi: "Ushbu mashqni ishlash uchun
    obuna bo'ling" va obuna sahifasiga yo'naltiruvchi havola ko'rsatiladi.


4. TESTGA KIRISH VA TAYYORGARLIK MODAL OYNASI (PRE-TEST MODAL)
--------------------------------------------------------------------
* Oyna Ko'rinishi (Overlay & Focus):
  - Ochiq test kartasi bosilganda fon to'liq xiralashadi (Backdrop blur)
    va markazda diqqatni jamlovchi modal oyna ochiladi.
  - O'ng yuqori burchakda [X] yopish tugmasi.

* Modal Ichidagi Ma'lumotlar:
  1) Test Sarlavhasi va Qismi:
     - Masalan: "Speaking Test 1 - Part 1: Introduction"
  2) Test Haqida Qisqacha Ma'lumot:
     - Test tartibi va jarayon tavsifi (masalan: "Ushbu qismda 3 ta
       savol beriladi va ularga og'zaki javob berishingiz kerak").
  3) Parametrlar (Meta-info):
     - Savollar soni: 3 ta savol / 15 ta test
     - Ajratilgan vaqt: Masalan, 5 daqiqa (yoki test turiga mos)
     - Qiyinlik darajasi: B2
     - Shaxsiy urinishlar soni: 0 marta
  4) Qoidalar va Xavfsizlik Talabi:
     - Ogohlantirish bloki: "Diqqat! Test boshlangandan so'ng oynadan
       chiqib ketish yoki sahifani yangilash testni yakunlangan deb
       hisoblaydi. Bunday holatda 0 ball va 0 XP beriladi."
  5) Sozlamalar (Vaqt Rejimi):
     - Vaqt chegarasi (Timer Switch): [Yoqilgan / O'chirilgan]
     - Eslatma: Vaqt o'chirilsa, mashq rejimi hisoblanadi va XP berilmaydi.

* Boshqaruv Tugmalari:
  - [Bekor qilish] (Kulrang tugma, modalni yopadi)
  - [Testni boshlash] (Asosiy harakat tugmasi, test interfeysini ochadi)
====================================================================

====================================================================
           EVALORA PLATFORMASI: ADOLATLI XP VA REYTING TIZIMI
====================================================================

SAHIFA DIZAYNI VA STRUKTURASI (UI/UX)
--------------------------------------------------------------------
* Podium (Top 3 Peshqadam):
  - Tepa markazda 1-o'rin (Oltin kubok / nishon)
  - Chap va o'ngda 2-o'rin (Kumush) hamda 3-o'rin (Bronza)
  - Foydalanuvchi avatari, ismi va to'plagan jami XP ko'rsatiladi.

* Shaxsiy Foydalanuvchi Holati (Sticky User Bar):
  - Foydalanuvchining o'z o'rni va XP ko'rsatkichi ekranning pastki
    qismida har doim ko'rinib turadi (masalan: "Sizning o'rningiz: #42 | 640 XP").

* Asosiy Reyting Jadvali (Leaderboard Table):
  - Ustunlar: O'rin | Foydalanuvchi | CEFR / Daraja |      | Jami XP

1. XP TIZIMI ASOSIY QOIDALARI (FAIR-PLAY BALANCE)
--------------------------------------------------------------------
* Kunlik Maksimal Chegara (Daily XP Cap):
  - Har bir foydalanuvchi bir kunda ko'pi bilan 250 XP yig'a oladi.
  - Bu Ultra obunachilarining cheksiz test ishlab sun'iy ravishda
    1-o'ringa chiqib olishini to'xtatadi.

* Test Hajmi Bo'yicha XP Taqsimoti:
  - Qisqa mini-testlar (5-10 savol): Maksimal 15 XP
  - To'liq modul testlari (Reading/Listening): Maksimal 40 XP
  - To'liq Mock Test (barcha modullar): Maksimal 100 XP

* Foizli Hisoblash Formulasi:
  - Olingan XP = (Maksimal XP) * (To'plangan foiz / 100)
  - Misol (Mock test): 85% to'plansa -> 100 * 0.85 = 85 XP
  - Misol (Modul test): 80% to'plansa -> 40 * 0.80 = 32 XP

* Takroriy Ishlash va Anti-Spam:
  - Bir marta ishlangan testni qayta ishlaganda XP BERILMAYDI.
  - Natija 50% dan past bo'lsa, XP berilmaydi (shunchaki bosib
    chiqishning oldini olish uchun).


2. REYTING VA FOYDALANUVCHILAR TENGXUQUQLILIGI
--------------------------------------------------------------------
* Obunadan Qat'i Nazar Tenglik:
  - Reytingda kim ko'p pul to'lagani emas, kim har kuni muntazam va
    xatosiz test ishlagani peshqadam bo'ladi.

* Geymifikatsiya Bonuslari:
  - 5 kunlik uzluksiz o'qish (Daily Streak): +25 XP
  - Birinchi marta 100% natija ko'rsatish: +10 XP sifat bonusi


3. REYTING FILTRLARI
--------------------------------------------------------------------
* Haftalik Reyting (Weekly):
  - Har dushanba 00:00 da yangilanadi (asosiy raqobat maydoni).
* Oylik Reyting (Monthly):
  - Oy yakuni bo'yicha eng yaxshi talabalar.
* Barcha Davrlar (All-Time):
  - Platformadagi umumiy to'plangan rekord XP.
====================================================================

====================================================================
           EVALORA PLATFORMASI: "NATIJALARIM" BO'LIMI
====================================================================

1. ASOSIY STATISTIKA KARTALARI (QUICK STATS)
--------------------------------------------------------------------
* Umumiy Natija:
  - Joriy o'rtacha ball / prognoz qilingan CEFR darajasi (masalan: B2 - 78%)
* Testlar Faolligi:
  - Jami ishlangan modul testlari va to'liq Mock testlar soni
* Kuchli Tomon (Best Skill):
  - Eng yuqori ball to'plangan bo'lim (masalan: Reading 92%)
* E'tibor Talab Qiladigan Tomon (Weak Skill):
  - Eng past ball to'plangan bo'lim (masalan: Speaking 58%)


2. MODULLAR BO'YICHA TAHLIL VA O'SISH DINAMIKASI
--------------------------------------------------------------------
* Ko'nikmalar Balansi (Radar / Progress Bar):
  - Reading, Listening, Writing, Speaking foizlari alohida ko'rsatiladi.
* Vaqt Bo'yicha O'sish Grafigi (Progress Line Chart):
  - Oxirgi 1-3 oy davomida ishlangan testlar va ulardagi ballar
    o'sishi chiziqli grafikda ifodalanadi.


3. TESTLAR TARIXI VA FILTRLASH RO'YXATI (TEST HISTORY)
--------------------------------------------------------------------
* Tepadagi Filtr Paneli:
  - Modullar: [Hammasi] | [Speaking] | [Listening] | [Reading] | [Writing]
  - Holat filtri: [Barchasi] | [AI tahlili borlar] | [Faqat ball]

* Test Qatori Ma'lumotlari (Row Data):
  - Modul turi va nomi (masalan: "Writing Test 2")
  - Topshirilgan sana (masalan: "16.08.2026")
  - CEFR darajasi (masalan: "B2")
  - Olingan ball (masalan: "68 / 75")
  - AI Holat Indikatori: [✨ AI tahlili mavjud] yoki [⏳ Faqat ball]
  - Harakat tugmasi: [Ochish / Ko'rish ->]


4. TEST NATIJASI VA XATOLARNI KO'RISH MODAL OYNASI
--------------------------------------------------------------------
* Oyna Ko'rinishi:
  - Qatordagi [Ochish] bosilganda orqa fon to'liq xiralashadi (Backdrop blur)
    va markazda test hisoboti modali ochiladi.
  - Tepa o'ng burchakda [X] yopish tugmasi.

* Test Turiga Mos Natijalar Ko'rinishi:
  1) Reading / Listening Testlari:
     - Filtr tablari: [Barchasi] | [To'g'ri (Yashil)] | [Xatolar (Qizil)]
     - Savollar ro'yxati: Savol raqami, tanlangan javob va to'g'ri javob
       (faqat quruq natija, ortiqcha tushuntirishlarsiz).
  2) Writing Testi:
     - Foydalanuvchi yozgan insho matni va so'zlar soni.
  3) Speaking Testi:
     - Topshirilgan audio yozuv pleyeri (eshitib ko'rish imkoniyati bilan).

* AI Tahlil Holati va Harakatlar (Pastki Blok):
  - 1-holat (Agar AI tahlili avval olingan bo'lsa):
    * Saqlangan to'liq AI xulosa matni, xatolar tushuntirishi va
      tavsiyalar bepul ko'rinib turadi (limit/coin sarflanmaydi).
  - 2-holat (Agar AI tahlili hali olinmagan bo'lsa):
    * Chaqiruv bloki: "Ushbu testni Evalora AI yordamida tahlil qiling va xatolaringiz sababini bilib oling."
    * Tugma: [AI Xulosasini Olish]
    * Bosilganda limit/coin tekshirish modali chiqadi va tasdiqlangach,
      tahlil qilinib bazaga doimiy saqlanadi.


5. UMUMIY AI XULOSASI VA TAVSIYALAR BLOKI (AI DIAGNOSTIC & ACTIONS)
--------------------------------------------------------------------
* AI Umumiy Xulosasi:
  - Barcha ishlangan testlar kesimidagi muntazam zaif nuqtalar
    (masalan: grammatika zamonlari yoki insho tuzilishi) bo'yicha tahlil.

* Shaxsiy Harakatlar Rejasi:
  - Sayt ichidagi mos modul testlariga to'g'ridan-to'g'ri havolalar:
    * "B2 Grammatika: 3-modul" testini ishlash.
    * "Speaking Test 4" orqali nutqni mustahkamlash.


6. CHEKLOVLAR VA PAYWALL MANTIQI
--------------------------------------------------------------------
* Free Foydalanuvchilar:
  - Ballar, statistika va testlar tarixi to'liq ochiq.
  - "Umumiy AI Xulosasi va Tavsiyalar" bloki xiralashgan (blur) va
    qulflangan bo'ladi.

* Faol Obunachilar:
  - Barcha tahlillar va AI tavsiyalar paneli to'liq ochiq ishlaydi.
====================================================================

====================================================================
           EVALORA PLATFORMASI: OBUNA VA COIN TIZIMI
====================================================================

1. ASOSIY MANTIQ VA QOIDALAR (CORE LOGIC)
--------------------------------------------------------------------
* AI Imkoniyatlarini Paywall Orqali Cheklash:
  Eng qimmatli xizmat (AI tahlili va xatolarni tushuntirish) faqat
  obunachilar uchun ochiq bo'ladi. Bu foydalanuvchini obuna sotib
  olishga undaydi.

* Free Uchun Qat'iy Qulf:
  Free foydalanuvchiga faqat 2 marta sinov tariqasida AI tahlili
  beriladi (1 ta Mock test + 1 ta oddiy test). Shundan so'ng obuna
  bo'lmaguncha u AI xizmatlaridan (hatto coini bo'lsa ham)
  foydalana olmaydi.

* Obuna va AI Limitlari:
  Har bir oylik tarif o'zining kiritilgan bepul AI limitiga ega.

* Qo'shimcha AI Tahlili:
  Agar obunachi oylik AI limitini tugatsa, coin to'lab qo'shimcha
  AI tahlillarini sotib olishi mumkin.

* Coinlarning Asosiy Vazifasi:
  - Yangi testlar va Mock to'plamlarni ochish
  - Murakkab savollarning yechim kalitini ko'rish
  - Obunachilar uchun limitdan tashqari qo'shimcha AI tahlillarini xarid qilish


2. TARIF REJALARI VA AI LIMITLARI
--------------------------------------------------------------------
A. FREE (Boshlang'ich):
   - Kiritilgan bepul AI tahlili: Jami 2 marta (1 Mock + 1 modul)
   - Limit tugasa coin bilan AI olish: Ruxsat berilmagan (Obuna shart)
   - Testlar bazasi: Cheklangan sinov testlari
   - Oylik bonus coin: 0 coin

B. START (Arzon / Sinov):
   - Kiritilgan bepul AI tahlili: 3 ta / oy
   - Limit tugasa coin bilan AI olish: Mumkin (15 coin / 1 tahlil)
   - Testlar bazasi: 4 ta Mock test + standart testlar
   - Oylik bonus coin: 30 coin

C. PRO (Ommabop):
   - Kiritilgan bepul AI tahlili: 6 ta / oy
   - Limit tugasa coin bilan AI olish: Mumkin (12 coin / 1 tahlil)
   - Testlar bazasi: 12 ta Mock test + to'liq standart baza
   - Oylik bonus coin: 80 coin

D. PRO+ (Kengaytirilgan):
   - Kiritilgan bepul AI tahlili: 12 ta / oy
   - Limit tugasa coin bilan AI olish: Mumkin (10 coin / 1 tahlil)
   - Testlar bazasi: 20 ta Mock test + barcha bo'limlar
   - Oylik bonus coin: 150 coin

E. ULTRA (Maksimal):
   - Kiritilgan bepul AI tahlili: Cheksiz (Fair-use: 5 ta / kun)
   - Limit tugasa coin bilan AI olish: Kiritilgan (Qo'shimcha to'lovsiz)
   - Testlar bazasi: Barcha Mock testlar va materiallar ochiq
   - Oylik bonus coin: 300 coin


3. COIN IQTISODIYOTI (SARFLASH VA YIG'ISH)
--------------------------------------------------------------------
[ Sarflash (Spending) ]
* Testlarni ochish:
  - 1 ta qo'shimcha Mock test to'plami: 20 coin
  - 1 ta modul test bloki: 5 coin
  - Murakkab savolning to'liq yechimini ko'rish: 2 coin

* Qo'shimcha AI tahlili sotib olish (Faqat faol obunachilar uchun):
  - Start foydalanuvchilari uchun: 15 coin / 1 ta tahlil
  - Pro foydalanuvchilari uchun: 12 coin / 1 ta tahlil
  - Pro+ foydalanuvchilari uchun: 10 coin / 1 ta tahlil

[ Yig'ish (Earning) - Bitta test uchun faqat 1 marta beriladi ]
* Har qanday bitta bo'lim testini yakunlash: +1 coin
* Oddiy testdan 100% natija ko'rsatish: +5 coin
* To'liq Mock testdan 100% natija ko'rsatish: +20 coin
* 5 kun ketma-ket faollik (Daily Streak): +10 coin

[ Alohida Coin Paketlari (Sotib olish) ]
* Kichik paket: 50 coin
* O'rta paket: 120 coin (+20 coin bonus)
* Katta paket: 300 coin (+60 coin bonus)

[Qat'iy qoida:] 
* Bitta test uchun faqat 1 marta beriladi — agar foydalanuvchi bir xil test yoki Mock testni 2-marta, 3-marta qayta ishlasa, unga boshqatdan coin berilmaydi.

[Ishlagani uchun mukofot:]
* Har qanday bitta bo'lim testini to'liq yakunlash: +1 coin
* Oddiy testdan 100% natija ko'rsatish: +5 coin
* To'liq Mock testdan 100% natija ko'rsatish: +20 coin


4. BIZNES VA STRATEGIK FOYDASI
--------------------------------------------------------------------
* Freemium Xavfsizligi:
  Bepul foydalanuvchilar qimmat AI API hisobini tugatib qo'ymaydi.

* Yuqori Konversiya:
  Foydalanuvchi test ishlaydi, xatosini ko'radi, ammo to'liq AI
  tahlili va tavsiyalarni olish uchun obunaga o'tishga majbur bo'ladi.

* Moslashuvchanlik:
  Obunachilar oylik limiti tugasa, qimmatroq tarifga o'tmasdan
  coinlari evaziga qo'shimcha AI tahlillarini xarid qila oladi.

====================================================================
     EVALORA PLATFORMASI: OBUNA, COIN VA TELEGRAM TO'LOV TIZIMI
====================================================================

1. SAHIFA TUZILISHI VA TABLAR (PRICING & WALLET UI)
--------------------------------------------------------------------
* Tepadagi Boshqaruv Tablari:
  - [ 🛡 Obuna Tariflari ] | [ 🪙 Coin Hamyoni ]

--------------------------------------------------------------------
* YUQORI HOLAT VA HAMYON PANELI (CURRENT STATUS & WALLET BANNER)
--------------------------------------------------------------------
  - Joylashuvi: Sahifaning eng yuqori qismida, tarif kartalaridan oldin
    turuvchi yaxlit karta (Card Banner).
  - Tarkibiy Qismlari:
    1) Chap tomonda (Joriy Tarif Holati):
       - "Joriy Tarifingiz:" yozuvi va faol tarif badge'i (masalan: [Pro Obuna]).
       - Tarifning amal qilish muddati (masalan: "Amal qilish muddati: 16.09.2026 gacha").
       - Qolgan oylik bepul AI tahlili limiti (masalan: "Qolgan AI tahlili: 4 / 6 ta").
    2) O'ng tomonda (Coin Balansi va Tezkor Harakat):
       - Yirik qalin shriftda joriy balans: "🪙 45 Coin".
       - Kichik eslatma: "3 ta test yoki qo'shimcha AI tahliliga yetarli".
       - Tezkor tugma: [Coin Sotib Olish ->] (Bosilganda to'g'ridan-to'g'ri
         pastdagi Coin paketlariga yoki Coin tabiga silliq skroll qiladi).
  - Mobil Moslashuv:
    * Telefon ekranida bu blok ixcham 2 ustunli yoki ustma-ust
      ajratilgan qulay karta ko'rinishiga o'tadi.

* 1-TAB: OBUNA TARIFLARI KARTALARI (PRICING PLANS GRID)
  - 5 ta Tarif Kartasi: Free | Start | Pro | Pro+ | Ultra
  - Vizual Urg'u: "Pro" kartasi "⭐ Eng ommabop tanlov" yorlig'i bilan
    alohida chegaralangan (border highlight) holda ajralib turadi.
  - Har bir kartada:
    * Tarif nomi, narxi va qisqa shiori.
    * Kiritilgan bepul AI tahlillari soni.
    * Beriladigan oylik bepul bonus coinlar.
    * Kiritilgan Mock testlar va imkoniyatlar ro'yxati.
    * Harakat tugmasi: [Faollashtirish uchun yozish ->]
      (Joriy tarifda esa: [Joriy tarifingiz] - nofaol holatda).

* 2-TAB: COIN HAMYONI VA PAKETLAR (COIN STORE)
  - Yuqori Balans Paneli:
    * Foydalanuvchining joriy tangalari (masalan: "🪙 45 Coin").
  - Coin Paketlari:
    * Kichik paket: 50 coin
    * O'rta paket: 120 coin (+20 coin bonus yorlig'i)
    * Katta paket: 300 coin (+60 coin bonus yorlig'i)
  - Har bir paket ostida: [Xarid qilish ->] tugmasi.


2. TELEGRAM ORQALI TO'LOV JARAYONI (TELEGRAM DEEP-LINK FLOW)
--------------------------------------------------------------------
* 1-QADAM: Saytda Tanlash va Yo'naltirish
  - Foydalanuvchi tarif yoki Coin paketidagi [Faollashtirish / Xarid]
    tugmasini bosadi.
  - Orqa fon xiralashadi va qisqa yo'riqnoma modali ochiladi:
    * "To'lov rasmiy Telegram admin orqali xavfsiz amalga oshiriladi."
    * Tugma: [Telegram orqali adminga yozish ->]

* 2-QADAM: Avtomatik Xabar bilan Telegramga O'tish
  - Havola bosilganda Telegram ochiladi va xabar maydoniga avtomatik
    foydalanuvchi ma'lumotlari joylanadi:
    "Assalomu alaykum! Men Evalora platformasida [TARIF_NOMI] tarifini
     (yoki [PAKET_NOMI] coin paketini) faollashtirmoqchiman.
     Mening ID raqamim: [EV-XXXXXX]"
  - Foydalanuvchi xabarni yuboradi.

* 3-QADAM: Admin Tomonidan To'lovni Qabul Qilish va Tekshirish
  - Admindan avtomatik/tezkor javob: Rekvizitlar va to'lov izohiga
    ID raqamni yozish talabi yuboriladi.
  - Foydalanuvchi to'lov chekini Telegram orqali yuboradi.
  - Admin pul tushganini tekshiradi va Admin paneli orqali ushbu
    unikal ID'ga obunani / coinlarni biriktiradi.
  - Foydalanuvchiga muvaffaqiyatli faollashtirilgani haqida tasdiq
    xabari (yoki skrinshot) yuboriladi va jarayon yakunlanadi.


3. MOBIL MOSLASHUVCHANLIK (MOBILE RESPONSIVE UX)
--------------------------------------------------------------------
* Tarif Kartalari:
  - Telefondagi tor ekranda 5 ta kartani qulay ko'rish uchun gorizontal
    suriluvchi karusel (Horizontal Snap Scroll) ko'rinishida ishlaydi.
* To'g'ridan-to'g'ri Ilovaga O'tish:
  - Telegram havolasi mobil telefonda to'g'ridan-to'g'ri Telegram ilovasini
    bitta bosishda ochib beradi (`tg://` protokoli).


==================================================================== 

====================================================================
           EVALORA PLATFORMASI: "SOZLAMALAR" (SETTINGS) BO'LIMI
====================================================================

1. ASOSIY PROFIL KARTASI (USER PROFILE HEADER)
--------------------------------------------------------------------
* UI Tuzilishi (Card Inset / rounded-2xl):
  - Chapda: Dumaloq Avatar (Profil rasmi yoki bosh harflar).
  - Markazda:
    * To'liq Ism va Familiya (Katta, qalin shrift).
    * Email yoki Username (@username).
    * O'zgarmas Unikal ID: masalan, "ID: EV-849201" + [Nusxa olish] ikonchasi.
  - O'ngda: Joriy faol tarif badge'i (masalan: [Pro Obuna] - yashil rangda).

* Qisqa Metrikalar Paneli (Profil ostidagi 3 ta mini-blok):
  - [⏱ Amaliyot vaqti: 12 soat] | [📝 Ishlangan testlar: 28 ta] | [⚡ XP: 750]


2. GURUHLANGAN SOZLAMALAR RO'YXATI (GROUPED ACCORDION & LIST)
--------------------------------------------------------------------

[ 1-GURUH: SHAXSIY MA'LUMOTLAR ]
* Profilni Tahrirlash (Akkordeon / Ochiluvchi blok):
  - Bosilganda pastga silliq ochiladi.
  - Profil rasmini yuklash / o'zgartirish (JPG, PNG, WebP · max 5 MB).
  - "To'liq ism" tahrirlash maydoni (Input).
  - "Telefon raqam" kiritish maydoni.
  - Tugmalar: [O'zgarishlarni saqlash] (To'q sariq) va [Bekor qilish].

[ 2-GURUH: ILOVA SOZLAMALARI ]
* Til Tanlash (Language):
  - Ikonka: Globus
  - Tanlov: Dropdown [UZ v] -> (O'zbekcha, English, Русский, Türkçe).
* Ko'rinish / Mavzu (Theme Mode):
  - Ikonka: Oy / Quyosh
  - Tanlov: Segmented Switch -> [ 💻 Tizim | ☀️ Yorug' | 🌙 Qorong'u ].
* Mikrofon Sozlamalari (Microphone Test):
  - Ikonka: Mikrofon
  - Bosilganda: Speaking testi uchun mikrofon sezgirligini tekshirish
    va ruxsatlarni sozlash modali ochiladi.

[ 3-GURUH: OBUNA VA TO'LOVLAR ]
* Tarif va To'lovlar (Subscription & Payments):
  - Ikonka: Kredit karta
  - Bosilganda ochiladi:
    * Joriy tarif holati va amal qilish muddati.
    * Qolgan bepul AI tahlillari limiti.
    * Coin hamyoni balansi va [Coin sotib olish] tugmasi.
    * Karta raqam orqali to'lov yo'riqnomasi va chek yuborish tugmasi.

[ 4-GURUH: HUQUQIY VA MA'LUMOT ]
* Foydalanish Shartlari (Terms of Service) -> Huquqiy sahifaga o'tish.
* Maxfiylik Siyosati (Privacy Policy) -> Huquqiy sahifaga o'tish.
* Ilova Haqida (About Evalora) -> Versiya: v1.0.0, mualliflik huquqi.

[ 5-GURUH: AKKAUNT XAVFSIZLIGI ]
* Tizimdan Chiqish (Log Out):
  - Qizil shrift bilan yozilgan alohida blok: [ 🚪 Akkauntdan chiqish ].
  - Bosilganda tasdiqlash modali chiqadi: "Haqiqatan ham chiqmoqchimisiz?".
====================================================================


====================================================================
     EVALORA PLATFORMASI: ICHKI NAVIGATSIYA, SIDEBAR VA HEADER
====================================================================

1. LAYOUT VA TEST JARAYONI HOLATI (FULLSCREEN FOCUS MODE)
--------------------------------------------------------------------
* Standart Holat (Dashboard, Mashq, Natijalar, Reyting, Sozlamalar):
  - Sidebar va Header doimiy faol bo'lib ko'rinib turadi.

* Faol Test Jarayoni (Active Test / Test Ishlash Rejimi):
  - Foydalanuvchi diqqatini 100% jamlashi uchun Sidebar va Header
    avtomatik ravishda butunlay yashiriladi.
  - Test yakunlanib, natijalar tasdiqlangach yoki testdan chiqilgach,
    Sidebar va Header o'z joyiga qaytadi.


2. DESKTOP SIDEBAR (CHUQUR MOSLASHUVCHAN YON PANEL)
--------------------------------------------------------------------
* Joylashuv:
  - Chap tomonda, devorga yopishmagan suzuvchi panel (p-3 / p-4).

* 1-Holat: Kengaytirilgan (Expanded):
  - Kengligi: ~240px
  - Logo + Asosiy menyu havolalari:
    [🏠 Bosh sahifa] | [⚡ Mashq] | [📊 Natijalarim] | [🏆 Reyting]
  - Eng pastki qismda: Faqat [⚙️ Sozlamalar].
  - Yig'ish / Kichraytirish tugmasi (Toggle Collapse).

* 2-Holat: Yig'ilgan (Collapsed Mini-Bar):
  - Kengligi: ~72px
  - Faqat markazlashgan ikonkalar ko'rinadi.
  - Ikonka ustiga sichqoncha kelganda kichik Tooltip matni chiqadi.


3. MOBIL MOSLASHUV (MOBILE BOTTOM NAVIGATION)
--------------------------------------------------------------------
* Joylashuv:
  - Telefon ekranining eng pastki qismida suzuvchi kapsula
    (fixed bottom-4 left-4 right-4 z-40).

* Vizual Effekt:
  - Glassmorphism: bg-white/80 backdrop-blur-md, rounded-2xl, border, shadow.

* Asosiy Menyu Tugmalari (5 ta):
  - [🏠 Bosh sahifa] | [⚡ Mashq] | [📊 Natijalar] | [🏆 Reyting] | [⚙️ Sozlamalar]


4. YUQORI HEADER STRUKTURASI (TOP APP HEADER)
--------------------------------------------------------------------
* Chap Tomon:
  - Sahifa yo'li / Nomi (Breadcrumbs): masalan, "Bosh sahifa / Mashqlar"

* O'ng Tomon (Status, Wallet va Profil):
  1) 🔥 Streak Ko'rsatkichi: masalan, "🔥 5 kun"
  2) 🪙 Coin Balansi: masalan, "45 Coin" + [+] tezkor to'ldirish
  3) 🔔 Bildirishnomalar: Tizim xabarlari uchun qo'ng'iroqcha ikonchasi
  4) 🌐 Til Tanlash: [UZ v] -> UZ, EN, RU, TR
  5) 👤 Profil Kapsulasi:
     - "Ism Familiya" + "B2 · Free" + Dumaloq Avatar
     - Bosilganda Dropdown ochiladi:
       * Foydalanuvchi ma'lumotlari (@username)
       * [⚙️ Sozlamalar]
       * [🚪 Chiqish] (Qizil rangda, Clerk sessiyasini yakunlash)
====================================================================

====================================================================
     EVALORA PLATFORMASI: TEST TOPSHIRISH VA XAVFSIZLIK REJIMLARI
====================================================================

1. TEST REJIMLARI VA QOIDALARI (TEST MODES)
--------------------------------------------------------------------
* 1-REJIM: STANDART MASHQ (PRACTICE MODE)
  - Belgisi: Yashil/Ko'k rangli tinchlantiruvchi badge.
  - Xususiyatlari: Audioni qayta eshitish va pauza qilish mumkin,
    savollar orasida erkin harakatlanish ochiq.
  - Xavfsizlik: Tabdan chiqish cheklanmagan, qat'iy nazoratsiz.

* 2-REJIM: REAL IMTIHON (STRICT EXAM MODE)
  - Belgisi: Qizil/To'q sariq rangli ogohlantiruvchi badge.
  - Listening Qoidasi: Audio faqat 1 marta eshitiladi (orqaga qaytarish,
    pauza qilish va tezlikni o'zgartirish bloklanadi).
  - Anti-Cheat Nazorati:
    * Ekranni rasmga olish (PrintScreen) va nusxa ko'chirish (Copy-Paste) bloklanadi.
    * Boshqa tabga yoki ilovaga o'tilsa (Page Visibility API):
      - 1-holat: Qizil qat'iy ogohlantirish oynasi chiqadi.
      - 2-holat: Test darhol yakunlanadi, 0 ball va 0 XP hisoblanadi.


2. TAYYORGARLIK MODALIDA REJIM TANLASH VA OGOHLANTIRISH
--------------------------------------------------------------------
* Rejim Tanlash Switchi:
  - [ Standart Mashq ] yoki [ Real Imtihon ] tanlovi.

* Real Imtihon Tanlangandagi Qizil Ogohlantirish Bloki:
  - Fon: Och qizil (bg-red-50 / border-red-500).
  - Matn: "DIQQAT! Real imtihon rejimida audioni qayta eshitib bo'lmaydi.
    Boshqa dasturga o'tish yoki sahifani yangilash testni 0 ball bilan
    avtomatik to'xtatadi."


3. TEST SAHIFASI STRUKTURASI (ACTIVE TEST INTERFACE)
--------------------------------------------------------------------
* Yuqori Test Paneli (Top Bar):
  - Test nomi va joriy bo'lim (masalan: "Reading · B2 Test 1").
  - Countdown Taymer (Oxirgi 1 daqiqada qizil animatsiyaga o'tadi).
  - [Testni Yakunlash] asosiy tugmasi.

* Desktop (PC) Ishchi Maydoni:
  - 50/50 Split View: Chapda matn/audio, o'ngda savollar va javoblar.

* Savollar Navigatsiya Paneli (Bottom/Side Navigator):
  - Savollar raqamlari: [1] [2] [3] ... [20].
  - Holat ranglari: Kulrang (ishlanmagan), To'q (ishlangan), Sariq (belgilangan).


4. MOBIL MOSLASHUVCHANLIK (MOBILE RESPONSIVE UX)
--------------------------------------------------------------------
* Reading & Listening:
  - Ekran ikkiga bo'linmaydi, yuqorida qulay tablar bo'ladi:
    [📄 Matn/Audio] <---> [❓ Savollar].
  - Bir tegish bilan savol va matn o'rtasida o'tiladi.

* Speaking:
  - Ekranning markazida katta pulsatsiyalanuvchi ovoz yozish tugmasi
    va audiotexnika indikatori (Audio Waveform).

* Writing:
  - Matn maydoni mobil klaviatura ochilganda pastki qismni to'sib
    qo'ymaydigan moslashuvchan balandlikda (Dynamic Viewport Height) ishlaydi.
  - Pastda doimiy ko'rinib turuvchi so'zlar hisoblagichi.
====================================================================

====================================================================
     EVALORA PLATFORMASI: TESTDAN SO'NG NATIJALAR VA AI TAHLILI
====================================================================

1. 1-BOSQICH: TEZKOR NATIJA MODALI (QUICK RESULT MODAL)
--------------------------------------------------------------------
* Oyna Ko'rinishi:
  - Test tugashi bilan fon to'liq xiralashadi (Backdrop blur) va markazda
    natija modali ochiladi.
  - Tepadagi asosiy ko'rsatkichlar:
    * To'plangan ball (masalan: "62 / 75 ball" yoki "82%").
    * Taxminiy CEFR darajasi (masalan: "B2 Daraja").
    * Olingan XP va Coin (masalan: "+41 XP | +1 Coin").

* Xatolarni Ko'rish Bloki (Review Accordion - Tushuntirishlarsiz):
  - [ Xatolarni ko'rish v ] tugmasi.
  - Bosilganda modal pastga qarab silliq kengayadi.
  - Tezkor Filtrlash Tablari:
    [ Barchasi ] | [ To'g'ri javoblar ] | [ Xatolar ]
  - Ro'yxat Ko'rinishi:
    * Faqat savol raqami, foydalanuvchi tanlagan javob va to'g'ri javob
      (qizil/yashil status indikatori bilan, quruq natija, hech qanday
      izoh va tushuntirish berilmaydi).

* Modal Pastki Boshqaruv Tugmalari:
  - [ AI Xulosasini Olish ] (Asosiy urg'u berilgan harakat tugmasi).
  - [ Yakunlash va Natijalarimga o'tish ] (Ikkilamchi tugma).


2. 2-BOSQICH: AI LIMIT VA COIN TASDIQLASH MODALI
--------------------------------------------------------------------
* Qachon Chiqadi:
  - Foydalanuvchi [ AI Xulosasini Olish ] tugmasini bosganida.

* Ko'rsatiladigan Holatlar (Limit va Hamyon Tekshiruvi):
  1) Agar tarif bo'yicha bepul AI limiti bo'lsa:
     - "Sizda joriy oylik tarifingizdan 3 ta AI tahlil limiti bor.
        Ushbu tahlil uchun 1 ta limit sarflanadi."
  2) Agar tarif limiti tugab, coin orqali to'lanadigan bo'lsa:
     - "Tarifdagi bepul AI limiti tugagan. Balansingizdan 12 Coin
        sarflanadi. (Joriy balans: 45 Coin)."
  3) Agar obunasi yoki Coini yetmasa:
     - "Sizda AI tahlili uchun limit yoki coin yetarli emas.
        Obunani yangilang yoki coin xarid qiling." (va xarid havolasi).

* Tasdiqlash Tugmalari:
  - [ Bekor qilish ] (Orqaga qaytadi).
  - [ Davom etish / Tahlilni boshlash ] (Tasdiqlaydi).


3. 3-BOSQICH: DINAMIK YUKLANISH HOLATI (DYNAMIC SKELETON LOADING)
--------------------------------------------------------------------
* Jarayon:
  - Oldingi modallar yopiladi va markazda animatsiyali yuklanish ko'rsatiladi.
  - Bosqichma-bosqich dinamik status yozuvlari:
    1) "Javoblar strukturasi va mezonlar tekshirilmoqda..."
    2) "Grammatika va kontekst tahlil qilinmoqda..."
    3) "Shaxsiy xulosa va tushuntirishlar shakllantirilmoqda..."


4. 4-BOSQICH: AI XULOSASI VA CHUQUR DIAGNOSTIKA MODALI
--------------------------------------------------------------------
* AI Tahlil Mazmuni:
  - Umumiy baholash va CEFR xulosasi.
  - Tushuntirishlar va xatolar tahlili: aynan qaysi savollarda nima uchun
    xato ketgani va aslida nima so'ralgani batafsil yoritiladi.
  - Zaif nuqtalarni yaxshilash bo'yicha tavsiyalar.
  - Qo'shimcha qulaylik: [ Xulosadan nusxa olish ] (Copy text) tugmasi.

* Natijani Saqlash va Yakunlash:
  - [ Natijalarim bo'limiga o'tish ] tugmasi.
  - Bosilganda AI xulosasi va test natijalari avtomatik bazaga yoziladi
    hamda foydalanuvchi "Natijalarim" sahifasiga o'tkaziladi.


5. DASHBOARD VA SAQLANGAN AI XULOSALARINI KO'RISH MANTIQI
--------------------------------------------------------------------
* Avtomatik Saqlanish:
  - Har bir olingan AI xulosasi foydalanuvchi profiliga va Dashboard'ga
    avtomatik biriktirib boriladi.

* Dashboard'dagi AI Xulosalari Bloki:
  - Ro'yxat kartasi shaklida ko'rinadi:
    * Test nomi va qismi: Masalan, "Speaking Part 1 Testi - AI xulosasi"
    * Yaratilgan vaqti: "16.08.2026"
    * Harakat tugmasi: [ Xulosani ko'rish ]

* [ Xulosani ko'rish ] Bosilgandagi Hodisa:
  - Orqa fon to'liq xiralashadi (Backdrop blur) va markazda yordamchi
    modal oyna ochiladi.
  - Modal ichida saqlangan to'liq AI xulosa matni va tavsiyalar chiqadi.
  - Tepa o'ng burchakdagi [ X ] yopish tugmasi bosilganda oyna yopiladi
    va foydalanuvchi yana Dashboard'da qoladi.
====================================================================



====================================================================
  EVALORA PLATFORMASI: READING, LISTENING VA WRITING AI BAHOLASH LOGIKASI
====================================================================

1. UMUMIY ARXITEKTURA VA GIBRID TEKSHIRUV MODELI
--------------------------------------------------------------------
* 1-Qadam (Dasturiy / Deterministik Hisoblash):
  - Reading va Listening testlari o'quvchi yakunlashi bilan backend
    tomonidan 1 millisekundda to'g'ri/noto'g'ri kalitlar bilan tekshiriladi.
  - LLM (AI) ga butun test matni, audio yoki to'liq savollar qayta-qayta
    yuborilmaydi (Token sarfi va xarajat 80% tejaladi).

* 2-Qadam (AI Diagnostika Faqat So'rov Bo'yicha):
  - Foydalanuvchi "AI Xulosasi"ni so'ragandagina faqat u adashgan
    savollar, tanlangan noto'g'ri variant va to'g'ri kalit konteksti
    AI modeliga uzatiladi.


2. READING VA LISTENING UCHUN AI PROMPT TALABLARI
--------------------------------------------------------------------
* Kiruvchi Ma'lumotlar (Input Payload to AI):
  - Test nomi va darajasi (masalan: B2 Reading / Listening).
  - Faqat xato qilingan savollar ro'yxati:
    * Savol matni.
    * Foydalanuvchi tanlagan noto'g'ri javob.
    * Asl to'g'ri javob.
    * Matn / Audio transkriptidan tegishli kontekst parchasi.

* AI Vazifasi va Chiqish Mantiqi (System Instructions):
  1) Xato sababini aniqlash: Nega o'quvchi bu variantni tanlaganini
     tushuntirish (chalg'ituvchi so'zlar, noto'g'ri kontekst).
  2) Isbot keltirish: Asl matn yoki transkriptdagi aynan qaysi jumla
     to'g'ri javobni tasdiqlashini ko'rsatish.
  3) Konstruktiv maslahat: Keyingi safar bunday savollarda nimalarga
     e'tibor berish kerakligini qisqa tavsiya qilish.


3. WRITING BO'LIMI UCHUN AI BAHOLASH VA TAHLIL LOGIKASI
--------------------------------------------------------------------
* Kiruvchi Ma'lumotlar (Input Payload to AI):
  - Topshiriq sharti (Writing Prompt / Task).
  - Foydalanuvchi yozgan to'liq insho matni (Essay text).
  - So'zlar soni va belgilangan CEFR darajasi (masalan: B2).

* CEFR 4 Mezonli Baholash Rubrikasi (Har biri 0-25 ball / Jami 0-100):
  1) Task Achievement (Vazifani Bajarish):
     - Savolning barcha qismlari to'liq yoritilganligi va so'zlar
       soni talabiga mosligi.
  2) Coherence & Cohesion (Mantiqiy Bog'liqlik):
     - Xatboshilar strukturasi, mantiqiy ketma-ketlik va bog'lovchi
       vositalardan to'g'ri foydalanish.
  3) Lexical Resource (Lug'at Boyligi):
     - Berilgan CEFR darajasiga mos so'z boyligi, sinonimlar va
       kollokatsiyalar qo'llanilishi.
  4) Grammatical Range & Accuracy (Grammatik Aniqlik):
     - Murakkab sintaktik tuzilmalar xilma-xilligi va grammatik
       xatolarning yo'qligi.

* AI Chiqish Formati (Strict JSON Response):
  - scores: {
      taskAchievement: number,
      coherenceCohesion: number,
      lexicalResource: number,
      grammaticalAccuracy: number,
      totalScore: number,
      calculatedLevel: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
    }
  - corrections: [
      {
        original: string,      // Inshodagi xato jumla
        corrected: string,     // To'g'rilangan akademik variant
        reason: string         // Qoida va xato sababi
      }
    ]
  - generalFeedback: string    // Umumiy kuchli va zaif jihatlar xulosasi
  - recommendations: string[]  // O'sish uchun shaxsiy tavsiyalar
====================================================================

====================================================================
  EVALORA PLATFORMASI: TURK TILI SPEAKING BO'LIMI AI BAHOLASH LOGIKASI
====================================================================

1. TURK TILI FONETIK VA AKUSTIK METRIKALARI
--------------------------------------------------------------------
* Nutq Tezligi Mezonlari (WPM - Words Per Minute):
  - Turk tili qo'shimchali til bo'lgani uchun:
    * A1 / A2: 60 - 85 so'z/daqiqa
    * B1 / B2: 90 - 120 so'z/daqiqa
    * C1 / C2: 120 - 145 so'z/daqiqa

* Fonetik Tekshiruv Qoidalari:
  - Unlilar uyg'unligi (Büyük ve Küçük Ünlü Uyumu) buzilishi.
  - "ğ", "ı", "ö", "ü", "ç", "ş" tovushlarining talaffuz aniqligi.
  - So'z oxiridagi urg'ular va savol yuklamasi (-mı/-mi) ohangi.


2. TÖMER / YUNUS EMRE CEFR RUBRIKASI (4 TA MEZON)
--------------------------------------------------------------------
1) Akıcılık ve Anlatım Bütünlüğü (Fluency & Coherence):
   - Fikrlarning mantiqiy ketma-ketligi va pauzalarning kamligi.
   - Turkcha bog'lovchi vositalar: "bununla birlikte", "öte yandan",
     "kaldı ki", "dolayısıyla".

2) Telaffuz ve Vurgu Doğruluğu (Pronunciation & Intonation):
   - Tovushlarning toza ifodalanishi va tabiiy turkcha ohang.

3) Kelime Hazinesi ve Deyimler (Lexical Resource):
   - Boshlang'ich iboralar o'rniga akademik so'zlar va turkcha iboralar
     (deyim ve atasözleri) qo'llanilishi.

4) Dilbilgisi ve Cümle Yapısı (Grammatical Accuracy):
   - O'zak va qo'shimchalar mosligi, SOV gap tartibi va murakkab
     zamon shakllari (-ebilirdi, -mişcesine).


3. AI CHIQISH FORMATI (TURK TILI UCHUN JSON)
--------------------------------------------------------------------
{
  "scores": {
    "fluency": 22,
    "pronunciation": 21,
    "vocabulary": 20,
    "grammar": 23,
    "totalScore": 86,
    "cefrLevel": "B2"
  },
  "feedback": {
    "summary": "Konuşmanız akıcı ve anlaşılır, genel B2 seviyesine uygun.",
    "pronunciationErrors": [
      {
        "word": "yapacağım",
        "issue": "Yumuşak G uzatması yerine sert telaffuz edildi."
      }
    ],
    "grammarErrors": [
      {
        "spoken": "Ben gitmek istedim ama zaman yoktu.",
        "improved": "Gitmek istememe rağmen yeterli vaktim bulunmuyordu.",
        "explanation": "C1 seviyesi için zarf-fiil yapıları kullanmanız önerilir."
      }
    ],
    "vocabularySuggestions": [
      {
        "used": "çok önemli",
        "alternatives": ["hayati önem taşıyan", "büyük ehemmiyete sahip"]
      }
    ]
  }
}
====================================================================

====================================================================
     EVALORA PLATFORMASI: UMUMIY DIZAYN VA UI/UX YO'RIQNOMASI
   (AI Dasturchi Agent Uchun Tavsiyaviy Standartlar va Qoidalar)
====================================================================

1. ASOSIY FALSAFA: "DIQQAT, ANIQ IERARXIYA VA TOZALIK"
--------------------------------------------------------------------
* Dizayn maqsadi: Foydalanuvchini vizual shovqin bilan chalg'itmaslik,
  imtihon muhitida 100% diqqatni savollarga va natijalarga qaratish.
* Minimalizm: Har bir karta, tugma va rang aniq maqsadga xizmat qiladi.
* Bitta Asosiy Urg'u (One Primary Action): Har bir ekranda faqat bitta
  asosiy harakat tugmasi (Primary CTA) ko'zga tashlanadi.


2. 8PT SPACING VA O'LCHAMLAR TIZIMI (SPACING SCALE)
--------------------------------------------------------------------
* Barcha padding, margin va gap o'lchamlari 4 va 8 ga karrali bo'lishi
  tavsiya etiladi:
  - Micro (Detallar, ikonkalar orasidagi bo'shliq): 4px, 8px, 12px
    (Tailwind: gap-1, gap-2, gap-3).
  - Component (Inputlar, tugmalar, kichik kartalar): 16px, 20px, 24px
    (Tailwind: p-4, p-5, p-6).
  - Section / Page (Bloklar orasidagi masofa, sahifa paddingi): 32px, 48px, 64px
    (Tailwind: py-8, py-12, py-16).
* Hech qachon tartibsiz tasodifiy piksellardan (masalan: 13px, 19px, 27px)
  foydalanilmaydi.


3. SEMANTIK RANGLAR PALITRASI VA VAZIFALARI (COLOR HARMONY)
--------------------------------------------------------------------
* Asosiy Brend Rangi (Primary - Sovuq Moviy / Blue):
  - Kod: #2563EB (Tailwind: bg-blue-600)
  - Qo'llanishi: Asosiy tizim tugmalari, progress barlar, faol tablar.
  - Maqsadi: Akademik ishonch, professionalizm va xotirjamlik.

* Sun'iy Intellekt Urg'usi (AI Accent - Binafsha / Violet):
  - Kod: #7C3AED (Tailwind: bg-violet-600 / text-violet-600)
  - Qo'llanishi: AI xulosalari, AI tahlil tugmasi, tahlil modallari.
  - Maqsadi: Tizim ichida sun'iy intellekt xizmatlarini alohida ajratish.

* O'yinlashtirish va Mukofotlar (Gamification - Amber / Oltinrang):
  - Kod: #F59E0B (Tailwind: bg-amber-500 / text-amber-500)
  - Qo'llanishi: Coin balansi (🪙), Daily Streak kunlari (🔥).

* Fon va Matn Ranglari (Neutral / Slate):
  - Asosiy fon (Light): #F8FAFC (Slate-50)
  - Karta va panellar: #FFFFFF (White)
  - Asosiy matn: #0F172A (Slate-900) - Sof qora emas, yumshoq qora.
  - Ikkilamchi matn: #64748B (Slate-500)
  - Chegaralar: #E2E8F0 (Slate-200)

* Status Ranglari:
  - To'g'ri / Muvaffaqiyat (Success): #10B981 (Emerald-500)
  - Xato / O'chirish (Destructive): #EF4444 (Red-500)
  - Qat'iy Rejim Ogohlantirishi: #DC2626 (Red-600)


4. BURCHAQLAR VA SHAKLLAR (RADIUS & SHAPES)
--------------------------------------------------------------------
* Tugmalar, Input maydonlari va Tanlov katakchalari:
  - Radius: 8px - 10px (Tailwind: rounded-lg yoki rounded-xl)
* Asosiy Kartalar, Diagnostika bloklari va Modallar:
  - Radius: 16px (Tailwind: rounded-2xl)
* Kapsulalar (Badges), Streak, Coin ko'rsatkichlari:
  - Radius: 9999px (Tailwind: rounded-full)


5. SOYALAR VA QATLAMLAR IERARXIYASI (ELEVATION & SHADOWS)
--------------------------------------------------------------------
* Level 0 (Flat / Tekis):
  - Test savollari, inputlar, ichki qatorlar (faqat border-slate-200).
* Level 1 (Yengil suzuvchi - Low Shadow):
  - Dashboard kartalari, Sidebar paneli (Tailwind: shadow-sm).
* Level 2 & 3 (Qatlamli / Modal - Medium to High Shadow):
  - Test yakunidagi natija modallari, Dropdown menyular (Tailwind: shadow-lg / shadow-2xl).
  - Modal ochilganda fon xiralashishi: backdrop-blur-md bg-black/40.


6. KOMPONENTLAR DIZAYN TAVSIYALARI (UI COMPONENTS)
--------------------------------------------------------------------
* Tugmalar (Buttons):
  - Standart balandlik: h-11 (44px) - barmoq bilan bosish uchun ideal.
  - Hover / Focus effekti: Silliq rang to'yinganligi va focus:ring-2.
* Filtr Chipslari (Filter Chips):
  - Kichik, yengil kapsulalar (px-3 py-1.5, text-xs/sm, rounded-full).
  - Faol bo'lmaganda kulrang fon, bosilganda brend rangiga o'tadi.
* Jadval va Ro'yxatlar:
  - Har bir qator ustiga sichqoncha kelganda yengil fon (hover:bg-slate-50).


7. MOBIL MOSLASHUVCHANLIK PRINTSIPI (MOBILE-FIRST UX)
--------------------------------------------------------------------
* Touch Targets: Mobil ekranda barcha bosiladigan tugmalar kamida 44x44px.
* Split-screen o'rniga Tablar: Telefondagi Reading/Listening testlarida
  ekranni ikkiga bo'lmasdan yuqoridagi [Matn] / [Savollar] tablariga o'tish.
* Gorizontal Karusel: Obuna tariflari kabi uzun bloklarni mobil telefonda
  gorizontal suriluvchi (Snap Scroll Carousel) qilish.
====================================================================

====================================================================
     EVALORA PLATFORMASI: TEXNOLOGIK STEK VA RESURSLAR YO'RIQNOMASI
        (100% $0 Byudjetli Arxitektura va Kutubxonalar Ro'yxati)
====================================================================

1. ASOSIY FRONTEND VA BACKEND FREYMVORKLARI
--------------------------------------------------------------------
* Next.js (App Router) + TypeScript:
  - Ishlatiladigan joyi: Butun loyihaning arxitekturasi, server/client
    komponentlari va API Route handlerlar (/api/ai/diagnostics, /api/tests).
  - Nega: SSR, SEO, yuqori tezlik va to'liq serverless moslashuv.

* Tailwind CSS + Lucide React:
  - Ishlatiladigan joyi: Barcha UI stillari, 8pt spacing tizimi va
    zamonaviy minimalist piktogrammalar.

* Shadcn UI (Radix UI asosida):
  - Ishlatiladigan joyi: Dialog (Modallar), Tabs (Tariflar va Testlar),
    Progress bar, Dropdown, Accordion, Tooltip komponentlari.


2. AUTENTIFIKATSIYA VA FOYDALANUVCHI BOSHQARUVI
--------------------------------------------------------------------
* Clerk Authentication (@clerk/nextjs):
  - Bepul Limiti: 10,000 tagacha faol foydalanuvchi/oy (MAU) - $0.
  - Ishlatiladigan joyi: Google OAuth orqali kirish, xavfsiz sessiyalar,
    foydalanuvchining unikal ID boshqaruvi.


3. MA'LUMOTLAR BAZASI VA ORM
--------------------------------------------------------------------
* Neon (Serverless PostgreSQL):
  - Bepul Limiti: 0.5 GB doimiy bepul xotira (Free Tier) - $0.
  - Ishlatiladigan joyi: Foydalanuvchilar profili, test savollari,
    javoblar tarixi, AI diagnostika xulosalari, coin tranzaksiyalari.

* Prisma ORM (@prisma/client, prisma):
  - Ishlatiladigan joyi: PostgreSQL sxemasini boshqarish, xavfsiz type-safe
    so'rovlar va migratsiyalarni yuritish.


4. MEDIA VA AUDIO FAYLLAR SAQLASH
--------------------------------------------------------------------
* Cloudflare R2 Storage (S3-compatible):
  - Bepul Limiti: 10 GB gacha bepul xotira, $0 Egress (cheksiz bepul yuklab olish).
  - Ishlatiladigan joyi: Listening bo'limi MP3 audiolari, foydalanuvchining
    Speaking audio yozuvlarini saqlash.
  - Kutubxona: @aws-sdk/client-s3 (R2 bilan to'g'ridan-to'g'ri bog'lanish).


5. SUN'IY INTELLEKT (AI) VA OVOZLI TEXNOLOGIYALAR
--------------------------------------------------------------------
* Google Gemini API (Google Generative AI SDK - @google/genai):
  - Model: gemini-1.5-flash
  - Bepul Limiti: 15 RPM / 1,500 RPD gacha mutlaqo bepul ($0).
  - Ishlatiladigan joyi: Writing insholarini CEFR 4 mezoni bo'yicha tekshirish,
    Reading va Listening xatolariga tushuntirish berish, Speaking nutqini
    lingvistik tahlil qilish (Strict JSON formatda).

* Groq API (Groq SDK - groq-sdk):
  - Model: whisper-large-v3
  - Bepul Limiti: Bepul Developer kvotasi ($0).
  - Ishlatiladigan joyi: Speaking bo'limida o'quvchi audio faylini
    soniyaning ulushlarida toza turkcha matnga va vaqt metrikalariga aylantirish.


6. QO'SHIMCHA YORDAMCHI KUTUBXONALAR (UTILITIES)
--------------------------------------------------------------------
* Zod (zod):
  - Ishlatiladigan joyi: Formlarni tekshirish va AI dan qaytgan JSON
    javoblarni xavfsiz validate qilish.

* Framer Motion (framer-motion):
  - Ishlatiladigan joyi: Modal ochilishi, Streak olovi va test natijalari
    chiqqandagi silliq mikro-animatsiyalar.

* Canvas Confetti (canvas-confetti):
  - Ishlatiladigan joyi: Test muvaffaqiyatli yakunlanganda yoki yangi CEFR
    darajasiga erishilgandagi tabrik effekti.


7. HOSTING VA DEPLOYMENT
--------------------------------------------------------------------
* Vercel (Hobby Tier):
  - Bepul Limiti: $0 cheksiz bepul avtomatik CI/CD integratsiyasi.
  - Ishlatiladigan joyi: Next.js frontend va serverless API funksiyalarini
    global CDN orqali tarqatish.
====================================================================

====================================================================
     EVALORA PLATFORMASI: XAVFSIZLIK VA HIMOYASI ARXITEKTURASI
====================================================================

1. TASHQI QALQON (NETWORK & CLOUDFLARE WAF)
--------------------------------------------------------------------
* DNS & IP Masking:
  - Sayt serveri to'liq Cloudflare proksisi ortiga yashiriladi.
  - Port skanerlash (Nmap) va to'g'ridan-to'g'ri serverga qaratilgan
    hujumlar to'xtatiladi.
* DDoS & Anti-Bot Shield:
  - L3/L4/L7 qatlamlaridagi DDoS hujumlari avtomatik filtrlanadi.
  - Soxta skreper botlar va saytni klonlovchi dasturlar bloklanadi.


2. API VA SERVER CHEKLOVLARI (RATE LIMITING & ANTI-SPAM)
--------------------------------------------------------------------
* So'rovlar Cheklovi (Rate Limiter):
  - Har bir IP va User ID bo'yicha cheklov:
    * Oddiy sahifalar: 60 so'rov / daqiqa.
    * AI diagnostika va Audio yuklash: 5 so'rov / daqiqa.
  - Qoidani buzgan IP avtomatik ravishda vaqtincha bloklanadi (HTTP 429).
* Serverless Izolyatsiya:
  - Bitta foydalanuvchining og'ir so'rovi butun sayt tezligiga ta'sir
    qilmaydi (Vercel Serverless Architecture).


3. MOLIYAVIY VA IQTISODIY XAVFSIZLIK (COIN & ANTI-CHEAT)
--------------------------------------------------------------------
* Nol-Ishonch Qoidasi (Zero-Trust Frontend):
  - Balans, tangalar (Coin) va to'lov statusi hech qachon brauzer
    tomonidan o'zgartirilishi mumkin emas.
  - Barcha hisob-kitoblar faqat serverda PostgreSQL tranzaksiyalari
    (Prisma Transactions) orqali yopiq bajariladi.
* Test Javoblari Maxfiyligi:
  - To'g'ri javoblar kaliti brauzerga yuborilmaydi (Inspect / Network
    orqali javoblarni ko'rib bo'lmaydi).


4. MA'LUMOTLAR VA KOD XAVFSIZLIGI (APPLICATION SECURITY)
--------------------------------------------------------------------
* SQL Injection & XSS:
  - Prisma ORM orqali so'rovlar to'liq himoyalanadi.
  - Zod sxemalari orqali kiruvchi matnlar xavfli skriptlardan tozalanadi.
* Maxfiy Kalitlar (Environment Variables):
  - Gemini API, Groq, Clerk Secret va Database URL faqat server
    tomonida (Node.js runtime) saqlanadi, brauzerga hech qachon chiqmaydi.
====================================================================

====================================================================
  EVALORA PLATFORMASI: FOYDALANUVCHI TEZKOR CHAT VA BILDIRISHNOMA UX
====================================================================

1. SUZUVCHI YORDAM TUGMASI (FLOATING SUPPORT FAB)
--------------------------------------------------------------------
* Joylashuvi: Ekranning pastki o'ng burchagida (Fixed: bottom-6 right-6).
* Standart Ko'rinishi:
  - Dumaloq tugma (rounded-full, w-14 h-14, shadow-lg).
  - Ichida chat piktogrammasi (MessageSquare).
* Yangi Xabar Xabardorligi:
  - Admindan yangi javob kelganda tugma ustida yorqin qizil nuqta
    yoki sonli nishon (Badge: 1) miltillaydi.


2. TEZKOR MULOQOT VA FIKR-MULOHAZA MODALI (SUPPORT POPUP)
--------------------------------------------------------------------
* Modal Strukturasi (Bosilganda silliq ochiladi):
  1) Sarlavha: "Fikr bildirish / Yordam" va yopish [X] tugmasi.
  2) Matn Maydoni: "Nima yaxshi, nima yomon — istaganingizni yozing..."
     placeholder bilan qulay textarea.
  3) Fayl / Rasm Yuklash Tugmasi: [📎 Attach photo/video] (Chek yoki xato skrinshoti).
  4) Yuborish Tugmasi: [Yuborish ->] (Send feedback).
  5) Telegram Muqobili:
     - Modal ostida havola: "Yoki administratorga Telegram orqali
       to'g'ridan-to'g'ri yozing" (Deep-link ID bilan).


3. BILDIRISHNOMALAR VA JAVOB QAYTARISH MANTIQI (NOTIFICATIONS)
--------------------------------------------------------------------
* Toast Alert:
  - Admin javob yozganda foydalanuvchi qaysi sahifada bo'lishidan
    qat'i nazar ekranda silliq bildirishnoma chiqadi:
    "🔔 Admin javobi: So'rovingiz qabul qilindi va hal etildi."
* Ma'lumotlar Bazasi Modeli (Notification / SupportMessage):
  - Har bir xabar `userId`, `message`, `isRead`, `adminReply`
    maydonlari bilan bog'lanadi.
====================================================================

====================================================================
<!-- // EVALORA PLATFORMASI: TO'LIQ PRISMA SCHEMA (PostgreSQL / Neon) -->
====================================================================

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 1. ENUMLAR (QAT'IY TIPLASH)
enum Role {
  USER
  ADMIN
}

enum SkillType {
  READING
  LISTENING
  WRITING
  SPEAKING
}

enum CefrLevel {
  A1
  A2
  B1
  B2
  C1
  C2
}

enum PlanType {
  FREE
  START
  PRO
  PRO_PLUS
  ULTRA
}

enum PaymentStatus {
  PENDING
  APPROVED
  REJECTED
}

enum ExamMode {
  STANDARD
  REAL_EXAM
}

// 2. FOYDALANUVCHI VA PROFIL
model User {
  id               String            @id @default(cuid())
  clerkId          String            @unique
  customId         String            @unique // EV-XXXXXX (Unikal 6 xonali)
  email            String            @unique
  fullName         String?
  avatarUrl        String?
  role             Role              @default(USER)
  coins            Int               @default(0) // Ro'yxatdan o'tganda 0 coin (faollik orqali yig'iladi)
  streakCount      Int               @default(0)
  lastActiveDate   DateTime?
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt

  profile          Profile?
  subscription     Subscription?
  submissions      Submission[]
  coinTransactions CoinTransaction[]
  paymentRequests  PaymentRequest[]

  @@index([customId])
  @@index([clerkId])
}

model Profile {
  id               String            @id @default(cuid())
  userId           String            @unique
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  targetLevel      CefrLevel         @default(B2)
  currentLevel     CefrLevel         @default(A1)
  readingScore     Float             @default(0)
  listeningScore   Float             @default(0)
  writingScore     Float             @default(0)
  speakingScore    Float             @default(0)
  overallScore     Float             @default(0)
}

// 3. OBUNA VA TELEGRAM TO'LOV SO'ROVLARI (ADMIN TIZIMI UCHUN)
model Subscription {
  id               String            @id @default(cuid())
  userId           String            @unique
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  plan             PlanType          @default(FREE)
  freeAiCredits    Int               @default(1) // Oylik qolgan AI limitlari
  startDate        DateTime          @default(now())
  endDate          DateTime?
  isActive         Boolean           @default(true)
}

model PaymentRequest {
  id               String            @id @default(cuid())
  userId           String
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  plan             PlanType?
  coinAmount       Int?
  priceUzbekSum    Int
  status           PaymentStatus     @default(PENDING)
  adminNote        String?
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt

  @@index([userId])
  @@index([status])
}

// 4. TESTLAR VA SAVOLLAR BAZASI
model Test {
  id               String            @id @default(cuid())
  title            String
  description      String?
  skill            SkillType
  level            CefrLevel
  timeLimitMinutes Int               @default(30)
  audioUrl         String?           // Listening uchun Cloudflare R2 MP3
  readingPassage   String?           @db.Text // Reading uchun matn
  writingPrompt    String?           @db.Text // Writing mavzusi
  speakingPrompt   String?           @db.Text // Speaking savoli
  isPublished      Boolean           @default(true)
  createdAt        DateTime          @default(now())

  questions        Question[]
  submissions      Submission[]
}

model Question {
  id               String            @id @default(cuid())
  testId           String
  test             Test              @relation(fields: [testId], references: [id], onDelete: Cascade)
  orderIndex       Int               @default(1)
  questionText     String            @db.Text
  options          Json              // ["Variant A", "Variant B", "Variant C", "Variant D"]
  correctOption    String            // "A" / "B" / "C" / "D" (Frontendga chiqmaydi)
  explanation      String?           @db.Text // To'g'ri javob konteksti
  difficultyLogit  Float             @default(0.0) // Rasch modeli parametri (beta_i)

  answers          Answer[]
}

// 5. TOPSHIRILGAN JAVOBLAR VA NATIJALAR
model Submission {
  id               String            @id @default(cuid())
  userId           String
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  testId           String
  test             Test              @relation(fields: [testId], references: [id], onDelete: Cascade)
  mode             ExamMode          @default(STANDARD)
  rawScore         Float             @default(0) // Rasch / Mezon balli
  scaledScore      Float             @default(0) // 0 - 100 ball
  achievedLevel    CefrLevel         @default(A1)
  timeSpentSeconds Int               @default(0)
  completedAt      DateTime          @default(now())

  essayText        String?           @db.Text // Writing insho matni
  audioRecordUrl   String?           // Speaking audio yozuvi (R2)

  answers          Answer[]
  diagnosticReport AiDiagnosticReport?

  @@index([userId])
  @@index([testId])
}

model Answer {
  id               String            @id @default(cuid())
  submissionId     String
  submission       Submission        @relation(fields: [submissionId], references: [id], onDelete: Cascade)
  questionId       String
  question         Question          @relation(fields: [questionId], references: [id], onDelete: Cascade)
  selectedOption   String            // O'quvchi tanlagan variant
  isCorrect        Boolean           @default(false)
}

// 6. AI DIAGNOSTIKA VA TAHLIL HISOBOTI
model AiDiagnosticReport {
  id               String            @id @default(cuid())
  submissionId     String            @unique
  submission       Submission        @relation(fields: [submissionId], references: [id], onDelete: Cascade)
  summary          String            @db.Text
  scoresBreakdown  Json              // Mezonlar bo'yicha ballar {task: 22, coherence: 20, ...}
  corrections      Json              // [{original: "...", corrected: "...", reason: "..."}]
  vocabularyTips   Json              // [{used: "...", alternatives: [...]}]
  grammarAnalysis  Json?             // Grammatik qoidalar tahlili
  acousticMetrics  Json?             // Speaking: {wpm: 110, pauses: 3, fluency: 85}
  createdAt        DateTime          @default(now())
}

// 7. COIN TRANZAKSIYALARI TARIXI
model CoinTransaction {
  id               String            @id @default(cuid())
  userId           String
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  amount           Int               // +50 (bonus/xarid) yoki -15 (test/AI)
  description      String            // "B2 Mock Testi yechildi", "Bonus tanga"
  createdAt        DateTime          @default(now())

  @@index([userId])
} 

=======================================================================

====================================================================
  AI AGENT UCHUN DASTURLASH VA ARXITEKTURA YO'RIQNOMASI (INSTRUCTIONS)
====================================================================

1. LOYIHA STRUKTURASI VA XAVFSIZLIK PRINTSIPLARI
--------------------------------------------------------------------
* Next.js App Router (TypeScript) bilan to'liq Server Actions va
  API Route Handlerlarni yarating.
* Barcha moliyaviy amallar (coin kamayishi/ko'payishi, obuna tekshiruvi)
  faqat serverda `prisma.$transaction()` orqali bajarilishi shart.
* Savollarning `correctOption` (to'g'ri javob) qiymati test paytida
  hech qachon brauzerga yuborilmasligi kerak. Test yakunlanganda
  backendning o'zi solishtirib ball hisoblaydi.

2. AI SERVISLAR INTEGRATSIYASI
--------------------------------------------------------------------
* Writing Tahlili:
  - Google Gemini API (`gemini-1.5-flash`) ga insho, vazifa sharti va
    daraja yuboriladi.
  - Chiqish qat'iy JSON formatida olinadi (Zod bilan tekshiriladi).
* Speaking Tahlili:
  - 1-bosqich: Groq API (`whisper-large-v3`) ga audio uzatilib,
    transkript va vaqt metrikalari olinadi.
  - 2-bosqich: Gemini API ga transkript va metrikalar berilib,
    TÖMER CEFR rubrikasi bo'yicha ball chiqariladi.

3. UI VA DIZAYN STANDARTLARI
--------------------------------------------------------------------
* Barcha oraliqlar (spacing) 8pt tizimi asosida (p-4, p-6, gap-3, gap-4).
* Birlamchi rang: Blue-600 (#2563EB), AI Urg'usi: Violet-600 (#7C3AED),
  Coin/Streak: Amber-500 (#F59E0B), Fon: Slate-50 (#F8FAFC).
* Tugmalar va inputlar: rounded-lg / rounded-xl, Kartalar: rounded-2xl.
====================================================================

====================================================================
  EVALORA: OFFLINE TIMEOUT, SKELETON LOADERS VA MULTILINGUAL (i18n)
====================================================================

1. OFFLINE XAVFSIZLIK VA 3 DAQIQALIK TIMEOUT MANTIQI
--------------------------------------------------------------------
* Server-Side Qat'iy Vaqt:
  - Test boshlanganda `startedAt` va `expiresAt` vaqtlari serverda belgilanadi.
  - O'quvchi offline bo'lsa yoki brauzerdan chiqib ketsa ham, serverdagi
    asosiy imtihon taymeri to'xtovsiz orqada ketaveradi.

* 3 Daqiqalik Uzilish Oynasi (Grace Period & Overlay):
  - Brauzer `window.addEventListener('offline')` hodisasini ushlaganda,
    ekranda qora xiralashgan fon (backdrop-blur-md) bilan ogohlantirish chiqadi:
    "⚠️ Internet uzildi! 03:00 daqiqa ichida qayta ulaning, aks holda
    test avtomatik yakunlanadi."
  - 3 daqiqa ichida internet tiklansa, modal avtomatik yopilib, test davom etadi.

* F5 va Tasodifiy Chiqib Ketishdan Himoya:
  - Brauzerning `beforeunload` hodisasi ulanadi (F5 yoki X bosilganda tasdiqlash so'raladi).
  - Har 5 soniyada barcha belgilangan javoblar va insho matni `localStorage`
    keshiga yozib boriladi. Sahifa yangilanganda ma'lumotlar darhol tiklanadi.


2. SKELETON LOADERS (YUKLANISH SKELETARI)
--------------------------------------------------------------------
* Standart:
  - Barcha sahifalarda oddiy aylanuvchi "Spinner" o'rniga Shadcn Skeleton
    (yengil kulrang pulsatsiyalanuvchi bloklar: `animate-pulse bg-slate-200`)
    ishlatiladi.
* Qo'llaniladigan Asosiy Oynalar:
  - Dashboard statistik kartalari va jadvallari yuklanayotganda.
  - Test savollari va Reading matnlari ekranga chizilayotganda.
  - AI Diagnostika hisoboti shakllantirilayotganda.


3. 4 TILLI TIZIM VA KONTEKSTUAL TARJIMA (next-intl)
--------------------------------------------------------------------
* Arxitektura:
  - Kutubxona: `next-intl` (App Router bilan server/client yengil integratsiya).
  - Tillar: O'zbekcha (`uz`), Turkcha (`tr`), Ruscha (`ru`), Inglizcha (`en`).
  - Alohida JSON lug'atlar: `/messages/uz.json`, `/messages/tr.json`, va h.k.
  - Sayt tezligiga ta'siri: 0% (Faqat tanlangan til yuklanadi).

* Kontekstual Terminologiya Qoidasi:
  - UZ: "Imtihonni topshirish", "AI diagnostikasi", "Kundalik faollik (Streak)", "Tangalar"
  - TR: "Sınavı Tamamla", "Yapay Zeka Analizi", "Günlük Seri", "Puanlar/Coin"
  - RU: "Завершить тест", "ИИ-диагностика", "Ударный режим", "Монеты"
  - EN: "Submit Exam", "AI Diagnostic Report", "Daily Streak", "Coins"

* Muhim Qat'iy Qoida:
  - Interfeys tugmalari va matnlari 4 tilda bo'ladi, ammo **Test savollari,
    Reading matnlari va Listening audiolari doimo sof TURK tilida** qoladi.
====================================================================  

====================================================================
  EVALORA: STATIK MATNLAR, FOOTER STRUKTURASI VA HUQUQIY SAHIFALAR
====================================================================

1. STATIK VA DINAMIK MATNLARNING ARXITEKTURASI
--------------------------------------------------------------------
* Statik UI Matnlari (/messages/ JSON fayllarida):
  - Tugma nomlari, sarlavhalar, xatolik xabarlari, modal matnlari va
    navigatsiya yozuvlari `messages/uz.json`, `messages/tr.json`,
    `messages/ru.json`, `messages/en.json` fayllarida saqlanadi.
  - Maqsad: Ma'lumotlar bazasiga ortiqcha so'rov yubormaslik va
    sahifalar tezligini (Performance) maksimal darajada ushlab turish.

* Dinamik Matnlar (PostgreSQL / Neon Bazada):
  - Test savollari, Reading matnlari, Listening audiolari va
    e'lonlar bazada saqlanadi va Admin Panel orqali boshqariladi.


2. LOGIN VA ONBOARDING STATIK MATN NAMUNALARI (UZ / TR)
--------------------------------------------------------------------
* Login Sahifasi:
  - Sarlavha: "Evalora'ga xush kelibsiz" ("Evalora'ya Hoş Geldiniz")
  - Tavsif: "Turk tili CEFR imtihoniga sun'iy intellekt yordamida professional tayyorlaning."
  - Ijtimoiy ishonch: "O'z darajangizni xolis baholang va imtihonga ishonch bilan kiring."
  - Tugmalar: [Google orqali kirish], [Email orqali davom etish]

* Onboarding 3 Bosqichli Matnlari:
  - 1-bosqich: "Keling, tanishib olamiz!" (Ism kiritish, Maqsaddagi CEFR darajasini tanlash).
  - 2-bosqich: "Sizning imkoniyatlaringiz: Free tarif faollashtirildi (1 ta to'liq Mock + 2 ta AI tahlili)."
  - 3-bosqich: "Barchasi tayyor! Birinchi sinov testini boshlang."


3. FOOTER STRUKTURASI (3 USTUNLI ZAMONAVIY MAKET)
--------------------------------------------------------------------
* 1-Ustun: Platforma (Platform)
  - [Bosh sahifa / Dashboard]
  - [Mashqlar / Practice]
  - [Natijalarim / Results]
  - [Reyting / Leaderboard]

* 2-Ustun: Resurslar (Resources)
  - [CEFR / TÖMER Qo'llanmasi]
  - [Baholash mezonlari (Scoring Guide)]
  - [Ko'p beriladigan savollar (FAQ)]

* 3-Ustun: Loyiha va Huquqiy (Company & Legal)
  - [Biz haqimizda (About Us)]
  - [Bog'lanish (Contact / Telegram)]
  - [Foydalanish shartlari (Terms of Service)]
  - [Maxfiylik siyosati (Privacy Policy)]

* Pastki Mualliflik Bloki (Bottom Copyright & Credits):
  - "© 2026 Evalora. Barcha huquqlar himoyalangan."
  - "Loyiha asoschisi va dasturchi: [Ism Familiya]"


4. BIZ HAQIMIZDA VA HUQUQIY SAHIFALAR QISQACHA MAZMUNI
--------------------------------------------------------------------
* Biz haqimizda (/about):
  - "Evalora — turk tili xalqaro va milliy CEFR (TÖMER) sertifikatlariga
    tayyorlanuvchilar uchun yaratilgan innovatsion AI platforma. Biz Rasch
    o'lchov modeli va zamonaviy sun'iy intellekt orqali o'quvchilar bilimini
    xolis baholaymiz va shaxsiy o'sish yo'lini ko'rsatamiz."

* Maxfiylik Siyosati (/privacy):
  - Foydalanuvchilarning ovoz yozuvlari (Speaking) va insholari (Writing)
    faqat AI diagnostikasi va tahlil uchun ishlatiladi, uchinchi
    shaxslarga berilmaydi.
  - Barcha shaxsiy ma'lumotlar xavfsiz shifrlangan holda saqlanadi.

* Foydalanish Shartlari (/terms):
  - Platformadagi test materiallaridan faqat shaxsiy tayyorgarlik uchun
    foydalanish mumkin (nusxa ko'chirish va tijoriy tarqatish taqiqlanadi).
  - Obuna va tangalar (Coin) sarflanish qoidalari va xizmat ko'rsatish tartibi.
====================================================================

====================================================================
  EVALORA: DINAMIK TEST STRUKTURASI VA FRONTEND RENDERING MANTIQI
====================================================================

1. HAR BIR TESTNING SHAXSIY XUSUSIYATLARI (DYNAMIC METADATA)
--------------------------------------------------------------------
* Qat'iy Qolip Yo'q:
  - Har bir test o'zining `timeLimitMinutes`, `level`, `skill` va
    `questions.length` (savollar soni) qiymatiga ega.
* Pre-Test Modalida Ko'rsatish:
  - Ma'lumotlar statik emas, bazadan kelgan aniq test obyekti asosida
    dinamik render qilinadi:
    `{test.level} · {test.questions.length} ta savol · {test.timeLimitMinutes} daqiqa`


2. TEST SAHIFASINING MOSLASHUVCHANLIGI (ADAPTIVE TEST UI)
--------------------------------------------------------------------
* Taymer Dinamikasi:
  - Taymer doimiy bir xil emas, har bir testning `timeLimitMinutes`
    qiymatiga qarab (masalan: 35:00 yoki 30:00) boshlanadi.

* Savollar Turi Bo'yicha Moslashuv (Question Type Switch):
  - Agar savolda `options` bo'lsa -> 4 talik variantlar (A, B, C, D) chiqadi.
  - Agar savolda variantlar bo'lmasa -> Matn kiritish maydoni (Text Input / Essay) chiqadi.
  - Pastki savollar navigatorida aynan o'sha testdagi savollar soniga
    mos tugmalar soni ([1], [2] ... [N]) avtomatik shakllanadi.
====================================================================