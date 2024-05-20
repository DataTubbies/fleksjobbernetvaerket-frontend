<?php
/*
Plugin Name: Custom Contact Form
Description: Custom endpoint for handling contact form submissions.
Version: 1.0
Author: Yousra Diab
*/

function handle_contact_form() {
    $response = array();

    // Validate and sanitize form data
    $first_name = isset($_POST['firstName']) ? sanitize_text_field($_POST['firstName']) : '';
    $last_name = isset($_POST['lastName']) ? sanitize_text_field($_POST['lastName']) : '';
    $company = isset($_POST['company']) ? sanitize_text_field($_POST['company']) : '';
    $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
    $subject = isset($_POST['subject']) ? sanitize_text_field($_POST['subject']) : '';
    $message = isset($_POST['message']) ? sanitize_textarea_field($_POST['message']) : '';

    // Prepare email
    $to = 'yousserah@gmail.com';
    $email_subject = 'New Contact Form Submission: ' . $subject;
    $body = "Name: $first_name $last_name\nCompany: $company\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = array('Content-Type: text/plain; charset=UTF-8');

    // Log data to debug (optional, remove in production)
    error_log(print_r($_POST, true));
    error_log($body);

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

add_action('rest_api_init', function() {
    register_rest_route('custom/v1', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form',
    ));
});
function add_cors_support() {
    // Allow from your specific origin
    if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] == 'http://localhost:5173') {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }

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
add_action('rest_api_init', 'add_cors_support', 15);

    // Access-Control headers are received during OPTIONS requests

add_action('rest_api_init', function() {
    register_rest_route('custom/v1', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form',
    ));
});

// Hook to add CORS headers
add_action('rest_api_init', function() {
    add_action('rest_pre_serve_request', 'add_cors_headers');
}, 15);
