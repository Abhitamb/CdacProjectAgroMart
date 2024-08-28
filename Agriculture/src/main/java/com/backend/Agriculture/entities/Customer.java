package com.backend.Agriculture.entities;

import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @Column(length = 30)
    @NotBlank(message = "Name must be supplied")
    private String name;

    private String city;

    @Column(unique = true)
    @NotBlank(message = "Email is required")
    @Length(min = 5, max = 25, message = "Invalid Email Length")
    @Email(message = "Invalid email format")
    private String email;

    private String password;

    private long phone;

    private String gender;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_timestamp", insertable = true, updatable = false)
    private Date createdTimestamp = new Date();

    @Override
    public String toString() {
        return "Customer [id=" + id + ", name=" + name + ", city=" + city + ", email=" + email + 
               ", gender=" + gender + ", password=" + (password != null ? "*****" : "null") +
               ", phone=" + phone + ", createdTimestamp=" + createdTimestamp + "]";
    }
}
