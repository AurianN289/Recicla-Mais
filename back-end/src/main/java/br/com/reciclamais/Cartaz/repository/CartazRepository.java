package br.com.reciclamais.Cartaz.repository;

import br.com.reciclamais.Cartaz.entity.Cartaz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartazRepository extends JpaRepository<Cartaz, Long> {
}
