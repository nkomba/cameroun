/* =========================================================================
   camerounhistoire.org — Chapter data (bilingual)
   -------------------------------------------------------------------------
   HOW TO ADD A CHAPTER
   Copy any object below, give it a unique `id`, and append it to the array.
   Every text field is { en: "...", fr: "..." }. Arrays of such objects are
   used for lists. `status` must be one of: "draft" | "review" | "reviewed"
   | "revision" (labels are translated in data/content.js).
   The site renders chapters in array order.
   ========================================================================= */

window.CH_CHAPTERS = [

  {
    id: "origins",
    num: 1,
    status: "reviewed",
    version: "1.2",
    period: { en: "Deep past – c. 1000 CE", fr: "Temps anciens – v. 1000 apr. J.-C." },
    title: {
      en: "First Landscapes, First Peoples",
      fr: "Premiers paysages, premiers peuples"
    },
    summary: {
      en: "Long before any border, the lands of present-day Cameroon were a crossroads of the African deep past: rainforest and savanna, volcanic highlands and the shores of Lake Chad. Here archaeology, historical linguistics, and oral tradition converge on an extraordinary claim — the Bantu-speaking expansion that reshaped half a continent began in the borderlands of today's Cameroon and Nigeria. This chapter follows hunter-gatherers of the forest, early farmers and iron-workers, the fishing and pottery traditions of the Sao around Lake Chad, and the slow making of the region's enduring human geography.",
      fr: "Bien avant toute frontière, les terres du Cameroun actuel furent un carrefour du passé profond de l'Afrique : forêt dense et savane, hautes terres volcaniques et rives du lac Tchad. Ici, l'archéologie, la linguistique historique et la tradition orale convergent vers un constat extraordinaire : l'expansion des langues bantoues, qui a transformé la moitié du continent, est partie des confins de l'actuel Cameroun et du Nigeria. Ce chapitre suit les chasseurs-cueilleurs de la forêt, les premiers agriculteurs et métallurgistes, les traditions de pêche et de poterie des Sao autour du lac Tchad, et la lente formation d'une géographie humaine durable."
    },
    keywords: {
      en: ["archaeology", "Bantu expansion", "Sao civilization", "iron metallurgy", "Baka and forest peoples", "Lake Chad basin"],
      fr: ["archéologie", "expansion bantoue", "civilisation sao", "métallurgie du fer", "Baka et peuples de la forêt", "bassin du lac Tchad"]
    },
    subsections: [
      { en: "Reading the land: ecology as archive", fr: "Lire la terre : l'écologie comme archive" },
      { en: "The first inhabitants of the forest", fr: "Les premiers habitants de la forêt" },
      { en: "Shum Laka and the Bantu question", fr: "Shum Laka et la question bantoue" },
      { en: "Iron, yams, and village worlds", fr: "Le fer, l'igname et les mondes villageois" },
      { en: "The Sao of the Chadic plains", fr: "Les Sao des plaines tchadiques" }
    ],
    questions: [
      { en: "What can the rock shelter of Shum Laka tell us about the peopling of Central Africa — and what can it not?", fr: "Que peut nous dire l'abri sous roche de Shum Laka sur le peuplement de l'Afrique centrale — et que ne peut-il pas dire ?" },
      { en: "How should oral traditions of origin be read alongside archaeological chronologies?", fr: "Comment lire les traditions orales d'origine face aux chronologies archéologiques ?" },
      { en: "Why did iron-working and agriculture spread as they did across forest and savanna?", fr: "Pourquoi la métallurgie et l'agriculture se sont-elles diffusées ainsi entre forêt et savane ?" }
    ],
    keyTerms: [
      { en: "Bantu expansion", fr: "Expansion bantoue" },
      { en: "Shum Laka", fr: "Shum Laka" },
      { en: "Sao", fr: "Sao" },
      { en: "Neolithic transition", fr: "Transition néolithique" }
    ],
    narrative: {
      en: "The story begins not with kings but with rain. Where the Atlantic monsoon meets the mountains of the west, it built one of the wettest places on earth; where it fails in the far north, the Sahel begins. Between these extremes, every Cameroonian landscape — mangrove, forest, grassfield, floodplain — became a distinct school of living, and each school kept its own memory.",
      fr: "L'histoire ne commence pas avec des rois, mais avec la pluie. Là où la mousson atlantique rencontre les montagnes de l'ouest, elle a fait naître l'un des lieux les plus arrosés de la terre ; là où elle s'épuise à l'extrême nord commence le Sahel. Entre ces extrêmes, chaque paysage camerounais — mangrove, forêt, hautes herbes, plaine inondable — est devenu une école de vie singulière, et chaque école a gardé sa propre mémoire."
    },
    sidebar: {
      en: "The human remains excavated at Shum Laka (North-West Region) are among the oldest in West-Central Africa. Recent ancient-DNA studies have complicated, not settled, the Bantu-origins debate — a model case of evidence in motion.",
      fr: "Les restes humains exhumés à Shum Laka (région du Nord-Ouest) comptent parmi les plus anciens d'Afrique centre-occidentale. Les études récentes d'ADN ancien ont compliqué, et non clos, le débat sur les origines bantoues — cas d'école d'une preuve en mouvement."
    },
    pullQuote: {
      en: "Half a continent's languages trace their road home to these hills.",
      fr: "Les langues de la moitié d'un continent retrouvent leur chemin jusqu'à ces collines."
    },
    sources: [
      { en: "Excavation reports, Shum Laka rock shelter (placeholder for archival reference)", fr: "Rapports de fouilles, abri de Shum Laka (référence archivistique à compléter)" },
      { en: "Sao terracotta and bronze corpus, Lake Chad basin collections", fr: "Corpus des terres cuites et bronzes sao, collections du bassin du lac Tchad" },
      { en: "Comparative Bantu lexical databases (historical linguistics)", fr: "Bases lexicales bantoues comparées (linguistique historique)" }
    ],
    openIssues: [
      { en: "Commission a synthesis of Baka, Bakola, and Bedzang oral traditions of the forest, recorded with community consent.", fr: "Commander une synthèse des traditions orales baka, bakola et bedzang de la forêt, recueillies avec le consentement des communautés." },
      { en: "Integrate new radiocarbon dates from the Sanaga valley surveys.", fr: "Intégrer les nouvelles datations au radiocarbone des prospections de la vallée de la Sanaga." }
    ],
    contributor: {
      name: "Dr. E. Nkolo Ayissi (placeholder)",
      affil: { en: "Archaeology, University of Yaoundé I", fr: "Archéologie, Université de Yaoundé I" }
    }
  },

  {
    id: "institutions",
    num: 2,
    status: "review",
    version: "0.9",
    period: { en: "c. 1000 – 1800", fr: "v. 1000 – 1800" },
    title: {
      en: "Oral Traditions, Kinship, and Indigenous Institutions",
      fr: "Traditions orales, parenté et institutions endogènes"
    },
    summary: {
      en: "Cameroonian societies built sophisticated institutions long before — and long beneath — the colonial state: the fondoms of the Grassfields with their regulatory societies, the lamidats and sultanates of the north, the segmentary lineage orders of the forest, the maritime governance of the coast. This chapter treats oral tradition as constitutional literature: dynastic lists, praise-poetry, and migration narratives that encode law, land rights, and political theory. It asks how power was made legitimate, how it was checked, and how women, age-grades, and secret societies shaped public life.",
      fr: "Les sociétés camerounaises ont bâti des institutions élaborées bien avant — et bien en dessous — de l'État colonial : les fondoms des Grassfields et leurs sociétés régulatrices, les lamidats et sultanats du nord, les ordres lignagers segmentaires de la forêt, la gouvernance maritime de la côte. Ce chapitre traite la tradition orale comme littérature constitutionnelle : listes dynastiques, poésie d'éloge et récits de migration qui encodent le droit, la maîtrise foncière et la théorie politique. Il demande comment le pouvoir se rendait légitime, comment il était limité, et comment femmes, classes d'âge et sociétés initiatiques façonnaient la vie publique."
    },
    keywords: {
      en: ["fondom", "lamidat", "kinship", "secret societies", "customary law", "griots and praise-singers"],
      fr: ["fondom", "lamidat", "parenté", "sociétés initiatiques", "droit coutumier", "griots et chantres"]
    },
    subsections: [
      { en: "Oral tradition as constitution", fr: "La tradition orale comme constitution" },
      { en: "The Grassfields: fon, kwifon, and the arts of restraint", fr: "Les Grassfields : fon, kwifon et les arts du contre-pouvoir" },
      { en: "Lineage and land in the forest south", fr: "Lignage et terre dans le sud forestier" },
      { en: "Women's institutions and dual-sex authority", fr: "Institutions féminines et autorité à deux sexes" },
      { en: "Justice, oath, and ordeal", fr: "Justice, serment et ordalie" }
    ],
    questions: [
      { en: "In what sense were the kwifon and comparable societies checks on royal power?", fr: "En quel sens le kwifon et les sociétés comparables limitaient-ils le pouvoir royal ?" },
      { en: "How did societies without kings organise legitimate authority?", fr: "Comment les sociétés sans roi organisaient-elles l'autorité légitime ?" },
      { en: "What is lost when customary law is written down?", fr: "Que perd le droit coutumier à être mis par écrit ?" }
    ],
    keyTerms: [
      { en: "kwifon (regulatory society)", fr: "kwifon (société régulatrice)" },
      { en: "fon / lamido / sultan", fr: "fon / lamido / sultan" },
      { en: "segmentary lineage", fr: "lignage segmentaire" },
      { en: "dual-sex institutions", fr: "institutions à deux sexes" }
    ],
    narrative: {
      en: "A dynastic list recited at an enthronement is not a bedtime story; it is a legal citation. When the notables of a Grassfields palace recount the road their people walked, they are producing title to land, precedence in council, and the terms of alliance — an archive spoken rather than shelved.",
      fr: "Une liste dynastique récitée lors d'une intronisation n'est pas un conte du soir ; c'est une citation juridique. Quand les notables d'un palais des Grassfields relatent la route parcourue par leur peuple, ils produisent un titre foncier, une préséance au conseil et les termes d'une alliance — une archive parlée plutôt que rangée."
    },
    sidebar: {
      en: "Field recordings for this chapter follow the project's oral-history protocol: narrator, office, occasion, and language are cited, and palace authorities review transcriptions before publication.",
      fr: "Les enregistrements de terrain de ce chapitre suivent le protocole d'histoire orale du projet : narrateur, charge, occasion et langue sont cités, et les autorités des palais relisent les transcriptions avant publication."
    },
    pullQuote: {
      en: "An archive spoken rather than shelved.",
      fr: "Une archive parlée plutôt que rangée."
    },
    sources: [
      { en: "Recorded dynastic recitations (with palace permissions) — placeholder", fr: "Récitations dynastiques enregistrées (avec autorisation des palais) — à compléter" },
      { en: "Early ethnographic notebooks, read against the grain", fr: "Carnets ethnographiques anciens, lus à contre-fil" },
      { en: "Customary court records, Buea and Bamenda series", fr: "Registres des tribunaux coutumiers, séries de Buea et Bamenda" }
    ],
    openIssues: [
      { en: "Extend coverage of acephalous societies of the Adamawa plateau margins.", fr: "Étendre la couverture des sociétés acéphales des marges du plateau de l'Adamaoua." },
      { en: "Add a comparative table of women's title societies across regions.", fr: "Ajouter un tableau comparatif des sociétés de titre féminines selon les régions." }
    ],
    contributor: {
      name: "Prof. M. Ngwa Fru (placeholder)",
      affil: { en: "Anthropology, University of Bamenda", fr: "Anthropologie, Université de Bamenda" }
    }
  },

  {
    id: "trade",
    num: 3,
    status: "draft",
    version: "0.4",
    period: { en: "c. 1000 – 1800", fr: "v. 1000 – 1800" },
    title: {
      en: "Trade Networks, Spiritual Worlds, and Regional Polities",
      fr: "Réseaux marchands, mondes spirituels et pouvoirs régionaux"
    },
    summary: {
      en: "Kola, salt, iron, cloth, horses, and ideas moved along routes that stitched the territory into wider African worlds: north toward Kanem-Bornu and the trans-Saharan trade, west into the Benue valley, south to the ocean. This chapter maps the merchant diasporas and market cycles, the rise of Mandara, the Bamum kingdom and its script, the coming of Islam to the north and its scholarly networks, and the ancestral and territorial cults through which communities theologised power, fertility, and misfortune.",
      fr: "Kola, sel, fer, tissu, chevaux et idées circulaient le long de routes qui cousaient le territoire aux grands mondes africains : vers le nord, Kanem-Bornou et le commerce transsaharien ; vers l'ouest, la vallée de la Bénoué ; vers le sud, l'océan. Ce chapitre cartographie les diasporas marchandes et les cycles de marchés, l'essor du Mandara, le royaume bamoun et son écriture, l'arrivée de l'islam au nord et ses réseaux savants, ainsi que les cultes ancestraux et territoriaux par lesquels les communautés pensaient le pouvoir, la fécondité et le malheur."
    },
    keywords: {
      en: ["trans-Saharan trade", "Kanem-Bornu", "Mandara", "Bamum script", "Islam in the north", "ritual and territory"],
      fr: ["commerce transsaharien", "Kanem-Bornou", "Mandara", "écriture bamoune", "islam au nord", "rituel et territoire"]
    },
    subsections: [
      { en: "Routes and relays: the geography of exchange", fr: "Routes et relais : la géographie de l'échange" },
      { en: "Mandara between mountain and empire", fr: "Le Mandara entre montagne et empire" },
      { en: "Njoya's ancestors: the making of Bamum", fr: "Les ancêtres de Njoya : la formation du royaume bamoun" },
      { en: "Faith on the move: Islam's northern roads", fr: "La foi en chemin : les routes septentrionales de l'islam" },
      { en: "Shrines, masks, and the government of the invisible", fr: "Sanctuaires, masques et gouvernement de l'invisible" }
    ],
    questions: [
      { en: "How did long-distance trade reorganise local hierarchies?", fr: "Comment le commerce au long cours a-t-il réorganisé les hiérarchies locales ?" },
      { en: "What did conversion mean, and for whom, in the pre-jihad north?", fr: "Que signifiait la conversion, et pour qui, dans le nord d'avant les jihads ?" },
      { en: "Can we write a history of spiritual life without flattening it into 'religion'?", fr: "Peut-on écrire une histoire de la vie spirituelle sans l'aplatir en « religion » ?" }
    ],
    keyTerms: [
      { en: "kola trade", fr: "commerce de la kola" },
      { en: "Wandala / Mandara", fr: "Wandala / Mandara" },
      { en: "shüʼmom (Bamum script)", fr: "shüʼmom (écriture bamoune)" },
      { en: "territorial cult", fr: "culte territorial" }
    ],
    narrative: {
      en: "Follow a basket of kola north from the forest edge and you cross a dozen sovereignties, three currencies, and two theologies before it reaches a court on the Chadic plain. Trade did not merely move goods; it moved obligations, marriages, and gods.",
      fr: "Suivez un panier de kola depuis la lisière de la forêt vers le nord : vous traversez une douzaine de souverainetés, trois monnaies et deux théologies avant qu'il n'atteigne une cour de la plaine tchadique. Le commerce ne déplaçait pas seulement des biens ; il déplaçait des obligations, des mariages et des dieux."
    },
    sidebar: {
      en: "The Bamum script, invented under King Njoya around the turn of the twentieth century, drew on older graphic traditions — a reminder that African literacy has more than one genealogy.",
      fr: "L'écriture bamoune, mise au point sous le roi Njoya au tournant du XXe siècle, puisait dans des traditions graphiques plus anciennes — rappel que la littératie africaine a plus d'une généalogie."
    },
    pullQuote: {
      en: "Trade moved obligations, marriages, and gods.",
      fr: "Le commerce déplaçait des obligations, des mariages et des dieux."
    },
    sources: [
      { en: "Arabic-language chronicles and trade correspondence of the Chad basin — placeholder", fr: "Chroniques et correspondances commerciales en arabe du bassin tchadien — à compléter" },
      { en: "Bamum palace archives, Foumban", fr: "Archives du palais bamoun, Foumban" },
      { en: "Oral market-cycle testimony, western highlands", fr: "Témoignages oraux sur les cycles de marchés, hautes terres de l'Ouest" }
    ],
    openIssues: [
      { en: "Draft the section on Duala and coastal middleman networks before Atlantic contact.", fr: "Rédiger la section sur les réseaux d'intermédiaires duala et côtiers avant le contact atlantique." },
      { en: "Commission maps of kola and salt routes with a historical geographer.", fr: "Commander à un géographe historien les cartes des routes de la kola et du sel." }
    ],
    contributor: {
      name: "Dr. A. Bouba Haman (placeholder)",
      affil: { en: "History, University of Ngaoundéré", fr: "Histoire, Université de Ngaoundéré" }
    }
  },

  {
    id: "atlantic",
    num: 4,
    status: "review",
    version: "0.8",
    period: { en: "1472 – 1884", fr: "1472 – 1884" },
    title: {
      en: "Atlantic Encounters and Commercial Transformations",
      fr: "Rencontres atlantiques et mutations commerciales"
    },
    summary: {
      en: "Portuguese sailors reached the Wouri estuary in 1472 and named its shrimp-rich river Rio dos Camarões — the accident behind the country's name. For four centuries the coast negotiated with, profited from, and suffered the Atlantic system: the slave trade and its abolition, 'legitimate commerce' in palm oil and ivory, the rise of Duala merchant princes, the first mission churches and schools, and treaties whose small print would be invoked to end African sovereignty. The interior, far from isolated, reorganised itself around these coastal pressures — as did the northern emirates around the Sokoto jihad.",
      fr: "Des marins portugais atteignent l'estuaire du Wouri en 1472 et nomment son fleuve aux crevettes abondantes Rio dos Camarões — l'accident d'où vient le nom du pays. Quatre siècles durant, la côte négocie avec le système atlantique, en profite et en souffre : traite esclavagiste puis abolition, « commerce légitime » de l'huile de palme et de l'ivoire, ascension des princes marchands duala, premières églises et écoles missionnaires, et traités dont les petites lignes serviront à éteindre la souveraineté africaine. L'intérieur, loin d'être isolé, se réorganise sous ces pressions côtières — comme le nord autour du jihad de Sokoto."
    },
    keywords: {
      en: ["Rio dos Camarões", "Atlantic slave trade", "Duala middlemen", "palm oil commerce", "missions", "Sokoto jihad and Adamawa"],
      fr: ["Rio dos Camarões", "traite atlantique", "intermédiaires duala", "commerce de l'huile de palme", "missions", "jihad de Sokoto et Adamaoua"]
    },
    subsections: [
      { en: "Naming the river: 1472 and after", fr: "Nommer le fleuve : 1472 et après" },
      { en: "The trade in human beings and its long shadow", fr: "La traite des êtres humains et sa longue ombre" },
      { en: "Middlemen and monopolies on the Wouri", fr: "Intermédiaires et monopoles sur le Wouri" },
      { en: "Alfred Saker, Joseph Merrick, and the mission frontier", fr: "Alfred Saker, Joseph Merrick et la frontière missionnaire" },
      { en: "Modibo Adama and the making of Adamawa", fr: "Modibo Adama et la formation de l'Adamaoua" }
    ],
    questions: [
      { en: "How did coastal societies convert commercial position into political power — and at what cost?", fr: "Comment les sociétés côtières ont-elles converti leur position commerciale en pouvoir politique — et à quel prix ?" },
      { en: "What did the Atlantic slave trade take from, and change in, the societies of the interior?", fr: "Qu'a pris la traite atlantique aux sociétés de l'intérieur, et qu'y a-t-elle changé ?" },
      { en: "Were the Anglo-Duala treaties instruments of protection or preludes to annexation?", fr: "Les traités anglo-duala furent-ils des instruments de protection ou des préludes à l'annexion ?" }
    ],
    keyTerms: [
      { en: "comey (trade duty)", fr: "comey (droit de traite)" },
      { en: "legitimate commerce", fr: "commerce légitime" },
      { en: "Victoria (Limbe), 1858", fr: "Victoria (Limbe), 1858" },
      { en: "lamidat of Adamawa", fr: "lamidat de l'Adamaoua" }
    ],
    narrative: {
      en: "On the eve of annexation, Duala kings were writing letters to London and Hamburg, quoting scripture and market prices in the same paragraph. They were not waiting for history; they were negotiating with it — and they understood, better than their correspondents admitted, exactly what was at stake.",
      fr: "À la veille de l'annexion, les rois duala écrivaient à Londres et à Hambourg, citant l'Écriture et les cours du marché dans le même paragraphe. Ils n'attendaient pas l'histoire ; ils négociaient avec elle — et ils comprenaient, mieux que leurs correspondants ne l'admettaient, ce qui était exactement en jeu."
    },
    sidebar: {
      en: "Joseph Merrick, a Jamaican Baptist of African descent, opened the first mission on the Cameroon coast in 1844 — Atlantic history returning along the routes the slave trade had made.",
      fr: "Joseph Merrick, baptiste jamaïcain d'ascendance africaine, ouvre la première mission de la côte camerounaise en 1844 — l'histoire atlantique revenant par les routes que la traite avait tracées."
    },
    pullQuote: {
      en: "They were not waiting for history; they were negotiating with it.",
      fr: "Ils n'attendaient pas l'histoire ; ils négociaient avec elle."
    },
    sources: [
      { en: "Correspondence of Duala kings (King Akwa, King Bell) with British officials — placeholder", fr: "Correspondance des rois duala (King Akwa, King Bell) avec les autorités britanniques — à compléter" },
      { en: "Baptist Missionary Society records, 1841–1887", fr: "Archives de la Baptist Missionary Society, 1841–1887" },
      { en: "Oral traditions of coastal lineages on the era of the trade", fr: "Traditions orales des lignages côtiers sur l'ère de la traite" }
    ],
    openIssues: [
      { en: "Quantify, as far as sources allow, embarkations from the Cameroon coast during the slave trade.", fr: "Quantifier, autant que les sources le permettent, les embarquements depuis la côte camerounaise pendant la traite." },
      { en: "Add the Bimbia treaty corpus with commentary.", fr: "Ajouter le corpus des traités de Bimbia, avec commentaire." }
    ],
    contributor: {
      name: "E. Nkomba, MBA",
      affil: { en: "Library of Congress", fr: "Bibliothèque du Congrès" }
    }
  },

  {
    id: "kamerun",
    num: 5,
    status: "reviewed",
    version: "1.1",
    period: { en: "1884 – 1916", fr: "1884 – 1916" },
    title: {
      en: "German Kamerun",
      fr: "Le Kamerun allemand"
    },
    summary: {
      en: "On 12 July 1884 Gustav Nachtigal raised the German flag at Douala, days ahead of a British consul, on the strength of treaties signed with Duala kings who believed they were regulating trade, not surrendering sovereignty. Three decades of the Schutzgebiet followed: plantation capitalism on the fertile slopes of Mount Cameroon, forced labour and the caravan economy, punitive expeditions inland, but also railways, botanical gardens, and new colonial cities. Resistance ran through the whole period — from the wars of the Bafut and the Duala petition movement to the execution of Rudolf Duala Manga Bell and Martin-Paul Samba in 1914.",
      fr: "Le 12 juillet 1884, Gustav Nachtigal hisse le drapeau allemand à Douala, quelques jours avant un consul britannique, sur la foi de traités signés avec des rois duala persuadés de réglementer le commerce, non de céder leur souveraineté. Suivent trois décennies de Schutzgebiet : capitalisme de plantation sur les pentes fertiles du mont Cameroun, travail forcé et économie des caravanes, expéditions punitives vers l'intérieur, mais aussi chemins de fer, jardins botaniques et villes coloniales nouvelles. La résistance traverse toute la période — des guerres des Bafut au mouvement pétitionnaire duala, jusqu'à l'exécution de Rudolf Duala Manga Bell et de Martin-Paul Samba en 1914."
    },
    keywords: {
      en: ["Schutzgebiet", "1884 annexation", "plantation economy", "forced labour", "Duala resistance", "Manga Bell"],
      fr: ["Schutzgebiet", "annexion de 1884", "économie de plantation", "travail forcé", "résistance duala", "Manga Bell"]
    },
    subsections: [
      { en: "Twelve days in July: the annexation of 1884", fr: "Douze jours de juillet : l'annexion de 1884" },
      { en: "The plantation complex of the mountain", fr: "Le complexe des plantations de la montagne" },
      { en: "Conquest by column: the interior wars", fr: "La conquête par colonnes : les guerres de l'intérieur" },
      { en: "Petition and gallows: the Duala land case", fr: "La pétition et le gibet : l'affaire foncière duala" },
      { en: "What the Germans left, and to whom", fr: "Ce que les Allemands ont laissé, et à qui" }
    ],
    questions: [
      { en: "What exactly did the July 1884 treaties say — and what did each party believe they said?", fr: "Que disaient exactement les traités de juillet 1884 — et que croyait chaque partie qu'ils disaient ?" },
      { en: "How central was coerced labour to the colonial economy?", fr: "Quelle fut la centralité du travail contraint dans l'économie coloniale ?" },
      { en: "Why does Rudolf Duala Manga Bell matter to national memory today?", fr: "Pourquoi Rudolf Duala Manga Bell compte-t-il pour la mémoire nationale d'aujourd'hui ?" }
    ],
    keyTerms: [
      { en: "Schutzgebiet (protectorate)", fr: "Schutzgebiet (protectorat)" },
      { en: "Duala land expropriation, 1910–1914", fr: "Expropriation foncière duala, 1910–1914" },
      { en: "Jaunde station", fr: "Poste de Jaunde (Yaoundé)" },
      { en: "Mittelafrika", fr: "Mittelafrika" }
    ],
    narrative: {
      en: "Rudolf Duala Manga Bell had studied in Germany, spoke its language, and trusted its courts. When the administration moved to expropriate Duala land in defiance of the 1884 treaty, he fought with petitions, lawyers, and emissaries — the empire answered with a treason trial and a rope. On 8 August 1914 he was hanged; the case he argued has never been closed.",
      fr: "Rudolf Duala Manga Bell avait étudié en Allemagne, parlait sa langue et faisait confiance à ses tribunaux. Quand l'administration entreprit d'exproprier les terres duala au mépris du traité de 1884, il se battit à coups de pétitions, d'avocats et d'émissaires — l'empire répondit par un procès en trahison et une corde. Le 8 août 1914, il fut pendu ; le dossier qu'il plaidait n'a jamais été refermé."
    },
    sidebar: {
      en: "In recent years, German municipalities and institutions have begun debating restitution and the renaming of streets tied to the colonial conquest — a live afterlife of this chapter.",
      fr: "Ces dernières années, des municipalités et institutions allemandes ont ouvert le débat sur les restitutions et la débaptisation de rues liées à la conquête coloniale — une postérité bien vivante de ce chapitre."
    },
    pullQuote: {
      en: "The case he argued has never been closed.",
      fr: "Le dossier qu'il plaidait n'a jamais été refermé."
    },
    sources: [
      { en: "Reichskolonialamt files, Bundesarchiv Berlin — selected series (placeholder)", fr: "Fonds du Reichskolonialamt, Bundesarchiv Berlin — séries choisies (à compléter)" },
      { en: "Trial records and petitions of the Duala, 1911–1914", fr: "Actes du procès et pétitions duala, 1911–1914" },
      { en: "Plantation company reports, Victoria and Buea districts", fr: "Rapports des sociétés de plantation, districts de Victoria et Buea" }
    ],
    openIssues: [
      { en: "Add regional case studies of resistance beyond the coast (Bafut, Nso, Maka country).", fr: "Ajouter des études de cas régionales de résistance au-delà de la côte (Bafut, Nso, pays maka)." },
      { en: "Track provenance of Cameroonian objects in German museum collections.", fr: "Retracer la provenance des objets camerounais dans les collections muséales allemandes." }
    ],
    contributor: {
      name: "Prof. J. Ebune Mokake (placeholder)",
      affil: { en: "History, University of Buea", fr: "Histoire, Université de Buea" }
    }
  },

  {
    id: "mandate",
    num: 6,
    status: "draft",
    version: "0.5",
    period: { en: "1916 – 1945", fr: "1916 – 1945" },
    title: {
      en: "Partition and the Mandate Era",
      fr: "La partition et l'ère des mandats"
    },
    summary: {
      en: "The First World War reached Cameroon in 1914; by 1916 German rule had collapsed and the territory was partitioned between France and Britain along a line drawn with little regard for the peoples it divided. The League of Nations dressed conquest in the language of trusteeship: mandates 'to promote the material and moral well-being' of the inhabitants. This chapter examines the Picot line, the new legal category of the mandated territory, petitions sent by Cameroonians to Geneva, and how two very different colonial systems began remaking one country into two administrative worlds.",
      fr: "La Première Guerre mondiale atteint le Cameroun en 1914 ; en 1916, la domination allemande s'effondre et le territoire est partagé entre la France et la Grande-Bretagne le long d'une ligne tracée sans grand égard pour les peuples qu'elle divisait. La Société des Nations habille la conquête du langage de la tutelle : des mandats « pour le bien-être matériel et moral » des habitants. Ce chapitre examine la ligne Picot, la catégorie juridique nouvelle du territoire sous mandat, les pétitions envoyées par des Camerounais à Genève, et la manière dont deux systèmes coloniaux très différents entreprirent de refaire d'un pays deux mondes administratifs."
    },
    keywords: {
      en: ["First World War", "partition of 1916", "League of Nations", "mandate system", "petitions to Geneva", "Picot line"],
      fr: ["Première Guerre mondiale", "partition de 1916", "Société des Nations", "système des mandats", "pétitions à Genève", "ligne Picot"]
    },
    subsections: [
      { en: "The campaign of 1914–1916", fr: "La campagne de 1914–1916" },
      { en: "Drawing the line: partition and its logic", fr: "Tracer la ligne : la partition et sa logique" },
      { en: "Geneva's paper empire: how the mandate worked", fr: "L'empire de papier de Genève : le fonctionnement du mandat" },
      { en: "Cameroonian voices before the Mandates Commission", fr: "Voix camerounaises devant la Commission des mandats" },
      { en: "Two administrations take root", fr: "Deux administrations prennent racine" }
    ],
    questions: [
      { en: "Was the mandate system a genuine constraint on colonial power or a legitimation of it?", fr: "Le système des mandats fut-il une contrainte réelle sur le pouvoir colonial ou sa légitimation ?" },
      { en: "What did the partition line mean for the communities it cut through?", fr: "Que signifia la ligne de partage pour les communautés qu'elle coupait ?" },
      { en: "How did Cameroonians use international law before they had a state?", fr: "Comment les Camerounais ont-ils mobilisé le droit international avant d'avoir un État ?" }
    ],
    keyTerms: [
      { en: "Class B mandate", fr: "Mandat de type B" },
      { en: "Picot–Strachey partition", fr: "Partition Picot–Strachey" },
      { en: "Permanent Mandates Commission", fr: "Commission permanente des mandats" },
      { en: "Cameroun / Cameroons", fr: "Cameroun / Cameroons" }
    ],
    narrative: {
      en: "The border was sketched in London and Paris by men who had never crossed it, then inherited by villages that crossed it every market day. A single people could now be 'French' on Monday and 'British' on Thursday, depending on which bank of the river held the better market.",
      fr: "La frontière fut esquissée à Londres et à Paris par des hommes qui ne l'avaient jamais franchie, puis léguée à des villages qui la franchissaient chaque jour de marché. Un même peuple pouvait désormais être « français » le lundi et « britannique » le jeudi, selon la rive du fleuve où se tenait le meilleur marché."
    },
    sidebar: {
      en: "Dozens of petitions from Duala notables and others reached the League of Nations in the 1920s and 1930s. Most were dismissed; all were filed. They are among the earliest Cameroonian texts of international legal argument.",
      fr: "Des dizaines de pétitions de notables duala et d'autres parvinrent à la Société des Nations dans les années 1920 et 1930. La plupart furent écartées ; toutes furent archivées. Ce sont parmi les plus anciens textes camerounais d'argumentation juridique internationale."
    },
    pullQuote: {
      en: "A border sketched by men who had never crossed it.",
      fr: "Une frontière esquissée par des hommes qui ne l'avaient jamais franchie."
    },
    sources: [
      { en: "League of Nations mandate reports and petition files, Geneva — placeholder", fr: "Rapports de mandat et dossiers de pétitions, Société des Nations, Genève — à compléter" },
      { en: "Franco-British boundary commission papers", fr: "Papiers des commissions de délimitation franco-britanniques" },
      { en: "Oral histories of borderland communities", fr: "Histoires orales des communautés frontalières" }
    ],
    openIssues: [
      { en: "Translate and annotate a selection of Geneva petitions for the source library.", fr: "Traduire et annoter une sélection de pétitions de Genève pour la bibliothèque de sources." },
      { en: "Commission a study of wartime carrier corps recruitment and its demographic cost.", fr: "Commander une étude du recrutement des porteurs pendant la guerre et de son coût démographique." }
    ],
    contributor: {
      name: "Dr. S. Abwa Ndille (placeholder)",
      affil: { en: "History, University of Yaoundé I", fr: "Histoire, Université de Yaoundé I" }
    }
  },

  {
    id: "twocolonies",
    num: 7,
    status: "review",
    version: "0.7",
    period: { en: "1922 – 1955", fr: "1922 – 1955" },
    title: {
      en: "French Cameroun, British Cameroons",
      fr: "Cameroun français, Cameroons britanniques"
    },
    summary: {
      en: "Under two flags, one former territory diverged. France governed Cameroun directly from Yaoundé with the indigénat code, forced labour until 1946, cocoa and coffee expansion, and an assimilationist school in theory reserved for a few. Britain ruled its narrow strips as appendages of Nigeria through Native Authorities, with the vast CDC plantations dominating the southern economy. Yet Cameroonians in both zones built churches, unions, newspapers, and associations — the sinews of a public sphere — and after 1945 the United Nations trusteeship system and new representative bodies opened doors that nationalists would soon force wider.",
      fr: "Sous deux drapeaux, un même territoire divergea. La France gouverna le Cameroun directement depuis Yaoundé : code de l'indigénat, travail forcé jusqu'en 1946, essor du cacao et du café, école assimilationniste en théorie réservée à quelques-uns. La Grande-Bretagne administra ses bandes étroites comme des annexes du Nigeria, via les Native Authorities, les vastes plantations de la CDC dominant l'économie méridionale. Pourtant, dans les deux zones, les Camerounais bâtirent églises, syndicats, journaux et associations — les nerfs d'un espace public — et, après 1945, la tutelle des Nations unies et les nouvelles assemblées représentatives entrouvrirent des portes que les nationalistes allaient bientôt forcer."
    },
    keywords: {
      en: ["indigénat", "indirect rule", "Native Authorities", "CDC plantations", "trusteeship", "colonial education"],
      fr: ["indigénat", "administration indirecte", "Native Authorities", "plantations CDC", "tutelle", "école coloniale"]
    },
    subsections: [
      { en: "Two doctrines of rule", fr: "Deux doctrines de gouvernement" },
      { en: "Land, labour, and the plantation south", fr: "Terre, travail et le sud des plantations" },
      { en: "Schools, churches, and the new literati", fr: "Écoles, églises et nouveaux lettrés" },
      { en: "Douala 1945 and the postwar opening", fr: "Douala 1945 et l'ouverture d'après-guerre" },
      { en: "From League mandate to UN trusteeship", fr: "Du mandat de la SDN à la tutelle de l'ONU" }
    ],
    questions: [
      { en: "How deep did the Franco-British divergence really run in ordinary lives?", fr: "Jusqu'où la divergence franco-britannique pénétrait-elle réellement les vies ordinaires ?" },
      { en: "Who were the intermediaries of colonial rule, and what room did they have to manoeuvre?", fr: "Qui furent les intermédiaires du pouvoir colonial, et de quelle marge disposaient-ils ?" },
      { en: "Did trusteeship change anything that mandates had not?", fr: "La tutelle a-t-elle changé quoi que ce soit que le mandat n'avait pas changé ?" }
    ],
    keyTerms: [
      { en: "indigénat", fr: "indigénat" },
      { en: "Native Authority", fr: "Native Authority" },
      { en: "Cameroon Development Corporation (1946)", fr: "Cameroon Development Corporation (1946)" },
      { en: "ARCAM / assemblies", fr: "ARCAM / assemblées" }
    ],
    narrative: {
      en: "A clerk in Victoria filled in forms in English under a photograph of one king; his cousin in Édéa filled in forms in French under the portrait of a republic. Between them lay a border, two legal codes, and a shared grandmother — and it is the grandmother, historians of Cameroon must remember, who tells the truer story of the age.",
      fr: "Un commis de Victoria remplissait des formulaires en anglais sous la photographie d'un roi ; son cousin d'Édéa en remplissait en français sous le portrait d'une république. Entre eux, une frontière, deux codes juridiques et une grand-mère commune — et c'est la grand-mère, les historiens du Cameroun doivent s'en souvenir, qui raconte la plus vraie histoire de l'époque."
    },
    sidebar: {
      en: "The plantations seized from German owners in the British zone were consolidated in 1946 into the CDC — to this day one of the country's largest employers, and a standing archive of the colonial economy.",
      fr: "Les plantations saisies aux propriétaires allemands de la zone britannique furent regroupées en 1946 dans la CDC — aujourd'hui encore l'un des premiers employeurs du pays, et une archive vivante de l'économie coloniale."
    },
    pullQuote: {
      en: "It is the grandmother who tells the truer story of the age.",
      fr: "C'est la grand-mère qui raconte la plus vraie histoire de l'époque."
    },
    sources: [
      { en: "Annual reports to the League and UN on both territories — placeholder", fr: "Rapports annuels à la SDN puis à l'ONU sur les deux territoires — à compléter" },
      { en: "Native Authority and chefferie correspondence files", fr: "Dossiers de correspondance des Native Authorities et des chefferies" },
      { en: "Mission school records and alumni testimony", fr: "Registres des écoles missionnaires et témoignages d'anciens élèves" }
    ],
    openIssues: [
      { en: "Build a comparative table of taxation and labour obligations in the two zones.", fr: "Établir un tableau comparé des obligations fiscales et de travail dans les deux zones." },
      { en: "Collect oral histories of plantation workers' families before the generation passes.", fr: "Recueillir les histoires orales des familles d'ouvriers de plantation avant que la génération ne s'éteigne." }
    ],
    contributor: {
      name: "Dr. G. Anyangwe Ndumbe (placeholder)",
      affil: { en: "History, University of Buea", fr: "Histoire, Université de Buea" }
    }
  },

  {
    id: "nationalism",
    num: 8,
    status: "revision",
    version: "1.3",
    period: { en: "1945 – 1961", fr: "1945 – 1961" },
    title: {
      en: "Nationalism, Resistance, and Independence",
      fr: "Nationalisme, résistance et indépendance"
    },
    summary: {
      en: "In 1948 the Union des Populations du Cameroun demanded what then seemed unthinkable: immediate reunification and independence. Its banning in 1955, the maquis that followed, the assassination of Ruben Um Nyobè in the Bassa forest in 1958 and of Félix Moumié in Geneva in 1960, and a counter-insurgency whose human toll remains contested — these form one of the gravest and most silenced sequences of decolonisation in Africa. Cameroun became independent on 1 January 1960 amid this conflict. This chapter narrates the full breadth of nationalist politics, armed and unarmed, in both zones, and confronts the archives of a war long officially unnamed.",
      fr: "En 1948, l'Union des populations du Cameroun exige ce qui paraissait alors impensable : la réunification et l'indépendance immédiates. Son interdiction en 1955, le maquis qui s'ensuit, l'assassinat de Ruben Um Nyobè dans la forêt bassa en 1958 et celui de Félix Moumié à Genève en 1960, une contre-insurrection au bilan humain toujours discuté — voilà l'une des séquences les plus graves et les plus tues de la décolonisation africaine. Le Cameroun accède à l'indépendance le 1er janvier 1960 au milieu de ce conflit. Ce chapitre restitue toute l'ampleur du politique nationaliste, armé et non armé, dans les deux zones, et affronte les archives d'une guerre longtemps restée officiellement sans nom."
    },
    keywords: {
      en: ["UPC", "Ruben Um Nyobè", "Félix Moumié", "maquis", "independence 1960", "decolonisation war"],
      fr: ["UPC", "Ruben Um Nyobè", "Félix Moumié", "maquis", "indépendance 1960", "guerre de décolonisation"]
    },
    subsections: [
      { en: "The postwar ferment: unions, parties, papers", fr: "L'effervescence d'après-guerre : syndicats, partis, journaux" },
      { en: "Um Nyobè at the United Nations", fr: "Um Nyobè aux Nations unies" },
      { en: "May 1955 and the road to the maquis", fr: "Mai 1955 et le chemin du maquis" },
      { en: "The Sanaga-Maritime and Bamileke campaigns", fr: "Les campagnes de la Sanaga-Maritime et du pays bamiléké" },
      { en: "1 January 1960: independence under fire", fr: "1er janvier 1960 : l'indépendance sous le feu" },
      { en: "Counting the dead: evidence and debate", fr: "Compter les morts : preuves et débats" }
    ],
    questions: [
      { en: "Why was the UPC's demand — independence and reunification — treated as subversion rather than politics?", fr: "Pourquoi la revendication de l'UPC — indépendance et réunification — fut-elle traitée comme subversion plutôt que comme politique ?" },
      { en: "What do we actually know, source by source, about the scale of repression?", fr: "Que savons-nous réellement, source par source, de l'ampleur de la répression ?" },
      { en: "How should independence-day 1960 be narrated when the war did not stop that day?", fr: "Comment raconter le 1er janvier 1960 quand la guerre ne s'est pas arrêtée ce jour-là ?" }
    ],
    keyTerms: [
      { en: "UPC (Union des Populations du Cameroun)", fr: "UPC (Union des populations du Cameroun)" },
      { en: "maquis", fr: "maquis" },
      { en: "Sanaga-Maritime", fr: "Sanaga-Maritime" },
      { en: "zone de pacification", fr: "zone de pacification" }
    ],
    narrative: {
      en: "Um Nyobè carried his case to the United Nations three times, in a suit, with footnotes. When legality was closed to him, he carried it into the forest, in the same handwriting, drafting memoranda by lamplight between ambushes. The continuity of the argument — from rostrum to maquis — is the key to the man, and to the era.",
      fr: "Um Nyobè porta trois fois sa cause aux Nations unies, en costume, notes de bas de page à l'appui. Quand la légalité lui fut fermée, il la porta en forêt, de la même écriture, rédigeant des mémorandums à la lampe entre deux embuscades. La continuité de l'argument — de la tribune au maquis — est la clé de l'homme, et de l'époque."
    },
    sidebar: {
      en: "In 2023 France and Cameroon convened a joint commission of historians on the repression of the independence movement — an official acknowledgement that this chapter's questions remain open at the highest level.",
      fr: "En 2023, la France et le Cameroun ont installé une commission mixte d'historiens sur la répression du mouvement indépendantiste — reconnaissance officielle que les questions de ce chapitre restent ouvertes au plus haut niveau."
    },
    pullQuote: {
      en: "From rostrum to maquis, the same handwriting.",
      fr: "De la tribune au maquis, la même écriture."
    },
    sources: [
      { en: "UPC tracts, memoranda, and UN petitions, 1948–1960 — placeholder", fr: "Tracts, mémorandums et pétitions de l'UPC à l'ONU, 1948–1960 — à compléter" },
      { en: "French military and administrative archives on the 'pacification' campaigns", fr: "Archives militaires et administratives françaises des campagnes de « pacification »" },
      { en: "Survivor and maquisard testimony, Sanaga-Maritime and West", fr: "Témoignages de survivants et de maquisards, Sanaga-Maritime et Ouest" }
    ],
    openIssues: [
      { en: "Incorporate findings of the Franco-Cameroonian historians' commission as they are published.", fr: "Intégrer les conclusions de la commission mixte d'historiens au fur et à mesure de leur publication." },
      { en: "Map detention camps and regroupement villages with surviving witnesses.", fr: "Cartographier les camps de détention et les villages de regroupement avec les derniers témoins." }
    ],
    contributor: {
      name: "Prof. L. Owona Mfegue (placeholder)",
      affil: { en: "Political history, University of Yaoundé II", fr: "Histoire politique, Université de Yaoundé II" }
    }
  },

  {
    id: "reunification",
    num: 9,
    status: "reviewed",
    version: "1.0",
    period: { en: "1959 – 1972", fr: "1959 – 1972" },
    title: {
      en: "Reunification and the Federal Experiment",
      fr: "La réunification et l'expérience fédérale"
    },
    summary: {
      en: "In February 1961 the peoples of the British Cameroons voted: the north joined Nigeria, the south chose reunification with the newly independent Republic of Cameroun. At Foumban that July, delegations met to draft the terms of union — a conference whose brevity, agenda, and unequal preparation are still argued over today. The Federal Republic born on 1 October 1961 joined two official languages, two legal traditions, two administrative cultures, and two sets of expectations. This chapter follows the federation's institutions and their erosion, from the two federated states to the single party of 1966 and the referendum of May 1972 that ended the federal experiment.",
      fr: "En février 1961, les peuples des Cameroons britanniques votent : le nord rejoint le Nigeria, le sud choisit la réunification avec la jeune République du Cameroun. À Foumban, en juillet, les délégations se retrouvent pour arrêter les termes de l'union — conférence dont la brièveté, l'ordre du jour et la préparation inégale font encore débat. La République fédérale née le 1er octobre 1961 unit deux langues officielles, deux traditions juridiques, deux cultures administratives et deux horizons d'attente. Ce chapitre suit les institutions de la fédération et leur érosion, des deux États fédérés au parti unique de 1966, jusqu'au référendum de mai 1972 qui clôt l'expérience fédérale."
    },
    keywords: {
      en: ["plebiscite 1961", "Foumban conference", "federalism", "two states", "single party 1966", "referendum 1972"],
      fr: ["plébiscite de 1961", "conférence de Foumban", "fédéralisme", "deux États", "parti unique 1966", "référendum de 1972"]
    },
    subsections: [
      { en: "Two questions on a ballot: the plebiscites of 1961", fr: "Deux questions sur un bulletin : les plébiscites de 1961" },
      { en: "Foumban: what was and was not agreed", fr: "Foumban : ce qui fut convenu, et ce qui ne le fut pas" },
      { en: "Building a federation on two administrative grammars", fr: "Bâtir une fédération sur deux grammaires administratives" },
      { en: "1966: the parties become one", fr: "1966 : les partis n'en font plus qu'un" },
      { en: "May 1972: the referendum and the unitary turn", fr: "Mai 1972 : le référendum et le tournant unitaire" }
    ],
    questions: [
      { en: "Was Foumban a negotiation, a ratification, or a fait accompli?", fr: "Foumban fut-elle une négociation, une ratification ou un fait accompli ?" },
      { en: "Why was there no option of independence for the British Southern Cameroons on the 1961 ballot?", fr: "Pourquoi l'option de l'indépendance du Southern Cameroons ne figurait-elle pas sur le bulletin de 1961 ?" },
      { en: "What did federalism protect, and whom, between 1961 and 1972?", fr: "Que protégeait le fédéralisme, et qui, entre 1961 et 1972 ?" }
    ],
    keyTerms: [
      { en: "UN plebiscite", fr: "plébiscite de l'ONU" },
      { en: "Foumban conference (July 1961)", fr: "conférence de Foumban (juillet 1961)" },
      { en: "West Cameroon / East Cameroon", fr: "Cameroun occidental / Cameroun oriental" },
      { en: "CNU / UNC (1966)", fr: "UNC (1966)" }
    ],
    narrative: {
      en: "The delegates came to Foumban with two drafts and left with one constitution. Whether the week in July was a wedding or an absorption depends on which delegation's memoirs you read — and this chapter reads them all, side by side, against the conference minutes themselves.",
      fr: "Les délégués arrivèrent à Foumban avec deux projets et repartirent avec une constitution. Que cette semaine de juillet ait été des noces ou une absorption dépend des mémoires que l'on lit — et ce chapitre les lit tous, côte à côte, à l'épreuve des procès-verbaux de la conférence eux-mêmes."
    },
    sidebar: {
      en: "The federal decade produced institutional artefacts still visible today: the House of Chiefs tradition, the common-law courts of the North-West and South-West, and the bilingual grammar of the state itself.",
      fr: "La décennie fédérale a laissé des artefacts institutionnels toujours visibles : la tradition de la House of Chiefs, les juridictions de common law du Nord-Ouest et du Sud-Ouest, et la grammaire bilingue de l'État lui-même."
    },
    pullQuote: {
      en: "A wedding or an absorption, depending on whose memoirs you read.",
      fr: "Des noces ou une absorption, selon les mémoires que l'on lit."
    },
    sources: [
      { en: "Foumban conference minutes and delegation papers — placeholder", fr: "Procès-verbaux de la conférence de Foumban et papiers des délégations — à compléter" },
      { en: "UN plebiscite commission reports, 1959–1961", fr: "Rapports de la commission du plébiscite de l'ONU, 1959–1961" },
      { en: "West Cameroon House of Assembly debates", fr: "Débats de la House of Assembly du Cameroun occidental" }
    ],
    openIssues: [
      { en: "Digitise surviving West Cameroon state records at Buea for the source library.", fr: "Numériser les archives subsistantes de l'État du Cameroun occidental à Buea pour la bibliothèque de sources." },
      { en: "Interview surviving witnesses of the 1961 plebiscite campaigns, north and south.", fr: "Interviewer les derniers témoins des campagnes du plébiscite de 1961, au nord comme au sud." }
    ],
    contributor: {
      name: "Dr. V. Ngoh Fanso (placeholder)",
      affil: { en: "Constitutional history, University of Buea", fr: "Histoire constitutionnelle, Université de Buea" }
    }
  },

  {
    id: "unitary",
    num: 10,
    status: "draft",
    version: "0.6",
    period: { en: "1972 – 1990", fr: "1972 – 1990" },
    title: {
      en: "The Unitary State: Centralisation and State-Building",
      fr: "L'État unitaire : centralisation et construction de l'État"
    },
    summary: {
      en: "The United Republic of Cameroon (1972, renamed Republic of Cameroon in 1984) concentrated authority in a presidential centre served by a territorial administration of governors, prefects, and sub-prefects inherited from the French model and extended nationwide. This chapter analyses the machinery of the unitary state: the single party as instrument of integration and control, planned development and the oil economy, the peaceful transfer of power in 1982 and the crisis of 1984, and the ways citizens, chiefs, and churches negotiated, evaded, and used a state that aspired to be everywhere.",
      fr: "La République unie du Cameroun (1972, redevenue République du Cameroun en 1984) concentre l'autorité dans un centre présidentiel servi par une administration territoriale de gouverneurs, préfets et sous-préfets, héritée du modèle français et étendue à tout le pays. Ce chapitre analyse la machinerie de l'État unitaire : le parti unique comme instrument d'intégration et de contrôle, le développement planifié et l'économie pétrolière, la passation pacifique de 1982 et la crise de 1984, et les manières dont citoyens, chefs et Églises négocièrent, contournèrent et utilisèrent un État qui aspirait à être partout."
    },
    keywords: {
      en: ["unitary state", "territorial administration", "single party", "prefectoral system", "1982 succession", "oil economy"],
      fr: ["État unitaire", "administration territoriale", "parti unique", "système préfectoral", "succession de 1982", "économie pétrolière"]
    },
    subsections: [
      { en: "From federation to united republic", fr: "De la fédération à la république unie" },
      { en: "Governors, prefects, sub-prefects: the prefectoral grid", fr: "Gouverneurs, préfets, sous-préfets : le maillage préfectoral" },
      { en: "The party-state at work", fr: "Le parti-État à l'œuvre" },
      { en: "Development, oil, and the planned economy", fr: "Développement, pétrole et économie planifiée" },
      { en: "1982–1984: succession and rupture", fr: "1982–1984 : succession et rupture" }
    ],
    questions: [
      { en: "What problems was centralisation meant to solve — and which did it create?", fr: "Quels problèmes la centralisation devait-elle résoudre — et lesquels a-t-elle créés ?" },
      { en: "How did chieftaincy survive inside a Jacobin state?", fr: "Comment la chefferie a-t-elle survécu au sein d'un État jacobin ?" },
      { en: "What is the historical balance sheet of the planned-development decades?", fr: "Quel est le bilan historique des décennies de développement planifié ?" }
    ],
    keyTerms: [
      { en: "prefect / sub-prefect", fr: "préfet / sous-préfet" },
      { en: "party-state", fr: "parti-État" },
      { en: "five-year plans", fr: "plans quinquennaux" },
      { en: "6 April 1984", fr: "6 avril 1984" }
    ],
    narrative: {
      en: "The prefect arrived with the flag, the seal, and the plan. In thousands of localities, the state's presence was one man, a flagpole, and a ledger — yet through that slender apparatus passed schooling, taxation, chieftaincy disputes, and the naming of every new arrondissement.",
      fr: "Le préfet arrivait avec le drapeau, le sceau et le plan. Dans des milliers de localités, la présence de l'État tenait à un homme, un mât et un registre — et pourtant, par ce mince appareil passaient l'école, l'impôt, les litiges de chefferie et la naissance de chaque nouvel arrondissement."
    },
    sidebar: {
      en: "The 1977 decree integrating traditional chieftaincy into the territorial administration remains a foundational — and debated — text for the relationship between customary and state authority.",
      fr: "Le décret de 1977 intégrant la chefferie traditionnelle à l'administration territoriale demeure un texte fondateur — et discuté — du rapport entre autorité coutumière et autorité d'État."
    },
    pullQuote: {
      en: "One man, a flagpole, and a ledger.",
      fr: "Un homme, un mât et un registre."
    },
    sources: [
      { en: "Decrees and organigrams of territorial administration, 1972–1990 — placeholder", fr: "Décrets et organigrammes de l'administration territoriale, 1972–1990 — à compléter" },
      { en: "Party congress records and mobilisation materials", fr: "Actes des congrès du parti et matériels de mobilisation" },
      { en: "Prefectoral tour reports (rapports de tournée)", fr: "Rapports de tournée préfectoraux" }
    ],
    openIssues: [
      { en: "Case-study the creation of one arrondissement from petition to decree.", fr: "Étudier la création d'un arrondissement, de la pétition au décret." },
      { en: "Assess the social history of the économie planifiée beyond official statistics.", fr: "Écrire l'histoire sociale de l'économie planifiée au-delà des statistiques officielles." }
    ],
    contributor: {
      name: "Dr. P. Mbarga Essomba (placeholder)",
      affil: { en: "Public administration history, University of Douala", fr: "Histoire de l'administration publique, Université de Douala" }
    }
  },

  {
    id: "administration",
    num: 11,
    status: "review",
    version: "0.9",
    period: { en: "1990 – present", fr: "1990 – aujourd'hui" },
    title: {
      en: "Regions, Departments, Arrondissements: The Present Administrative Order",
      fr: "Régions, départements, arrondissements : l'ordre administratif actuel"
    },
    summary: {
      en: "Cameroon today is organised into 10 regions, 58 departments, and some 360 arrondissements, with decentralised councils and, since 2019, a special status for the North-West and South-West. This chapter reconstructs how that map was made: the liberalisation laws of 1990, the constitution of 1996 that promised regions, the 2004 decentralisation package, the 2008 transformation of provinces into regions, and the General Code of Decentralised Territorial Collectivities of 2019. It treats the administrative map as an archive in itself — every boundary, chef-lieu, and name recording a negotiation between state logic and local history.",
      fr: "Le Cameroun est aujourd'hui organisé en 10 régions, 58 départements et quelque 360 arrondissements, avec des collectivités décentralisées et, depuis 2019, un statut spécial pour le Nord-Ouest et le Sud-Ouest. Ce chapitre reconstitue la fabrique de cette carte : lois de libéralisation de 1990, constitution de 1996 promettant les régions, lois de décentralisation de 2004, transformation des provinces en régions en 2008, et Code général des collectivités territoriales décentralisées de 2019. Il traite la carte administrative comme une archive en soi — chaque limite, chef-lieu et toponyme consignant une négociation entre logique d'État et histoire locale."
    },
    keywords: {
      en: ["decentralisation", "10 regions", "58 departments", "arrondissements", "special status", "chef-lieu politics"],
      fr: ["décentralisation", "10 régions", "58 départements", "arrondissements", "statut spécial", "politique des chefs-lieux"]
    },
    subsections: [
      { en: "1990: the laws of liberty and their limits", fr: "1990 : les lois des libertés et leurs limites" },
      { en: "The 1996 constitution: regions on paper", fr: "La constitution de 1996 : des régions sur le papier" },
      { en: "2004–2008: from province to region", fr: "2004–2008 : de la province à la région" },
      { en: "Anatomy of the map: how units are created and named", fr: "Anatomie de la carte : créer et nommer les circonscriptions" },
      { en: "2019: the General Code and the special status", fr: "2019 : le Code général et le statut spécial" }
    ],
    questions: [
      { en: "Is decentralisation a transfer of power, of tasks, or of blame?", fr: "La décentralisation transfère-t-elle le pouvoir, les tâches ou la responsabilité des échecs ?" },
      { en: "What histories are legible in the boundaries and names of departments?", fr: "Quelles histoires se lisent dans les limites et les noms des départements ?" },
      { en: "What does 'special status' recognise, and what does it defer?", fr: "Que reconnaît le « statut spécial », et que diffère-t-il ?" }
    ],
    keyTerms: [
      { en: "decentralised territorial collectivity", fr: "collectivité territoriale décentralisée" },
      { en: "chef-lieu", fr: "chef-lieu" },
      { en: "special status (2019)", fr: "statut spécial (2019)" },
      { en: "regional council", fr: "conseil régional" }
    ],
    narrative: {
      en: "Ask why a department bears the name of a river rather than a people, or why a chef-lieu sits in one town and not its rival, and you will be told a story that begins long before the decree — often before the colony. The administrative map is the country's most consulted history book, read daily by everyone and recognised as history by almost no one.",
      fr: "Demandez pourquoi un département porte le nom d'un fleuve plutôt que d'un peuple, ou pourquoi un chef-lieu siège dans telle ville et non chez sa rivale, et l'on vous racontera une histoire qui commence bien avant le décret — souvent avant la colonie. La carte administrative est le livre d'histoire le plus consulté du pays : chacun la lit chaque jour, presque personne ne la reconnaît comme de l'histoire."
    },
    sidebar: {
      en: "The first regional councils were elected in December 2020, six decades after regions were first imagined and twenty-four years after they were constitutionalised — a chronology that is itself a historical argument.",
      fr: "Les premiers conseils régionaux ont été élus en décembre 2020, six décennies après que les régions furent imaginées et vingt-quatre ans après leur constitutionnalisation — une chronologie qui est en soi un argument historique."
    },
    pullQuote: {
      en: "The administrative map is the country's most consulted history book.",
      fr: "La carte administrative est le livre d'histoire le plus consulté du pays."
    },
    sources: [
      { en: "Constitutional texts of 1972, 1984, 1996, and the 2019 General Code — placeholder", fr: "Textes constitutionnels de 1972, 1984, 1996 et Code général de 2019 — à compléter" },
      { en: "Decrees creating and modifying regions, departments, and arrondissements", fr: "Décrets créant et modifiant régions, départements et arrondissements" },
      { en: "Local petitions for administrative units — community archives", fr: "Pétitions locales pour la création de circonscriptions — archives communautaires" }
    ],
    openIssues: [
      { en: "Build the complete gazetteer of the 58 departments with dates and name origins.", fr: "Constituer le répertoire complet des 58 départements avec dates et origines des noms." },
      { en: "Commission an accessible explainer of the special-status institutions.", fr: "Commander une présentation accessible des institutions du statut spécial." }
    ],
    contributor: {
      name: "Dr. C. Tchoupie Nana (placeholder)",
      affil: { en: "Law and governance, University of Dschang", fr: "Droit et gouvernance, Université de Dschang" }
    }
  },

  {
    id: "memory",
    num: 12,
    status: "draft",
    version: "0.3",
    period: { en: "The present, looking back", fr: "Le présent, regard tourné vers l'arrière" },
    title: {
      en: "Memory, Identity, Language, and the Debates of Now",
      fr: "Mémoire, identité, langue et les débats d'aujourd'hui"
    },
    summary: {
      en: "History does not end; it is argued with. This closing chapter surveys the debates through which Cameroonians engage their past today: the anglophone question and the memory of federation; the demand for restitution of objects and archives held abroad; the naming and unnaming of streets, monuments, and heroes; the place of national languages in schools and scholarship; and the digital archives — from family WhatsApp groups to university repositories — where the next generation is already keeping its own record. It closes with the project's own wager: that a country able to argue about its past with evidence is stronger than one obliged to be silent about it.",
      fr: "L'histoire ne s'achève pas ; on discute avec elle. Ce chapitre final parcourt les débats par lesquels les Camerounais s'expliquent aujourd'hui avec leur passé : la question anglophone et la mémoire de la fédération ; l'exigence de restitution des objets et archives détenus à l'étranger ; le baptême et le débaptême des rues, monuments et héros ; la place des langues nationales à l'école et dans la recherche ; et les archives numériques — des groupes WhatsApp familiaux aux dépôts universitaires — où la génération qui vient tient déjà son propre registre. Il se ferme sur le pari du projet lui-même : un pays capable de discuter de son passé preuves en main est plus fort qu'un pays tenu de s'en taire."
    },
    keywords: {
      en: ["memory politics", "anglophone question", "restitution", "national languages", "monuments", "digital archives"],
      fr: ["politiques de la mémoire", "question anglophone", "restitution", "langues nationales", "monuments", "archives numériques"]
    },
    subsections: [
      { en: "Whose heroes? Naming the public square", fr: "Les héros de qui ? Nommer l'espace public" },
      { en: "The anglophone question as a question of history", fr: "La question anglophone comme question d'histoire" },
      { en: "Bringing them home: objects, archives, ancestors", fr: "Les faire revenir : objets, archives, ancêtres" },
      { en: "More than two: national languages and knowledge", fr: "Plus que deux : langues nationales et savoir" },
      { en: "The archive in your pocket", fr: "L'archive dans la poche" }
    ],
    questions: [
      { en: "Can contested memory be curated publicly without being nationalised?", fr: "La mémoire contestée peut-elle être portée publiquement sans être nationalisée ?" },
      { en: "What would meaningful restitution — of objects and of narrative — look like?", fr: "À quoi ressemblerait une restitution digne de ce nom — des objets comme du récit ?" },
      { en: "What does this project owe the generations that will revise it?", fr: "Que doit ce projet aux générations qui le réviseront ?" }
    ],
    keyTerms: [
      { en: "lieux de mémoire", fr: "lieux de mémoire" },
      { en: "restitution", fr: "restitution" },
      { en: "mother-tongue education", fr: "enseignement en langue maternelle" },
      { en: "community archive", fr: "archive communautaire" }
    ],
    narrative: {
      en: "A statue is an argument in bronze; a syllabus is an argument in instalments; a border is an argument in fences. This chapter does not settle those arguments. It equips readers to join them — with dates, documents, and the confidence of people who know their own story well enough to debate it.",
      fr: "Une statue est un argument en bronze ; un programme scolaire, un argument à tempérament ; une frontière, un argument en clôtures. Ce chapitre ne tranche pas ces arguments. Il arme le lecteur pour y entrer — avec des dates, des documents, et l'assurance de qui connaît assez sa propre histoire pour en débattre."
    },
    sidebar: {
      en: "This chapter is deliberately the least finished in the volume. It is drafted in public and revised often — the project's laboratory as much as its conclusion.",
      fr: "Ce chapitre est délibérément le moins achevé du volume. Il s'écrit en public et se révise souvent — laboratoire du projet autant que conclusion."
    },
    pullQuote: {
      en: "A statue is an argument in bronze.",
      fr: "Une statue est un argument en bronze."
    },
    sources: [
      { en: "Press and parliamentary debates on memory and restitution — placeholder", fr: "Presse et débats parlementaires sur la mémoire et la restitution — à compléter" },
      { en: "Inventories of Cameroonian collections in foreign museums", fr: "Inventaires des collections camerounaises dans les musées étrangers" },
      { en: "Community and diaspora digital archives — directory in progress", fr: "Archives numériques communautaires et diasporiques — répertoire en cours" }
    ],
    openIssues: [
      { en: "Everything. This chapter is an open call: propose a section.", fr: "Tout. Ce chapitre est un appel ouvert : proposez une section." },
      { en: "Establish the project's own oral-history collection protocol as a public document.", fr: "Publier le protocole de collecte d'histoire orale du projet comme document public." }
    ],
    contributor: {
      name: "Editorial collective (open)",
      affil: { en: "Coordinating author sought", fr: "Auteur coordonnateur recherché" }
    }
  }
];
