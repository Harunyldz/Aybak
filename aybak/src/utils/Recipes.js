//Yemek Resimleri
import sariMercimekCorbasiImage from "../assets/yemek/corba/sari-mercimek-corba.jpeg"
import ispanakliSariMercimekCorbasiImage from "../assets/yemek/corba/Ispanakli-sari-mercimek-corba.jpg"
import kirmiziMercimekCorbasiImage from "../assets/yemek/corba/kirmizi-mercimek-corba.jpg"
import sosisliKirmiziMercimekCorbasiImage from "../assets/yemek/corba/sosisli-mercimek.jpg"
import nohutluPilavImage from "../assets/yemek/pilav/nohutlu-pilav.jpg"
import bademliPilavImage from "../assets/yemek/pilav/bademli-pilav.jpg"
import domatesliPilavImage from "../assets/yemek/pilav/domatesli-pilav.jpg"
import sebzeliBulgurPilaviImage from "../assets/yemek/pilav/sebzeli-bulgur-pilavi.jpg"
import akasyaPilaviImage from "../assets/yemek/pilav/akasya-pilavi.jpg"
import kuruFasulyeImage from "../assets/yemek/fasulye/kuru-fasulye.jpg"
import etliKuruFasulyeImage from "../assets/yemek/fasulye/etli-kuru-fasulye.jpg"
import sekerFasulyeImage from "../assets/yemek/fasulye/seker-fasulye.jpg"
import beyazNohutImage from "../assets/yemek/nohut/beyaz-nohut.jpg"
import tavukluBeyazNohutImage from "../assets/yemek/nohut/tavuklu-nohut.jpg"
import kocbasiNohutImage from "../assets/yemek/nohut/kocbasi-nohut.jpg"
import nohutGuvecImage from "../assets/yemek/nohut/guvec-nohut.jpg"
import yesilMercimekImage from "../assets/yemek/yesilMercimek/yesil-mercimek.jpg"
import yesilMercimekliIspanakImage from "../assets/yemek/yesilMercimek/ispanak-yesil-mercimek.jpg"
import yesilMercimekKoftesiImage from "../assets/yemek/yesilMercimek/kofte-yesil-mercimek.jpg"


export const recipes = [
    {
        id: 1,
        title: "Sarı Mercimek Çorbası",
        type: "Çorbalar",
        ingredients: [
            "1 su bardağı sarı mercimek",
            "1 adet büyük soğan, doğranmış",
            "1 adet havuç, doğranmış",
            "1 adet patates, doğranmış",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz (damak zevkinize göre ayarlayabilirsiniz)",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı kimyon",
            "5 su bardağı su veya tavuk suyu",
            "1 adet limon (servis için)"
        ],
        instructions: [
            "Sarı mercimekleri yıkayıp süzün.",
            "Bir tencereye sıvı yağı veya tereyağını ekleyin ve ısıtın. Doğranmış soğanları ekleyip pembeleşene kadar kavurun.",
            "Doğranmış havuç ve patatesleri ekleyin, birkaç dakika karıştırarak kavurun.",
            "Yıkanmış sarı mercimekleri tencereye ekleyin ve karıştırın.",
            "Tuz, karabiber ve kimyonu ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Çorba kaynamaya başladıktan sonra, ısıyı azaltın ve sebzeler tamamen yumuşayana kadar yaklaşık 20-25 dakika pişirin.",
            "Pişen çorbayı blender veya el blendırı ile pürüzsüz bir kıvam alana kadar ezin. Eğer çorba çok koyu ise biraz daha su ekleyebilirsiniz.",
            "Çorbayı tekrar ocağa alın ve bir taşım daha kaynatın. Tadını kontrol edip gerekirse tuz ve baharat ekleyin.",
            "Sıcak olarak limon dilimleri ile servis yapın. Afiyet olsun!"
        ],
        image: sariMercimekCorbasiImage
    },
    {
        id: 2,
        title: "Ispanaklı Sarı Mercimek Çorbası",
        type: "Çorbalar",
        ingredients: [
            "1 su bardağı sarı mercimek",
            "1 adet büyük soğan, doğranmış",
            "1 adet havuç, doğranmış",
            "1 adet patates, doğranmış",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz (damak zevkinize göre ayarlayabilirsiniz)",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı kimyon",
            "5 su bardağı su veya tavuk suyu",
            "100 gram ıspanak, doğranmış",
            "1 adet limon (servis için)"
        ],
        instructions: [
            "Sarı mercimekleri yıkayıp süzün.",
            "Bir tencereye sıvı yağı veya tereyağını ekleyin ve ısıtın. Doğranmış soğanları ekleyip pembeleşene kadar kavurun.",
            "Doğranmış havuç ve patatesleri ekleyin, birkaç dakika karıştırarak kavurun.",
            "Yıkanmış sarı mercimekleri tencereye ekleyin ve karıştırın.",
            "Tuz, karabiber ve kimyonu ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Çorba kaynamaya başladıktan sonra, ısıyı azaltın ve sebzeler tamamen yumuşayana kadar yaklaşık 20-25 dakika pişirin.",
            "Pişen çorbayı blender veya el blendırı ile pürüzsüz bir kıvam alana kadar ezin. Eğer çorba çok koyu ise biraz daha su ekleyebilirsiniz.",
            "Doğranmış ıspanakları ekleyin ve birkaç dakika daha pişirin, ıspanaklar yumuşayana kadar.",
            "Çorbayı tekrar ocağa alın ve bir taşım daha kaynatın. Tadını kontrol edip gerekirse tuz ve baharat ekleyin.",
            "Sıcak olarak limon dilimleri ile servis yapın. Afiyet olsun!"
        ],
        image: ispanakliSariMercimekCorbasiImage
    },
    {
        id: 3,
        title: "Kırmızı Mercimek Çorbası",
        type: "Çorbalar",
        ingredients: [
            "1 su bardağı kırmızı mercimek",
            "1 adet büyük soğan, doğranmış",
            "1 adet havuç, doğranmış",
            "1 adet patates, doğranmış",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 yemek kaşığı domates salçası",
            "1 tatlı kaşığı tuz (damak zevkinize göre ayarlayabilirsiniz)",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı kimyon",
            "6 su bardağı su veya tavuk suyu",
            "1 adet limon (servis için)"
        ],
        instructions: [
            "Kırmızı mercimekleri yıkayıp süzün.",
            "Bir tencereye sıvı yağı veya tereyağını ekleyin ve ısıtın. Doğranmış soğanları ekleyip pembeleşene kadar kavurun.",
            "Doğranmış havuç ve patatesleri ekleyin, birkaç dakika karıştırarak kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurun.",
            "Yıkanmış kırmızı mercimekleri tencereye ekleyin ve karıştırın.",
            "Tuz, karabiber ve kimyonu ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Çorba kaynamaya başladıktan sonra, ısıyı azaltın ve sebzeler tamamen yumuşayana kadar yaklaşık 20-25 dakika pişirin.",
            "Pişen çorbayı blender veya el blendırı ile pürüzsüz bir kıvam alana kadar ezin. Eğer çorba çok koyu ise biraz daha su ekleyebilirsiniz.",
            "Çorbayı tekrar ocağa alın ve bir taşım daha kaynatın. Tadını kontrol edip gerekirse tuz ve baharat ekleyin.",
            "Sıcak olarak limon dilimleri ile servis yapın. Afiyet olsun!"
        ],
        image: kirmiziMercimekCorbasiImage
    },
    {
        id: 4,
        title: "Sosisli Kırmızı Mercimek Çorbası",
        type: "Çorbalar",
        ingredients: [
            "1 su bardağı kırmızı mercimek",
            "1 adet büyük soğan, doğranmış",
            "1 adet havuç, doğranmış",
            "1 adet patates, doğranmış",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 yemek kaşığı domates salçası",
            "3 adet sosis, dilimlenmiş",
            "1 tatlı kaşığı tuz (damak zevkinize göre ayarlayabilirsiniz)",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı kimyon",
            "6 su bardağı su veya tavuk suyu",
            "1 adet limon (servis için)"
        ],
        instructions: [
            "Kırmızı mercimekleri yıkayıp süzün.",
            "Bir tencereye sıvı yağı veya tereyağını ekleyin ve ısıtın. Doğranmış soğanları ekleyip pembeleşene kadar kavurun.",
            "Doğranmış havuç ve patatesleri ekleyin, birkaç dakika karıştırarak kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurun.",
            "Dilimlenmiş sosisleri ekleyin ve birkaç dakika kavurun.",
            "Yıkanmış kırmızı mercimekleri tencereye ekleyin ve karıştırın.",
            "Tuz, karabiber ve kimyonu ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Çorba kaynamaya başladıktan sonra, ısıyı azaltın ve sebzeler tamamen yumuşayana kadar yaklaşık 20-25 dakika pişirin.",
            "Pişen çorbayı blender veya el blendırı ile pürüzsüz bir kıvam alana kadar ezin. Eğer çorba çok koyu ise biraz daha su ekleyebilirsiniz.",
            "Çorbayı tekrar ocağa alın ve bir taşım daha kaynatın. Tadını kontrol edip gerekirse tuz ve baharat ekleyin.",
            "Sıcak olarak limon dilimleri ile servis yapın. Afiyet olsun!"
        ],
        image: sosisliKirmiziMercimekCorbasiImage
    },
    {
        id: 5,
        title: "Nohutlu Pilav",
        type: "Pilavlar",
        ingredients: [
            "2 su bardağı pirinç",
            "1 su bardağı haşlanmış nohut",
            "2 yemek kaşığı tereyağı",
            "2 yemek kaşığı sıvı yağ",
            "3 su bardağı su veya tavuk suyu",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber"
        ],
        instructions: [
            "Pirinçleri tuzlu ılık suda yaklaşık 20-30 dakika bekletin. Daha sonra bol su ile yıkayıp süzün.",
            "Bir tencereye tereyağını ve sıvı yağı ekleyin. Yağlar eridikten sonra pirinçleri ekleyin ve pirinçler şeffaflaşana kadar kavurun.",
            "Haşlanmış nohutları ekleyin ve karıştırın.",
            "Tuz ve karabiberi ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Kaynadıktan sonra tencerenin kapağını kapatın ve kısık ateşte pirinçler suyunu çekene kadar pişirin.",
            "Pilav piştikten sonra ocaktan alın ve demlenmesi için kapağını açmadan yaklaşık 10-15 dakika bekleyin.",
            "Demlenen pilavı karıştırarak servis yapın. Afiyet olsun!"
        ],
        image: nohutluPilavImage
    },
    {
        id: 6,
        title: "Bademli Pilav",
        type: "Pilavlar",
        ingredients: [
            "2 su bardağı pirinç",
            "1 su bardağı badem",
            "2 yemek kaşığı tereyağı",
            "2 yemek kaşığı sıvı yağ",
            "3 su bardağı su veya tavuk suyu",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 adet küçük soğan (isteğe bağlı, ince doğranmış)"
        ],
        instructions: [
            "Pirinçleri tuzlu ılık suda yaklaşık 20-30 dakika bekletin. Daha sonra bol su ile yıkayıp süzün.",
            "Bademlerin kabuklarını kolayca soymak için kaynar suya batırıp birkaç dakika bekletin, ardından soğuk suya alın ve kabuklarını soyun.",
            "Bir tencereye tereyağını ve sıvı yağı ekleyin. Yağlar eridikten sonra bademleri ekleyin ve hafifçe kavurun. (Eğer soğan kullanıyorsanız, bademlerle birlikte soğanları da ekleyin ve soğanlar pembeleşene kadar kavurun.)",
            "Pirinçleri ekleyin ve pirinçler şeffaflaşana kadar kavurun.",
            "Tuz ve karabiberi ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Kaynadıktan sonra tencerenin kapağını kapatın ve kısık ateşte pirinçler suyunu çekene kadar pişirin.",
            "Pilav piştikten sonra ocaktan alın ve demlenmesi için kapağını açmadan yaklaşık 10-15 dakika bekleyin.",
            "Demlenen pilavı karıştırarak servis yapın. Afiyet olsun!"
        ],
        image: bademliPilavImage
    },
    {
        id: 7,
        title: "Domatesli Pilav",
        type: "Pilavlar",
        ingredients: [
            "2 su bardağı pirinç",
            "2 adet büyük domates (rendelenmiş)",
            "1 adet yeşil biber (isteğe bağlı, doğranmış)",
            "2 yemek kaşığı tereyağı",
            "2 yemek kaşığı sıvı yağ",
            "3 su bardağı su veya tavuk suyu",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber"
        ],
        instructions: [
            "Pirinçleri tuzlu ılık suda yaklaşık 20-30 dakika bekletin. Daha sonra bol su ile yıkayıp süzün.",
            "Bir tencereye tereyağını ve sıvı yağı ekleyin. Yağlar eridikten sonra doğranmış yeşil biberleri ekleyin ve hafifçe kavurun (isteğe bağlı).",
            "Rendelenmiş domatesleri ekleyin ve domatesler suyunu çekene kadar kavurun.",
            "Pirinçleri ekleyin ve pirinçler şeffaflaşana kadar kavurun.",
            "Tuz ve karabiberi ekleyin, ardından suyu veya tavuk suyunu ekleyin. Karıştırarak kaynamaya bırakın.",
            "Kaynadıktan sonra tencerenin kapağını kapatın ve kısık ateşte pirinçler suyunu çekene kadar pişirin.",
            "Pilav piştikten sonra ocaktan alın ve demlenmesi için kapağını açmadan yaklaşık 10-15 dakika bekleyin.",
            "Demlenen pilavı karıştırarak servis yapın. Afiyet olsun!"
        ],
        image: domatesliPilavImage
    },
    {
        id: 8,
        title: "Sebzeli Bulgur Pilavı",
        type: "Pilavlar",
        ingredients: [
            "2 su bardağı bulgur",
            "1 adet büyük soğan (ince doğranmış)",
            "1 adet yeşil biber (doğranmış)",
            "1 adet kırmızı biber (doğranmış)",
            "1 adet havuç (rendelenmiş)",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı tereyağı veya sıvı yağ",
            "3 su bardağı su veya tavuk suyu",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 çay kaşığı pul biber (isteğe bağlı)"
        ],
        instructions: [
            "Bir tencereye tereyağını veya sıvı yağı ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Doğranmış yeşil ve kırmızı biberleri ekleyin ve biberler yumuşayana kadar kavurun.",
            "Rendelenmiş havucu ekleyin ve birkaç dakika daha kavurmaya devam edin.",
            "Rendelenmiş domatesleri ekleyin ve domatesler suyunu çekene kadar pişirin.",
            "Bulguru ekleyin ve bulgurlar şeffaflaşana kadar kavurun.",
            "Tuz, karabiber ve pul biberi ekleyin. Ardından suyu veya tavuk suyunu ekleyin ve karıştırarak kaynamaya bırakın.",
            "Kaynadıktan sonra tencerenin kapağını kapatın ve kısık ateşte bulgurlar suyunu çekene kadar pişirin.",
            "Pilav piştikten sonra ocaktan alın ve demlenmesi için kapağını açmadan yaklaşık 10-15 dakika bekleyin.",
            "Demlenen pilavı karıştırarak servis yapın. Afiyet olsun!"
        ],
        image: sebzeliBulgurPilaviImage
    },
    {
        id: 9,
        title: "Akasya Pilavı",
        type: "Pilavlar",
        ingredients: [
            "2 su bardağı pirinç",
            "1 su bardağı doğranmış tavuk göğsü",
            "1 su bardağı bezelye",
            "1 adet büyük soğan (ince doğranmış)",
            "1 adet havuç (küp doğranmış)",
            "2 yemek kaşığı tereyağı veya sıvı yağ",
            "3 su bardağı su veya tavuk suyu",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 çay kaşığı zerdeçal (isteğe bağlı)",
            "1 çay kaşığı kimyon (isteğe bağlı)"
        ],
        instructions: [
            "Pirinçleri tuzlu ılık suda yaklaşık 20-30 dakika bekletin. Daha sonra bol su ile yıkayıp süzün.",
            "Bir tencereye tereyağını veya sıvı yağı ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Doğranmış tavuk göğsünü ekleyin ve tavuklar tamamen pişene kadar kavurun.",
            "Küp doğranmış havucu ekleyin ve birkaç dakika kavurmaya devam edin.",
            "Bezelyeleri ekleyin ve karıştırın.",
            "Pirinçleri ekleyin ve pirinçler şeffaflaşana kadar kavurun.",
            "Tuz, karabiber, zerdeçal ve kimyonu ekleyin. Ardından suyu veya tavuk suyunu ekleyin ve karıştırarak kaynamaya bırakın.",
            "Kaynadıktan sonra tencerenin kapağını kapatın ve kısık ateşte pirinçler suyunu çekene kadar pişirin.",
            "Pilav piştikten sonra ocaktan alın ve demlenmesi için kapağını açmadan yaklaşık 10-15 dakika bekleyin.",
            "Demlenen pilavı karıştırarak servis yapın. Afiyet olsun!"
        ],
        image: akasyaPilaviImage
    },
    {
        id: 10,
        title: "Kuru Fasulye",
        type: "Fasulye Yemekleri",
        ingredients: [
            "2 su bardağı kuru fasulye",
            "1 büyük soğan, doğranmış",
            "2 yemek kaşığı domates salçası",
            "2 adet domates, rendelenmiş veya küçük doğranmış",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz (miktarı damak zevkinize göre ayarlayabilirsiniz)",
            "1 çay kaşığı karabiber",
            "İsteğe bağlı olarak pul biber",
            "Su"
        ],
        instructions: [
            "Kuru fasulyeleri bir gece önceden bol suyla kaplı bir kapta bekletin. Eğer vakit yoksa, hızlı bir şekilde haşlayarak da kullanabilirsiniz.",
            "Haşlanmış ve süzülmüş kuru fasulyeleri bir tencereye alın. Üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Bir tencerede sıvı yağı veya tereyağını ısıtın. Doğranmış soğanları ekleyip pembeleşene kadar kavurun.",
            "Salçayı ekleyin ve kavurmaya devam edin, ardından domatesleri ekleyin.",
            "Baharatları ve isteğe bağlı olarak pul biberi ekleyin. Karıştırarak pişirin.",
            "Hazırlanan bu karışımı haşlanmış fasulyelerin üzerine ekleyin ve karıştırın.",
            "Tencerenin kapağını kapatın ve kısık ateşte fasulyeler yumuşayana kadar pişirin. Bu genellikle yaklaşık 45 dakika ile 1 saat arasında sürebilir. Ara sıra karıştırmayı unutmayın.",
            "Fasulyeler yumuşayıp sosu kıvam alınca ocaktan alın.",
            "Sıcak olarak pilav ve turşu ile servis yapın. Afiyet olsun!"
        ],
        image: kuruFasulyeImage
    },
    {
        id: 11,
        title: "Etli Kuru Fasulye",
        type: "Fasulye Yemekleri",
        ingredients: [
            "2 su bardağı kuru fasulye",
            "300 gram kuşbaşı doğranmış dana eti",
            "1 büyük soğan",
            "2 yemek kaşığı domates salçası",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "Su"
        ],
        instructions: [
            "Kuru fasulyeleri bir gece önceden bol suyla kaplı bir kapta bekletin. Eğer zamanınız yoksa, hızlı bir şekilde haşlayarak da kullanabilirsiniz.",
            "Bir tencereye sıvı yağı veya tereyağını ekleyin. Kuşbaşı doğranmış dana etini ekleyip kendi suyunu salıp çekene kadar kavurun.",
            "Kavrulan etlerin üzerine ince doğranmış soğanları ekleyin ve pembeleşene kadar kavurmaya devam edin.",
            "Soğanlar pembeleşince domates salçasını ekleyin ve kavurmaya devam edin, ardından rendelenmiş domatesleri ekleyip karıştırın.",
            "Tuz, karabiber ve isteğe bağlı olarak pul biberi ekleyin. Baharatlarla birlikte karıştırın ve salçanın kokusu çıkana kadar pişirin.",
            "Önceden ıslattığınız ve süzdüğünüz kuru fasulyeleri tencereye ekleyin. Üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Tencerenin kapağını kapatın ve kısık ateşte fasulyeler yumuşayana kadar pişirin. Bu süre genellikle 45 dakika ile 1 saat arasında değişebilir. Ara sıra karıştırmayı unutmayın.",
            "Etli kuru fasulye piştikten sonra ocaktan alın ve birkaç dakika dinlendirin.",
            "Sıcak olarak pilav ve turşu ile servis yapın. Afiyet olsun!"
        ],
        image: etliKuruFasulyeImage
    },
    {
        id: 12,
        title: "Güveçte Şeker Fasulye",
        type: "Fasulye Yemekleri",
        ingredients: [
            "500 gram şeker fasulye",
            "2 orta boy domates, rendelenmiş veya küçük doğranmış",
            "1 büyük soğan, doğranmış",
            "2 yemek kaşığı sıvı yağ veya zeytinyağı",
            "1 tatlı kaşığı tuz (damak zevkinize göre ayarlayabilirsiniz)",
            "1 çay kaşığı karabiber",
            "1 çay kaşığı toz şeker",
            "1 su bardağı sıcak su"
        ],
        instructions: [
            "Şeker fasulyelerini yıkayın ve süzün.",
            "Bir güveç veya derin bir tencereye sıvı yağı ekleyin. Doğranmış soğanları ekleyip pembeleşene kadar kavurun.",
            "Rendelenmiş veya doğranmış domatesleri ekleyin, karıştırarak pişirin.",
            "Baharatları (tuz, karabiber, toz şeker) ekleyin ve karıştırın.",
            "Hazırlanan sosun üzerine yıkanmış şeker fasulyelerini ekleyin.",
            "Sıcak suyu ekleyin, karıştırın ve güvecin kapağını kapatın.",
            "Önceden ısıtılmış 180°C fırında yaklaşık 45-60 dakika pişirin, fasulyeler yumuşayana kadar. Arada bir kontrol ederek gerektiğinde su ekleyebilirsiniz.",
            "Pişen güveçte şeker fasulyeyi fırından çıkarın ve servis yapmadan önce birkaç dakika dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: sekerFasulyeImage
    },
    {
        id: 13,
        title: "Beyaz Nohut Yemeği",
        type: "Nohut Yemekleri",
        ingredients: [
            "2 su bardağı nohut",
            "1 büyük soğan",
            "2 yemek kaşığı domates salçası",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "Su",
            "İsteğe bağlı: 1 tatlı kaşığı pul biber, 1 tatlı kaşığı kimyon"
        ],
        instructions: [
            "Nohutları bir gece önceden suya koyun ve sabaha kadar bekletin. Eğer vakit yoksa, hızlı bir şekilde haşlayarak da bu işlemi yapabilirsiniz.",
            "Bir tencereye sıvı yağ veya tereyağını ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurmaya devam edin.",
            "Rendelenmiş domatesleri ekleyin ve karıştırarak pişirin.",
            "Tuz, karabiber ve isteğe bağlı olarak pul biber ve kimyonu ekleyin.",
            "Önceden ıslatılmış ve suyu süzülmüş nohutları tencereye ekleyin.",
            "Nohutların üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Tencerenin kapağını kapatın ve kısık ateşte nohutlar yumuşayana kadar pişirin. Bu yaklaşık 45 dakika ile 1 saat arasında sürebilir. Ara sıra karıştırmayı unutmayın.",
            "Nohutlar yumuşadıktan sonra ocaktan alın ve bir süre dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: beyazNohutImage
    },
    {
        id: 14,
        title: "Tavuklu Beyaz Nohut Yemeği",
        type: "Nohut Yemekleri",
        ingredients: [
            "2 su bardağı nohut",
            "300 gram tavuk göğsü (kuşbaşı doğranmış)",
            "1 büyük soğan",
            "2 yemek kaşığı domates salçası",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "Su",
            "İsteğe bağlı: 1 tatlı kaşığı pul biber, 1 tatlı kaşığı kimyon"
        ],
        instructions: [
            "Nohutları bir gece önceden suya koyun ve sabaha kadar bekletin. Eğer vakit yoksa, hızlı bir şekilde haşlayarak da bu işlemi yapabilirsiniz.",
            "Bir tencereye sıvı yağ veya tereyağını ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Kuşbaşı doğranmış tavuk göğsünü ekleyin ve tavuklar tamamen pişene kadar kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurmaya devam edin.",
            "Rendelenmiş domatesleri ekleyin ve karıştırarak pişirin.",
            "Tuz, karabiber ve isteğe bağlı olarak pul biber ve kimyonu ekleyin.",
            "Önceden ıslatılmış ve suyu süzülmüş nohutları tencereye ekleyin.",
            "Nohutların üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Tencerenin kapağını kapatın ve kısık ateşte nohutlar ve tavuklar yumuşayana kadar pişirin. Bu yaklaşık 45 dakika ile 1 saat arasında sürebilir. Ara sıra karıştırmayı unutmayın.",
            "Nohutlar ve tavuklar yumuşadıktan sonra ocaktan alın ve bir süre dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: tavukluBeyazNohutImage
    },
    {
        id: 15,
        title: "Koçbaşı Nohut Yemeği",
        type: "Nohut Yemekleri",
        ingredients: [
            "2 su bardağı koçbaşı nohut",
            "1 büyük soğan",
            "2 yemek kaşığı domates salçası",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "Su",
            "İsteğe bağlı: 1 tatlı kaşığı pul biber, 1 tatlı kaşığı kimyon"
        ],
        instructions: [
            "Nohutları bir gece önceden suya koyun ve sabaha kadar bekletin. Eğer vakit yoksa, hızlı bir şekilde haşlayarak da bu işlemi yapabilirsiniz.",
            "Bir tencereye sıvı yağ veya tereyağını ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurmaya devam edin.",
            "Rendelenmiş domatesleri ekleyin ve karıştırarak pişirin.",
            "Tuz, karabiber ve isteğe bağlı olarak pul biber ve kimyonu ekleyin.",
            "Önceden ıslatılmış ve suyu süzülmüş nohutları tencereye ekleyin.",
            "Nohutların üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Tencerenin kapağını kapatın ve kısık ateşte nohutlar yumuşayana kadar pişirin. Bu yaklaşık 45 dakika ile 1 saat arasında sürebilir. Ara sıra karıştırmayı unutmayın.",
            "Nohutlar yumuşadıktan sonra ocaktan alın ve bir süre dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: kocbasiNohutImage
    },
    {
        id: 16,
        title: "Nohut Güveç",
        type: "Nohut Yemekleri",
        ingredients: [
            "2 su bardağı nohut",
            "300 gram kuşbaşı doğranmış kuzu eti",
            "1 büyük soğan",
            "2 yemek kaşığı domates salçası",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı pul biber (isteğe bağlı)",
            "1 tatlı kaşığı kimyon (isteğe bağlı)",
            "Su"
        ],
        instructions: [
            "Nohutları bir gece önceden suya koyun ve sabaha kadar bekletin. Eğer vakit yoksa, hızlı bir şekilde haşlayarak da bu işlemi yapabilirsiniz.",
            "Bir güveç tenceresinde sıvı yağ veya tereyağını ısıtın. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Kuşbaşı doğranmış kuzu etini ekleyin ve etler tamamen pişene kadar kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurmaya devam edin.",
            "Rendelenmiş domatesleri ekleyin ve karıştırarak pişirin.",
            "Tuz, karabiber ve isteğe bağlı olarak pul biber ve kimyonu ekleyin.",
            "Önceden ıslatılmış ve suyu süzülmüş nohutları güveç tenceresine ekleyin.",
            "Nohutların üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Güveç tenceresinin kapağını kapatın ve kısık ateşte nohutlar ve etler yumuşayana kadar pişirin. Bu yaklaşık 1 saat sürebilir. Ara sıra karıştırmayı unutmayın.",
            "Nohutlar ve etler yumuşadıktan sonra ocaktan alın ve bir süre dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: nohutGuvecImage
    },
    {
        id: 17,
        title: "Yeşil Mercimek Yemeği",
        type: "Yeşil Mercimek Yemekleri",
        ingredients: [
            "2 su bardağı yeşil mercimek",
            "1 büyük soğan",
            "2 diş sarımsak",
            "2 yemek kaşığı domates salçası",
            "2 adet domates (rendelenmiş)",
            "2 yemek kaşığı sıvı yağ veya tereyağı",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı pul biber (isteğe bağlı)",
            "1 tatlı kaşığı kimyon (isteğe bağlı)",
            "Su"
        ],
        instructions: [
            "Yeşil mercimekleri yıkayın ve bir tencereye alın. Üzerini geçecek kadar su ekleyin ve kaynatın. Kaynadıktan sonra suyunu süzün ve mercimekleri bir kenara alın.",
            "Bir tencereye sıvı yağ veya tereyağını ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Sarımsakları ekleyin ve birkaç dakika daha kavurun.",
            "Domates salçasını ekleyin ve kokusu çıkana kadar kavurmaya devam edin.",
            "Rendelenmiş domatesleri ekleyin ve karıştırarak pişirin.",
            "Tuz, karabiber ve isteğe bağlı olarak pul biber ve kimyonu ekleyin.",
            "Haşlanmış yeşil mercimekleri tencereye ekleyin ve karıştırın.",
            "Mercimeklerin üzerini geçecek kadar sıcak su ekleyin ve karıştırın.",
            "Tencerenin kapağını kapatın ve kısık ateşte mercimekler yumuşayana kadar pişirin. Bu yaklaşık 30-40 dakika sürebilir. Ara sıra karıştırmayı unutmayın.",
            "Yeşil mercimekler yumuşadıktan sonra ocaktan alın ve bir süre dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: yesilMercimekImage
    },
    {
        id: 18,
        title: "Yeşil Mercimekli Ispanak",
        type: "Yeşil Mercimek Yemekleri",
        ingredients: [
            "1 su bardağı yeşil mercimek",
            "500 gram ıspanak",
            "1 büyük soğan",
            "2 diş sarımsak",
            "2 yemek kaşığı domates salçası",
            "1 yemek kaşığı biber salçası (isteğe bağlı)",
            "3 yemek kaşığı sıvı yağ",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 tatlı kaşığı kırmızı biber",
            "Su"
        ],
        instructions: [
            "Yeşil mercimekleri yıkayın ve bir tencereye alın. Üzerini geçecek kadar su ekleyin ve kaynatın. Kaynadıktan sonra suyunu süzün ve mercimekleri bir kenara alın.",
            "Ispanakları iyice yıkayın ve doğrayın.",
            "Bir tencereye sıvı yağı ekleyin. Yağ ısındıktan sonra ince doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Sarımsakları ekleyin ve birkaç dakika daha kavurun.",
            "Domates salçasını ve biber salçasını ekleyin, kokusu çıkana kadar kavurmaya devam edin.",
            "Yeşil mercimekleri tencereye ekleyin ve karıştırın.",
            "Doğranmış ıspanakları ekleyin ve karıştırarak pişirin.",
            "Tuz, karabiber ve kırmızı biberi ekleyin.",
            "Yemek suyunu çektikçe azar azar sıcak su ekleyin. Ispanaklar ve mercimekler iyice pişene kadar kısık ateşte pişirin.",
            "Yeşil mercimekler ve ıspanaklar yumuşadıktan sonra ocaktan alın ve bir süre dinlendirin.",
            "Sıcak olarak servis yapın. Afiyet olsun!"
        ],
        image: yesilMercimekliIspanakImage
    },
    {
        id: 19,
        title: "Yeşil Mercimek Köftesi",
        type: "Yeşil Mercimek Yemekleri",
        ingredients: [
            "1 su bardağı yeşil mercimek",
            "1 su bardağı ince bulgur",
            "1 büyük soğan",
            "2 diş sarımsak",
            "2 yemek kaşığı domates salçası",
            "2 yemek kaşığı biber salçası",
            "3 yemek kaşığı sıvı yağ",
            "1 tatlı kaşığı tuz",
            "1 çay kaşığı karabiber",
            "1 çay kaşığı kimyon",
            "1 çay kaşığı kırmızı biber",
            "Yarım demet maydanoz",
            "3-4 dal taze soğan",
            "1 limonun suyu",
            "Su"
        ],
        instructions: [
            "Yeşil mercimekleri yıkayın ve bir tencereye alın. Üzerini geçecek kadar su ekleyin ve yumuşayana kadar haşlayın. Haşladıktan sonra suyunu süzün ve bir kenara alın.",
            "Bir kaba ince bulguru alın ve üzerine 1 su bardağı sıcak su ekleyin. Bulgurun şişmesi için 10 dakika bekletin.",
            "Bir tavada sıvı yağı ısıtın. İnce doğranmış soğanı ekleyin ve pembeleşene kadar kavurun.",
            "Sarımsakları ekleyin ve birkaç dakika daha kavurun.",
            "Domates salçası ve biber salçasını ekleyin, kokusu çıkana kadar kavurmaya devam edin.",
            "Haşlanmış yeşil mercimekleri ekleyin ve karıştırın. Tuzu, karabiberi, kimyonu ve kırmızı biberi ekleyin.",
            "Bu karışımı şişen bulgura ekleyin ve iyice karıştırın.",
            "İnce doğranmış maydanoz ve taze soğanları ekleyin. Limon suyunu ekleyin ve tüm malzemeleri iyice karıştırın.",
            "Ellerinizi hafifçe ıslatarak karışımdan küçük parçalar alın ve köfte şekli verin.",
            "Hazırladığınız yeşil mercimek köftelerini servis tabağına alın.",
            "Afiyet olsun!"
        ],
        image: yesilMercimekKoftesiImage
    }
]