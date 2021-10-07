var app = angular.module("ap", []);

app.controller("con", function ($scope) {

    $scope.transition = function () {
        var count = 1;

        var elements = document.getElementsByClassName("ball");

        var ball_red = angular.element(elements[0]);
        var ball_yellow = angular.element(elements[1]);
        var ball_green = angular.element(elements[2]);

        function colorRed() {
            if (count == 1) {
                ball_red.addClass('on');
                ball_red.removeClass('off');
                ball_yellow.addClass('off');
                ball_yellow.removeClass('on');
                ball_green.addClass('off');
                ball_green.removeClass('on');
                count += 2;
            }
        }
        window.setInterval(colorRed, 1000);
        window.clearInterval(colorRed);

        function colorYellow() {
            if (count == 2) {
                ball_red.addClass('off');
                ball_red.removeClass('on');
                ball_yellow.addClass('on');
                ball_yellow.removeClass('off');
                ball_green.addClass('off');
                ball_green.removeClass('on');
                count -= 1;
            }
        }
        window.setInterval(colorYellow, 1000);
        window.clearInterval(colorYellow);

        function colorGreen() {
            if (count == 3) {
                ball_red.addClass('off');
                ball_red.removeClass('on');
                ball_yellow.addClass('off');
                ball_yellow.removeClass('on');
                ball_green.addClass('on');
                ball_green.removeClass('off');
                count -= 1;
            }
        }
        window.setInterval(colorGreen, 3000);
        window.clearInterval(colorGreen);
    }

});