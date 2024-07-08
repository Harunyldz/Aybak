//Yemek Resimleri
import kuruFasulyeImage from "../assets/yemek/fasulye/kuru-fasulye.jpg"
import etliKuruFasulyeImage from "../assets/yemek/fasulye/etli-kuru-fasulye.jpg"
import sekerFasulyeImage from "../assets/yemek/fasulye/seker-fasulye.jpg"


export const recipes = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    }
]