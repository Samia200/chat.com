//profil photo change
const imgDiv = document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

file.addEventListener( 'change' , function(){
const choosedfile = this.files[0];

if (choosedfile){
const reader = new FileReader();

reader.addEventListener ('load', function(){
    img.setAttribute('src', reader.result);
});
reader.readAsDataURL (choosedfile);
}
});

//hide & show search bar
$(document).ready(function(){
    $("#plus").click(function(){
      $(".search").fadeToggle(function(){   
        if($('.search').css('display') == 'block')
          { 
           $(".user-contact").css({"margin-top": "36px"});
          }
          else{
            $(".user-contact").css({"margin-top": "10px"});
          }
    });
    });
  });
 
  //emoji button
  const button = document.querySelector('#emoji-button');

const picker = new EmojiButton();

button.addEventListener('click', () => {
  picker.togglePicker(button);
  
});

  picker.on('emoji', emoji => {
    document.querySelector('.form-control').value += emoji;
  });
   // light and dark mood button
   $(document).ready(function(){
     $('#toggle2').click(function(){
       $("#toggle2").css({"display":"none"});
       $("#toggle1").css({"display":"inline-block"});
       $("body").css({"background":"#A7C6D9"});
       $(".contact").css({"background":"#63AEBF"});
       $(".right").css({"background":"#608BA6"});
       $(".msg-area").css({"background":"#608BA6"});
       $(".recieved p" ).css({"background":"#63AEBF"});
       $(".contact-buttom" ).css({"box-shadow":"0px 0px 2px 4px #A7C6D98e"});
     })
   })
   $(document).ready(function(){
    $('#toggle1').click(function(){
      $("#toggle2").css({"display":"inline-block"});
      $("#toggle1").css({"display":"none"});
      $("body").css({"background":"#151226"});
       $(".contact").css({"background":"#A68A99"});
       $(".right").css({"background":"#615A73"});
       $(".msg-area").css({"background":"#615A73"});
       $(".recieved p" ).css({"background":"#A68A99"});
       $(".contact-buttom" ).css({"box-shadow":"0px 0px 2px 4px #15122662"});
    })
  })
  var x = window.matchMedia("(max-width: 905px)");


 if(x.matches){
  $(".user-contact").click(function(){
   $('.left').css({"display":"none"});
   $('.right').css({"display":"block"});

  });
}
if(x.matches){
  $(".back").click(function(){
   $('.left').css({"display":"block"});
   $('.right').css({"display":"none"});

  });
}