/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.mobileid.checkid.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.mobileid.checkid.object.MailContact;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/**
 *
 * @author Ngọc Triệu
 */
@RestController
@RequestMapping("/")
public class MainController {
    @Value("${mail.host}")
    private  String host_name;

    @Value("${mail.user}")
    private  String user_name;

    @Value("${mail.password}")
    private  String mail_password;

    @Value("${mail.to}")
    private  String mail_to;

//    @Value("${AUTH}")
//    private String mail_auth;
//
//    @Value("${STARTYLS}")
//    private String mail_startyls;

    @Value("${mail.port}")
    private int mail_port;

    @PostMapping("/sendmail")
    public String SendMail(@RequestBody String email, HttpServletRequest request,@RequestHeader("X-XSRF-TOKEN") String csrfToken, @RequestHeader("Cookie") String cookiesHeader) {
        System.out.println("csrfToken: " + csrfToken);
        HttpSession httpSession = request.getSession();
        System.out.println("csrfToken of HTTP: " +cookiesHeader.split(";")[0].split("=")[1]);
        if(!csrfToken.equals(cookiesHeader.split(";")[0].split("=")[1]) || cookiesHeader.split(";")[0].split("=")[1] == null || csrfToken.isEmpty()){
            System.out.println("csrfToken: " + csrfToken);
            return "warning";
        }
        String result;
        JSONObject json = new JSONObject(email);
        System.out.println("email: " + json.getString("email"));
        // Get the session object
        String msg = json.getString("email").replace("content=", "");

        Properties props = new Properties();
        props.put("mail.smtp.host", host_name);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.port", mail_port);
        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(user_name, mail_password);
                    }
                });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user_name));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(mail_to));
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
    public String SendContactCrtl(@ModelAttribute MailContact content,HttpServletRequest request,@RequestHeader("X-XSRF-TOKEN") String csrfToken, @RequestHeader("Cookie") String cookiesHeader) {
        System.out.println("csrfToken: " + csrfToken);
        HttpSession httpSession = request.getSession();
        System.out.println("csrfToken of HTTP: " +cookiesHeader.split(";")[0].split("=")[1]);
        if(!csrfToken.equals(cookiesHeader.split(";")[0].split("=")[1]) || cookiesHeader.split(";")[0].split("=")[1] == null || csrfToken.isEmpty()){
            System.out.println("csrfToken: " + csrfToken);
            return "warning";
        }
        String result;
        Properties props = new Properties();
        props.put("mail.smtp.host", host_name);
        // props.put("mail.smtp.auth", mail_auth);
        // props.put("mail.smtp.starttls.enable", mail_startyls);
        // props.put("mail.smtp.port", mail_port);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.port", mail_port);

        String msg = "Name: " + content.getName() + "\n" + "Email: " + content.getEmail().replace("%40", "@") +
                "\n" + "Description: " + content.getDescription() + "\n"
                + "Stay informed about identity verification, subscribe for our newsletter: " + content.getSignup()
                + "\n" + "Company: " + content.getCompany() + "\n" + "CompanyURL: " + content.getCompanyUrl();
        System.out.println("msg: " + msg);
        String subject = content.getName() + " - @Check ID";

        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(user_name, mail_password);
                    }
                });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user_name));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(mail_to));
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

        String path = "/home/checkid-info/plugin" + File.separator + folder + File.separator + fileName;
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
