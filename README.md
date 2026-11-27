# Soso Octo Carnival

[![CI](https://github.com/alshnif/soso-octo-carnival/actions/workflows/ci.yml/badge.svg)](https://github.com/alshnif/soso-octo-carnival/actions/workflows/ci.yml)

مشروع بداية عام لصاحب الحساب [alshnif](https://github.com/alshnif)، مبني باستخدام React وVite، بواجهة عربية قابلة للتطوير والنشر على Vercel.

## التشغيل محليًا

استخدم **Node.js 22**؛ الإصدار المحدد في `.nvmrc` هو `22.23.4`.

```bash
nvm use
npm ci
npm run dev
```

الأمر `nvm use` اختياري إذا كنت تدير Node.js بطريقة أخرى. افتح عنوان خادم التطوير الذي يظهر في الطرفية.

## فحص المشروع وبناؤه

```bash
npm run check
npm run build
npm run preview
```

يجمع `check` فحص التنسيق وESLint والاختبارات عبر `vitest run` ثم البناء، بهذا الترتيب:

```bash
npm run format:check && npm run lint && npm test && npm run build
```

للتطوير: `npm run test:watch` لمراقبة الاختبارات، و`npm run format` لتطبيق تنسيق Prettier الافتراضي. تُحفظ ملفات البناء في `dist/`؛ الأمر `preview` لمعاينة البناء محليًا وليس خادم إنتاج.

سير العمل [`ci.yml`](.github/workflows/ci.yml) يستخدم `npm ci` وفحوص الجودة. راجع [GitHub Actions](https://github.com/alshnif/soso-octo-carnival/actions) لمعرفة النتائج الفعلية؛ وجود الشارة لا يعني نجاح التشغيل أو تفعيل قواعد حماية الفروع.

## العربية واتجاه العرض

حافظ على المحتوى العربي واتجاه **RTL** عند تطوير الواجهة، واضبط `lang="ar"` و`dir="rtl"` على عنصر الصفحة المناسب. اختبر عرض النصوص المختلطة والأرقام والروابط، وفضّل خصائص CSS المنطقية مثل `margin-inline` و`padding-inline`.

## النشر على Vercel

استورد المستودع `alshnif/soso-octo-carnival` في Vercel، ثم راجع إعدادات المشروع:

| الإعداد          | القيمة          |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Node.js Version  | 22.x            |
| Install Command  | `npm ci`        |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |

تحقّق من إعدادات الفرع وعمليات النشر في Vercel؛ هذا التوثيق لا يفعّل الربط أو النشر التلقائي بنفسه.

## الأمان والمساهمة

لا تضع الأسرار أو ملفات البيئة الخاصة في Git أو Issues أو طلبات الدمج. استخدم **GitHub Environment Secrets** للمهام التي تحتاجها، أو **Vercel environment variables** للنشر. كل قيمة يبدأ اسمها بـ `VITE_` تُضمّن في حزمة المتصفح وتُعد عامة؛ لا تصلح لكلمات المرور أو مفاتيح الخدمات السرية. احتفظ بالأسرار في بيئة خادم موثوقة، لا في تطبيق الواجهة.

- [دليل المساهمة](CONTRIBUTING.md)
- [سياسة الأمان والإبلاغ عن الثغرات](SECURITY.md)

لم يُحدَّد ترخيص لهذا المشروع بعد؛ كونه مستودعًا عامًا لا يمنح تلقائيًا ترخيصًا لإعادة الاستخدام.
