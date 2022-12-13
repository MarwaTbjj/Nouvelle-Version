package com.Offre_Emploi.Back.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data

public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    private File image;
    private String date_creation;
    @Column(length = 5000)
    private String description;
    private String sous_titre1;
    private String  description1;
    private String sous_titre2;
    private String description2;
    private String sous_titre3;
    private String description3;
    private String sous_titre4;
    private String description4;
    private String sous_titre5;
    private String description5;
}
