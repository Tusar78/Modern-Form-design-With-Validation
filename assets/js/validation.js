$(function() {

    $('#emailMessege').hide();

    function emailValidator () {

        var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        var emailvalue = $('#email').val();

        if(pattern.test(emailvalue) == false) {
            $('#email').css({
                "border" : '1px solid red'
            })
            $('#emailMessege').html('Invalid Email').show();

        } else {
            $('#emailMessege').hide()
            $('#email').css({
                "border" : '1px solid #ddd'
            })
        }
    }

    $('#email').blur(function() {
        emailValidator();
    })

    $('#showHide').click(function() {
        var imgSrc = $(this).attr('src');
        if(imgSrc == 'assets/images/hide.png') {
            $(this).attr('src','assets/images/show.png')
        } else {
            $(this).attr('src','assets/images/hide.png')
        }

        var mypas = $('#password').attr('type');
        if(mypas == 'password'){
            $('#password').attr('type','text');
        } else {
            $('#password').attr('type','password');
        }
    })

    $('#password').keydown(function() {
        var pasleng = $(this).val().length;
        if(pasleng < 6) {
            $('#emailMessege1').html('Please type minimum 6 charecter');
            $('#emailMessege1').show()
        } else {
            $('#emailMessege1').fadeOut(500)
        }
        
    })
})