import type { BlogArticle, BlogCategory, ContentBlock } from './types'

export const categories: BlogCategory[] = [
  { slug: 'dental-implants', label: 'Dental Implants' },
  { slug: 'prosthodontics', label: 'Prosthodontics' },
  { slug: 'endodontics', label: 'Endodontics' },
  { slug: 'periodontal-care', label: 'Periodontal Care' },
  { slug: 'cosmetic-dentistry', label: 'Cosmetic Dentistry' },
  { slug: 'childrens-dentistry', label: "Children's Dentistry" },
  { slug: 'oral-surgery', label: 'Oral Surgery' },
  { slug: 'preventive-dentistry', label: 'Preventive Dentistry' },
]

export function getCategoryLabel(slug: string): string {
  return categories.find((category) => category.slug === slug)?.label ?? slug
}

const DEFAULT_AUTHOR = 'Dr. Ayman Chhada, BDS'
const DEFAULT_REVIEWER = 'Dr. Ayman Chhada, BDS'

export const articles: BlogArticle[] = [
  {
    slug: 'what-to-expect-from-dental-implant-treatment',
    title: 'What to Expect From Dental Implant Treatment',
    dek: 'A considered, stage-by-stage explanation of how dental implant treatment is typically planned and delivered — and why the details can genuinely differ from one patient to the next.',
    category: 'dental-implants',
    publishedAt: '2026-08-20',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Dental implant treatment is often described by its outcome — a replacement tooth that looks and functions like a natural one — but the process behind that outcome is considered rather than routine. Each stage exists for a clinical reason, and the details of your own treatment are shaped by your anatomy, your general health, and the restoration your case is ultimately planned around. What follows sets out that process stage by stage, and where it can genuinely differ from person to person." },

      { type: 'heading', level: 2, id: 'why-planning-comes-first', text: 'Why Planning Comes First' },
      { type: 'paragraph', text: "No two implant cases begin from the same starting point. Bone density, gum health, the position of the missing tooth, and the appearance you're hoping to achieve all shape the plan before any surgical step is considered. This is also where the final restoration — the crown, bridge, or denture the implant will eventually support — starts to influence decisions, since the implant is placed to suit where that restoration needs to sit, not the other way around. Treatment is planned as a single, connected sequence with the end result in mind from the outset, rather than a series of separate, interchangeable procedures." },

      { type: 'heading', level: 2, id: 'your-first-consultation', text: 'Your First Consultation' },
      { type: 'paragraph', text: "The first appointment is an assessment, not a commitment to treatment. Your dentist examines your teeth, gums, and bite, discusses your medical history, and talks through what you'd like the outcome to look and feel like. This is also when suitability begins to be considered — not as a yes-or-no verdict on the spot, but as the starting point for a plan built specifically around you. Nothing about a general description like this can tell you whether implant treatment is right for your case; that judgement depends entirely on what's found during this assessment." },

      { type: 'heading', level: 2, id: 'imaging-and-digital-planning', text: 'Imaging and Digital Planning' },
      { type: 'paragraph', text: "Once the basic picture is clear, imaging helps map what can't be seen by eye — the depth and quality of bone, the position of nerves and sinuses, and the space available for an implant to sit securely. The type and extent of imaging used are selected according to your specific clinical situation and what the treatment plan requires, rather than applied as a standard step for every case. That information then feeds into digital planning, which maps the intended implant position with a level of precision that simply isn't possible by eye alone." },

      { type: 'heading', level: 2, id: 'when-additional-preparation-is-needed', text: 'When Additional Preparation Is Needed' },
      { type: 'paragraph', text: "For some patients, the assessment shows the jaw doesn't yet have quite enough bone in the right place to support an implant securely — often at the back of the upper jaw, near the sinus, or in an area where a tooth has been missing for some time. Where that's the case, a bone graft or a sinus lift may be recommended first, giving the implant a stable foundation before it's placed. This isn't a routine step built into every treatment plan; UK NHS guidance on implant treatment describes it as one of several possible stages, needed by some patients and not others." },

      { type: 'heading', level: 2, id: 'placing-the-implant', text: 'Placing the Implant' },
      { type: 'paragraph', text: "The placement appointment itself is planned to be as unremarkable as possible. The area is numbed with local anaesthetic, and the implant is positioned according to the digital plan made in advance. In some cases, where the site and treatment plan allow, the implant can be placed at the same visit as a tooth extraction rather than as a separate later appointment; whether that applies to you depends entirely on the individual site, and it's something your dentist will assess rather than assume. Afterwards, a healing cap or temporary restoration protects the area while recovery begins." },

      { type: 'heading', level: 2, id: 'healing-and-osseointegration', text: 'Healing and Osseointegration' },
      { type: 'paragraph', text: "What follows is a biological process called osseointegration — the gradual fusing of bone to the implant's surface, which is what eventually gives it the stability of a natural tooth root. This takes time, and how much time varies genuinely from one case to another, depending on bone quality, the site involved, and individual healing. Rather than working to a single fixed calendar, many clinicians assess an implant's stability directly before deciding it's ready to carry a permanent restoration. Taken as a whole — from first consultation through to a completed restoration — treatment is generally discussed in terms of months rather than weeks; published NHS guidance describes an overall timeframe of around six to twelve months, though this describes the whole journey rather than a guaranteed healing period for any individual case." },

      { type: 'heading', level: 2, id: 'fitting-the-final-restoration', text: 'Fitting the Final Restoration' },
      { type: 'paragraph', text: "Once healing is confirmed, an abutment connects the implant to its final restoration — the crown, bridge, or denture that was planned for from the very first consultation. Shade, shape, and bite are checked and adjusted before anything is permanently fitted, since this is the stage that determines how the result actually looks and feels day to day. In effect, everything before this point exists to make this single appointment as predictable as possible." },

      { type: 'heading', level: 2, id: 'caring-for-your-implant-long-term', text: 'Caring for Your Implant Long-Term' },
      { type: 'paragraph', text: "An implant requires ongoing care rather than a one-off procedure — consistent oral hygiene at home, and regular professional review visits so your dentist can assess the health of the gum and bone specifically around the implant. Long-term care is part of the treatment plan, not an afterthought to it; issues are far easier to manage when they're identified early." },

      { type: 'heading', level: 2, id: 'is-an-implant-the-right-choice-for-you', text: 'Is an Implant the Right Choice for You?' },
      { type: 'paragraph', text: [
        "An implant is one option for replacing a missing tooth, not automatically the right one for every case. Suitability is judged individually, taking in gum health, the amount of supporting bone, and general health — conditions such as diabetes are considered as part of that picture, since how well they're managed can influence healing, and smoking is generally discussed for the same reason. None of this rules treatment out; it simply shapes how it's planned. A bridge or a denture may be a more suitable option for some patients, depending on the condition of neighbouring teeth and what the individual is hoping to achieve — a comparison covered in more detail in ",
        { text: 'our overview of restorative options', href: '/blog/crowns-bridges-and-dentures-explained' },
        ". An honest conversation about all of these routes, not just the one being discussed, is part of a proper assessment. A fuller overview of the treatment itself is also available on ",
        { text: 'our dental implants page', href: '/dental-implants' },
        ".",
      ] },
    ],
    faqs: [
      { question: 'Is dental implant treatment suitable for everyone?', answer: 'Not automatically. Suitability is confirmed through an individual clinical assessment of gum health, bone support, and general health, not from a general description like this one.' },
      { question: 'How long does the whole process usually take?', answer: 'This varies by case, but published NHS guidance suggests an overall timeframe of around six to twelve months from first consultation to completed restoration. Your own timeline is confirmed as part of your personalised treatment plan.' },
      { question: 'Will I definitely need a bone graft?', answer: "No. A bone graft or sinus lift is only recommended where an assessment shows it's needed to support the implant securely — many patients don't require this step at all." },
      { question: 'What should I expect after implant placement?', answer: 'Some mild soreness, swelling, or bruising in the days afterward is common, and NHS guidance notes this should usually settle within about a week. Your dentist will schedule a review to check healing before any further steps are planned, and will let you know what to watch for in the meantime.' },
      { question: "What happens if the implant doesn't integrate successfully?", answer: "This is uncommon, and it's something your dentist will monitor for at review visits. If it happens, the site is reassessed and the options are discussed with you directly, rather than being left unaddressed." },
      { question: 'Is an implant always the best option instead of a bridge or denture?', answer: 'Not necessarily. Each option suits different circumstances, and a proper assessment should include an honest discussion of all of them, not just the one being considered first.' },
      { question: 'Do conditions like diabetes or smoking rule out treatment?', answer: "Not usually, but they are taken into account. How well a condition is managed, or whether someone smokes, can influence healing, so both are discussed as part of your assessment rather than ignored." },
    ],
    references: [
      {
        title: "Dental implants — Guy's and St Thomas' NHS Foundation Trust",
        url: 'https://www.guysandstthomas.nhs.uk/health-information/dental-implants',
      },
      {
        title: 'Prospective multicenter non-randomized controlled study on intraosseous stability and healing period for dental implants in the posterior region — International Journal of Implant Dentistry (2018)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5874224/',
      },
      {
        title: "After having a dental implant — Guy's and St Thomas' NHS Foundation Trust",
        url: 'https://www.guysandstthomas.nhs.uk/health-information/dental-implants/after-having-dental-implant',
      },
    ],
    arContent: {
      title: 'ما يمكن توقعه من علاج زراعة الأسنان',
      dek: 'شرح مدروس وتدريجي لكيفية التخطيط لعلاج زراعة الأسنان وتنفيذه عادةً — ولماذا يمكن أن تختلف التفاصيل فعليًا من مريض إلى آخر.',
      // Matches the doctor's name as already established sitewide in
      // messages/ar/home.json (doctors.dr1.name) — no ", BDS" suffix, since
      // that's the site's existing Arabic-byline convention.
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: 'كثيرًا ما يُوصف علاج زراعة الأسنان بنتيجته النهائية — سنّ بديل يبدو ويعمل كسنّ طبيعي — إلا أن العملية التي تُفضي إلى تلك النتيجة مدروسة وليست روتينية. فكل مرحلة لها سبب سريري واضح، وتفاصيل علاجك الخاص تتشكل وفق تركيبك التشريحي وحالتك الصحية العامة والترميم النهائي الذي يُخطَّط للعلاج على أساسه. وفيما يلي عرض لهذه العملية مرحلة بمرحلة، مع الإشارة إلى حيث يمكن أن تختلف فعليًا من شخص إلى آخر.' },

        { type: 'heading', level: 2, id: 'why-planning-comes-first', text: 'لماذا يأتي التخطيط أولًا' },
        { type: 'paragraph', text: 'لا تبدأ أي حالتَي زراعة أسنان من نفس نقطة الانطلاق. فكثافة العظم، وصحة اللثة، وموضع السنّ المفقود، والمظهر الذي تأمل الوصول إليه، كلها عوامل تُشكّل الخطة قبل النظر في أي خطوة جراحية. وهنا أيضًا يبدأ الترميم النهائي — التاج أو الجسر أو طقم الأسنان الذي ستدعمه الزرعة لاحقًا — بالتأثير على القرارات، إذ توضع الزرعة بما يتناسب مع موضع هذا الترميم، وليس العكس. ويُخطَّط للعلاج كتسلسل واحد مترابط تُؤخذ فيه النتيجة النهائية بعين الاعتبار منذ البداية، لا كسلسلة من الإجراءات المنفصلة القابلة للتبديل.' },

        { type: 'heading', level: 2, id: 'your-first-consultation', text: 'استشارتك الأولى' },
        { type: 'paragraph', text: 'الموعد الأول هو تقييم، وليس التزامًا بالعلاج. يفحص طبيبك أسنانك ولثتك وإطباقك، ويناقش تاريخك الطبي، ويستمع إلى الشكل والإحساس اللذين تأمل الوصول إليهما في النتيجة النهائية. وهنا أيضًا يبدأ النظر في مدى الملاءمة — لا كحكم فوري بنعم أو لا، بل كنقطة انطلاق لخطة تُبنى خصيصًا وفق حالتك. ولا يمكن لوصف عام كهذا أن يُحدد ما إذا كان علاج الزراعة مناسبًا لحالتك؛ فذلك الحكم يعتمد كليًا على ما يظهر خلال هذا التقييم.' },

        { type: 'heading', level: 2, id: 'imaging-and-digital-planning', text: 'التصوير والتخطيط الرقمي' },
        { type: 'paragraph', text: 'بمجرد وضوح الصورة الأساسية، يساعد التصوير في رسم خريطة لما لا يمكن رؤيته بالعين المجردة — عمق العظم وجودته، وموضع الأعصاب والجيوب الأنفية، والمساحة المتاحة لتثبيت الزرعة بأمان. ويُختار نوع التصوير ومداه وفق حالتك السريرية الخاصة ومتطلبات خطة العلاج، وليس كخطوة معيارية تُطبَّق على كل حالة. وتُستخدم تلك المعلومات بعد ذلك في التخطيط الرقمي، الذي يحدد موضع الزرعة المستهدف بدقة يتعذر تحقيقها بالعين وحدها.' },

        { type: 'heading', level: 2, id: 'when-additional-preparation-is-needed', text: 'متى يلزم تحضير إضافي' },
        { type: 'paragraph', text: 'قد يُظهر التقييم لدى بعض المرضى أن الفك لا يحتوي بعد على ما يكفي من العظم في الموضع الصحيح لدعم الزرعة بأمان — وغالبًا ما يحدث ذلك في الجزء الخلفي من الفك العلوي بالقرب من الجيب الأنفي، أو في منطقة فُقد فيها سنّ منذ فترة. وفي هذه الحالة، قد يُوصى أولًا بترقيع عظمي أو رفع للجيب الفكي لإعطاء الزرعة قاعدة ثابتة قبل تركيبها. وهذه ليست خطوة روتينية في كل خطة علاج؛ إذ تصفها إرشادات هيئة الصحة الوطنية البريطانية (NHS) الخاصة بعلاج الزراعة بأنها إحدى مراحل محتملة عدة، يحتاجها بعض المرضى دون سواهم.' },

        { type: 'heading', level: 2, id: 'placing-the-implant', text: 'تركيب الزرعة' },
        { type: 'paragraph', text: 'يُخطَّط لموعد التركيب نفسه ليكون أقرب ما يمكن إلى إجراء بسيط واعتيادي. تُخدَّر المنطقة بالتخدير الموضعي، وتوضع الزرعة وفق الخطة الرقمية المُعدّة مسبقًا. وفي بعض الحالات، حيث يسمح الموضع وخطة العلاج بذلك، يمكن تركيب الزرعة في نفس زيارة خلع السنّ بدلًا من موعد لاحق منفصل؛ وما إذا كان ذلك ينطبق على حالتك يعتمد كليًا على الموضع الفردي، وهو أمر يقيّمه طبيبك ولا يفترضه مسبقًا. وبعد ذلك، يحمي غطاء التئام أو ترميم مؤقت المنطقة أثناء بدء الشفاء.' },

        { type: 'heading', level: 2, id: 'healing-and-osseointegration', text: 'الشفاء والاندماج العظمي' },
        { type: 'paragraph', text: 'ما يلي هو عملية بيولوجية تُعرف بالاندماج العظمي (osseointegration) — الالتحام التدريجي للعظم بسطح الزرعة، وهو ما يمنحها في النهاية ثباتًا يشبه ثبات جذر السنّ الطبيعي. تستغرق هذه العملية وقتًا، وتختلف مدتها فعليًا من حالة إلى أخرى تبعًا لجودة العظم والموضع المعني وسرعة الشفاء الفردي. وبدلًا من الاعتماد على جدول زمني ثابت واحد، يفضّل كثير من الأطباء تقييم ثبات الزرعة مباشرة قبل اعتبارها جاهزة لحمل ترميم دائم. وبالنظر إلى العملية ككل — من الاستشارة الأولى وحتى إتمام الترميم — يُناقَش العلاج عمومًا بالأشهر لا بالأسابيع؛ وتشير إرشادات هيئة الصحة الوطنية البريطانية (NHS) المنشورة إلى إطار زمني إجمالي يتراوح بين ستة واثني عشر شهرًا تقريبًا، مع أن هذا يصف الرحلة الكاملة وليس فترة شفاء مضمونة لأي حالة فردية.' },

        { type: 'heading', level: 2, id: 'fitting-the-final-restoration', text: 'تركيب الترميم النهائي' },
        { type: 'paragraph', text: 'بمجرد تأكيد اكتمال الشفاء، تُستخدم دعامة (abutment) لربط الزرعة بترميمها النهائي — التاج أو الجسر أو طقم الأسنان الذي كان مخططًا له منذ الاستشارة الأولى. ويُتحقق من درجة اللون والشكل والإطباق ويُعدَّل قبل تثبيت أي شيء بشكل دائم، إذ إن هذه هي المرحلة التي تحدد كيف تبدو النتيجة وتُحسّ فعليًا يوميًا. وفي الواقع، فإن كل ما سبق هذه المرحلة إنما يهدف إلى جعل هذا الموعد الواحد متوقّعًا قدر الإمكان.' },

        { type: 'heading', level: 2, id: 'caring-for-your-implant-long-term', text: 'العناية بزرعتك على المدى الطويل' },
        { type: 'paragraph', text: 'تحتاج الزرعة إلى عناية مستمرة وليس إجراءً لمرة واحدة — عناية منتظمة بنظافة الفم في المنزل، وزيارات متابعة دورية مع طبيبك ليتمكن من تقييم صحة اللثة والعظم المحيطين بالزرعة تحديدًا. فالعناية طويلة المدى جزء أصيل من خطة العلاج، لا فكرة لاحقة تُضاف إليها؛ إذ يسهُل التعامل مع أي مشكلة كثيرًا عند اكتشافها مبكرًا.' },

        { type: 'heading', level: 2, id: 'is-an-implant-the-right-choice-for-you', text: 'هل الزرعة هي الخيار المناسب لك؟' },
        { type: 'paragraph', text: [
          'الزرعة خيار واحد من خيارات تعويض السنّ المفقود، وليست بالضرورة الخيار الأنسب لكل حالة. ويُقيَّم مدى ملاءمتها بشكل فردي، مع مراعاة صحة اللثة، وكمية العظم الداعم، والحالة الصحية العامة — إذ تُؤخذ حالات مثل السكري بعين الاعتبار ضمن هذه الصورة، لأن مدى التحكم بها قد يؤثر في الشفاء، ويُناقَش التدخين عادةً للسبب ذاته. ولا يعني أي من ذلك استبعاد العلاج؛ بل يُشكّل فقط طريقة التخطيط له. وقد يكون الجسر أو طقم الأسنان خيارًا أنسب لبعض المرضى، تبعًا لحالة الأسنان المجاورة وما يأمل الفرد تحقيقه — وهي مقارنة تُتناول بتفصيل أكبر في ',
          { text: 'نظرتنا الشاملة على خيارات الترميم', href: '/blog/crowns-bridges-and-dentures-explained' },
          '. وإجراء محادثة صريحة حول جميع هذه المسارات، لا الخيار المطروح فحسب، جزء من أي تقييم سليم. كما يتوفر عرض أشمل للعلاج نفسه على ',
          { text: 'صفحة زراعة الأسنان لدينا', href: '/dental-implants' },
          '.',
        ] },
      ],
      faqs: [
        { question: 'هل علاج زراعة الأسنان مناسب للجميع؟', answer: 'ليس تلقائيًا. تُؤكَّد مدى الملاءمة من خلال تقييم سريري فردي لصحة اللثة والدعم العظمي والحالة الصحية العامة، وليس عبر وصف عام كهذا.' },
        { question: 'كم يستغرق العلاج بأكمله عادةً؟', answer: 'يختلف ذلك حسب الحالة، لكن إرشادات هيئة الصحة الوطنية البريطانية (NHS) المنشورة تشير إلى إطار زمني إجمالي يتراوح بين ستة واثني عشر شهرًا تقريبًا من الاستشارة الأولى وحتى إتمام الترميم. ويُحدَّد جدولك الزمني الخاص كجزء من خطة علاجك الشخصية.' },
        { question: 'هل سأحتاج بالتأكيد إلى ترقيع عظمي؟', answer: 'لا. لا يُوصى بالترقيع العظمي أو رفع الجيب الفكي إلا إذا أظهر التقييم أن ذلك ضروري لدعم الزرعة بأمان — والعديد من المرضى لا يحتاجون هذه الخطوة إطلاقًا.' },
        { question: 'ماذا يمكن أن أتوقع بعد تركيب الزرعة؟', answer: 'من الشائع الشعور ببعض الألم الخفيف أو التورم أو الكدمات في الأيام التالية، وتشير إرشادات NHS إلى أن ذلك عادةً ما يزول خلال أسبوع تقريبًا. وسيحدد طبيبك موعد متابعة للاطمئنان على الشفاء قبل التخطيط لأي خطوات لاحقة، وسيخبرك بما ينبغي ملاحظته في هذه الأثناء.' },
        { question: 'ماذا يحدث إن لم تندمج الزرعة بنجاح؟', answer: 'هذا أمر نادر الحدوث، وهو ما يراقبه طبيبك في زيارات المتابعة. وإذا حدث، تُعاد دراسة الموضع وتُناقَش الخيارات معك مباشرة، بدلًا من تركه دون معالجة.' },
        { question: 'هل الزرعة دائمًا الخيار الأفضل مقارنة بالجسر أو طقم الأسنان؟', answer: 'ليس بالضرورة. يناسب كل خيار ظروفًا مختلفة، وينبغي أن يتضمن التقييم السليم مناقشة صريحة لجميع الخيارات، لا الخيار المطروح أولًا فقط.' },
        { question: 'هل تمنع حالات مثل السكري أو التدخين إجراء العلاج؟', answer: 'ليس عادةً، لكنها تُؤخذ بعين الاعتبار. فمدى التحكم بالحالة الصحية، أو التدخين، قد يؤثر في الشفاء، لذا يُناقَش كلاهما كجزء من تقييمك بدلًا من تجاهلهما.' },
      ],
      references: [
        {
          title: "Dental implants — Guy's and St Thomas' NHS Foundation Trust",
          url: 'https://www.guysandstthomas.nhs.uk/health-information/dental-implants',
        },
        {
          title: 'Prospective multicenter non-randomized controlled study on intraosseous stability and healing period for dental implants in the posterior region — International Journal of Implant Dentistry (2018)',
          url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5874224/',
        },
        {
          title: "After having a dental implant — Guy's and St Thomas' NHS Foundation Trust",
          url: 'https://www.guysandstthomas.nhs.uk/health-information/dental-implants/after-having-dental-implant',
        },
      ],
    },
  },
  {
    slug: 'crowns-bridges-and-dentures-explained',
    title: 'Crowns, Bridges, and Dentures: Understanding Your Restorative Options',
    dek: 'A general overview of the main ways a damaged, missing, or worn tooth can be restored.',
    category: 'prosthodontics',
    publishedAt: '2026-08-18',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Prosthodontics covers the range of treatments used to restore or replace teeth, and the terminology can feel overwhelming at first. In general terms, three options come up most often." },
      { type: 'heading', level: 2, id: 'what-prosthodontics-covers', text: 'What Prosthodontics Covers' },
      { type: 'paragraph', text: 'These treatments are generally considered when a tooth is significantly damaged, missing, or worn, and a natural repair is no longer the most suitable option.' },
      { type: 'heading', level: 2, id: 'comparing-the-main-options', text: 'Comparing the Main Options' },
      { type: 'table', headers: ['Option', 'Best Suited For', 'Fixed or Removable'], rows: [
        ['Crown', 'Strengthening a single damaged tooth', 'Fixed'],
        ['Bridge', 'Replacing one or more missing teeth using neighbouring teeth for support', 'Fixed'],
        ['Denture', 'Replacing multiple or all missing teeth', 'Removable, or fixed depending on the case'],
      ] },
      { type: 'callout', text: 'The right option depends on the condition of your remaining teeth and gums, which is assessed individually rather than assumed from a general comparison.' },
      { type: 'heading', level: 2, id: 'living-comfortably-with-a-restoration', text: 'Living Comfortably With a Restoration' },
      { type: 'paragraph', text: 'Whichever option is recommended, ongoing comfort tends to come down to fit, maintenance, and regular review — all of which are part of the plan your clinician builds with you.' },
    ],
    faqs: [
      { question: 'How do I know which option is right for me?', answer: 'This is decided together with your dentist after an assessment of your remaining teeth, gums, and overall goals — not from a general comparison alone.' },
      { question: 'Do these restorations require special care?', answer: 'Generally, they benefit from the same consistent oral hygiene as natural teeth, alongside regular check-ups so fit and condition can be reviewed.' },
    ],
  },
  {
    slug: 'understanding-root-canal-treatment',
    title: 'Understanding Root Canal Treatment',
    dek: 'What root canal treatment involves, in plain terms, and why it is often the option that saves a tooth.',
    category: 'endodontics',
    publishedAt: '2026-08-16',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'Root canal treatment has a reputation that often outpaces the reality of the procedure itself. Understanding what it actually involves can help put that reputation into perspective.' },
      { type: 'heading', level: 2, id: 'what-happens-inside-a-tooth', text: 'What Happens Inside a Tooth' },
      { type: 'paragraph', text: 'Beneath the visible surface, every tooth contains soft tissue that can become irritated or affected by decay or injury. Root canal treatment addresses this tissue with the aim of retaining the natural tooth wherever possible.' },
      { type: 'heading', level: 2, id: 'signs-worth-discussing', text: 'Signs Worth Discussing With Your Dentist' },
      { type: 'list', items: [
        'Persistent pain in or around a tooth',
        'Noticeable sensitivity to hot or cold that lingers',
        'Swelling or tenderness near a tooth',
      ] },
      { type: 'callout', text: 'These are general signs only, shared for awareness — a proper diagnosis always requires a clinical examination with your dentist.' },
      { type: 'heading', level: 2, id: 'what-treatment-generally-involves', text: 'What Treatment Generally Involves' },
      { type: 'paragraph', text: 'In broad terms, treatment involves carefully treating the affected tissue and then restoring the tooth so it can continue to function comfortably.' },
    ],
    faqs: [
      { question: 'Does root canal treatment hurt?', answer: 'Modern approaches are planned around comfort throughout. Your clinician can explain exactly what to expect during your specific treatment.' },
      { question: 'Can any tooth be treated this way?', answer: 'Root canal treatment can generally be considered for any tooth, front or back, though suitability is always confirmed clinically first.' },
    ],
  },
  {
    slug: 'gum-health-what-you-should-know',
    title: 'Gum Health: What You Should Know',
    dek: 'How healthy gums support your whole smile, and what ongoing periodontal care usually looks like.',
    category: 'periodontal-care',
    publishedAt: '2026-08-14',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "It's easy to focus entirely on teeth and overlook the gums that support them, but gum health plays a central role in how a smile looks and functions over time." },
      { type: 'heading', level: 2, id: 'why-gum-health-matters', text: 'Why Gum Health Matters' },
      { type: 'paragraph', text: 'Gums provide the foundation for your teeth. When that foundation is compromised, it can affect comfort, appearance, and long-term stability.' },
      { type: 'heading', level: 2, id: 'common-approaches-to-gum-care', text: 'Common Approaches to Gum Care' },
      { type: 'list', items: [
        'Deep cleaning beneath the gumline where needed',
        'Ongoing periodontal maintenance',
        'Treatment for gum inflammation at different stages',
      ] },
      { type: 'callout', text: 'The right approach depends on your specific gum health, assessed individually rather than assumed from general information.' },
      { type: 'heading', level: 2, id: 'everyday-habits', text: 'Everyday Habits That Support Healthy Gums' },
      { type: 'list', items: [
        'A consistent, gentle brushing technique',
        'Regular interdental cleaning',
        'Routine dental check-ups',
      ] },
    ],
    faqs: [
      { question: 'How often should gum health be checked?', answer: 'This depends on your individual history and risk factors, which your dentist will discuss with you directly.' },
      { question: 'Can gum health affect the rest of my mouth?', answer: 'Gum health is closely linked to the long-term stability of your teeth, which is part of why it is assessed at every routine visit.' },
    ],
  },
  {
    slug: 'veneers-vs-whitening-choosing-the-right-approach',
    title: 'Veneers vs. Whitening: Choosing the Right Approach',
    dek: 'Two different ways to refine your smile, and how they are generally suited to different goals.',
    category: 'cosmetic-dentistry',
    publishedAt: '2026-08-12',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'Veneers and whitening are often mentioned in the same breath, but they solve fairly different problems. Knowing the distinction can make it easier to think about what you actually want to change.' },
      { type: 'heading', level: 2, id: 'two-different-goals', text: 'Two Different Goals' },
      { type: 'paragraph', text: 'In general terms, whitening addresses colour, while veneers address shape, alignment, and colour together.' },
      { type: 'heading', level: 2, id: 'a-general-comparison', text: 'A General Comparison' },
      { type: 'table', headers: ['Consideration', 'Whitening', 'Veneers'], rows: [
        ['Addresses', 'Shade and brightness only', 'Shape, shade, and symmetry together'],
        ['Tooth structure', 'No alteration', 'Conservative preparation is typically required'],
        ['Best suited for', 'Patients happy with tooth shape, wanting a brighter shade', 'Patients wanting a more comprehensive change'],
      ] },
      { type: 'callout', text: 'Suitability for either option is assessed individually, based on your teeth, gums, and goals.' },
      { type: 'heading', level: 2, id: 'making-the-right-choice', text: 'Making the Right Choice for You' },
      { type: 'paragraph', text: 'Many patients start with a conversation about what they would actually like to see change, and work backwards from there with their clinician.' },
    ],
    faqs: [
      { question: 'Can whitening and veneers be combined?', answer: 'This is something to discuss directly with your dentist, as it depends on your specific case and goals.' },
      { question: 'Which option lasts longer?', answer: 'Longevity depends on the option, the material used, and how well it is cared for — your clinician can explain what applies to your case.' },
    ],
  },
  {
    slug: 'helping-your-child-feel-comfortable-at-the-dentist',
    title: 'Helping Your Child Feel Comfortable at the Dentist',
    dek: 'Practical, reassuring context for parents preparing their child for a dental visit.',
    category: 'childrens-dentistry',
    publishedAt: '2026-08-10',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "A child's early experiences at the dentist can shape how they feel about dental visits for years to come, which is why the approach taken matters as much as the treatment itself." },
      { type: 'heading', level: 2, id: 'why-early-experiences-matter', text: 'Why Early, Positive Experiences Matter' },
      { type: 'paragraph', text: 'Children who feel informed and unrushed tend to build genuine confidence around dental care, rather than simply tolerating it.' },
      { type: 'heading', level: 2, id: 'what-helps-most', text: 'What Helps Most' },
      { type: 'list', items: [
        'Age-appropriate explanations of what is happening',
        'A gradual, patient introduction to each step',
        'Positive reinforcement throughout the visit',
        'Keeping parents informed at every stage',
      ] },
      { type: 'callout', text: 'Every child adjusts at their own pace — there is no single timeline that applies to every visit.' },
      { type: 'heading', level: 2, id: 'preventive-habits-that-start-early', text: 'Preventive Habits That Start Early' },
      { type: 'paragraph', text: 'Alongside a positive clinical experience, early guidance on brushing and diet tends to have a lasting effect on long-term oral health.' },
    ],
    faqs: [
      { question: 'At what age should a child first visit the dentist?', answer: 'This is best discussed with your dentist, who can advise based on your child’s individual development.' },
      { question: 'What if my child is nervous?', answer: 'A gradual, patient approach is used for nervous or first-time children, letting them set the pace rather than rushing any step.' },
    ],
  },
  {
    slug: 'what-oral-surgery-can-involve',
    title: 'What Oral Surgery Can Involve',
    dek: 'A general introduction to when oral surgery may be recommended and what preparation usually looks like.',
    category: 'oral-surgery',
    publishedAt: '2026-08-08',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'Oral surgery covers a range of procedures, and being recommended one can feel like a big step. In most cases, it simply reflects a considered clinical decision rather than anything to be alarmed by.' },
      { type: 'heading', level: 2, id: 'when-oral-surgery-may-be-considered', text: 'When Oral Surgery May Be Considered' },
      { type: 'paragraph', text: 'It may be recommended for reasons such as a complex extraction, or as part of preparing for another treatment, always following a full clinical assessment.' },
      { type: 'heading', level: 2, id: 'how-cases-are-typically-planned', text: 'How Cases Are Typically Planned' },
      { type: 'list', items: [
        'A detailed clinical assessment',
        'Diagnostic imaging where clinically needed',
        'A personalised plan explained clearly before anything proceeds',
      ] },
      { type: 'callout', text: 'Every recommendation follows an individual assessment — general information like this is never a substitute for that consultation.' },
      { type: 'heading', level: 2, id: 'recovery-generally-speaking', text: 'Recovery, Generally Speaking' },
      { type: 'paragraph', text: 'Recovery varies by procedure and by patient. Rather than a fixed expectation, your clinician will explain a recovery approach suited specifically to your case.' },
    ],
    faqs: [
      { question: 'Is oral surgery always complex?', answer: 'Not necessarily — the term covers a range of procedures, some more involved than others. Your dentist can explain what applies to your case.' },
      { question: 'How should I prepare?', answer: 'Preparation is discussed individually during your consultation, based on the specific procedure being planned.' },
    ],
  },
  {
    slug: 'the-case-for-regular-dental-check-ups',
    title: 'The Case for Regular Dental Check-Ups',
    dek: 'Why consistent preventive care tends to matter more than any single treatment.',
    category: 'preventive-dentistry',
    publishedAt: '2026-08-06',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'It can be tempting to think of dental visits as something for when a problem arises. In practice, the visits that matter most are often the ones where nothing appears to be wrong at all.' },
      { type: 'heading', level: 2, id: 'prevention-vs-treatment', text: 'Prevention vs. Treatment' },
      { type: 'paragraph', text: 'Regular check-ups are built around identifying small concerns early, well before they become larger ones — which is generally more comfortable and more manageable for everyone involved.' },
      { type: 'heading', level: 2, id: 'what-a-preventive-visit-covers', text: 'What a Preventive Visit Typically Covers' },
      { type: 'list', items: [
        'A comprehensive clinical examination',
        'Professional cleaning',
        'Personalised advice for your own oral health',
        'Diagnostic imaging, where clinically appropriate',
      ] },
      { type: 'callout', text: 'Not every visit requires the same diagnostic imaging — this is recommended individually, based on clinical need, not as a routine step for every patient.' },
      { type: 'heading', level: 2, id: 'building-good-habits', text: 'Building Good Habits Between Visits' },
      { type: 'list', items: [
        'A consistent brushing routine',
        'Regular interdental cleaning',
        'General awareness of diet and its effect on oral health',
      ] },
    ],
    faqs: [
      { question: 'How often should I have a check-up?', answer: 'This depends on your individual oral health and history, which your dentist will advise on directly.' },
      { question: 'Will I always need an X-ray?', answer: 'No — X-rays are recommended when clinically appropriate, not as a standard part of every single visit.' },
    ],
  },
]

export function getAllArticles(): BlogArticle[] {
  return [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getArticlesByCategory(categorySlug?: string): BlogArticle[] {
  const all = getAllArticles()
  if (!categorySlug || categorySlug === 'all') return all
  return all.filter((article) => article.category === categorySlug)
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article: BlogArticle, count = 3): BlogArticle[] {
  const all = getAllArticles().filter((candidate) => candidate.slug !== article.slug)

  if (article.relatedSlugs?.length) {
    const explicit = article.relatedSlugs
      .map((slug) => all.find((candidate) => candidate.slug === slug))
      .filter((candidate): candidate is BlogArticle => Boolean(candidate))
    if (explicit.length >= count) return explicit.slice(0, count)
  }

  const sameCategory = all.filter((candidate) => candidate.category === article.category)
  const rest = all.filter((candidate) => candidate.category !== article.category)

  return [...sameCategory, ...rest].slice(0, count)
}

export function formatArticleDate(isoDate: string, locale: 'en' | 'ar' = 'en'): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString(
    locale === 'ar' ? 'ar-EG-u-ca-gregory-nu-latn' : 'en-GB',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    },
  )
}

const WORDS_PER_MINUTE = 200

function extractText(block: ContentBlock): string {
  switch (block.type) {
    case 'paragraph':
      return typeof block.text === 'string'
        ? block.text
        : block.text.map((part) => (typeof part === 'string' ? part : part.text)).join(' ')
    case 'heading':
      return block.text
    case 'callout':
      return block.text
    case 'list':
      return block.items.join(' ')
    case 'table':
      return [...block.headers, ...block.rows.flat()].join(' ')
    default:
      return ''
  }
}

export function getReadingTime(article: BlogArticle, contentOverride?: ContentBlock[]): string {
  const content = contentOverride ?? article.content
  const wordCount = content.reduce((total, block) => total + extractText(block).split(/\s+/).filter(Boolean).length, 0)
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}

export function getReadingTimeAr(content: ContentBlock[]): string {
  const wordCount = content.reduce((total, block) => total + extractText(block).split(/\s+/).filter(Boolean).length, 0)
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  return `${minutes} دقيقة قراءة`
}
