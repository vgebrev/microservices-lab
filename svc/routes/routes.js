var appRouter = function(app) {
    app.get("/hello", function(req, res) {
        var now = new Date();
        res.send('{ "result": "Hello World", "timestamp": "'+ now.toString() +'" }');
    });
}

module.exports = appRouter;