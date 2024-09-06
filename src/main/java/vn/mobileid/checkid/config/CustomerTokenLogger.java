/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.mobileid.checkid.config;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 *
 * @author Trieu Phan
 */
public class CustomerTokenLogger extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        CsrfToken csrfToken = (CsrfToken) request.getAttribute(CsrfToken.class.getName());

//        CsrfToken csrfToken = new HttpSessionCsrfTokenRepository().loadToken(request);
        // Get the session, but do not create one if it doesn't exist
        HttpSession session = request.getSession(false);

        if (csrfToken != null && session != null) {
//            System.out.println("CSRF token: " + csrfToken.getToken());
//            System.out.println("CSRF parameter name: " + csrfToken.getParameterName());
//            System.out.println("CSRF header name: " + csrfToken.getHeaderName());
            // Set the CSRF token into the session
            session.setAttribute("csrfToken", csrfToken.getToken());
        }

        // Proceed with the filter chain
        filterChain.doFilter(request, response);
    }

}

