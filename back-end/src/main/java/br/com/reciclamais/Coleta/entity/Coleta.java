package br.com.reciclamais.Coleta.entity;


import br.com.reciclamais.Usuario.entity.Usuario;
import br.com.reciclamais.infraestructure.entity.PersistenceEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "coleta")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Coleta extends PersistenceEntity implements Serializable {

    @ManyToOne
    @JoinColumn(name = "usuario")
    private Usuario solicitante;

    @ManyToOne
    @JoinColumn(name = "coletor")
    private Usuario coletor;

    @Column(nullable = false)
    private String tipoResiduo;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private LocalDate dataColeta;


}
