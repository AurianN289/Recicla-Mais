package br.com.reciclamais.Coleta.service;

import br.com.reciclamais.Coleta.entity.Coleta;

import java.util.List;

public interface ColetaIService {
    void save(Coleta coleta) throws RuntimeException;

    List<Coleta> findAll() throws RuntimeException;
}
