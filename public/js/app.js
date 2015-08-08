/*jQuery,Handlebars*/

(function ($) {
    "use strict";

    var test_app = {
        api_base: "http://jsonplaceholder.typicode.com/",
        init: function()
        {
            $('button.get-posts').click(test_app.get_posts);
            $('button.get-albums').click(test_app.get_albums);
            $('button.get-todos').click(test_app.get_todos);
        },

        get_posts: function()
        {
            $.getJSON(
                test_app.api_base + 'posts?userId=' + $(this).data('id'),
                function( json )
                {
                    test_app.show_handlebars_modal('posts', json);
                }
            )
        },

        get_albums: function()
        {
            $.getJSON(
                test_app.api_base + 'albums?userId=' + $(this).data('id'),
                function( json )
                {
                    test_app.show_handlebars_modal('albums', json);
                    $('.album-container').on('show.bs.collapse', test_app.get_photos);
                }
            )
        },

        get_todos: function()
        {
            var $ul = $('ul.task-list[data-id="' + $(this).data('id') + '"]');
            console.log($ul);
            $ul.empty();

            $.getJSON(
                test_app.api_base + 'todos/?userId=' + $(this).data('id') + '&completed=false',
                function(json)
                {
                    $(json).each(
                        function()
                        {
                            var $li = $('<li>');
                            var $a = $('<a>')
                                    .attr('href', '#')
                                    .text($(this)[0].title);
                            $li.append($a);
                            $ul.append($li);
                        }
                    )
                }
            )
        },

        get_photos: function()
        {
            var album_id = $(this).data('id');
            $.getJSON(
                test_app.api_base + 'photos?albumId=' + album_id,
                function( json )
                {
                    var counter = 0;
                    var $indicators = $('ol[data-album_id="' + album_id + '"]');
                    var $container = $('div.carousel-inner[data-album_id="' + album_id + '"]');


                    $(json).each(
                        function()
                        {
                            var $li = $('<li>')
                                .attr('data-target', "carousel" + album_id)
                                .attr('data-slide-to', counter);


                            $indicators.append($li);

                            var $img_div = $('<div>').addClass('item');
                            var $img = $('<img>')
                                .attr('src', $(this)[0].url)
                                .attr('alt', $(this)[0].title);

                            var $caption = $('<div>')
                                .addClass('carousel-caption');

                            $caption
                                .append('<h3>')
                                .html($(this)[0].title);


                            $img_div.append($img);
                            $img_div.append($caption);
                            $container.append($img_div);

                            if( ! counter )
                            {
                                $li.addClass('active');
                                $img_div.addClass('active');
                            }

                            counter = counter + 1;
                        }
                    )
                }
            );
        },

        show_handlebars_modal: function(template, data) {
            $('.modal').remove();
            var html = Handlebars.templates[template](data);
            $('body').append(html);
            $('.modal').modal();
        }
    };

    $(document).ready(function ()
    {
        test_app.init();
    });
}(jQuery));