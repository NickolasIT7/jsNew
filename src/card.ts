import './style.css'
const cards = document.querySelectorAll('.memory-card') as NodeListOf<HTMLDivElement>
const startGame = document.querySelector('#startGame') as HTMLButtonElement
const cardsSvg = ['7','8','king_diamonds','king','8','king','king_diamonds','7'] 
const shuffleArray = (array:any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

let isGameRun = false
let showPause = false
let card1: Element|undefined
let card2: Element|undefined

document.body.addEventListener('click', (e:MouseEvent) => {

  if (e.target == startGame) {
    isGameRun = !isGameRun
    if (isGameRun) {
      startGame.textContent = 'Finish'
      shuffleArray(cardsSvg)
      cards.forEach((el,i) => {
        (el.querySelector('.front-face') as HTMLImageElement).src = 'images/'+cardsSvg[i]+'.svg'   
      })
    } else {
      startGame.textContent = 'Start'
      cards.forEach(el => {
        el.classList.remove('flip')
      })
    }
  }

  const card = (e.target as HTMLElement).closest('.memory-card')
  
  if (card && isGameRun && !showPause) {
    card.classList.toggle('flip')
    if (card.classList.contains('flip')) {
      if (!card1) {
        card1 = card
      } else {
        card2 = card
      }
      if (card1 && card2) {
        // check value
        if ((card1.querySelector('.front-face') as HTMLImageElement).src == (card2.querySelector('.front-face') as HTMLImageElement).src) {
          // if same value clear cards
          console.log('true')
          card1 = card2 = undefined
        } else {
          console.log('false')
          // if not same -> clear cards and toggle flip
          showPause = true
          setTimeout(()=>{
            showPause = false            
            card1?.classList.toggle('flip')
            card2?.classList.toggle('flip')
            card1 = card2 = undefined
          },3000)
        }
      }
    }
  }
})