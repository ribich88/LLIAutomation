module.exports = function (options) {
  // setup src option 
  // check if --test flag is passed


options: {
      timeout: 30000,
      reporter: "spec",
      hostname: "127.0.0.1",
      port: "4444",
      slow: 10000
    },

    LLIHomePage: {
      src: [
        "/" + src
      ],
      options: {
        usePromises: true,
        //require: ["./lib/wdHelperAsserters", "./lib/wdHelperFunctions"],
        browsers: [
          {
            browserName: "chrome"
          }
        ]
      }
    }


}