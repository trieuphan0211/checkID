package vn.mobileid.checkid.object;

public class MailContact {
    String email;
    String name;
    String company;
    String description;
    String signup;
    String companyUrl;

    public String getSignup() {
        return signup;
    }

    public void setSignup(String signup) {
        this.signup = signup;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCompanyUrl(String companyUrl) {
        this.companyUrl = companyUrl;
    }

    public String getCompanyUrl() {
        return companyUrl;
    }

    public MailContact(String email, String name, String company, String description, String signup,
            String companyUrl) {
        this.email = email;
        this.name = name;
        this.company = company;
        this.description = description;
        this.signup = signup;
        this.companyUrl = companyUrl;
    }

}
