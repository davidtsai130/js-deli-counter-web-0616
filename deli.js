var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function currentLine(line) {
  if (line.length === 0) { return "The line is currently empty." } 

  var people = []
  for (let i = 0; i < line.length; i++) {
    people.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${people.join(', ')}`
}

function nowServing(line) {
  if (line.length === 0 ) { return "There is nobody waiting to be served!" }
    return `Currently serving ${line.shift()}.`
}