import './style.css'

let items = {} as any []
let basket = {} as any []
function download() {
    fetch('https://fakerapi.it/api/v1/products?_quantity=10') // Запрос данных с серверав
        .then(responce => responce.json())
        .then(data => {
            console.log(data)
            for (let el of data.data) {
                document.body.appendChild('beforeend', renderCard(el)) // рендерим карточки, добавляя их в конец body
            }
        })
        .catch(e=>console.log(e))
}

const downloadButton = document.createElement('button')
downloadButton.textContent = 'Загрузить товары'
downloadButton.addEventListener('click', download)
document.body.insertAdjacentHTML(downloadButton)

function renderCard(el: any) {

    return `
    <div style="display:flex"; margin:0 auto; max-width:700px; padding: 20px; gap: 20px>
    <img style="min-width:200px" href=$
    </div>
    `
//     const cardDiv = document.createElement('div')   // создаём родительский div, в кот. будем добавлять данные
//     cardDiv.style.display = 'flex'
//     cardDiv.style.margin = '0 auto'
//     cardDiv.style.maxWidth = '700px'
//     cardDiv.style.padding = '20px'
//     cardDiv.style.gap = '20px'
//     const cardImage = document.createElement('img') // создали картинку
//     cardImage.setAttribute('href', el.image)
//     cardImage.style.minWidth = '200px'
//     cardDiv.appendChild(cardImage)                  // Поместили картинку в корневой div
//     const dataDiv = document.createElement('div')   // создали div для текстовых данных
//     const cardH4 = document.createElement('h4')
//     cardH4.textContent = el.name
//     cardH4.addEventListener('click', () => { alert(el.name) })
//     const cardDescr = document.createElement('p')
//     cardDescr.textContent = el.description
//     const cardPrice = document.createElement('p')
//     cardPrice.textContent = el.price
//     dataDiv.appendChild(cardH4)
//     dataDiv.appendChild(cardDescr)
//     dataDiv.appendChild(cardPrice)
//     cardDiv.appendChild(dataDiv)                     // добавили div с текстовыми данными в корневой div
//     return cardDiv                                   // вернули заполненных данными кореневой div
// 
}


download()