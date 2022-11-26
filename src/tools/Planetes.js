import dagoba from "../assets/img/planetes/dagoba/dagoba_planete.png";
import dagobahPays01 from "../assets/img/planetes/dagoba/dagoba_pic2.jpeg";
import dagobahPays02 from "../assets/img/planetes/dagoba/dagoba_pic4.jpeg";
import grogu from "../assets/img/planetes/dagoba/grogu.png";
import etoilenoire from "../assets/img/planetes/Etoile_noire/etoile_noire_planete.png";
import etoilenoirePays01 from "../assets/img/planetes/Etoile_noire/etoile_noire_pic3.jpeg";
import etoilenoirePays02 from "../assets/img/planetes/Etoile_noire/etoile_noire_pic4.jpeg";
import stormt from "../assets/img/planetes/Etoile_noire/stormt.png";
import miller from "../assets/img/planetes/miller/miller_planete.png";
import millerPays01 from "../assets/img/planetes/miller/miller_pic1.jpeg";
import millerPays02 from "../assets/img/planetes/miller/miller_pic3.webp";
import millerPerso from "../assets/img/planetes/miller/miller_perso.png";
import pandora from "../assets/img/planetes/Pandora/pandora_planete.png";
import pandoraPays01 from "../assets/img/planetes/Pandora/pandora_pic2.jpg";
import pandoraPays02 from "../assets/img/planetes/Pandora/pandora_pic5.jpeg";
import avatars from "../assets/img/planetes/Pandora/avatars.png";
import tatooine from "../assets/img/planetes/Tatooine/tatooine_planete.png";
import tatooinePays01 from "../assets/img/planetes/Tatooine/tatooine_pic1.jpeg";
import tatooinePays02 from "../assets/img/planetes/Tatooine/tatooine_pic4.webp";
import Tusken from "../assets/img/planetes/Tatooine/Tusken.png";
import lv426 from "../assets/img/planetes/LV426/LV-426Plan.png";
import lv426Paysage01 from "../assets/img/planetes/LV426/lv426Paysage01.png";
import lv426Paysage02 from "../assets/img/planetes/LV426/LV426Paysage02.png";
import plan01 from "../assets/img/planetes/plan01/plan01.png";
import plan01Perso from "../assets/img/planetes/plan01/perso06.png";
import plan01Pays01 from "../assets/img/planetes/plan01/plan01Pays01.jpg";
import plan01Pays02 from "../assets/img/planetes/plan01/plan01Pays02.jpg";
import plan02 from "../assets/img/planetes/plan02/plan02.png";
import plan02Perso from "../assets/img/planetes/plan02/perso03.webp";
import plan02Pays01 from "../assets/img/planetes/plan02/plan02Pays01.jpg";
import plan02Pays02 from "../assets/img/planetes/plan02/plan02Pays02.jpg";
import plan03 from "../assets/img/planetes/plan03/plan03.png";
import plan03Perso from "../assets/img/planetes/plan03/perso01.webp";
import plan03Pays01 from "../assets/img/planetes/plan03/plan03Pays01.jpg";
import plan03Pays02 from "../assets/img/planetes/plan03/plan03Pays02.jpg";
import plan04 from "../assets/img/planetes/plan04/plan04.png";
import plan04Perso from "../assets/img/planetes/plan04/perso07.png";
import plan04Pays01 from "../assets/img/planetes/plan04/plan04Pays01.jpg";
import plan04Pays02 from "../assets/img/planetes/plan04/plan04Pays02.jpg";
import plan05 from "../assets/img/planetes/plan05/plan05.png";
import plan05Perso from "../assets/img/planetes/plan05/perso04.webp";
import plan05Pays01 from "../assets/img/planetes/plan05/plan05Pays01.jpg";
import plan05Pays02 from "../assets/img/planetes/plan05/plan05Pays02.png";
import plan06 from "../assets/img/planetes/plan06/plan06.png";
import plan06Perso from "../assets/img/planetes/plan06/perso02.webp";
import plan06Pays01 from "../assets/img/planetes/plan06/plan06Pays01.jpg";
import plan06Pays02 from "../assets/img/planetes/plan06/plan06Pays02.jpg";
import alien01 from "../assets/img/planetes/LV426/alien_01.png";

const Planetes = [
  {
    id: 1,
    planetName: "Tatooine",
    img: tatooine,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: Tusken,
    photo01: tatooinePays01,
    photo02: tatooinePays02,
    price: 150000,
    stat: [
      { category: "Places restantes", level: 25 },
      { category: "Danger", level: 70 },
      { category: "Résistance à l'Homme", level: 90 },
      { category: "Habitabilité - Confort", level: 40 },
    ],
    txt: "Climat et relief : La planète était autrefois recouverte d’eau. De nos jours le climat est très sec, la journée la température peut atteindre les 65ºC tandis que les soirées sont très fraîches, avoisinant les 0ºC. Les tempêtes de sables sont fréquentes et l’eau est rare ce qui oblige l’exploitation de fermes hydroponiques. Ces fermes consistent à extraire l’humidité de l’atmosphère (comme Owen Lars et sa femme Beru). Tatooine est parsemée de déserts et de canyons où vivent les hommes des sables (Tusken) et le Jawas. Les plus célèbres sont : La Mer de dune, où vivait Maître Kenobi, la Fosse de Carkoon où se trouve le Sarlacc, le Jundland, qui est un désert rocailleux au bord de la mer de dune, la voie de Xelric (canyon profond près de Mochot), Mochot Steep, (formation rocheuse chère aux jawas), la Passe d'Arnthout (une route à travers le désert de Jundland), Bildor's et Beggar's Canyon (composé de Dead Man's Turn, de Diablo's cut et de Eye of the Needle, il s'agit de plusieurs canyons où beaucoup testent leur habileté à piloter un Skyhopper), Desolation Canyon, Ja-mero Ridge, Metta Drop, les Gorges de Jag Crag et Mospic High Range (barrière rocheuse près de Mos Espa). Les villes et les mœurs : Tatooine compte quelques grandes villes, même si la planète reste que très peu peuplée à cause de son climat. Les villes sont les centres de repaire des malfrats en tout genre : chasseurs de primes, contrebandiers et autre... Mos Esley est très réputé pour sa Cantina (Cantina de Chalmun). On trouve aussi pas mal d’animation sur Mos Espa et Bestine. Les habitants ont été habitués aux courses de Pod (plus tard interdites par l’empire elles seront remplacées par des combats sur véhicules « le Démolition ») Anchorhead, Fort Tusken et Motesta ont joué un rôle dans l’histoire de la planète. Histoire de Tatooine : Les premiers habitants de Tatooine furent des pirates et des contrebandiers (environs en -5000). 800 ans plus tard (-4200) des mineurs débarquèrent et fondèrent Ancheread, mais les mines s’épuisèrent et la planète tomba à l’abandon. En -700 les moines B’Omarr établissent un temple, celui-ci deviendra par la suite le palais de Jabba le Hutt. 100 ans BY les premières fermes hydroponiques se construisirent sur Tatooine. Les Jawas nomment à la planète : Tah Doo Eene, qui sera repris plus communément sous son nom actuel. Bestine est fondé par Melnea Arnthout et deviendra la capitale officielle de la planète. D’autres villes se construisent sur des ruines ou dans le désert, comme Fort Tusken (dans le désert de Jundland), Motesta (sur les ruines d’Anchorhead), Mos Esley et Mos Espa. 5 ans après l’explosion de la station orbitale Tatoo III (construite par des colons) avec le Obvious Nrivana, les Hutts font leur arrivée sur Tatooine (-65) et investissent Mos Espa puis chassent les Tusken. Jabba le Hutt fini par hériter du monastère B’Omarr et le modifiera constamment (-57). 11ans avant Yavin, l’Empire prendra le contrôle de la planète et Tour Aryon sera nommée préfet. L’Empire rendra Tatooine à l’Alliance Rebelle et aux Hutt 12 ans après. Quelques personnages importants sont originaires de Tatooine : Obi-Wan Kenobi (-56, maître Jedi), Anakin Skywalker (-41 connu aussi pour sa victoire à la Boonta Eve) ainsi que Gavin et Biggs tous les deux participeront à l’Alliance Rebelle.",
  },
  {
    id: 2,
    planetName: "Lea-452",
    img: plan05,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: plan05Perso,
    photo01: plan05Pays01,
    photo02: plan05Pays02,
    price: 150000,
    stat: [
      { category: "Places restantes", level: 22 },
      { category: "Danger", level: 50 },
      { category: "Résistance à l'Homme", level: 22 },
      { category: "Habitabilité - Confort", level: 62 },
    ],
    txt: "L’industrialisation de Lea-452 date de plusieurs siècles. A sa surface, on peut trouver des mines, des usines, des bureaux et des logements pour les ouvriers. Le sous-sol de la planète ressemble à un vrai labyrinthe fait de tunnels. C’est Fondor qui eut le privilège de construire le premier modèle du Super Destroyer Stellaire pour l’Empire, après la Bataille de Yavin, au détriment des chantiers navals de Kuat, habitué à travailler avec le Régime de Palpatine. Ce vaisseau allait devenir le croiseur personnel de Darth Vader ; il s’agit de l’Executor. La discrétion fut de mise pour cette construction ; on ferma tout trafic non militaire, empêchant les clients habituels de fréquenter ces chantiers. Après avoir désapprouvé cette action, ils se plièrent tout de même à l’exigence du Seigneur Vader. Pouvoir prendre le dessus sur l’industrie de Kuat fut également une motivation. Certains Amiraux de l’Empire désapprouvèrent ce projet, assurant qu’il s’agissait d un caprice de Darth Vader. Un conspirateur du nom de Griff, proposa à l’Alliance Rebelle de faire entrer un saboteur sur les chantiers de Fondor. S’ils parvenaient à détruire l’Executor, cela anéantirai l’un des plus grands projets du Seigneur Sith.",
  },
  {
    id: 3,
    planetName: "Dagobah",
    img: dagoba,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: grogu,
    photo01: dagobahPays01,
    photo02: dagobahPays02,
    price: 200000,
    stat: [
      { category: "Places restantes", level: 60 },
      { category: "Danger", level: 50 },
      { category: "Résistance à l'Homme", level: 20 },
      { category: "Habitabilité - Confort", level: 70 },
    ],
    txt: "C'est une apparition de Ben Kenobi au jeune Luke Skywalker qui incitera ce dernier à aller trouver le vieux Maitre pour suivre une formation de Jedi. Les plus célèbres endroits de cette planète restent la hutte de Yoda et la Grotte envahie par le côté obscur et où Luke échoua dans son entrainement en se laissant aller à la colère. Dagobah se situe dans le secteur de Sluis dans les territoires de la Bordure Extérieure. La planète la plus proche est Sluis Van. Sa population est principalement composée d’animaux tels que les dragons des marais, les limaces des marais, les champignons carnivores, les punaises-bouchers et les chauves-souris. Il y a aussi les araignées blanches à bosse. Cette espèce a une vie qui est vraiment très intéressante : pendant un moment elles sont des araignées blanches à bosse et un jour elles prennent racines et devint un arbre gnarl. Il n’y a pas de langue puisque les animaux ne parlent pas. Un jour dure vingt-trois heures standards et son année est de trois cent quarante et un jours locaux. C’est un monde oublié et qui ne figure pas sur les cartes. Les personnes qui s’y sont rendu disent que c’est un monde hanté. La planète est en très grande partie recouverte de marais et d’immenses jungles. Elle a un climat très chaud et très humide. Les pluies constantes maintiennent cet écosystème en place.",
  },

  {
    id: 4,
    planetName: "Miller",
    img: miller,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: millerPerso,
    photo01: millerPays01,
    photo02: millerPays02,
    price: 110000,
    stat: [
      { category: "Places restantes", level: 70 },
      { category: "Danger", level: 65 },
      { category: "Résistance à l'Homme", level: 80 },
      { category: "Habitabilité - Confort", level: 55 },
    ],
    txt: "Miller est un monde de l'eau et de la première planète du système en orbite autour de Gargantua. Miller tire son nom de Dr.Miller , qui a atterri sur la planète et activé les balises. Il est également le premier emplacement de l'équipage d'Endurance visite. 10 ans avant que l'équipage d'Endurance voyagé à travers le trou de ver, la NASA a envoyé trois gousses d'atterrissage à travers elle, portant chacun un scientifique pour évaluer un monde potentiellement habitable. Miller a été choisi pour atterrir sur ce monde. Cependant, au sein d'une heure par rapport après son arrivée, elle a rencontré l'un des raz de marée massifs encerclant la planète. Elle a été incapable de négocier la rencontre et son atterrissage pod a été détruit. Elle était soupçonnée d'avoir péri quelques minutes rapport avant l'arrivée de l'équipage de l'Endurance. Lorsque Cooper, Amélia, Doyle, et CASE terres ils découvrent les débris de Miller. Amélia va à la recherche de l'enregistreur de données, mais est épinglé. Comme la vague approchait, Doyle envoie CASE après Amelia. CASE porte son retour à la Ranger, mais Doyle est emporté par la vague. L'équipage restants parviennent à s'échapper, concluant que la planète de Miller est impropre à la vie. En raison des effets de dilatation de temps causées par le champ de gravité de Gargantua, ils finissent par dépenser 23 ans, 8 mois et 4 jours dans le temps de la Terre sur Miller.",
  },

  {
    id: 5,
    planetName: "Pandora",
    img: pandora,
    isHidden: false,
    darkFriday: false,
    soldOut: true,
    perso: avatars,
    photo01: pandoraPays01,
    photo02: pandoraPays02,
    price: 111111,
    stat: [
      { category: "Places restantes", level: 30 },
      { category: "Danger", level: 50 },
      { category: "Résistance à l'Homme", level: 40 },
      { category: "Habitabilité - Confort", level: 70 },
    ],
    txt: "Une étoile à gauche, et deux planètes telluriques puis trois géantes gazeuses, celle du milieu possède 9 satellites dont Pandora. Le système planétaire d'Alpha Centauri A dans l'univers d'Avatar. Pandora se situe dans la constellation du Centaure. Il s'agit d'une exolune tellurique qui abrite des formes de vie extraterrestres mais dont l'atmosphère est mortelle pour l'Homme. Pandora est l'un des quatorze satellites de l'exoplanète Polyphème, une géante gazeuse. Cette dernière orbite autour d'Alpha Centauri A, l'une des trois étoiles du système Alpha Centauri, elle se situe à 4,37 années-lumière de la Terre.Cette lune est semblable à la Terre vue de l'espace, mais elle est recouverte d'une jungle luxuriante et hostile pour les humains. Ces mêmes humains sont arrivés sur Pandora pour rechercher un minerai supraconducteur dont la planète regorge : l'unobtanium, qui permettrait de résoudre la crise énergétique qui se déroule sur Terre. Le coût de ce minerai (environ 20 000 000 $ le kilo) justifie une intense prospection et extraction de la part des humains. Ces derniers n'ont pas peur d'anéantir la faune et la flore locale si elles les empêchent d'extraire ce précieux minerai. C'est d'ailleurs le thème principal du premier film Avatar. Une des curiosités de la planète est la chaîne de montagne des Hallélujiah, une région où d'immenses blocs de roches lévitent dans le ciel grâce au pouvoir magnétique de l'unobtanium. Ces blocs ont été arrachés de la planète à la suite de tremblements de terre. La faune de Pandora est très féroce et peut être très dangereuse pour un être humain. Ils sont en moyenne plus grands que sur Terre, cela est dû à la gravité qui est plus faible. La plupart des animaux possède six membres au lieu de quatre et ont des os renforcés de fibre de carbonea. Ils peuvent être rencontrés dans tous les types de milieux : marin, terrestre et aérien. Le plus féroce et le plus redouté est le grand leonopterix, un prédateur volant dont l'envergure des ailes peut mesurer jusqu'à 30 m. Extrêmement agressif, il s'en est déjà pris à des appareils humains qui croisaient son chemina. En na'vi son nom est toruk, ce qui peut être traduit par « dernière ombre » en français, car il s'agit de la dernière chose qui est vue avant de mourira. Un navi qui parvient à se lier avec un grand leonopterix et à le dompter porte le titre de « Toruk Makto ». Au sol, c'est le thanator qui est le plus redouté, il se situerait au sommet de la chaîne alimentairea. Il ressemble à une panthère mais est bien plus imposant : 5,5 m de long et 2,5 m de hauta. Il possède au niveau de la tête une carapace qui peut le protéger des armes à feua. Parmi les herbivores, on trouve le titanothère : il ressemble à un éléphant mais est presque deux fois plus grand, il possède une tête massive qui a la forme de celle d'un requin marteaua. Il fait partie des rares herbivores capables de se défendre contre le grand leonopterix et le thanatora. Les métabêtes (surnommées « vaches à corne bleue ») sont des herbivores vivant en troupeau et souvent comparés aux bisonsa. Les na'vi les chassent pour leur viandea. Certaines espèces ont été domptées par les navi : les banshees, qui ressemblent à de grands reptiles volants, sont ainsi utilisés pour les déplacements aériens et les equidius, qui ressemblent à des chevaux, son utilisés pour les déplacements terrestres",
  },
  {
    id: 6,
    planetName: "Marina Strange",
    img: plan04,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: plan04Perso,
    photo01: plan04Pays01,
    photo02: plan04Pays02,
    price: 50000,
    stat: [
      { category: "Places restantes", level: 34 },
      { category: "Danger", level: 68 },
      { category: "Résistance à l'Homme", level: 74 },
      { category: "Habitabilité - Confort", level: 35 },
    ],
    txt: "À l'époque de l'Empire Infini des Rakata (civilisation ayant atteint son apogée 5000 ans avant la création de la République, soit 30 000 ans avant la Bataille de Yavin), ces derniers tentèrent de conquérir les Sith. Ils découvrirent ce peuple sur Korriban, et tentèrent d'abord de gagner la confiance du souverain Adas, en enseignant comment préserver son essence dans un holocron. Mais s'ensuivit un affrontement sanglant avec les Sith, et ces derniers triomphèrent Suite à la défaite des Rakata, les Sith s'entretuèrent pour le pouvoir, plongeant la planète dans un conflit séculaire qui eut pour conséquence fut le changement de capitale sur Ziost. Puis, Korriban ne fit plus parler d'elle pendant plusieurs millénaires.",
  },
  {
    id: 7,
    planetName: "Etoile Noire",
    img: etoilenoire,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: stormt,
    photo01: etoilenoirePays01,
    photo02: etoilenoirePays02,
    price: 70000,
    stat: [
      { category: "Places restantes", level: 100 },
      { category: "Danger", level: 75 },
      { category: "Résistance à l'Homme", level: 5 },
      { category: "Habitabilité - Confort", level: 85 },
    ],
    txt: "Une Étoile de la mort (Death Star) est une station de combat spatiale de l’univers de fiction Star Wars. Mobile et de forme sphérique, elle a une taille équivalente à celle d'une petite lune et a une puissance de feu suffisante pour anéantir une planète entière, grâce au superlaser dont elle est équipée. Deux modèles ont été conçus et construits par le maléfique Empire galactique. Le premier, l'Étoile de la mortNote 1, est utilisé pour raser la ville de Jedha City sur la planète Jedha, une base impériale sur Scarif puis faire exploser la planète Alderaan ; il est détruit lors de la bataille de Yavin. Les opposants à l'Empire, les rebelles, viennent à bout du second modèle avant qu'il ne soit achevé, autour de la lune d'Endor.",
  },

  {
    id: 8,
    planetName: "LV-426",
    img: lv426,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: alien01,
    photo01: lv426Paysage01,
    photo02: lv426Paysage02,
    price: 50000,
    stat: [
      { category: "Places restantes", level: 95 },
      { category: "Danger", level: 100 },
      { category: "Résistance à l'Homme", level: 100 },
      { category: "Habitabilité - Confort", level: 2 },
    ],
    txt: "Le contact étant perdu avec cette planète, nous ne pouvons nous prononcer sur son accueil. Concernant le confort, les habitants (hommes, femmes et enfants) semblaient heureux mais tombaient rapidement enceintes sous la contrainte des autochtones.",
  },

  {
    id: 9,
    planetName: "Fallen",
    img: plan01,
    isHidden: false,
    darkFriday: "Dark Friday",
    soldOut: false,
    perso: plan01Perso,
    photo01: plan01Pays01,
    photo02: plan01Pays02,
    price: 1500,
    stat: [
      { category: "Places restantes", level: 100 },
      { category: "Danger", level: 100 },
      { category: "Résistance à l'Homme", level: 2 },
      { category: "Habitabilité - Confort", level: 5 },
    ],
    txt: "La croûte poreuse du plus petit continent de Fallen est percée de nombreux gouffres circulaires, au fond desquels circule l’eau nécessaire à la vie, reliés entre eux par des cités souterraines. La planète abrite un vaste océan souterrain qui, mit en mouvement par l’attraction des neuf lunes, érode en permanence la croûte poreuse. Utapau abrite deux espèces intelligentes distinctes qui vivent ensemble dans de vastes cités souterraines ou dans les nombreux niveaux qu’ils ont aménagés sur la paroi des gouffres circulaires : les Utais et les Pau’ans. Leurs cités-gouffres tirent leurs ressources des eaux souterraines, du dressage des bêtes et leur énergie provient d’éoliennes qui exploitent la forte puissance du vent en surface. Hauts d’environs 1,20 mètre à l’état adulte et dotés d’yeux proéminents, les Utais sont des créatures de petite stature ignorantes et peu intéressée par ce qui pourrait se passer hors de leurs cavernes. Leur espèce s’est développée seule dans les gouffres et les cavernes d’Utapau avant les premiers contacts avec les Pau’ans qui leur furent très bénéfiques. Les Utais occupent principalement la classe travailleuse d’Utapau et sont des experts dans le dressage de créatures comme les varactyles et les dactillions.",
  },

  {
    id: 10,
    planetName: "Beauty sphere",
    img: plan02,
    isHidden: false,
    darkFriday: false,
    soldOut: true,
    perso: plan02Perso,
    photo01: plan02Pays01,
    photo02: plan02Pays02,
    price: 100000,
    stat: [
      { category: "Places restantes", level: 50 },
      { category: "Danger", level: 2 },
      { category: "Résistance à l'Homme", level: 95 },
      { category: "Habitabilité - Confort", level: 78 },
    ],
    txt: "Beauty sphere était une planète neutre de la bordure médiane qui avait de nombreux petits lacs et des forets abondantes. D'un diamètre de 12 100 kilomètres, la durée d'une année était de 215 jours. Au niveau de la population, elle comptait moins d'un million d'habitants. Elle disposait d'un soleil mais d'aucune lune. La planète était neutre et abritait un château qui faisait office d'auberge pour les voyageurs du monde entier.  Ce château que Maz dirigeait depuis plus de 1000 ans était gigantesque, avec plusieurs niveaux.",
  },

  {
    id: 11,
    planetName: "Echo-Two",
    img: plan03,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: plan03Perso,
    photo01: plan03Pays01,
    photo02: plan03Pays02,
    price: 200000,
    stat: [
      { category: "Places restantes", level: 64 },
      { category: "Danger", level: 38 },
      { category: "Résistance à l'Homme", level: 62 },
      { category: "Habitabilité - Confort", level: 74 },
    ],
    txt: "Les Obroans, espèce humanoïde native de la planète, ont tenu à ce que leur monde reste neutre, à travers les ages. Ainsi, à l’abri de conquête, les Obroans fondèrent une vaste Bibliothèque contenant des informations sur toute la galaxie, depuis des temps ancestraux, et ce, sous plus de 10 000 formats informatiques et langages différents. Dés le début de la Guerre Civile Galactique, le Systeme Obroa-skai, ainsi que son voisin, le Systeme Paonid préservèrent leur neutralité. Cependant, la région finit par devenir une place stratégique, entre la Nouvelle République et les Vestiges de l'Empire. Et le penchant des Obroans pour la Nouvelle République finit par se manifester ouvertement. Le Grand Amiral effectua cependant un raid sur Obroa-skai. Il espérait trouver dans ces banques de données les coordonnées de Myrkr…le monde des Ysalamaris, indispensable pour le reste de sa quête.",
  },

  {
    id: 12,
    planetName: "Lina-S",
    img: plan06,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: plan06Perso,
    photo01: plan06Pays01,
    photo02: plan06Pays02,
    price: 250000,
    stat: [
      { category: "Places restantes", level: 20 },
      { category: "Danger", level: 10 },
      { category: "Résistance à l'Homme", level: 75 },
      { category: "Habitabilité - Confort", level: 80 },
    ],
    txt: "Les natifs de Lina-S sont les Bimms, une espèce pensante régie par un conseil planètaire indépendant gouvernant au nom de lois ancestrales, qui siège dans un bâtiment relativement modeste, la Tour des Lois, dont l'interet touristique réside dans le fait qu'elle est décorée par des tapisseries narrant leurs histoires favorites, et dont le dernier étage est consacré à une sorte de musée comportant de nombreux objets datant de l'époque de l'Ancienne République. L'autre bâtiment principal de la capitale Bimm est le marché, édifice en forme de dôme composé de trois niveaux différents, dont les flancs ne possédent pas de murs, symbolique de l'esprit Bimm d'ouverture d'esprit; de même le toit est en fait une tenture pouvant se déplier en cas d'intempéries, afin de protéger l'intérieur du bâtiment où sont toujours présents un grand nombre de Bimms. Bimmisaari fut une des premières planète à rejoindre la Refugee Resettlement Coalition, quelques temps avant la guerre des clones, et peu après la défaite impériale d'Endor, elle fut courtisée par la Nouvelle République, qui n'obtint jamais son adhesion. En effet, le fait que la planète soit aussi éloignée du Noyau la relégua toujours à l'arrière plan, la plupart de diplomates la jugeant ininterressante, tant du point de vue politique que stratégique. Cependant, lors de la deuxième vague d'assaut Yuuzhan Vong Bimmisaari fut contrainte de capituler.",
  },
];

export default Planetes;
