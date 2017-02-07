function itemBuy()
{
ticket = 25.99
CD = 5.95
tshirt = 4.51
product = prompt ("Please enter product to be purchased", "")
if (product == "ticket") {
op1 = "You have purchased a ticket: &pound;"
document.getElementById("bought").innerHTML = op1 + ticket
}
else
if (product == "CD") {
op2 = "You have purchased a CD: &pound;"
document.getElementById("bought").innerHTML = op2 + CD
}
else
if (product == "tshirt") {
op3 = "You have purchased a tshirt: &pound;"
document.getElementById("bought").innerHTML = op3 + tshirt
}
else
if (product == "") {
op4 = "You have purchased nothing: &pound;0.00"
document.getElementById("bought").innerHTML = op4
}
}