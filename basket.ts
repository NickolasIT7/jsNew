import './style.css'

const basket = JSON.parse(localStorage.basket)

basket.forEach((el:any)=>{
document.body.insertAdjacentHTML('beforeend',renderCard(el))
sum +=el.price *el.count

})