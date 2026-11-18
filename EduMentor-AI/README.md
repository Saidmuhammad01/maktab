# EduMentor AI — boshlang‘ich prototip

## Ishga tushirish
1. ZIP arxivni oching.
2. `EduMentor-AI` papkasini VS Code'da oching.
3. `index.html` faylini Live Server orqali ishga tushiring.
4. `Boshlash` tugmasini bosing, ism va rolni tanlang.
5. Dashboard'da shaxsiy salomingizni ko‘rasiz.

## Hozir ishlaydigan qismlar
- Responsive landing page (telefon, planshet, laptop, PC).
- Mobil navigatsiya.
- Ism va rol bilan onboarding.
- Demo dashboard (profil, rolga mos matn, "Chiqish" tugmasi, platforma holati paneli).
- Foydalanuvchi ma’lumoti brauzerning localStorage qismida saqlanadi.

## Muhim
Bu hozircha frontend prototip. AI funksiyalari, haqiqiy autentifikatsiya, backend va ma’lumotlar bazasi hali ulanmagan. Keyingi bosqichda ularni alohida ishlab chiqish kerak.

## Papkalar
- `css/` — dizayn.
- `js/` — frontend logikasi.
- `backend/` — keyingi bosqich uchun Python backend papkasi.

## Fayl tuzilmasi (1-bosqichdan keyin)
- `css/style.css` — asosiy dizayn (o'zgarmagan).
- `css/enhance.css` — premium qatlam: tokenlar, qulaylik (a11y), planshet/telefon breakpoint'lari, dashboard holat paneli.
- `js/ui.js` — umumiy: sticky header, paydo bo'lish animatsiyasi, toast xabar.
- `js/main.js` — landing menyusi. `js/onboarding.js` — profil formasi. `js/dashboard.js` — dashboard.
- `favicon.svg` — brend belgisi.

## Hali ulanmagan (ishlaydi deb ko'rsatilmaydi)
AI dars konstruktori, Aqlli baholash, AI-repetitor, Interaktiv o'yinlar, backend, ma'lumotlar bazasi, haqiqiy autentifikatsiya.
Dashboard'dagi kartalar "Tez orada" deb belgilangan; "Chiqish" faqat shu qurilmadagi profilni o'chiradi.
