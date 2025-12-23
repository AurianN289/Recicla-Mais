package br.com.reciclamais.Cartaz.entity;

import br.com.reciclamais.infraestructure.entity.PersistenceEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "cartazes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Cartaz extends PersistenceEntity implements Serializable {

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "conteudo", nullable = false)
    private String conteudo;

    @Column(name = "categoria")
    private String categoria;
}
