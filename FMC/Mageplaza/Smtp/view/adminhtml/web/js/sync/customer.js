/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Smtp
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */
define([
    "jquery",
], function ($) {
    "use strict";

    $.widget('mageplaza.synccustomer', {
        options: {
            ajaxUrl: '',
            websiteId: '',
            storeId: '',
            estimateUrl: '',
            buttonElement: '#email_marketing_general_synchronization_sync_customer'
        },
        currentResult: {},
        totalSync: 0,

        _create: function () {
            var self = this;

            $(this.options.buttonElement).click(function (e) {
                e.preventDefault();
                 self._ajaxSubmit();
            });
        },

        /**
         * @param classCss
         * @param message
         */
        showMessage: function (classCss, message) {
            var messageElement = $("#mp-sync .message");

            messageElement.removeClass('message-error message-success message-notice');
            $("#mp-sync .message-text strong").text(message);
            messageElement.addClass(classCss).show();
        },

        syncData: function (start) {
            var end  = start + 100;
            var ids  = this.currentResult.ids.slice(start, end);
            var self = this;
            var percent, percentText;

            $.ajax({
                url: this.options.ajaxUrl,
                type: 'post',
                dataType: 'json',
                data: {
                    ids: ids,
                },
                success: function (result) {
                    if(result.status){
                        percent = ids.length / self.currentResult.total * 100;

                        self.totalSync += result.total;
                        percent     = percent.toFixed(2);

                        self.currentResult.percent += parseFloat(percent);
                        if (self.currentResult.percent > 100) {
                            self.currentResult.percent = 100;
                        }
                        
                        percentText = self.currentResult.percent.toFixed(2) + '%';
                        if(percentText === '100.00%' || self.totalSync === self.currentResult.total){
                            percentText = '100%';
                            $(self.options.buttonElement).removeClass('disabled');
                        }

                        $(".progress-bar").css('width', percentText);
                        $("#sync-percent").text(
                            percentText + ' (' + self.totalSync + '/' + self.currentResult.total + ')'
                        );
                        if (end < self.currentResult.total) {
                            self.syncData(end);
                        } else {
                            $('#syncing').hide();
                            self.showMessage('message-success', self.options.successMessage);
                        }
                    }else{
                        self.showMessage('message-error', result.message);
                        $(self.options.buttonElement).removeClass('disabled');
                    }
                }
            });
        },

        _ajaxSubmit: function () {
            var self = this;

            this.currentResult = {};
            $.ajax({
                url: this.options.estimateUrl,
                data: {
                    websiteId: this.options.websiteId,
                    storeId:  this.options.storeId
                },
                dataType: 'json',
                showLoader: true,
                success: function (result) {
                    if (result.status) {
                        self.currentResult = result;
                        $("#mp-sync .message").hide();

                        if (self.currentResult.total > 0) {
                            $("#sync-percent").text('0%');
                            $(".progress-bar").removeAttr('style');
                            self.currentResult.percent = 0;
                            $("#progress-content").show();
                            self.totalSync = 0;
                            $('#syncing').show();
                            $(self.options.buttonElement).addClass('disabled');
                            self.syncData(0);

                        } else {
                            self.showMessage('message-notice', result.message);
                            $(self.options.buttonElement).removeClass('disabled');
                            $("#progress-content").hide();
                        }

                    } else {
                        self.showMessage('message-error', result.message);
                        $(self.options.buttonElement).removeClass('disabled');
                        $("#progress-content").hide();
                    }
                }
            });
        }
    });

    return $.mageplaza.synccustomer;
});
