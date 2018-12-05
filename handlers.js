function index (response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write('Hello nodejs!!')
    response.end()
}

function view (response) {
    console.log('request handler called --> view')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write('Hello View')
    response.end()
}

function create (response) {
    console.log('request handler called --> create')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write('Hello Create')
    response.end()
}

var handlers = {}
handlers['/'] = index
handlers['/view'] = view
handlers['/create'] = create

exports.handlers = handlers
