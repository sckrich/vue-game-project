<script setup>
import Header from './Header.vue'
import Filters from './Filters.vue'
import Card from './Card.vue'
import Footer from './Footer.vue'
import { ref, computed, provide, onMounted, reactive, watch, createApp } from "vue"
import { useRoute, useRouter } from 'vue-router'
import DrawerCard from './DrawerCard.vue'

const router = useRouter()
const route = useRoute()
const upHere = false
  const cards = ref([{
  GameId: 1,
  GameName: "Red Dead Redemption 2",
  GameYear: 2019,
  Mark: 9,
  Price: '1999 p.',
  ImgUrl: "https://i.playground.ru/e/HBGmxIGjXn0DoBT1ujqOlA.jpeg",
  Description: "Red Dead Redemption 2 - Это продолжение приключенческого боевика 2008 года с видом от третьего лица в большом открытом мире. Игрокам предлагают покорить Дикий Запад, приготовив множество интересных занятий и сюжетных миссий. Сюжет игры происходит в Америке конца 19 века. После неудавшегося ограбления банда Датча ван дер Линде убегает от законников в горы, где планирует залечь на дно. Однако это не удаётся, из-за чего эта большая бандитская семья вынуждена путешествовать по просторам Америки в поисках денег и нового дома. Главный герой Артур Морган, человек бывалый и смелый, вырос в этой банде, и теперь ему предстоит встать как на защиту своих интересов, так и интересов своей «семьи»."
},
{
  GameId: 2,
  GameName: "Grand Thef Auto V",
  GameYear: 2015,
  Mark: 8,
  Price: '899 p.',
  ImgUrl: "https://yandex-images.clstorage.net/5y5S1Dx01/85ab85rgtH_/8GfeVgA-KLXNEoqds4-90PdTaBt2Idmwckkv5OrFCGBjsAwMtJdpOOa_qliXEb-HWvfkrz2dXkHzO83CuMXQ-iS2DUbQeH-h39SZDrJN_NcllDobZ-bNMreP73Kvkt3jIrDXFiiLoSI55uCFXM8sB43i8Gh6j87Ovf-fCjSXVbZ9aZWRjy8nukpFAdT9CPWaplal2ONhC_j5VOQwL0lVePfpVllqh2Cv_yZsTtsBb8oEq73kqojJSLbkGwe7mhx-NWJW2MgrJfJIhMBVO421l-QUZNPgZsc_-NekM-hNnXnzJ9QQZUioJ39upgocBWxJy6_waG8PTgd249SJeRAXtDJrUh4FoSJ_hYPBWb6K-BzhFuESLGHLO_0Wq_WnR9K_v-1dkWVIq2f6rGdGEI_phMLhuCrixg9MsSnSg3ndUDQ6KRgZxCAhuoUITZh1Q3IeoNKrFK8vD3g9XuI6Ikcd8Dvp0pesh-qh_6emQJ3JoYvGovxkaYrGBLJqFIn8Wdv0O-5XXkwsKjlHw4mUs8X_UmmRKlakJkp-OdOlNOHKnjm2b11bqEooJHNopEEYyWMChirz4q9GwsG-K1sFtVUc_vvk11HC7qG8CUHGHz3KeRrt0eBULa7MMPJcI7CpiJJ6cqaTGy6A7Gyz4KmFlMgsBQ6is2Xvhk_M_myTCvORn747IFAcASfnvwQABB20gvzarhor1O7lDrR512qxrwHSeXuomhEmxWkscCQuz19O5gtKaD8k6IvJiLun34h6E9g8NOGe08lhqn8DS42etMj1ni9WoFPrYIdxeFzmNCDKXf647hNf5Q7opTfmI4XdReuGyij8IOgLi8KwLRrP8BMUsvymVVGPYaf9y8RJ3vOD8p8gUCQXJCXPe_FcJDDqhx01-uoVnalA4qf0qulB2MerRkaveW9lgI2KsupYD3qZ1Ds6aF5TDClvt4MLyV68D3XUp9ggFKxhCjwyHWKyL4",
  Description: "Grand Thef Auto V - это многопользовательская компьютерная игра в жанре экшен, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Сюжет рассказывает истории трёх главных героев — Майкла, Франклина и Тревора. Майкл — бывший грабитель, который решил завязать с преступным прошлым и начать новую жизнь с семьёй. Франклин — молодой парень, который мечтает выбраться из бедности и жить на большой ноге. Тревор — безумный грабитель и бывший партнёр Майкла."
},
{
  GameId: 3,
  Mark: 10,
  Price: '1789 p.',
  GameName: "The Witcher 3: Wild hunt",
  GameYear: 2015,
  ImgUrl: "https://i.playground.ru/e/MhFKlm7tPHGHf1gfisIF2A.jpeg",
  Description: "The Witcher 3: Wild Hunt — ролевая игра в масштабном фэнтезийном мире, вышедшая 19 мая 2015 года. Является продолжением The Witcher и The Witcher 2: Assassins of Kings и завершила трилогию о Геральте из Ривии. Описание игры: Действие развивается в Королевствах Севера, во время третьего вторжения Нильфгаардской империи. Армия Нильфгаард стирает всё на своём пути, стремясь добраться до самого сердца северных королевств. Геральта из Ривии преследует Дикая Охота — мистическая кавалькада призрачных всадников, предвестников рока и гибели, способных уничтожить целое поселение всего за одну ночь. Герой должен найти и защитить от сил зла некую особу, о которой говорится в древнем пророчестве."
},
{
  Mark: 8,
  GameId: 4,
  Price: '1599p.',
  GameName: "Lies Of P",
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=14c028bf5fe96206768f3243ccb516ee8a4c88a4-10310451-images-thumbs&n=13",
  Description: "Lies of P — игра в жанре soulslike, адаптирующая сказку про Пиноккио. Главный герой — марионетка Пиноккио с внешностью подростка. Робот должен попасть в отель «Крат», единственное безопасное место в городе. Оттуда Пиноккио отправляется на поиски своего создателя Джепетто. Протагонисту предстоит выяснить причину восстания марионеток и попытаться спасти город. Действие игры происходит в вымышленном городе Крат, который заполонили высокотехнологичные творения мастера Джеппетто. После сбоя «роботы» накинулись на людей и истребили большую часть населения. Создатель пропал, поэтому Пиноккио предстоит пробраться через множество локаций, наполненных опасными существами, и разобраться в произошедших событиях. Игровой процесс состоит из исследования уровней и сражений с врагами. Главный герой противостоит марионеткам и заражённым каменной болезнью. За победу над врагами он набирает энергию Эрго. Эта субстанция нужна для улучшения снаряжения, покупки расходуемых предметов вроде бомб, а также повышения характеристик."
},
{
  Mark: 7,
  GameId: 5,
  Price: '1999 p.',
  GameName: "Star-Wars Jedi: Fallen Order",
  GameYear: 2022,
  ImgUrl: "https://yandex-images.clstorage.net/QEy55U147/82db2cy0Bl/OPCDCTxf6I5tnzTI3-1E45ZyUpUwbZbcY0XSguH1QXFOIMqDTPshcp7r5lyae-xe1qosYQLkwBU3XppA0slaN32hxFB2Aa-OaIt_wpP3SPODPk_WJS-P2GQc3obcmzUDb0bj4zCNUQXUue4OzDqkGMLAS3kzkY5yIWqtVNeVO1wG4Y8MP02psVitQ-vs93LOoTd9gAcYq6VQZYLMy6AGI0Vz_esamHEj57XQC_AMwz7Q72Q_Dpq9cCNqtXz7gCJBGuC8GQ9VtpNAhGPg8vlQw50SXpYHBZKUWlGu5_qrBCZlUNv1N4tyIfif7AXlG_8d5tZBISS1rlEDb6tu3LUoZxbGsQMES6isfqlC0u7LUtyIFn-9MSaqtUZxvu_goiMAREvn8zKAThz1muYg4gzNBvvnXTYrtbhtAUmKffK1CEMc84cPCl6IoE6VbP7S9ULsoh9IpCsMqalca5zQ7bM6G3hI7cUBk3Ue_qjGAfoH2QDBz1U3FZ-lbQ5wlmn7gwtWNN6YCyNGjLV8mFH91dVVxZoPSIQKKrOaS26G2dCxJzJ4XuThGIJPLNSV8SXPG88e1OlZLQm8lHUvbrlTyLwhUD3SlS4LZZWLR7xj2NfNTvSdOViSMwmKkntnutfkhzckaHPW2iyAXAfEjeE7_gXSJN7WQAwksLlMOlidfdeCHW0C3KcZPViWt0CvVeTkwkXJnx5WmQEosIxCZqHAybYGBXlv2t0DpF4Z7Lv6H8Ekzg3c_UYbHqaARiBstmzYqTVgHPSWBCNhnqZblVTD1O5yw6U6XbElLoWbfG2azNqpMyFHWOPoFaR7JMyf-CX9Cdoswv5TCTSStEg4Valm85YFbyfogBs3Y5WAZYJg-9rESOCEGFKqBTGIiWJMqd_Ujxk3RXHcwRCeaDLlqegdzi3fC9b3WQgAnJRsFHSZbc6dJHUJyKQlBkOhpE6YbP3JzUHytCttljwqkq1GZ4P-2qw",
  Description: "Star Wars Jedi: Fallen Order — однопользовательская видеоигра по каноничной вселенной «Звёздных войн» разработки студии Respawn Entertainment. Вышла 15 ноября 2019 года под эгидой Electronic Arts. Сюжет разворачивается через пять лет после «Приказа 66» из третьей части саги. Немногочисленные оставшиеся джедаи прячутся от имперских инквизиторов — чувствительных к силе бойцов, разыскивающих всех, кто хоть как-то был связан с орденом Джедаев. Среди них и главный герой Кэл Кэстис — падаван, не успевший окончить своё обучение у мастера, когда началось массовое уничтожение джедаев. В роли молодого падавана игроку предстоит сорвать планы Империи и попытаться восстановить орден Джедаев. Помогут ему бывший рыцарь-джедай, саркастичный пилот звездолёта и бесстрашный дроид-компаньон."
},
{
  Mark: 8,
  GameId: 6,
  Price: '1699 p.',
  GameName: "Atomic Heart",
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=76c7f9e0390624115392ca68ec00a644_l-4827005-images-thumbs&n=13",
  Description: "Atomic Heart (с англ. — Атомное сердце) — компьютерная игра в жанре шутера от первого лица с элементами ролевой игры, разработанная студией Mundfish. История альтернативной реальности 1950х годов, берёт своё начало с развития робототехники и высоких технологий в годы Второй Мировой Войны. Мир игры не так далёк от тех идеалов, за которые борется человечество наших дней. Счастливое общество, верховенство науки, идеальные города, с залитыми солнцем зелёными парками и скверами, автоматизация быта, и стремление к звёздам. Всё это мы можем получить уже в ближайшем будущем. Но давайте посмотрим на изнанку идеального мира? Могло ли подобное уже произойти? И к чему это может привести?"
},
{
  GameId: 7,
  Price: '2999 p.',
  GameName: "Spider Man",
  GameYear: 2023,
  Mark: 8,
  ImgUrl: "https://yandex-images.clstorage.net/5y5S1Dx01/85ab856VBS-/dPRNwUSoK7HJhYgOc0-4RWKQqt9kpZ3xsht88CrBDTcy5lgKNJY9uOe8Pp9Ux-uIDCLk-70dX5dnewyWbIRE76Z2yEeRvilwyIDfHjSM_VkrGKEW6ihC-HqUJLerx591MPecXK8MOav7JqyImonhDE1oM6IniM-MeyKfSjQTl_b2pFyXDiehf8gFwZb8j7HYZFqt12fugnSxE-r0Zk7WOLwnm1spByIv9qmhwVLB6s8ELzegb4oOTfrkGgo5UdU3_adbW8kmIj_LwsVe_Yt_Wi1VYh_vbsq-9dTu9-WB0nUw4hzcZscl4HhrK8qYxuPLwuK9p-JHCUz2YR1HslTXsjxrXFfNI-MwDY3PETvHtdOsVWIcr-sIf7nYZHIoiJw9cm_VnS0A7-Zya-aNGM6hgcUjPKQnR4LAN6rUzbAVE_g66BKTjuOrecIIz950Q7FcqpytXWnuA76_VSI6J4zfeTzkmVRlA6wgeO5iBtjPZs6CqzCvpIVJBDtsUkD83FB5eOMb1ojnJj7My0Jdvc4302aYYJ_sYsy8vtAi-K7MV3a6IlVQoA_tb_SnbsHSD2xOjSXyJCHLy0uw4l3GtFgQs3pqk1DGLKm4SIMAUf4K_h0mHqpbpKJEsXpcI7epRN82PWKV3a1Pqqf74apCks-oycDmO2IixoqJsmsVQ3Qb23j6qdiSQqci8UmFiRH9A_AULBbv3uRhgDYwl6V9pwAVunxlmFvpCmHreWgoBRDAaQcPLn0v4sHBADFrX0owmpfzfaxdG4emqX3MCkKeesC2nWLVJF9tJkI7ehWucCqAVXl4ZRgZowHrLj7iKMmeCC7MjWh9ImAJTsRxLBRNMZWRdzljGFONL6m_yMAP3rGCspugmWpVb-UO8b4QLDDqDNL8N-iTH-sDLGz-aKIJF87gx4_rNeoqQYFE8WOYynoSGXM661yWyuzo-UoFD1g1DTQV4l3g1a5mSjA2UiExJ4",
  Description: "Marvel's Spider-Man — аркадный экшен с видом от третьего лица в серии игр о Человеке-пауке. Сюжет охватывает жизнь Питера Паркера, Человека-Паука, а также его девушки Мэри Джейн. Мэр Нью-Йорка Норман Озборн приказывает Серебряному Соболю и другим наёмникам убить Человека-паука, которого обвиняют в массовом беспорядке. Герой должен победить злодеев и вернуть себе честное имя. Игровой мир основан на Манхэттене, наполненном высотками и достопримечательностями. Мир разделён на 9 районов, и в каждом есть вышки, открывающие доступ к новым заданиям, событиям и местам. Геймплей связан с боевой системой. Человек-Паук использует множество умений, чтобы остановить бандитов. Он прыгает между врагами, стреляет паутиной, использует гаджеты и элементы окружения, чтоб оглушить и связать всех противников."
},
{
  GameId: 8,
  Price: '1499 p.',
  GameName: "Prey",
  GameYear: 2017,
  Mark: 7,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=793acdedaf07f258814dedd91b3d1473_l-4162430-images-thumbs&n=13",
  Description: "Prey - Мы на космической станции «Талос-1», пережившей некую катастрофу. Б о льшая часть персонала погибла, станция частично разрушена, повсюду бродят монстры из ночных кошмаров. А главный герой (или героиня), ученый по имени Морган, еще и ничего не помнит. Что он(а) станет делать? Приспосабливаться и импровизировать. Потому что, как вы могли догадаться, Prey совсем не шутер, а куда более сложная игра. Учился у лучших Те, кто играл в System Shock или Deus Ex, почувствуют себя здесь как дома. Разработчики из Arkane вообще не стеснялись заимствовать элементы других проектов: стиль достался Prey от BioShock, задачки и атмосфера отсылают к Half-Life 2, а иногда и к Portal, а во время эпизодов с некоторыми врагами вспоминается Alien: Isolation. Подача истории и некоторые механики позаимствованы у Dishonored, другой игры Arkane. Но всем этим Prey распоряжается так грамотно, что упрекнуть разработчиков в бездушном плагиате не выходит."
},
{
  GameId: 9,
  GameName: "FarCry 6",
  Mark: 9,
  Price: '2159 p.',
  GameYear: 2023,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=5c1a5eb3353aa96a59dfb151fc53a7bb_l-5231779-images-thumbs&n=13",
  Description: "Far Cry 6 — экшн-шутер от первого лица в огромном открытом мире с элементами RPG и крафта. Сюжет рассказывает о современной партизанской революции в вымышленной стране Яра со столицей Эсперанса. Ею правит жестокий диктатор Антон Кастильо. Главный герой — Дани Рохас, который может быть как мужчиной, так и женщиной. Он пытается сбежать из страны, но лодку с беглецами ловят. Местные повстанцы готовы помочь с отбытием, но взамен просят помощи с революцией, и Дани примыкает к ним. Геймплей состоит из захвата территорий диктатора. Они повышают влияние, навыки и уровень персонажа. У врагов тоже есть уровни. Они выдерживают больший урон и более живучие. Также в игре есть система торговли, охоты и сбора ресурсов, крафта необходимых предметов. Локации включают в себя все виды биомов: городская местность, побережье, джунгли и горы. Игрок посетит фермы, деревеньки, небольшие посёлки. Помимо машин, можно управлять лошадью и даже танком."
},
{
  GameId: 10,
  Mark: 9,
  Price: '2599 p.',
  GameName: "Black Myth: Wu Kong",
  GameYear: 2024,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=bf622bbee4340be382d0ac0536c82186263dc592-4120299-images-thumbs&n=13",
  Description: "Black Myth: Wukong — ролевой боевик по мотивам китайской мифологии. Сюжет основан на классическом китайском романе «Путешествие на Запад». Царь обезьян по имени Сунь Укун сражается с божеством Эрланом. Герой проигрывает битву и превращается в камень, но перед этим успевает разделить свою силу на шесть реликвий, которые отправляет в разные места по всему Китаю. Главный герой, которого все называют Избранным, — тоже обезьяна. Он должен найти шесть реликвий и освободить Сунь Укуна из камня. В игре есть две концовки — исход зависит от принятых по ходу сюжета решений. Геймплей — хардкорный экшен от третьего лица. Здесь игрок сражается с сильными боссами, возрождается в определённых точках сохранения и прокачивает героя. Избранный владеет заклинаниями, которые позволяют замораживать врагов или превращаться в камень, чтобы избежать удара. Важная особенность — возможность ненадолго принимать облик врагов и перенимать их боевые стили. "
},
{
  GameId: 11,
  Price: '2399 p.',
  Mark: 8,
  GameName: "Minecraft",
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=0695621d5571d4953cb292e80f5bf19a_l-4445663-images-thumbs&n=13",
  Description: "Minecraft — видеоигра в жанре «песочница», которая даёт игроку свободу исследовать динамически генерируемую карту, взаимодействовать с ней и изменять её. Особенности игры: Трёхмерный мир, полностью состоящий из кубов. Его можно свободно перестраивать, создавая из этих кубов сложные сооружения. Отсутствие конкретных целей или сюжета. Всё строится на том, чтобы игрок импровизировал во время игры. Возможность добывать и размещать блоки, различающиеся между собой текстурой, физикой и другими признаками, и создавать предметы из ингредиентов. "
},
{
  GameId: 12,
  GameName: "Forspoken",
  Price: '1399 p.',
  Mark: 3,
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=8f4954daf053f96299dd679f55eaaef9_l-5336359-images-thumbs&n=13",
  Description: "Forspoken — это ролевой экшен, рассказывающий историю Фрей — нью-йоркской девушки, которая оказывается в прекрасной и жестокой Атии. В поисках дороги домой Фрей должна использовать свои новообретённые магические способности, чтобы путешествовать по бескрайним просторам, сражаться с чудовищами и победить могущественных матриархов, прозванных Тантами. Особенности игры: Огромный открытый мир. В нём встречаются пустыни, леса, полузаброшенные деревни, населённые города, скалы и равнины. Mагия для перемещения, защиты и сражения. Героиня может создавать каменный щит из воздуха, который защищает от большинства вражеских атак, и затем наносить урон противникам, запуская остатки щита на них."
},
{
  GameId: 13,
  GameName: "Terraria",
  GameYear: 2021,
  Price: '199 p.',
  Mark: 8,
  ImgUrl: "https://yandex-images.clstorage.net/5y5S1Dx01/85ab85rgtH_/8GfeVgA-KLXNEoqds4-90PdTaBt2Idmwckk7Z6tRC6A38YxP9Ra8rSR-680WUX8HW-Kk-3xenYAmutbAKwREL-R0ykTXr-i0iABIDrUMudWkVDjeJqeYsaQKO_4kTFY8-S_UU6kJoiuyaevN0JcuwoGsIShgB43FfiLSSLta0zY-oVofjeCtvcWDipF2iD4Tbhrj1WQnQzk_32J_aw5a_XTpFN9ijmxof-CigFxHKcUHpzqsbYiAjLZq2YvyHdc0dqOb3gwmKP3IwchQfYs536kbYJVn4EfxPtus_SIBlTX8aVwVJkloa_wvps3Qgq5CSGc9Y-NKCod8bdCPNNBdM_tunN8Aoy-wQ8TK1bxHPtOtHqGaoa9NvviXZnSjAZU2vOye1GpF4u4xJuiFkg9nAwOg92XpSsfA_GWSxTMR3DA-bhdTwWjmOkGFDp-6xHAX7t7p024qTXG3E2L7pchad3rplRVsyKSmPiKrwdyEK8pLo7Sj489DSzxkVYp0mdA7vazcl82uYLcNTE0e-M95UujaZJRg6cDyfp7kdGnMl7X_ZVoXbU2kZLdiI85aQufOjq_17G-GT4w2pF8KexcSsDjiXthGIG8xRcgN1PpG8dSmEesS5KGC_j1aLbopSl1xt6XSGqnBpSuw6quO3QInQ4PvsiRgwIsPdmSbjTbU2_Y77x8aRKkntIWLxh96hboWIppgW-WnC74-UyOzI0IY9PdmFp3jCiPhvq5hApwFKsXHqnlo4kkJSPRrWkP5HJ27--hUk8epbb3BCoqU_YA_n-eb69dgKMAxuZBlOm2B03V-IdSQqYgo7DMuIcGYBaqHjaHzraXDCYR6ox2Ie1qdtnkg21eH7ia6wAWMELlPetftEusVZOKNcXLSYTyvzZ1_fOKYWm2NqqzzoqZE14ghgcWjNO9lSYNE82XTg3nZ1X4zaBTXB6GqPYuCBBS6xz4SqtGqU-Ynjff2Xeey7Q",
  Description: "Terraria — приключенческая песочница с элементами платформера и видом сбоку. Игроку предстоит отправиться в красочный мир, где он сможет создавать различные предметы, строить здания и сражаться с разнообразными монстрами, которые генерируются случайным образом. Игровой процесс начинается с создания персонажа. В Terraria есть продвинутый редактор героя, позволяющий выбрать пол, внешность, цвет кожи и одежду. Дальнейшее развитие персонажа происходит уже в игровом мире, со временем он прокачивается в один из четырёх возможных классов. Смена дня и ночи влияет на мир и геймплей. Днём игрок исследует, добывает ресурсы и находится в безопасности. Ночью ему нужно выживать, прячась от разных выползших врагов или убивая их."
},
{
  GameId: 14,
  GameName: "DOOM: Eternal",
  GameYear: 2021,
  Price: '1899 p.',
  Mark: 6,
  ImgUrl: "https://yandex-images.clstorage.net/5y5S1Dx01/85ab85rgtH_/8GfeVgA-KLXNEoqds4-90PdTaBt2Idmwckk7pL4QymA2sVhYoJYo7LM_ag3CkH_SGmMwOnzfHwDybxbAKwXF7-T3CgZXr-i0iABIDrUMudWkVDjeJqeYsaQKO_4kTFY8-S_UU6kJoiuyaevN0JcuwoGsIShgB43FfiLSSLta0zY-oVofjeCtvcWDipF2iD4Tbhrj1WQnQzk_32J_aw5a_XTpFN9ijmxof-CigFxHKcUHpzqsbYiAjLZq2YvyHdc0dqOb3gwmKP3IwchQfYs536kbYJVn4EfxPtus_SIBlTX8aVwVJkloa_wvps3Qgq5CSGc9Y-NKCod8bdCPNNBdM_tunN8Aoy-wQ8TK1bxHPtOtHqGaoa9NvviXZnSjAZU2vOye1GpF4u4xJuiFkg9nAwOg92XpSsfA_GWSxTMR3DA-bhdTwWjmOkGFDp-6xHAX7t7p024qTXG3E2L7pchad3rplRVsyKSmPiKrwdyEK8pLo7Sj489DSzxkVYp0mdA7vazcl82uYLcNTE0e-M95UujaZJRg6cDyfp7kdGnMl7X_ZVoXbU2kZLdiI85aQufOjq_17G-GT4w2pF8KexcSsDjiXthGIG8xRcgN1PpG8dSmEesS5KGC_j1aLbopSl1xt6XSGqnBpSuw6quO3QInQ4PvsiRgwIsPdmSbjTbU2_Y77x8aRKkntIWLxh96hboWIppgW-WnC74-UyOzI0IY9PdmFp3jCiPhvq5hApwFKsXHqnlo4kkJSPRrWkP5HJ27--hUk8epbb3BCoqU_YA_n-eb69dgKMAxuZBlOm2B03V-IdSQqYgo7DMuIcGYBaqHjaHzraXDCYR6ox2Ie1qdtnkg21eH7ia6wAWMELlPetftEusVZOKNcXLSYTyvzZ1_fOKYWm2NqqzzoqZE14ghgcWjNO9lSYNE82XTg3nZ1X4zaBTXB6GqPYuCBBS6xz4SqtGqU-Ynjff2Xeey7Q",
  Description: "Doom: Eternal– прямое продолжение игры 2016 года. События сюжета разворачиваются через несколько лет после событий на Марсе. Здесь Палачу Рока под вашим управлением придется вступить в схватку с гадкими демонами, которые решили захватить Землю. Миссии кампании разворачиваются в основном на нашей родной планете, но будет и очередной заезд на Марс вместе с несколькими его спутниками. По сути, разработчики решили пересказать сюжет оригинального."
},
{
  GameId: 15,
  GameName: "Fallout: 4",
  GameYear: 2021,
  Price: '2399 p.',
  Mark: 8,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=278f93a225dd6e60682db4c81518770b_l-4259187-images-thumbs&n=13",
  Description: "Fallout 4 — компьютерная ролевая игра, разработанная компанией Bethesda Game Studios, продолжение серии игр Fallout. Сюжет начинается в 2077 году, где мир уже стоит на пороге большой войны. Главный герой просыпается утром и обнаруживает, что он — единственный выживший в Убежище 111. Повторное пробуждение происходит через 60 лет после похищения ребёнка и 210 лет после катастрофы. Игрок выбирается на поверхность, где от прежнего мира практически ничего не осталось, а райский уголок, который был его домом, превратился в новый, враждебный мир, называемый Содружеством. Основная часть игры происходит в 2287 году, спустя 210 лет после ядерной войны, уничтожившей большую часть населения Земли. Место действия — Бостон и его окрестности (Содружество Массачусетс). "
},
{
  GameId: 16,
  GameName: "The Elder Scrolls V: Scyrim",
  GameYear: 2011,
  Price: '499 p.',
  Mark: 9,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=6ae26019929cff502a4812074f84f93e597df6b9-10142109-images-thumbs&n=13",
  Description: "The Elder Scrolls V: Skyrim — компьютерная игра в жанре action/RPG с открытым миром, разработанная студией Bethesda Game Studios и выпущенная компанией Bethesda Softworks. Действие игры происходит в провинции Скайрим на материке Тамриэль, что на планете Нирн спустя двести лет после событий предыдущей игры серии — The Elder Scrolls IV: Oblivion. Главный герой — Довакин, обладающий уникальной способностью понимать и использовать язык драконов. Его миссия — спасти мир от уничтожения, которое грозит принести Алдуин Пожиратель Миров, могущественный дракон. Игра предлагает свободу выбора. Можно исследовать обширные территории и углубляться в богатую историю Тамриэля, а также присоединяться к различным фракциям и выполнять уникальные задания. "
},
{
  GameId: 17,
  GameName: "Red Dead Redemption",
  GameYear: 2008,
  Mark: 8,
  Price: '999 p.',
  ImgUrl: "https://avatars.mds.yandex.net/i?id=83fc55de6a2460a374325dae13104172_l-10870819-images-thumbs&n=13",
  Description: "Red Dead Redemption 2 - Это продолжение приключенческого боевика 2008 года с видом от третьего лица в большом открытом мире. Игрокам предлагают покорить Дикий Запад, приготовив множество интересных занятий и сюжетных миссий. Сюжет игры происходит в Америке конца 19 века. После неудавшегося ограбления банда Датча ван дер Линде убегает от законников в горы, где планирует залечь на дно. Однако это не удаётся, из-за чего эта большая бандитская семья вынуждена путешествовать по просторам Америки в поисках денег и нового дома. Главный герой Артур Морган, человек бывалый и смелый, вырос в этой банде, и теперь ему предстоит встать как на защиту своих интересов, так и интересов своей «семьи»."
},
{
  GameId: 18,
  GameName: "Grand Thef Auto IV",
  GameYear: 2007,
  Mark: 8,
  Price: '599 p.',
  ImgUrl: "https://avatars.mds.yandex.net/i?id=2f6336ca4223ebf4216df39531046a8e_l-4507542-images-thumbs&n=13",
  Description: "Grand Theft Auto 4 — продолжение культовой серии игр о великом автоугонщике с видом от третьего лица в открытом мире. Главный герой — серб Нико Беллик, который в поисках лучшего будущего приплывает в Либерти-Сити. Его брат Роман обрисовал прелести американской мечты, страны возможностей и роскошной жизни. Но в итоге они влезают в долги и втягиваются в преступный мир, полный мошенников, воров и социопатов. Реальность сильно отличается от мечты в городе, который является раем лишь для тех, у кого есть деньги и статус, для остальных же он является кошмаром."},
{
  GameId: 19,
  Mark: 7,
  Price: '789 p.',
  GameName: "The Witcher 2: Assasin of Kings",
  GameYear: 2015,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=b55e8550b5082b46c5c5df6937ad7835_l-5383290-images-thumbs&n=13",
  Description: "The Witcher 2: Assasins of Kings — ролевая игра в масштабном фэнтезийном мире, вышедшая 19 мая 2015 года. Является продолжением The Witcher и The Witcher 2: Assassins of Kings и завершила трилогию о Геральте из Ривии. Описание игры: Действие развивается в Королевствах Севера, во время третьего вторжения Нильфгаардской империи. Армия Нильфгаард стирает всё на своём пути, стремясь добраться до самого сердца северных королевств. Геральта из Ривии преследует Дикая Охота — мистическая кавалькада призрачных всадников, предвестников рока и гибели, способных уничтожить целое поселение всего за одну ночь. Герой должен найти и защитить от сил зла некую особу, о которой говорится в древнем пророчестве."
},
{
  Mark: 9,
  GameId: 20,
  Price: '1899p.',
  GameName: "Dark Souls III",
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=78ff94b85afd901b09a7677e082d05b5_l-4965078-images-thumbs&n=13",
  Description: "Dark Souls III — игра в жанре soulslike, адаптирующая сказку про Пиноккио. Главный герой — марионетка Пиноккио с внешностью подростка. Робот должен попасть в отель «Крат», единственное безопасное место в городе. Оттуда Пиноккио отправляется на поиски своего создателя Джепетто. Протагонисту предстоит выяснить причину восстания марионеток и попытаться спасти город. Действие игры происходит в вымышленном городе Крат, который заполонили высокотехнологичные творения мастера Джеппетто. После сбоя «роботы» накинулись на людей и истребили большую часть населения. Создатель пропал, поэтому Пиноккио предстоит пробраться через множество локаций, наполненных опасными существами, и разобраться в произошедших событиях. Игровой процесс состоит из исследования уровней и сражений с врагами. Главный герой противостоит марионеткам и заражённым каменной болезнью. За победу над врагами он набирает энергию Эрго. Эта субстанция нужна для улучшения снаряжения, покупки расходуемых предметов вроде бомб, а также повышения характеристик."
},
{
  Mark: 7,
  GameId: 21,
  Price: '1999 p.',
  GameName: "Star-Wars Jedi: Survior",
  GameYear: 2024,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=c92545ad322b475d341b22b4eac84638431d1c43-5088988-images-thumbs&n=13",
  Description: "Star Wars Jedi: Fallen Order — однопользовательская видеоигра по каноничной вселенной «Звёздных войн» разработки студии Respawn Entertainment. Вышла 15 ноября 2019 года под эгидой Electronic Arts. Сюжет разворачивается через пять лет после «Приказа 66» из третьей части саги. Немногочисленные оставшиеся джедаи прячутся от имперских инквизиторов — чувствительных к силе бойцов, разыскивающих всех, кто хоть как-то был связан с орденом Джедаев. Среди них и главный герой Кэл Кэстис — падаван, не успевший окончить своё обучение у мастера, когда началось массовое уничтожение джедаев. В роли молодого падавана игроку предстоит сорвать планы Империи и попытаться восстановить орден Джедаев. Помогут ему бывший рыцарь-джедай, саркастичный пилот звездолёта и бесстрашный дроид-компаньон."
},
{
  Mark: 2,
  GameId: 22,
  Price: '1699 p.',
  GameName: "Смута",
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=3cb33d53bd176dd738721be4d9a2bffd_l-8456088-images-thumbs&n=13",
  Description: "Atomic Heart (с англ. — Атомное сердце) — компьютерная игра в жанре шутера от первого лица с элементами ролевой игры, разработанная студией Mundfish. История альтернативной реальности 1950х годов, берёт своё начало с развития робототехники и высоких технологий в годы Второй Мировой Войны. Мир игры не так далёк от тех идеалов, за которые борется человечество наших дней. Счастливое общество, верховенство науки, идеальные города, с залитыми солнцем зелёными парками и скверами, автоматизация быта, и стремление к звёздам. Всё это мы можем получить уже в ближайшем будущем. Но давайте посмотрим на изнанку идеального мира? Могло ли подобное уже произойти? И к чему это может привести?"
},
{
  GameId: 23,
  Price: '2999 p.',
  GameName: "Spider Man 2",
  GameYear: 2023,
  Mark: 8,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=9de4610c6134664029a40d0e5901cc41984133d5-8484564-images-thumbs&n=13",
  Description: "Marvel's Spider-Man — аркадный экшен с видом от третьего лица в серии игр о Человеке-пауке. Сюжет охватывает жизнь Питера Паркера, Человека-Паука, а также его девушки Мэри Джейн. Мэр Нью-Йорка Норман Озборн приказывает Серебряному Соболю и другим наёмникам убить Человека-паука, которого обвиняют в массовом беспорядке. Герой должен победить злодеев и вернуть себе честное имя. Игровой мир основан на Манхэттене, наполненном высотками и достопримечательностями. Мир разделён на 9 районов, и в каждом есть вышки, открывающие доступ к новым заданиям, событиям и местам. Геймплей связан с боевой системой. Человек-Паук использует множество умений, чтобы остановить бандитов. Он прыгает между врагами, стреляет паутиной, использует гаджеты и элементы окружения, чтоб оглушить и связать всех противников."
},
{
  GameId: 24,
  Price: '1499 p.',
  GameName: "Kingdome Come Deliverence 2",
  GameYear: 2017,
  Mark: 7,
  ImgUrl: "https://img.championat.com/s/1350x900/news/big/u/g/izdatel-kingdom-come-deliverance-2-ubral-iz-igry-perevod-na-russkij-yazyk_17137820521271290678.jpg",
  Description: "Prey - Мы на космической станции «Талос-1», пережившей некую катастрофу. Б о льшая часть персонала погибла, станция частично разрушена, повсюду бродят монстры из ночных кошмаров. А главный герой (или героиня), ученый по имени Морган, еще и ничего не помнит. Что он(а) станет делать? Приспосабливаться и импровизировать. Потому что, как вы могли догадаться, Prey совсем не шутер, а куда более сложная игра. Учился у лучших Те, кто играл в System Shock или Deus Ex, почувствуют себя здесь как дома. Разработчики из Arkane вообще не стеснялись заимствовать элементы других проектов: стиль достался Prey от BioShock, задачки и атмосфера отсылают к Half-Life 2, а иногда и к Portal, а во время эпизодов с некоторыми врагами вспоминается Alien: Isolation. Подача истории и некоторые механики позаимствованы у Dishonored, другой игры Arkane. Но всем этим Prey распоряжается так грамотно, что упрекнуть разработчиков в бездушном плагиате не выходит."
},
{
  GameId: 25,
  GameName: "Assasin's creed: Mirage",
  Mark: 9,
  Price: '2159 p.',
  GameYear: 2023,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=c65fe51571b5e2275b21e3dfd93d83f99cb8adb1-5257239-images-thumbs&n=13",
  Description: "Far Cry 6 — экшн-шутер от первого лица в огромном открытом мире с элементами RPG и крафта. Сюжет рассказывает о современной партизанской революции в вымышленной стране Яра со столицей Эсперанса. Ею правит жестокий диктатор Антон Кастильо. Главный герой — Дани Рохас, который может быть как мужчиной, так и женщиной. Он пытается сбежать из страны, но лодку с беглецами ловят. Местные повстанцы готовы помочь с отбытием, но взамен просят помощи с революцией, и Дани примыкает к ним. Геймплей состоит из захвата территорий диктатора. Они повышают влияние, навыки и уровень персонажа. У врагов тоже есть уровни. Они выдерживают больший урон и более живучие. Также в игре есть система торговли, охоты и сбора ресурсов, крафта необходимых предметов. Локации включают в себя все виды биомов: городская местность, побережье, джунгли и горы. Игрок посетит фермы, деревеньки, небольшие посёлки. Помимо машин, можно управлять лошадью и даже танком."
},
{
  GameId: 26,
  Mark: 9,
  Price: '2599 p.',
  GameName: "Cyberpunk 2077",
  GameYear: 2024,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=2dcb4883e9a64012baaa5e5f9330947fda94a8de-3343247-images-thumbs&n=13",
  Description: "Black Myth: Wukong — ролевой боевик по мотивам китайской мифологии. Сюжет основан на классическом китайском романе «Путешествие на Запад». Царь обезьян по имени Сунь Укун сражается с божеством Эрланом. Герой проигрывает битву и превращается в камень, но перед этим успевает разделить свою силу на шесть реликвий, которые отправляет в разные места по всему Китаю. Главный герой, которого все называют Избранным, — тоже обезьяна. Он должен найти шесть реликвий и освободить Сунь Укуна из камня. В игре есть две концовки — исход зависит от принятых по ходу сюжета решений. Геймплей — хардкорный экшен от третьего лица. Здесь игрок сражается с сильными боссами, возрождается в определённых точках сохранения и прокачивает героя. Избранный владеет заклинаниями, которые позволяют замораживать врагов или превращаться в камень, чтобы избежать удара. Важная особенность — возможность ненадолго принимать облик врагов и перенимать их боевые стили. "
},
{
  GameId: 27,
  Price: '2399 p.',
  Mark: 8,
  GameName: "Baldur's Gate III",
  GameYear: 2021,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=601ff5509301ce424c9e78f39f7bc420fb4b3f63-4809466-images-thumbs&n=13",
  Description: "Baldur's Gate III — видеоигра в жанре «песочница», которая даёт игроку свободу исследовать динамически генерируемую карту, взаимодействовать с ней и изменять её. Особенности игры: Трёхмерный мир, полностью состоящий из кубов. Его можно свободно перестраивать, создавая из этих кубов сложные сооружения. Отсутствие конкретных целей или сюжета. Всё строится на том, чтобы игрок импровизировал во время игры. Возможность добывать и размещать блоки, различающиеся между собой текстурой, физикой и другими признаками, и создавать предметы из ингредиентов. "
},
{
  GameId: 28,
  GameName: "Grand Theft Auto: San Andreaas",
  Price: '149 p.',
  Mark: 10,
  GameYear: 2004,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=899b50ab8547a21a0118d9f94c6147a0a3fb3708-7284491-images-thumbs&n=13",
  Description: "Forspoken — это ролевой экшен, рассказывающий историю Фрей — нью-йоркской девушки, которая оказывается в прекрасной и жестокой Атии. В поисках дороги домой Фрей должна использовать свои новообретённые магические способности, чтобы путешествовать по бескрайним просторам, сражаться с чудовищами и победить могущественных матриархов, прозванных Тантами. Особенности игры: Огромный открытый мир. В нём встречаются пустыни, леса, полузаброшенные деревни, населённые города, скалы и равнины. Mагия для перемещения, защиты и сражения. Героиня может создавать каменный щит из воздуха, который защищает от большинства вражеских атак, и затем наносить урон противникам, запуская остатки щита на них."
},
{
  GameId: 29,
  GameName: "NFS: Unbound",
  GameYear: 2021,
  Price: '2199 p.',
  Mark: 8,
  ImgUrl: "https://digiseller.mycdn.ink/preview/1122744/p1_3552521_f9dceb8b.png",
  Description: "NFS: Unbound — Гоночная песочница с элементами платформера. Игроку предстоит отправиться в красочный мир, где он сможет создавать различные предметы, строить здания и сражаться с разнообразными монстрами, которые генерируются случайным образом. Игровой процесс начинается с создания персонажа. В Terraria есть продвинутый редактор героя, позволяющий выбрать пол, внешность, цвет кожи и одежду. Дальнейшее развитие персонажа происходит уже в игровом мире, со временем он прокачивается в один из четырёх возможных классов. Смена дня и ночи влияет на мир и геймплей. Днём игрок исследует, добывает ресурсы и находится в безопасности. Ночью ему нужно выживать, прячась от разных выползших врагов или убивая их."
},
{
  GameId: 30,
  GameName: "Mafia: Definitive Edition",
  GameYear: 2021,
  Price: '1899 p.',
  Mark: 9,
  ImgUrl: "https://yandex-images.clstorage.net/QEy55U147/82db2cy0Bl/OPCDCTxf6I5tnzTI3-1E45ZyUpUwbZbcY0XS0OD9EiYdLsiAQfItcpS-5lyZJL1ZhvpwOgfjxRpjWMwq3IENN3nywUV_Hv_TOdgoiJPqTeeJOU_dMCqKjmhSydTutE8sECif7iaLWQnyl9Ij7gvEE9bxcDwe-oVWCWPfSvudPnMYw7wBP3ieq3mUfsDf7HLXrwVmojAQt6xhYJ_22ZAyGGl01fkduHkjx4naCfsr4iDaz3UAKJ2jRCZMmXfwrjxxGNuULSphg7d4p2vwx_NQz4Ylbbw-MrqQREOJ9sSpAxJdWP7IFrp8A-SvxCToKOA_8PN7FT-hgHIfaYdd370dUR3Fhgofa6W7Xqpx-9ntb_GrBF-gDDClhUBiosDnkSIOfUj20h-dWiL_k8Ih4xTdMvX5XhIok5tvLnWQUt-rIVM75JUkH0uBsWucffXMzWPBlypznDIgla9JVbvazZI-FGdqyd8OhEEe_Jn0EvAv3znH2X8KI4edVQZ9kWz1tiFcAviBLSlIlJlGg3nc1Ml285oXcJsSN7yXWVWb--uIDQNicMDiDJloHuqQ0AvhFe0T-u5bPz-Rg0AgcYtw1oc5fRzXux4WYpKQSo5c9PfQSMi-JVWZCiyNkG9FjcLIsQUza0zO1jqJfg7Hous_4wbGA-L-RQ4hjLlKH2iqXdqqAGgq85UBKF6vr0S8a8LK03TPrRNpqgUnsJJIS4bw6YsbCmpX2fsLuF8f267sEMcE2CvU5WExAJCQSDRuvWfMkwpyHtiEDgN2orFsjXbc89tl1JcSTpopELqobECu1O--DDRhbNXoFI17IeyX2QbHIeUL8OdbDS2EsVY3e69N-KcEaifHjiU8Rq2KcJtpyPHQQ-qAJnaUAyqZiU5PtfTwsx4qQF_G5jKnbSPFqPAD_TLzIsb3Yz4JgZZCPnGuefaHIEYG94UYN2e3pFC_V_nR5GfBmipwhwoji7l9cInN66k",
  Description: "Mafia: Definetive Edition - прямое продолжение игры 2016 года. События сюжета разворачиваются через несколько лет после событий на Марсе. Здесь Палачу Рока под вашим управлением придется вступить в схватку с гадкими демонами, которые решили захватить Землю. Миссии кампании разворачиваются в основном на нашей родной планете, но будет и очередной заезд на Марс вместе с несколькими его спутниками. По сути, разработчики решили пересказать сюжет оригинального."
},
{
  GameId: 31,
  GameName: "Metro: Exodus",
  GameYear: 2019,
  Price: '2899 p.',
  Mark: 8,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=663ae853bf14591e9b3bc5a0be802a34712d43cd-5349727-images-thumbs&n=13",
  Description: "Metro: Exodus — компьютерная ролевая игра, разработанная компанией Bethesda Game Studios, продолжение серии игр Fallout. Сюжет начинается в 2077 году, где мир уже стоит на пороге большой войны. Главный герой просыпается утром и обнаруживает, что он — единственный выживший в Убежище 111. Повторное пробуждение происходит через 60 лет после похищения ребёнка и 210 лет после катастрофы. Игрок выбирается на поверхность, где от прежнего мира практически ничего не осталось, а райский уголок, который был его домом, превратился в новый, враждебный мир, называемый Содружеством. Основная часть игры происходит в 2287 году, спустя 210 лет после ядерной войны, уничтожившей большую часть населения Земли. Место действия — Бостон и его окрестности (Содружество Массачусетс). "
},
{
  GameId: 32,
  GameName: "Crysis 3",
  GameYear: 2013,
  Price: '499 p.',
  Mark: 9,
  ImgUrl: "https://avatars.mds.yandex.net/i?id=4e50e4d3244f670679b87be4bc2eae180a046f8d-5231941-images-thumbs&n=13",
  Description: "Crysis 3 — продолжение шутера с видом от первого лица и элементами стелса. 1 Игра вышла 19 февраля 2013 года в США, 21 февраля 2013 года в Европе для платформ ПК, Xbox 360 и PlayStation 3. Сюжет разворачивается в 2047 году, спустя 24 года после событий, описанных в Crysis 2. Нью-Йорк не был восстановлен после боевых действий и окончательно обратился в руины, в которых время от времени разгораются конфликты между войсками C.E.L.L., остатками цефалоподов, выживших после биологической атаки, и повстанцами, сопротивляющимися диктатуре корпорации. Задача игрока — мстить всем и каждому с помощью «улучшенной» версии нанокостюма, иноземного оружия и лука. Игровая механика Crysis 3 сохранила «песочную» и открытую структуру, совместив в себе лучшие элементы нелинейности из Crysis и Crysis 2, великолепное графическое оформление и непременный многопользовательский режим."},
{
  GameId: 33,
  GameName: "Stray",
  GameYear: 2020,
  Price: '499 p.',
  Mark: 9,
  ImgUrl: "https://steamuserimages-a.akamaihd.net/ugc/1926995168834527057/2732B20807591377EFB6124140A04CF16001F2C5/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
  Description: 'Stray - игра про котика'
},
])
let currentPage = ref(1);
const itemsPerPage = ref(16);
const searchQuery=ref('');
watch(searchQuery, () => {
  currentPage.value = 1;
});
const filteredCards = computed(() => {
  if (!searchQuery.value) {
      //document.getElementById("Missing").style.visibility = "hidden"
      return cards.value;
  }
  else {
      //document.getElementById("Missing").style.visibility = "hidden"
    return cards.value.filter(card => 
      card.GameName && typeof card.GameName === 'string' &&
      card.GameName.toLowerCase().includes(searchQuery.value.toLowerCase())
    ); 
  }
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredCards.value.slice(start, end); 
});

const totalPages = computed(() => {
  return Math.ceil(filteredCards.value.length / itemsPerPage.value);
});

const CountColor = computed((cards) => { 
  if (cards.Mark >= 8)
  {
    document.getElementById('mark').style.backgroundColor = "rgb(78, 189, 78)"
  }
  else if (cards.Mark >= 6 && Mark <=7)
  {
    document.getElementById('mark').style.backgroundColor = "rgb(185, 189, 78)"
  }
})
provide('CountColor', CountColor)
function LoadInformationDrawer(id){

}
const isDrawerOpen = ref(false);
function openDrawer() {
  isDrawerOpen.value = true;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}
function LoadDescription(id){
  let searchID = id;
  let Name = document.getElementById('GameNameP').innerText = cards.value.find(card => card.GameId === searchID).GameName;
  let Text = document.getElementById('descriptionP').innerText = cards.value.find(card => card.GameId === searchID).Description;
  document.getElementById('ImageDescription').style.visibility="visible"
  return document.getElementById('ImageDescription').src=cards.value.find(card => card.GameId === searchID).ImgUrl;
}
function Hovered(GameName, GameId){
  console.log('Hovered on ' + GameName);
  LoadDescription(GameId);
}
function Click(){
  console.log("Clicked!");
}
const scrollTopBtn = document.getElementById("PageBtn");
function GetScrolled(){
  document.getElementById("App").scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function loadDescrDrawer(Desc, url){
  return document.getElementById('descriptionDraw').innerText = Desc, document.getElementById("ImageDescr").src=url;
}
</script>

<template>
  
  <div class="app-wrapper" id="App">
    <Header/>
    <div class="content-wrapper">
      
      <img src="C:\Users\user\Desktop\PlayGround\PlayWeb\public\GameImages\PlayGroundBcgrnd.png" class = "backgrndtxt"></img>
      <div class="upperSearchWrapper">
      <span class = "UpperTextLeft">Лучший подбор</span>
      <div class="wrapperSearch">
        <div class="Search-wrapper">
          <input class ="SearchInput" v-model = "searchQuery" type="text" placeholder="Поиск">
          <button class = "SearchButton" type="button">Найти</button>
        </div>
      </div>
      <span class = "UpperTextRight">Лучшие игры</span>
      </div>
      <div class="filters-wrapper">
        <Filters/>
        <span class = "filter-description">Здесь вы можете выбрать конфигурацию своего компьютера.</span>
      </div>
      <div id = "Missing">
            <div class="MissingWrap">
              <img id ="Missing-Img"src="https://cdn-icons-png.flaticon.com/256/2748/2748791.png" alt="">
            </div>
            <p id = "Missing-Text">К сожалению, ничего не нашлось</p>
          </div>
      <div class="main-wrapper-cards-info">
        
        <div id="card-content">
          <li v-for="(card, index) in paginatedData" :key="card.GameId" class = "card-list">
            <Card @open="openDrawer" :gameYear="card.GameYear" :game-name="card.GameName" :img-url="card.ImgUrl" @click="Click(), GetScrolled(), loadDescrDrawer(card.Description, card.ImgUrl)" @mouseover="Hovered(card.GameName, card.GameId)" :Description="card.Description" :Price="card.Price" :Mark="card.Mark"/>
          </li>
          <DrawerCard  :isOpen="isDrawerOpen" @close="closeDrawer">
            <img id="ImageDescr" src="">
            <p id = "descriptionDraw"></p>
          </DrawerCard>
        </div>
        
        <div class="game-info-right-side">
          <img id="ImageDescription" src="" alt = "GameImage">
          <h1 id = "GameNameP"></h1>
          <p id = "descriptionP"></p>
        </div>
      </div>
      <div class="Pagination">
        <div class="btnsPage">
          <button id="PageBtn"class = "PageButton" v-for="page in totalPages" :key="page" @click="currentPage = page, GetScrolled()" :class="{ focus: currentPage === page }">{{ page }}</button>
          </div>
        </div>
      <Footer/>
    </div>
    
  </div>
</template>

<style scoped>
#descriptionDraw{
  color: white;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#ImageDescr{
  border-radius: 10px;
  width: 300px;
  height: 200px;
  object-fit: cover;
}
.backgrndtxt{
  opacity: 20%;
  width: 90vw;
  z-index: 0;
  position: absolute;
}
.MissingWrap{
  margin-top: 10px;
  margin-left: 80px;
}
#Missing{
  visibility: hidden;
  position: absolute;
  
  margin-right: auto;
  margin-left: auto;
}
#Missing-Text{
  margin-right: auto;
  margin-left: auto;
  color: rgb(99, 99, 99);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
}
#Missing-Img{
  margin-right: auto;
  margin-left: auto;
  width: 100px;
  opacity: 50%;
}
.btnsPage{
  z-index: 1;
  display: flex;

  margin-left: auto;
  margin-right: auto;
  gap: 5px;
}
.PageButton:focus{
  background-color: rgb(205, 80, 80);
  transition: 0.1s ease;
}
.PageButton:hover{
  cursor: pointer;
  background-color: rgb(62, 62, 62);
  transition: 0.1s ease;
}
.PageButton{
  z-index: 1;
  background-color: gray;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}
.Pagination{
  z-index: 100;

  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 40px;
  background-color: rgb(41, 41, 41);
  border-radius: 20px;
}
#GameNameP{
  margin-top: 10px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  max-width: 290px;
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  transition: 0.1s ease;
}
#descriptionP{
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  max-width: 290px;
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  transition: 0.1s ease;
}
#ImageDescriptionDrawer{
  visibility: hidden;
  margin-left: 10px;
  margin-top: 10px;
  width: 310px;
  height: 170px;
  object-fit: cover;
  border-radius: 14px;
}
#ImageDescription{
  visibility: hidden;
  margin-left: 10px;
  margin-top: 10px;
  width: 310px;
  height: 170px;
  object-fit: cover;
  border-radius: 14px;
}
.game-info-right-side{
  z-index: 0;
  background-color: rgb(41, 41, 41);
  border-radius: 20px;
  width: 330px;
  margin-left: 50px;
  margin-top: 10px;
  height: 100%;
}
.main-wrapper-cards-info{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 90vw;
}
.UpperTextLeft{
  z-index: 1;
  background-color: rgb(205, 80, 80);
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 20px;
  color: white;
  margin-left: 10px;
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.UpperTextRight{
  z-index: 1;

  background-color: rgb(205, 80, 80);
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 20px;
  color: white;
  margin-right: 10px;
  font-size: 16px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.upperSearchWrapper{
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapperSearch{
  display: flex;
}
.Search-wrapper{
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.SearchInput{
  z-index: 1;

    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    border: solid rgb(61, 61, 61) 2px;
    border-radius: 50px;
    outline: none;
    width: 250px;
    font-size: 16px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
.SearchInput:focus{
    border: 2px solid rgb(202, 100, 100);
    transition: 0.1s ease;
}
.SearchButton{
  z-index: 1;

    margin-left: 5px;
    padding: 8px;
    border-radius: 50px;
    border:none;
    background-color: rgb(51, 51, 51);
    color: white;
}
.SearchButton:hover{
    cursor: pointer;
    background-color: rgb(205, 80, 80);
    transition: 0.1s ease;
}
.filters-wrapper{
  z-index: 1;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.filter-description{
  z-index: 1;
  background-color: rgb(205, 80, 80);
  padding: 6px;
  padding-left: 9px;
  padding-right: 9px;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#card-content{
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  width: 64%;
  background-color: rgb(42, 42, 42);
  border-radius: 20px;
  padding: 5px;
  margin-top: 10px;
  height: 100%;
}
.card-list{
  height: 220px;
  padding: 4px;
  list-style: none;
  border-radius: 20px;
}

.content-wrapper{
  padding: 10px;
  margin-top: 10px;
  border-radius: 20px;
  max-width: 90vw;
  gap:10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(61, 61, 61);
}
.app-wrapper{
  position: absolute;
  top:0;
  left: 0;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgb(44, 44, 44);
  align-items: center;
}

</style>

       