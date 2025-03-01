# AI Chatbot for Customer Support

## Plugin Information
- **Plugin Name:** AI Chatbot for Customer Support
- **Plugin URI:** https://layunin.com
- **Description:** An AI-powered chatbot for WordPress that provides 24/7 customer support, answers FAQs, processes orders, and escalates complex issues to human agents.
- **Version:** 1.3
- **Author:** Ross Dalangin
- **Author URI:** https://layunin.com
- **License:** GPL2

## Features
- Provides automated customer support using AI
- Answers FAQs and assists with WooCommerce orders
- Supports OpenAI GPT and Google Gemini AI models
- Escalates complex queries to human agents
- Customizable chatbot interface

## Installation
1. Download the plugin and upload it to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Navigate to **Settings > AI Chatbot** and enter your OpenAI or Google Gemini API key.

## Usage
- The chatbot will automatically appear on your website.
- Customers can interact with it by typing questions into the chat interface.
- The chatbot processes requests using OpenAI or Google Gemini and responds accordingly.
- If the chatbot detects an order inquiry, it will fetch order details from WooCommerce.

## API Integration
### OpenAI API (Primary)
- The chatbot first attempts to process responses using OpenAI's `gpt-3.5-turbo` model.
- Requires an OpenAI API key, which can be configured in the plugin settings.

### Google Gemini API (Fallback)
- If OpenAI quota is exceeded, the chatbot will switch to Google Gemini.
- Requires a Google API key configured in the plugin settings.

## AJAX and API Communication
- The chatbot sends messages via AJAX to `admin-ajax.php`.
- The plugin makes an API call to OpenAI first; if that fails, it switches to Google Gemini.
- Responses are displayed in real-time on the chatbot interface.

## WooCommerce Order Support
- Users can request their order status by providing an order ID.
- The chatbot checks WooCommerce orders and responds with the current status.

## Plugin Settings
- Go to **Settings > AI Chatbot** in the WordPress admin panel.
- Enter your OpenAI API key.
- Enter your Google Gemini API key (optional, used as a backup AI provider).
- Save the settings.

## Troubleshooting
### No Response from Chatbot
- Ensure API keys are correctly entered.
- Check API quota limits for OpenAI and Google Gemini.
- Ensure your WordPress site has internet access.

### Incorrect Order Information
- Ensure the order ID provided is correct.
- Check WooCommerce settings to ensure orders are being processed correctly.

## Future Enhancements
- Support for additional AI models
- Improved UI customization options
- Integration with CRM systems

For further assistance, visit [https://layunin.com](https://layunin.com).
