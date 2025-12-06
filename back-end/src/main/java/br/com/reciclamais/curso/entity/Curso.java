
package br.com.reciclamais.curso.entity;

import br.com.reciclamais.infraestructure.entity.PersistenceEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import java.io.Serializable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cursos")
@Getter
@Setter
@NoArgsConstructor
public class Curso extends PersistenceEntity implements Serializable{
    
    
    @Column(name = "nome", nullable = false)
    private String nome;
    
    @Column(name = "cod_curso", nullable = false, unique = true)
    private String codCurso;
    
    @Column(name = "ativo")
    private boolean ativo;
    
}
