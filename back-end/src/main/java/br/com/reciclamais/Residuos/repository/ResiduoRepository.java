package br.com.reciclamais.Residuos.repository;

import br.com.reciclamais.Residuos.entity.Residuo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResiduoRepository extends JpaRepository<Residuo, Long>{

}
