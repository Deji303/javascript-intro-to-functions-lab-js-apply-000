function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper(sting) {
  return console.log(sting.toLowerCase())
}

function sayHiToGrandma(string) {
  let lowercase = string ;
  if (lowercase === string.toLowerCase() ){
    return "I can't hear you!"
  }
}