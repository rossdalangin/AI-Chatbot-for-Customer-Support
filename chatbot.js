jQuery(document).ready(function($) {
    var chatbotMessages = $('#chatbot-messages');

    function appendMessage(sender, message) {
        chatbotMessages.append('<div class="' + sender + '-message">' + message + '</div>');
        chatbotMessages.scrollTop(chatbotMessages.prop("scrollHeight"));
    }

    $('#chatbot-send').on('click', function() {
        var userMessage = $('#chatbot-input').val().trim();
        if (userMessage === '') return;

        appendMessage('user', userMessage);
        $('#chatbot-input').val('');

        $.post(aiChatbot.ajax_url, {
            action: 'ai_chatbot_send',
            message: userMessage
        }, function(response) {
            try {
                var jsonResponse = JSON.parse(response);
                if (jsonResponse.response) {
                    appendMessage('bot', jsonResponse.response);
                } else {
                    appendMessage('bot', 'Error: No valid response. Try again.');
                }
            } catch (e) {
                appendMessage('bot', 'Error: Could not process response.');
            }
        }).fail(function() {
            appendMessage('bot', 'Error: Failed to connect to AI.');
        });
    });

    $('#chatbot-input').on('keypress', function(event) {
        if (event.which === 13) {
            $('#chatbot-send').click();
        }
    });
});
