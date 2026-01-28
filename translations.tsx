import React from 'react';
import { PermissionTag } from './components/UIComponents';

export const content = {
  ar: {
    meta: {
      title: "الحديقة المرعبة",
      subtitle: "سياسة الخصوصية والاستخدام",
      lastUpdated: "📅 تاريخ آخر تحديث: 26 يناير 2026",
      langBtn: "English",
    },
    alerts: {
      warningTitle: "تنويه هام",
      warningText: "في حال عدم موافقتك على أي بند من بنود هذه السياسة، نرجو منك التوقف فوراً عن استخدام الخدمة وحذف التطبيق من جهازك. استمرارك في الاستخدام يعني موافقتك الكاملة.",
      scopeTitle: "نطاق السياسة والمسؤولية",
      scopeIntro: "تُعد سياسة الخصوصية والاستخدام هذه ('السياسة') الوثيقة الأساسية التي تُحدد بوضوح ممارسات جمع البيانات، استخدامها، تخزينها، وحمايتها، وهي تنطبق بشكل شامل وكامل على تطبيقنا 'الحديقة المرعبة'.",
      aiRights: "حقوق الذكاء الاصطناعي: جميع المحتويات المعروضة هي محتوى حصري تم تصميمه بواسطة تقنيات AI الخاصة بنا.",
      controller: "الجهة المسؤولة: نحن، موسى محمد موسي، نُعد 'المراقب الرئيسي على البيانات'.",
    },
    sections: {
      s1: {
        title: "الجمهور المستهدف وحماية الأطفال",
        content: (
          <p className="text-slate-700 leading-loose text-base md:text-lg text-justify">
            يؤكد تطبيق <span className="text-primary font-bold">الحديقة المرعبة</span>، أنه <span className="font-bold underline decoration-wavy decoration-red-400">لم يتم تصميمه أو توجيهه مطلقاً للاستخدام من قبل الأطفال دون سن 13 عاماً</span>. طبيعة المحتوى المتوفرة (رعب كوميدي وخيال) لا تتناسب مع الأطفال. نطبق بصرامة أعلى المعايير الدولية والامتثال التام لـ <strong>قانون حماية خصوصية الأطفال على الإنترنت (COPPA)</strong>.
          </p>
        )
      },
      s2: {
        title: "الغرض من التطبيق",
        content: (
          <p className="text-slate-700 text-base md:text-lg">
            تم تطوير التطبيق ليكون منصة ترفيه للبالغين فقط، لعرض فيديوهات رعب خيالية من "الحديقة المرعبة". يتضمن التطبيق ميزة عرض فيديوهات قصيرة متبوعة بانتقالات ذكية.
          </p>
        )
      },
      s3: {
        title: "عدم الكشف عن الهوية",
        intro: "نحن نحرص على خصوصيتك بشكل تام:",
        items: [
          { title: "المعرف المجهول (Anonymous ID)", desc: "نستخدم خدمة Firebase التي تقوم بإنشاء 'معرف مستخدم مجهول' تقنياً. لا يرتبط باسمك أو رقم هاتفك." },
          { title: "سرية المستخدم", desc: "لا يتمكن المطور من معرفة هويتك الحقيقية أو من أنت شخصياً." },
          { title: "حالة الاستثناء", desc: "الحالة الوحيدة التي يتم فيها التعرف على المستخدم هي عندما تقوم أنت بالتواصل معنا طواعية." },
          { title: "الإفصاح الحكومي", desc: "لا نسمح بكشف عن البيانات الا الجهات الرقابيه والحكوميه." }
        ]
      },
      s4: {
        title: "البيانات التي نجمعها",
        partA: {
          title: "أ. البيانات غير الشخصية (التتبع)",
          items: [
            "معلومات الجهاز: عنوان IP، نوع الجهاز، نظام التشغيل.",
            "Google AdMob: نستخدم AdMob، ويتم إرسال معرف الإعلانات (Advertising ID).",
            "بيانات الموقع: موقع عام (مدينة) تقريبي.",
            "بيانات الاستخدام: إحصائيات تحسين الأداء."
          ]
        },
        partB: {
          title: "ب. البيانات الشخصية",
          text: "نحن لا نجمع أية بيانات شخصية أثناء الاستخدام الروتيني، إلا البريد الإلكتروني إذا تواصلت معنا طوعاً للدعم."
        }
      },
      s5: {
        title: "إفصاح البيانات",
        text: "نشارك البيانات التقنية (غير الشخصية) مع الخدمات التالية لضمان عمل التطبيق:",
        tags: [
          { label: "Google AdMob", sub: "(إعلانات)" },
          { label: "OneSignal", sub: "(إشعارات)" },
          { label: "Firebase Crashlytics", sub: "" }
        ]
      },
      s6: {
        title: "صلاحيات التطبيق (Permissions)",
        intro: "بناءً على الملف التقني للتطبيق، نطلب الصلاحيات التالية:",
        perms: [
          { code: "INTERNET", desc: "للاتصال بالسيرفر" },
          { code: "POST_NOTIFICATIONS", desc: "لضمان وصول إشعارات الرعب" },
          { code: "WAKE_LOCK", desc: "منع انطفاء الشاشة" },
          { code: "VIBRATE", desc: "للتفاعل الحسي" },
          { code: "AD_ID", desc: "معرف الإعلانات" },
          { code: "FOREGROUND_SERVICE", desc: "استقرار التطبيق" }
        ]
      },
      s7: {
        title: "جودة الإعلانات",
        text: "نلتزم بصرامة بمكافحة الزيارات الاحتيالية والنقرات غير الصالحة وفق سياسات AdMob."
      },
      s8: {
        title: "الملكية الفكرية",
        subtitle: "حقوق حصرية",
        items: [
          "جميع الفيديوهات، التصاميم، والشخصيات داخل 'الحديقة المرعبة' هي نتاج تصميمنا الخاص باستخدام الذكاء الاصطناعي. نمتلك كافة الحقوق القانونية لها.",
          "منع تصوير الشاشة: يستخدم التطبيق تقنية (Secure Flag) لمنع أخذ لقطات شاشة أو تسجيل الفيديو للحفاظ على حصرية المحتوى."
        ],
        warning: "⚠ تحذير: أي محاولة لنسخ المحتوى ستعرض الفاعل للمساءلة القانونية."
      },
      s9: {
        title: "الاحتفاظ بالبيانات",
        text: "نحتفظ بالبيانات التقنية لمدة 12 شهرًا. المطور موسى محمد غير مسؤول عن انقطاع الخدمة لأسباب قاهرة."
      },
      s10: {
        title: "حقوق المستخدمين",
        intro: "تلتزم بأنك بالغ (13+) عند استخدام التطبيق. القانون الحاكم هو قانون جمهورية مصر العربية.",
        deleteTitle: "طلب حذف البيانات",
        deleteText: "بما أننا نستخدم معرفات مجهولة، يمكنك طلب حذف أي بيانات مرتبطة بجهازك عن طريق إلغاء تثبيت التطبيق، أو التواصل معنا عبر البريد الإلكتروني أدناه في حال كان لديك طلب خاص."
      },
      s11: {
        title: "إقرار بالكشف الإرادي عن الهوية (Voluntary Disclosure)",
        content: (
          <div className="bg-green-50 border-s-4 border-green-500 p-4 rounded-lg text-green-800 text-sm md:text-base leading-relaxed text-justify">
             <p className="mb-3">
               يُحيط التطبيق المستخدم علماً بأن جميع عمليات الاستخدام تتم بشكل مجهول الهوية تماماً داخل بيئة التطبيق البرمجية عبر معرفات افتراضية. ومع ذلك، يُقر المستخدم ويوافق على أنه في حال اختياره التواصل مع المطور عبر أي من وسائل التواصل الخارجي المتاحة (مثل واتساب، فيسبوك، تيك توك، أو البريد الإلكتروني)، فإن هذه العملية تُعد كشفاً إرادياً وتلقائياً عن هويته الشخصية (والتي قد تشمل الاسم، رقم الهاتف، أو رابط الحساب الشخصي الخاص به).
             </p>
             <p>
               في هذه الحالة، يتم التعامل مع البيانات المستلمة فقط لغرض الرد على الاستفسارات أو تقديم الدعم الفني المطلوب، ولا يتم تخزينها أو ربطها بنشاطك داخل التطبيق. كما لا يتحمل المطور أي مسؤولية عن سياسات الخصوصية الخاصة بتلك المنصات الخارجية (طرف ثالث)، حيث تخضع بياناتك هناك لسياسات الخصوصية والشروط الخاصة بالشركات المشغلة لتلك المنصات.
             </p>
          </div>
        )
      }
    },
    bot: {
      title: "سياسة البوت الذكي (AI)",
      intro: "تطبيقنا مزود ببوت ذكي متطور مرتبط بـ API خاص لخدمتكم:",
      features: ["⚡ رد فوري ذكي", "🔍 بحث وانتقال تلقائي", "🎮 تجربة ترفيهية شاملة"]
    },
    footer: {
      title: "💬 التواصل ومتابعة الجديد",
      subtitle: "اضغط على الأيقونات أدناه للوصول إلى صفحاتنا الرسمية:",
      socials: { wa: "واتساب", fb: "فيسبوك", yt: "يوتيوب", tt: "تيك توك" },
      emailLabel: "البريد الإلكتروني الرسمي",
      copyright: "© 2026 - الحديقة المرعبة. جميع الحقوق محفوظة للمطور موسى محمد موسي."
    }
  },
  en: {
    meta: {
      title: "The Scary Garden",
      subtitle: "Privacy Policy & Terms of Use",
      lastUpdated: "📅 Last Updated: January 26, 2026",
      langBtn: "العربية",
    },
    alerts: {
      warningTitle: "Important Notice",
      warningText: "If you do not agree to any term of this policy, please immediately stop using the service and delete the application from your device. Your continued use constitutes your full agreement.",
      scopeTitle: "Policy Scope & Responsibility",
      scopeIntro: "This Privacy Policy & Terms of Use ('Policy') is the primary document clearly defining our data collection, usage, storage, and protection practices, applicable comprehensively to our application 'The Scary Garden'.",
      aiRights: "AI Rights: All content displayed is exclusive content designed by our AI technologies.",
      controller: "Data Controller: We, Mousa Mohammed Mousa, are the main 'Data Controller'.",
    },
    sections: {
      s1: {
        title: "Target Audience & Child Protection",
        content: (
          <p className="text-slate-700 leading-loose text-base md:text-lg text-justify">
            The <span className="text-primary font-bold">Scary Garden</span> application confirms that it is <span className="font-bold underline decoration-wavy decoration-red-400">NOT designed or directed for use by children under 13 years of age</span>. The nature of the content (comedy horror and fiction) is not suitable for children. We strictly apply the highest international standards and full compliance with <strong>COPPA (Children's Online Privacy Protection Act)</strong>.
          </p>
        )
      },
      s2: {
        title: "Purpose of the Application",
        content: (
          <p className="text-slate-700 text-base md:text-lg">
            The application was developed as an entertainment platform for adults only, displaying fictional horror videos from 'The Scary Garden'. The app includes a feature to show short videos followed by smart transitions.
          </p>
        )
      },
      s3: {
        title: "Anonymity",
        intro: "We fully prioritize your privacy:",
        items: [
          { title: "Anonymous ID", desc: "We use Firebase service which technically creates an 'Anonymous User ID'. It is not linked to your name or phone number." },
          { title: "User Confidentiality", desc: "The developer cannot know your real identity or who you are personally." },
          { title: "Exception Case", desc: "The only case where a user is identified is when you voluntarily contact us." },
          { title: "Government Disclosure", desc: "We do not allow data disclosure except to regulatory and government authorities." }
        ]
      },
      s4: {
        title: "Data We Collect",
        partA: {
          title: "A. Non-Personal Data (Tracking)",
          items: [
            "Device Info: IP address, device type, OS.",
            "Google AdMob: We use AdMob, which sends the Advertising ID.",
            "Location Data: Approximate general location (city).",
            "Usage Data: Performance improvement statistics."
          ]
        },
        partB: {
          title: "B. Personal Data",
          text: "We do not collect any personal data during routine use, except email if you voluntarily contact us for support."
        }
      },
      s5: {
        title: "Data Disclosure",
        text: "We share technical (non-personal) data with the following services to ensure app functionality:",
        tags: [
          { label: "Google AdMob", sub: "(Ads)" },
          { label: "OneSignal", sub: "(Notifications)" },
          { label: "Firebase Crashlytics", sub: "" }
        ]
      },
      s6: {
        title: "App Permissions",
        intro: "Based on the technical file of the application, we request the following permissions:",
        perms: [
          { code: "INTERNET", desc: "Connect to server" },
          { code: "POST_NOTIFICATIONS", desc: "Ensure horror notifications arrive" },
          { code: "WAKE_LOCK", desc: "Prevent screen sleeping" },
          { code: "VIBRATE", desc: "For sensory interaction" },
          { code: "AD_ID", desc: "Advertising ID" },
          { code: "FOREGROUND_SERVICE", desc: "App stability" }
        ]
      },
      s7: {
        title: "Ad Quality",
        text: "We strictly adhere to combating fraudulent traffic and invalid clicks according to AdMob policies."
      },
      s8: {
        title: "Intellectual Property",
        subtitle: "Exclusive Rights",
        items: [
          "All videos, designs, and characters within 'The Scary Garden' are the result of our own design using AI. We own all legal rights to them.",
          "Screen Capture Prevention: The app uses (Secure Flag) technology to prevent screenshots or video recording to maintain content exclusivity."
        ],
        warning: "⚠ Warning: Any attempt to copy content will subject the perpetrator to legal accountability."
      },
      s9: {
        title: "Data Retention",
        text: "We retain technical data for 12 months. Developer Mousa Mohammed is not responsible for service interruption due to force majeure."
      },
      s10: {
        title: "User Rights",
        intro: "You commit that you are an adult (13+) when using the app. The governing law is the law of the Arab Republic of Egypt.",
        deleteTitle: "Data Deletion Request",
        deleteText: "Since we use anonymous IDs, you can request deletion of any data linked to your device by uninstalling the app, or contacting us via email below if you have a special request."
      },
      s11: {
        title: "Voluntary Disclosure of Identity",
        content: (
          <div className="bg-green-50 border-s-4 border-green-500 p-4 rounded-lg text-green-800 text-sm md:text-base leading-relaxed text-justify">
             <p className="mb-3">
               The application informs the user that all usage operations are carried out completely anonymously within the application's software environment via virtual identifiers. However, the user acknowledges and agrees that if they choose to communicate with the developer via any of the available external communication means (such as WhatsApp, Facebook, TikTok, or email), this process constitutes a voluntary and automatic disclosure of their personal identity (which may include name, phone number, or their personal account link).
             </p>
             <p>
               In this case, the received data is handled solely for the purpose of responding to inquiries or providing the required technical support, and is not stored or linked to your activity within the application. Furthermore, the developer bears no responsibility for the privacy policies of those external platforms (third parties), where your data is subject to the privacy policies and terms of the companies operating those platforms.
             </p>
          </div>
        )
      }
    },
    bot: {
      title: "Smart Bot Policy (AI)",
      intro: "Our app is equipped with an advanced smart bot linked to a special API to serve you:",
      features: ["⚡ Instant Smart Reply", "🔍 Auto Search & Transition", "🎮 Full Entertainment Experience"]
    },
    footer: {
      title: "💬 Contact & Follow Up",
      subtitle: "Click the icons below to access our official pages:",
      socials: { wa: "WhatsApp", fb: "Facebook", yt: "YouTube", tt: "TikTok" },
      emailLabel: "Official Email",
      copyright: "© 2026 - The Scary Garden. All rights reserved to developer Mousa Mohammed Mousa."
    }
  }
};