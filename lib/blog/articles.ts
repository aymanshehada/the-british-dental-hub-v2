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
    dek: 'A considered explanation of how crowns, bridges, and dentures each work — and why the right option depends on the condition of your whole mouth, not a fixed rule.',
    category: 'prosthodontics',
    publishedAt: '2026-08-18',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    // Genuinely relevant to this article's topic (unlike the implant article) —
    // sourced verbatim from messages/en/home.json's dr1.qualification2, not invented.
    reviewerCredentials: 'BDS, currently pursuing MRD and MProstho (Prosthodontics)',
    content: [
      { type: 'paragraph', text: "A tooth can need restoring or replacing for several reasons — significant decay, a fracture, heavy wear, or a tooth that's already missing. Three broad approaches come up most often: crowns, bridges, and dentures. Each does a different job, is suited to a different situation, and none of them is automatically the right answer for every case. Understanding what each one actually involves, and what determines whether it's suitable, is a more useful starting point than assuming one option is simply \"better\" than the others." },

      { type: 'heading', level: 2, id: 'crowns', text: 'Crowns' },
      { type: 'paragraph', text: "A crown is a custom-made cover that fits over an existing tooth — it does not replace a missing one. It's generally considered when a tooth has been significantly weakened by decay, a large filling, a fracture, or root canal treatment, and needs its strength, function, and appearance restored rather than removed altogether. The tooth is reshaped first so the crown can fit securely over what remains. In some root-treated teeth with very little remaining structure, a post may be used to help support the build-up beneath the crown. A crown can also sit on top of a dental implant, in which case it is the visible replacement tooth rather than a cover for a natural one — the underlying support is simply different. Cared for well, with consistent brushing, interdental cleaning, and regular check-ups, a crown is generally intended to last for many years, though this varies by case." },

      { type: 'heading', level: 2, id: 'bridges', text: 'Bridges' },
      { type: 'paragraph', text: "A bridge replaces one or more missing teeth by fixing a false tooth in place, using planned support from one or more neighbouring teeth. Because it's cemented or bonded in, it isn't taken out day to day, and it can help restore biting and chewing across the gap in the way a missing tooth alone cannot. How much those supporting teeth need to be prepared depends on the design used: a conventional bridge reshapes and crowns both supporting teeth to hold the new tooth securely, while some other designs are bonded to the back of a neighbouring tooth rather than covering it, involving considerably less preparation. Which approach is appropriate depends on the health, position, and existing condition of the neighbouring teeth themselves, which is assessed individually rather than assumed. Where several teeth are missing, or where the neighbouring teeth aren't a suitable foundation, an implant-supported alternative may be considered instead." },

      { type: 'heading', level: 2, id: 'dentures', text: 'Dentures' },
      { type: 'paragraph', text: "A denture is a removable appliance that replaces missing teeth, and it comes in two main forms. A partial denture replaces one or more missing teeth while some natural teeth remain, often held in place with discreet clasps that clip onto those teeth. A complete denture replaces a full set of upper or lower teeth, where none remain. Unlike a crown or bridge, a denture is not fixed permanently in the mouth — it's designed to be removed for cleaning and, generally, overnight." },
      { type: 'paragraph', text: "Adjusting to a new denture takes time, and the period of adaptation varies from person to person rather than following a fixed timeline. It can feel noticeably large in the mouth at first, and speaking and eating may feel different for a while, particularly with a complete denture replacing a full arch. Starting with softer foods, cutting food into smaller pieces, and chewing evenly on both sides of the mouth generally helps as the mouth and tongue adjust. Daily cleaning, along with removing the denture overnight to let the gums rest, is generally part of ongoing care." },

      { type: 'heading', level: 2, id: 'comparing-the-options', text: 'Comparing the Options' },
      { type: 'paragraph', text: 'Set out simply, the practical difference between these options often comes down to whether they stay in the mouth permanently or can be taken out, and how many teeth are involved:' },
      { type: 'table', headers: ['Option', 'Typically Used For', 'Fixed or Removable'], rows: [
        ['Crown', 'Restoring a single damaged or weakened tooth', 'Fixed'],
        ['Bridge', 'Replacing one or more missing teeth using planned support from neighbouring teeth', 'Fixed'],
        ['Denture', 'Replacing one or more missing teeth, or a full arch, depending on the type', 'Removable'],
      ] },
      { type: 'paragraph', text: "This is a starting point for orientation, not a recommendation. The condition of the remaining teeth, the health of the gums and supporting bone, how the bite functions day to day, and what matters most to the patient in terms of appearance and comfort all factor into the actual decision, which is made individually rather than read off a table. These options aren't always a one-time, permanent choice either — as a mouth changes over time, a plan built around a bridge or denture today doesn't rule out a different approach later, and that flexibility is part of what a proper assessment weighs up." },
      { type: 'callout', text: "There is no single restoration that is right for everyone; the appropriate option depends on the condition of the mouth, what needs to be restored or replaced, and the patient's own priorities." },

      { type: 'heading', level: 2, id: 'where-implants-can-fit-in', text: 'Where Implants Can Fit In' },
      { type: 'paragraph', text: [
        "Implants are worth being aware of when weighing up bridges and dentures in particular. Implant treatment can provide support for a replacement tooth without relying on neighbouring teeth for support, and, depending on the case, can also be used to support a bridge or certain types of denture more securely. Whether an implant is suitable depends on individual factors, including the health of the gums and the amount of supporting bone, so it isn't automatically the right choice either — it's simply another route worth discussing alongside a bridge or denture, not a universal upgrade from either. A fuller explanation of what implant treatment involves is available in our guide to ",
        { text: 'what to expect from dental implant treatment', href: '/blog/what-to-expect-from-dental-implant-treatment' },
        ", and on our ",
        { text: 'dental implants page', href: '/dental-implants' },
        ".",
      ] },

      { type: 'heading', level: 2, id: 'living-with-your-restoration-long-term', text: 'Living With Your Restoration Long-Term' },
      { type: 'paragraph', text: "Whichever option is chosen, comfort and longevity over time depend on similar basics: consistent oral hygiene, sensible care of the restoration itself, and regular review visits so fit and condition can be checked. A crown or bridge can generally be cared for with regular brushing and appropriate interdental cleaning, with your dentist or hygienist showing you how to clean around the restoration. A denture needs its own daily cleaning routine and periodic checks, since the mouth and gums can change shape gradually over time, which can affect how well a denture continues to fit. None of this is a one-off procedure — ongoing care is part of the plan from the outset, whichever option is right for you." },
    ],
    faqs: [
      { question: 'How do I know which option is right for me?', answer: 'This is decided together with your dentist after assessing your remaining teeth, gums, and supporting bone, along with your own priorities — not from a general comparison like this one.' },
      { question: 'Do these restorations require special care?', answer: "The basics are similar — consistent oral hygiene and regular check-ups — but a denture also needs its own daily cleaning routine and overnight removal, which a crown or bridge doesn't." },
      { question: 'Are dentures always removable?', answer: "A conventional denture is designed to be removable. Some patients are instead offered an implant-supported denture, which is a different, more securely retained appliance built on implants rather than a denture that's simply left in place." },
      { question: 'Do the teeth next to a bridge always need to be filed down?', answer: 'Not to the same extent in every case. A conventional bridge involves reshaping and crowning the supporting teeth, while some other bridge designs need much less preparation. Which approach is suitable depends on the condition of those teeth.' },
      { question: 'Could an implant be used instead of a bridge or denture?', answer: 'In some cases, yes. An implant can support a replacement tooth without relying on neighbouring teeth, and can sometimes support a bridge or denture as well — though suitability depends on individual factors like gum and bone health.' },
      { question: 'Does gum disease affect which option I can have?', answer: 'The health of your gums and supporting tissues can affect which restorative options are suitable and how they can be planned, so gum health is assessed as part of the overall treatment plan.' },
    ],
    references: [
      {
        title: 'Crowns — Leeds Teaching Hospitals NHS Trust',
        url: 'https://www.leedsth.nhs.uk/patients/resources/crowns/',
      },
      {
        title: 'Bridges — Leeds Teaching Hospitals NHS Trust',
        url: 'https://www.leedsth.nhs.uk/patients/resources/bridges/',
      },
      {
        title: 'Removable Partial Dentures — Leeds Teaching Hospitals NHS Trust',
        url: 'https://www.leedsth.nhs.uk/patients/resources/removable-partial-dentures/',
      },
      {
        title: 'Dentures — NHS',
        url: 'https://www.nhs.uk/tests-and-treatments/dentures/',
      },
    ],
    arContent: {
      title: 'التيجان والجسور وأطقم الأسنان: فهم خيارات الترميم لديك',
      dek: 'شرح مدروس لكيفية عمل كل من التيجان والجسور وأطقم الأسنان — ولماذا يعتمد الخيار المناسب على الحالة العامة للفم، لا على قاعدة ثابتة واحدة.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      // Arabic equivalent of the English reviewerCredentials override,
      // sourced verbatim from messages/ar/home.json's dr1.qualification2.
      reviewerCredentials: 'بكالوريوس طب وجراحة الأسنان (BDS)، يتابع حاليًا درجتي MRD وMProstho في طب التعويضات السنية',
      content: [
        { type: 'paragraph', text: 'قد تحتاج السنّ إلى ترميم أو استبدال لأسباب عدة — تسوّس كبير، أو كسر، أو تآكل شديد، أو سنّ مفقودة بالفعل. وتُعدّ التيجان والجسور وأطقم الأسنان من أكثر الحلول شيوعًا في هذا السياق. لكل خيار منها وظيفة مختلفة، ويناسب حالة معينة، وليس أي منها الإجابة الصحيحة تلقائيًا لكل حالة. وفهم ما يتضمنه كل خيار فعليًا، وما الذي يحدد مدى ملاءمته، نقطة انطلاق أكثر فائدة من افتراض أن أحدها ببساطة "أفضل" من غيره.' },

        { type: 'heading', level: 2, id: 'crowns', text: 'التيجان' },
        { type: 'paragraph', text: 'التاج غطاء مصمَّم خصيصًا يُركَّب فوق سنّ موجودة بالفعل — ولا يُستخدم لتعويض سنّ مفقودة. ويُلجأ إليه عادةً حين تكون السنّ قد ضعفت بشكل ملحوظ بسبب تسوّس، أو حشوة كبيرة، أو كسر، أو علاج عصب، وتحتاج إلى استعادة قوتها ووظيفتها ومظهرها بدلًا من خلعها كليًا. تُبرَّد السنّ أولًا وتُعاد تشكيلها لتناسب التاج بإحكام. وفي بعض الأسنان المعالَجة بالعصب حين يتبقى قدر ضئيل جدًا من بنية السنّ، قد تُستخدم دعامة للمساعدة على دعم الحشوة التأسيسية أسفل التاج. ويمكن للتاج أيضًا أن يُركَّب فوق زرعة سنية، وفي هذه الحالة يكون هو السنّ البديلة الظاهرة وليس غطاءً لسنّ طبيعية — فالدعامة الكامنة تختلف فحسب. ومع العناية الجيدة، من تنظيف منتظم بالفرشاة وتنظيف بين الأسنان وزيارات دورية للمتابعة، يُقصد بالتاج عادةً أن يدوم لسنوات عديدة، وإن كان ذلك يختلف من حالة إلى أخرى.' },

        { type: 'heading', level: 2, id: 'bridges', text: 'الجسور' },
        { type: 'paragraph', text: 'الجسر يعوّض سنّاً مفقودة أو أكثر عبر تثبيت سنّ صناعية في مكانها، بالاعتماد على دعم مخطَّط له من سنّ أو أكثر من الأسنان المجاورة. ولأنه يُثبَّت بالأسمنت أو باللصق، فإنه لا يُخلع يوميًا كطقم الأسنان، ويمكن أن يساعد على استعادة العضّ والمضغ عبر الفراغ بشكل لا تستطيعه السنّ المفقودة وحدها. ويختلف مقدار التحضير اللازم لتلك الأسنان الداعمة باختلاف التصميم المستخدم: فالجسر التقليدي يُعيد تشكيل السنّين الداعمتين ويغطيهما بتاج لتثبيت السنّ الجديدة بإحكام، في حين تُلصَق بعض التصاميم الأخرى بالجزء الخلفي من السنّ المجاورة بدلًا من تغطيتها بالكامل، وتتطلّب تحضيرًا أقل بكثير. ويعتمد اختيار الأسلوب المناسب على صحة الأسنان المجاورة وموضعها وحالتها القائمة، وهو أمر يُقيَّم بشكل فردي وليس افتراضيًا. وحين تكون عدة أسنان مفقودة، أو حين لا تشكّل الأسنان المجاورة أساسًا مناسبًا، قد يُنظر بدلًا من ذلك في بديل مدعوم بزرعة.' },

        { type: 'heading', level: 2, id: 'dentures', text: 'أطقم الأسنان' },
        { type: 'paragraph', text: 'طقم الأسنان جهاز متحرك يعوّض الأسنان المفقودة، ويأتي في شكلين رئيسيين. فالطقم الجزئي يعوّض سنّاً مفقودة أو أكثر بينما تبقى بعض الأسنان الطبيعية في مكانها، ويُثبَّت غالبًا بمشابك دقيقة تتشبث بتلك الأسنان. أما الطقم الكامل فيعوّض مجموعة كاملة من أسنان الفك العلوي أو السفلي حين لا يتبقى أي منها. وخلافًا للتاج أو الجسر، لا يُثبَّت طقم الأسنان بشكل دائم في الفم — بل صُمِّم ليُخلع للتنظيف، وعادةً أثناء الليل.' },
        { type: 'paragraph', text: 'والتأقلم مع طقم أسنان جديد يستغرق وقتًا، وتختلف مدة هذا التأقلم من شخص لآخر ولا تسير وفق جدول زمني ثابت. وقد يبدو الطقم كبيرًا وملحوظًا داخل الفم في البداية، وقد يختلف الإحساس أثناء الكلام والأكل لبعض الوقت، خصوصًا مع طقم كامل يعوّض فكًا بأكمله. والبدء بأطعمة طرية، وتقطيع الطعام إلى قطع صغيرة، والمضغ بالتساوي على جانبي الفم، يساعد عادةً في هذه المرحلة أثناء تأقلم الفم واللسان معه. كما يُعدّ التنظيف اليومي، إلى جانب خلع الطقم ليلًا لإراحة اللثة، جزءًا معتادًا من العناية المستمرة به.' },

        { type: 'heading', level: 2, id: 'comparing-the-options', text: 'مقارنة الخيارات' },
        { type: 'paragraph', text: 'بعبارة مبسّطة، غالبًا ما يكمن الفرق العملي بين هذه الخيارات في ما إذا كانت تبقى في الفم بشكل دائم أو يمكن خلعها، وفي عدد الأسنان المعنيّة:' },
        { type: 'table', headers: ['الخيار', 'يُستخدم عادةً من أجل', 'ثابت أم متحرك'], rows: [
          ['التاج', 'ترميم سنّ واحدة تالفة أو ضعيفة', 'ثابت'],
          ['الجسر', 'تعويض سنّ مفقودة أو أكثر بدعم مخطَّط من الأسنان المجاورة', 'ثابت'],
          ['طقم الأسنان', 'تعويض سنّ مفقودة أو أكثر، أو فك كامل، بحسب النوع', 'متحرك'],
        ] },
        { type: 'paragraph', text: 'هذا مجرد نقطة انطلاق للتوجيه العام، وليس توصية علاجية. فحالة الأسنان المتبقية، وصحة اللثة والعظم الداعم، وطريقة عمل العضّ يوميًا، وما يهم المريض من حيث المظهر والراحة، كلها عوامل تدخل في القرار الفعلي، الذي يُتَّخذ بشكل فردي وليس بالاستناد إلى جدول وحده. كما أن هذه الخيارات ليست دائمًا قرارًا نهائيًا لمرة واحدة؛ فمع تغيّر الفم بمرور الوقت، لا تمنع خطة مبنية على جسر أو طقم أسنان اليوم من اتباع نهج مختلف لاحقًا، وهذه المرونة جزء مما يأخذه التقييم السليم بعين الاعتبار.' },
        { type: 'callout', text: 'لا يوجد ترميم واحد يناسب الجميع؛ فالخيار المناسب يعتمد على حالة الفم، وما يحتاج إلى ترميم أو تعويض، وأولويات المريض نفسه.' },

        { type: 'heading', level: 2, id: 'where-implants-can-fit-in', text: 'أين تندرج الزراعة ضمن هذه الخيارات' },
        { type: 'paragraph', text: [
          'تستحق الزراعة أن تُؤخَذ بعين الاعتبار عند الموازنة بين الجسور وأطقم الأسنان تحديدًا. فعلاج الزراعة يمكن أن يوفّر دعمًا لسنّ بديلة دون الاعتماد على الأسنان المجاورة للدعم، ويمكن أيضًا، بحسب الحالة، أن يُستخدم لدعم جسر أو نوع معيّن من أطقم الأسنان بثبات أكبر. ومدى ملاءمة الزراعة يعتمد على عوامل فردية، منها صحة اللثة وكمية العظم الداعم، لذا فهي ليست الخيار الصحيح تلقائيًا هي الأخرى — بل هي ببساطة مسار آخر يستحق مناقشته إلى جانب الجسر أو طقم الأسنان، لا ترقية عامة على أي منهما. ويتوفر شرح أوفى لما يتضمنه علاج الزراعة في دليلنا حول ',
          { text: 'ما يمكن توقعه من علاج زراعة الأسنان', href: '/blog/what-to-expect-from-dental-implant-treatment' },
          '، وعلى ',
          { text: 'صفحة زراعة الأسنان', href: '/dental-implants' },
          ' لدينا.',
        ] },

        { type: 'heading', level: 2, id: 'living-with-your-restoration-long-term', text: 'العناية بترميمك على المدى الطويل' },
        { type: 'paragraph', text: 'أيًا كان الخيار المُختار، تعتمد الراحة ومتانة النتيجة بمرور الوقت على أساسيات مشتركة: نظافة فموية منتظمة، وعناية مناسبة بالترميم نفسه، وزيارات متابعة دورية للتحقق من ملاءمته وحالته. ويمكن عادةً العناية بالتاج أو الجسر بتنظيف منتظم بالفرشاة وتنظيف مناسب بين الأسنان، مع توجيه من طبيبك أو أخصائي صحة الأسنان حول كيفية التنظيف حول الترميم تحديدًا. أما طقم الأسنان فيحتاج إلى روتين تنظيف يومي خاص به وفحوصات دورية، إذ يمكن أن يتغيّر شكل الفم واللثة تدريجيًا بمرور الوقت، ما قد يؤثر في مدى استمرار ملاءمة الطقم. وليس أي من ذلك إجراءً لمرة واحدة — فالعناية المستمرة جزء من الخطة منذ البداية، أيًا كان الخيار المناسب لك.' },
      ],
      faqs: [
        { question: 'كيف أعرف الخيار المناسب لي؟', answer: 'يُحدَّد ذلك بالتشارك مع طبيبك بعد تقييم أسنانك المتبقية ولثتك والعظم الداعم، إلى جانب أولوياتك الخاصة — وليس من مقارنة عامة كهذه.' },
        { question: 'هل تحتاج هذه الترميمات إلى عناية خاصة؟', answer: 'الأساسيات متشابهة — نظافة فموية منتظمة وزيارات دورية للفحص — لكن طقم الأسنان يحتاج أيضًا إلى روتين تنظيف يومي خاص به وخلعه ليلًا، وهو ما لا يحتاجه التاج أو الجسر.' },
        { question: 'هل يكون طقم الأسنان متحركًا دائمًا؟', answer: 'الطقم التقليدي مصمَّم ليكون متحركًا. وقد يُعرَض على بعض المرضى بدلًا من ذلك طقم مدعوم بزرعات، وهو جهاز مختلف وأكثر ثباتًا يُبنى على الزرعات، وليس مجرد طقم عادي يُترَك في مكانه.' },
        { question: 'هل يجب دائمًا بَرْد الأسنان المجاورة للجسر؟', answer: 'ليس بالقدر نفسه في كل الحالات. فالجسر التقليدي يتضمن إعادة تشكيل الأسنان الداعمة وتغطيتها بتاج، بينما تحتاج بعض تصاميم الجسور الأخرى إلى تحضير أقل بكثير. ويعتمد الأسلوب المناسب على حالة تلك الأسنان.' },
        { question: 'هل يمكن استخدام زرعة بدلًا من جسر أو طقم أسنان؟', answer: 'في بعض الحالات، نعم. يمكن للزرعة أن تدعم سنّاً بديلة دون الاعتماد على الأسنان المجاورة، وقد تدعم أحيانًا جسرًا أو طقم أسنان أيضًا — إلا أن مدى ملاءمتها يعتمد على عوامل فردية مثل صحة اللثة والعظم.' },
        { question: 'هل يؤثر مرض اللثة في الخيار المتاح لي؟', answer: 'يمكن ذلك. فصحة اللثة والأنسجة الداعمة جزء مما يحدد الخيارات الترميمية المناسبة وكيفية التخطيط لها، لذا تُقيَّم صحة اللثة كجزء من خطة العلاج الشاملة.' },
      ],
      references: [
        {
          title: 'Crowns — Leeds Teaching Hospitals NHS Trust',
          url: 'https://www.leedsth.nhs.uk/patients/resources/crowns/',
        },
        {
          title: 'Bridges — Leeds Teaching Hospitals NHS Trust',
          url: 'https://www.leedsth.nhs.uk/patients/resources/bridges/',
        },
        {
          title: 'Removable Partial Dentures — Leeds Teaching Hospitals NHS Trust',
          url: 'https://www.leedsth.nhs.uk/patients/resources/removable-partial-dentures/',
        },
        {
          title: 'Dentures — NHS',
          url: 'https://www.nhs.uk/tests-and-treatments/dentures/',
        },
      ],
    },
  },
  {
    slug: 'understanding-root-canal-treatment',
    title: 'Understanding Root Canal Treatment',
    dek: 'A clear, clinically grounded explanation of what root canal treatment involves, why it may be needed, and what to expect before and after treatment.',
    category: 'endodontics',
    publishedAt: '2026-08-16',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Root canal treatment carries a reputation that rarely matches the reality of the procedure itself — much of what people expect comes from stories rather than experience. Understanding what actually happens inside the tooth, and what treatment genuinely involves, is a far more useful starting point than the reputation alone, particularly if you've just been told you may need it. This isn't a promise that treatment feels like nothing; it's an honest account of what to expect, so any decision ahead of you is based on facts rather than fear." },

      { type: 'heading', level: 2, id: 'whats-happening-inside-the-tooth', text: "What's Happening Inside the Tooth" },
      { type: 'paragraph', text: "Inside a tooth is the pulp — soft tissue that contains the nerves and blood vessels supplying the tooth. Usually, this tissue does its job quietly and without any attention. It can become inflamed or infected for several reasons: decay that has reached deep enough to affect it, a crack or other injury to the tooth, or, in some cases, gum disease affecting the tissues that support it. Once the pulp is significantly affected, it generally can't heal on its own, and leaving it untreated allows the underlying problem to continue rather than resolve by itself. Root canal treatment aims to treat that affected tissue directly rather than remove the tooth altogether, since keeping a natural tooth in place generally supports how it looks, feels, and functions alongside the rest of your teeth. The goal is to retain your natural tooth where that's clinically suitable — but it isn't a guarantee that every affected tooth can be saved, and suitability is something your dentist assesses individually rather than assumes." },

      { type: 'heading', level: 2, id: 'signs-worth-discussing-with-your-dentist', text: 'Signs Worth Discussing With Your Dentist' },
      { type: 'paragraph', text: "A number of signs are worth raising with your dentist, including persistent pain in or around a tooth, pain that comes on its own without an obvious trigger, discomfort when biting or chewing, and sensitivity to hot or cold that lingers well after the food or drink is gone. Swelling or tenderness near a tooth, or in some cases a small abscess, are also worth a prompt conversation, and how noticeable any of these signs are can vary from mild to more pronounced." },
      { type: 'paragraph', text: "None of these signs diagnoses the problem on their own, and it's worth knowing that pain settling down doesn't necessarily mean the underlying problem has resolved — the pulp can stop responding to pain while the issue affecting it continues to develop. For that reason, diagnosis relies on a proper clinical assessment rather than symptoms alone: your dentist will consider your history, examine the tooth and surrounding tissues, and use imaging where it's clinically useful, rather than relying on any single test in every case. This is a general picture only, not a checklist — the same signs can point to different problems, and only an in-person assessment can tell you what's actually happening." },

      { type: 'heading', level: 2, id: 'what-treatment-involves', text: 'What Treatment Involves' },
      { type: 'paragraph', text: "Root canal treatment follows a broadly consistent sequence, though the details vary by tooth and case. Local anaesthetic is used to numb the area first, since the aim throughout is to keep treatment as comfortable as possible — individual experience still varies, and it's worth discussing what to expect with your dentist beforehand. Once the area is numb, your dentist accesses the inside of the tooth and removes the affected pulp. The root canal system — the fine channels running through the root — is then cleaned and disinfected to remove the affected tissue and reduce bacterial contamination, since bacteria can be present well beyond what's visible to the eye. Where the canals are especially narrow or curved, this stage can reasonably take longer to complete carefully. Once cleaning is complete, the canals are filled and sealed to help reduce the risk of reinfection." },
      { type: 'paragraph', text: 'Depending on the tooth and the complexity of the case, this may be completed in a single visit or may take more than one appointment, with a temporary filling protecting the tooth in between while a more definitive restoration is planned.' },

      { type: 'heading', level: 2, id: 'root-canal-treatment-or-extraction', text: 'Root Canal Treatment or Extraction?' },
      { type: 'paragraph', text: [
        "Root canal treatment and extraction sit at different ends of the same decision: one aims to keep your natural tooth, the other removes it. Neither is automatically the better choice — which is appropriate depends on whether the tooth can be predictably restored, taking into account how much natural structure remains, the anatomy of the root canals themselves, and any previous treatment the tooth has already had. Where a tooth genuinely isn't restorable, extraction may be the more realistic option, and that isn't a failure of treatment; it's simply what the individual tooth allows given its own condition. Your dentist will talk through that reasoning with you rather than leaving you to guess which route is right. If a tooth is extracted, replacing it becomes its own separate decision, with several restorative routes to consider, covered in more detail in ",
        { text: 'our guide to restorative options', href: '/blog/crowns-bridges-and-dentures-explained' },
        ".",
      ] },

      { type: 'heading', level: 2, id: 'after-treatment', text: 'After Treatment' },
      { type: 'paragraph', text: "It's common for a root-treated tooth to feel tender for a few days afterward, and this generally settles on its own, though how long it takes varies from person to person and can occasionally take a little longer. Your dentist will let you know what to expect for your specific case, and when discomfort would be worth a follow-up call rather than simply waiting it out." },
      { type: 'paragraph', text: [
        "Where a temporary restoration has been placed, it's there to protect the tooth until the definitive one is ready, and your dentist will let you know when the tooth is ready to be used normally rather than assuming this straightaway — function generally returns gradually as healing progresses, rather than all at once. For a tooth that was significantly affected, a crown or other definitive restoration is often planned afterward to protect it from fracturing under everyday use — though this isn't automatic for every case, and depends on how much natural tooth structure remains. Ongoing review is part of the plan, so any concerns can be picked up early. A fuller look at how we approach this treatment is available on ",
        { text: 'our root canal treatment page', href: '/root-canal-treatment' },
        ".",
      ] },
    ],
    faqs: [
      { question: 'Does root canal treatment hurt?', answer: "Local anaesthetic is normally used to numb the area, and the aim throughout is to keep treatment as comfortable as possible. Individual experience varies, and it's common for the tooth to feel a little tender for a few days afterward as it settles." },
      { question: 'Can any tooth be treated this way?', answer: 'Not automatically. Whether a tooth is suitable depends on factors like how much natural structure remains, the shape of the root canals, and any previous treatment — this is assessed individually rather than assumed for every tooth.' },
      { question: 'Is root canal treatment better than extraction?', answer: "Not necessarily. Root canal treatment aims to keep your natural tooth, while extraction removes it — which is more appropriate depends on whether the tooth can be predictably restored, not on one option being universally better." },
      { question: 'Will I need a crown afterward?', answer: "Not in every case. A crown or other definitive restoration is often recommended for a tooth that was significantly affected, since it can help protect it from fracturing — but what's needed depends on the tooth and how much natural structure is left." },
      { question: 'Can I still need root canal treatment if the pain has stopped?', answer: 'Yes, this can happen. Pain settling doesn\'t always mean the underlying problem has resolved, which is one reason diagnosis relies on a proper clinical assessment rather than symptoms alone.' },
    ],
    references: [
      {
        title: 'Root canal treatment — NHS',
        url: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/',
      },
      {
        title: 'Root canal treatment: How it is performed — NHS',
        url: 'https://www.nhs.uk/conditions/root-canal-treatment/what-happens/',
      },
      {
        title: 'Understanding your Endodontic (Root Canal) Treatment — Leeds Teaching Hospitals NHS Trust',
        url: 'https://www.leedsth.nhs.uk/patients/resources/understanding-your-endodontic-root-canal-treatment/',
      },
      {
        title: 'Abscessed Tooth — Cleveland Clinic',
        url: 'https://my.clevelandclinic.org/health/diseases/10943-abscessed-tooth',
      },
    ],
    arContent: {
      title: 'فهم علاج العصب',
      dek: 'شرح واضح ومبني على أساس سريري لما يتضمنه علاج العصب، ولماذا قد يُحتاج إليه، وما يمكن توقعه قبل العلاج وبعده.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: 'يحمل علاج العصب سمعة نادرًا ما تعكس واقع الإجراء نفسه — فكثير مما يتوقعه الناس ينبع من قصص متناقلة أكثر مما ينبع من تجربة حقيقية. وفهم ما يحدث فعليًا داخل السن، وما يتضمنه العلاج فعلًا، نقطة انطلاق أكثر فائدة من مجرد الاعتماد على تلك السمعة، خصوصًا إذا كنت قد أُخبرت للتو بأنك قد تحتاج إليه. وهذا ليس وعدًا بأن العلاج لن يُشعِرك بأي شيء؛ بل هو عرض صادق لما يمكن توقعه، بحيث يكون أي قرار أمامك مبنيًا على حقائق لا على خوف.' },

        { type: 'heading', level: 2, id: 'whats-happening-inside-the-tooth', text: 'ما الذي يحدث داخل السن' },
        { type: 'paragraph', text: 'في داخل السن يوجد اللُّب — النسيج الرخو الذي يحتوي على الأعصاب والأوعية الدموية التي تغذي السن. وفي المعتاد، يقوم هذا النسيج بوظيفته بهدوء دون أن يلفت الانتباه. وقد يلتهب أو يُصاب بعدوى لأسباب عدة: تسوّس وصل عمقه إلى درجة تؤثر فيه، أو كسر أو إصابة أخرى للسن، أو في بعض الحالات، مرض في اللثة يؤثر في الأنسجة الداعمة للسن. وحين يتأثر اللُّب بشكل كبير، فإنه غالبًا لا يستطيع الشفاء من تلقاء نفسه، وترك المشكلة دون علاج يسمح لها بالاستمرار بدلًا من أن تُحل من تلقاء نفسها. ويهدف علاج العصب إلى معالجة ذلك النسيج المتأثر مباشرة بدلًا من خلع السن بالكامل، إذ إن الحفاظ على السن الطبيعية يدعم عمومًا شكلها وإحساسها ووظيفتها إلى جانب بقية أسنانك. والهدف هو الحفاظ على سنّك الطبيعية حيثما كان ذلك مناسبًا سريريًا — لكنه ليس ضمانًا بأن كل سن متأثرة يمكن إنقاذها، ومدى الملاءمة أمر يُقيِّمه طبيبك بشكل فردي لا افتراضي.' },

        { type: 'heading', level: 2, id: 'signs-worth-discussing-with-your-dentist', text: 'علامات تستحق مناقشتها مع طبيب أسنانك' },
        { type: 'paragraph', text: 'هناك عدد من العلامات يستحق طرحها على طبيب أسنانك، منها الألم المستمر في السن أو حولها، والألم الذي يظهر من تلقاء نفسه دون محفز واضح، والانزعاج عند العض أو المضغ، والحساسية تجاه الساخن أو البارد التي تستمر لفترة بعد زوال الطعام أو الشراب. كما يستحق أي تورم أو إيلام قرب السن، أو في بعض الحالات خراج صغير، محادثة سريعة مع طبيبك، وقد تتفاوت وضوح هذه العلامات من خفيفة إلى أكثر وضوحًا.' },
        { type: 'paragraph', text: 'ولا تُشخِّص أي من هذه العلامات المشكلة بمفردها، ومن المفيد معرفة أن هدوء الألم لا يعني بالضرورة أن المشكلة الكامنة قد زالت — إذ قد يتوقف اللُّب عن الاستجابة للألم بينما تستمر المشكلة المؤثرة فيه في التطور. ولهذا السبب، يعتمد التشخيص على تقييم سريري مناسب لا على الأعراض وحدها: إذ يأخذ طبيبك تاريخك المرضي بعين الاعتبار، ويفحص السن والأنسجة المحيطة بها، ويستخدم التصوير حيثما كان ذلك مفيدًا سريريًا، دون الاعتماد على اختبار واحد بعينه في كل الحالات. وهذه صورة عامة فقط، لا قائمة للتشخيص الذاتي — فقد تشير العلامات ذاتها إلى مشكلات مختلفة، ولا يمكن إلا لتقييم حضوري أن يوضح ما يحدث فعليًا.' },

        { type: 'heading', level: 2, id: 'what-treatment-involves', text: 'ما الذي يتضمنه العلاج' },
        { type: 'paragraph', text: 'يتّبع علاج العصب تسلسلًا عامًا متسقًا إلى حدٍّ كبير، وإن كانت التفاصيل تختلف باختلاف السن والحالة. يُستخدم التخدير الموضعي أولًا لتخدير المنطقة، إذ يظل الهدف طوال العلاج هو الحفاظ على أكبر قدر ممكن من الراحة — وتختلف تجربة كل شخص، ويُستحسن مناقشة ما يمكن توقعه مع طبيبك مسبقًا. وبعد أن تُخدَّر المنطقة، يصل طبيبك إلى داخل السن ويزيل اللُّب المتأثر. بعد ذلك، يُنظَّف نظام قنوات الجذر — القنوات الدقيقة الممتدة داخل الجذر — ويُطهَّر لإزالة النسيج المتأثر والحدّ من التلوث البكتيري، إذ يمكن أن تتواجد البكتيريا في مناطق أبعد مما تراه العين. وحيثما كانت القنوات ضيقة أو منحنية بشكل خاص، قد تستغرق هذه المرحلة وقتًا أطول لإتمامها بعناية. وبمجرد اكتمال التنظيف، تُحشى القنوات وتُغلَق للمساعدة على تقليل خطر العدوى مجددًا.' },
        { type: 'paragraph', text: 'وبحسب السن ومدى تعقيد الحالة، قد يُنجَز ذلك في زيارة واحدة أو قد يتطلب أكثر من موعد، مع حشوة مؤقتة تحمي السن بين المواعيد ريثما يُخطَّط لترميم نهائي أكثر ثباتًا.' },

        { type: 'heading', level: 2, id: 'root-canal-treatment-or-extraction', text: 'علاج العصب أم الخلع؟' },
        { type: 'paragraph', text: [
          'يقف علاج العصب والخلع على طرفي القرار نفسه: يهدف أحدهما إلى الحفاظ على سنّك الطبيعية، بينما يزيلها الآخر. وليس أي منهما بالضرورة الخيار الأفضل تلقائيًا — إذ يعتمد ما هو مناسب على ما إذا كان يمكن ترميم السن بشكل يمكن التنبؤ به، مع الأخذ بعين الاعتبار مقدار ما تبقى من بنية السن الطبيعية، وتشريح قنوات الجذر نفسها، وأي علاج سابق خضعت له السن. وحيثما لا يمكن ترميم السن فعليًا، قد يكون الخلع هو الخيار الأكثر واقعية، وهذا لا يعني فشل العلاج؛ بل هو ببساطة ما تسمح به حالة السن نفسها. وسيناقش طبيبك معك هذا المنطق بدلًا من تركك تخمِّن أي المسارين هو الصحيح. وإذا خُلعت السن، يصبح تعويضها قرارًا منفصلًا بحدّ ذاته، مع عدة مسارات ترميمية يمكن النظر فيها، وهو ما نتناوله بتفصيل أكبر في ',
          { text: 'دليلنا حول خيارات الترميم', href: '/blog/crowns-bridges-and-dentures-explained' },
          '.',
        ] },

        { type: 'heading', level: 2, id: 'after-treatment', text: 'بعد العلاج' },
        { type: 'paragraph', text: 'من الشائع أن تشعر السن المعالَجة بالعصب بإيلام لبضعة أيام بعد العلاج، وعادةً ما يهدأ ذلك من تلقاء نفسه، وإن كانت المدة تختلف من شخص لآخر وقد تطول قليلًا في بعض الأحيان. وسيخبرك طبيبك بما يمكن توقعه في حالتك تحديدًا، ومتى يستحق الانزعاج مكالمة متابعة بدلًا من الانتظار وحده.' },
        { type: 'paragraph', text: [
          'وحيثما وُضع ترميم مؤقت، فإن دوره حماية السن إلى حين جاهزية الترميم النهائي، وسيخبرك طبيبك متى تكون السن جاهزة للاستخدام الطبيعي بدلًا من افتراض ذلك مباشرة — إذ تعود الوظيفة عمومًا تدريجيًا مع تقدّم الشفاء، لا دفعة واحدة. وبالنسبة لسن تأثرت بشكل كبير، غالبًا ما يُخطَّط لتاج أو ترميم نهائي آخر بعد ذلك لحمايتها من الكسر أثناء الاستخدام اليومي — وإن كان هذا ليس تلقائيًا في كل الحالات، إذ يعتمد على مقدار ما تبقى من بنية السن الطبيعية. والمتابعة الدورية جزء من الخطة، بحيث يمكن رصد أي مخاوف مبكرًا. ويمكنك الاطلاع على نهجنا في هذا العلاج بمزيد من التفصيل على ',
          { text: 'صفحة علاج العصب لدينا', href: '/root-canal-treatment' },
          '.',
        ] },
      ],
      faqs: [
        { question: 'هل يسبب علاج العصب ألمًا؟', answer: 'يُستخدم التخدير الموضعي عادةً لتخدير المنطقة، ويظل الهدف طوال العلاج هو الحفاظ على أكبر قدر ممكن من الراحة. وتختلف تجربة كل شخص، ومن الشائع أن تشعر السن بإيلام خفيف لبضعة أيام بعد العلاج ريثما تهدأ.' },
        { question: 'هل يمكن علاج أي سن بهذه الطريقة؟', answer: 'ليس تلقائيًا. تعتمد مدى ملاءمة السن للعلاج على عوامل مثل مقدار ما تبقى من بنيتها الطبيعية، وشكل قنوات الجذر، وأي علاج سابق خضعت له — ويُقيَّم ذلك بشكل فردي لا افتراضي لكل سن.' },
        { question: 'هل علاج العصب أفضل من الخلع؟', answer: 'ليس بالضرورة. يهدف علاج العصب إلى الحفاظ على سنّك الطبيعية، بينما يزيلها الخلع — ويعتمد الخيار الأنسب على ما إذا كان يمكن ترميم السن بشكل يمكن التنبؤ به، لا على تفوق أحد الخيارين تلقائيًا.' },
        { question: 'هل سأحتاج إلى تاج بعد العلاج؟', answer: 'ليس في كل الحالات. غالبًا ما يُوصى بتاج أو ترميم نهائي آخر لسن تأثرت بشكل كبير، إذ يساعد ذلك على حمايتها من الكسر — لكن ما هو مطلوب يعتمد على السن نفسها ومقدار ما تبقى من بنيتها الطبيعية.' },
        { question: 'هل ما زلت بحاجة إلى علاج العصب حتى لو توقف الألم؟', answer: 'نعم، هذا وارد. فهدوء الألم لا يعني دائمًا أن المشكلة الكامنة قد زالت، وهذا أحد أسباب اعتماد التشخيص على تقييم سريري مناسب لا على الأعراض وحدها.' },
      ],
      references: [
        {
          title: 'Root canal treatment — NHS',
          url: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/',
        },
        {
          title: 'Root canal treatment: How it is performed — NHS',
          url: 'https://www.nhs.uk/conditions/root-canal-treatment/what-happens/',
        },
        {
          title: 'Understanding your Endodontic (Root Canal) Treatment — Leeds Teaching Hospitals NHS Trust',
          url: 'https://www.leedsth.nhs.uk/patients/resources/understanding-your-endodontic-root-canal-treatment/',
        },
        {
          title: 'Abscessed Tooth — Cleveland Clinic',
          url: 'https://my.clevelandclinic.org/health/diseases/10943-abscessed-tooth',
        },
      ],
    },
  },
  {
    slug: 'gum-health-what-you-should-know',
    title: 'Gum Health: What You Should Know',
    dek: 'A clear explanation of gum health — the difference between gingivitis and periodontitis, which signs are worth discussing with your dentist, and what ongoing periodontal care usually involves.',
    category: 'periodontal-care',
    publishedAt: '2026-08-14',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Healthy gums do more work than they tend to get credit for — they support comfortable biting and chewing, shape how a smile looks, and keep each tooth stable in place. Gum problems don't arrive as a single condition either; they exist on a spectrum, from common, everyday inflammation to more established periodontal disease. Understanding where that distinction lies, and which signs are worth mentioning to your dentist, is more useful than waiting until something feels obviously wrong, whether you've noticed something yourself or are simply keen to look after your gums well." },

      { type: 'heading', level: 2, id: 'gingivitis-and-periodontitis-in-plain-terms', text: 'Gingivitis and Periodontitis, in Plain Terms' },
      { type: 'paragraph', text: "Gingivitis is inflammation limited to the gums themselves, and it's commonly associated with plaque building up along the gumline. Gums affected this way can become red, swollen, or tender, and may bleed more easily than usual, particularly when brushing. With consistent plaque control and appropriate care, gingivitis is generally reversible." },
      { type: 'paragraph', text: "Periodontitis is a different stage — one that involves the deeper tissues supporting the teeth, including the structures and bone beneath the gumline. Where periodontitis has developed, it can lead to a loss of that supporting tissue and bone, and in more established cases, teeth can become loose or shift position. This loss of support isn't something home care alone can reverse once it has happened, though appropriate treatment can manage the condition and help stabilise it going forward, slowing or halting further loss rather than undoing what's already occurred." },
      { type: 'paragraph', text: "It's worth being clear that gingivitis doesn't automatically progress to periodontitis, and not everyone with gum inflammation goes on to develop the more advanced condition — but the distinction is exactly why a gum concern is worth having assessed rather than judged from home, since the two stages call for genuinely different responses." },

      { type: 'heading', level: 2, id: 'signs-worth-discussing-with-your-dentist', text: 'Signs Worth Discussing With Your Dentist' },
      { type: 'paragraph', text: 'A number of signs are worth mentioning to your dentist: bleeding when you brush, gums that look red, swollen, or feel sore, persistent bad breath, gums that appear to be receding or shrinking back from the tooth, teeth that feel loose or have started to shift, and, less commonly, pus or a visible gum abscess near the gumline — the latter is worth a prompt conversation rather than waiting for your next routine visit.' },
      { type: 'paragraph', text: "None of these signs tells you on their own how advanced a problem is, and they shouldn't be treated as a checklist for self-diagnosis — that's what a clinical assessment is genuinely for. It's also worth knowing that the extent of a periodontal problem is not always obvious from symptoms alone, which is part of why regular professional review matters even when nothing feels wrong day to day." },
      { type: 'paragraph', text: "Bleeding in particular is worth mentioning rather than something to simply accept as normal. It doesn't automatically mean established gum disease, but it is a signal worth acting on — and the right response is to keep the area gently and thoroughly clean, with regular brushing and interdental cleaning, rather than to avoid it or brush harder in response." },

      { type: 'heading', level: 2, id: 'what-helps-at-home', text: 'What Helps at Home' },
      { type: 'paragraph', text: "Gum inflammation is closely linked to plaque — the soft, sticky film of bacteria that builds up on teeth and along the gumline if it isn't disrupted regularly. Three practical foundations help: brushing your teeth thoroughly and gently, cleaning between your teeth daily with floss or interdental brushes, and attending regular professional reviews. Cleaning between the teeth matters because a toothbrush alone can't reach the tight spaces where plaque tends to accumulate, particularly along the gumline." },
      { type: 'paragraph', text: "General NHS guidance suggests brushing twice a day with a fluoride toothpaste, though your own dentist may tailor this to your specific needs and any areas that need particular attention. Smoking is also a relevant factor worth being aware of, since it's recognised as something that can affect gum health, and stopping is generally encouraged as part of supporting healthier gums over time." },

      { type: 'heading', level: 2, id: 'what-professional-care-involves', text: 'What Professional Care Involves' },
      { type: 'paragraph', text: "A periodontal assessment generally looks at the health of your gums as a whole, rather than relying on how things feel day to day. This may include examining the gums directly, checking for bleeding, measuring the depth of the space between the gum and tooth where appropriate, assessing whether any teeth feel loose, and considering the condition of the supporting bone — sometimes with the help of dental imaging where it's clinically useful, rather than as a routine step for everyone. The findings shape what, if anything, is recommended next." },
      { type: 'paragraph', text: "Where treatment is needed, it's often more thorough than a routine clean — sometimes described as a deep clean, this involves cleaning more thoroughly beneath the gumline than a standard professional clean, and forms part of non-surgical periodontal treatment where it's clinically indicated. Not everyone needs this; what's recommended depends entirely on the condition of your own gums, and your dentist will explain the reasoning rather than assuming it applies by default." },
      { type: 'paragraph', text: "Ongoing periodontal care afterward is generally about review rather than a single fix: monitoring how your gums are responding, reinforcing home care, removing any new deposits where needed, and reassessing based on your own individual risk and how you're responding to treatment, rather than following one fixed schedule applied to every patient in the same way." },

      { type: 'heading', level: 2, id: 'gum-health-and-the-rest-of-your-care', text: 'Gum Health and the Rest of Your Care' },
      { type: 'paragraph', text: [
        "Healthy gums and the tissue and bone beneath them are part of what keeps teeth stable over time, which is one reason gum health is checked at every routine visit rather than only when something feels wrong. It's also relevant beyond your natural teeth: the same supporting tissues are one of the things considered when planning treatments such as ",
        { text: 'dental implants', href: '/dental-implants' },
        ' or other restorative work. If gum treatment is ever part of your own plan, you can find more detail on ',
        { text: 'our gum treatment page', href: '/gum-treatment' },
        '.',
      ] },
    ],
    faqs: [
      { question: 'How often should gum health be checked?', answer: "There's no single schedule that applies to everyone. How often you should be checked depends on your individual history, your level of periodontal risk, the current health of your gums, and your dentist's professional advice for your specific case." },
      { question: 'Can gum health affect the rest of my mouth?', answer: 'Periodontal disease can affect the tissues that support your teeth, and in more established disease, that can affect tooth stability. This is also part of why gum health is considered when planning restorative or implant treatment, since the condition of the surrounding gum and bone is one of the things taken into account.' },
      { question: "What's the difference between gingivitis and periodontitis?", answer: "Gingivitis is inflammation limited to the gums themselves, and it's generally reversible with appropriate plaque control and care. Periodontitis involves the deeper tissues and bone supporting the teeth, and while the loss of support it causes can't simply be reversed, it can be managed and stabilised with appropriate treatment." },
      { question: 'Can gum disease be reversed?', answer: "Gingivitis generally is, with consistent plaque control and appropriate care. Established periodontitis is different — the supporting tissue it affects can't be fully restored through home care alone, but appropriate periodontal treatment can control the condition and help stabilise it, rather than reverse what's already been lost." },
      { question: 'Is it normal for my gums to bleed?', answer: "Bleeding gums are not something to simply ignore. It doesn't automatically mean you have gum disease, but it can be a sign of gum inflammation and is worth mentioning to your dentist rather than accepting as normal." },
      { question: 'Can gum disease cause tooth loss?', answer: "In more advanced, established disease, periodontitis can damage the tissue and bone supporting a tooth, and teeth can become loose and may eventually be lost. This isn't the outcome for everyone with gum disease, which is why earlier assessment and appropriate care matter." },
    ],
    references: [
      {
        title: 'Gum disease — NHS',
        url: 'https://www.nhs.uk/conditions/gum-disease/',
      },
      {
        title: 'How to keep your teeth clean — NHS',
        url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/',
      },
      {
        title: 'Gum (Periodontal) Disease — Scottish Dental (NHS Education for Scotland)',
        url: 'https://www.scottishdental.nhs.scot/library-dental-topics/gum-periodontal-disease/',
      },
      {
        title: 'Gingivitis: Reversing and preventing early gum disease — Harvard Health Publishing',
        url: 'https://www.health.harvard.edu/diseases-and-conditions/gingivitis-reversing-and-preventing-early-gum-disease',
      },
    ],
    arContent: {
      title: 'صحة اللثة: ما تحتاج إلى معرفته',
      dek: 'شرح واضح لصحة اللثة — الفرق بين التهاب اللثة والتهاب دواعم السن، والعلامات التي تستحق مناقشتها مع طبيب أسنانك، وما تتضمنه العناية المستمرة باللثة عادةً.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: 'تقوم اللثة السليمة بدور أكبر مما يُقدَّر لها عادةً — فهي تدعم عملية العض والمضغ بارتياح، وتُشكِّل مظهر الابتسامة، وتُحافظ على ثبات كل سنّ في مكانها. كما أن مشكلات اللثة لا تُصنَّف كحالة واحدة؛ فهي تمتد على مدى واسع، من التهاب شائع يومي إلى مرض دواعم أكثر تقدمًا. وفهم موضع هذا الفرق، والعلامات التي تستحق ذكرها لطبيب أسنانك، أكثر فائدة من انتظار ظهور علامة واضحة، سواء لاحظت شيئًا بنفسك أو كنت ببساطة حريصًا على العناية بلثتك.' },

        { type: 'heading', level: 2, id: 'gingivitis-and-periodontitis-in-plain-terms', text: 'التهاب اللثة والتهاب دواعم السن، ببساطة' },
        { type: 'paragraph', text: 'التهاب اللثة هو التهاب يقتصر على اللثة نفسها، ويرتبط غالبًا بتراكم البلاك على طول خط اللثة. وقد تصبح اللثة المتأثرة به حمراء أو متورمة أو حساسة، وقد تنزف بسهولة أكبر من المعتاد، خصوصًا أثناء التنظيف بالفرشاة. ومع التحكم المستمر في البلاك والعناية المناسبة، يكون التهاب اللثة قابلاً للزوال عمومًا.' },
        { type: 'paragraph', text: 'أما التهاب دواعم السن فهو مرحلة مختلفة — تشمل الأنسجة الأعمق الداعمة للأسنان، بما في ذلك التراكيب والعظم الواقعين أسفل خط اللثة. وحين يتطور هذا الالتهاب، يمكن أن يؤدي إلى فقدان في هذا النسيج الداعم والعظم، وفي الحالات الأكثر تقدمًا، قد تصبح الأسنان مهتزّة أو تتغيّر مواضعها. وهذا الفقد في الدعم ليس أمرًا يمكن للعناية المنزلية وحدها عكسه بعد حدوثه، إلا أن العلاج المناسب يمكن أن يضبط الحالة ويساعد على استقرارها لاحقًا، عبر إبطاء أو إيقاف المزيد من الفقد، لا التراجع عمّا حدث بالفعل.' },
        { type: 'paragraph', text: 'ومن المهم توضيح أن التهاب اللثة لا يتطور تلقائيًا إلى التهاب دواعم السن، وأن ليس كل من يعاني من التهاب في اللثة يصل إلى المرحلة الأكثر تقدمًا — لكن هذا الفارق تحديدًا هو ما يجعل أي مشكلة في اللثة تستحق تقييمًا سريريًا بدلًا من الحكم عليها في المنزل، إذ تستدعي كل مرحلة استجابة مختلفة فعليًا.' },

        { type: 'heading', level: 2, id: 'signs-worth-discussing-with-your-dentist', text: 'علامات تستحق مناقشتها مع طبيب أسنانك' },
        { type: 'paragraph', text: 'هناك عدد من العلامات يستحق ذكرها لطبيب أسنانك: النزيف أثناء التنظيف بالفرشاة، لثة تبدو حمراء أو متورمة أو مؤلمة، رائحة فم كريهة ومستمرة، لثة يبدو أنها تنحسر أو تتراجع عن السن، أسنان تشعر بالاهتزاز أو بدأت تتغيّر مواضعها، وفي حالات أقل شيوعًا، صديد أو خراج ظاهر قرب اللثة — وهذه الحالة الأخيرة تستحق محادثة سريعة بدلًا من انتظار الزيارة الدورية القادمة.' },
        { type: 'paragraph', text: 'ولا تُحدِّد أي من هذه العلامات وحدها مدى تقدّم المشكلة، ولا ينبغي التعامل معها كقائمة للتشخيص الذاتي — فهذا ما يُخصَّص له التقييم السريري فعليًا. ومن المفيد أيضًا معرفة أن مدى تقدّم مشكلة دواعم السن لا يكون دائمًا واضحًا من الأعراض وحدها، وهو جزء من سبب أهمية المراجعة المهنية المنتظمة حتى حين لا يبدو أن هناك خطبًا يوميًا.' },
        { type: 'paragraph', text: 'والنزيف تحديدًا يستحق أن يُذكَر بدلًا من قبوله كأمر طبيعي ببساطة. فهو لا يعني تلقائيًا وجود مرض لثة متقدم، لكنه إشارة تستحق التصرف حيالها — والاستجابة الصحيحة هي الحفاظ على نظافة المنطقة برفق وشمولية، عبر التنظيف المنتظم بالفرشاة وبين الأسنان، لا تجنّبها أو التنظيف بقوة أكبر ردًا عليها.' },

        { type: 'heading', level: 2, id: 'what-helps-at-home', text: 'ما الذي يساعد في المنزل' },
        { type: 'paragraph', text: 'يرتبط التهاب اللثة ارتباطًا وثيقًا بالبلاك — الطبقة اللزجة الرقيقة من البكتيريا التي تتراكم على الأسنان وعلى طول خط اللثة إن لم تُزَل بانتظام. وتقوم ثلاثة أمور عملية بمعظم هذا الدور: التنظيف الشامل واللطيف بالفرشاة، وتنظيف ما بين الأسنان يوميًا بخيط الأسنان أو الفرشاة بين الأسنان، والمواظبة على المراجعات المهنية الدورية. ويهم تنظيف ما بين الأسنان لأن فرشاة الأسنان وحدها لا تصل إلى المساحات الضيقة التي يتراكم فيها البلاك غالبًا، وتحديدًا على طول خط اللثة.' },
        { type: 'paragraph', text: 'وتشير الإرشادات العامة الصادرة عن هيئة الصحة الوطنية البريطانية (NHS) إلى تنظيف الأسنان مرتين يوميًا بمعجون يحتوي على الفلورايد، وإن كان طبيبك قد يُكيِّف ذلك وفق احتياجاتك الخاصة وأي مناطق تحتاج عناية إضافية. كما يُعدّ التدخين عاملًا مؤثرًا يستحق الانتباه إليه، إذ يُعرف بتأثيره المحتمل على صحة اللثة، ويُشجَّع الإقلاع عنه عمومًا كجزء من دعم لثة أكثر صحة على المدى الطويل.' },

        { type: 'heading', level: 2, id: 'what-professional-care-involves', text: 'ما تتضمنه العناية المهنية' },
        { type: 'paragraph', text: 'يتناول تقييم دواعم السن عمومًا صحة لثتك ككل، بدلًا من الاعتماد على الإحساس اليومي وحده. وقد يشمل ذلك فحص اللثة مباشرة، والتحقق من وجود نزيف، وقياس عمق المساحة بين اللثة والسن حيثما كان ذلك مناسبًا، وتقييم ما إذا كانت أي سنّ تشعر بالاهتزاز، والنظر في حالة العظم الداعم — أحيانًا بمساعدة التصوير الشعاعي حيثما كان ذلك مفيدًا سريريًا، لا كخطوة روتينية لكل مريض. وتُحدِّد نتائج هذا التقييم ما يُوصى به تاليًا، إن وُجد.' },
        { type: 'paragraph', text: 'وحين يكون العلاج مطلوبًا، غالبًا ما يكون أكثر شمولية من التنظيف الروتيني — وهو ما يُعرف أحيانًا بالتنظيف العميق، ويتضمن تنظيفًا أشمل أسفل خط اللثة مقارنة بالتنظيف المهني المعتاد، ويُشكِّل جزءًا من العلاج غير الجراحي لدواعم السن حيثما كان مناسبًا سريريًا. وليس كل مريض بحاجة إليه؛ إذ تعتمد التوصية كليًا على حالة لثتك أنت، وسيشرح لك طبيبك السبب بدلًا من افتراض أنه ينطبق تلقائيًا.' },
        { type: 'paragraph', text: 'أما العناية المستمرة بدواعم السن فيما بعد فتتمحور عمومًا حول المتابعة لا حلًا واحدًا نهائيًا: مراقبة استجابة لثتك، وتعزيز العناية المنزلية، وإزالة أي ترسبات جديدة عند الحاجة، وإعادة التقييم بناءً على مستوى خطورتك الفردي ومدى استجابتك للعلاج، بدلًا من اتباع جدول واحد ثابت لكل المرضى على حدٍّ سواء.' },

        { type: 'heading', level: 2, id: 'gum-health-and-the-rest-of-your-care', text: 'صحة اللثة وبقية رعايتك' },
        { type: 'paragraph', text: [
          'تُعدّ اللثة السليمة والأنسجة والعظم الواقعين تحتها جزءًا مما يُحافظ على ثبات الأسنان بمرور الوقت، وهو أحد أسباب فحص صحة اللثة في كل زيارة دورية، لا فقط حين يبدو أن هناك خطبًا. كما أن الأمر ذو صلة أيضًا بما يتجاوز أسنانك الطبيعية: فالأنسجة الداعمة ذاتها من الأمور التي تُؤخذ بعين الاعتبار عند التخطيط لعلاجات مثل ',
          { text: 'زراعة الأسنان', href: '/dental-implants' },
          ' أو غيرها من الأعمال الترميمية. وإذا كان علاج اللثة جزءًا من خطتك في أي وقت، يمكنك الاطلاع على مزيد من التفاصيل على ',
          { text: 'صفحة علاج اللثة', href: '/gum-treatment' },
          ' لدينا.',
        ] },
      ],
      faqs: [
        { question: 'كم مرة ينبغي فحص صحة اللثة؟', answer: 'لا يوجد جدول واحد يناسب الجميع. يعتمد ذلك على تاريخك الفردي، ومستوى خطورتك من ناحية دواعم السن، وحالة لثتك الحالية، ونصيحة طبيبك المهنية الخاصة بحالتك.' },
        { question: 'هل يمكن أن تؤثر صحة اللثة في بقية فمي؟', answer: 'يمكن لأمراض دواعم السن أن تؤثر في الأنسجة الداعمة لأسنانك، وفي الحالات الأكثر تقدمًا، قد يؤثر ذلك في ثبات الأسنان. وهذا أيضًا جزء من سبب أخذ صحة اللثة بعين الاعتبار عند التخطيط للعلاج الترميمي أو علاج الزراعة، إذ إن حالة اللثة والعظم المحيطين من الأمور التي تُؤخذ في الحسبان.' },
        { question: 'ما الفرق بين التهاب اللثة والتهاب دواعم السن؟', answer: 'التهاب اللثة هو التهاب يقتصر على اللثة نفسها، وهو قابل للزوال عمومًا مع التحكم المناسب في البلاك والعناية الجيدة. أما التهاب دواعم السن فيشمل الأنسجة والعظم الأعمق الداعمين للأسنان، وفي حين لا يمكن ببساطة عكس ما يسببه من فقدان للدعم، يمكن ضبطه واستقراره بالعلاج المناسب.' },
        { question: 'هل يمكن علاج التهاب اللثة والشفاء منه تمامًا؟', answer: 'التهاب اللثة قابل للزوال عمومًا، مع التحكم المستمر في البلاك والعناية المناسبة. أما التهاب دواعم السن المتقدم فمختلف — إذ لا يمكن للعناية المنزلية وحدها استعادة النسيج الداعم المتأثر بالكامل، لكن العلاج المناسب لدواعم السن يمكن أن يضبط الحالة ويساعد على استقرارها، لا التراجع عمّا فُقد بالفعل.' },
        { question: 'هل من الطبيعي أن تنزف لثتي؟', answer: 'نزيف اللثة ليس أمرًا ينبغي تجاهله ببساطة. فهو لا يعني تلقائيًا إصابتك بمرض لثة، لكنه قد يكون علامة على التهاب فيها، ويستحق ذكره لطبيب أسنانك بدلًا من اعتباره أمرًا طبيعيًا.' },
        { question: 'هل يمكن أن يؤدي مرض اللثة إلى فقدان الأسنان؟', answer: 'في الحالات الأكثر تقدمًا وترسخًا، يمكن لالتهاب دواعم السن أن يُتلف النسيج والعظم الداعمين للسن، وقد تصبح الأسنان مهتزّة وقد تُفقد في النهاية. وهذه ليست النتيجة الحتمية لدى كل من يعاني من مرض في اللثة، وهو ما يجعل التقييم المبكر والعناية المناسبة أمرًا مهمًا.' },
      ],
      references: [
        {
          title: 'Gum disease — NHS',
          url: 'https://www.nhs.uk/conditions/gum-disease/',
        },
        {
          title: 'How to keep your teeth clean — NHS',
          url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/',
        },
        {
          title: 'Gum (Periodontal) Disease — Scottish Dental (NHS Education for Scotland)',
          url: 'https://www.scottishdental.nhs.scot/library-dental-topics/gum-periodontal-disease/',
        },
        {
          title: 'Gingivitis: Reversing and preventing early gum disease — Harvard Health Publishing',
          url: 'https://www.health.harvard.edu/diseases-and-conditions/gingivitis-reversing-and-preventing-early-gum-disease',
        },
      ],
    },
  },
  {
    slug: 'veneers-vs-whitening-choosing-the-right-approach',
    title: 'Veneers vs. Whitening: Choosing the Right Approach',
    dek: 'A clear look at what teeth whitening and veneers can each actually change — and why the right starting point is your own concern, not which treatment sounds more advanced.',
    category: 'cosmetic-dentistry',
    publishedAt: '2026-08-12',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Veneers and teeth whitening are often discussed in the same breath, but they address different aesthetic concerns, and the more useful starting point isn't which treatment sounds more advanced — it's what you actually want to change. Some patients are mainly bothered by shade, others by the shape or proportion of a tooth, and some by both together. Starting from that question, rather than from a treatment name, makes it far easier to have a genuinely useful conversation with your dentist, whatever the eventual answer turns out to be." },

      { type: 'heading', level: 2, id: 'what-whitening-changes', text: 'What Whitening Changes' },
      { type: 'paragraph', text: "Whitening works on the natural colour of your own teeth, lightening it without removing any of the tooth's surface. How predictable the result is depends partly on what's causing the discoloration in the first place: staining that sits on or near the surface — from food, drink, or smoking, for example — tends to respond more predictably than discoloration originating from within the tooth, such as after an injury or from some developmental causes. Which category applies to a given tooth is something your dentist assesses directly, rather than something to judge from the mirror." },
      { type: 'paragraph', text: "One point that's easy to overlook: whitening changes the colour of natural tooth structure, but it doesn't change the colour of existing crowns, fillings, veneers, or similar restorations in the same way. If you have visible restorations in the area you're hoping to brighten, this is worth factoring into the plan and the order treatment happens in, since a shade mismatch can become more noticeable afterward rather than less." },
      { type: 'paragraph', text: [
        "Temporary sensitivity to cold, and occasional gum irritation from the whitening gel, can occur, and treatment is generally planned and supervised by a dental professional given the strength of the products involved. Results aren't indefinite either — teeth can gradually darken again over time, and further whitening is sometimes needed later to maintain the shade you started with. A fuller look at how we approach this is available on our ",
        { text: 'teeth whitening page', href: '/teeth-whitening' },
        ".",
      ] },

      { type: 'heading', level: 2, id: 'what-veneers-change', text: 'What Veneers Change' },
      { type: 'paragraph', text: "A veneer is a thin facing bonded to the front of a tooth, and it can change what's visible in three ways at once: shape, proportion, and colour. This is what distinguishes it from whitening, which primarily affects tooth colour, and it's also why veneers are generally considered a more involved step than whitening rather than simply a stronger version of it." },
      { type: 'paragraph', text: "How much of the tooth's own surface is involved varies by case and by the design of veneer being used — some involve removing a small amount of tooth structure to create room for the veneer, while others are designed to need very little preparation at all. Neither approach is automatically right for every tooth; it depends on what's already there and what the veneer needs to achieve to look and function well. Understanding what's actually planned for your own teeth, and how much of your natural structure that involves, is worth discussing clearly with your dentist before treatment begins, rather than assuming either way." },
      { type: 'paragraph', text: [
        "Once a tooth's surface has been prepared for a veneer, that change doesn't reverse on its own — the tooth will generally need to remain restored rather than simply returning to its original state. Like any restoration, a veneer can chip or become damaged over time, and it may eventually need repair or replacement. None of this changes what the tooth underneath still needs: the same everyday oral hygiene and regular professional review as the rest of your teeth. A fuller look at how we approach this is available on our ",
        { text: 'porcelain veneers page', href: '/porcelain-veneers' },
        ".",
      ] },
      { type: 'paragraph', text: "It's also worth being clear about what veneers don't do: they can sometimes change the appearance of minor irregularities, but they don't move teeth in the way orthodontic treatment does." },

      { type: 'heading', level: 2, id: 'comparing-the-options', text: 'Comparing the Options' },
      { type: 'paragraph', text: 'Set out side by side, the practical differences are easier to see:' },
      { type: 'table', headers: ['Consideration', 'Whitening', 'Veneers'], rows: [
        ['What it changes', 'Shade and brightness of your natural tooth colour', 'Shape, proportion, and colour of the visible tooth surface'],
        ['Effect on tooth structure', 'Does not remove any tooth surface', 'Preparation varies by case — some designs remove a small amount of tooth surface, others very little'],
        ['Often considered when', 'The main concern is colour, and tooth shape is already acceptable', 'The concern extends beyond colour to shape or proportion'],
      ] },
      { type: 'paragraph', text: "This is a starting point for orientation, not a recommendation — the table doesn't tell you which option is right, only how they typically differ. Which approach actually suits you depends on what you're hoping to change, the condition of the tooth or teeth involved, and your own priorities, all of which are worked through individually with your dentist rather than read off a comparison alone. Some patients find, once they've talked it through, that their concern is narrower than they first assumed, or that it spans both columns rather than sitting neatly in one." },

      { type: 'heading', level: 2, id: 'longevity-and-upkeep', text: 'Longevity and Upkeep' },
      { type: 'paragraph', text: 'Whitening and veneers also age differently, and neither is simply "better" on this measure. Whitening\'s effect isn\'t indefinite — NHS guidance suggests it may last around three years where a dentist\'s aftercare advice is followed, after which teeth can gradually darken again and further treatment may be considered. Veneers are a longer-term restoration; properly cared-for crowns and veneers are generally described as lasting around eight to ten years, though this varies by case, material, bite, and how well they\'re looked after. Rather than one option outlasting the other, it\'s more accurate to say they come with different maintenance profiles — periodic top-up treatment for whitening, and long-term care with the possibility of eventual repair or replacement for veneers.' },

      { type: 'heading', level: 2, id: 'if-youre-considering-both', text: "If You're Considering Both" },
      { type: 'paragraph', text: "Where both whitening and veneers are genuinely being considered, whitening is often approached first, before any definitive veneer is made — this allows the veneer's shade to be planned against your own, post-whitening natural tooth colour, rather than the other way around. This is a common planning approach rather than a fixed rule, and there's no universal waiting period between the two; the right sequence depends on the individual case and what's being planned overall for the smile as a whole." },
    ],
    faqs: [
      { question: 'Can whitening and veneers be combined?', answer: "Yes, in some cases they can be part of the same overall plan. Where both are appropriate, whitening is often considered before definitive veneers so the veneer's shade can be matched to your own post-whitening tooth colour — though the right sequence, and whether it's needed at all, depends on your individual case rather than a fixed waiting period." },
      { question: 'Which option lasts longer?', answer: "They're not really comparable in that way. Whitening's effect may last around three years with appropriate aftercare, according to NHS guidance, while properly cared-for veneers are generally described as lasting around eight to ten years — though both figures are approximate and depend on the individual case. Whitening typically needs periodic top-up treatment, while veneers are longer-term but may still need repair or replacement eventually." },
      { question: 'Does whitening work on all types of discoloration?', answer: "Not equally. Staining that sits on or near the tooth's surface tends to respond more predictably than discoloration originating from within the tooth, such as after an injury or from certain developmental causes. Your dentist assesses which applies to your case before recommending whitening." },
      { question: 'Will whitening change the colour of my existing crowns or fillings?', answer: "Not in the same way. Whitening lightens natural tooth structure, but existing crowns, fillings, veneers, and similar restorations generally don't change colour the same way — which is worth factoring into shade planning if you have visible restorations in the area you're hoping to brighten." },
      { question: 'Do veneers always require removing tooth structure?', answer: 'No. How much preparation is needed varies by the veneer design and your individual case — some involve removing a small amount of tooth surface, while others need very little. What\'s actually planned for your own teeth is something to understand clearly before treatment begins.' },
      { question: 'Can veneers fix crooked teeth?', answer: "They can sometimes improve the appearance of minor irregularities, but they don't move teeth into new positions. Genuinely correcting misalignment is what orthodontic treatment is for, not veneers." },
    ],
    references: [
      {
        title: 'Teeth whitening — NHS',
        url: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/',
      },
      {
        title: 'Tooth Whitening Information for Adult Patients — Leeds Teaching Hospitals NHS Trust',
        url: 'https://www.leedsth.nhs.uk/patients/resources/tooth-whitening-information-for-adult-patients/',
      },
      {
        title: 'Dental treatments — NHS',
        url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/',
      },
      {
        title: 'Crowns — Leeds Teaching Hospitals NHS Trust',
        url: 'https://www.leedsth.nhs.uk/patients/resources/crowns/',
      },
    ],
    arContent: {
      title: 'الفينير أم تبييض الأسنان: كيف تحدد النهج المناسب لك',
      dek: 'نظرة واضحة على ما يمكن أن يغيّره كل من تبييض الأسنان والفينير فعليًا — ولماذا نقطة الانطلاق الصحيحة هي ما يشغلك أنت، لا أي العلاجين يبدو أكثر تقدمًا.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: 'كثيرًا ما يُذكَر الفينير وتبييض الأسنان معًا، إلا أنهما يعالجان جانبين جماليين مختلفين، ونقطة الانطلاق الأكثر فائدة ليست أي العلاجين يبدو أكثر تقدمًا — بل ما الذي تريد تغييره فعليًا. فبعض المرضى يشغلهم لون الأسنان أساسًا، وبعضهم شكل السن أو تناسبها، وبعضهم كلا الأمرين معًا. والانطلاق من هذا السؤال، لا من اسم علاج بعينه، يجعل الحديث مع طبيب أسنانك أكثر فائدة بكثير، أيًا كانت الإجابة في النهاية.' },

        { type: 'heading', level: 2, id: 'what-whitening-changes', text: 'ما الذي يغيّره تبييض الأسنان' },
        { type: 'paragraph', text: 'يعمل التبييض على اللون الطبيعي لأسنانك، فيُفتّحه دون إزالة أي جزء من سطح السن. ومدى القدرة على التنبؤ بالنتيجة يعتمد جزئيًا على سبب التغيّر في اللون أساسًا: فالتصبغات التي تكون على سطح السن أو قريبة منه — الناتجة عن الطعام أو الشراب أو التدخين مثلًا — تستجيب عادةً بشكل يمكن التنبؤ به أكثر من تغيّر اللون الناشئ من داخل السن، كما قد يحدث بعد إصابة أو لأسباب متعلقة بمرحلة تكوّن السن. وتحديد أي الحالتين تنطبق على سنّك هو أمر يُقيِّمه طبيبك مباشرة، لا شيء يُحكَم عليه من المرآة.' },
        { type: 'paragraph', text: 'ثمة نقطة يسهل إغفالها: يُغيّر التبييض لون بنية السن الطبيعية، لكنه لا يُغيّر لون التيجان أو الحشوات أو الفينير أو أي ترميمات قائمة بالطريقة نفسها. وإذا كانت لديك ترميمات ظاهرة في المنطقة التي ترغب في تفتيحها، فهذا أمر يستحق أخذه في الحسبان عند التخطيط وترتيب مراحل العلاج، إذ قد يصبح أي تفاوت في اللون أكثر وضوحًا لاحقًا لا أقل.' },
        { type: 'paragraph', text: [
          'قد تحدث حساسية مؤقتة تجاه البرودة، وأحيانًا تهيّج في اللثة نتيجة جل التبييض، ويُخطَّط للعلاج عادةً تحت إشراف طبيب أسنان نظرًا لقوة المواد المستخدمة. كما أن النتيجة ليست دائمة إلى الأبد — إذ يمكن أن تعاود الأسنان الاغمقاق تدريجيًا بمرور الوقت، وقد يُحتاج إلى تبييض إضافي لاحقًا للحفاظ على الدرجة التي بدأت بها. ويمكنك الاطلاع على نهجنا في ذلك بمزيد من التفصيل على ',
          { text: 'صفحة تبييض الأسنان لدينا', href: '/teeth-whitening' },
          '.',
        ] },

        { type: 'heading', level: 2, id: 'what-veneers-change', text: 'ما الذي يغيّره الفينير' },
        { type: 'paragraph', text: 'الفينير قشرة رقيقة تُلصَق على الوجه الأمامي للسن، ويمكن أن تغيّر ما هو ظاهر من ثلاث نواحٍ في آنٍ واحد: الشكل، والتناسب، واللون. وهذا ما يميّزه عن التبييض، الذي يؤثر أساسًا في اللون فحسب، وهو أيضًا سبب اعتبار الفينير خطوة أكثر شمولًا من التبييض، لا مجرد نسخة أقوى منه.' },
        { type: 'paragraph', text: 'ويختلف مقدار التدخل في سطح السن نفسه باختلاف الحالة وتصميم الفينير المستخدم — إذ يتطلب بعضها إزالة جزء بسيط من بنية السن لإفساح المجال للفينير، بينما تحتاج تصاميم أخرى إلى تحضير محدود جدًا. وليس أي من النهجين مناسبًا تلقائيًا لكل سن؛ فالأمر يعتمد على وضع السن الحالي وما يحتاج الفينير إلى تحقيقه ليبدو ويعمل بشكل جيد. وفهم ما هو مخطَّط فعليًا لأسنانك، ومقدار ما يشمله ذلك من بنيتك الطبيعية، أمر يستحق مناقشته بوضوح مع طبيبك قبل بدء العلاج، بدلًا من افتراض أي من الاحتمالين.' },
        { type: 'paragraph', text: [
          'وحين يُحضَّر سطح السن لتركيب الفينير، فإن ذلك التغيّر لا يتراجع من تلقاء نفسه — إذ تحتاج السن عمومًا إلى البقاء مُرمَّمة بدلًا من العودة ببساطة إلى وضعها الأصلية. وككل ترميم، قد يتعرض الفينير للكسر أو التلف بمرور الوقت، وقد يحتاج في النهاية إلى إصلاح أو استبدال. ولا يُغيّر أي من ذلك ما تحتاجه السن نفسها أسفل الفينير: العناية اليومية المعتادة بالفم والمراجعة المهنية المنتظمة، أسوة ببقية أسنانك. ويمكنك الاطلاع على نهجنا في ذلك بمزيد من التفصيل على ',
          { text: 'صفحة الفينير لدينا', href: '/porcelain-veneers' },
          '.',
        ] },
        { type: 'paragraph', text: 'ومن المهم أيضًا توضيح ما لا يفعله الفينير: فقد يُحسِّن أحيانًا مظهر بعض التفاوتات البسيطة، لكنه لا يُحرِّك الأسنان كما يفعل علاج تقويم الأسنان.' },

        { type: 'heading', level: 2, id: 'comparing-the-options', text: 'مقارنة الخيارين' },
        { type: 'paragraph', text: 'بعرضهما جنبًا إلى جنب، تصبح الفروق العملية أوضح:' },
        { type: 'table', headers: ['الاعتبار', 'التبييض', 'الفينير'], columnWidths: ['26%', '37%', '37%'], rows: [
          ['ما الذي يتغيّر', 'درجة ولمعان لون أسنانك الطبيعية', 'شكل السطح الظاهر للسن وتناسبه ولونه'],
          ['الأثر على بنية السن', 'لا يُزيل أي جزء من سطح السن', 'يختلف التحضير باختلاف الحالة — بعض التصاميم تُزيل جزءًا بسيطًا من سطح السن، وأخرى تحتاج إلى القليل جدًا'],
          ['متى يُفضَّل عادةً', 'يكون الشاغل الأساسي هو اللون، وشكل السن مقبول بالفعل', 'يتجاوز الشاغل اللون إلى الشكل أو التناسب'],
        ] },
        { type: 'paragraph', text: 'هذا الجدول نقطة انطلاق للتوجيه العام، لا توصية علاجية — فهو لا يخبرك بالخيار الصحيح، بل فقط بكيفية اختلافهما عادةً. أما الخيار المناسب لك فعليًا فيعتمد على ما ترغب في تغييره، وحالة السن أو الأسنان المعنية، وأولوياتك الخاصة، وجميع ذلك يُناقَش بشكل فردي مع طبيبك بدلًا من قراءته من جدول وحده. وقد يكتشف بعض المرضى، بعد النقاش، أن شاغلهم أضيق مما ظنوا في البداية، أو أنه يمتد على العمودين معًا لا يقتصر على أحدهما.' },

        { type: 'heading', level: 2, id: 'longevity-and-upkeep', text: 'طول الأمد والصيانة' },
        { type: 'paragraph', text: 'يتقادم التبييض والفينير بشكل مختلف، وليس أي منهما "أفضل" ببساطة على هذا الصعيد. فتأثير التبييض ليس دائمًا — إذ تشير إرشادات NHS إلى أنه قد يستمر نحو ثلاث سنوات إذا اتُّبعت نصيحة طبيب الأسنان بشأن العناية اللاحقة، وبعد ذلك يمكن أن تعاود الأسنان الاغمقاق تدريجيًا، وقد يُنظر في تبييض إضافي لاحقًا. أما الفينير فترميم أطول أمدًا؛ إذ تُوصَف التيجان والفينير التي تُعتنى بها جيدًا عمومًا بأنها تدوم نحو ثمانية إلى عشر سنوات، وإن كان ذلك يختلف باختلاف الحالة والمادة المستخدمة والإطباق ومدى العناية بها. وبدلًا من القول إن أحد الخيارين يدوم أطول من الآخر، الأدق أن نقول إن لكل منهما نمط صيانة مختلفًا — علاج تكميلي دوري للتبييض، وعناية طويلة الأمد مع احتمال الإصلاح أو الاستبدال لاحقًا بالنسبة للفينير.' },

        { type: 'heading', level: 2, id: 'if-youre-considering-both', text: 'إذا كنت تفكر في الجمع بين الخيارين' },
        { type: 'paragraph', text: 'حين يُنظر فعليًا في كل من التبييض والفينير معًا، غالبًا ما يُبدَأ بالتبييض أولًا، قبل تصنيع الفينير النهائي — إذ يتيح ذلك تخطيط درجة لون الفينير بما يتناسب مع لون أسنانك الطبيعي بعد التبييض، لا العكس. وهذا نهج تخطيطي شائع لا قاعدة ثابتة، ولا توجد فترة انتظار موحّدة بين الاثنين؛ إذ يعتمد الترتيب المناسب على الحالة الفردية وما يُخطَّط له بشكل عام للابتسامة.' },
      ],
      faqs: [
        { question: 'هل يمكن الجمع بين التبييض والفينير؟', answer: 'نعم، في بعض الحالات يمكن أن يكونا جزءًا من خطة علاج واحدة. وحيثما كان كلاهما مناسبًا، غالبًا ما يُنظر في التبييض قبل تصنيع الفينير النهائي بحيث يمكن مطابقة درجة لون الفينير مع لون أسنانك الطبيعي بعد التبييض — إلا أن الترتيب المناسب، وما إذا كان ذلك ضروريًا أصلًا، يعتمد على حالتك الفردية لا على فترة انتظار ثابتة.' },
        { question: 'أي الخيارين يدوم أطول؟', answer: 'الأمر لا يُقارَن فعليًا بهذه الطريقة. فقد يستمر تأثير التبييض نحو ثلاث سنوات مع عناية لاحقة مناسبة، وفق إرشادات NHS، بينما يُوصَف الفينير الذي يُعتنى به جيدًا عمومًا بأنه يدوم نحو ثمانية إلى عشر سنوات — مع أن كلا الرقمين تقريبي ويعتمد على الحالة الفردية. ويحتاج التبييض عادةً إلى علاج تكميلي دوري، بينما يُعدّ الفينير ترميمًا أطول أمدًا وإن كان قد يحتاج إلى إصلاح أو استبدال في النهاية.' },
        { question: 'هل يعمل التبييض على كل أنواع تغيّر اللون؟', answer: 'ليس بالتساوي. فالتصبغات التي تكون على سطح السن أو قريبة منه تستجيب عادةً بشكل يمكن التنبؤ به أكثر من تغيّر اللون الناشئ من داخل السن، كما قد يحدث بعد إصابة أو لأسباب معينة متعلقة بمرحلة التكوّن. ويُقيِّم طبيبك أيًا من الحالتين تنطبق على حالتك قبل التوصية بالتبييض.' },
        { question: 'هل يغيّر التبييض لون تيجاني أو حشواتي الحالية؟', answer: 'ليس بالطريقة نفسها. يُفتّح التبييض بنية السن الطبيعية، لكن التيجان والحشوات والفينير والترميمات المماثلة عمومًا لا تتغيّر ألوانها بالطريقة ذاتها — وهو أمر يستحق أخذه في الحسبان عند التخطيط للون إذا كانت لديك ترميمات ظاهرة في المنطقة التي ترغب في تفتيحها.' },
        { question: 'هل يتطلب الفينير دائمًا إزالة جزء من بنية السن؟', answer: 'لا. يختلف مقدار التحضير اللازم باختلاف تصميم الفينير وحالتك الفردية — إذ يتطلب بعضها إزالة جزء بسيط من سطح السن، بينما يحتاج بعضها الآخر إلى القليل جدًا. والمهم هو فهم ما هو مخطَّط فعليًا لأسنانك بوضوح قبل بدء العلاج.' },
        { question: 'هل يمكن للفينير تصحيح اعوجاج الأسنان؟', answer: 'قد يُحسِّن أحيانًا مظهر بعض التفاوتات البسيطة، لكنه لا يُحرِّك الأسنان إلى مواضع جديدة. أما تصحيح الاعوجاج الفعلي فهو مهمة علاج تقويم الأسنان، لا الفينير.' },
      ],
      references: [
        {
          title: 'Teeth whitening — NHS',
          url: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/',
        },
        {
          title: 'Tooth Whitening Information for Adult Patients — Leeds Teaching Hospitals NHS Trust',
          url: 'https://www.leedsth.nhs.uk/patients/resources/tooth-whitening-information-for-adult-patients/',
        },
        {
          title: 'Dental treatments — NHS',
          url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/',
        },
        {
          title: 'Crowns — Leeds Teaching Hospitals NHS Trust',
          url: 'https://www.leedsth.nhs.uk/patients/resources/crowns/',
        },
      ],
    },
  },
  {
    slug: 'helping-your-child-feel-comfortable-at-the-dentist',
    title: 'Helping Your Child Feel Comfortable at the Dentist',
    dek: "A calm, practical guide for parents preparing a child for a dental visit — what helps, what to expect, and what to do if they're nervous.",
    category: 'childrens-dentistry',
    publishedAt: '2026-08-10',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "A child's first experiences at the dentist tend to shape how comfortable they feel about dental visits later on. That doesn't mean a single appointment determines everything that follows — children's attitudes are shaped by many visits, by temperament, and by how each stage of an appointment is explained to them — but the approach taken in those early visits matters as much as the treatment itself." },

      { type: 'heading', level: 2, id: 'why-early-experiences-matter', text: 'Why Early, Positive Experiences Matter' },
      { type: 'paragraph', text: "The NHS recommends taking a child to the dentist as soon as their first milk tooth appears, or by their first birthday at the latest, so they become familiar with the environment and get to know the dental team before any treatment is needed. The American Academy of Pediatric Dentistry gives a closely aligned recommendation: a first visit within six months of the first tooth erupting, or by age one. That early visit is usually brief and low-key — often little more than a look at the teeth and gums, sometimes with the child on a parent's lap — but it establishes something more lasting than the check-up itself: familiarity." },
      { type: 'paragraph', text: "Children who feel informed and are not rushed through each stage of an appointment tend to build genuine, gradual confidence around dental care, rather than simply enduring it. NHS England's clinical standard for children's oral healthcare reflects this directly: communication should be developmentally appropriate, and a child's own views should be heard and given weight in line with their age and understanding — a principle that applies as much to a routine check-up as to more involved treatment." },

      { type: 'heading', level: 2, id: 'what-helps-a-child-feel-more-comfortable', text: 'What Helps a Child Feel More Comfortable?' },
      { type: 'paragraph', text: "Most of what makes a dental visit easier for a child comes down to communication rather than clinical technique. NHS England's guidance on non-pharmacological anxiety management — the approach used across all levels of paediatric dental care, from routine primary care upward — sets out a consistent set of techniques: tell-show-do, modelling, distraction, guided imagery, a consistent team approach, and gradual acclimatisation to the setting." },
      { type: 'paragraph', text: "Tell-show-do is one of the best-established of these techniques. The dentist explains what's about to happen in simple language, shows the child the instrument or step involved, and only then carries it out. The American Academy of Pediatric Dentistry describes this as helping the child become familiar with the dental setting and giving both child and parent a chance to ask questions in a low-pressure way — and notes it can be used with any child, regardless of age or previous experience." },
      { type: 'paragraph', text: 'A few other things tend to help alongside this:' },
      { type: 'list', items: [
        "Age-appropriate explanations, rather than adult clinical language or, at the other extreme, vague reassurance that avoids saying what's actually going to happen",
        'A gradual introduction to each step, rather than moving straight into treatment on a first visit',
        'Positive reinforcement and specific, descriptive praise during the appointment, rather than generic encouragement',
        "Giving the child a reasonable way to signal discomfort or ask a question, so they don't feel like a passive participant",
        'Keeping parents informed at each stage, so they can reinforce the same calm, matter-of-fact tone at home',
      ] },
      { type: 'paragraph', text: "None of this is a fixed script. Behaviour guidance in paediatric dentistry is deliberately individualised — built around a particular child's age, temperament and previous experience, not applied the same way at every visit." },

      { type: 'heading', level: 2, id: 'the-parents-role', text: "The Parent's Role" },
      { type: 'paragraph', text: 'Parents shape a child\'s expectations well before the appointment itself, often just through how the visit is talked about beforehand. Speaking about it in a calm, matter-of-fact way — without over-promising that nothing will happen, and without introducing unnecessary detail that raises questions the child then has to sit with — tends to help more than either extreme.' },
      { type: 'paragraph', text: "It's also worth mentioning anything relevant ahead of time — a previous difficult visit, a general sensitivity to noise or new environments — so the team can plan for it rather than discover it mid-appointment. Where appropriate, many dental teams also find it useful to speak with the child directly, in language pitched at their level, rather than relaying everything through the parent." },
      { type: 'paragraph', text: "None of this means a parent is responsible for how a child reacts on the day. Cooperation varies by age, individual temperament, and sometimes simply by how a particular day is going, and dental teams generally expect and plan for that variation rather than treating it as unusual." },

      { type: 'heading', level: 2, id: 'if-your-child-is-nervous', text: 'If Your Child Is Nervous' },
      { type: 'paragraph', text: "Some children feel nervous before a dental visit, and it isn't a sign that something has gone wrong in earlier preparation. Where a child is anxious, the approach is typically to slow down rather than push through — more time spent on tell-show-do, more opportunity to become familiar with the room and instruments before anything is attempted, and a pace that's set by the child's response rather than a fixed appointment schedule." },
      { type: 'paragraph', text: "It's worth being honest here: there's no guarantee that anxiety disappears in a single visit. A gradual approach is about building familiarity over time, not promising an anxiety-free appointment on the spot — and what helps one child settle may do very little for another." },
      { type: 'paragraph', text: 'For most children, this kind of graduated, non-pharmacological approach is enough on its own, without needing anything beyond it.' },

      { type: 'heading', level: 2, id: 'preventive-habits-that-start-early', text: 'Preventive Habits That Start Early' },
      { type: 'paragraph', text: 'A positive clinical experience works alongside good everyday habits, not instead of them. The NHS advises brushing a child\'s teeth twice daily with fluoride toothpaste as soon as the first tooth appears — a smear of toothpaste for children under three, moving to a pea-sized amount from around age three, with fluoride content checked against the guidance for the child\'s age. Diet matters here too, particularly limiting sugary food and drink between meals, alongside regular dental attendance rather than visits prompted only by pain or an obvious problem.' },
      { type: 'paragraph', text: 'None of this needs to become a separate project — the habits that support a comfortable relationship with the dentist and the habits that support oral health more broadly are largely the same, and they reinforce each other over time.' },

      { type: 'heading', level: 2, id: 'when-to-seek-advice', text: 'When to Seek Advice' },
      { type: 'paragraph', text: "Every child settles into dental visits at their own pace, and there's no single timeline that applies evenly across every child or every appointment. Where a previous visit went badly, where a child has a broader sensitivity to new environments or procedures, or where anxiety seems to be affecting whether appointments happen at all, it's worth raising this directly with your dentist beforehand rather than waiting to see how the next visit goes. A dental team that knows the specific concern in advance can plan the pacing and approach around it, which is usually more effective than adjusting mid-appointment." },
      { type: 'paragraph', text: [
        'Our ',
        { text: "Children's Dentistry", href: '/children-dentistry' },
        ' page has more on how we approach paediatric visits day to day, and regular ',
        { text: 'check-ups and cleaning', href: '/check-up-cleaning' },
        ' are where most of this familiarity is built over time.',
      ] },
    ],
    faqs: [
      { question: 'At what age should a child first visit the dentist?', answer: 'The NHS recommends a first visit as soon as the first milk tooth appears, or by their first birthday at the latest — this is echoed by the American Academy of Pediatric Dentistry, which recommends a visit within six months of the first tooth erupting, or by age one.' },
      { question: 'What if my child is nervous?', answer: "Some children feel nervous about dental visits, and that isn't a sign that something went wrong beforehand. Dental teams typically slow the pace, spend more time on explaining and demonstrating each step, and let familiarity build gradually rather than promising the anxiety will disappear in one visit. The approach is adjusted to the individual child rather than following one fixed method." },
      { question: 'Should I tell my child exactly what will happen at the appointment?', answer: "Speaking about the visit in a calm, matter-of-fact way tends to help more than either over-explaining or avoiding the subject. Very specific pre-appointment detail isn't usually necessary — the dental team will typically explain each step directly to the child, in age-appropriate language, once there." },
      { question: 'Should a parent stay with the child during the dental visit?', answer: "This varies by child, by practice, and by the individual dentist's approach — there's no single rule that applies to every visit. It's worth discussing this with your dental team beforehand, particularly for a first appointment or where a child has found separation difficult in other settings." },
      { question: 'What if my child will not cooperate?', answer: 'This is common and expected, particularly at a first visit or with younger children. Dental teams generally have a range of non-pharmacological techniques — like tell-show-do and gradual acclimatisation — to help build cooperation over more than one visit if needed, rather than expecting full cooperation immediately.' },
    ],
    references: [
      {
        title: "NHS — Children's teeth",
        url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/taking-care-of-childrens-teeth/',
      },
      {
        title: 'NHS England — Clinical standard: oral health and dental care for children and young people',
        url: 'https://www.england.nhs.uk/long-read/clinical-standard-oral-health-dental-care-children-young-people/',
      },
      {
        title: 'American Academy of Pediatric Dentistry — Behavior Guidance for the Pediatric Dental Patient',
        url: 'https://www.aapd.org/research/oral-health-policies--recommendations/behavior-guidance-for-the-pediatric-dental-patient/',
      },
      {
        title: 'American Academy of Pediatric Dentistry — Nonpharmacological Behavior Guidance for the Pediatric Dental Patient',
        url: 'https://www.aapd.org/globalassets/media/policies_guidelines/g_behaviorguidance.pdf',
      },
    ],
    arContent: {
      title: 'مساعدة طفلك على الشعور بالارتياح عند طبيب الأسنان',
      dek: 'دليل هادئ وعملي لأولياء الأمور لتحضير أطفالهم لزيارة طبيب الأسنان — ما الذي يساعد، وما الذي يمكن توقعه، وماذا تفعل إن شعر طفلك بالقلق.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: 'غالبًا ما تُشكّل تجارب الطفل الأولى عند طبيب الأسنان مدى شعوره بالارتياح تجاه الزيارات اللاحقة. وهذا لا يعني أن موعدًا واحدًا يُحدّد كل ما يليه — فموقف الطفل يتشكّل عبر زيارات عديدة، وبحسب طبيعته الشخصية، وطريقة شرح كل مرحلة من مراحل الزيارة له — لكن النهج المتّبع في تلك الزيارات الأولى لا يقل أهمية عن العلاج نفسه.' },

        { type: 'heading', level: 2, id: 'why-early-experiences-matter', text: 'لماذا تُهم التجارب المبكرة والإيجابية' },
        { type: 'paragraph', text: 'توصي هيئة الصحة الوطنية البريطانية (NHS) باصطحاب الطفل إلى طبيب الأسنان بمجرد ظهور أول سنّ لبنية، أو في موعد أقصاه عيد ميلاده الأول، ليتعرّف على البيئة والفريق الطبي قبل الحاجة إلى أي علاج. وتقدّم الأكاديمية الأمريكية لطب أسنان الأطفال توصية مماثلة إلى حد كبير: زيارة أولى خلال ستة أشهر من بزوغ أول سنّ، أو بحلول عامه الأول. وعادةً ما تكون هذه الزيارة الأولى قصيرة وبسيطة — لا تتجاوز في الغالب إلقاء نظرة على الأسنان واللثة، وقد تتم أحيانًا وطفلك جالس في حضن أحد الوالدين — لكنها تُرسي أمرًا أبقى من الفحص نفسه: الألفة.' },
        { type: 'paragraph', text: 'فالأطفال الذين يشعرون بأنهم على علم بما يحدث، ولا يُستعجَلون خلال أي مرحلة من مراحل الزيارة، يميلون إلى بناء ثقة حقيقية ومتدرّجة تجاه رعاية أسنانهم، بدلًا من مجرد تحمّلها. وينعكس ذلك مباشرة في المعيار السريري الذي وضعته هيئة NHS England لرعاية صحة الفم لدى الأطفال: إذ ينبغي أن يكون التواصل مناسبًا لمرحلة نمو الطفل، وأن تُسمَع آراؤه الخاصة ويُعتدّ بها بما يتناسب مع عمره وإدراكه — وهو مبدأ ينطبق على الفحص الروتيني بقدر ما ينطبق على أي علاج أكثر تعقيدًا.' },

        { type: 'heading', level: 2, id: 'what-helps-a-child-feel-more-comfortable', text: 'ما الذي يساعد الطفل على الشعور بمزيد من الارتياح؟' },
        { type: 'paragraph', text: 'معظم ما يجعل زيارة طبيب الأسنان أسهل على الطفل يعود إلى طريقة التواصل معه أكثر مما يعود إلى الأسلوب السريري نفسه. وتحدد إرشادات NHS England الخاصة بإدارة القلق بوسائل غير دوائية — وهي النهج المتّبع في جميع مستويات رعاية أسنان الأطفال، بدءًا من الرعاية الأساسية وصعودًا — مجموعة متسقة من الأساليب، من بينها: أسلوب (اشرح – أظهر – نفِّذ)، والمحاكاة، وتشتيت الانتباه، والتخيّل الموجَّه، وثبات الفريق المعالج، والتعريف التدريجي بالبيئة العلاجية.' },
        { type: 'paragraph', text: 'ويُعد أسلوب (اشرح – أظهر – نفِّذ) من أكثر هذه الأساليب رسوخًا. إذ يشرح طبيب الأسنان ما سيحدث بلغة بسيطة، ثم يُري الطفل الأداة أو الخطوة المعنية، ولا يُنفّذها إلا بعد ذلك. وتصف الأكاديمية الأمريكية لطب أسنان الأطفال هذا الأسلوب بأنه يساعد الطفل على التعرّف على بيئة العيادة، ويمنح الطفل ووالديه فرصة لطرح الأسئلة في أجواء غير ضاغطة — وتشير إلى إمكانية استخدامه مع أي طفل، بصرف النظر عن عمره أو تجاربه السابقة.' },
        { type: 'paragraph', text: 'وهناك أمور أخرى تساعد عادةً إلى جانب ذلك:' },
        { type: 'list', items: [
          'شرح مناسب لعمر الطفل، بدلًا من اللغة السريرية الموجّهة للبالغين، أو في المقابل، طمأنة غامضة تتجنّب توضيح ما سيحدث فعليًا',
          'تعريف تدريجي بكل خطوة، بدلًا من الانتقال مباشرة إلى العلاج في الزيارة الأولى',
          'تعزيز إيجابي وإطراء محدد وواصف أثناء الزيارة، بدلًا من التشجيع العام غير المحدد',
          'إتاحة وسيلة معقولة للطفل للتعبير عن أي انزعاج أو طرح سؤال، حتى لا يشعر بأنه مجرد متلقٍّ سلبي',
          'إبقاء الوالدين على علم بكل مرحلة، ليتمكّنا من ترسيخ النبرة الهادئة والواقعية نفسها في المنزل',
        ] },
        { type: 'paragraph', text: 'ولا شيء من هذا نصًا ثابتًا يُطبَّق حرفيًا. فتوجيه السلوك في طب أسنان الأطفال يُصمَّم عمدًا بشكل فردي — وفق عمر الطفل وطبيعته الشخصية وتجاربه السابقة — ولا يُطبَّق بالطريقة نفسها في كل زيارة.' },

        { type: 'heading', level: 2, id: 'the-parents-role', text: 'دور الوالدين' },
        { type: 'paragraph', text: 'يُشكّل الوالدان توقعات الطفل قبل الموعد نفسه بوقت طويل، غالبًا من خلال الطريقة التي يتحدثان بها عن الزيارة مسبقًا. والحديث عنها بأسلوب هادئ وواقعي — دون المبالغة في الوعد بأن شيئًا لن يحدث، ودون إضافة تفاصيل غير ضرورية تثير تساؤلات يضطر الطفل للتعايش معها — يساعد عادةً أكثر من أي من هذين النقيضين.' },
        { type: 'paragraph', text: 'ومن المفيد أيضًا ذكر أي أمر ذي صلة مسبقًا — كزيارة سابقة كانت صعبة، أو حساسية عامة تجاه الضوضاء أو البيئات الجديدة — حتى يتمكن الفريق الطبي من التخطيط لذلك بدلًا من اكتشافه أثناء الزيارة. وحيثما كان ذلك مناسبًا، يجد كثير من الفرق الطبية أن التحدث مباشرة مع الطفل، بلغة تناسب مستواه، أجدى من نقل كل شيء عبر الوالدين فقط.' },
        { type: 'paragraph', text: 'ولا يعني أي من ذلك أن الوالد مسؤول عن ردة فعل طفله في يوم الزيارة. فدرجة التعاون تختلف باختلاف العمر والطبيعة الشخصية، وأحيانًا لأسباب تتعلق فقط بسير ذلك اليوم بعينه، وتتوقع الفرق الطبية عادةً هذا التفاوت وتخطط له، ولا تتعامل معه باعتباره أمرًا غير معتاد.' },

        { type: 'heading', level: 2, id: 'if-your-child-is-nervous', text: 'إذا شعر طفلك بالقلق' },
        { type: 'paragraph', text: 'يشعر بعض الأطفال بالقلق قبل زيارة طبيب الأسنان، وهذا لا يعني أن هناك خللًا في التحضير المسبق. وحين يكون الطفل قلقًا، يكون النهج المتّبع عادةً هو التمهّل بدلًا من المضي قدمًا رغم ذلك — بمزيد من الوقت المخصص لأسلوب (اشرح – أظهر – نفِّذ)، وفرصة أكبر للتعرّف على الغرفة والأدوات قبل الشروع في أي إجراء، مع وتيرة تُحدَّد وفق استجابة الطفل نفسه لا وفق جدول زمني ثابت للموعد.' },
        { type: 'paragraph', text: 'ومن الأمانة القول هنا إنه لا يوجد ما يضمن زوال القلق في زيارة واحدة. فالنهج التدريجي يهدف إلى بناء الألفة مع الوقت، لا إلى ضمان زيارة خالية من القلق فورًا — وما يساعد طفلًا على الاطمئنان قد لا يُجدي كثيرًا مع طفل آخر.' },
        { type: 'paragraph', text: 'وبالنسبة لمعظم الأطفال، يكون هذا النهج التدريجي غير الدوائي كافيًا في حد ذاته، دون الحاجة إلى أي إجراء إضافي.' },

        { type: 'heading', level: 2, id: 'preventive-habits-that-start-early', text: 'عادات وقائية تبدأ مبكرًا' },
        { type: 'paragraph', text: 'لا تحل التجربة السريرية الإيجابية محل العادات اليومية الجيدة، بل تعمل جنبًا إلى جنب معها. وتنصح هيئة NHS بتفريش أسنان الطفل مرتين يوميًا بمعجون يحتوي على الفلورايد بمجرد ظهور أول سنّ — بكمية تعادل مسحة رقيقة للأطفال دون الثالثة من العمر، ثم بكمية بحجم حبة البازلاء تقريبًا من سن الثالثة فما فوق، مع التحقق من نسبة الفلورايد المناسبة لعمر الطفل وفق الإرشادات. ويُعد النظام الغذائي عاملًا مهمًا أيضًا، خصوصًا الحد من الأطعمة والمشروبات السكرية بين الوجبات، إلى جانب المواظبة على زيارات طبيب الأسنان الدورية، لا الاقتصار على الزيارة عند الشعور بالألم أو ظهور مشكلة واضحة فقط.' },
        { type: 'paragraph', text: 'ولا حاجة لأن يتحول أي من ذلك إلى مهمة منفصلة — فالعادات التي تدعم علاقة مريحة مع طبيب الأسنان، والعادات التي تدعم صحة الفم بشكل عام، هي إلى حد كبير العادات نفسها، ويعزز بعضها بعضًا مع مرور الوقت.' },

        { type: 'heading', level: 2, id: 'when-to-seek-advice', text: 'متى تطلب المشورة' },
        { type: 'paragraph', text: 'يتأقلم كل طفل مع زيارات طبيب الأسنان بوتيرته الخاصة، ولا يوجد جدول زمني واحد ينطبق بالتساوي على كل طفل أو كل زيارة. وحين تكون هناك زيارة سابقة لم تسر بشكل جيد، أو حساسية أوسع تجاه البيئات أو الإجراءات الجديدة، أو حين يبدو أن القلق يؤثر في حدوث الزيارات من الأساس، يستحق الأمر إثارته مباشرة مع طبيب أسنان طفلك مسبقًا، بدلًا من انتظار ما ستؤول إليه الزيارة القادمة. فالفريق الطبي الذي يعرف مسبقًا طبيعة القلق تحديدًا يستطيع التخطيط للوتيرة والنهج المناسبين وفقًا لذلك، وهو ما يكون عادةً أكثر فاعلية من التعديل أثناء الزيارة نفسها.' },
        { type: 'paragraph', text: [
          'يمكنكم الاطلاع على مزيد من التفاصيل حول نهجنا اليومي في زيارات الأطفال على صفحة ',
          { text: 'طب أسنان الأطفال', href: '/children-dentistry' },
          ' لدينا، كما أن ',
          { text: 'الفحص والتنظيف', href: '/check-up-cleaning' },
          ' الدوريين هما حيث تُبنى معظم هذه الألفة مع الوقت.',
        ] },
      ],
      faqs: [
        { question: 'في أي عمر ينبغي أن يزور الطفل طبيب الأسنان للمرة الأولى؟', answer: 'توصي هيئة NHS بزيارة أولى بمجرد ظهور أول سنّ لبنية، أو في موعد أقصاه عيد ميلاده الأول — وهو ما تؤكده أيضًا الأكاديمية الأمريكية لطب أسنان الأطفال، التي توصي بزيارة خلال ستة أشهر من بزوغ أول سنّ، أو بحلول عامه الأول.' },
        { question: 'ماذا لو كان طفلي قلقًا؟', answer: 'يشعر بعض الأطفال بالقلق تجاه زيارات طبيب الأسنان، وهذا لا يعني وجود خلل سابق. وتلجأ الفرق الطبية عادةً إلى التمهّل، وتخصيص وقت أطول لشرح كل خطوة وعرضها، والسماح للألفة بالتكوّن تدريجيًا، بدلًا من الوعد بزوال القلق في زيارة واحدة. ويُكيَّف النهج المتّبع وفق كل طفل على حدة، لا وفق طريقة واحدة ثابتة.' },
        { question: 'هل ينبغي أن أخبر طفلي بالتفصيل بما سيحدث في الموعد؟', answer: 'الحديث عن الزيارة بأسلوب هادئ وواقعي يساعد عادةً أكثر من الإفراط في الشرح أو تجنب الموضوع تمامًا. ولا حاجة عادةً لتفاصيل دقيقة جدًا قبل الموعد — إذ يتولى الفريق الطبي عادةً شرح كل خطوة مباشرة للطفل، بلغة تناسب عمره، عند الوصول إلى العيادة.' },
        { question: 'هل ينبغي أن يبقى أحد الوالدين مع الطفل أثناء الزيارة؟', answer: 'يختلف ذلك باختلاف الطفل والعيادة ونهج كل طبيب أسنان — ولا توجد قاعدة واحدة تنطبق على كل زيارة. ويستحق الأمر مناقشته مع الفريق الطبي مسبقًا، خصوصًا في الزيارة الأولى أو إذا كان الطفل يجد صعوبة في الانفصال عن والديه في مواقف أخرى.' },
        { question: 'ماذا لو لم يتعاون طفلي؟', answer: 'هذا أمر شائع ومتوقع، خصوصًا في الزيارة الأولى أو مع الأطفال الأصغر سنًا. وتملك الفرق الطبية عادةً مجموعة من الأساليب غير الدوائية — مثل أسلوب (اشرح – أظهر – نفِّذ) والتعريف التدريجي — للمساعدة في بناء التعاون عبر أكثر من زيارة إذا لزم الأمر، بدلًا من توقع تعاون كامل فورًا.' },
      ],
      references: [
        {
          title: "NHS — Children's teeth",
          url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/taking-care-of-childrens-teeth/',
        },
        {
          title: 'NHS England — Clinical standard: oral health and dental care for children and young people',
          url: 'https://www.england.nhs.uk/long-read/clinical-standard-oral-health-dental-care-children-young-people/',
        },
        {
          title: 'American Academy of Pediatric Dentistry — Behavior Guidance for the Pediatric Dental Patient',
          url: 'https://www.aapd.org/research/oral-health-policies--recommendations/behavior-guidance-for-the-pediatric-dental-patient/',
        },
        {
          title: 'American Academy of Pediatric Dentistry — Nonpharmacological Behavior Guidance for the Pediatric Dental Patient',
          url: 'https://www.aapd.org/globalassets/media/policies_guidelines/g_behaviorguidance.pdf',
        },
      ],
    },
  },
  {
    slug: 'what-oral-surgery-can-involve',
    title: 'What Oral Surgery Can Involve',
    dek: 'A calm, evidence-based overview of what "oral surgery" actually covers — from surgical extractions to biopsies — and what to expect at each stage.',
    category: 'oral-surgery',
    publishedAt: '2026-08-08',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: '"Oral surgery" is a broad term, not a single procedure. It can describe anything from removing an impacted wisdom tooth to taking a small tissue sample for investigation, and the complexity involved varies substantially from one case to another. Being told that a treatment falls under "oral surgery" doesn\'t, by itself, mean a case is unusually serious or complicated — it more often reflects that a straightforward approach, like a simple extraction, isn\'t suitable for that particular tooth or situation. What follows sets out, in general terms, why oral surgery may be recommended, how a case is typically assessed and planned, and what recovery can involve — without assuming any two cases are the same.' },

      { type: 'heading', level: 2, id: 'when-oral-surgery-may-be-recommended', text: 'When Oral Surgery May Be Recommended' },
      { type: 'paragraph', text: [
        "Most teeth are removed using a straightforward extraction technique. Surgical removal becomes necessary in more specific circumstances — for example, where a tooth is broken, cracked, or brittle below the gum line, or where its roots are long, curved, or an unusual shape that a simple extraction technique can't accommodate. Impacted wisdom teeth are one of the most common reasons oral surgery is considered: where there isn't enough room for a wisdom tooth to come through fully, it can become impacted against the tooth in front or the jawbone behind, sometimes leading to repeated infection, decay, or a cyst forming around it. Even so, an impacted wisdom tooth that isn't causing problems doesn't automatically need to be removed — it's just as often left in place and monitored at routine check-ups instead. Oral surgery also covers situations that aren't about removing a tooth at all: where a lump, ulcer, or area of tissue in the mouth needs a closer look, a small sample may be taken and sent for laboratory examination to help reach a diagnosis. Where a tooth is diseased rather than broken or badly positioned, it isn't always the only option — treatment such as ",
        { text: 'root canal treatment', href: '/blog/understanding-root-canal-treatment' },
        ' can sometimes save a tooth that might otherwise need to be removed. In every case, though, the recommendation follows an individual assessment rather than a general rule about a particular tooth or symptom.',
      ] },

      { type: 'heading', level: 2, id: 'how-your-case-is-assessed', text: 'How Your Case Is Assessed' },
      { type: 'paragraph', text: "Assessment usually starts with a clinical examination, alongside X-rays to check the position of the tooth or area in question and its relationship to surrounding structures. For some wisdom teeth, particularly where an X-ray suggests the roots may sit close to a nerve running through the lower jaw, a more detailed 3D scan — sometimes called a cone beam CT — may be suggested to assess that relationship more precisely. This is considered where there's a specific concern to look into, rather than carried out as standard for every case. Your dentist will also ask about your general medical history and any medications you're taking, since both can influence how treatment is planned. Taken together, this assessment is what actually determines the recommendation — not the general category of \"oral surgery\" itself — and not every case will need the same combination of imaging or investigation." },

      { type: 'heading', level: 2, id: 'preparing-for-treatment', text: 'Preparing for Treatment' },
      { type: 'paragraph', text: "Most oral surgery is carried out under local anaesthetic, which numbs the area completely while you remain awake. Depending on the complexity of the procedure and how anxious you feel about it, sedation may also be offered to help you feel calmer and more relaxed. A general anaesthetic — where you're fully asleep — may be considered in selected circumstances, including some more complex cases or where other approaches are not suitable. Neither sedation nor general anaesthetic is a routine default; which approach, if any, is used depends on the specific procedure, your circumstances, and your own preference, and it's something your dentist or surgeon will discuss with you directly rather than assume in advance. Before any treatment goes ahead, this is also the point where risks, benefits, alternatives, and what aftercare will involve are explained, so that any consent you give is genuinely informed rather than a formality." },

      { type: 'heading', level: 2, id: 'what-the-procedure-can-involve', text: 'What the Procedure Can Involve' },
      { type: 'paragraph', text: "The details of a procedure depend heavily on what's actually being treated, but a few general patterns are common to surgical extractions. Local anaesthetic is given first in every case, even where sedation or a general anaesthetic is also used. Where a tooth can't simply be lifted out — because it's still mostly covered by gum, for instance — the surgeon may need to make a small cut in the gum to reach it properly. For some more difficult teeth, particularly wisdom teeth with awkward roots, the tooth may be divided into two or three smaller sections to allow it to be removed more easily, rather than in one piece. Once the tooth or tissue has been removed, the gum is usually repositioned and, where needed, closed with stitches that dissolve on their own over the following couple of weeks. None of this is standard for every extraction — many are straightforward — and the specific approach is one your surgeon will explain for your own procedure." },

      { type: 'heading', level: 2, id: 'recovery-and-aftercare', text: 'Recovery and Aftercare' },
      { type: 'paragraph', text: "Recovery depends on the procedure and the individual, so it's worth being cautious about applying one timeline to every case. That said, some general patterns are well documented for wisdom tooth surgery: discomfort and swelling are common in the first few days, most noticeable around one to two days after treatment, and can take up to around two weeks to fully settle, alongside some temporary jaw stiffness. This isn't the expected course for every procedure — many people recover considerably faster, especially after simpler extractions. Straightforward pain relief such as paracetamol or ibuprofen is generally sufficient, taken regularly rather than only once discomfort has already set in. Antibiotics are not routinely prescribed after oral surgery; they're more typically reserved for cases where an actual infection develops, rather than given automatically as a precaution. Your dental team will give you aftercare instructions specific to your own procedure — covering things like diet, oral hygiene around the area, and activity — and these are worth following closely, since they're tailored to what was actually done rather than generic advice." },

      { type: 'heading', level: 2, id: 'when-to-contact-your-dental-team', text: 'When to Contact Your Dental Team' },
      { type: 'paragraph', text: [
        "Contact your dental team if you have bleeding that doesn't settle with gentle pressure, or if pain and swelling seem to be getting worse rather than better a few days after treatment — both are reasons to get it looked at rather than to simply wait it out. A bad taste in your mouth alongside worsening pain, or a high temperature and feeling unwell, are also reasons the NHS lists for seeking urgent dental advice after a procedure like this. Separately, and regardless of whether you've had recent treatment: any mouth ulcer, sore, or area of tissue change that hasn't healed within three weeks is worth having assessed by a dentist. This does not mean that something serious is happening, but it is a sensible reason to have the area examined rather than continue to wait. More on how we assess and plan care across procedures generally is on our ",
        { text: 'treatments', href: '/treatments' },
        ' page.',
      ] },
    ],
    faqs: [
      { question: 'What counts as "oral surgery" rather than a routine extraction?', answer: "Most teeth are removed with a straightforward extraction technique. Oral surgery generally describes situations where that approach isn't suitable — for example, a tooth that's broken or cracked below the gum line, one with an unusually shaped root, or an impacted wisdom tooth — as well as other procedures like taking a tissue sample for investigation. The distinction is about the technique required, not about how serious the underlying issue is." },
      { question: 'Will I be awake during the procedure?', answer: "In most cases, yes — oral surgery is typically carried out under local anaesthetic, which numbs the area while you stay awake. Sedation or a general anaesthetic may be offered for more complex procedures or where you're particularly anxious, but neither is used as a routine default; this is discussed and agreed with you beforehand based on your specific situation." },
      { question: 'Is oral surgery painful?', answer: 'The area is numbed with local anaesthetic before treatment begins, so you should not normally feel pain during the procedure itself, although you may feel pressure or movement. Afterwards, some discomfort is common as the anaesthetic wears off, and this is generally managed well with regular over-the-counter pain relief.' },
      { question: 'How long does recovery usually take, and will I need time off work?', answer: 'This varies by procedure and by person. For some wisdom tooth surgery, swelling and discomfort are most noticeable in the first day or two and can take up to around two weeks to fully settle, though many people feel back to normal well before that. Simpler extractions often involve a shorter recovery. Your dental team can give you a more specific expectation for your own procedure.' },
      { question: "What if I notice a lump or sore in my mouth that hasn't been checked yet?", answer: "It's worth having any mouth ulcer, lump, or area of tissue change assessed if it hasn't healed within about three weeks. This is a standard, sensible threshold rather than a sign that something serious is happening. A dentist can examine it properly and advise on next steps, including a biopsy if that is genuinely needed." },
    ],
    references: [
      {
        title: 'NHS — Wisdom tooth removal',
        url: 'https://www.nhs.uk/conditions/wisdom-tooth-removal/',
      },
      {
        title: 'Newcastle Hospitals NHS Foundation Trust — Surgical removal of teeth',
        url: 'https://www.newcastle-hospitals.nhs.uk/resources/surgical-removal-of-teeth/',
      },
      {
        title: 'Newcastle Hospitals NHS Foundation Trust — Oral (mouth) biopsy information leaflet',
        url: 'https://www.newcastle-hospitals.nhs.uk/resources/oral-mouth-biopsy-information-leaflet-for-patients/',
      },
      {
        title: 'NHS — Mouth ulcers',
        url: 'https://www.nhs.uk/conditions/mouth-ulcers/',
      },
    ],
    arContent: {
      title: 'ما الذي يمكن أن تشمله جراحة الفم',
      dek: 'نظرة هادئة ومبنية على الأدلة توضح ما تغطيه "جراحة الفم" فعليًا — من الخلع الجراحي إلى أخذ العينات النسيجية — وما يمكن توقعه في كل مرحلة.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: '"جراحة الفم" مصطلح واسع، لا يشير إلى إجراء واحد بعينه. فهو يشمل كل شيء بدءًا من خلع سنّ عقل منطمر وصولًا إلى أخذ عينة نسيجية صغيرة لفحصها، وتتفاوت درجة التعقيد كثيرًا من حالة إلى أخرى. وكون العلاج مصنّفًا ضمن "جراحة الفم" لا يعني بحد ذاته أن الحالة معقدة أو خطيرة بشكل استثنائي — بل يعكس غالبًا أن أسلوبًا مباشرًا، كالخلع البسيط، لا يناسب تلك السن أو تلك الحالة تحديدًا. وفيما يلي عرض عام لأسباب التوصية بجراحة الفم، وكيفية تقييم الحالة والتخطيط لها عادةً، وما يمكن أن ينطوي عليه التعافي — دون افتراض أن أي حالتين متطابقتان.' },

        { type: 'heading', level: 2, id: 'when-oral-surgery-may-be-recommended', text: 'متى يُوصى بجراحة الفم' },
        { type: 'paragraph', text: [
          'تُخلع معظم الأسنان باستخدام أسلوب الخلع المباشر والبسيط. أما الخلع الجراحي فيصبح ضروريًا في ظروف أكثر تحديدًا — كأن تكون السن مكسورة أو متشققة أو هشّة تحت خط اللثة، أو أن تكون جذورها طويلة أو منحنية أو ذات شكل غير معتاد لا يستوعبه أسلوب الخلع البسيط. ويُعد انطمار ضروس العقل من أكثر الأسباب شيوعًا للجوء إلى جراحة الفم: فحين لا تتوفر مساحة كافية لبزوغ ضرس العقل بالكامل، قد ينطمر مقابل السن التي أمامه أو عظم الفك خلفه، وقد يؤدي ذلك أحيانًا إلى التهابات متكررة أو تسوس أو تكوّن كيس حوله. ومع ذلك، فإن ضرس العقل المنطمر الذي لا يسبب أي مشكلة لا يحتاج تلقائيًا إلى الخلع — بل كثيرًا ما يُترك في مكانه ويُراقَب في الفحوصات الدورية بدلًا من ذلك. وتشمل جراحة الفم أيضًا حالات لا علاقة لها بخلع الأسنان إطلاقًا: فحين تحتاج كتلة أو تقرّح أو منطقة من الأنسجة داخل الفم إلى فحص أدق، قد تُؤخذ عينة صغيرة منها وتُرسَل للفحص المخبري للمساعدة في التوصل إلى تشخيص. وحين تكون السن مصابة بمرض أكثر من كونها مكسورة أو سيئة الوضع، فإن الخلع ليس الخيار الوحيد دائمًا — إذ يمكن أحيانًا لعلاج مثل ',
          { text: 'علاج العصب', href: '/blog/understanding-root-canal-treatment' },
          ' أن يُنقذ سنًّا كان يمكن أن يحتاج إلى الخلع لولا ذلك. ومع ذلك، ففي كل حالة، تخضع التوصية لتقييم فردي، لا لقاعدة عامة تتعلق بسن أو عرض بعينه.',
        ] },

        { type: 'heading', level: 2, id: 'how-your-case-is-assessed', text: 'كيف تُقيَّم حالتك' },
        { type: 'paragraph', text: 'يبدأ التقييم عادةً بفحص سريري، إلى جانب أشعة سينية للتحقق من موضع السن أو المنطقة المعنية وعلاقتها بالتراكيب المحيطة بها. وبالنسبة لبعض ضروس العقل، خصوصًا حين تشير الأشعة السينية إلى احتمال قرب الجذور من عصب يمر عبر الفك السفلي، قد يُقترح إجراء مسح ثلاثي الأبعاد أكثر تفصيلًا — يُعرف أحيانًا بالأشعة المقطعية المخروطية (CBCT) — لتقييم تلك العلاقة بدقة أكبر. ويُلجأ إلى ذلك حين يكون هناك شاغل محدد يستدعي البحث فيه، لا كإجراء معياري يُطبَّق على كل حالة. كما سيسأل طبيبك عن تاريخك الطبي العام وأي أدوية تتناولها، لأن كليهما قد يؤثر في كيفية التخطيط للعلاج. وفي المحصلة، هذا التقييم هو ما يحدد التوصية فعليًا — لا التصنيف العام لـ"جراحة الفم" بحد ذاته — ولن تحتاج كل حالة إلى المجموعة نفسها من التصوير أو الفحوصات.' },

        { type: 'heading', level: 2, id: 'preparing-for-treatment', text: 'التحضير للعلاج' },
        { type: 'paragraph', text: 'تُجرى معظم عمليات جراحة الفم تحت التخدير الموضعي، الذي يُخدّر المنطقة بالكامل بينما تبقى مستيقظًا. وبحسب مدى تعقيد الإجراء ومستوى القلق الذي تشعر به تجاهه، قد يُعرض عليك أيضًا التخدير المهدئ لمساعدتك على الشعور بمزيد من الهدوء والاسترخاء. أما التخدير العام — حيث تكون نائمًا تمامًا — فقد يُنظر فيه في ظروف مُحدَّدة، منها بعض الحالات الأكثر تعقيدًا أو حين لا تناسب الأساليب الأخرى الحالة. وليس أي من التخدير المهدئ أو التخدير العام خيارًا افتراضيًا معتادًا؛ إذ يعتمد الأسلوب المتّبع، إن وُجد، على طبيعة الإجراء وظروفك الخاصة وتفضيلك الشخصي، وهو أمر يناقشه معك طبيب أسنانك أو الجراح مباشرة بدلًا من افتراضه مسبقًا. وقبل المضي في أي علاج، تُشرح في هذه المرحلة أيضًا المخاطر والفوائد والبدائل وما ستتضمنه الرعاية اللاحقة، بحيث تكون أي موافقة تقدمها مبنية على معرفة حقيقية لا مجرد إجراء شكلي.' },

        { type: 'heading', level: 2, id: 'what-the-procedure-can-involve', text: 'ما الذي يمكن أن ينطوي عليه الإجراء' },
        { type: 'paragraph', text: 'تعتمد تفاصيل الإجراء إلى حد كبير على طبيعة ما يُعالَج فعليًا، لكن هناك بعض الأنماط العامة المشتركة بين حالات الخلع الجراحي. فيُعطى التخدير الموضعي أولًا في كل الحالات، حتى حين يُستخدم معه التخدير المهدئ أو التخدير العام. وحين يتعذّر رفع السن ببساطة — لأنها لا تزال مغطاة إلى حد كبير باللثة مثلًا — قد يحتاج الجراح إلى عمل شق صغير في اللثة للوصول إليها بشكل صحيح. وبالنسبة لبعض الأسنان الأكثر صعوبة، خصوصًا ضروس العقل ذات الجذور غير المنتظمة، قد تُقسَّم السن إلى قسمين أو ثلاثة أجزاء أصغر لتسهيل إزالتها، بدلًا من إخراجها دفعة واحدة. وبعد إزالة السن أو النسيج، تُعاد اللثة عادةً إلى وضعها، وتُغلَق عند الحاجة بغرز تذوب من تلقاء نفسها خلال الأسبوعين التاليين تقريبًا. وليس أي من ذلك معيارًا ثابتًا لكل عملية خلع — فكثير منها بسيط ومباشر — والأسلوب المحدد هو ما سيشرحه لك جراحك بخصوص إجرائك أنت تحديدًا.' },

        { type: 'heading', level: 2, id: 'recovery-and-aftercare', text: 'التعافي والعناية اللاحقة' },
        { type: 'paragraph', text: 'يعتمد التعافي على الإجراء نفسه وعلى الشخص، لذا من الأفضل توخي الحذر من تطبيق جدول زمني واحد على كل الحالات. ومع ذلك، ثمة أنماط عامة موثّقة جيدًا بخصوص جراحة ضرس العقل: إذ يُعد الانزعاج والتورم أمرًا شائعًا في الأيام الأولى، ويبلغان ذروتهما عادةً خلال يوم إلى يومين بعد العلاج، وقد يستغرقان نحو أسبوعين ليهدآ تمامًا، إلى جانب بعض التيبّس المؤقت في الفك. وهذا ليس المسار المتوقع لكل إجراء — إذ يتعافى كثير من الأشخاص بشكل أسرع بكثير، خصوصًا بعد عمليات الخلع الأبسط. وعادةً ما تكفي مسكنات الألم البسيطة كالباراسيتامول أو الإيبوبروفين، على أن تُؤخذ بانتظام لا فقط بعد بدء الشعور بالانزعاج فعليًا. ولا تُوصف المضادات الحيوية بشكل روتيني بعد جراحة الفم؛ إذ تُخصَّص عادةً للحالات التي تظهر فيها عدوى فعلية، لا كإجراء وقائي تلقائي. وسيزوّدك فريقك الطبي بتعليمات للعناية اللاحقة خاصة بإجرائك أنت — تشمل أمورًا مثل النظام الغذائي، ونظافة الفم حول المنطقة، والنشاط البدني — ويستحق الأمر اتّباعها بدقة، لأنها مصمَّمة وفق ما جرى فعليًا لا كنصيحة عامة.' },

        { type: 'heading', level: 2, id: 'when-to-contact-your-dental-team', text: 'متى تتواصل مع فريقك الطبي' },
        { type: 'paragraph', text: [
          'تواصل مع فريقك الطبي إذا واجهت نزيفًا لا يتوقف بالضغط اللطيف، أو إذا بدا أن الألم والتورم يزدادان سوءًا بدلًا من التحسن بعد بضعة أيام من العلاج — فكلاهما سبب كافٍ لفحص الحالة بدلًا من الانتظار وحسب. كما يُعد طعم كريه في الفم مصحوبًا بألم متزايد، أو ارتفاع درجة الحرارة والشعور بالتوعك، من الأسباب التي تذكرها هيئة NHS لطلب استشارة أسنان عاجلة بعد إجراء كهذا. وعلى نحو منفصل، وبصرف النظر عمّا إذا كنت قد خضعت لعلاج مؤخرًا: يستحق أي تقرّح أو قرحة أو تغيّر في نسيج الفم لم يلتئم خلال ثلاثة أسابيع أن يُفحَص من قبل طبيب أسنان. وهذا لا يعني أن هناك أمرًا خطيرًا يحدث، لكنه سبب معقول لفحص المنطقة بدلًا من الاستمرار في الانتظار. ويمكنكم الاطلاع على مزيد من التفاصيل حول كيفية تقييمنا للحالات وتخطيطنا للرعاية عبر مختلف الإجراءات على صفحة ',
          { text: 'العلاجات', href: '/treatments' },
          ' لدينا.',
        ] },
      ],
      faqs: [
        { question: 'ما الذي يُصنَّف بأنه "جراحة فم" بدلًا من خلع روتيني؟', answer: 'تُخلع معظم الأسنان بأسلوب الخلع المباشر والبسيط. وتصف "جراحة الفم" عمومًا الحالات التي لا يناسبها هذا الأسلوب — كسن مكسورة أو متشققة تحت خط اللثة، أو ذات جذر غير معتاد الشكل، أو ضرس عقل منطمر — إضافةً إلى إجراءات أخرى كأخذ عينة نسيجية للفحص. والفارق هنا يتعلق بالتقنية المطلوبة، لا بمدى خطورة المشكلة الأساسية.' },
        { question: 'هل سأكون مستيقظًا أثناء الإجراء؟', answer: 'في معظم الحالات، نعم — إذ تُجرى جراحة الفم عادةً تحت التخدير الموضعي، الذي يُخدّر المنطقة بينما تبقى مستيقظًا. وقد يُعرض التخدير المهدئ أو التخدير العام في الإجراءات الأكثر تعقيدًا أو حين تشعر بقلق شديد، إلا أن أيًّا منهما ليس خيارًا افتراضيًا معتادًا؛ إذ يُناقَش ويُتفق عليه معك مسبقًا بناءً على حالتك الخاصة.' },
        { question: 'هل جراحة الفم مؤلمة؟', answer: 'تُخدَّر المنطقة بالتخدير الموضعي قبل بدء العلاج، لذا لا يُفترض عادةً أن تشعر بألم أثناء الإجراء نفسه، وإن كان قد تشعر بضغط أو حركة. وبعد العلاج، يُعد بعض الانزعاج أمرًا شائعًا مع زوال أثر التخدير، ويمكن عادةً التحكم فيه جيدًا بمسكنات الألم المتاحة دون وصفة طبية، متى استُخدمت بانتظام.' },
        { question: 'كم تستغرق فترة التعافي عادةً، وهل سأحتاج إلى إجازة من العمل؟', answer: 'يختلف ذلك باختلاف الإجراء والشخص. ففي بعض عمليات ضرس العقل، يكون التورم والانزعاج في أوضح حالاتهما خلال اليوم أو اليومين الأولين، وقد يستغرقان نحو أسبوعين ليهدآ تمامًا، مع أن كثيرًا من الأشخاص يشعرون بعودتهم إلى طبيعتهم قبل ذلك بكثير. أما عمليات الخلع الأبسط فغالبًا ما تتطلب فترة تعافٍ أقصر. ويمكن لفريقك الطبي أن يمنحك توقعًا أكثر تحديدًا يخص إجراءك أنت.' },
        { question: 'ماذا لو لاحظت كتلة أو تقرّحًا في فمي لم يُفحص بعد؟', answer: 'يستحق أي تقرّح أو كتلة أو تغيّر في نسيج الفم أن يُفحَص إذا لم يلتئم خلال نحو ثلاثة أسابيع. وهذا معيار معتمد ومعقول، وليس دليلًا على وجود أمر خطير. ويمكن لطبيب الأسنان فحص المنطقة بدقة وتقديم المشورة بشأن الخطوات التالية، بما في ذلك أخذ خزعة إذا استدعت الحاجة ذلك فعليًا.' },
      ],
      references: [
        {
          title: 'NHS — Wisdom tooth removal',
          url: 'https://www.nhs.uk/conditions/wisdom-tooth-removal/',
        },
        {
          title: 'Newcastle Hospitals NHS Foundation Trust — Surgical removal of teeth',
          url: 'https://www.newcastle-hospitals.nhs.uk/resources/surgical-removal-of-teeth/',
        },
        {
          title: 'Newcastle Hospitals NHS Foundation Trust — Oral (mouth) biopsy information leaflet',
          url: 'https://www.newcastle-hospitals.nhs.uk/resources/oral-mouth-biopsy-information-leaflet-for-patients/',
        },
        {
          title: 'NHS — Mouth ulcers',
          url: 'https://www.nhs.uk/conditions/mouth-ulcers/',
        },
      ],
    },
  },
  {
    slug: 'the-case-for-regular-dental-check-ups',
    title: 'The Case for Regular Dental Check-Ups',
    dek: 'Why consistent preventive care tends to matter more than any single treatment — and why a check-up looks different for every patient.',
    category: 'preventive-dentistry',
    publishedAt: '2026-08-06',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "It's a fair question: if nothing hurts, why go to the dentist at all? The honest answer is that some dental problems don't announce themselves early on — decay and gum disease can develop quietly, without pain, for some time before they become noticeable. A preventive check-up isn't built around finding something wrong; it's built around assessment, monitoring, and advice tailored to your own mouth, so that if something is starting to develop, it's more likely to be picked up while it's still limited, rather than only once it's already causing problems. Attending regularly doesn't mean every visit leads to treatment — for many people, most check-ups simply confirm that things are stable. What follows sets out what a check-up can actually involve, why it doesn't look the same for everyone, and how often you might reasonably need one." },

      { type: 'heading', level: 2, id: 'what-a-preventive-check-up-can-look-for', text: 'What a Preventive Check-Up Can Look For' },
      { type: 'paragraph', text: "A dental examination typically starts with a conversation — about any symptoms or concerns you've noticed, and about your general health, since some medical conditions and medications can affect your mouth. From there, your dentist examines your teeth and gums, and where appropriate, checks the soft tissues of your mouth more generally. This is also where oral-health habits come into the picture: your diet, smoking or alcohol use, and how you clean your teeth are usually discussed, since they all influence your risk of future problems. Based on what's found, your dentist decides whether anything needs further investigation, and gives advice that's actually relevant to you and your circumstances, rather than generic guidance handed out the same way to everyone. Not every one of these elements plays an equally large part at every visit — a straightforward check-up for someone with stable oral health looks different from one where a new concern is being followed up." },

      { type: 'heading', level: 2, id: 'why-you-may-not-need-an-x-ray-every-time', text: 'Why You May Not Need an X-Ray Every Time' },
      { type: 'paragraph', text: "It's a common assumption that a dental check-up automatically includes an X-ray, but that isn't how they're meant to be used. UK guidance on dental radiography is clear that X-rays should be prescribed based on individual clinical need, not taken as a matter of routine regardless of whether there's a specific reason to. In practice, this means your dentist decides whether an X-ray would actually add useful information for your particular situation — for example, checking an area that can't be assessed properly by examination alone — rather than including one automatically at every visit. If you haven't had an X-ray in a while, that isn't necessarily a gap in your care; it may simply mean nothing has arisen that requires one." },

      { type: 'heading', level: 2, id: 'does-every-check-up-include-a-clean', text: 'Does Every Check-Up Include a Clean?' },
      { type: 'paragraph', text: "A professional clean, sometimes called a scale and polish, is another part of dental care that's often assumed to be automatic — but it isn't a standard component of every check-up either. Whether it's recommended depends on what your dentist finds: how much plaque or tartar has built up, and the general condition of your gums. Where there's a genuine clinical reason for it — for example, a build-up that brushing alone can't remove, or signs that your gums need closer support — a professional clean can be a useful part of managing gum health; where your oral hygiene at home is already keeping things in good order, it may simply not be needed at that particular visit. This isn't a substitute for daily brushing and cleaning between your teeth, and it isn't something that, on its own, prevents dental disease." },

      { type: 'heading', level: 2, id: 'how-often-should-you-have-a-check-up', text: 'How Often Should You Have a Check-Up?' },
      { type: 'paragraph', text: "This is probably the most persistent assumption in dentistry: that everyone should go every six months. UK guidance doesn't actually support that as a universal rule. According to NICE, the interval between check-ups for adults can reasonably range from around three months to two years, depending on an individual assessment of oral-health risk — and the NHS makes the same point directly to patients, noting that while many people assume six months is standard, the appropriate gap can run anywhere from three months up to two years. Children and teenagers under 18 are looked at slightly differently, with a shorter maximum interval of twelve months, reflecting how dental decay can progress faster at a younger age. In practice, this means the right interval for you is the one your dentist recommends based on your own oral health and history — not a fixed calendar rule that applies equally to everyone. Someone with a strong track record of good oral health may reasonably be seen less often than someone whose risk profile currently calls for closer monitoring." },

      { type: 'heading', level: 2, id: 'what-you-can-do-between-visits', text: 'What You Can Do Between Visits' },
      { type: 'paragraph', text: [
        "Most of what protects your teeth and gums day to day happens between appointments, not during them. Brushing twice daily with a fluoride toothpaste, cleaning between your teeth, and being mindful of how often you have sugary food and drink all make a genuine difference. Beyond that, following whatever specific advice your dentist has given you for your own situation matters more than any general checklist, since your particular risk factors will shape what's actually worth prioritising. Keeping to the recall interval you've been advised, rather than letting appointments slip because nothing feels wrong, is part of this too. Our ",
          { text: 'check-up and cleaning', href: '/check-up-cleaning' },
          ' page has more on what this looks like in practice.',
        ] },

      { type: 'heading', level: 2, id: 'when-prevention-becomes-early-treatment', text: 'When Prevention Becomes Early Treatment' },
      { type: 'paragraph', text: [
        "Sometimes a preventive check-up does turn up something that needs attention — a small area of decay, early signs of gum inflammation, or something worth keeping an eye on at your next visit. Finding something small like this doesn't automatically mean extensive treatment is needed; a lot of the value of regular attendance is that it can help identify these things while they're still limited, giving you and your dentist the opportunity to decide what, if anything, needs to happen next. It isn't a guarantee — not every problem behaves predictably, and some conditions progress regardless of how early they're caught — but consistent monitoring genuinely gives you and your dentist more to work with. Preventive care isn't really a single appointment; it's closer to an ongoing conversation about your own oral health, one check-up at a time. For children specifically, our ",
        { text: 'article on helping children feel comfortable at the dentist', href: '/blog/helping-your-child-feel-comfortable-at-the-dentist' },
        ' covers how this same principle of regular, unhurried attendance applies from an early age.',
      ] },
    ],
    faqs: [
      { question: 'How often should I have a dental check-up?', answer: "There's no single answer that applies to everyone. UK guidance suggests adults can reasonably be seen anywhere from every three months to every two years, depending on an individual assessment of oral-health risk, while children under 18 are generally reviewed at intervals of no more than one year. Your dentist will recommend an interval based on your own history and current oral health, not a fixed calendar rule." },
      { question: 'Will I always need an X-ray at my check-up?', answer: "No. X-rays are based on clinical need rather than taken automatically at every visit. Your dentist will only recommend one where it's likely to provide information that examination alone can't, such as looking at an area that isn't visible or assessable by eye." },
      { question: 'Does every check-up include a clean?', answer: 'Not necessarily. A check-up is primarily an examination and assessment; a professional clean (sometimes called a scale and polish) is a separate treatment that\'s recommended when there\'s a clinical reason for it, such as a build-up of plaque or tartar, rather than included as standard every time.' },
      { question: 'What happens if my dentist finds a small problem?', answer: "It depends on what's found, but a small issue identified early doesn't automatically mean extensive treatment. Your dentist will explain what's been noticed and discuss whether it needs monitoring, preventive advice, or treatment, and on what timescale — many small findings don't require anything urgent, and how they're managed depends on what's actually found." },
      { question: 'Can regular check-ups really prevent dental problems?', answer: "Not entirely — check-ups can't prevent all dental disease, and some conditions develop regardless of how regularly you attend. What consistent attendance can do is help identify developing problems and support personalised preventive advice, which may allow issues to be managed sooner and more simply than if they were left unnoticed." },
    ],
    references: [
      {
        title: 'NHS — Dental check-ups',
        url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/',
      },
      {
        title: 'NICE — CG19: Dental checks: intervals between oral health reviews',
        url: 'https://www.nice.org.uk/guidance/cg19/chapter/Recommendations',
      },
      {
        title: 'NHS Business Services Authority — What band of treatment is a scale and polish?',
        url: 'https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-02034/en-us',
      },
      {
        title: 'FGDP(UK) / College of General Dentistry — Selection Criteria for Dental Radiography',
        url: 'https://cgdent.uk/wp-content/uploads/securepdfs/FGDP-SCDR-ALL-Web.pdf',
      },
    ],
    arContent: {
      title: 'لماذا تهم فحوصات الأسنان المنتظمة؟',
      dek: 'لماذا تُعدّ الرعاية الوقائية المستمرة أكثر أهمية من أي علاج بمفرده — ولماذا يختلف الفحص من مريض إلى آخر.',
      author: 'د. أيمن شحادة',
      medicalReviewer: 'د. أيمن شحادة',
      content: [
        { type: 'paragraph', text: 'سؤال منطقي: ما دام لا يوجد ألم، فلماذا الذهاب إلى طبيب الأسنان أصلًا؟ الإجابة الصادقة هي أن بعض مشكلات الأسنان لا تُعلن عن نفسها مبكرًا — فقد يتطور تسوس الأسنان أو أمراض اللثة بهدوء، دون ألم، لفترة قبل أن تصبح ملحوظة. والفحص الوقائي لا يُبنى على افتراض وجود خطأ ما؛ بل يُبنى على التقييم والمراقبة وتقديم نصائح مصممة خصيصًا لفمك، بحيث إذا بدأت مشكلة ما في التكوّن، تكون فرصة اكتشافها أكبر بينما لا تزال محدودة، لا بعد أن تتسبب في مشكلات فعلية. والحضور بانتظام لا يعني أن كل زيارة تنتهي بعلاج — فبالنسبة لكثير من الناس، تُثبت معظم الفحوصات فقط أن الأمور مستقرة. وفيما يلي عرض لما يمكن أن يتضمنه الفحص فعليًا، ولماذا لا يبدو بالشكل نفسه لدى كل شخص، وما مدى تكراره المعقول.' },

        { type: 'heading', level: 2, id: 'what-a-preventive-check-up-can-look-for', text: 'ما الذي يبحث عنه الفحص الوقائي' },
        { type: 'paragraph', text: "يبدأ الفحص السني عادةً بمحادثة — حول أي أعراض أو مخاوف لاحظتَها، وحول صحتك العامة، لأن بعض الحالات الطبية والأدوية قد تؤثر في فمك. ومن هناك، يفحص طبيبك أسنانك ولثتك، ويتحقق عند الحاجة من أنسجة فمك الرخوة بشكل أعم. وهنا أيضًا تدخل عادات صحة الفم في الصورة: فنظامك الغذائي، والتدخين أو تناول الكحول، وطريقة تنظيف أسنانك، كل ذلك يُناقَش عادةً لأنه يؤثر في احتمالية حدوث مشكلات مستقبلية. وبناءً على ما يُكتشف، يقرر طبيبك ما إذا كان أي شيء يحتاج إلى مزيد من الفحص، ويقدم نصائح ذات صلة فعلية بك وبظروفك، لا توجيهات عامة تُقدَّم بالطريقة نفسها لكل شخص. وليس لكل هذه العناصر الدور نفسه في كل زيارة — فالفحص المباشر لشخص يتمتع بصحة فموية مستقرة يختلف عن فحص يُتابَع فيه شاغل جديد." },

        { type: 'heading', level: 2, id: 'why-you-may-not-need-an-x-ray-every-time', text: 'لماذا قد لا تحتاج إلى أشعة سينية في كل مرة' },
        { type: 'paragraph', text: 'من الشائع افتراض أن الفحص السني يشمل أشعة سينية تلقائيًا، لكن هذا ليس الغرض الفعلي منها. فالإرشادات البريطانية بشأن التصوير الشعاعي للأسنان واضحة في أن الأشعة السينية ينبغي أن تُطلَب بناءً على حاجة سريرية فردية، لا كإجراء روتيني بصرف النظر عن وجود سبب محدد لها. وعمليًا، يعني ذلك أن طبيبك يقرر ما إذا كانت الأشعة السينية ستضيف فعليًا معلومة مفيدة لحالتك الخاصة — كفحص منطقة لا يمكن تقييمها بدقة بالفحص السريري وحده — بدلًا من تضمينها تلقائيًا في كل زيارة. وإذا لم تخضع لأشعة سينية منذ فترة، فهذا لا يعني بالضرورة نقصًا في رعايتك؛ فقد يعني ببساطة أنه لم يطرأ ما يستدعي ذلك.' },

        { type: 'heading', level: 2, id: 'does-every-check-up-include-a-clean', text: 'هل يشمل كل فحص تنظيفًا؟' },
        { type: 'paragraph', text: 'التنظيف المهني، الذي يُعرف أحيانًا بتقشير الأسنان وتلميعها، جزء آخر من رعاية الأسنان يُفترض غالبًا أنه تلقائي — لكنه أيضًا ليس عنصرًا معياريًا في كل فحص. فما إذا كان يُنصح به يعتمد على ما يجده طبيبك: مقدار ما تراكم من البلاك أو الجير، والحالة العامة للثتك. وحين يكون هناك سبب سريري حقيقي له — كتراكم لا يمكن للتفريش وحده إزالته، أو علامات تشير إلى حاجة لثتك إلى دعم أوثق — يمكن أن يكون التنظيف المهني جزءًا مفيدًا من إدارة صحة اللثة؛ أما حين تكون عنايتك بنظافة فمك في المنزل تحفظ الأمور بحالة جيدة أصلًا، فقد لا يكون التنظيف ضروريًا في تلك الزيارة بعينها. وهذا ليس بديلًا عن التفريش اليومي والتنظيف بين الأسنان، ولا هو أمر يمنع بمفرده أمراض الأسنان.' },

        { type: 'heading', level: 2, id: 'how-often-should-you-have-a-check-up', text: 'كم مرة ينبغي أن تخضع للفحص؟' },
        { type: 'paragraph', text: 'هذا هو الافتراض الأكثر رسوخًا في طب الأسنان: أن على الجميع الحضور كل ستة أشهر. لكن الإرشادات البريطانية لا تدعم ذلك فعليًا كقاعدة عامة. فوفقًا لهيئة NICE، يمكن أن تتراوح الفترة بين الفحوصات لدى البالغين بشكل معقول من نحو ثلاثة أشهر إلى سنتين، تبعًا لتقييم فردي لمخاطر صحة الفم — وتؤكد هيئة NHS النقطة نفسها مباشرة للمرضى، مشيرة إلى أنه بينما يفترض كثيرون أن ستة أشهر هي المعيار، فإن الفاصل المناسب قد يمتد من ثلاثة أشهر إلى سنتين. أما الأطفال والمراهقون دون 18 عامًا، فيُنظر إليهم بشكل مختلف قليلًا، بحد أقصى أقصر مدته اثنا عشر شهرًا، بما يعكس أن تسوس الأسنان قد يتطور بسرعة أكبر في سن أصغر. وعمليًا، يعني ذلك أن الفاصل الصحيح بالنسبة لك هو ما يوصي به طبيبك بناءً على صحة فمك وتاريخك الخاص — لا قاعدة تقويمية ثابتة تنطبق على الجميع بالتساوي. فمن يملك سجلًا قويًا من صحة الفم الجيدة قد يُرى بشكل معقول بوتيرة أقل ممن يستدعي وضعه الحالي متابعة أوثق.' },

        { type: 'heading', level: 2, id: 'what-you-can-do-between-visits', text: 'ما يمكنك فعله بين الزيارات' },
        { type: 'paragraph', text: [
          'معظم ما يحمي أسنانك ولثتك يوميًا يحدث بين المواعيد، لا خلالها. فتفريش الأسنان مرتين يوميًا بمعجون يحتوي على الفلورايد، والتنظيف بين الأسنان، والانتباه إلى وتيرة تناول الأطعمة والمشروبات السكرية، كل ذلك يُحدث فرقًا حقيقيًا. وإلى جانب ذلك، فإن اتّباع أي نصيحة محددة قدّمها طبيبك بخصوص حالتك أهم من أي قائمة عامة، إذ إن عوامل الخطر الخاصة بك هي ما يحدد ما يستحق الأولوية فعليًا. والحفاظ على الفاصل الزمني الموصى به للمراجعة، بدلًا من ترك المواعيد تتأخر لأن لا شيء يبدو خاطئًا، جزء من ذلك أيضًا. ويمكنكم الاطلاع على مزيد من التفاصيل حول ذلك عمليًا على صفحة ',
          { text: 'الفحص والتنظيف', href: '/check-up-cleaning' },
          ' لدينا.',
        ] },

        { type: 'heading', level: 2, id: 'when-prevention-becomes-early-treatment', text: 'حين تتحول الوقاية إلى علاج مبكر' },
        { type: 'paragraph', text: [
          'أحيانًا يكشف الفحص الوقائي عن أمر يستدعي الاهتمام — منطقة تسوس صغيرة، أو علامات مبكرة على التهاب اللثة، أو شيء يستحق المراقبة في زيارتك القادمة. واكتشاف أمر صغير كهذا لا يعني تلقائيًا الحاجة إلى علاج مكثّف؛ فجزء كبير من قيمة الحضور المنتظم هو أنه يساعد على اكتشاف هذه الأمور بينما لا تزال محدودة، مما يمنحك وطبيبك فرصة تحديد ما يجب فعله تاليًا، إن وُجد. وهذا ليس ضمانًا — فلا تسير كل مشكلة بشكل متوقع، وتتطور بعض الحالات بصرف النظر عن مدى مبكر اكتشافها — لكن المراقبة المستمرة تمنحك وطبيبك فعليًا ما تعملان عليه معًا. والرعاية الوقائية ليست موعدًا واحدًا في حقيقتها؛ بل هي أقرب إلى محادثة مستمرة حول صحة فمك، فحصًا بعد آخر. وبالنسبة للأطفال تحديدًا، يتناول ',
          { text: 'مقالنا عن مساعدة طفلك على الشعور بالارتياح عند طبيب الأسنان', href: '/blog/helping-your-child-feel-comfortable-at-the-dentist' },
          ' كيفية انطباق هذا المبدأ نفسه — الحضور المنتظم غير المتسرع — منذ سن مبكرة.',
        ] },
      ],
      faqs: [
        { question: 'كم مرة ينبغي أن أخضع لفحص الأسنان؟', answer: 'لا توجد إجابة واحدة تنطبق على الجميع. تشير الإرشادات البريطانية إلى أن البالغين يمكن أن يُرَوا بشكل معقول من كل ثلاثة أشهر إلى كل سنتين، تبعًا لتقييم فردي لمخاطر صحة الفم، بينما يُراجَع الأطفال دون 18 عامًا عمومًا بفواصل لا تتجاوز عامًا واحدًا. وسيوصي طبيبك بفاصل زمني بناءً على تاريخك وحالتك الحالية، لا قاعدة تقويمية ثابتة.' },
        { question: 'هل سأحتاج دائمًا إلى أشعة سينية في فحصي؟', answer: 'لا. تُقرَّر الأشعة السينية بناءً على الحاجة السريرية لا كإجراء تلقائي في كل زيارة. ولن يوصي طبيبك بها إلا حين يُرجَّح أن تقدم معلومة لا يمكن للفحص وحده تقديمها، كفحص منطقة غير مرئية أو غير قابلة للتقييم بالعين.' },
        { question: 'هل يشمل كل فحص تنظيفًا؟', answer: 'ليس بالضرورة. الفحص هو في الأساس تقييم وفحص؛ والتنظيف المهني (المعروف أحيانًا بتقشير الأسنان وتلميعها) علاج منفصل يُوصى به حين يكون هناك سبب سريري لذلك، كتراكم البلاك أو الجير، لا كإجراء معياري في كل مرة.' },
        { question: 'ماذا يحدث إذا وجد طبيبي مشكلة صغيرة؟', answer: 'يعتمد ذلك على ما يُكتشف، لكن مشكلة صغيرة تُكتشف مبكرًا لا تعني تلقائيًا الحاجة إلى علاج مكثّف. سيشرح طبيبك ما لاحظه ويناقش معك ما إذا كانت تحتاج إلى مراقبة، أو نصيحة وقائية، أو علاج، وعلى أي مدى زمني — فكثير من الملاحظات الصغيرة لا يستدعي أي إجراء عاجل، ويعتمد التعامل معها على ما يُكتشف فعليًا.' },
        { question: 'هل يمكن للفحوصات المنتظمة أن تمنع مشكلات الأسنان فعليًا؟', answer: 'ليس تمامًا — فالفحوصات لا يمكنها منع كل أمراض الأسنان، وتتطور بعض الحالات بصرف النظر عن مدى انتظام حضورك. ما يمكن أن يفعله الحضور المنتظم هو المساعدة في اكتشاف المشكلات الناشئة ودعم نصائح وقائية مخصصة، وهو ما قد يسمح بإدارة المشكلات بشكل أبسط وأسرع مما لو تُركت دون ملاحظة.' },
      ],
      references: [
        {
          title: 'NHS — Dental check-ups',
          url: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/',
        },
        {
          title: 'NICE — CG19: Dental checks: intervals between oral health reviews',
          url: 'https://www.nice.org.uk/guidance/cg19/chapter/Recommendations',
        },
        {
          title: 'NHS Business Services Authority — What band of treatment is a scale and polish?',
          url: 'https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-02034/en-us',
        },
        {
          title: 'FGDP(UK) / College of General Dentistry — Selection Criteria for Dental Radiography',
          url: 'https://cgdent.uk/wp-content/uploads/securepdfs/FGDP-SCDR-ALL-Web.pdf',
        },
      ],
    },
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
