const display = document.querySelector('.display')

const ids = [
  '1', '2','3','4','5','6','7','8','9','0','/','*','+','-','(',')','**','$','c','arrow','='
]

window.addEventListener('click', e => {
    if(ids.some(item => {
      return e.target.id === item
    })
  ) {
    if(e.target.id === '$') {

        let calculated = eval(display.innerText)

        display.innerText = Math.round(calculated)

    } else if(e.target.id === '=') {

        let calculated = eval(display.innerText)

        display.innerText = calculated

     }else if(e.target.id === 'c') {

         display.innerText = ''
       }else if(e.target.id === 'arrow') {

           display.innerText = display.innerText.slice(0, -1)
         }else{

         display.innerText = display.innerText + '' + e.target.id

      }
    }
})
// ( ) ^ * /
