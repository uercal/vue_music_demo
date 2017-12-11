/*
    �˲��textarea�ĸ߶��� height:100%; �̳и�Ԫ�صĸ߶� ==> ��Ԫ��ֻ��һ�� position:relative; ���ڶ�λtextarea
    ҳ���м�������������pre��ǩ��pre��ǩ���Կ�Ԫ�ش��ڵĲ��Ҳ��ɼ�������ռ�ÿռ䣬
    ����display:none;ʲô�ռ�Ҳ��ռ��
    ����textarea��Ԫ�صĸ߶���ͨ��pre�ſ���(��textarea����д�����֣����ֻᱻ��ӵ�pre���µ�span��ǩ��Դ����ſ�pre�ĸ߶�)

    Ҫ�ı�textarea��ʼ��ʱ�ĸ߶ȣ�ֻ��ı�pre��paddingֵ���ɣ�ҳ�����ʱpre�������<br />��ǩ��Ϊ����pre��ǩ��ʼʱ�и��߶�
 */
;(function ($) {

    // Constructor
    function FT(elem) {
        this.$textarea = $(elem);

        this._init();
    }

    FT.prototype = {
        _init: function () {
            var _this = this;

            // Insert wrapper elem & pre/span for textarea mirroring
            this.$textarea.wrap('<div class="flex-text-wrap" />').before('<pre class="pre"><span /><br /></pre>');

            this.$span = this.$textarea.prev().find('span');

            // Add input event listeners
            // * input for modern browsers
            // * propertychange for IE 7 & 8
            // * keyup for IE >= 9: catches keyboard-triggered undos/cuts/deletes
            // * change for IE >= 9: catches mouse-triggered undos/cuts/deletions (when textarea loses focus)
            this.$textarea.on('input propertychange keyup change', function () {
                _this._mirror();
            });

            // jQuery val() strips carriage return chars by default (see http://api.jquery.com/val/)
            // This causes issues in IE7, but a valHook can be used to preserve these chars
            $.valHooks.textarea = {
                get: function (elem) {
                    return elem.value.replace(/\r?\n/g, "\r\n");
                }
            };

            // Mirror contents once on init
            this._mirror();
        }

        // Mirror pre/span & textarea contents
        ,_mirror: function () {
            this.$span.text(this.$textarea.val());
        }
    };

    // jQuery plugin wrapper
    $.fn.flexText = function () {
        return this.each(function () {
            // Check if already instantiated on this elem
            if (!$.data(this, 'flexText')) {
                // Instantiate & store elem + string
                $.data(this, 'flexText', new FT(this));
            }
        });
    };

})(jQuery);