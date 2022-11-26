const displayParent = document.getElementById('display')
const display = document.getElementById('display_text')
const text = document.getElementById('display_text').value
const button_one = document.getElementById('one')
const button_two = document.getElementById('two')
const button_three = document.getElementById('three')
const button_four = document.getElementById('four')
const button_five = document.getElementById('four')
const button_six = document.getElementById('six')
const button_seven = document.getElementById('seven')
const button_eight = document.getElementById('eight')
const button_nine = document.getElementById('nine')
const button_delete = document.getElementById('delete')
const button_divide = document.getElementById('divide')
const button_multiply = document.getElementById('multiply')
const button_substract = document.getElementById('substract')
const button_add = document.getElementById('add')
const button_equal = document.getElementById('equal')
const button_cero = document.getElementById('cero')
const button_dot = document.getElementById('dot')

const digits = document.querySelectorAll('.digit')



button_delete.addEventListener('click', () => {
    display.textContent = ''
    

})



digits.forEach( number => {
    number.addEventListener('click' , () => {
       display.textContent = display.textContent + number.textContent
       

    })

})

button_equal.addEventListener('click', () => {
    display.textContent = eval(display.textContent)
})

