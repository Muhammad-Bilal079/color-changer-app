let colors  = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC']

let colorName = document.querySelector('#span')
let containerColor = document.querySelector('.container')
let bgColor = document.querySelector('#bgcolor')

function colorhandler() {

    var randomcolor = Math.floor((Math.random() * colors.length - 1) + 1)
    var colorValue = colors[randomcolor]
    document.body.style.backgroundColor = colorValue
    colorName.textContent = colors[randomcolor]
   
}