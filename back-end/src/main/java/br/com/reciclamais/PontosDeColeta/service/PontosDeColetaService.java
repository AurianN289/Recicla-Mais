package br.com.reciclamais.PontosDeColeta.service;

import br.com.reciclamais.PontosDeColeta.entity.PontoDeColeta;
import br.com.reciclamais.PontosDeColeta.repository.PontosDeColetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PontosColetaService implements PontosDeColetaIService {

    @Autowired
    private PontosDeColetaRepository pontoColetaRepository;

    public PontoColetaService(PontosDeColetaRepository pontoColetaRepository) {
        this.pontoColetaRepository = pontoColetaRepository;
    }

    @Override
    public void save(PontoDeColeta pontoColeta) throws RuntimeException {
        if (pontoColeta == null) {
            throw new RuntimeException("dados vazios");
        } else if (pontoColeta.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            pontoColetaRepository.save(pontoColeta);
        }
    }

    @Override
    public List<PontoDeColeta> findAll() throws RuntimeException {
        return pontoColetaRepository.findAll();
    }
}
