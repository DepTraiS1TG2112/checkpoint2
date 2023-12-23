let menu = ['rau xào', 'thịt luộc', 'gà rán'];
function create(){
    let i = document.getElementById("text1").value
    menu.push(i)
    console.log(menu);
}
function read(){
    alert(menu.join(", "))
}
function update(){
    let updateFood = prompt("Mời người dùng nhập vào tên món muốn update")
    let newItem = menu.indexOf(updateFood)
    if (newItem != -1){
        let newFood = prompt("Mời người dùng nhập vào tên món ăn mới")
        menu.splice(newItem,1, newFood)
        alert(menu.join(", ")
        )
    }
    else{
        alert("Món ăn o tồn tại")
    }
}
function delet(){
    let deletedFood = prompt("Mời người dùng nhập vào tên món muốn update")
    let deletedItem = menu.indexOf(deletedFood)
    if(deletedItem != -1 ){
        menu.splice(deletedItem,1)
        alert(menu.join(", "))
    }
    else{
        alert("Món ăn o tồn tại")
    }
}