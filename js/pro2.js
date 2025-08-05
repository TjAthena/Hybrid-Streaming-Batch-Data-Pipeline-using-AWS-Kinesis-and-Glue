// JavaScript to handle item clicks and display corresponding content and image
document.querySelectorAll('.item-tj-200').forEach(item => {
  item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');

      // Get currently active detail and image
      const currentDetail = document.querySelector('.details-tj-200.active');
      const currentImg = document.querySelector('.detailsimg-tj-200.active');

      // Hide the current details and image with fade-out effect
      if (currentDetail) {
          currentDetail.classList.remove('active');
          currentDetail.classList.add('hide'); // Add hide class to trigger upward motion
          setTimeout(() => {
              currentDetail.style.display = 'none'; // Set display to none after fade out
          }, 500); // Match with the transition duration
      }

      if (currentImg) {
          currentImg.classList.remove('active');
          currentImg.style.display = 'none'; // Set display to none immediately
      }

      // Show selected detail and image with fade-in effect
      const activeDetail = document.getElementById(target);
      const activeImg = document.getElementById(`img-${target}`);

      activeDetail.style.display = 'block'; // Set display to block immediately
      activeDetail.classList.remove('hide'); // Remove hide class to allow normal display
      activeDetail.classList.add('show'); // Add show class to trigger downward motion
      activeDetail.classList.add('active'); // Make it visible

      activeImg.style.display = 'block'; // Set display to block immediately
      activeImg.classList.add('active'); // Make it visible
  });
});


// Data for rice types
const riceData = {
    basmati: {
        description: "Basmati rice is a long-grain, aromatic rice commonly grown in India and Pakistan. Known for its fluffy texture and nutty flavor.",
        image: "img/basmathi.jpg"
    },
    jasmine: {
        description: "Jasmine rice is a fragrant, slightly sticky long-grain rice grown primarily in Thailand. Ideal for stir-fries and curries.",
        image: "img/jas.jpg"
    },
    arborio: {
        description: "Arborio rice is an Italian short-grain rice known for its creamy texture, perfect for risottos and puddings.",
        image: "img/boro.jpg"
    },
    wild: {
        description: "Wild rice is a grain harvested from aquatic grass. It has a chewy texture and earthy flavor, ideal for salads and soups.",
        image: "img/Wild.jpg"
    },
    brown: {
        description: "Brown rice is a whole-grain rice with the inedible hull removed, retaining more nutrients and fiber than white rice.",
        image: "img/brown.jpg"
    },
    black: {
        description: "Black rice, also known as forbidden rice, is a nutrient-rich grain with a slightly sweet, nutty flavor and dark color.",
        image: "img/black.jpg"
    },
    bs_basmati: {
        description: "Beras Basmati adalah beras berbutir panjang dan harum yang biasa ditanam di India dan Pakistan. Dikenal karena teksturnya yang lembut dan rasa kacangnya.",
        image: "../../img/basmathi.jpg"
    },
    bs_jasmine: {
        description: "Beras Jasmine adalah beras berbutir panjang yang harum dan sedikit lengket, yang terutama ditanam di Thailand. Ideal untuk tumisan dan kari.",
        image: "../../img/jas.jpg"
    },
    bs_arborio: {
        description: "Beras Arborio adalah beras pendek asal Italia yang dikenal dengan tekstur krimnya, sempurna untuk risotto dan puding.",
        image: "../../img/boro.jpg"
    },
    bs_wild: {
        description: "Beras liar adalah biji-bijian yang dipanen dari rumput air. Memiliki tekstur kenyal dan rasa bumi, ideal untuk salad dan sup.",
        image: "../../img/Wild.jpg"
    },
    bs_brown: {
        description: "Beras cokelat adalah beras gandum utuh dengan lapisan luar yang tidak bisa dimakan, mempertahankan lebih banyak nutrisi dan serat dibandingkan beras putih.",
        image: "../../img/brown.jpg"
    },
    bs_black: {
        description: "Beras hitam, juga dikenal sebagai beras terlarang, adalah biji-bijian kaya nutrisi dengan rasa manis dan kacang yang sedikit serta warna gelap.",
        image: "../../img/black.jpg"
    },
    cn_basmati: {
        description: "巴斯马蒂米是一种长粒香米，通常种植在印度和巴基斯坦。以其松软的口感和坚果味著称。",
        image: "../../img/basmathi.jpg"
    },
    cn_jasmine: {
        description: "茉莉米是一种香气四溢的长粒米，略带粘性，主要种植在泰国。非常适合炒菜和咖喱。",
        image: "../../img/jas.jpg"
    },
    cn_arborio: {
        description: "阿波里奥米是一种意大利短粒米，以其奶油般的口感而闻名，完美适合做烩饭和布丁。",
        image: "../../img/boro.jpg"
    },
    cn_wild: {
        description: "野米是一种从水生草类收获的谷物。它具有咀嚼感和泥土味，非常适合做沙拉和汤。",
        image: "../../img/Wild.jpg"
    },
    cn_brown: {
        description: "糙米是一种保留外壳的全谷米，保留了比白米更多的营养和纤维。",
        image: "../../img/brown.jpg"
    },
    cn_black: {
        description: "黑米，也被称为禁忌米，是一种营养丰富的谷物，具有略带甜味和坚果味的风味，颜色较深。",
        image: "../../img/black.jpg"
    },
    fr_basmati: {
        description: "Le riz Basmati est un riz à grains longs et parfumé, cultivé principalement en Inde et au Pakistan. Il est connu pour sa texture tendre et son goût de noisette.",
        image: "../../img/basmathi.jpg"
    },
    fr_jasmine: {
        description: "Le riz Jasmine est un riz à grains longs, parfumé et légèrement collant, principalement cultivé en Thaïlande. Idéal pour les sautés et les currys.",
        image: "../../img/jas.jpg"
    },
    fr_arborio: {
        description: "Le riz Arborio est un riz court d'Italie, connu pour sa texture crémeuse, parfait pour le risotto et les puddings.",
        image: "../../img/boro.jpg"
    },
    fr_wild: {
        description: "Le riz sauvage est une graine récoltée à partir de graminées aquatiques. Il a une texture moelleuse et un goût terreux, idéal pour les salades et les soupes.",
        image: "../../img/Wild.jpg"
    },
    fr_brown: {
        description: "Le riz brun est un riz complet avec une couche extérieure non comestible, conservant plus de nutriments et de fibres que le riz blanc.",
        image: "../../img/brown.jpg"
    },
    fr_black: {
        description: "Le riz noir, également connu sous le nom de riz interdit, est un grain riche en nutriments avec une saveur légèrement sucrée et de noisette, et une couleur foncée.",
        image: "../../img/black.jpg"
    },
    de_basmati: {
        description: "Basmati-Reis ist ein langkörniger und aromatischer Reis, der hauptsächlich in Indien und Pakistan angebaut wird. Er ist bekannt für seine weiche Textur und seinen nussigen Geschmack.",
        image: "../../img/basmathi.jpg"
    },
    de_jasmine: {
        description: "Jasminreis ist ein duftender, langkörniger Reis mit einer leicht klebrigen Textur, der vor allem in Thailand angebaut wird. Ideal für gebratene Reisgerichte und Currys.",
        image: "../../img/jas.jpg"
    },
    de_arborio: {
        description: "Arborio-Reis ist ein kurzer Reis aus Italien, der für seine cremige Textur bekannt ist. Er eignet sich hervorragend für Risotto und Pudding.",
        image: "../../img/boro.jpg"
    },
    de_wild: {
        description: "Wildreis ist ein Getreide, das aus Wassergras geerntet wird. Er hat eine zähe Textur und einen erdigen Geschmack und eignet sich perfekt für Salate und Suppen.",
        image: "../../img/Wild.jpg"
    },
    de_brown: {
        description: "Brauner Reis ist Vollkornreis mit einer ungenießbaren äußeren Schale, die mehr Nährstoffe und Ballaststoffe enthält als weißer Reis.",
        image: "../../img/brown.jpg"
    },
    de_black: {
        description: "Schwarzer Reis, auch als verbotener Reis bekannt, ist ein nährstoffreiches Getreide mit einem leicht süßen und nussigen Geschmack und einer dunklen Farbe.",
        image: "../../img/black.jpg"
    },
    ja_basmati: {
        description: "バスマティ米は、インドとパキスタンでよく栽培される長粒で香り高い米です。柔らかな食感とナッツのような風味で知られています。",
        image: "../../img/basmathi.jpg"
    },
    ja_jasmine: {
        description: "ジャスミン米は、タイで主に栽培される香り高い長粒米で、やや粘り気があります。炒め物やカレーに最適です。",
        image: "../../img/jas.jpg"
    },
    ja_arborio: {
        description: "アルボリオ米は、クリーミーな食感で知られるイタリア産の短粒米で、リゾットやプリンに最適です。",
        image: "../../img/boro.jpg"
    },
    ja_wild: {
        description: "ワイルドライスは、水草から収穫される穀物で、弾力のある食感と土のような風味があり、サラダやスープに最適です。",
        image: "../../img/Wild.jpg"
    },
    ja_brown: {
        description: "ブラウンライスは、外皮が食べられない全粒米で、白米よりも多くの栄養素と繊維を保持しています。",
        image: "../../img/brown.jpg"
    },
    ja_black: {
        description: "黒米、または禁断の米は、甘くナッツのような風味があり、栄養価が高く、暗い色の穀物です。",
        image: "../../img/black.jpg"
    }  
    
};

// Elements
const riceItems = document.querySelectorAll(".rice-types-rcp li");
const descriptionBox = document.getElementById("description");
const riceImage = document.getElementById("rice-image");

// Event Listeners
riceItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        const riceType = item.getAttribute("data-rice");
        const data = riceData[riceType];

        // Update description
        descriptionBox.textContent = data.description;
        descriptionBox.style.display = "block";

        // Update image
        riceImage.src = data.image;
        riceImage.alt = `${riceType} Image`;
    });

    item.addEventListener("mouseout", () => {
        descriptionBox.style.display = "none";
    });
});
