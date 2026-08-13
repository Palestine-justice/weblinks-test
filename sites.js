
const sites = [
  
{
    name: "+972 Magazine",
    url: "https://www.972mag.com/",
    type: "News & journalism",
    group: "Israeli-led / based / founded",
    description: "Independent journalism and analysis on Israel and Palestine.",
    tags: ["journalism", "analysis", "Israel", "Palestine"]
  },
    
  {
    name: "Abby Martin / Empire Files",
    url: "https://www.youtube.com/@EmpireFiles",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Documentaries, interviews and political reporting.",
    tags: ["YouTube", "documentary", "interviews"]
  },
    
  {
    name: "American Friends of Combatants for Peace",
    url: "https://www.afcfp.org/",
    type: "Campaign & advocacy",
    group: "US-based group",
    description: "US support organisation for Combatants for Peace.",
    tags: ["peace", "solidarity", "US"]
  },
    
  {
    name: "Amnesty International",
    url: "https://www.amnesty.org/en/",
    type: "Human rights",
    group: "International organisation",
    description: "International human rights organisation publishing research and campaigns.",
    tags: ["human rights", "reports", "international"]
  },
    
  {
    name: "BDS Movement",
    url: "https://bdsmovement.net/",
    type: "Campaign & advocacy",
    group: "Palestine-led / based / founded",
    description: "Palestinian-led campaign for boycott, divestment and sanctions.",
    tags: ["BDS", "campaign", "Palestinian-led"]
  },
    
  {
    name: "Breaking the Silence",
    url: "https://www.breakingthesilence.org.il/",
    type: "Human rights",
    group: "Israeli-led / based / founded",
    description: "Organisation publishing testimonies from former Israeli soldiers.",
    tags: ["testimonies", "occupation", "Israel"]
  },
    
  {
    name: "B’Tselem",
    url: "https://www.btselem.org/",
    type: "Human rights",
    group: "Israeli-led / based / founded",
    description: "Israeli human rights organisation documenting conditions in the occupied territories.",
    tags: ["documentation", "human rights", "occupied territories"]
  },
    
  {
    name: "Chris Hedges",
    url: "https://www.youtube.com/@ChrisHedgesChannel/videos",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Interviews and commentary on politics, war and society.",
    tags: ["YouTube", "interviews", "politics"]
  },
    
  {
    name: "Declassified UK",
    url: "https://www.declassifieduk.org/",
    type: "News & journalism",
    group: "Independent media",
    description: "Investigative journalism focused on UK foreign policy and national security.",
    tags: ["investigations", "UK", "foreign policy"]
  },
    
  {
    name: "Declassified UK — YouTube",
    url: "https://www.youtube.com/declassifieduk",
    type: "YouTube channel",
    group: "Independent media",
    description: "Video investigations and commentary from Declassified UK.",
    tags: ["YouTube", "UK", "investigations"]
  },
    
  {
    name: "Democracy Now!",
    url: "https://www.democracynow.org/",
    type: "News & journalism",
    group: "Independent media",
    description: "Independent news programme covering global affairs, rights and social movements.",
    tags: ["news", "interviews", "human rights"]
  },
    
  {
    name: "Double Down News",
    url: "https://www.doubledown.news/",
    type: "News & journalism",
    group: "Independent media",
    description: "Independent video journalism and political commentary.",
    tags: ["video", "commentary", "UK"]
  },
    
  {
    name: "Double Down News — YouTube",
    url: "https://www.youtube.com/@DoubleDownNews/videos",
    type: "YouTube channel",
    group: "Independent media",
    description: "Video journalism and political commentary from Double Down News.",
    tags: ["YouTube", "video", "journalism"]
  },
    
  {
    name: "Drop Site News",
    url: "https://www.dropsitenews.com/",
    type: "News & journalism",
    group: "Independent media",
    description: "Independent investigative journalism and analysis.",
    tags: ["investigations", "analysis"]
  },
    
  {
    name: "Electronic Intifada",
    url: "https://electronicintifada.net/",
    type: "News & journalism",
    group: "Palestine-focused media",
    description: "News, analysis and commentary focused on Palestine.",
    tags: ["news", "analysis", "Palestine"]
  },
    
  {
    name: "George Galloway",
    url: "https://www.youtube.com/@GeorgeGallowayOfficial",
    type: "YouTube channel",
    group: "Political commentator",
    description: "Political commentary and current affairs.",
    tags: ["YouTube", "UK", "politics"]
  },
    
  {
    name: "Human Rights Watch",
    url: "https://www.hrw.org/",
    type: "Human rights",
    group: "International organisation",
    description: "International organisation publishing human rights investigations and reports.",
    tags: ["human rights", "reports", "international"]
  },
    
  {
    name: "If Americans Knew",
    url: "https://ifamericansknew.org/",
    type: "Research & education",
    group: "US-based group",
    description: "US-based information and advocacy resource focused on Palestine and Israel.",
    tags: ["US", "education", "advocacy"]
  },
    
  {
    name: "Israeli Committee Against House Demolitions (ICAHD)",
    url: "https://icahd.org/",
    type: "Human rights",
    group: "Israeli-led / based / founded",
    description: "Organisation campaigning against house demolitions and displacement.",
    tags: ["house demolitions", "displacement", "advocacy"]
  },
    
  {
    name: "Janta Ka Reporter",
    url: "https://www.youtube.com/@JantaKaReporter",
    type: "YouTube channel",
    group: "Independent media",
    description: "News commentary and interviews.",
    tags: ["YouTube", "news", "interviews"]
  },
    
  {
    name: "Katie Halper",
    url: "https://www.youtube.com/@TheKatieHalperShow",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Interviews and political commentary.",
    tags: ["YouTube", "interviews", "commentary"]
  },
    
  {
    name: "Kernow Damo",
    url: "https://www.youtube.com/@KernowDamo",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Political commentary and current affairs videos.",
    tags: ["YouTube", "UK", "commentary"]
  },
    
  {
    name: "Kim Iversen",
    url: "https://www.youtube.com/@KimIversen",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Political commentary and interviews.",
    tags: ["YouTube", "commentary", "interviews"]
  },
    
  {
    name: "Max Blumenthal",
    url: "https://www.youtube.com/@mblumenthal",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Political commentary, interviews and reporting.",
    tags: ["YouTube", "reporting", "commentary"]
  },
    
  {
    name: "Mazin Qumsiyeh",
    url: "https://qumsiyeh.org/",
    type: "Research & education",
    group: "Palestine-led / based / founded",
    description: "Personal site containing writing, research and educational material.",
    tags: ["research", "education", "Palestine"]
  },
    
  {
    name: "Middle East Eye",
    url: "https://www.middleeasteye.net/",
    type: "News & journalism",
    group: "Independent media",
    description: "News and analysis focused on the Middle East, including extensive coverage of Palestine.",
    tags: ["news", "analysis", "Middle East"]
  },
    
  {
    name: "Middle East Eye — YouTube",
    url: "https://www.youtube.com/MiddleEastEye",
    type: "YouTube channel",
    group: "Independent media",
    description: "Video news and reporting from Middle East Eye.",
    tags: ["YouTube", "news", "Middle East"]
  },
    
  {
    name: "Middle East Monitor",
    url: "https://www.middleeastmonitor.com/",
    type: "News & journalism",
    group: "Independent media",
    description: "News and commentary on the Middle East, including Palestine.",
    tags: ["news", "Middle East"]
  },
    
  {
    name: "MintPress News",
    url: "https://www.youtube.com/@MintPressNews",
    type: "YouTube channel",
    group: "Independent media",
    description: "News commentary, interviews and reporting.",
    tags: ["YouTube", "news", "interviews"]
  },
    
  {
    name: "Mondoweiss",
    url: "https://mondoweiss.net/",
    type: "News & journalism",
    group: "Independent media",
    description: "News and commentary focused on Palestine, Israel and related US policy.",
    tags: ["news", "analysis", "US"]
  },
    
  {
    name: "Owen Jones",
    url: "https://www.youtube.com/@OwenJonesTalks",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Political commentary, interviews and current affairs.",
    tags: ["YouTube", "UK", "commentary"]
  },
    
  {
    name: "Professor Seyed Mohammad Marandi",
    url: "https://www.youtube.com/@ProfessorMarandi",
    type: "YouTube channel",
    group: "Academic commentator",
    description: "Commentary and interviews on regional politics and international affairs.",
    tags: ["YouTube", "academic", "Middle East"]
  },
    
  {
    name: "Resistance Solidarity Network",
    url: "https://www.refuser.org/",
    type: "Campaign & advocacy",
    group: "Israeli-led / based / founded",
    description: "Support network associated with Israeli military refusal and conscientious objection.",
    tags: ["refusal", "solidarity", "Israel"]
  },
    
  {
    name: "Sabby Sabs",
    url: "https://www.youtube.com/@SabbySabs",
    type: "YouTube channel",
    group: "Independent commentator",
    description: "Political commentary and interviews.",
    tags: ["YouTube", "commentary", "interviews"]
  },
    
  {
    name: "The Intercept",
    url: "https://theintercept.com/",
    type: "News & journalism",
    group: "Independent media",
    description: "Investigative journalism on politics, security and human rights.",
    tags: ["investigations", "politics", "human rights"]
  },
    
  {
    name: "The New Arab",
    url: "https://www.newarab.com/",
    type: "News & journalism",
    group: "Independent media",
    description: "News and analysis covering the Arab world and wider region.",
    tags: ["news", "Arab world", "Middle East"]
  },
    
  {
    name: "The Palestine Chronicle",
    url: "https://www.palestinechronicle.com/",
    type: "News & journalism",
    group: "Palestine-focused media",
    description: "News, commentary and cultural writing focused on Palestine.",
    tags: ["news", "commentary", "culture"]
  },
    
  {
    name: "The Young Turks",
    url: "https://www.youtube.com/@TheYoungTurks",
    type: "YouTube channel",
    group: "Independent media",
    description: "Political news, discussion and commentary.",
    tags: ["YouTube", "news", "commentary"]
  },
    
  {
    name: "TRT World",
    url: "https://www.youtube.com/@trtworld",
    type: "YouTube channel",
    group: "International media",
    description: "International news and current affairs videos.",
    tags: ["YouTube", "news", "international"]
  },
    
  {
    name: "UNRWA",
    url: "https://www.unrwa.org/",
    type: "Aid & international bodies",
    group: "International organisation",
    description: "United Nations agency for Palestine refugees.",
    tags: ["UN", "refugees", "aid"]
  },
    
{
    name: "We Are Not Numbers",
    url: "https://wearenotnumbers.org/",
    type: "Culture & testimony",
    group: "Palestine-led / based / founded",
    description: "Platform for personal stories and writing by Palestinian contributors.",
    tags: ["stories", "writing", "Palestinian voices"]
},
    
{
    name: "Zeteo",
    url: "https://zeteo.com/",
    type: "News & journalism",
    group: "Independent media",
    description: "Independent journalism, interviews and political commentary.",
    tags: ["journalism", "interviews", "commentary"]  
},
    
{
  name: "Novara Media",
  url: "https://novaramedia.com",
  type: "News & Analysis",
  group: "Independent Media",
  description: "UK independent media outlet covering politics, Palestine, social justice and international affairs.",
  tags: ["UK", "news", "politics", "Palestine", "analysis"]
},

{
  name: "The Majority Report",
  url: "https://www.youtube.com/@TheMajorityReport",
  type: "YouTube Channel",
  group: "Independent Media",
  description: "Progressive US political news and commentary featuring interviews, analysis and discussions on domestic and international issues.",
  tags: ["YouTube", "US", "politics", "analysis", "news"]
},

{
  name: "Breaking Points",
  url: "https://www.youtube.com/@breakingpoints",
  type: "YouTube Channel",
  group: "Independent Media",
  description: "Independent news and political analysis covering US and international affairs from multiple perspectives.",
  tags: ["YouTube", "news", "politics", "analysis", "international"]
},

{
  name: "Jewish Voice for Peace",
  url: "https://www.jewishvoiceforpeace.org",
  type: "Advocacy Organisation",
  group: "Jewish Voices",
  description: "Jewish-led organisation advocating Palestinian freedom, equality and human rights through non-violent activism.",
  tags: ["Jewish", "Palestine", "human rights", "advocacy", "peace"]
},

{
  name: "Palestine Deep Dive",
  url: "https://palestinedeepdive.com",
  type: "News & Analysis",
  group: "Independent Media",
  description: "Independent journalism, interviews and analysis focused on Palestine, Israel and the wider Middle East.",
  tags: ["Palestine", "Middle East", "interviews", "analysis", "news"]
},

{
  name: "JAZIC (Jewish Anti-Zionist Congress)",
  url: "https://jazic.org",
  type: "Conference & Organisation",
  group: "Jewish Voices",
  description: "International Jewish anti-Zionist congress bringing together academics, activists, journalists and civil society to discuss Palestinian liberation, decolonisation, equality and restorative justice.",
  tags: ["Jewish", "anti-Zionist", "Palestine", "conference", "decolonisation", "activism"]
},

{
  name: "Freedom Flotilla Coalition",
  url: "https://freedomflotilla.org",
  type: "Activism & Campaign",
  group: "Palestine Solidarity",
  description: "International civil society coalition organising nonviolent maritime missions challenging the blockade of Gaza and seeking to deliver humanitarian aid and solidarity.",
  tags: ["Palestine", "Gaza", "flotilla", "humanitarian aid", "activism", "solidarity"]
},

{
  name: "Al Jazeera English",
  url: "https://youtube.com/@aljazeeraenglish",
  type: "YouTube Channel",
  group: "News & Media",
  description: "English-language international news channel providing reporting, documentaries and analysis, with extensive coverage of Palestine, Gaza and the wider Middle East.",
  tags: ["YouTube", "Palestine", "Gaza", "Middle East", "news", "documentaries", "analysis"]
},

{
  name: "Al Jazeera – Middle East",
  url: "https://www.aljazeera.com/middle-east/",
  type: "News Website",
  group: "News & Media",
  description: "Al Jazeera's Middle East news section, providing reporting and analysis on Palestine, Gaza, Israel and political developments across the wider region.",
  tags: ["Palestine", "Gaza", "Israel", "Middle East", "news", "analysis"]
}

];
