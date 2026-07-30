# supreme-octo-carnival

هذا الريبو الآن يحتوي سكافولد بسيط لتطبيق React مبني باستخدام Vite، ومخصص للنشر على Vercel.

التشغيل محليًا

1. ثبت التبعيات:

```bash
npm install
```

2. شغل بيئة التطوير:

```bash
npm run dev
```

3. بناء للنتاج (production):

```bash
npm run build
```

نشر على Vercel

1. اذهب إلى https://vercel.com وادخل بحسابك.
2. اضغط "Import Project" واختر GitHub ثم اختر المستودع `alshnif/soso-octo-carnival`.
3. عند الإعدادات اترك "Build Command" كـ `npm run build` و"Output Directory" كـ `dist`، ثم اضغط "Deploy".

ملاحظات

- Vercel سيقوم بالبناء تلقائيًا عند كل Push إلى الفرع الرئيسي (main) ما لم تغير الإعدادات.
- إذا أردت إضافة API (Express) أو إعداد Docker أو إضافة Actions لنشر أو بناء CI، أخبرني وسأضيفها.
