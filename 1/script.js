const getS = selector => document.querySelector(selector);

// start function edit-save

getS('.btn-edit').addEventListener('click', function(){
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    const content = getS('.top-block').innerHTML;
    getS('.edit-area').value = content;
})

getS('.btn-save').addEventListener('click', function(){
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value; 
})

// end function edit-save

// start function show style

getS('.btn-style').addEventListener('click', function(){
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})

// end function show style

// start function font-size 

function fontSize (){
  getS('.top-block').style.fontSize = event.target.value;

}
// end  function font-size 

// start function font-family 

let fontFamily = document.style.family;
fontFamily.addEventListener('change', function(e){
    getS('.top-block').style.fontFamily = event.target.value;
})
 
// end function font-size 



// start function colors 

let colors = [' rgb(251, 7, 7)', 'rgb(72, 124, 96)', 'rgb(25, 0, 255)', 'rgb(229, 255, 0)', 'rgb(0, 255, 47)', 'rgb(0, 255, 221)', 'rgb(15, 54, 3)', 'rgb(255, 162, 0)', 'rgb(255, 0, 179)'];
for (let i = 0; i < getS('.text-colors').children.length; i++) {
    getS('.text-colors').children[i].style.backgroundColor = colors[i];
    getS('.background-colors').children[i].style.backgroundColor = colors[i];
    getS('.text-colors').children[i].addEventListener('click', function(){
        getS('.top-block').style.color = this.style.backgroundColor;
        getS('.text-colors').classList.add('hide');
    })
    getS('.background-colors').children[i].addEventListener('click', function(){
        getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        getS('.background-colors').classList.add('hide');
    })
}
getS('.btn-text-color').addEventListener('click', function(){
    getS('.text-colors').classList.remove('hide');
})

getS('.btn-background-color').addEventListener('click', function(){
    getS('.background-colors').classList.remove('hide');
})

// end function colors 


// start function font-style

getS('.check-bold').addEventListener('click', function(){
    getS('.check-bold').checked ?  getS('.top-block').classList.add('bold') : getS('.top-block').classList.remove('bold');
})
getS('.check-cursive').addEventListener('click', function(){
    getS('.check-cursive').checked ?  getS('.top-block').classList.add('cursive') : getS('.top-block').classList.remove('cursive');
})

// end function font-style

// start function change first-second block(show add blocks)

getS('.btn-add').addEventListener('click', function(){
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');

})


// end function change first-second block(show add blocks)


// start function change table-list  block

document.forms['table-list'].addEventListener('click', function(){
   if(event.target.id === 'list'){
    getS('.list').classList.remove('hide')
    getS('.table').classList.add('hide')
   }
   if(event.target.id === 'table'){
    getS('.table').classList.remove('hide')
    getS('.list').classList.add('hide')
    }
})

// end function change table-list  block

// start function list item

getS('.btn-create-list').addEventListener('click', function(){
    const list = document.forms[2];
   const countLi = list[0].value;
    const typeLi = list[1].value;
    getS('.edit-area').value += `<ul style = "list-style-type : ${typeLi}">`;
    for(let i = 0; i<countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
})

// end function list item

// start function table

getS('.btn-create-table').addEventListener('click', function(){
    const table = document.forms[3];
    const countTR = table[0].value;
    const countTD = table[1].value;
    const width = table[2].value;
    const height = table[3].value;
    const widthBorder = table[4].value;
    const typeBorder = table[5].value;
    const colorBorder = table[6].value;
    getS('.edit-area').value += `<table> <tbody>`;
    for(let i = 0; i<countTR; i++){
        getS('.edit-area').value += `<tr>`
        for(let j = 0; j<countTD; j++){
            getS('.edit-area').value += `<td style="width:${width}px; height:${height}px; border:${widthBorder}px ${typeBorder} ${colorBorder}">TD</td> `;
        }
        getS('.edit-area').value += `</tr>`;
        
    }
    getS('.edit-area').value += '</tbody> </table>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
})

// end function table
