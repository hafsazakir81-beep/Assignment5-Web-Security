let port = process.env.PORT || 3000;

if (process.env.PORT) {
    console.log("Port: " + port);
} else {
    console.log("Default Port: 3000");
}