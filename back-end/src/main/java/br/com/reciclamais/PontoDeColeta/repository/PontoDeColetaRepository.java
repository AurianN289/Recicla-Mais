package br.com.reciclamais.PontoDeColeta.repository;

import br.com.reciclamais.PontoDeColeta.entity.PontoDeColeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PontoDeColetaRepository extends JpaRepository<PontoDeColeta, Long> {

}
