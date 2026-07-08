/* =========================================================================
   camerounhistoire.org — Bilingual content: interface strings & section prose
   -------------------------------------------------------------------------
   HOW TO EDIT
   Every entry has an `en` and `fr` key. Edit the text, never the key names.
   Layout lives in camerounhistoire.html; prose lives here.
   Chapters live in data/chapters.js, contributors in data/contributors.js,
   updates in data/updates.js.
   ========================================================================= */

window.CH_CONTENT = {

  /* ---------- Site identity ---------- */
  site: {
    name: { en: "Cameroun Histoire", fr: "Cameroun Histoire" },
    domain: { en: "camerounhistoire.org", fr: "camerounhistoire.org" },
    tagline: {
      en: "A collaborative, open history of Cameroon, written by her own sons and daughters.",
      fr: "Une histoire ouverte et collaborative du Cameroun, écrite par ses propres fils et filles."
    }
  },

  /* ---------- Navigation ---------- */
  nav: {
    home:         { en: "Home",             fr: "Accueil" },
    about:        { en: "About",            fr: "À propos" },
    timeline:     { en: "Timeline",         fr: "Chronologie" },
    chapters:     { en: "Chapters",         fr: "Chapitres" },
    contributors: { en: "Contributors",     fr: "Contributeurs" },
    method:       { en: "Editorial Method", fr: "Méthode éditoriale" },
    resources:    { en: "Resources",        fr: "Ressources" },
    updates:      { en: "Updates",          fr: "Mises à jour" },
    skip:         { en: "Skip to main content", fr: "Aller au contenu principal" },
    menu:         { en: "Menu",             fr: "Menu" },
    langLabel:    { en: "Lire en français", fr: "Read in English" },
    themeLight:   { en: "Light mode",       fr: "Mode clair" },
    themeDark:    { en: "Dark mode",        fr: "Mode sombre" }
  },

  /* ---------- Home ---------- */
  home: {
    kicker: {
      en: "An open history project · Volume I, in progress",
      fr: "Un projet d’histoire ouverte · Tome I, en cours d’écriture"
    },
    heroTitle: {
      en: "The history of Cameroon, told from within.",
      fr: "L’histoire du Cameroun, racontée de l’intérieur."
    },
    heroLead: {
      en: "Cameroun Histoire is a collaboratively authored, freely accessible history of Cameroon — from the earliest peopling of its forests, grasslands, and coasts to the making of its present regions, departments, and arrondissements. It is written, reviewed, and revised by Cameroonian historians, custodians of oral tradition, archivists, linguists, and teachers, in French and in English.",
      fr: "Cameroun Histoire est une histoire du Cameroun rédigée collectivement et librement accessible — depuis les premiers peuplements de ses forêts, de ses savanes et de ses côtes jusqu’à la formation de ses régions, départements et arrondissements actuels. Elle est écrite, relue et révisée par des historiens camerounais, des gardiens de la tradition orale, des archivistes, des linguistes et des enseignants, en français et en anglais."
    },
    ctaPrimary:   { en: "Explore the history",      fr: "Explorer l’histoire" },
    ctaSecondary: { en: "Join the contributors",    fr: "Rejoindre les contributeurs" },
    statChapters:  { en: "chapters, from first peopling to the present administrative map", fr: "chapitres, du premier peuplement à la carte administrative actuelle" },
    statLanguages: { en: "official languages, written as parallel originals", fr: "langues officielles, écrites comme des originaux parallèles" },
    statRegions:   { en: "regions represented in the editorial mandate", fr: "régions représentées dans le mandat éditorial" },
    featuredKicker: { en: "Featured chapters", fr: "Chapitres à la une" },
    featuredTitle: {
      en: "Twelve chapters, one long conversation",
      fr: "Douze chapitres, une longue conversation"
    },
    featuredLead: {
      en: "The narrative unfolds in twelve chapters, each stewarded by a coordinating author and open to revision. Begin anywhere; the past does not read in a straight line.",
      fr: "Le récit se déploie en douze chapitres, chacun placé sous la responsabilité d’un auteur coordonnateur et ouvert à la révision. Commencez où vous voulez : le passé ne se lit pas en ligne droite."
    },
    allChapters: { en: "Browse all chapters", fr: "Parcourir tous les chapitres" },
    timelineKicker: { en: "The long arc", fr: "Le long fil" },
    timelineTitle: {
      en: "From the Lake Chad basin to the modern republic",
      fr: "Du bassin du lac Tchad à la république moderne"
    },
    timelineCta: { en: "See the full timeline", fr: "Voir la chronologie complète" },
    whyKicker: { en: "Why this project matters", fr: "Pourquoi ce projet compte" },
    whyTitle: {
      en: "A history too often written from elsewhere",
      fr: "Une histoire trop souvent écrite d’ailleurs"
    },
    whyBody1: {
      en: "For more than a century, the history of Cameroon has been narrated principally through colonial archives, foreign chancelleries, and metropolitan universities. Those records matter — but they are partial, in both senses of the word. They rarely hear the fondom and the lamidat on their own terms; they seldom register the genealogies kept by griots, the jurisprudence of village councils, or the migrations remembered in lineage praise-names.",
      fr: "Depuis plus d’un siècle, l’histoire du Cameroun est principalement racontée à travers les archives coloniales, les chancelleries étrangères et les universités métropolitaines. Ces sources comptent — mais elles sont partielles, dans les deux sens du terme. Elles entendent rarement le fondom et le lamidat selon leurs propres termes ; elles enregistrent peu les généalogies conservées par les griots, la jurisprudence des conseils villageois ou les migrations retenues dans les devises lignagères."
    },
    whyBody2: {
      en: "This project reverses the direction of narration. It begins with Cameroonian sources, Cameroonian questions, and Cameroonian debates, and reads external archives against them — critically, gratefully, and without deference. The result is not a single official story but a disciplined, plural, continuously revised account: an open national text.",
      fr: "Ce projet inverse le sens de la narration. Il part des sources camerounaises, des questions camerounaises et des débats camerounais, et relit les archives extérieures à leur lumière — de manière critique, reconnaissante et sans déférence. Le résultat n’est pas un récit officiel unique, mais un texte national ouvert : discipliné, pluriel, continuellement révisé."
    },
    collabKicker: { en: "A public-intellectual undertaking", fr: "Une entreprise d’intellectuels publics" },
    collabTitle: {
      en: "Written by many hands, answerable to evidence",
      fr: "Écrite à plusieurs mains, redevable aux preuves"
    },
    collabBody: {
      en: "Every chapter is signed, reviewed, and versioned. Historians work beside archivists, linguists, geographers, and custodians of oral tradition. Disagreement is recorded, not erased: where scholars differ, the text says so, and readers may follow the argument into the sources. We invite universities, cultural associations, diaspora networks, and classroom teachers across all ten regions to take part.",
      fr: "Chaque chapitre est signé, relu et versionné. Les historiens travaillent aux côtés d’archivistes, de linguistes, de géographes et de dépositaires de la tradition orale. Le désaccord est consigné, non effacé : là où les chercheurs divergent, le texte le dit, et le lecteur peut suivre le débat jusqu’aux sources. Nous invitons les universités, les associations culturelles, les réseaux de la diaspora et les enseignants des dix régions à y prendre part."
    },
    quote: {
      en: "“A country that lets others hold its memory will one day have to ask permission to remember. We are writing so that no Cameroonian child ever has to ask.”",
      fr: "« Un pays qui laisse d’autres garder sa mémoire devra un jour demander la permission de se souvenir. Nous écrivons pour qu’aucun enfant camerounais n’ait jamais à la demander. »"
    },
    quoteAttr: {
      en: "— From the founding editorial statement, Yaoundé & Buea, 2026",
      fr: "— Extrait de la déclaration éditoriale fondatrice, Yaoundé et Buea, 2026"
    },
    principlesKicker: { en: "Editorial principles", fr: "Principes éditoriaux" },
    principles: [
      {
        title: { en: "Indigenous voice first", fr: "La voix endogène d’abord" },
        body: {
          en: "Oral tradition, local historiography, and community memory are treated as primary intellectual sources, cross-examined with the same rigour as any archive.",
          fr: "La tradition orale, l’historiographie locale et la mémoire communautaire sont traitées comme des sources intellectuelles de plein droit, soumises à la même rigueur critique que toute archive."
        }
      },
      {
        title: { en: "Evidence over convenience", fr: "La preuve avant la commodité" },
        body: {
          en: "Claims are sourced. Established fact, interpretive debate, and contested memory are distinguished explicitly, in the text itself.",
          fr: "Les affirmations sont sourcées. Le fait établi, le débat d’interprétation et la mémoire contestée sont explicitement distingués, dans le texte même."
        }
      },
      {
        title: { en: "Two languages, many tongues", fr: "Deux langues, plusieurs parlers" },
        body: {
          en: "Everything appears in French and English, and the project honours the more than 250 national languages in which Cameroon remembers itself.",
          fr: "Tout paraît en français et en anglais, et le projet honore les quelque 250 langues nationales dans lesquelles le Cameroun se souvient de lui-même."
        }
      },
      {
        title: { en: "A living text", fr: "Un texte vivant" },
        body: {
          en: "Chapters carry version numbers and revision notes. New evidence changes the text; the record of change stays public.",
          fr: "Les chapitres portent des numéros de version et des notes de révision. Une preuve nouvelle modifie le texte ; la trace du changement reste publique."
        }
      }
    ]
  },

  /* ---------- About ---------- */
  about: {
    kicker: { en: "About the project", fr: "À propos du projet" },
    title: {
      en: "An open national text",
      fr: "Un texte national ouvert"
    },
    lead: {
      en: "Cameroun Histoire is a free, bilingual, collaboratively written history of Cameroon — part open textbook, part historical review, part cultural archive.",
      fr: "Cameroun Histoire est une histoire du Cameroun gratuite, bilingue et rédigée collectivement — à la fois manuel ouvert, revue historique et archive culturelle."
    },
    body: [
      {
        heading: { en: "What this is", fr: "Ce que c’est" },
        text: {
          en: "This site is a long-form, chapter-based history of the territory and peoples of present-day Cameroon, from the deep past to the current administrative order. It is modelled on the great open history texts — collaboratively authored, peer-reviewed, freely readable, and regularly revised — but its centre of gravity is Cameroonian. Its editors sit in Cameroonian institutions and its evidentiary starting point is Cameroonian testimony, in all its forms.",
          fr: "Ce site propose une histoire au long cours, organisée en chapitres, du territoire et des peuples du Cameroun actuel, des temps les plus anciens jusqu’à l’ordre administratif présent. Il s’inspire des grands textes d’histoire ouverte — rédigés collectivement, évalués par les pairs, librement lisibles et régulièrement révisés — mais son centre de gravité est camerounais. Ses éditeurs siègent dans des institutions camerounaises et son point de départ documentaire est le témoignage camerounais, sous toutes ses formes."
        }
      },
      {
        heading: { en: "Why it must be written from within", fr: "Pourquoi elle doit s’écrire de l’intérieur" },
        text: {
          en: "No people can be fully understood through documents produced to govern, tax, convert, or study them. The colonial archive on Cameroon is vast and indispensable, yet it was assembled by administrations answering to Berlin, Geneva, Paris, and London — not to Foumban, Garoua, Buea, or Ebolowa. Writing from within does not mean writing without criticism, nor writing against anyone. It means beginning from the questions Cameroonians actually ask about their past, and refusing to treat local knowledge as folklore while treating foreign paperwork as fact.",
          fr: "Aucun peuple ne peut être pleinement compris à travers des documents produits pour le gouverner, le taxer, le convertir ou l’étudier. L’archive coloniale sur le Cameroun est immense et indispensable, mais elle fut constituée par des administrations qui répondaient à Berlin, Genève, Paris et Londres — non à Foumban, Garoua, Buea ou Ebolowa. Écrire de l’intérieur ne signifie ni écrire sans critique, ni écrire contre quiconque. Cela signifie partir des questions que les Camerounais posent réellement à leur passé, et refuser de traiter le savoir local comme du folklore quand la paperasse étrangère est traitée comme un fait."
        }
      },
      {
        heading: { en: "Oral tradition, archives, and scholarship", fr: "Tradition orale, archives et recherche" },
        text: {
          en: "The project holds three bodies of knowledge in deliberate tension: oral tradition and living memory; written and material archives, at home and abroad; and the accumulated scholarship of historians, archaeologists, linguists, and anthropologists. None is granted automatic authority. Each is examined for what it can and cannot say, and our chapters show their working — readers see how a claim was built, not only what it asserts.",
          fr: "Le projet tient en tension délibérée trois corps de savoirs : la tradition orale et la mémoire vivante ; les archives écrites et matérielles, au pays comme à l’étranger ; et la recherche accumulée des historiens, archéologues, linguistes et anthropologues. Aucun ne reçoit d’autorité automatique. Chacun est interrogé sur ce qu’il peut et ne peut pas dire, et nos chapitres montrent leur fabrique : le lecteur voit comment une affirmation a été construite, et pas seulement ce qu’elle avance."
        }
      },
      {
        heading: { en: "Bilingual and multi-regional by design", fr: "Bilingue et multirégional par conception" },
        text: {
          en: "Cameroon thinks in more than 250 languages and publishes chiefly in two. Every part of this site exists in French and English as parallel originals — neither is a translation of the other in status. Editorially, we are committed to representation across all ten regions, and to naming the specific places where history happened: the chapter on the coast is not the chapter on the Grassfields, and the north is not a footnote to the south.",
          fr: "Le Cameroun pense en plus de 250 langues et publie principalement en deux. Chaque partie de ce site existe en français et en anglais comme originaux parallèles — aucun n’a le statut de traduction de l’autre. Sur le plan éditorial, nous nous engageons à représenter les dix régions et à nommer les lieux précis où l’histoire s’est faite : le chapitre sur la côte n’est pas celui des Grassfields, et le nord n’est pas une note de bas de page du sud."
        }
      },
      {
        heading: { en: "A civic purpose", fr: "Une finalité civique" },
        text: {
          en: "History is public infrastructure. A citizenry that knows how its regions, departments, and arrondissements came to be — and what came before them — argues better, teaches better, and governs itself better. This site is built for classrooms, newsrooms, councils, families, and the merely curious. It carries no paywall and no party line.",
          fr: "L’histoire est une infrastructure publique. Une citoyenneté qui sait comment ses régions, départements et arrondissements sont advenus — et ce qui les a précédés — débat mieux, enseigne mieux et se gouverne mieux. Ce site est conçu pour les salles de classe, les rédactions, les conseils, les familles et les simples curieux. Il ne comporte ni péage ni ligne partisane."
        }
      }
    ]
  },

  /* ---------- Timeline ---------- */
  timeline: {
    kicker: { en: "Chronology", fr: "Chronologie" },
    title: {
      en: "The long history of Cameroon",
      fr: "La longue histoire du Cameroun"
    },
    lead: {
      en: "Twelve periods, from the first peopling of the territory to the administrative map of today. Each entry opens onto a full chapter.",
      fr: "Douze périodes, du premier peuplement du territoire à la carte administrative d’aujourd’hui. Chaque entrée ouvre sur un chapitre complet."
    },
    openChapter: { en: "Open chapter", fr: "Ouvrir le chapitre" }
  },

  /* ---------- Chapters section ---------- */
  chapters: {
    kicker: { en: "Table of contents", fr: "Table des matières" },
    title: { en: "Chapters", fr: "Chapitres" },
    lead: {
      en: "A browsable index of the full text. Status labels show where each chapter stands in the editorial cycle; every chapter lists open questions awaiting collaborators.",
      fr: "Un index navigable du texte intégral. Les étiquettes de statut indiquent l’étape éditoriale de chaque chapitre ; chacun signale des questions ouvertes qui attendent des collaborateurs."
    },
    read: { en: "Read chapter", fr: "Lire le chapitre" },
    backToIndex: { en: "Back to all chapters", fr: "Retour aux chapitres" },
    overview: { en: "Overview", fr: "Aperçu" },
    questions: { en: "Major questions", fr: "Questions majeures" },
    keyTerms: { en: "Key terms", fr: "Termes clés" },
    narrative: { en: "From the chapter", fr: "Extrait du chapitre" },
    sidebarNote: { en: "Editor’s note", fr: "Note de la rédaction" },
    sources: { en: "Suggested primary sources", fr: "Sources primaires suggérées" },
    openIssues: { en: "Open issues for collaborators", fr: "Chantiers ouverts aux collaborateurs" },
    coordinator: { en: "Coordinating author", fr: "Auteur coordonnateur" },
    themes: { en: "Themes", fr: "Thèmes" },
    subsections: { en: "Sections in this chapter", fr: "Sections de ce chapitre" },
    status: {
      draft:    { en: "Draft",       fr: "Ébauche" },
      review:   { en: "Under review",fr: "En relecture" },
      reviewed: { en: "Reviewed",    fr: "Relu" },
      revision: { en: "In revision", fr: "En révision" }
    },
    prevChapter: { en: "Previous chapter", fr: "Chapitre précédent" },
    nextChapter: { en: "Next chapter", fr: "Chapitre suivant" }
  },

  /* ---------- Contributors ---------- */
  contributors: {
    kicker: { en: "The collective", fr: "Le collectif" },
    title: { en: "Contributors", fr: "Contributeurs" },
    lead: {
      en: "Historians, anthropologists, archivists, linguists, geographers, educators, and public intellectuals — from all ten regions and the diaspora.",
      fr: "Historiens, anthropologues, archivistes, linguistes, géographes, enseignants et intellectuels publics — des dix régions et de la diaspora."
    },
    inviteTitle: { en: "An open invitation", fr: "Une invitation ouverte" },
    inviteBody: {
      en: "If you carry knowledge of Cameroon’s past — as a researcher, a teacher, a custodian of oral tradition, an archivist, or a careful reader of your own community’s history — this project needs you. We commission chapters and shorter essays, we welcome corrections and sources, and we especially seek contributors working in and on the regions least served by the existing literature. Fluency in either French or English suffices; the editorial team supports translation into the other.",
      fr: "Si vous portez un savoir sur le passé du Cameroun — comme chercheur, enseignant, dépositaire de la tradition orale, archiviste, ou lecteur attentif de l’histoire de votre propre communauté — ce projet a besoin de vous. Nous commandons des chapitres et des essais plus courts, nous accueillons corrections et sources, et nous recherchons particulièrement des contributeurs travaillant dans et sur les régions les moins servies par la littérature existante. La maîtrise du français ou de l’anglais suffit ; l’équipe éditoriale accompagne la traduction vers l’autre langue."
    },
    workflowTitle: { en: "How to contribute", fr: "Comment contribuer" },
    workflow: [
      {
        step: { en: "Propose", fr: "Proposer" },
        text: {
          en: "Send a one-page proposal — subject, sources, and your relationship to them — to redaction@camerounhistoire.org.",
          fr: "Envoyez une proposition d’une page — sujet, sources et votre rapport à celles-ci — à redaction@camerounhistoire.org."
        }
      },
      {
        step: { en: "Draft", fr: "Rédiger" },
        text: {
          en: "Accepted proposals receive a chapter template, a style guide, and a coordinating editor. Drafts are written in either official language.",
          fr: "Les propositions retenues reçoivent un gabarit de chapitre, un guide de style et un éditeur coordonnateur. Les textes s’écrivent dans l’une ou l’autre langue officielle."
        }
      },
      {
        step: { en: "Review", fr: "Relire" },
        text: {
          en: "Each draft is read by at least two reviewers, including one grounded in the region or tradition concerned. Reviews are constructive and signed.",
          fr: "Chaque texte est relu par au moins deux relecteurs, dont un ancré dans la région ou la tradition concernée. Les relectures sont constructives et signées."
        }
      },
      {
        step: { en: "Publish & revise", fr: "Publier et réviser" },
        text: {
          en: "Published chapters remain open. Corrections, new evidence, and counter-readings are logged on the Updates page and folded into new versions.",
          fr: "Les chapitres publiés restent ouverts. Corrections, preuves nouvelles et contre-lectures sont consignées sur la page Mises à jour et intégrées aux nouvelles versions."
        }
      }
    ],
    codeTitle: { en: "Code of historical responsibility", fr: "Code de responsabilité historique" },
    code: [
      {
        en: "Name your sources, including oral ones, with the consent and attribution their custodians require.",
        fr: "Nommez vos sources, y compris orales, avec le consentement et l’attribution qu’exigent leurs dépositaires."
      },
      {
        en: "Distinguish what is established, what is argued, and what is remembered differently by different communities.",
        fr: "Distinguez ce qui est établi, ce qui est discuté et ce qui est remémoré différemment selon les communautés."
      },
      {
        en: "Write about every community as if its elders will read you — because they will.",
        fr: "Écrivez sur chaque communauté comme si ses aînés allaient vous lire — car ils vous liront."
      },
      {
        en: "Correct yourself publicly and promptly. The version history is part of the scholarship.",
        fr: "Corrigez-vous publiquement et promptement. L’historique des versions fait partie du travail scientifique."
      },
      {
        en: "Serve the reader, not a faction. This text belongs to all Cameroonians.",
        fr: "Servez le lecteur, non une faction. Ce texte appartient à tous les Camerounais."
      }
    ],
    profileLangs: { en: "Languages", fr: "Langues" },
    profileRegions: { en: "Regional focus", fr: "Ancrage régional" }
  },

  /* ---------- Editorial Method ---------- */
  method: {
    kicker: { en: "How the text is made", fr: "Comment le texte se fabrique" },
    title: { en: "Editorial method", fr: "Méthode éditoriale" },
    lead: {
      en: "An open history is only as trustworthy as its process. Ours is written down, applied to every chapter, and itself open to revision.",
      fr: "Une histoire ouverte ne vaut que par son processus. Le nôtre est écrit, appliqué à chaque chapitre et lui-même ouvert à la révision."
    },
    sections: [
      {
        heading: { en: "Commissioning and stewardship", fr: "Commande et responsabilité" },
        text: {
          en: "The editorial board maintains the chapter plan and commissions coordinating authors for each period. Coordinating authors assemble contributor teams, arbitrate among drafts, and answer publicly for the state of their chapter. No chapter is anonymous and none is finished: each carries a named steward and a version number.",
          fr: "Le comité éditorial tient le plan des chapitres et confie chaque période à un auteur coordonnateur. Celui-ci constitue l’équipe de contributeurs, arbitre entre les versions et répond publiquement de l’état de son chapitre. Aucun chapitre n’est anonyme et aucun n’est achevé : chacun porte un responsable nommé et un numéro de version."
        }
      },
      {
        heading: { en: "Standards of evidence", fr: "Régime de la preuve" },
        text: {
          en: "Every substantive claim must be traceable to a source a reader can consult: an archive and call number, a published work, an artefact, or a recorded oral testimony with its narrator, place, and date. Oral sources are cited with the same precision as written ones — narrator, lineage or office, occasion of narration, and language of delivery — and, where custom requires, with the permission of those who hold the tradition.",
          fr: "Toute affirmation substantielle doit être traçable jusqu’à une source consultable : une archive et sa cote, une publication, un artefact, ou un témoignage oral enregistré avec son narrateur, son lieu et sa date. Les sources orales sont citées avec la même précision que les sources écrites — narrateur, lignage ou charge, occasion de la narration, langue d’énonciation — et, là où la coutume l’exige, avec la permission des dépositaires de la tradition."
        }
      },
      {
        heading: { en: "Three registers of truth", fr: "Trois registres de vérité" },
        text: {
          en: "Our chapters explicitly distinguish established evidence (what the sources compel any honest reader to accept), interpretive debate (where competent scholars read the same sources differently), and contested memory (where communities remember the same events in incompatible ways). Contested memory is reported, contextualised, and respected — not adjudicated away.",
          fr: "Nos chapitres distinguent explicitement la preuve établie (ce que les sources imposent à tout lecteur honnête), le débat d’interprétation (là où des chercheurs compétents lisent différemment les mêmes sources) et la mémoire contestée (là où des communautés se souviennent des mêmes événements de manières incompatibles). La mémoire contestée est rapportée, contextualisée et respectée — non tranchée d’autorité."
        }
      },
      {
        heading: { en: "Review and revision", fr: "Relecture et révision" },
        text: {
          en: "Drafts pass through double review — one disciplinary, one regional — before publication. After publication, the text enters permanent revision: readers submit corrections and sources; the coordinating author accepts, rejects, or debates them in writing; and each accepted change is logged with date, reason, and author on the Updates page. Major re-writings produce a new numbered version; superseded versions remain archived and citable.",
          fr: "Avant publication, chaque texte passe une double relecture — l’une disciplinaire, l’autre régionale. Après publication, il entre en révision permanente : les lecteurs soumettent corrections et sources ; l’auteur coordonnateur les accepte, les refuse ou en débat par écrit ; chaque modification acceptée est consignée avec date, motif et auteur sur la page Mises à jour. Les refontes majeures produisent une nouvelle version numérotée ; les versions remplacées restent archivées et citables."
        }
      },
      {
        heading: { en: "Language parity", fr: "Parité des langues" },
        text: {
          en: "French and English versions are drafted or adapted by writers, not machines, and reviewed for fidelity of argument rather than word-for-word equivalence. Key terms from national languages are retained in the original with glosses, and the glossary records them for both reading publics.",
          fr: "Les versions française et anglaise sont rédigées ou adaptées par des auteurs, non par des machines, et relues pour la fidélité de l’argument plutôt que pour l’équivalence mot à mot. Les termes clés issus des langues nationales sont conservés dans l’original avec leur glose, et le glossaire les consigne pour les deux publics."
        }
      }
    ]
  },

  /* ---------- Resources ---------- */
  resources: {
    kicker: { en: "For teachers, students, and researchers", fr: "Pour enseignants, étudiants et chercheurs" },
    title: { en: "Resources", fr: "Ressources" },
    lead: {
      en: "Teaching materials, reading lists, maps, and a growing glossary — built to carry this history into classrooms and communities.",
      fr: "Supports pédagogiques, bibliographies, cartes et un glossaire en expansion — conçus pour porter cette histoire dans les classes et les communautés."
    },
    groups: [
      {
        title: { en: "Teaching materials", fr: "Supports pédagogiques" },
        items: [
          { en: "Chapter-by-chapter lesson outlines aligned with secondary curricula (in preparation)", fr: "Plans de leçon par chapitre, alignés sur les programmes du secondaire (en préparation)" },
          { en: "Discussion questions and document-based exercises for each period", fr: "Questions de discussion et exercices sur documents pour chaque période" },
          { en: "Guidance for collecting oral history responsibly with students", fr: "Guide de collecte responsable de l’histoire orale avec des élèves" }
        ]
      },
      {
        title: { en: "Reading lists", fr: "Bibliographies" },
        items: [
          { en: "Foundational works by Cameroonian historians, period by period", fr: "Ouvrages fondateurs d’historiens camerounais, période par période" },
          { en: "Annotated guides to the colonial-era literature and its limits", fr: "Guides annotés de la littérature coloniale et de ses limites" },
          { en: "Recent theses and articles from Cameroonian universities", fr: "Thèses et articles récents des universités camerounaises" }
        ]
      },
      {
        title: { en: "Maps", fr: "Cartes" },
        items: [
          { en: "Historical base maps: polities, trade routes, mandate boundaries, federal and unitary divisions", fr: "Fonds de cartes historiques : entités politiques, routes commerciales, frontières des mandats, découpages fédéral et unitaire" },
          { en: "The present administrative map: 10 regions, 58 departments, 360 arrondissements", fr: "La carte administrative actuelle : 10 régions, 58 départements, 360 arrondissements" }
        ]
      },
      {
        title: { en: "Glossary & historical terms", fr: "Glossaire et termes historiques" },
        items: [
          { en: "Offices and institutions: fon, lamido, sultan, chef supérieur, paramount chief, ardo", fr: "Charges et institutions : fon, lamido, sultan, chef supérieur, paramount chief, ardo" },
          { en: "Administrative vocabulary across four regimes: Schutzgebiet, mandate, trusteeship, region", fr: "Vocabulaire administratif de quatre régimes : Schutzgebiet, mandat, tutelle, région" },
          { en: "Terms from national languages retained in the text, with glosses", fr: "Termes des langues nationales conservés dans le texte, avec leurs gloses" }
        ]
      },
      {
        title: { en: "Archival repositories", fr: "Dépôts d’archives" },
        items: [
          { en: "National Archives of Cameroon (Yaoundé) and Regional Archives (Buea)", fr: "Archives nationales du Cameroun (Yaoundé) et archives régionales (Buea)" },
          { en: "Overseas holdings: Bundesarchiv, Archives nationales d’outre-mer, The National Archives (UK), UN archives", fr: "Fonds d’outre-mer : Bundesarchiv, Archives nationales d’outre-mer, The National Archives (R.-U.), archives de l’ONU" },
          { en: "Mission archives, palace archives, and community collections — a growing directory", fr: "Archives missionnaires, archives des palais et collections communautaires — répertoire en expansion" }
        ]
      },
      {
        title: { en: "Classroom uses", fr: "Usages en classe" },
        items: [
          { en: "Assign chapters as free replacement or complement to costly imported textbooks", fr: "Prescrire les chapitres comme remplacement gratuit ou complément aux manuels importés coûteux" },
          { en: "Use “open issues” lists as research prompts for university seminars", fr: "Utiliser les « chantiers ouverts » comme sujets de recherche pour les séminaires universitaires" },
          { en: "Pair French and English versions for official-language instruction", fr: "Apparier les versions française et anglaise pour l’enseignement des langues officielles" }
        ]
      }
    ]
  },

  /* ---------- Updates ---------- */
  updates: {
    kicker: { en: "The living record", fr: "Le registre vivant" },
    title: { en: "Updates", fr: "Mises à jour" },
    lead: {
      en: "Revision notes, newly added chapters, and editorial announcements — the changelog of an open history.",
      fr: "Notes de révision, nouveaux chapitres et annonces éditoriales — le journal des modifications d’une histoire ouverte."
    }
  },

  /* ---------- Footer ---------- */
  footer: {
    missionTitle: { en: "The mission", fr: "La mission" },
    mission: {
      en: "To enable Cameroon’s intellectuals, researchers, teachers, and historically grounded citizens to write their country’s history together — from its earliest foundations to its present administrative order — with rigour, in both official languages, and in fidelity to Cameroon’s own voices.",
      fr: "Permettre aux intellectuels, chercheurs, enseignants et citoyens du Cameroun d’écrire ensemble l’histoire de leur pays — de ses fondations les plus anciennes à son ordre administratif actuel — avec rigueur, dans les deux langues officielles, et dans la fidélité aux voix du Cameroun lui-même."
    },
    navTitle: { en: "Navigate", fr: "Naviguer" },
    contactTitle: { en: "Contact", fr: "Contact" },
    contact: {
      en: "Editorial desk: redaction@camerounhistoire.org",
      fr: "Rédaction : redaction@camerounhistoire.org"
    },
    license: {
      en: "Text published under a Creative Commons Attribution–ShareAlike licence, unless otherwise noted. Cite as: Cameroun Histoire, camerounhistoire.org, with chapter version and date.",
      fr: "Textes publiés sous licence Creative Commons Attribution – Partage dans les mêmes conditions, sauf mention contraire. Citer : Cameroun Histoire, camerounhistoire.org, avec la version du chapitre et la date."
    },
    collabNote: {
      en: "Cameroun Histoire is a collaborative historical project in active development. Chapters are working texts, open to review and revision.",
      fr: "Cameroun Histoire est un projet historique collaboratif en développement actif. Les chapitres sont des textes de travail, ouverts à la relecture et à la révision."
    }
  }
};
