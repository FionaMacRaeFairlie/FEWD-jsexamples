

define(['print','jquery','./messages'],
        function (print,jquery, messages) {

    print(messages.getHello());

    if (jQuery) {
        print("jquery is loaded");
    } else {
        print("Not loaded");
    }
    $('#jquery').text('jQuery is loaded');
});
