require(['./js/config.js'], function() {
    require(['jquery', 'dom'], function($, dom) {
        $('.car').on('click', function() {
            if ($(this).attr('data-id') == '1') {
                console.log(0)
                $('.left').removeClass('active');
                $('.rigth').removeClass('active1');
                $(this).attr('data-id', '0');
            }
            $('.left').addClass('active');
            $('.rigth').addClass('active1');
            $(this).attr('data-id', '1');
        })

        //点击查询
        $('.btn').on('click', function() {
            location.href = 'page.html';
        })
    })
})