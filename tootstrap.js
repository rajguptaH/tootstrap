/*!
 * tootstrap.js - A jQuery plugin for creating customizable Bootstrap toast notifications
 * Author: Raj Narayan Gupta
 * GitHub: https://github.com/rajguptah/tootstrap
 * License: MIT
 * Version: 1.0.0
 * Copyright (c) 2024 Raj Narayan Gupta
 */
(function($) {
    $.fn.tootstrap = function(options) {
        var settings = $.extend({
            type: 'info', // info, success, error, warning
            position: 'top-right', // top-left, top-right, bottom-left, bottom-right
            message: 'This is a toast message!',
            title: 'Notification',
            showCancelButton: true,
            showOkButton: true,
            cancelButtonText: 'Cancel',
            okButtonText: 'OK',
            cancelButtonIcon: 'fa fa-times', // FontAwesome icons
            okButtonIcon: 'fa fa-check',
            autoHide: true,
            hideAfter: 3000, // milliseconds
            onOk: function() {},
            onCancel: function() {},
            margin: '1rem',
            padding: '1rem',
            color: '#fff',
            backgroundColor: '#007bff'
        }, options);

        var toast = `
            <div class="toast tootstrap-toast" style="position: fixed; z-index: 1050; display: none;">
                <div class="toast-header">
                    <strong class="mr-auto">${settings.title}</strong>
                    <small>${settings.type.charAt(0).toUpperCase() + settings.type.slice(1)}</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                </div>
                <div class="toast-body">
                    ${settings.message}
                    <div class="toast-buttons">
                        ${settings.showCancelButton ? `<button class="btn btn-secondary tootstrap-cancel"><i class="${settings.cancelButtonIcon}"></i> ${settings.cancelButtonText}</button>` : ''}
                        ${settings.showOkButton ? `<button class="btn btn-primary tootstrap-ok"><i class="${settings.okButtonIcon}"></i> ${settings.okButtonText}</button>` : ''}
                    </div>
                </div>
            </div>`;

        var $toast = $(toast).appendTo('body');
        $toast.css({
            margin: settings.margin,
            padding: settings.padding,
            backgroundColor: settings.backgroundColor,
            color: settings.color
        });

        var positions = {
            'top-right': { top: settings.margin, right: settings.margin },
            'top-left': { top: settings.margin, left: settings.margin },
            'bottom-right': { bottom: settings.margin, right: settings.margin },
            'bottom-left': { bottom: settings.margin, left: settings.margin }
        };
        $toast.css(positions[settings.position]);

        $toast.fadeIn(300);

        if (settings.autoHide) {
            setTimeout(function() {
                $toast.fadeOut(300, function() {
                    $(this).remove();
                });
            }, settings.hideAfter);
        }

        $toast.find('.tootstrap-ok').click(function() {
            settings.onOk();
            $toast.fadeOut(300, function() {
                $(this).remove();
            });
        });

        $toast.find('.tootstrap-cancel').click(function() {
            settings.onCancel();
            $toast.fadeOut(300, function() {
                $(this).remove();
            });
        });

        $toast.find('.close').click(function() {
            $toast.fadeOut(300, function() {
                $(this).remove();
            });
        });

        return this;
    };
})(jQuery);
