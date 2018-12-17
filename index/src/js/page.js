require(['./js/config.js'], function() {
    require(['jquery'], function($) {
        $.ajax({
            url: '/users/',
            dataType: 'json',
            success: function(res) {
                console.log(res)
            }
        })
    })
})