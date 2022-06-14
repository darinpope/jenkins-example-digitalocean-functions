function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Goodbye ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }
  