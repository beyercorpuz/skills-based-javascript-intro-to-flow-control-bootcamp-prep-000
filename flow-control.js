function basicTeenager(age) {
  if (12 < age&&age < 20){
return  "You are a teenager!"
}

}

function teenager(age) {
  if (12 < age&&age < 20) {
    return  "You are a teenager!"

  }
  else {
    return  "You are not a teenager"

  }
}

function ageChecker(age) {
  if (12 < age&&age < 20){
  return  "You are a teenager!"
}
else if(13>age){

  return "You are a kid"
}
else if(20<age){

  return "You are a grownup"
}
}
function ternaryTeenager(age) {
    if (12 < age&&age < 20){
  return  "You are a teenager"
}
else if (13>age||age>19){
  return "You are not a teenager"
}
}
function switchAge(age){

switch (age)
{

case 13:
case 14:
case 15:
case 16:
case 17:
case 18:
case 19:
  return "You are a teenager"
  break;
  default:
    return "You have an age"
    break;


}

}
