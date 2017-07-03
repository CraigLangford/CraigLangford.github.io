data = {"inputMessage": "abc"};

$.ajax({
      url:"https://3m3n85aoxb.execute-api.eu-west-1.amazonaws.com/SHA256",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          "Access-Control-Allow-Methods": "POST"
      },
      type: "POST",
      dataType: "application/json",
      data: JSON.stringify(data),
      success: function(data) {
          alert("Success");
      },error: function(data) {
          alert("Fail");
      }
});
