package vn.mobileid.checkid.controller;

import vn.mobileid.checkid.object.MailContact;

public class TestController {
    public static void main(String[] args) throws Exception {
        MailContact mailContact = new MailContact("123","123","123","123","Agree");
        String log = MainController.SendContactCrtl(mailContact);
        System.out.println(log);
    }
}
