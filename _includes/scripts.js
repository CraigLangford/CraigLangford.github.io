data = {"inputMessage": "abc"};

$.ajax({
      url:"https://3m3n85aoxb.execute-api.eu-west-1.amazonaws.com/SHA256/",
      type: "POST",
      dataType: "json",
      data: JSON.stringify(data),
      success: function(response) {
          alert(response.messageDigest);
      },error: function(data) {
          alert("Fail");
      }
});
