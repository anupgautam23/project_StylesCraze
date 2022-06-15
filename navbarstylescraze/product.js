let products = [
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/09/Best-Nail-Polish-Colors-For-Olive-Tan-Light-Medium-Skins.jpg.webp",
    Name: "Nail Art",
    head: "Best Nail Polish Colors That Look Great On All Skin",
    decription:
      "A well-done coat of nail polish can make your hands look appealing. And there are some nail colors that look best on medium skin, some on olive skin, and some on",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/15-Best-Hairstyling-Products-For-All-Hair-Types-banner.jpg.webp",
    Name: "Hair Styles",
    head: "17 Best Hairstyling Products As Per Women Hair Stylists",
    decription:
      "Using the best hair styling products can give the edge to the hairstyle you have always wanted to flaunt. Be it a hair cream, hair spray, foam, or mousse, using the",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/04/1274-10-Best-Foundations-For-Asian-Skin-Tone-ss.jpg.webp",
    Name: "Face Makeup",
    head: "10 Best Foundations For Asian Skin Tone",
    decription:
      "A foundation helps cover all imperfections, blemishes, and dark spots on your skin. However, finding the best foundation for Asain skin",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/09/How-To-Apply-Makeup-For-Teens.jpg.webp",
    Name: "Face Makeup",
    head: "The 7 Best Makeup Products For Teens That",
    decription:
      "As a teenager, you are most probably enthusiastic to try out lip liner, eye shadow, lip gloss, lipstick, mascara, and other makeup products. But do teenagers apply",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/08/How-To-Get-Dewy-Skin-%E2%80%93-Easy-Tips.jpg.webp",
    Name: "Beauty Secrets",
    head: "How To Get Dewy Skin: Best Products To Achieve",
    decription:
      "Constantly wondering how to get dewy skin? Well, the answer resides right in the post! These days dewy skin is the most significant beauty trend. From",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/03/3450-Awesome-Must-Have-Makeup-Items-For-Beginners-ss.jpg.webp",
    Name: "Makeup Ideas",
    head: "The 11 Best Makeup Products For Beginners,",
    decription:
      "If you are a novice in the makeup world, you might have tons of questions in your mind regarding makeup, makeup kits, brushes, and more.",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/10/21-Best-Anti-Aging-Eye-Creams-Of-2020-That-Work-Wonders-Banner-SC.jpg.webp",
    Name: "Articles",
    head: "21 Best Anti-Aging Eye Creams You Must Try In",
    decription:
      "The skin around our eyes is very sensitive and delicate. Just moisturizing is not enough for this area. The best anti-aging eye creams provide overall",
    read: "Read More"
  },
  {
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2012/10/15-Best-Foundations-For-Sensitive-Skin.jpg.webp",
    Name: "Face Makeup",
    head: "The 15 Best Foundations For Sensitive Skin You Can..",
    decription:
      "If you have sensitive skin, finding the right foundation might be challenging. This is because sensitive skin can often have breakouts,",
    read: "Read More"
  },
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/12/150-shutterstock_234270049.jpg.webp" ,Name:"Makeup Ideas",head:"18 Best Makeup Brushes To Add To Your Beauty Kit",decription:"Makeup brushes are essential tools that help you apply makeup smoothly and get an even, natural-looking finish. There are different types of",read:"Read More"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/12/10-Of-The-Best-Cream-Foundations-Out-There.jpg.webp" ,Name:"Face Makeup",head:"10 Best Cream Foundations In The",decription:"A cream foundation is a thick creamy makeup base that offers a great finish and even coverage. These foundations help to conceal blemishes, dark",read:"Read More"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/07/20-Must-Have-Products-For-Wavy-Hair-Banner-SC.jpg.webp" ,Name:"Hair Care Ideas",head:"18 Best Products For Wavy Hair (2022) – Tips &",decription:"Wavy hair needs a lot of moisturizing to keep it balanced and conditioned. The best products for wavy hair can strike a balance between",read:"Read More"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/02/Best-Cleansers-For-Oily-Skin-Our-Top-15-Picks-For-2019.jpg.webp" ,Name:"Oily Skin",head:"Best Cleansers For Oily Skin: Top 10 Choices In",decription:"Too much of anything is bad. This is especially true when it comes to oily skin. The natural oils in your skin help maintain the skin barrier. However, they can",read:"Read More"}
  
];
let productCont = document.getElementById("grid_box");

function displayProduct() {
  products.forEach(function (ele) {
    let prod = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.image;
    let name = document.createElement("p");
    name.innerText = ele.Name;
    let head = document.createElement("p");
    head.innerText = ele.head;
    let desc = document.createElement("p");
    desc.innerText = ele.decription;
    let read =document.createElement("p");
    read.innerText=ele.read;
    prod.append(image, name, head, desc,read);
    productCont.append(prod);
  });
}
displayProduct(products);
