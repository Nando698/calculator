const displayParent = document.getElementById('display')
const display = document.getElementById('display_text')
const text = document.getElementById('display_text').value
const button_delete = document.getElementById('delete')
const button_equal = document.getElementById('equal')

const digits = document.querySelectorAll('.digit')



button_delete.addEventListener('click', () => {
    display.textContent = ''
    

})


digits.forEach( number => {
    
    //Clicking the pad
    number.addEventListener('click' , () => {
       display.textContent = display.textContent + number.textContent
       
    })

//Using the keyboard
    document.addEventListener('keydown', (e) => {
        if(e.key == number.textContent){
            display.textContent = display.textContent + number.textContent
        }
    })

})

//////////

button_equal.addEventListener('click', () => {
    display.textContent = eval(display.textContent)
})
document.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        display.textContent = eval(display.textContent)
    }
})
document.addEventListener('keydown', (e) => {
    if(e.key == "Delete"){
        display.textContent = ''
    }
})