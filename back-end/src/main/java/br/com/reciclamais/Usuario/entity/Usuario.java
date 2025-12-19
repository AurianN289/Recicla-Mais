
package br.com.reciclamais.Usuario.entity;

import br.com.reciclamais.infraestructure.entity.PersistenceEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "usuarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Usuario extends PersistenceEntity implements Serializable{

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name = "senha",  nullable = false)
    private String senha;

    @Column(name = "tipousuario",  nullable = false)
    private String tipoUsuario;
    
}
