var appRouter = function(app) {
    app.get("/hello", function(req, res) {
        res.send('{ "result": "Hello World" }');
    });
}

module.exports = appRouter;