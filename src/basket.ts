import './style.css'

const basket = localStorage.basket ? JSON.parse(localStorage.basket) : []

let sum = 0

basket.forEach((el:any)=>{
  document.body.insertAdjacentHTML('beforeend', renderCard(el))
  sum += el.price * el.count
})

document.body.insertAdjacentHTML('beforeend', `
  <p>Итого ${sum}$ <button>Оплатить</button></p> 
`)

function renderCard(el: any) {
  return `
  <div style="display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px">
    <img style="min-width:200px" href="${el.image}">
    <div>
      <h4>${el.name}</h4>  
      <p>${el.description}</p>
      <p style="display:flex; justify-content: space-between;">
        <span>${el.price}</span>
        <span>${el.count}</span>
        <span>${el.price* el.count}$</span>
      </p>
    </div>
  </div>
  `
}