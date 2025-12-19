package br.com.reciclamais.Residuos.service;

import br.com.reciclamais.Residuos.entity.Residuo;
import br.com.reciclamais.Residuos.repository.ResiduoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResiduoService implements ResiduoIService {

    @Autowired
    private ResiduoRepository residuoRepository;

    public ResiduoService(ResiduoRepository residuoRepository) {
        this.residuoRepository = residuoRepository;
    }

    @Override
    public void save(Residuo residuo) throws RuntimeException {
        if (residuo == null) {
            throw new RuntimeException("dados vazios");
        } else if (residuo.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            residuoRepository.save(residuo);
        }
    }

    @Override
    public List<Residuo> findAll() throws RuntimeException {
        return residuoRepository.findAll();
    }
}
