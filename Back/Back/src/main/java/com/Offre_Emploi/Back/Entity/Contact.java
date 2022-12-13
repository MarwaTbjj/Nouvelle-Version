package com.Offre_Emploi.Back.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
public class Contact {

    private String name;
    private String email;
    private String message;
}
