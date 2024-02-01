
class password{
  constructor(){
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.lowercase = "abcdefghijklmnopqrstuvwxyz"
    this.number = "1234567890"
    this.symbol = "!£$%^&*()_?><|~"
    
    this.weakpassword = document.getElementById("weakpass")
    this.funnypassword = document.getElementById("funnypass")
    this.strongpassword = document.getElementById("strongpass")
    this.superstronpassword = document.getElementById("superstrongpass")
  }
  
  WeakPassword(){
    let PasswordGenerated = ""
    for(let i=0;i<2;i++){
      let upperrandom = this.uppercase[Math.floor(Math.random()*this.uppercase.length)]
      let lowerrandom = this.lowercase[Math.floor(Math.random()*this.lowercase.length)]
      PasswordGenerated += upperrandom+lowerrandom
    }
    return PasswordGenerated
  }

  FunnyPassword(){
    let funnypass = ["incorrect","password","12345","forgot","invalid","tryagain"]
    return funnypass[Math.floor(Math.random()*funnypass.length)]
  }

  StrongPassword(){
    let PasswordGenerated = ""
    for(let i=0;i<2;i++){
      let upperrandom = this.uppercase[Math.floor(Math.random()*this.uppercase.length)]
      let lowerrandom = this.lowercase[Math.floor(Math.random()*this.lowercase.length)]
      let numberrandom = this.number[Math.floor(Math.random()*this.number.length)]
      let symbolrandom = this.symbol[Math.floor(Math.random()*this.symbol.length)]

      PasswordGenerated += upperrandom+lowerrandom+numberrandom+symbolrandom
    }
    return PasswordGenerated
  }
  
  SuperStronPassword(){
    let PasswordGenerated = ""
    for(let i=0;i<3;i++){
      let upperrandom = this.uppercase[Math.floor(Math.random()*this.uppercase.length)]
      let lowerrandom = this.lowercase[Math.floor(Math.random()*this.lowercase.length)]
      let numberrandom = this.number[Math.floor(Math.random()*this.number.length)]
      let symbolrandom = this.symbol[Math.floor(Math.random()*this.symbol.length)]

      PasswordGenerated += upperrandom+lowerrandom+numberrandom+symbolrandom
    }
    return PasswordGenerated
  }
}

let ram = new password

document.getElementById("btn").addEventListener("click",(e)=>{

  e.preventDefault()
  if(ram.weakpassword.checked){
    document.getElementById("generated").innerHTML = ram.WeakPassword()
  }else if(ram.funnypassword.checked){
    document.getElementById("generated").innerHTML = ram.FunnyPassword()
  }else if(ram.strongpassword.checked){
    document.getElementById("generated").innerHTML = ram.StrongPassword()
  }else if(ram.superstronpassword.checked){
    document.getElementById("generated").innerHTML = ram.SuperStronPassword()
  }else{
    alert("Please Select Your Preferece")
    return
  }
})