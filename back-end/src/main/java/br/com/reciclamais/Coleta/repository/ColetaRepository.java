package br.com.reciclamais.Coleta.repository;

import br.com.reciclamais.Coleta.entity.Coleta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColetaRepository extends JpaRepository<Coleta,Long> {
}
