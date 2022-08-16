const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)




const products = [
    {
      id: 1,
      title: "Air Force",
      price: 199,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 179,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 159,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 139,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 119,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
// wrapper.style.transform = 'translateX(-00vw)'

const wrapper =$('.sliderWrapper')
const menuItem = $$('.menuItem')

let choosenProduct = products[0]

const currentProductImg = $('.productImg')
const currentProductTitle = $('.productTitle')
const currentProductPrice = $('.productPrice')
const currentProductColors = $$('.color')
const currentProductSize = $$('.size')

menuItem.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
      
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        choosenProduct = products[index]
        // currentProductImg.src =  products[title].src
        currentProductTitle.innerText = choosenProduct.title
        currentProductPrice.innerText = choosenProduct.price + '$'
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index)=>{
          // change bg color products
          color.style.backgroundColor = choosenProduct.colors[index].code
          // change img when click bg color
        })
    })
})

// change img when click bg color
currentProductColors.forEach((color, index)=>{
  color.addEventListener('click', ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSize.forEach((size, index)=>{
  size.addEventListener('click', ()=>{

    // run first, fill color in all size
    currentProductSize.forEach((size, index)=>{
      size.style.color = 'black'
      size.style.background = 'white'
    })

    // then fill again for only size clicked
    size.style.color = 'white'
    size.style.background = 'black'

  })
})


 const productBtn = $('.productBtn')
 const closePayment = $('.close')
 const payment = $('.payment')

 productBtn.addEventListener('click', ()=>{
  payment.style.display = 'flex'
 })

 closePayment.addEventListener('click', ()=>{
  payment.style.display = 'none'
 })