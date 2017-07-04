$('#sha256form').submit(function(event) {
    event.preventDefault();

    var button = $('#id_sha256Button');
    button.html('Running Python...');
    button.attr('disabled', true);

    var inputMessage = $('#id_inputMessage').val();
    var data = {'inputMessage': inputMessage};

    $.ajax({
          url:"https://3m3n85aoxb.execute-api.eu-west-1.amazonaws.com/SHA256/",
          type: "POST",
          dataType: "json",
          data: JSON.stringify(data),
          success: function(response) {
              var button = $('#id_sha256Button');
              button.html('Run SHA-256');
              button.removeAttr('disabled');
              var outputDigest = $('#id_outputDigest');
              outputDigest.html(response.messageDigest);
          },error: function(data) {
              alert("Fail");
          }
    });
});
