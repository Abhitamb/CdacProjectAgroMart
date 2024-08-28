package com.backend.Agriculture.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {
    private String email;
    private String password;

    @Override
    public String toString() {
        return "LoginDTO [email=" + email + ", password=" + (password != null ? "*****" : "null") + "]";
    }
}
