// viet code theo thu vien jQuery
// ham khoi tao trong jQuery
// muc dich : doi DOM HTML load xong

$(document).ready(function(){
    // tat ca code JQ se viet trong nay
    // $ === jQuery
    /*
    $('.btn').click(function(){
        alert('Hi you');
    });
    */

    // $('.btn')tim phan tu co class la 'btn'
    // $('#btn') : tim phan tu co id la 'btn'
    // click : event - su kien tac dong vao phan tu html
    // function: hanh dong thuc thi logic cho event  - su kien

    $('#btn').on('click', function(){
        //alert('Hi you');
        // lay ra gia cua thuoc tinh cua phan tu
        // lay ra gia tri thuoc tinh cua the h1
        let title = $('#title').attr('class');
        //console.log(title);
        // xoa bo di thuoc tinh
        $('img').removeAttr('src');
    });

    $('#removeClass').click(function(){
        // kiem tra gia tri class ton tai ko ?
        if($('.content').hasClass('box')){
            // xoa gia tri cua class
            $('.content').removeClass('box');
        }
    });

    $('#addClass').click(function(){
        if(!$('.content').hasClass('box')){
            $('.content').addClass('box');
        }
    })

    $('#toggleClass').click(function(){
        // neu ton tai gia tri class thi no se xoa va nguoc lai
        $('.content').toggleClass('box');
        let data = $('input[class="input-text"]').val().trim();
        // val(): lay gia tri
        // trim(): xoa khoang trang
        console.log(data);
    });

    $('#addCSS').click(function(){
        $('.content').css({
            width: '200px',
            height: '200px',
            backgroundColor: 'red',
            border: '3px solid yellow',
            padding: '20px'
        });
    });

    $('#wh').click(function(){
        // thiet lap width va height
        $('.content').width(400);
        $('.content').height(400);

        let w = $('.content').width();// lay ra do rong
        let h = $('.content').height(); // lay ra do cao
        console.log(w, h);
    });

    $('#inwh').click(function(){
        let inw = $('.content').innerWidth();
        let inh = $('.content').innerHeight();
        console.log(inw, inh);
    });

    // tim phan tu vi tri so bao nhieu
    $('ul.nav__list li').eq(3).css('color', 'red');

    $('#check').click(function(){
        if($('input[type="checkbox"]').is(':checked')){
            console.log('Da tich chon')
        }  else {
            console.log('Chua tich chon');
        }
    });
    // xuat phat tu 1 thanh phan ben ngoai chi tim thanh phan ben trong 
    $('section.context').find('div.context_box > h3').css('color', 'blue');

    // phan tu lien ke sau
    $('section.context').find('div.context_box > h3').next().css('color', 'red');
    
    // phan tu lien ke truoc
    $('section.context').find('div.context_box > h3').prev().css('color', 'green');

    $('section.context').find('div.context_box > h3').prev().prev().css('color', 'violet');


    $('#empty').click(function(){
        // xoa noi dung the h1
        $('#text__title').empty();
    });

    $('#delete').click(function(){
        // xoa ca phan tu ra khoi DOM
        $('#text__title').remove();
    });

    $('#html').click(function(){
        
        // gan the html vao 1 phan tu khac
        $('#text__title').html('<p><i>AAAAAAA</i><p>');

        // lay ra noi dung html
        let html = $('#text__title').html();
        console.log(html);
    });

    $('#text').click(function(){
        // gan the html vao 1 phan tu khac
        // $('#text__title').text('<p><i>AAAAAAA</i><p>'); // sai

        // lay ra text - chu ko phai the html
        let text = $('#text__title').text();
        console.log(text);
    })

    ///////////// cac hieu ung trong JQ ///////////////
    $('#fadeOut').click(function(){
        // dua vao thuoc tinh opacity de dieu khien viec hien thi
        $('section.box').fadeOut(5000);
    });

    $('#fadeIn').click(function(){
        $('section.box').fadeIn(5000);
    });

    // tac dong vao chieu rong va chieu cao an/hien phan tu
    $('#hideEl').click(function(){
        $('section.box').hide(5000);
    });

    $('#showEl').click(function(){
        $('section.box').show(5000);
    });


    // tac dong vao chieu cao phan tu
    $('#slideDown').click(function(){
        $('section.box').slideDown(5000);
    });

    $('#slideUp').click(function(){
        $('section.box').slideUp(5000);
    });

    $('#btnToggle').click(function(){
        //$('section.box').fadeToggle(5000);
        $('section.box').slideToggle(5000);
    })
});

/*
$(function(){
    // code JQ o day
});
*/