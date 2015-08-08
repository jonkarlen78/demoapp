/*jQuery,Handlebars*/

(function ($) {
    "use strict";

    var test_app = {
        api_base: "http://jsonplaceholder.typicode.com/",
        init: function()
        {
            console.log(test_app);
            $('button.get-posts').on('click', function()
            {
                $.getJSON(
                    test_app.api_base + 'posts?userId=' + $(this).data('id'),
                    function( json )
                    {
                        test_app.show_handlebars_modal('posts', json);
                    }
                )
            });
        },
        show_handlebars_modal: function(template, data) {
            $('.modal').remove();
            console.log(test_app_hb.templates);
            var html = test_app_hb.templates.posts(data);
            $('body').append(html);
            $('.modal').modal();
        }
    };

    $(document).ready(function ()
    {
        test_app.init();
    });
}(jQuery));