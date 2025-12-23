package br.com.reciclamais.PontosDeColeta.repository;

import br.com.reciclamais.PontosDeColeta.entity.PontoDeColeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PontosDeColetaRepository extends JpaRepository<PontoDeColeta, Long> {

}
