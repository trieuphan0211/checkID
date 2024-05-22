/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.mobileid.checkid.controller;

import java.io.IOException;
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.mobileid.checkid.object.MailContact;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletContext;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

/**
 *
 * @author Ngọc Triệu
 */
@RestController
@RequestMapping("/")
public class MainController {
    @Value("${HOST}")
    private static String host_name;

    @Value("${USER}")
    private static String user_name;

    @Value("${PASSWORD}")
    private static String mail_password;

    @Value("${MAILTO}")
    private static String mail_to;

    @Value("${AUTH}")
    private String mail_auth;

    @Value("${STARTYLS}")
    private String mail_startyls;

    @Value("${PORT}")
    private int mail_port;

    @PostMapping("/sendmail")
    public static String SendMail(@RequestBody String email) throws Exception {
        // System.out.println("host name: " + host_name+ "user name:
        // "+user_name+"password: "+mail_password+"to: "+mail_to);
        // String host = host_name;
        // final String user = user_name;
        // final String password = mail_password;
        // String to = mail_to;
        String host = "smtp.zoho.com";
        final String user = "ca.support@mobile-id.vn";
        final String password = "T@mic@8x";
        String to = "thanhtv@mobile-id.vn";
        String result;
        JSONObject json = new JSONObject(email);
        System.out.println("email: " + json.getString("email"));

        // Get the session object
        String msg = json.getString("email").replace("content=", "");

        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.port", 587);
        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(user, password);
                    }
                });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject("Newsletter - @Check ID", "UTF-8");
            message.setContent(msg, "UTF-8");
            message.setText(msg, "UTF-8");

            Transport.send(message);

            System.out.println("message sent successfully...");
            result = "success";

        } catch (MessagingException e) {
            e.printStackTrace();
            result = "warning";
        }
        return result;
    }

    @PostMapping(path = "/sendContact")
    public static String SendContactCrtl(@ModelAttribute MailContact content) throws Exception {
        // String host = host_name;
        // final String user = user_name;
        // final String password = mail_password;
        // String to = mail_to;
        String host = "smtp.zoho.com";
        final String user = "ca.support@mobile-id.vn";
        final String password = "T@mic@8x";
        String to = "thanhtv@mobile-id.vn";
        String result;
        // String msg = content.getName().replace("%40", "@");
        System.out.println("host name: " + host_name);

        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        // props.put("mail.smtp.auth", mail_auth);
        // props.put("mail.smtp.starttls.enable", mail_startyls);
        // props.put("mail.smtp.port", mail_port);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.port", 587);

        String msg = "Name: " + content.getName() + "\n" + "Email: " + content.getEmail().replace("%40", "@") +
                "\n" + "Description: " + content.getDescription() + "\n"
                + "Stay informed about identity verification, subscribe for our newsletter: " + content.getSignup()
                + "\n" + "Company: " + content.getCompany() + "\n" + "CompanyURL: " + content.getCompanyUrl();
        System.out.println("msg: " + msg);
        String subject = content.getName() + " - @Check ID";

        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(user, password);
                    }
                });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(subject, "UTF-8");
            message.setContent(msg, "UTF-8");
            message.setText(msg, "UTF-8");

            Transport.send(message);

            System.out.println("message sent successfully...");
            result = "success";

        } catch (MessagingException e) {
            e.printStackTrace();
            result = "warning";
        }
        return result;

    }

    @Autowired
    private ServletContext servletContext;

    public String DIRECTORY = "/home/dtis/plugin";

    public static MediaType getMediaTypeForFileName(ServletContext servletContext, String fileName) {
        String mineType = servletContext.getMimeType(fileName);
        try {
            MediaType mediaType = MediaType.parseMediaType(mineType);
            return mediaType;
        } catch (Exception e) {
            return MediaType.APPLICATION_OCTET_STREAM;
        }
    }

    @RequestMapping("/plugin/{folder}/{fileName}")
    public ResponseEntity<InputStreamResource> downloadFile(@PathVariable String fileName,
            @PathVariable String folder) throws IOException {

        String path = "/home/dtis/plugin" + File.separator + folder + File.separator + fileName;
        MediaType mediaType = getMediaTypeForFileName(this.servletContext, fileName);
        File file = new File(path);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
        return ResponseEntity.ok()
                // Content-Disposition
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                // Content-Type
                .contentType(mediaType)
                // Contet-Length
                .contentLength(file.length()) //
                .body(resource);
    }
}
