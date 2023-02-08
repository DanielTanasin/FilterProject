
const sneakers = [

        {   brand:"Nike",
            name:"Nike Aquaris Renzo 7",
            img:"nike1.jpg", price:125,
            dollar:'$',
            button:'Add to cart',
            value:'all'  
            
        },
    
        {   brand:"Nike",
            name:"Nike Edge 5", 
            img:"nike2.jpg", 
            price:70, 
            dollar:'$', 
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Nike", 
            name:"Nike Air XY",
            img:"nike3.jpg",
            price:110,
            dollar:'$',
            button:'Add to cart',
            value:'all',
            name: "Nike Air XY"
        },

        {   brand:"Adidas",
            name:"Adidas Predator Rx", 
            img:"adidas1.jpg",
            price:65,
            dollar:'$',
            button:'Add to cart',
            value:'all'
    
        },

        {   brand:"Adidas",
            name:"Adidas Global ",
            img:"adidas2.jpg", 
            price:90, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Adidas",
            name:"Adidas End", 
            img:"adidas3.jpg", 
            price:105, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Puma",
            name:"Puma Jamaican Alien",
            img:"puma1.jpg",
            price:75, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Puma",
            name:"Puma Wakanda ",
            img:"puma2.jpg",
            price:55,
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Puma",
            name:"Puma Instict",
            img:"puma3.jpg",
            price:90,
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Reebok",
            name:"Reebok Dok",
            img:"re1.jpg",
            price:60,
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Reebok",
            name:"Reebok Rdy? ", 
            img:"re2.jpg",
            price:50, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Reebok",
            name:"Reebok Fly",
            img:"re3.jpg",
            price:65, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Under Armour",
            name:"Under Amour Infinity",
            img:"ua1.jpg",
            price:100, 
            dollar:'$', 
            button:'Add to cart',
            value:'all'
            
        },

];

const sneakers2 = [

        {   brand:"Nike",
            name:"Nike Aquaris Renzo 7",
            img:"nike1.jpg", price:125,
            dollar:'$',
            button:'Add to cart',
            value:'all'  
            
        },
    
        {   brand:"Nike",
            name:"Nike Edge 5", 
            img:"nike2.jpg", 
            price:70, 
            dollar:'$', 
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Nike", 
            name:"Nike Air XY",
            img:"nike3.jpg",
            price:110,
            dollar:'$',
            button:'Add to cart',
            value:'all',
            name: "Nike Air XY"
        },

        {   brand:"Adidas",
            name:"Adidas Predator Rx", 
            img:"adidas1.jpg",
            price:65,
            dollar:'$',
            button:'Add to cart',
            value:'all'
    
        },

        {   brand:"Adidas",
            name:"Adidas Global ",
            img:"adidas2.jpg", 
            price:90, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Adidas",
            name:"Adidas End", 
            img:"adidas3.jpg", 
            price:105, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Puma",
            name:"Puma Jamaican Alien",
            img:"puma1.jpg",
            price:75, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Puma",
            name:"Puma Wakanda ",
            img:"puma2.jpg",
            price:55,
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Puma",
            name:"Puma Instict",
            img:"puma3.jpg",
            price:90,
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Reebok",
            name:"Reebok Dok",
            img:"re1.jpg",
            price:60,
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Reebok",
            name:"Reebok Rdy? ", 
            img:"re2.jpg",
            price:50, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Reebok",
            name:"Reebok Fly",
            img:"re3.jpg",
            price:65, 
            dollar:'$',
            button:'Add to cart',
            value:'all'
        },

        {   brand:"Under Armour",
            name:"Under Amour Infinity",
            img:"ua1.jpg",
            price:100, 
            dollar:'$', 
            button:'Add to cart',
            value:'all'
            
        },

];



const btnAll = document.querySelector('.all');
const branBtns = document.querySelectorAll('.btn');
let row = document.querySelector('.fillter__row');
const higher = document.querySelector('.higher')
const sort = document.querySelector('.fillter__item')
const sortDrop = document.querySelector('.fillter__drop')
const sortHigher = document.querySelector('.higher')
const sortLower = document.querySelector('.lower')
const input = document.querySelector('.fillter__search')
const cardTemplate = document.createElement('div');
cardTemplate.classList.add('fillter__card');




cardTemplate.innerHTML = `
  <div class="img-box">
    <img class="card__img" >
  </div>

  <h2 class="card__name"></h2>
  <div class="card__box-box">
  <div class="card__price-box">
  <span class="card__number"></span>
  <span class="card__price"></span>
  </div>
    <button class="card__btn"></button>
  </div>
`;



const  generateCards = (sneakers) => {
    sneakers.forEach((obj) => {
      const card = cardTemplate.cloneNode(true);
      const img = card.querySelector('.card__img');
      img.src = `img/${obj.img}`;
      card.querySelector('.card__name').textContent = obj.name;
      card.querySelector('.card__price').textContent = obj.dollar;
      card.querySelector('.card__number').textContent = obj.price;
      card.querySelector('.card__btn').textContent = obj.button;
      row.appendChild(card);
    });

 
  }
const generateCardsTwo = (sneakers) => {
  const sortedSneakers = sneakers.sort((a, b) => a.price - b.price);
    sortedSneakers.forEach((obj) => {
      const card = cardTemplate.cloneNode(true);
      const img = card.querySelector('.card__img');
      img.src = `img/${obj.img}`;
      card.querySelector('.card__name').textContent = obj.name;
      card.querySelector('.card__price').textContent = obj.dollar;
      card.querySelector('.card__number').textContent = obj.price;
      card.querySelector('.card__btn').textContent = obj.button;
      row.appendChild(card);
    });

 
  }
  
  (function showSneakers() {
    const allSneakers = sneakers.filter(shoe => shoe.value === btnAll.textContent.toLocaleLowerCase());
    generateCards(allSneakers);
  })();
  
  branBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      row.innerHTML = '';
      const brandSneakers = sneakers.filter(shoe => shoe.brand === btn.textContent);
      const allSneakers = sneakers.filter(shoe => shoe.value === btn.textContent.toLocaleLowerCase());
      const sortedSneakers = brandSneakers.sort((a,b) => b.price - a.price)
      generateCards([...brandSneakers, ...allSneakers]);
    });
  });

  const openSort = () =>{

    if(!sort.classList.contains("fillter__item-active") &&
       !sortDrop.classList.contains('fillter__drop-active')){
      sort.classList.add("fillter__item-active")
      sortDrop.classList.add("fillter__drop-active")
    }else {
      sort.classList.remove("fillter__item-active") 
      sortDrop.classList.remove("fillter__drop-active")    
    }
  }

  sort.addEventListener('click', openSort)


const sortHigherToLower = () => {
  let sortHigher = sneakers.sort((a, b) => b.price - a.price);
  row.innerHTML =''
 generateCards(sortHigher)


}

const sortLowerToHigher = () => {
  let sortLower = sneakers2.sort((a, b) => a.price - b.price);
  
  row.innerHTML =''
 generateCardsTwo(sortLower)
}


sortHigher.addEventListener('click', sortHigherToLower);
sortLower.addEventListener('click', sortLowerToHigher);





input.addEventListener('keyup' , (e) => {
  let value = input.value.toLowerCase().trim()

  let filteredSneakers = sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(value));
  row.innerHTML = ""
  generateCards(filteredSneakers)


})






fetch('companies.json')
.then(response => response.json())
.then(json => {
  console.log(json);
})

