const http = require("http");
const port = 3000;

const handler = (request, response) =>
{
    console.log("nowy użytkownik");
    response.end("Siema ziom")
}

const server = http.createServer(handler);

server.listen(port, (err) =>
{
    if(err)
    {
        console.log("Bład serwera");

    }
    console.log("serwer wystartował");


});
