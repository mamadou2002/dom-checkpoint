var total=0
var quantites=document.getElementsByClassName('input-filed')
var prices=document.getElementsByClassName('price')
console.log(quantites);
console.log(prices);
function increment(e){
    var buttonClicked= e.target ;
    var input = buttonClicked.parentElement.children  
    console.log(buttonClicked);
    var input = buttonClicked.parentElement.children[3];

    //stock input value as text
    var inputValue = input.value;

    //parse input value into number
    inputValue = parseInt(inputValue)
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;

    // update total
    total=0
    ttl()
    console.log(total)

}
function decrement(e){
    var buttonClicked= e.target ;
    var input = buttonClicked.parentElement.children  
    console.log(buttonClicked);
    var input = buttonClicked.parentElement.children[3];
    //stock input value as text
    var inputValue = input.value;
    console.log(quantites);

    //parse input value into number
    inputValue = parseInt(inputValue)

    var newValue = parseInt(inputValue) - 1;

    input.value = newValue;
}
function supp(e){
    var deleteButton = e.target;
    var parent= deleteButton.parentElement
    var grandParent= parent.parentElement
    grandParent.remove()
    alert('ARTICLE SUPPRIMER DU PANIER')
    
}
function like(e){
    var likeButton = e.target
    likeButton.style.color = 'red'
}
function ttl(){
    for( var price of prices){
        for( var quantite of quantites){
            var priceValue = parseInt(price.value)
            var quantiteValue = parseInt(quantite.value)
            total+= priceValue*quantiteValue
        }
    
    }
    
}
console.log(total)

