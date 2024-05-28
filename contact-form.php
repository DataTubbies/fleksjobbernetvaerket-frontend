<?php
/*
Plugin Name: Custom Contact Form
Description: Custom endpoint for handling contact form submissions.
Version: 1.0
Author: Yousra Diab
*/

function handle_contact_form() {
    $response = array();

    // Get the JSON POST data
    $post_data = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize form data
    $firstName = isset($post_data['firstName']) ? sanitize_text_field($post_data['firstName']) : '';
    $lastName = isset($post_data['lastName']) ? sanitize_text_field($post_data['lastName']) : '';
    $company = isset($post_data['company']) ? sanitize_text_field($post_data['company']) : '';
    $email = isset($post_data['email']) ? sanitize_email($post_data['email']) : '';
    $phone = isset($post_data['phone']) ? sanitize_text_field($post_data['phone']) : '';
    $subject = isset($post_data['subject']) ? sanitize_text_field($post_data['subject']) : '';
    $message = isset($post_data['message']) ? sanitize_textarea_field($post_data['message']) : '';

    // Log data to debug (optional, remove in production)
    error_log('Received Form Data: ' . print_r($post_data, true));

    // Prepare email
    $to = 'info@fleksjobbernetvaerket.dk';
    $email_subject = 'Ny kontaktform modtaget på Fleksjobbernetværket: ' . $subject;
    $body = "Navn: $firstName $lastName\nVirksomhed/Organisation: $company\nEmail: $email\nTelefon: $phone\nEmne: $subject\nBesked: $message";
    $headers = array('Content-Type: text/plain; charset=UTF-8');

    // Log email content to debug (optional, remove in production)
    error_log('Email Body: ' . $body);

    // Send email
    $mail_sent = wp_mail($to, $email_subject, $body, $headers);

    // Return response
    if ($mail_sent) {
        $response['status'] = 'success';
        $response['message'] = 'Email sent successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to send email';
    }

    wp_send_json($response);
}

function add_cors_support() {
    // Allow from any origin
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        }
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }
        exit(0);
    }
}

add_action('rest_api_init', 'add_cors_support');

add_action('rest_api_init', function() {
    register_rest_route('wp/v2', '/kontakt', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form',
    ));
});