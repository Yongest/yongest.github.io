
$.ajax({
    url:'http://139.199.192.48:9090/api/getsitenav',
    dataType:"jsonp",
    success:function(data){
      var result = template("getData",data);
      console.log(data)
     $(".main_contain ul").html(result);
     
    }


})