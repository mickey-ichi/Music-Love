(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .directive('autosize', function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function ($scope, $element, $attr, ngModel) {
                    ngModel.$render = function() {
                        $element.val(ngModel.$modelValue);
                        $element.change();
                        autosize($element);
                    }
                }
            }
        })
})(window.angular);