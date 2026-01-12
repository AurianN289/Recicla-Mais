package br.com.reciclamais.PontoDeColeta.service;
import br.com.reciclamais.PontoDeColeta.entity.PontoDeColeta;
import br.com.reciclamais.PontoDeColeta.repository.PontoDeColetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PontoDeColetaService implements PontoDeColetaIService{

    @Autowired
    private PontoDeColetaRepository pontoDeColetaRepository;

    public PontoDeColetaService(PontoDeColetaRepository pontoDeColetaRepository) {
        this.pontoDeColetaRepository = pontoDeColetaRepository;
    }

    @Override
    public void save(PontoDeColeta pontoDeColeta) throws RuntimeException {
        if (pontoDeColeta == null) {
            throw new RuntimeException("dados vazios");
        } else if (pontoDeColeta.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            pontoDeColetaRepository.save(pontoDeColeta);
        }
    }
}
