//Ürünlerimiz
//?Paketli Ürünler 1kg
import pirinc from "../assets/1kg/pirinc.png"
import bulgur from "../assets/1kg/bulgur.png"
import koftelikburgur from "../assets/1kg/koftelikburgur.png"
import kirmiziMercimek from "../assets/1kg/kirmiziMercimek.png"
import yesilMercimek from "../assets/1kg/yesilMercimek.png"
import kurufasulye from "../assets/1kg/kurufasulye.png"
import nohut from "../assets/1kg/nohut.png"
import nohut2 from "../assets/1kg/nohut2.png"
import popcorn from "../assets/1kg/popcorn.png"
import barbunya from "../assets/1kg/barbunya.png"

//?Paketli Ürünler 5kg

import bakla from "../assets/5kg/bakla.png"
import baldoPirinc from "../assets/5kg/baldoPirinc.png"
import barbunya5 from "../assets/5kg/barbunya5.png"
import bulgur5 from "../assets/5kg/bulgur5.png"
import kirmiziMercimek5 from "../assets/5kg/kirmiziMercimek5.png"
import kuruFasulye5 from "../assets/5kg/kuruFasulye5.png"
import koftelikBulgur5 from "../assets/5kg/koftelikBulgur5.png"
import nohut5 from "../assets/5kg/nohut5.png"
import nohut52 from "../assets/5kg/nohut52.png"
import ödenaybaldo5 from "../assets/5kg/ödenaybaldo5.png"
import yesilMercimek5 from "../assets/5kg/yesilMercimek5.png"

//?Ayçiçek yağları

import aycicek1 from "../assets/odenay-yaglar/1l-plastik.png"
import aycicek2 from "../assets/odenay-yaglar/2l-plastik.png"
import aycicek4 from "../assets/odenay-yaglar/4l-plastik.png"
import aycicek45 from "../assets/odenay-yaglar/4.5l-plastik.png"
import aycicek5teneke from "../assets/odenay-yaglar/5lteneke.png"
import aycicek5 from "../assets/odenay-yaglar/5lplastik.png"
import aycicek18 from "../assets/odenay-yaglar/18ltteneke.jpg"

//?Dökme Ürünler
import aybakUzunTanemRice25 from "../assets/dokme_urun/uzuntaneli.png"
import aybakOsmancikRice25 from "../assets/dokme_urun/aybak-osmancikRice.png"
import odenayBaldoPirinc25 from "../assets/dokme_urun/odenay_baldo_pirin25.jpg"
import aybakKirikRice25 from "../assets/dokme_urun/aybak-kirik-pirinc-gonen-15278-1.jpg"
import mutfakBaldoRice25 from "../assets/dokme_urun/mutfak-baldo-pirinc.jpg"
import aybakBulgur25 from "../assets/dokme_urun/aybak-bulgur.png"
import ozsariBulgur25 from "../assets/dokme_urun/ozsari-bulgur.png"
import duruBulgur25 from "../assets/dokme_urun/duru-bulgur.jpg"
import tatbulBulgur25 from "../assets/dokme_urun/bulgur.jpg"
import aybakKuruFasulye25 from "../assets/dokme_urun/aybak-fasulye.png"
import aybakBarbunya25 from "../assets/dokme_urun/barbunya.jpg"
import aybakNohut25 from "../assets/dokme_urun/aybak-nohut.jpg"
import aybakKirmiziMercimek25 from "../assets/dokme_urun/dokme-kirmizi-mercimek.jpg"
// import aybakYesilMercimek25 from "../assets/dokme_urun/aybak-yesilMercimek.jpg"
import aybakYesilMercimek25 from "../assets/dokme_urun/yesil-mercimek.jpg"

//?Yöresel Ürünler

import kepekliRice from "../assets/yoresel-urunler/kepekli-pirinc.jpg"
import jasmineRice from "../assets/yoresel-urunler/jasmine-pirinc.jpg"
import bombayFasulye from "../assets/yoresel-urunler/bombay-fasulye.jpg"
import borulce from "../assets/yoresel-urunler/borulce.jpg"
import koyBulguru from "../assets/yoresel-urunler/koy-bulguru.jpeg"
import koyMercimegi from "../assets/yoresel-urunler/koy-mercimegi.jpg"
import sariMercimek from "../assets/yoresel-urunler/sari-mercimek2.jpg"
import kirikMisir from "../assets/yoresel-urunler/misirKirmalari.jpg"
import kuskus from "../assets/yoresel-urunler/kuskus-10kg.jpg"
import eriste from "../assets/yoresel-urunler/eriste-107kg.jpg"
import tarhana from "../assets/yoresel-urunler/tarhana.jpg"
import manti from "../assets/yoresel-urunler/manti.jpg"
import galeteUnu from "../assets/yoresel-urunler/galete-unu.jpg"
import misirUnu from "../assets/yoresel-urunler/misir-Unu.jpg"
import misirNisastasi from "../assets/yoresel-urunler/misirNisastasi.jpg"
import bugdayNisastasi from "../assets/yoresel-urunler/bugday-nisastasi.jpg"

//productInfo resimler
import pirincImage from "../assets/yeni/rice.jpg"
import bulgurImage from "../assets/yeni/bulgur2.jpg"
import barbunyaImage from "../assets/yeni/barbunya2.jpg"
import fasulyeImage from "../assets/yeni/fasulye2.jpg"
import nohutImage from "../assets/yeni/nohut3.jpg"
import kirmiziMercimekImage from "../assets/yeni/kirmizi-mercimek.jpg"
import sariMercimekImage from "../assets/yeni/sari-mercimek3.jpg"
import yesilMercimekImage from "../assets/yeni/yesil-mercimek2.jpg"

export const products = [
    {
        id: 1,
        name: "Paket Bakliyat 1kg",
        subProducts: [
            {
                id: 1,
                name: "Pirinç",
                type: "1kg",
                image: pirinc
            },
            {
                id: 2,
                name: "Bulgur",
                type: "1kg",
                image: bulgur
            },
            {
                id: 3,
                name: "Köftelik Bulgur",
                type: "1kg",
                image: koftelikburgur
            },
            {
                id: 4,
                name: "Kırmızı Mercimek",
                type: "1kg",
                image: kirmiziMercimek
            },
            {
                id: 5,
                name: "Yeşil Mercimek",
                type: "1kg",
                image: yesilMercimek
            },
            {
                id: 6,
                name: "Kuru Fasulye",
                type: "1kg",
                image: kurufasulye
            },
            {
                id: 7,
                name: "Nohut",
                type: "1kg",
                image: nohut
            },
            {
                id: 8,
                name: "Koçbaşı Nohut",
                type: "1kg",
                image: nohut2
            },
            {
                id: 9,
                name: "Popcorn",
                type: "1kg",
                image: popcorn
            },
            {
                id: 10,
                name: "Barbunya",
                type: "1kg",
                image: barbunya
            }
        ]
    },
    {
        id: 2,
        name: "Paket Bakliyat 5kg",
        subProducts: [
            {
                id: 1,
                name: "Bakla 5kg",
                type: "5kg",
                image: bakla
            },
            {
                id: 2,
                name: "Baldo Pirinç 5kg",
                type: "5kg",
                image: baldoPirinc
            },
            {
                id: 3,
                name: "Barbunya 5kg",
                type: "5kg",
                image: barbunya5
            },
            {
                id: 4,
                name: "Bulgur 5kg",
                type: "5kg",
                image: bulgur5
            },
            {
                id: 5,
                name: "Kırmızı Mercimek 5kg",
                type: "5kg",
                image: kirmiziMercimek5
            },
            {
                id: 6,
                name: "Kuru Fasulye 5kg",
                type: "5kg",
                image: kuruFasulye5
            },
            {
                id: 7,
                name: "Köftelik Bulgur 5kg",
                type: "5kg",
                image: koftelikBulgur5
            },
            {
                id: 8,
                name: "Nohut 5kg",
                type: "5kg",
                image: nohut5
            },
            {
                id: 9,
                name: "Koçbaşı Nohut 5kg",
                type: "5kg",
                image: nohut52
            },
            {
                id: 10,
                name: "Ödenay Baldo Pirinç 5kg",
                type: "5kg",
                image: ödenaybaldo5
            },
            {
                id: 11,
                name: "Yeşil Mercimek 5kg",
                type: "5kg",
                image: yesilMercimek5
            }
        ]
    },
    {
        id: 3,
        name: "Dökme Bakliyat 25kg",
        subProducts: [
            {
                id: 1,
                name: "Aybak Uzuntaneli Pirinç 25kg ",
                type: "dokme-urun",
                image: aybakUzunTanemRice25
            },
            {
                id: 2,
                name: "Aybak Osmancık Pirinç 25kg ",
                type: "dokme-urun",
                image: aybakOsmancikRice25
            },
            {
                id: 3,
                name: "Ödenay Baldo Pirinç 25kg ",
                type: "dokme-urun",
                image: odenayBaldoPirinc25
            },
            {
                id: 4,
                name: "Ödenay Baldo Pirinç 25kg ",
                type: "dokme-urun",
                image: odenayBaldoPirinc25
            },
            {
                id: 5,
                name: "Aybak Kırık Pirinç 25kg ",
                type: "dokme-urun",
                image: aybakKirikRice25
            },
            {
                id: 6,
                name: "Mutfak Baldo Pirinç 25kg ",
                type: "dokme-urun",
                image: mutfakBaldoRice25
            },
            {
                id: 7,
                name: "Aybak Bulgur 25kg ",
                type: "dokme-urun",
                image: aybakBulgur25
            },
            {
                id: 8,
                name: "Özsari Bulgur 25kg ",
                type: "dokme-urun",
                image: ozsariBulgur25
            },
            {
                id: 9,
                name: "Duru Bulgur 25kg ",
                type: "dokme-urun",
                image: duruBulgur25
            },
            {
                id: 10,
                name: "Tatbul Bulgur 25kg ",
                type: "dokme-urun",
                image: tatbulBulgur25
            },
            {
                id: 11,
                name: "Aybak Kuru Fasulye 25kg ",
                type: "dokme-urun",
                image: aybakKuruFasulye25
            },
            {
                id: 12,
                name: "Aybak Barbunya 25kg ",
                type: "dokme-urun",
                image: aybakBarbunya25
            },
            {
                id: 13,
                name: "Aybak Nohut 25kg ",
                type: "dokme-urun",
                image: aybakNohut25
            },
            {
                id: 14,
                name: "Aybak Kırmızı Mercimek 25kg ",
                type: "dokme-urun",
                image: aybakKirmiziMercimek25
            },
            {
                id: 15,
                name: "Aybak Yeşil Mercimek 25kg ",
                type: "dokme-urun",
                image: aybakYesilMercimek25
            }
        ]
    },
    {
        id: 4,
        name: "Yöresel Ürünler",
        subProducts: [
            {
                id: 1,
                name: "Kepekli Pirinç ",
                type: "yoresel-urun",
                image: kepekliRice
            },
            {
                id: 2,
                name: "Jasmine Pirinç ",
                type: "yoresel-urun",
                image: jasmineRice
            },
            {
                id: 3,
                name: "Bombay Fasulye ",
                type: "yoresel-urun",
                image: bombayFasulye
            },
            {
                id: 4,
                name: "Börülce ",
                type: "yoresel-urun",
                image: borulce
            },
            {
                id: 5,
                name: "Köy Bulguru",
                type: "yoresel-urun",
                image: koyBulguru
            },
            {
                id: 6,
                name: "Sarı Mercimek",
                type: "yoresel-urun",
                image: sariMercimek
            },
            {
                id: 7,
                name: "Kırık Mısır",
                type: "yoresel-urun",
                image: kirikMisir
            },
            {
                id: 8,
                name: "Kusukus 10kg",
                type: "yoresel-urun",
                image: kuskus
            },
            {
                id: 9,
                name: "Erişte",
                type: "yoresel-urun",
                image: eriste
            },
            {
                id: 10,
                name: "Tarhana",
                type: "yoresel-urun",
                image: tarhana
            },
            {
                id: 11,
                name: "Ev Mantısı",
                type: "yoresel-urun",
                image: manti
            },
            {
                id: 12,
                name: "Galete Unu",
                type: "yoresel-urun",
                image: galeteUnu
            },
            {
                id: 13,
                name: "Mısır Unu",
                type: "yoresel-urun",
                image: misirUnu
            },
            {
                id: 14,
                name: "Mısır Nişastası",
                type: "yoresel-urun",
                image: misirNisastasi
            },
            {
                id: 15,
                name: "Buğday Nişastası",
                type: "yoresel-urun",
                image: bugdayNisastasi
            },
        ]
    },
    {
        id: 5,
        name: "Ödenay Ayçiçek Yağları",
        subProducts: [
            {
                id: 1,
                name: "Ödenay Ayçiçek Yağı 1lt",
                type: "aycicek-yag",
                image: aycicek1
            },
            {
                id: 2,
                name: "Ödenay Ayçiçek Yağı 2lt",
                type: "aycicek-yag",
                image: aycicek2
            },
            {
                id: 3,
                name: "Ödenay Ayçiçek Yağı 4lt",
                type: "aycicek-yag",
                image: aycicek4
            },
            {
                id: 4,
                name: "Ödenay Ayçiçek Yağı 4.5lt",
                type: "aycicek-yag",
                image: aycicek45
            },
            {
                id: 5,
                name: "Ödenay Ayçiçek Yağı 5lt",
                type: "aycicek-yag",
                image: aycicek5
            },
            {
                id: 6,
                name: "Ödenay Ayçiçek Yağı 5lt",
                type: "aycicek-yag",
                image: aycicek5teneke
            },
            {
                id: 7,
                name: "Ödenay Ayçiçek Yağı 18lt",
                type: "aycicek-yag",
                image: aycicek18
            }
        ]
    }
]

export const productInfo = [
    {
        id: 1,
        title: "Pirinç",
        image: pirincImage,
        type: "dokme-urun",
        text: "100 gram pirinc 348 kalori içerir",
        href: "pirinc-saglik",
        details: [
            "Kalsiyum, kemik sağlığını destekler.",
            "Protein, kas gelişimine yardımcı olur.",
            "Fosfor, enerji üretiminde rol oynar.",
            "Demir, kan sağlığını iyileştirir.",
            "Pirinç, hazımsızlığa iyi gelir.",
            "Kanserle mücadelede yardımcı olabilir.",
            "Kan basıncını düzenlemeye yardımcı olur.",
            "Cilt sağlığını destekler.",
            "Vücut enerjisini artırır."
        ]
    },
    {
        id: 2,
        title: "Bulgur",
        image: bulgurImage,
        type: "dokme-urun",
        text: "100 gram kuru bulgur 371 kalori içerir.",
        href: "bulgur-saglik",
        details: [
            " Bulgur kandaki yağları düşürücü yönü olduğu bilinen posa/lif bakımından oldukça zengin bir gıdadır",
            " Karbonhidrat değeri yüksek, protein değeri düşüktür.",
            "Bulgurda bulunan B1 vitaminleri, sinir ve sindirim sisteminde önemli rol oynamaktadır",
            " İçerdiği folik asitten dolayı, çocuk ve hamile kadınlar için çok önemli bir gıda maddesidir",
            "Doymamış yağa sahiptir ve toplam yağ oranı düşük olduğu için sağlıklı bir besin maddesidir.",
            "Kolesterol içermez.",
            "Yüksek mineral ve selülozdan dolayı besin emilimini hızlandırır, kabızlığı engeller ve bağırsak kanserini önler.",
            "Bakliyatlarla karıştırıldığında dünyadaki en önemli besin kaynağı durumuna gelmektedir.",
            "Radyasyonu emmez ve radyasyona karşı dayanıklıdır. Bu nedenle bazı ülkelerde nükleer savaşlara karşı, askeri ve sivil amaçlar için stokta tutulan ürünlerdendir."
        ]
    },
    {
        id: 3,
        title: "Barbunya",
        image: barbunyaImage,
        type: "dokme-urun",
        text: "100 gram barbunya 350 kalori içerir",
        href: "barbunya-saglik",
        details: [
            "  Vücuda güç ve enerji vererek, bedensel ve zihinsel yorgunluğu giderir.",
            " Vücudun gelişimini ve onarımını destekler.",
            "Kemikleri güçlendirir.",
            " Romatizma ve siyatik şikâyetlerini azaltır.",
            "Böbrek rahatsızlıklarında etkilidir. Böbrekleri kuvvetlendirir. Böbrek kumu ve taşlarını dökmeye yardımcı olur.",
            "Sinirleri kuvvetlendirir ve kalp çarpıntısını giderir.",
            "Kandaki şeker miktarını düşürerek şeker hastalığına karşı faydalı olur."
        ]
    },
    {
        id: 4,
        title: "Kuru Fasulye",
        image: fasulyeImage,
        type: "dokme-urun",
        text: "100 gram kuru fasülye 346 kalori içerir.",
        href: "fasulye-saglik",
        details: [
            "  İçerdiği yüzde 20-30 protein ile iyi bir protein deposudur.",
            "  A,B ve D vitaminleri açısından oldukça zengindir.",
            "Kemikleri güçlendirir",
            "  Lifli olmasında dolayı kandaki kötü kolesterolü düşürür.",
            "Kalp hastalıklarına karşı etkilidir.",
            " Diyabeti kontrol altında tutar.",
            "Barsakları çalıştırır.",
            "Diyet yapanlar için yüksek besin değeri ve kalorisi düşük olmasından dolayı vazgeçilmez bir yiyecektir.",
            "Karbonhidrat, demir, folik asit, selenyum ve potasyum açısından zengindir."
        ]
    },
    {
        id: 5,
        title: "Nohut",
        image: nohutImage,
        type: "dokme-urun",
        text: "100 gram nohut 360 kalori içerir",
        href: "nohut-saglik",
        details: [
            "Yüksek protein içeriği kas gelişimine yardımcı olur.",
            "Lif içeriği sindirim sağlığını destekler.",
            "Düşük glisemik indeksi kan şekerini düzenler.",
            "Demir içeriği anemi riskini azaltır.",
            "Folat içeriği hamilelik sırasında önemlidir.",
            "Kalsiyum içeriği kemik sağlığını destekler.",
            "Antioksidanlar içeriği bağışıklık sistemini güçlendirir.",
            "Magnezyum içeriği kalp sağlığını destekler.",
            "Bitkisel bazlı protein kaynağıdır."
        ]
    },
    {
        id: 6,
        title: "Kırmızı Mercimek",
        image: kirmiziMercimekImage,
        type: "dokme-urun",
        text: "100 gram kırmızı mercimek 341 kalori içerir. ",
        href: "kirmiziMercimek-saglik",
        details: [
            "Yüksek protein içeriği kas gelişimini destekler.",
            "Bol miktarda lif içerir, sindirimi düzenler.",
            "Demir açısından zengindir, kansızlığı önler.",
            "Folik asit içeriği, hamilelik döneminde faydalıdır.",
            "Düşük yağ içeriği ile kalp dostudur.",
            "Antioksidanlar içerir, bağışıklık sistemini güçlendirir.",
            "B6 vitamini içerir, enerji üretimini destekler.",
            "Magnezyum içeriği ile kemik sağlığını korur.",
            "Bitkisel protein kaynağıdır."
        ]
    },
    {
        id: 7,
        title: "Sarı Mercimek",
        image: sariMercimekImage,
        type: "dokme-urun",
        text: "Sarı Mercimek, 100 gram sarı mercimek 336 kalori içerir. ",
        href: "sariMercimek-saglik",
        details: [
            "Yüksek lif içeriği sindirim sağlığını destekler.",
            "Protein açısından zengindir, kas gelişimini destekler.",
            "Düşük glisemik indeksi ile kan şekerini düzenler.",
            "Folik asit içeriği hamilelik döneminde faydalıdır.",
            "Potasyum açısından zengindir, kan basıncını düzenler.",
            "Magnezyum içeriği kalp sağlığını destekler.",
            "Antioksidanlar içerir, bağışıklık sistemini güçlendirir.",
            "Düşük yağ içeriği ile kilo kontrolüne yardımcı olur.",
            "Bitkisel protein kaynağıdır."
        ]
    },
    {
        id: 8,
        title: "Yeşil Mercimek",
        image: yesilMercimekImage,
        type: "dokme-urun",
        text: "100 gram yeşil mercimek 338 kalori içerir. ",
        href: "yesilMercimek-saglik",
        details: [
            "Yüksek lif içeriği sindirimi düzenler.",
            "Protein açısından zengindir, kas gelişimini destekler.",
            "Düşük glisemik indeksi ile kan şekerini düzenler.",
            "Folik asit içeriği hamilelik döneminde faydalıdır.",
            "Potasyum açısından zengindir, kan basıncını düzenler.",
            "Magnezyum içeriği kalp sağlığını destekler.",
            "Antioksidanlar içerir, bağışıklık sistemini güçlendirir.",
            "Düşük yağ içeriği ile kilo kontrolüne yardımcı olur.",
            "Bitkisel protein kaynağıdır.",
            "B6 vitamini içerir, sinir sistemi sağlığını destekler.",
            "Demir içeriği ile kansızlığı önler."
        ]
    },


]